/*
 * fetch_courses.js —— 用你登录后的 token，从国家中小学智慧教育平台拉取
 * 「人教版 PEP（三年级起点）四年级 上/下册」的真实课程目录，写入 js/courses.js。
 *
 * 为什么需要 token：平台「课时视频地址」在登录态受保护的对象存储上（实测匿名 403），
 * 公开接口只能拿到教材清单、拿不到课时明细。所以这一步必须用你自己的登录态。
 *
 * 用法：
 *   1) 浏览器登录 https://basic.smartedu.cn/ 后按 F12 → Console 执行：
 *        copy(localStorage.getItem("ND_UC_AUTH-" + Object.keys(localStorage).find(k=>k.startsWith("ND_UC_AUTH")).split("&ncet-xedu&token")[0].split("ND_UC_AUTH-")[1] + "&ncet-xedu&token"))
 *      或更直接：在 Console 里先跑 Object.keys(localStorage).filter(k=>k.startsWith("ND_UC_AUTH"))
 *      找到那个 key，再 copy(localStorage.getItem("那个key"))，把复制到的字符串存成本文件同目录 .token.txt
 *   2) node tools/fetch_courses.js
 *
 * 说明：脚本会把原始 detail JSON 存到 tools/_p4a_raw.json / _p4b_raw.json 方便排错；
 * 若自动解析出来的单元/课时或视频地址不对，把这两个 raw 文件发我，我按真实结构精修解析。
 */
const fs = require('fs');
const https = require('https');
const path = require('path');
const dir = path.resolve(__dirname, '..');

const MATERIALS = [
  { grade: 'g4', vol: 'a', label: '上册', id: '42ffa88d-2543-40d0-d69c-e5b5f065eae3' },
  { grade: 'g4', vol: 'b', label: '下册', id: '4901535c-9ae2-458e-bc0e-e5ed3f7a081d' },
];

function loadToken() {
  const p = path.join(__dirname, '.token.txt');
  if (fs.existsSync(p)) return fs.readFileSync(p, 'utf8').trim();
  if (process.env.SMARTEDU_TOKEN) return process.env.SMARTEDU_TOKEN.trim();
  return '';
}

function getHeaders(token) {
  const h = { 'User-Agent': 'Mozilla/5.0', 'Referer': 'https://basic.smartedu.cn/' };
  if (!token) return h;
  if (token.indexOf('=') >= 0) h['Cookie'] = token;          // 用户粘了完整 cookie
  else h['X-Nd-Auth'] = token;                                // 用户只粘了 token 值
  return h;
}

function fetchDetail(id, token) {
  return new Promise((resolve, reject) => {
    const url = 'https://s-file-2.ykt.cbern.com.cn/zxx/ndrv2/national_lesson/resources/details/' + id + '.json';
    const r = https.get(url, { headers: getHeaders(token) }, resp => {
      let d = Buffer.alloc(0);
      resp.on('data', c => d = Buffer.concat([d, c]));
      resp.on('end', () => resolve({ code: resp.statusCode, body: d.toString('utf8') }));
    });
    r.on('error', e => reject(e));
    r.setTimeout(25000, () => { r.destroy(); reject(new Error('timeout')); });
  });
}

// 从 detail JSON 里尽力抽取「单元 → 课时(标题 + 视频地址 + 平台页)」
function parseDetail(json, material) {
  const out = { units: [] };
  if (!json) return out;
  const unitsMap = {};
  function unitKey(title) { return title || '课程'; }

  // 递归找所有含媒体地址的对象
  const mediaRe = /\.m3u8(\?|$)/i;
  function walk(node, chapterTitle) {
    if (Array.isArray(node)) { node.forEach(n => walk(n, chapterTitle)); return; }
    if (node && typeof node === 'object') {
      // 标题字段
      const t = node.title || node.name || node.global_title && (node.global_title['zh-CN'] || node.global_title) || node.chapterTitle || node.display_name;
      const title = typeof t === 'string' ? t : (t && t['zh-CN'] ? t['zh-CN'] : null);
      // 媒体地址
      let media = null;
      const candidates = [];
      if (typeof node.url === 'string') candidates.push(node.url);
      if (typeof node.play_url === 'string') candidates.push(node.play_url);
      if (Array.isArray(node.ti_storages)) node.ti_storages.forEach(s => { if (typeof s === 'string') candidates.push(s); });
      if (Array.isArray(node.resources)) node.resources.forEach(res => { if (res && res.url) candidates.push(res.url); });
      for (const c of candidates) if (mediaRe.test(c)) { media = c; break; }
      if (title && media) {
        const uk = unitKey(chapterTitle || title);
        if (!unitsMap[uk]) unitsMap[uk] = { title: uk, lessons: [] };
        unitsMap[uk].lessons.push({ title: title, m3u8: media, platform: 'https://basic.smartedu.cn/syncClassroom/classActivity?activityId=' + material.id });
      }
      // 章节标题
      const ch = node.chapter_title || node.chapterTitle || node.unit_title;
      const chTitle = typeof ch === 'string' ? ch : null;
      for (const k in node) {
        if (node[k] && typeof node[k] === 'object') walk(node[k], chTitle || chapterTitle);
      }
    }
  }
  walk(json, null);
  out.units = Object.keys(unitsMap).map(k => unitsMap[k]);
  return out;
}

(async () => {
  const token = loadToken();
  if (!token) {
    console.log('✗ 没找到 token。请把浏览器复制到的 ND_UC_AUTH 值存到 tools/.token.txt，或设置环境变量 SMARTEDU_TOKEN。');
    process.exit(1);
  }
  const grades = {};
  for (const m of MATERIALS) {
    console.log('抓取 ' + m.label + ' (' + m.id + ') ...');
    const a = await fetchDetail(m.id, token);
    console.log('  HTTP', a.code, 'len', a.body.length);
    if (a.code !== 200) {
      console.log('  ✗ 抓取失败（多为 token 失效/权限不足）。请确认 .token.txt 是有效的 ND_UC_AUTH 值。');
      fs.writeFileSync(path.join(__dirname, '_p4' + m.vol + '_raw.json'), a.body);
      continue;
    }
    fs.writeFileSync(path.join(__dirname, '_p4' + m.vol + '_raw.json'), a.body);
    let json = null; try { json = JSON.parse(a.body); } catch (e) { console.log('  ✗ JSON 解析失败'); continue; }
    const parsed = parseDetail(json, m);
    console.log('  解析到 ' + parsed.units.length + ' 个单元、' + parsed.units.reduce((s, u) => s + u.lessons.length, 0) + ' 个课时');
    if (!grades[m.grade]) grades[m.grade] = { key: m.grade, label: '四年级', volumes: [] };
    grades[m.grade].volumes.push({ key: m.vol, label: m.label, materialId: m.id, units: parsed.units });
  }

  const gradeList = Object.keys(grades).map(k => grades[k]);
  if (!gradeList.length) { console.log('\n未抓到任何课程，退出。'); process.exit(1); }

  const out = '/* english-mastery · 同步课堂课程数据源（国家中小学智慧教育平台）\n' +
    ' * 由 tools/fetch_courses.js 自动生成，请勿手改；重跑会覆盖。\n' +
    ' */\nwindow.COURSES = ' + JSON.stringify({
      subject: '英语', edition: '人教版 PEP（三年级起点）',
      note: '已拉取真实四年级课程。跑 tools/download_courses.js 把视频下到本地（videos/）即可离线看。',
      grades: gradeList
    }, null, 2) + ';\n';
  fs.writeFileSync(path.join(dir, 'js', 'courses.js'), out);
  console.log('\n✓ 已写入 js/courses.js（' + gradeList.length + ' 个年级）。再跑 download_courses.js 下载视频。');
})();
