/*
 * 极简 DOM mock 渲染校验：真跑「单词单元 → 拼读拆解 6 步」渲染路径，
 * 并模拟点击「学」格子 / 「听整词 / 音素拼读 / 音素慢读」按钮，确认发音路径不抛错且播出正确的 token。
 * 关键断言：
 *   ① 「学」格子必须「先读该音、再读例词」，不得只读例词（本轮修的 bug）；
 *   ② PHONICS_BLEND 的 token 必须含元音字母——否则 TTS 会读成字母名（sh→ess-aitch、th→tee-aitch）；
 *   ③ 第 6 步「听音拼写」词头必须隐藏答案（不得出现单词），只给词义，且音节提示默认收起；
 *   ④ 全词库音素都必须有拼读 token（防空音，且必须真扫到词）。
 * 仅用于本地校验，不随页面加载。
 */
const fs = require('fs');
const vm = require('vm');
const dir = 'E:/WorkBuddy/workspace/english-mastery';

// 从 innerHTML 里解析出「学」格子（.ph-grapheme）的属性，让点击路径可被真实触发
function parseGraphemes(html) {
  const out = [];
  const re = /<div class="ph-grapheme[^"]*"([^>]*)>/g;
  let m;
  while ((m = re.exec(html))) {
    const attrs = m[1] || '';
    const snd = /data-sound="([^"]*)"/.exec(attrs);
    const wd = /data-word="([^"]*)"/.exec(attrs);
    const e = makeEl();
    e._attrs['data-sound'] = snd ? snd[1] : '';
    e._attrs['data-word'] = wd ? wd[1] : '';
    out.push(e);
  }
  return out;
}

function makeEl(id) {
  const el = {
    id: id || '',
    _attrs: {},
    _html: '',
    _graphemes: [],
    onclick: null,
    disabled: false,
    value: '',
    textContent: '',
    style: {},
    classList: { add() {}, remove() {}, toggle() {}, contains() { return false; } },
    setAttribute(k, v) { this._attrs[k] = v; },
    getAttribute(k) { return (k in this._attrs) ? this._attrs[k] : null; },
    focus() {},
    appendChild() {},
    removeChild() {},
    querySelector() { return makeEl(); },
    querySelectorAll(sel) { return sel === '.ph-grapheme' ? this._graphemes : []; },
  };
  Object.defineProperty(el, 'innerHTML', {
    get() { return this._html; },
    set(v) { this._html = String(v); this._graphemes = parseGraphemes(this._html); },
  });
  return el;
}

const registry = {};
function getEl(id) { if (!registry[id]) registry[id] = makeEl(id); return registry[id]; }

const modeTabs = ['flash', 'spell', 'read', 'phonics'].map((m) => { const e = makeEl('mode-' + m); e._attrs['data-mode'] = m; return e; });

const documentMock = {
  _domReady: null,
  body: { insertBefore() {}, appendChild() {}, firstChild: null },
  getElementById(id) { return getEl(id); },
  querySelector() { return makeEl(); },
  querySelectorAll(sel) { return sel === '.mode-tab' ? modeTabs : []; },
  createElement(tag) {
    if (tag === 'template') return { innerHTML: '', content: { firstChild: makeEl() } };
    return makeEl();
  },
  addEventListener(type, cb) { if (type === 'DOMContentLoaded') this._domReady = cb; },
};

// 录音式语音模拟：speak 后立即触发 onend，让逐音序列能完整跑完
const spoken = [];
const windowMock = {
  _handlers: {},
  addEventListener(type, cb) { this._handlers[type] = cb; },
  speechSynthesis: {
    _voices: [{ lang: 'en-US', name: 'Google US English' }],
    getVoices() { return this._voices; },
    speak(u) { spoken.push(u.text); if (u.onend) u.onend(); },
    cancel() {},
  },
  SpeechSynthesisUtterance: function (text) { this.text = text; },
  SpeechRecognition: undefined,
  webkitSpeechRecognition: undefined,
  MediaRecorder: undefined,
};

const store = {};
const localStorageMock = {
  getItem(k) { return (k in store) ? store[k] : null; },
  setItem(k, v) { store[k] = String(v); },
  removeItem(k) { delete store[k]; },
};

const locationMock = { hash: '#/' };

const sandbox = {
  window: windowMock,
  document: documentMock,
  localStorage: localStorageMock,
  location: locationMock,
  navigator: {},
  SpeechSynthesisUtterance: function (text) { this.text = text; },
  alert() {},
  console,
  setTimeout(cb) { if (cb) cb(); return 0; },
  clearTimeout() {},
  Math, JSON, Date, RegExp, Array, String, Object,
};

const files = ['js/data.js', 'js/sentences.js', 'js/words.js', 'js/phonics.js', 'js/app.js'];
const ctx = vm.createContext(sandbox);
for (const f of files) vm.runInContext(fs.readFileSync(dir + '/' + f, 'utf8'), ctx, { filename: f });

if (!documentMock._domReady) throw new Error('DOMContentLoaded 未注册');
documentMock._domReady();

function go(hash) {
  locationMock.hash = hash;
  if (windowMock._handlers['hashchange']) windowMock._handlers['hashchange']();
}

go('#/');
const methods = windowMock.METHODS || [];
if (methods.length) go('#/m/' + methods[0].id);
go('#/words/primary/p-core');

const phonicsTab = modeTabs.find((t) => t._attrs['data-mode'] === 'phonics');
if (!phonicsTab || !phonicsTab.onclick) throw new Error('phonics 模式标签 onclick 未绑定');
phonicsTab.onclick();

// ① 学：听整词（真实单词，权威发音）
spoken.length = 0;
const phWhole = getEl('phWhole');
if (!phWhole.onclick) throw new Error('phWhole.onclick 缺失');
phWhole.onclick();
if (!spoken.length) throw new Error('听整词未触发语音');

// ①b 学：点格子必须先读「该音的读法」再读「例词」——不得只读例词（旧 bug：读的是整词，等于没教发音）
const graphemes = getEl('phBody').querySelectorAll('.ph-grapheme');
if (!graphemes.length) throw new Error('「学」步骤未渲染出字母组合格子（.ph-grapheme）');
const g0 = graphemes.filter((g) => g.getAttribute('data-sound'))[0];
if (!g0) throw new Error('格子缺少 data-sound（该音读法）');
spoken.length = 0;
g0.onclick();
const snd = g0.getAttribute('data-sound');
const exw = g0.getAttribute('data-word');
if (spoken[0] !== snd) throw new Error('点格子未先读该音：期望 ' + snd + '，实际 ' + JSON.stringify(spoken));
if (exw && exw !== snd && spoken[1] !== exw) throw new Error('点格子未跟读例词：期望 ' + exw + '，实际 ' + JSON.stringify(spoken));
if (!exw && spoken.length !== 1) throw new Error('无例词时不应多读：' + JSON.stringify(spoken));
if (snd === exw && spoken.length !== 1) throw new Error('该音与例词相同时应只读一次：' + JSON.stringify(spoken));
console.log('  学·点格子 ✓ 该音=' + snd + ' 例词=' + (exw || '（无）') + ' 实际播放=' + JSON.stringify(spoken));

// ①c 关键回归：找一个「该音 ≠ 例词」的格子，必须读成 [该音, 例词] 两声
//     —— 旧版这里只读了例词（等于再念一遍整词），根本没教该字母组合怎么发音
let found2 = false;
for (let i = 0; i < 12 && !found2; i++) {
  const gs = getEl('phBody').querySelectorAll('.ph-grapheme');
  for (const g of gs) {
    const a = g.getAttribute('data-sound');
    const b = g.getAttribute('data-word');
    if (a && b && a !== b) {
      spoken.length = 0;
      g.onclick();
      const want = JSON.stringify([a, b]);
      if (spoken[0] !== a || spoken[1] !== b) throw new Error('「该音 + 例词」双读失败：期望 ' + want + '，实际 ' + JSON.stringify(spoken));
      console.log('  学·双读 ✓ 该音=' + a + ' → 例词=' + b);
      found2 = true;
      break;
    }
  }
  if (!found2) { const wn2 = getEl('phWordNext'); if (wn2.onclick) wn2.onclick(); }
}
if (!found2) throw new Error('未找到「该音 ≠ 例词」的格子，双读路径未被覆盖');

// ② 读：音素拼读（逐音拼读，应读出 PHONICS_BLEND/PHONICS_SPEAK 的 token）
const stepNext = getEl('phStepNext');
if (!stepNext.onclick) throw new Error('phStepNext.onclick 缺失');
stepNext.onclick(); // -> step 1
spoken.length = 0;
const phSyl = getEl('phSyl');
if (!phSyl.onclick) throw new Error('phSyl.onclick 缺失');
phSyl.onclick();
if (!spoken.length) throw new Error('音素拼读未触发语音');
const bad = spoken.filter((t) => !t || typeof t !== 'string' || t === 'undefined');
if (bad.length) throw new Error('音素拼读出现非法 token: ' + JSON.stringify(bad));
console.log('  音素拼读 tokens = ' + JSON.stringify(spoken));

// ③ 拼读：音素慢读（应同样读出 token，慢速）
for (let i = 0; i < 3; i++) stepNext.onclick(); // step1->2->3->4
spoken.length = 0;
const phBlendEach = getEl('phBlendEach');
if (!phBlendEach.onclick) throw new Error('phBlendEach.onclick 缺失');
phBlendEach.onclick();
if (!spoken.length) throw new Error('音素慢读未触发语音');

// ④ 逐词导航 + 字段完整性
getEl('phWordNext').onclick && getEl('phWordNext').onclick();
const sample = windowMock.phonicsFor('yesterday');
if (!sample || !sample.syl || !sample.ipa || !sample.seg) throw new Error('phonicsFor 字段缺失');

// ⑤ 第 6 步「听音拼写」：词头必须隐藏答案（单词），只给词义
const WB = windowMock.WORD_BANK || {};
const pUnits = (WB.primary && WB.primary.units) || [];
const pCore = pUnits.find((u) => u.id === 'p-core') || pUnits[0];
const phWords = ((pCore && pCore.words) || []).filter((w) => windowMock.phonicsFor(w.en));
const firstWord = phWords[0];
if (!firstWord) throw new Error('未取到 p-core 的首个拼读单词');

phonicsTab.onclick();                              // 回到第 1 个词、第 1 步
for (let i = 0; i < 5; i++) stepNext.onclick();    // step 0 -> 5
const spellHtml = getEl('phonicsRun')._html;
if (spellHtml.indexOf('ph-word-quiz') < 0) throw new Error('第 6 步词头未切换为「隐藏答案」态');
const leak = new RegExp('(^|[^A-Za-z])' + firstWord.en + '([^A-Za-z]|$)', 'i');
if (leak.test(spellHtml)) throw new Error('第 6 步泄漏了答案：' + firstWord.en);
if (spellHtml.indexOf(firstWord.zh) < 0) throw new Error('第 6 步未给出词义提示：' + firstWord.zh);

// ⑥ 音节提示默认收起，点击后才展开（避免直接给答案）
const hintB = getEl('phSpellHint');
if (!hintB.onclick) throw new Error('phSpellHint.onclick 缺失');
const hintTxt = getEl('phSpellHintTxt');
if (hintTxt.textContent) throw new Error('音节提示默认不应展开');
hintB.onclick();
if (!hintTxt.textContent || hintTxt.textContent.indexOf('音节') < 0) throw new Error('点击后音节提示未展开');
console.log('  第 6 步隐藏答案 ✓ 词义=' + firstWord.zh + ' 提示=' + hintTxt.textContent.trim());

// ⑦ 全词库音素「拼读 token」覆盖校验：确保任意词的逐音拼读都不会出现空 token
// 注意：WORD_BANK[grade] 形如 {label, note, units:[...]}，必须下钻到 units 才能遍历到词
const missing = {};
let scanned = 0;
for (const g in WB) {
  const units = (WB[g] && WB[g].units) || [];
  units.forEach((u) => {
    (u.words || []).forEach((wd) => {
      const info = windowMock.phonicsFor(wd.en);
      if (!info) return;
      scanned++;
      (info.ph || []).forEach((ph) => {
        if (!(ph in windowMock.PHONICS_BLEND) && !(ph in windowMock.PHONICS_SPEAK)) missing[ph] = (missing[ph] || 0) + 1;
      });
    });
  });
}
const missKeys = Object.keys(missing);
if (!scanned) throw new Error('词库覆盖校验未扫到任何单词（遍历层级可能写错）');
if (missKeys.length) throw new Error('存在无拼读 token 的音素: ' + JSON.stringify(missing));
console.log('  全词库 ' + scanned + ' 词音素均有拼读 token ✓');

// ⑧ 反字母名守卫：拼读 token 必须含元音字母，否则 TTS 会读成字母名（sh→ess-aitch、th→tee-aitch）
const badTok = [];
Object.keys(windowMock.PHONICS_BLEND).forEach((k) => {
  const t = windowMock.PHONICS_BLEND[k];
  if (!/[aeiouy]/i.test(t)) badTok.push(k + '->' + t);
});
if (badTok.length) throw new Error('拼读 token 不含元音字母，TTS 会读成字母名: ' + JSON.stringify(badTok));
console.log('  拼读 token 反字母名守卫 ✓ 共 ' + Object.keys(windowMock.PHONICS_BLEND).length + ' 条');

console.log('PHONICS_RENDER_OK methods=' + methods.length + ' syl=' + sample.syl.join('·') + ' ipa=' + sample.ipa);
