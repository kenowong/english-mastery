/**
 * dl_batch.js —— 批量下载国家平台课时（匿名，无需登录）
 *
 * 原理同 dl_one_lesson.js：私有 CDN 的 .ts 切片公开、且整课共用一套签名，仅末尾 5 位序号不同。
 * 只要每节课给「一个切片 URL」（或「课时前缀」），即可枚举下完整课。
 *
 * 输入：tools/ts_list.txt，一行一条，支持三种写法（# 开头为注释）：
 *   1) 完整切片 URL：   https://r3-ndr-private.../videos/<长名>-00023.ts
 *   2) 课时前缀：        https://r3-ndr-private.../videos/<长名>       （不带 -NNNNN.ts）
 *   3) 上面任意一种 + 竖线 + 课时名：  ...-00023.ts|四年级上 Unit1 第1课时
 *
 * 用法：
 *   node tools/dl_batch.js                       # 用默认清单 tools/ts_list.txt
 *   node tools/dl_batch.js --file 别的清单.txt
 *   node tools/dl_batch.js --dry                 # 只解析清单、报告有多少课，不下载
 *   node tools/dl_batch.js --no-merge            # 不生成 full.ts（省磁盘）
 *
 * 产出：videos/<课时名或 hash>/  seg-NNNNN.ts + playlist.m3u8 + full.ts
 *       videos/index.json        全部课时清单（供 App/同步课堂读取）
 */
const fs = require('fs');
const path = require('path');
const https = require('https');

const ARGS = process.argv.slice(2);
function argVal(k, d) { const i = ARGS.indexOf(k); return i >= 0 ? ARGS[i + 1] : d; }
const LIST_FILE = argVal('--file', path.join(__dirname, 'ts_list.txt'));
const DRY = ARGS.includes('--dry');
const MERGE = !ARGS.includes('--no-merge');
const SEG_CONC = 12;      // 单课内并行切片数
const LESSON_GAP = 300;   // 课与课之间间隔(ms)，别把 CDN 打太急

const VIDEO_ROOT = path.join(__dirname, '..', 'videos');

// ---------- HTTP ----------
function probeStatus(url) {
  return new Promise((resolve) => {
    const req = https.get(url, { timeout: 15000 }, (res) => { req.destroy(); resolve(res.statusCode); });
    req.on('error', () => resolve(0));
    req.on('timeout', () => { req.destroy(); resolve(0); });
  });
}
function getToFile(url, file) {
  return new Promise((resolve) => {
    const req = https.get(url, { timeout: 60000 }, (res) => {
      if (res.statusCode !== 200) { res.resume(); return resolve(res.statusCode); }
      const ws = fs.createWriteStream(file);
      res.pipe(ws);
      ws.on('finish', () => resolve(200));
      ws.on('error', () => resolve(0));
    });
    req.on('error', () => resolve(0));
    req.on('timeout', () => { req.destroy(); resolve(0); });
  });
}

// ---------- 清单解析 ----------
function parseList(txt) {
  const items = [];
  for (const raw of txt.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const parts = line.split('|');
    let url = parts[0].trim();
    const name = (parts[1] || '').trim();
    // 去掉 -NNNNN.ts 后缀得到前缀
    let prefix = url.replace(/-(\d{5})\.ts$/, '');
    // 有些直接粘的是带 query 的，截断
    prefix = prefix.replace(/\?.*$/, '');
    if (!/^https?:\/\//.test(prefix)) continue;
    const m = url.match(/\/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})-/i);
    const segId = m ? m[1].slice(0, 8) : String(items.length + 1);
    items.push({ prefix, name: name || ('lesson_' + segId), segHint: m ? m[1] : '' });
  }
  // 按前缀去重
  const seen = new Set();
  return items.filter((it) => (seen.has(it.prefix) ? false : (seen.add(it.prefix), true)));
}

function safeDir(name) {
  return name.replace(/[\\/:*?"<>|\s]+/g, '_').replace(/_+/g, '_').slice(0, 60) || 'lesson';
}

// ---------- 单课下载 ----------
function segUrl(prefix, i) { return `${prefix}-${String(i).padStart(5, '0')}.ts`; }

async function findLast(prefix) {
  let hi = 4096;
  let guard = 0;
  while ((await probeStatus(segUrl(prefix, hi))) === 200) { hi *= 2; if (++guard > 6) break; }
  let lo = 0;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if ((await probeStatus(segUrl(prefix, mid))) === 200) lo = mid; else hi = mid - 1;
  }
  return lo;
}

async function downloadLesson(item) {
  const dir = path.join(VIDEO_ROOT, safeDir(item.name));
  fs.mkdirSync(dir, { recursive: true });

  // 断点续传：已存在且非空的切片跳过
  const last = await findLast(item.prefix);
  if (last <= 0 && (await probeStatus(segUrl(item.prefix, 0))) !== 200) {
    return { ok: false, reason: '第 0 片 403，链接可能失效', dir };
  }
  const total = last + 1;

  let idx = 0, okCount = 0, skipCount = 0;
  await new Promise((resolveAll) => {
    let active = 0, started = 0;
    function pump() {
      if (idx > last) { if (active === 0) resolveAll(); return; }
      const cur = idx++;
      const file = path.join(dir, `seg-${String(cur).padStart(5, '0')}.ts`);
      started++; active++;
      const done = (st) => {
        active--;
        if (st === 200) okCount++;
        else if (st === 'skip') skipCount++;
        else console.warn(`    seg ${cur} 状态 ${st}`);
        if (started % 40 === 0) process.stdout.write(`.`);
        pump();
      };
      if (fs.existsSync(file) && fs.statSync(file).size > 0) return done('skip');
      getToFile(segUrl(item.prefix, cur), file).then(done);
    }
    if (total <= 0) return resolveAll();
    for (let k = 0; k < SEG_CONC; k++) pump();
  });

  // 本地 m3u8
  const segs = fs.readdirSync(dir).filter(f => /^seg-\d{5}\.ts$/.test(f)).sort();
  let m3 = '#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-TARGETDURATION:12\n';
  for (const s of segs) m3 += `#EXTINF:10.0,\n${s}\n`;
  m3 += '#EXT-X-ENDLIST\n';
  fs.writeFileSync(path.join(dir, 'playlist.m3u8'), m3, 'utf8');

  // 合并 full.ts
  let bytes = 0;
  for (const s of segs) bytes += fs.statSync(path.join(dir, s)).size;
  if (MERGE) {
    const ws = fs.createWriteStream(path.join(dir, 'full.ts'));
    for (const s of segs) ws.write(fs.readFileSync(path.join(dir, s)));
    await new Promise(r => ws.end(r));
  }
  return { ok: true, dir, segs: segs.length, bytes, name: item.name };
}

(async () => {
  if (!fs.existsSync(LIST_FILE)) {
    console.error('找不到清单文件：' + LIST_FILE);
    console.error('新建它，一行一条切片 URL（或课时前缀），可加 |课时名');
    process.exit(1);
  }
  const items = parseList(fs.readFileSync(LIST_FILE, 'utf8'));
  console.log(`清单 ${path.basename(LIST_FILE)} → 解析出 ${items.length} 节课（已按前缀去重）`);
  items.forEach((it, n) => console.log(`  ${n + 1}. ${it.name}  ${it.prefix.slice(-70)}`));
  if (DRY) { console.log('\n--dry：只解析不下载。'); return; }
  if (!items.length) return;

  const manifest = [];
  for (let n = 0; n < items.length; n++) {
    const it = items[n];
    console.log(`\n[${n + 1}/${items.length}] 开始《${it.name}》...`);
    try {
      const r = await downloadLesson(it);
      if (r.ok) {
        console.log(`\n  完成：${r.segs} 片 / ${(r.bytes / 1048576).toFixed(1)} MB → videos/${path.basename(r.dir)}`);
        manifest.push({ title: it.name, dir: path.relative(VIDEO_ROOT, r.dir).replace(/\\/g, '/'), segs: r.segs, bytes: r.bytes, prefix: it.prefix });
      } else {
        console.log(`\n  失败：${r.reason}`);
        manifest.push({ title: it.name, dir: '', segs: 0, bytes: 0, prefix: it.prefix, error: r.reason });
      }
    } catch (e) {
      console.log(`\n  异常：${e.message}`);
      manifest.push({ title: it.name, dir: '', segs: 0, bytes: 0, prefix: it.prefix, error: e.message });
    }
    // 合并已有 index.json
    try {
      const p = path.join(VIDEO_ROOT, 'index.json');
      const prev = fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : [];
      const map = new Map(prev.map(x => [x.prefix, x]));
      manifest.forEach(x => map.set(x.prefix, x));
      fs.writeFileSync(p, JSON.stringify([...map.values()], null, 2), 'utf8');
    } catch (e) {}
    if (n < items.length - 1) await new Promise(r => setTimeout(r, LESSON_GAP));
  }
  const okN = manifest.filter(m => m.bytes > 0).length;
  const mb = manifest.reduce((s, m) => s + m.bytes, 0) / 1048576;
  console.log(`\n全部结束：成功 ${okN}/${manifest.length} 课，合计 ${mb.toFixed(1)} MB`);
  console.log('清单已写入 videos/index.json');
})().catch(e => { console.error('ERR', e); process.exit(1); });
