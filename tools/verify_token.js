/*
 * verify_token.js v2 —— 从 .token.txt（可能是 &token 裸串，也可能是 &sdk_cache 包装）自动抽出
 * 多个候选令牌，穷举「候选令牌 × 鉴权头 × 数据域 × 明细路径模板」，找出真正能返回 200 JSON 的组合。
 *
 * 用法：node tools/verify_token.js
 * 跑完把输出（尤其「=== 结论 ===」段）发我即可，我会据此改 fetch_courses.js / download_courses.js。
 */
const fs = require('fs'), https = require('https'), path = require('path');

const TOKEN_RAW = (() => {
  const p = path.join(__dirname, '.token.txt');
  return fs.existsSync(p) ? fs.readFileSync(p, 'utf8').trim() : '';
})();
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

function get(url, headers) {
  return new Promise(resolve => {
    let r;
    try {
      r = https.get(url, {
        headers: Object.assign({
          'User-Agent': UA, 'Referer': 'https://basic.smartedu.cn/',
          'Origin': 'https://basic.smartedu.cn', 'Accept': 'application/json, text/plain, */*'
        }, headers || {})
      }, resp => {
        const ch = [];
        resp.on('data', c => ch.push(c));
        resp.on('end', () => resolve({ code: resp.statusCode, body: Buffer.concat(ch).toString('utf8') }));
      });
    } catch (e) { return resolve({ code: -1, body: e.message }); }
    r.on('error', e => resolve({ code: -1, body: e.message }));
    r.setTimeout(9000, () => { r.destroy(); resolve({ code: -1, body: 'timeout' }); });
  });
}

// 抽候选令牌
const cands = {};
try {
  const outer = JSON.parse(TOKEN_RAW);
  if (outer.value) {
    cands['inner_value'] = outer.value;
    try {
      const inner = JSON.parse(outer.value);
      if (inner.access_token) cands['access_token'] = inner.access_token;
      if (inner.refresh_token) cands['refresh_token'] = inner.refresh_token;
    } catch (e) {}
  }
} catch (e) {}
if (TOKEN_RAW) cands['raw'] = TOKEN_RAW;

const ID = '01d53f2c-07d8-4dfc-adf8-9c91a8ed7761'; // 小学英语川教版四年级上册（真实 activityId，仅作探针）
const BASES = [
  'https://s-file-1.ykt.cbern.com.cn/zxx',
  'https://s-file-2.ykt.cbern.com.cn/zxx',
  'https://s-file-3.ykt.cbern.com.cn/zxx'
];
const TEMPLATES = [
  b => b + '/ndrs/resources/tch_material/details/' + ID + '.json',
  b => b + '/ndrv2/resources/tch_material/details/' + ID + '.json',
  b => b + '/ndrv2/national_lesson/resources/details/' + ID + '.json',
  b => b + '/ndrs/pro/resources/tch_material/details/' + ID + '.json',
  b => b + '/ndrv2/' + ID + '/resources/details/' + ID + '.json'
];
function headerSets(T) {
  return [
    ['X-Nd-Auth', { 'X-Nd-Auth': T }],
    ['Bearer', { 'Authorization': 'Bearer ' + T }],
    ['CookieND', { 'Cookie': 'ND_UC_AUTH=' + T }]
  ];
}

(async () => {
  console.log('=== verify_token v2 ===');
  console.log('候选令牌：', Object.keys(cands).join(', '));
  for (const k of Object.keys(cands)) console.log('  ' + k + ' 长度=' + cands[k].length + ' 开头=' + cands[k].slice(0, 18) + '...');
  if (!Object.keys(cands).length) { console.log('X .token.txt 为空或无法解析，先把令牌存进去。'); return; }

  // 先确认公开目录能拉到（定数据域）
  let catalogBase = null;
  for (const base of BASES) {
    const r = await get(base + '/national_lesson_tag.json', {});
    const isJson = (r.body || '').trim().startsWith('{') || (r.body || '').trim().startsWith('[');
    console.log('目录 ' + r.code + ' ' + (isJson ? 'JSON' : 'no') + '  ' + base + '/national_lesson_tag.json');
    if (r.code === 200 && isJson) { catalogBase = base; break; }
  }
  console.log('公开目录域 = ' + (catalogBase || '(都没通，可能网络问题)'));

  // 穷举
  const priority = ['access_token', 'refresh_token', 'inner_value', 'raw'].filter(k => cands[k]);
  let winner = null;
  for (const ck of priority) {
    const T = cands[ck];
    console.log('\n--- 候选令牌: ' + ck + ' ---');
    for (const base of BASES) {
      for (let ti = 0; ti < TEMPLATES.length; ti++) {
        const url = TEMPLATES[ti](base);
        for (const [hn, h] of headerSets(T)) {
          const r = await get(url, h);
          const t = (r.body || '').trim();
          const isJson = t.startsWith('{') || t.startsWith('[');
          const codeTag = /<Code>([^<]+)<\/Code>/.exec(r.body);
          const tag = isJson ? 'JSON' : (codeTag ? codeTag[1] : (t.startsWith('<!') ? 'html' : 'other'));
          if (r.code === 200 && isJson) {
            winner = { ck, base, ti, hn, url, snippet: t.slice(0, 700) };
            console.log('✓ 命中! [' + ck + '][' + hn + '] ' + url);
            console.log('  snippet: ' + t.slice(0, 300).replace(/\n/g, ' '));
            break;
          }
          if (ck === 'access_token') console.log('  ' + r.code + ' ' + tag + ' [' + hn + '] tpl' + ti + ' ' + base.split('/').pop());
        }
        if (winner) break;
      }
      if (winner) break;
    }
    if (winner) break;
  }

  console.log('\n=== 结论 ===');
  if (winner) {
    console.log('✓ 能通的组合：');
    console.log('  令牌候选 = ' + winner.ck);
    console.log('  数据域   = ' + winner.base);
    console.log('  路径模板 = 第 ' + winner.ti + ' 个（tpl' + winner.ti + '）');
    console.log('  鉴权头   = ' + winner.hn);
    console.log('  示例 URL = ' + winner.url);
    fs.writeFileSync(path.join(__dirname, '_verify.json'), JSON.stringify({
      tokenKey: winner.ck, base: winner.base, tplIdx: winner.ti, headerName: winner.hn,
      catalogBase, snippet: winner.snippet
    }, null, 2));
    console.log('→ 已写 tools/_verify.json，据此改 fetch_courses.js。');
  } else {
    console.log('✗ 所有候选都失败。可能原因：');
    console.log('  1) 你复制的是 &sdk_cache 而非 &token，且 access_token 不是接口要的令牌；');
    console.log('  2) 平台改了接口（需改用「网络面板复制 cURL」方案，见踩坑日志第四十五节）；');
    console.log('  3) 网络/Referer 被拦（换本国网络再试）。');
  }
})();
