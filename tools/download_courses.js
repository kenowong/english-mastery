/*
 * download_courses.js —— 把 js/courses.js 里带 m3u8 的课时视频下载到本地，离线播放。
 *
 * 平台视频在 r-ndr 点播 CDN 上，带 Referer 校验（实测：Referer=basic.smartedu.cn 才放行，
 * 第三方来源 403）。所以下载时自动带 Referer；若仍 403，再用 .token.txt 里的登录 token。
 *
 * 输出：videos/<年级>/<册>/<单元>/<课时>/playlist.m3u8（+ 同目录 .ts 片段），并把该课时的
 *       local 字段写为这个 playlist 的相对路径，App 用 hls.js 直接播（无需 ffmpeg）。
 *       若本机有 ffmpeg 且带 --mp4，则额外封装成 mp4，local 写为 mp4 路径。
 *
 * 用法：
 *   node tools/download_courses.js            # 下载全部
 *   node tools/download_courses.js --mp4      # 有 ffmpeg 时封装 mp4
 *   node tools/download_courses.js --only g4/a # 只下四年级上册
 */
const fs = require('fs');
const https = require('https');
const path = require('path');
const cp = require('child_process');
const vm = require('vm');
const dir = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const FLAG_MP4 = args.includes('--mp4');
const ONLY = (args.find(a => a.startsWith('--only=') || false) || '').replace('--only=', '') || null;

function loadToken() {
  const p = path.join(__dirname, '.token.txt');
  if (fs.existsSync(p)) return fs.readFileSync(p, 'utf8').trim();
  if (process.env.SMARTEDU_TOKEN) return process.env.SMARTEDU_TOKEN.trim();
  return '';
}
function headers(token) {
  const h = { 'User-Agent': 'Mozilla/5.0', 'Referer': 'https://basic.smartedu.cn/' };
  if (token) { if (token.indexOf('=') >= 0) h['Cookie'] = token; else h['X-Nd-Auth'] = token; }
  return h;
}
function get(url, bin) {
  return new Promise((resolve, reject) => {
    const r = https.get(url, { headers: headers(loadToken()) }, resp => {
      if (resp.statusCode !== 200) { resp.resume(); return reject(new Error('HTTP ' + resp.statusCode + ' ' + url)); }
      if (bin) { const ch = []; resp.on('data', c => ch.push(c)); resp.on('end', () => resolve(Buffer.concat(ch))); }
      else { let d = ''; resp.on('data', c => d += c); resp.on('end', () => resolve(d)); }
    });
    r.on('error', e => reject(e));
    r.setTimeout(30000, () => { r.destroy(); reject(new Error('timeout ' + url)); });
  });
}
function hasFfmpeg() { try { cp.execSync('ffmpeg -version', { stdio: 'ignore' }); return true; } catch (e) { return false; } }

// 读 courses.js 得到 COURSES 对象
function loadCourses() {
  const code = fs.readFileSync(path.join(dir, 'js', 'courses.js'), 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);
  return sandbox.window.COURSES;
}
function saveCourses(C) {
  const out = '/* english-mastery · 同步课堂课程数据源（国家中小学智慧教育平台）\n' +
    ' * 由 tools/fetch_courses.js 生成、tools/download_courses.js 补全 local 字段。请勿手改。\n' +
    ' */\nwindow.COURSES = ' + JSON.stringify(C, null, 2) + ';\n';
  fs.writeFileSync(path.join(dir, 'js', 'courses.js'), out);
}

function resolveUrl(base, rel) {
  if (/^https?:\/\//i.test(rel)) return rel;
  const u = new URL(base);
  if (rel.startsWith('/')) return u.origin + rel;
  return base.replace(/[^/]*$/, '') + rel;
}

async function downloadLesson(lesson, outDir) {
  fs.mkdirSync(outDir, { recursive: true });
  let m3u8 = await get(lesson.m3u8, false);
  // 变体清单：选第一个子 m3u8
  const lines = m3u8.split('\n').map(s => s.trim()).filter(Boolean);
  const sub = lines.find(l => l.endsWith('.m3u8'));
  if (sub) { m3u8 = await get(resolveUrl(lesson.m3u8, sub), false); }
  const segLines = m3u8.split('\n');
  const outLines = [];
  let count = 0;
  for (const line of segLines) {
    const t = line.trim();
    if (!t || t.startsWith('#')) { outLines.push(line); continue; }
    if (!/^https?:\/\//i.test(t) && !t.endsWith('.ts') && !t.endsWith('.m4s') && !t.endsWith('.aac') && !t.endsWith('.mp4')) { outLines.push(line); continue; }
    const segUrl = resolveUrl(lesson.m3u8, t);
    const base = path.basename(new URL(segUrl).pathname) || ('seg' + count + '.ts');
    const localName = (count++) + '_' + base.replace(/[^\w.\-]/g, '_');
    const buf = await get(segUrl, true);
    fs.writeFileSync(path.join(outDir, localName), buf);
    outLines.push(localName);
  }
  const playlistPath = path.join(outDir, 'playlist.m3u8');
  fs.writeFileSync(playlistPath, outLines.join('\n'));
  let localRel = path.relative(dir, playlistPath).replace(/\\/g, '/');
  if (FLAG_MP4 && hasFfmpeg()) {
    const mp4 = path.join(outDir, 'video.mp4');
    try {
      cp.execSync('ffmpeg -y -i "' + playlistPath + '" -c copy "' + mp4 + '"', { stdio: 'ignore' });
      localRel = path.relative(dir, mp4).replace(/\\/g, '/');
    } catch (e) { console.log('  ⚠ ffmpeg 封装失败，保留 HLS：' + e.message); }
  }
  return localRel;
}

(async () => {
  const C = loadCourses();
  const token = loadToken();
  if (!C || !C.grades || !C.grades.length) { console.log('✗ js/courses.js 为空或结构不对，先跑 fetch_courses.js。'); process.exit(1); }
  let total = 0, done = 0, skip = 0;
  const jobs = [];
  C.grades.forEach(g => (g.volumes || []).forEach(v => (v.units || []).forEach((u, ui) => (u.lessons || []).forEach((l, li) => {
    if (!l.m3u8) { skip++; return; }
    if (ONLY) { const [og, ov] = ONLY.split('/'); if (g.key !== og || v.key !== ov) return; }
    total++;
    const outDir = path.join(dir, 'videos', g.key, v.key, 'u' + ui, 'l' + li);
    jobs.push({ l, outDir, ref: g.label + ' ' + v.label + ' ' + u.title + ' / ' + l.title });
  }))));
  console.log('待下载 ' + total + ' 个课时（跳过无 m3u8 的 ' + skip + ' 个）。' + (token ? '' : '（无 token，仅靠 Referer 下载）'));
  for (const job of jobs) {
    try {
      const local = await downloadLesson(job.l, job.outDir);
      job.l.local = local;
      done++;
      console.log('  ✓ [' + done + '/' + total + '] ' + job.ref + ' -> ' + local);
    } catch (e) {
      console.log('  ✗ ' + job.ref + ' 失败：' + e.message);
    }
  }
  saveCourses(C);
  console.log('\n完成：成功 ' + done + ' / 共 ' + total + '。js/courses.js 已更新 local 字段，App 即可离线播放。');
})();
