/*
 * 极简 DOM mock 渲染校验：真跑「单词单元 → 拼读拆解 6 步」渲染路径，
 * 并模拟点击「听整词 / 音素拼读 / 音素慢读」按钮，确认新发音路径不抛错且读出正确的音素 token。
 * 仅用于本地校验，不随页面加载。
 */
const fs = require('fs');
const vm = require('vm');
const dir = 'E:/WorkBuddy/workspace/english-mastery';

function makeEl(id) {
  const el = {
    id: id || '',
    _attrs: {},
    _html: '',
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
    querySelectorAll() { return []; },
  };
  Object.defineProperty(el, 'innerHTML', { get() { return this._html; }, set(v) { this._html = String(v); } });
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

// ② 读：音素拼读（逐音拼读，应读出 PHONICS_BLEND/PHONICS_SPEAK 的 token）
const stepNext = getEl('phStepNext');
if (!stepNext.onclick) throw new Error('phStepNext.onclick 缺失');
stepNext.onclick(); // -> step 1
spoken.length = 0;
const phSyl = getEl('phSyl');
if (!phSyl.onclick) throw new Error('phSyl.onclick 缺失');
phSyl.onclick();
if (!spoken.length) throw new Error('音素拼读未触发语音');
const tokSet = Object.assign({}, windowMock.PHONICS_BLEND, windowMock.PHONICS_SPEAK);
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

// ⑤ 全词库音素「拼读 token」覆盖校验：确保任意词的逐音拼读都不会出现空 token
const WB = windowMock.WORD_BANK || {};
const missing = {};
for (const g in WB) {
  const units = WB[g];
  if (!Array.isArray(units)) continue;
  units.forEach((u) => {
    (u.words || []).forEach((wd) => {
      const info = windowMock.phonicsFor(wd.en);
      if (!info) return;
      (info.ph || []).forEach((ph) => {
        if (!(ph in windowMock.PHONICS_BLEND) && !(ph in windowMock.PHONICS_SPEAK)) missing[ph] = (missing[ph] || 0) + 1;
      });
    });
  });
}
const missKeys = Object.keys(missing);
if (missKeys.length) console.log('  缺失音素 token: ' + JSON.stringify(missing));
else console.log('  全词库音素均有拼读 token ✓');

console.log('PHONICS_RENDER_OK methods=' + methods.length + ' syl=' + sample.syl.join('·') + ' ipa=' + sample.ipa);
