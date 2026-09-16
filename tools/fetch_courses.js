/*
 * fetch_courses.js v2（目录驱动·人教版标准全套）
 * ----------------------------------------------------------------------------
 * 目标：把「国家中小学智慧教育平台」的小学英语「人教版标准全套」拉进 js/courses.js：
 *   - 一年级起点体系：一年级~六年级 上/下册
 *   - 三年级起点/PEP 体系：三年级~六年级 上/下册
 *   （取 2022 修订版去重；排除盲校/低视力/精通等特教版）
 *
 * 为什么需要 token：教材条目本身公开（目录可匿名拉），但每本书的「单元/课时/视频地址」
 * 在登录态受保护的对象存储上（实测匿名 403、&sdk_cache 抽出的令牌也 403）。所以视频结构
 * 必须用你自己的登录态（真正的 ND_UC_AUTH-...&token 值）。
 *
 * 用法：
 *   1) 浏览器登录 basic.smartedu.cn → F12 → Console 执行：
 *        copy(localStorage.getItem(Object.keys(localStorage).find(k=>k.startsWith('ND_UC_AUTH')&&k.endsWith('token'))))
 *      把复制到的字符串存成 tools/.token.txt（或设环境变量 SMARTEDU_TOKEN）。
 *   2) node tools/fetch_courses.js
 *
 * 说明：原始 detail JSON 会存到 tools/_detail_<id前8>.json 方便排错。
 */
const fs = require('fs');
const https = require('https');
const path = require('path');
const dir = path.resolve(__dirname, '..');

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

// —— 明细接口配置（verify_token.js 验通后写入 _verify.json 可自动覆盖）——
// 顺序须与 verify_token.js 的 TEMPLATES 一致，tplIdx 才能正确映射。
const TEMPLATES = [
  (base, id) => base + '/ndrs/resources/tch_material/details/' + id + '.json',
  (base, id) => base + '/ndrv2/resources/tch_material/details/' + id + '.json',
  (base, id) => base + '/ndrv2/national_lesson/resources/details/' + id + '.json',
  (base, id) => base + '/ndrs/pro/resources/tch_material/details/' + id + '.json',
  (base, id) => base + '/ndrv2/' + id + '/resources/details/' + id + '.json'
];
let CFG = { base: 'https://s-file-1.ykt.cbern.com.cn/zxx', detailTpl: TEMPLATES[0], headerName: 'X-Nd-Auth' };
try {
  const v = JSON.parse(fs.readFileSync(path.join(__dirname, '_verify.json'), 'utf8'));
  if (v.base) CFG.base = v.base;
  if (typeof v.tplIdx === 'number' && TEMPLATES[v.tplIdx]) CFG.detailTpl = TEMPLATES[v.tplIdx];
  if (v.headerName) CFG.headerName = v.headerName;
} catch (e) {}

function loadToken() {
  const p = path.join(__dirname, '.token.txt');
  if (fs.existsSync(p)) return fs.readFileSync(p, 'utf8').trim();
  if (process.env.SMARTEDU_AUTH) return process.env.SMARTEDU_AUTH.trim();
  return '';
}
function tokenHeaders(T) {
  if (!T) return { 'User-Agent': UA, 'Referer': 'https://basic.smartedu.cn/' };
  const h = { 'User-Agent': UA, 'Referer': 'https://basic.smartedu.cn/', 'Origin': 'https://basic.smartedu.cn' };
  if (CFG.headerName === 'X-Nd-Auth') h['X-Nd-Auth'] = T;
  else if (CFG.headerName === 'Bearer') h['Authorization'] = 'Bearer ' + T;
  else if (CFG.headerName === 'CookieND') h['Cookie'] = 'ND_UC_AUTH=' + T;
  else h['X-Nd-Auth'] = T;
  return h;
}
function get(url, T) {
  return new Promise((resolve, reject) => {
    let r;
    try {
      r = https.get(url, { headers: tokenHeaders(T) }, resp => {
        const ch = []; resp.on('data', c => ch.push(c));
        resp.on('end', () => resolve({ code: resp.statusCode, body: Buffer.concat(ch).toString('utf8') }));
      });
    } catch (e) { return reject(e); }
    r.on('error', e => reject(e));
    r.setTimeout(25000, () => { r.destroy(); reject(new Error('timeout ' + url)); });
  });
}

// —— 从公开目录载入小学英语教材（优先用已存的 _catalog_en.json，省 40MB 请求）——
async function loadCatalog() {
  const cache = path.join(__dirname, '_catalog_en.json');
  if (fs.existsSync(cache)) { console.log('用缓存 _catalog_en.json'); return JSON.parse(fs.readFileSync(cache, 'utf8')); }
  const ver = JSON.parse((await get('https://s-file-1.ykt.cbern.com.cn/zxx/ndrs/resources/tch_material/version/data_version.json')).body);
  const urls = (ver.urls || '').split(',').map(s => s.trim()).filter(Boolean);
  const all = [];
  for (const pu of urls) {
    const r = await get(pu); if (r.code !== 200) continue;
    let arr; try { arr = JSON.parse(r.body); } catch (e) { continue; }
    const list = Array.isArray(arr) ? arr : (arr.list || arr.data || arr.items || arr.resources || []);
    for (const it of list) {
      const blob = JSON.stringify(it);
      if (/英语|english|eng/i.test(blob) && /小学|primary/i.test(blob)) all.push(it);
    }
  }
  return all;
}

const NUM = { '一': 1, '二': 2, '三': 3, '四': 4, '五': 5, '六': 6 };
function classifyTitle(title) {
  let t = (title || '').replace(/（?[一二三四五六]年级起点）?/g, ''); // 去掉「X年级起点」
  const g = /([一二三四五六])年级/.exec(t);
  const grade = g ? NUM[g[1]] : 0;
  const vol = /下册/.test(title) ? 'b' : (/上册/.test(title) ? 'a' : (/全一册/.test(title) ? 'a' : '?'));
  let sys = 'pep';
  if (/一年级起点/.test(title)) sys = 'y1';
  else if (/三年级起点|PEP/i.test(title)) sys = 'pep';
  else if (/人教版/.test(title)) sys = 'pep';
  const is2022 = /2022年版课程标准修订/.test(title);
  const isSpecial = /盲校|低视力|特殊教育|聋校|培智/.test(title);
  return { grade, vol, sys, is2022, isSpecial, title };
}

// —— 解析 detail JSON，抽取 单元→课时(标题+视频m3u8) ——
function parseDetail(json) {
  const units = [];
  const m3u8re = /\.m3u8(\?|$)/i;
  function collect(node, unitTitle, out) {
    if (Array.isArray(node)) { node.forEach(n => collect(n, unitTitle, out)); return; }
    if (node && typeof node === 'object') {
      const tt = node.title || node.name || (node.global_title && (node.global_title['zh-CN'] || node.global_title)) || node.display_name;
      const title = typeof tt === 'string' ? tt : (tt && tt['zh-CN'] ? tt['zh-CN'] : null);
      let media = null;
      const cands = [];
      if (typeof node.url === 'string') cands.push(node.url);
      if (typeof node.play_url === 'string') cands.push(node.play_url);
      if (typeof node.m3u8 === 'string') cands.push(node.m3u8);
      if (Array.isArray(node.ti_storages)) node.ti_storages.forEach(s => typeof s === 'string' && cands.push(s));
      if (Array.isArray(node.resources)) node.resources.forEach(r => r && r.url && cands.push(r.url));
      if (Array.isArray(node.pages)) node.pages.forEach(p => p && p.url && cands.push(p.url));
      for (const c of cands) if (m3u8re.test(c)) { media = c; break; }
      const ut = node.unit_title || node.chapter_title || node.unitTitle || unitTitle;
      if (title && media) {
        let u = out.find(x => x.title === (ut || title));
        if (!u) { u = { title: ut || title, lessons: [] }; out.push(u); }
        u.lessons.push({ title, m3u8: media });
      }
      const sub = node.chapters || node.units || node.lessons || node.children || node.resource_structure && node.resource_structure.chapter_tree;
      if (Array.isArray(sub)) sub.forEach(s => collect(s, ut || title, out));
      else if (sub && typeof sub === 'object') collect(sub, ut || title, out);
      for (const k in node) { const v = node[k]; if (v && typeof v === 'object' && k !== 'resources' && k !== 'pages') collect(v, ut || title, out); }
    }
  }
  if (json && typeof json === 'object') collect(json, null, units);
  return units.filter(u => u.lessons.length);
}

(async () => {
  const token = loadToken();
  if (!token) { console.log('✗ 没找到 token。请把真正的 ND_UC_AUTH-...&token 值存到 tools/.token.txt。'); process.exit(1); }
  const raw = await loadCatalog();
  console.log('目录小学英语教材：', raw.length);

  // 筛选人教版标准全套 + 按 (grade,vol,sys) 去重（优先 2022 修订版）
  const groups = {};
  for (const m of raw) {
    const c = classifyTitle(m.title || (m.global_title && (m.global_title['zh-CN'] || m.global_title)) || '');
    if (!c.grade || c.vol === '?' || c.isSpecial) continue;
    if (c.sys !== 'y1' && c.sys !== 'pep') continue;
    const key = c.grade + '/' + c.vol + '/' + c.sys;
    const cur = groups[key];
    if (!cur || (c.is2022 && !cur.is2022) || (c.is2022 === cur.is2022 && m.update_time > (cur.update_time || ''))) groups[key] = Object.assign({ id: m.id, title: m.title, update_time: m.update_time }, c);
  }
  const chosen = Object.values(groups).sort((a, b) => a.grade - b.grade || a.vol.localeCompare(b.vol) || a.sys.localeCompare(b.sys));
  console.log('选中人教版标准全套（去重后）：', chosen.length, '本');
  for (const c of chosen) console.log('   ' + c.grade + '年级 ' + (c.vol === 'a' ? '上' : '下') + ' ' + (c.sys === 'y1' ? '一年级起点' : 'PEP') + '  ' + c.title.slice(0, 36) + '  [' + c.id + ']');

  const grades = {};
  for (const c of chosen) {
    const gk = 'g' + c.grade, gLabel = ['', '一年级', '二年级', '三年级', '四年级', '五年级', '六年级'][c.grade];
    const vk = c.vol, vLabel = c.vol === 'a' ? '上册' : '下册';
    grades[gk] = grades[gk] || { key: gk, label: gLabel, volumes: [] };
    const vol = { key: vk, label: vLabel, materialId: c.id, units: [] };
    console.log('\n抓取 ' + gLabel + vLabel + ' (' + c.id + ') ...');
    try {
      const url = CFG.detailTpl(CFG.base, c.id);
      const a = await get(url, token);
      console.log('  HTTP', a.code, 'len', a.body.length);
      fs.writeFileSync(path.join(__dirname, '_detail_' + c.id.slice(0, 8) + '.json'), a.body);
      if (a.code !== 200) { console.log('  ✗ 抓取失败（token 可能失效/权限不足）'); continue; }
      let json; try { json = JSON.parse(a.body); } catch (e) { console.log('  ✗ JSON 解析失败'); continue; }
      const units = parseDetail(json);
      console.log('  解析到 ' + units.length + ' 单元、' + units.reduce((s, u) => s + u.lessons.length, 0) + ' 课时');
      vol.units = units.map(u => ({ title: u.title, lessons: u.lessons.map(l => ({ title: l.title, m3u8: l.m3u8, platform: 'https://basic.smartedu.cn/syncClassroom/classActivity?activityId=' + c.id })) }));
    } catch (e) { console.log('  ✗ 异常：' + e.message); }
    grades[gk].volumes.push(vol);
  }

  const gradeList = Object.keys(grades).sort((a, b) => +a.slice(1) - +b.slice(1)).map(k => grades[k]);
  if (!gradeList.length) { console.log('\n未抓到任何课程，退出。'); process.exit(1); }
  const out = '/* english-mastery · 同步课堂课程数据源（国家中小学智慧教育平台·小学英语人教版标准全套）\n' +
    ' * 由 tools/fetch_courses.js 自动生成，请勿手改；重跑会覆盖。\n' +
    ' */\nwindow.COURSES = ' + JSON.stringify({
      subject: '英语', edition: '人教版标准全套（一年级起点1-6 + 三年级起点PEP 3-6）',
      note: '已拉取真实课程结构。跑 tools/download_courses.js 把视频下到本地（videos/）即可离线看。',
      grades: gradeList
    }, null, 2) + ';\n';
  fs.writeFileSync(path.join(dir, 'js', 'courses.js'), out);
  console.log('\n✓ 已写入 js/courses.js（' + gradeList.length + ' 个年级）。再跑 download_courses.js 下载视频。');
})();
