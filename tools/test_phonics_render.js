/*
 * 极简 DOM mock 渲染校验：真跑「单词单元 → 拼读拆解 6 步」渲染路径，
 * 确认新增代码不抛 ReferenceError / TypeError（对齐此前进不去详情页的坑）。
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

const windowMock = {
  _handlers: {},
  addEventListener(type, cb) { this._handlers[type] = cb; },
  speechSynthesis: undefined,
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
  alert() {},
  console,
  setTimeout() { return 0; },
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

const stepNext = getEl('phStepNext');
for (let s = 1; s <= 5; s++) {
  if (!stepNext.onclick) throw new Error('phStepNext.onclick 缺失（step ' + s + '）');
  stepNext.onclick();
}

if (getEl('phWordNext').onclick) getEl('phWordNext').onclick();

// 抽查 phonicsFor 字段完整性（学步骤依赖）
const sample = windowMock.phonicsFor('yesterday');
if (!sample || !sample.syl || !sample.ipa || !sample.seg) throw new Error('phonicsFor 字段缺失');

console.log('PHONICS_RENDER_OK methods=' + methods.length + ' syl=' + sample.syl.join('·') + ' ipa=' + sample.ipa);
