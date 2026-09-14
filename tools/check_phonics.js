/*
 * tools/check_phonics.js · 拼读数据自检（开发用，不参与页面运行）
 * 用法：<node> tools/check_phonics.js
 *
 * 做四件事：
 *   1. 校验人工词表 PHONICS：字母组合/音节拼回去必须等于单词本身、音标格式合法、至少有一个发音
 *   2. 统计词库覆盖率（人工校对 / 规则推导 / 无数据）
 *   3. 抽样打印规则推导结果，便于人工复核
 *   4. 打印明显可疑的推导（音标为空、无元音、切分过碎）
 */
const fs = require('fs');
const vm = require('vm');

const dir = 'E:/WorkBuddy/workspace/english-mastery';
const sandbox = { console: console };
sandbox.window = sandbox;
vm.createContext(sandbox);
['js/words.js', 'js/phonics.js'].forEach(function (f) {
  vm.runInContext(fs.readFileSync(dir + '/' + f, 'utf8'), sandbox, { filename: f });
});

var WB = sandbox.WORD_BANK, PH = sandbox.PHONICS, phonicsFor = sandbox.phonicsFor;
var errors = 0;

console.log('=== 1. 人工词表校验 ===');
Object.keys(PH).forEach(function (w) {
  var e = PH[w], low = w.toLowerCase();
  var seg = e.g.map(function (p) { return p[0]; }).join('').toLowerCase();
  var syl = e.s.join('').toLowerCase();
  if (seg !== low) { console.log('  ✗ [字母组合拼不回单词] ' + w + ' -> ' + seg); errors++; }
  if (syl !== low) { console.log('  ✗ [音节拼不回单词] ' + w + ' -> ' + syl); errors++; }
  if (!/^\/.+\/$/.test(e.i)) { console.log('  ✗ [音标格式] ' + w + ' -> ' + e.i); errors++; }
  if (!e.g.some(function (p) { return p[1]; })) { console.log('  ✗ [无任何发音] ' + w); errors++; }
  e.g.forEach(function (p) {
    if (p[1] && !(p[1] in sandbox.PHONICS_SPEAK)) { console.log('  ⚠ [近似朗读表缺音素] ' + w + ' ' + p[1]); }
  });
});
console.log('  人工词条 ' + Object.keys(PH).length + ' 条，错误 ' + errors + ' 处');

console.log('\n=== 2. 词库覆盖率 ===');
var stat = { curated: 0, rule: 0, none: 0 };
var noneList = [], ruleOut = [];
Object.keys(WB).forEach(function (g) {
  (WB[g].units || []).forEach(function (u) {
    (u.words || []).forEach(function (wd) {
      var r = phonicsFor(wd.en);
      if (!r) { stat.none++; if (noneList.length < 20) noneList.push(wd.en); return; }
      stat[r.src]++;
      if (r.src === 'rule' && ruleOut.length < 90) {
        ruleOut.push('  ' + wd.en + '  →  ' + r.syl.join('·') + '  ' + r.ipa + '   [' +
          r.seg.map(function (p) { return p[0] + '=' + p[1]; }).join(' ') + ']');
      }
    });
  });
});
console.log('  人工校对 ' + stat.curated + ' 词 · 规则推导 ' + stat.rule + ' 词 · 无数据 ' + stat.none + ' 词');
if (noneList.length) console.log('  无数据样例：' + noneList.join(', '));

console.log('\n=== 3. 规则推导抽样（人工复核用） ===');
console.log(ruleOut.join('\n'));

console.log('\n=== 4. 可疑推导 ===');
var odd = 0;
Object.keys(WB).forEach(function (g) {
  (WB[g].units || []).forEach(function (u) {
    (u.words || []).forEach(function (wd) {
      var r = phonicsFor(wd.en);
      if (!r || r.src !== 'rule') return;
      var body = r.ipa.replace(/\//g, '').replace('ˈ', '');
      if (!body) { console.log('  ⚠ 空音标：' + wd.en); odd++; }
      else if (!/[aeiouæɒʌɪʊəɜɔɑ]/i.test(body)) { console.log('  ⚠ 无元音（必然有误）：' + wd.en + ' ' + r.ipa); odd++; }
      else if (r.syl.length > 5) { console.log('  ⚠ 切分过碎：' + wd.en + ' -> ' + r.syl.join('·')); odd++; }
    });
  });
});
console.log('  可疑 ' + odd + ' 处');

console.log('\n' + (errors === 0 ? 'CHECK_PHONICS_OK' : 'CHECK_PHONICS_FAIL errors=' + errors));
