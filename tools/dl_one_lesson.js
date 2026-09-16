/**
 * dl_one_lesson.js —— 用「任一 .ts 切片直链」下载整节课（匿名，无需登录）
 *
 * 原理：国家平台私有 CDN 的切片(.ts)完全公开，且签名整课共用，仅末尾 5 位序号不同。
 *       拿到一节课任一切片 URL，枚举序号即可下完整课；.m3u8 是否可下无所谓。
 *
 * 用法：
 *   node tools/dl_one_lesson.js "<切片URL>" [--out 目录名] [--name 课时名]
 *
 * 产出：videos/<out>/seg-NNNNN.ts  +  playlist.m3u8  +  full.ts（合并版）
 */
const fs = require('fs');
const path = require('path');
const https = require('https');

const URL_ARG = process.argv[2];
if (!URL_ARG) { console.error('用法: node tools/dl_one_lesson.js "<切片URL>" [--out 目录] [--name 课时名]'); process.exit(1); }

let OUT = 'lesson_auto';
let NAME = '课时';
for (let i = 3; i < process.argv.length; i++) {
  if (process.argv[i] === '--out') OUT = process.argv[++i];
  else if (process.argv[i] === '--name') NAME = process.argv[++i];
}

// 解析切片 URL，定位 -NNNNN.ts 序号
const m = URL_ARG.match(/^(.*)-(\d{5})\.ts$/);
if (!m) { console.error('URL 未匹配 -NNNNN.ts 切片格式'); process.exit(1); }
const PREFIX = m[1]; // 含 - 前缀到 segId
function segUrl(i) { return `${PREFIX}-${String(i).padStart(5, '0')}.ts`; }

const ROOT = path.join(__dirname, '..', 'videos', OUT);
fs.mkdirSync(ROOT, { recursive: true });

function head200(url) {
  // 该 CDN 对 HEAD 返回非 200，改用 GET 并在拿到状态码后立即断开（不下载正文）
  return new Promise((resolve) => {
    const req = https.get(url, { timeout: 15000 }, (res) => { req.destroy(); resolve(res.statusCode); });
    req.on('error', () => resolve(0));
    req.on('timeout', () => { req.destroy(); resolve(0); });
  });
}
function getToFile(url, file) {
  return new Promise((resolve) => {
    const req = https.get(url, { timeout: 30000 }, (res) => {
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

async function findUpper() {
  // 先找一个 403 的上界
  let hi = 2000;
  while ((await head200(segUrl(hi))) === 200) { hi *= 2; if (hi > 200000) break; }
  let lo = 0;
  while (lo < hi) { const mid = (lo + hi + 1) >> 1; if ((await head200(segUrl(mid))) === 200) lo = mid; else hi = mid - 1; }
  return lo;
}

async function main() {
  console.log('定位末段序号...');
  const upper = await findUpper();
  console.log('末段序号 =', upper, '（共', upper + 1, '片）');

  console.log('并行下载切片...');
  const CONC = 12;
  let i = 0, done = 0;
  const order = [];
  await new Promise((resolveAll) => {
    function pump() {
      if (i > upper) { if (done >= Math.min(i, upper + 1)) resolveAll(); return; }
      const cur = i++;
      const file = path.join(ROOT, `seg-${String(cur).padStart(5, '0')}.ts`);
      getToFile(segUrl(cur), file).then((st) => {
        if (st === 200) { order.push(cur); done++; if (order.length % 20 === 0) console.log(`  已下 ${order.length}/${upper + 1}`); }
        else console.warn(`  片段 ${cur} 状态 ${st}，跳过`);
        pump();
      });
    }
    for (let k = 0; k < CONC; k++) pump();
  });
  order.sort((a, b) => a - b);
  console.log('实际下载切片数:', order.length);

  // 写本地 m3u8（hls.js 离线播放用）
  let m3 = '#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-TARGETDURATION:12\n';
  for (const idx of order) m3 += `#EXTINF:10.0,\nseg-${String(idx).padStart(5, '0')}.ts\n`;
  m3 += '#EXT-X-ENDSLIST\n';
  fs.writeFileSync(path.join(ROOT, 'playlist.m3u8'), m3, 'utf8');

  // 合并为 full.ts（部分播放器/原生 video 兼容）
  const ws = fs.createWriteStream(path.join(ROOT, 'full.ts'));
  for (const idx of order) {
    const buf = fs.readFileSync(path.join(ROOT, `seg-${String(idx).padStart(5, '0')}.ts`));
    ws.write(buf);
  }
  ws.end();
  const total = order.reduce((s, idx) => s + fs.statSync(path.join(ROOT, `seg-${String(idx).padStart(5, '0')}.ts`)).size, 0);
  console.log('完成 →', ROOT);
  console.log('  切片数:', order.length, ' 合计约', (total / 1048576).toFixed(1), 'MB');
  console.log('  本地播放: playlist.m3u8 (hls.js) 或 full.ts');
}
main().catch((e) => { console.error('ERR', e); process.exit(1); });
