/*
 * 极简 DOM mock 渲染校验：真跑「同步课堂」渲染路径，
 * 断言：① 单元列表页能渲染单元与示例说明；② 单元详情页能产出 <video data-src=本地路径> 与「在平台看」深链；③ 全程不抛错。
 * 仅用于本地校验，不随页面加载。
 */
const fs = require('fs');
const vm = require('vm');
const dir = 'E:/WorkBuddy/workspace/english-mastery';

function makeEl(id) {
  const el = {
    id: id || '', _attrs: {}, _html: '', onclick: null, disabled: false, value: '', textContent: '', style: {},
    classList: { add() {}, remove() {}, toggle() {}, contains() { return false; } },
    setAttribute(k, v) { this._attrs[k] = v; },
    getAttribute(k) { return (k in this._attrs) ? this._attrs[k] : null; },
    focus() {}, appendChild() {}, removeChild() {},
    querySelector() { return makeEl(); },
    querySelectorAll() { return []; },
  };
  Object.defineProperty(el, 'innerHTML', { get() { return this._html; }, set(v) { this._html = String(v); } });
  return el;
}
const registry = {};
function getEl(id) { if (!registry[id]) registry[id] = makeEl(id); return registry[id]; }

const documentMock = {
  body: { insertBefore() {}, appendChild() {}, firstChild: null },
  getElementById(id) { return getEl(id); },
  querySelector() { return makeEl(); },
  querySelectorAll() { return []; },
  createElement(tag) {
    if (tag === 'template') return { innerHTML: '', content: { firstChild: makeEl() } };
    return makeEl();
  },
  addEventListener(type, cb) { if (type === 'DOMContentLoaded') this._domReady = cb; },
};
const locationMock = { hash: '#/' };
const windowMock = {
  _handlers: {},
  addEventListener(type, cb) { this._handlers[type] = cb; },
  speechSynthesis: { getVoices() { return []; }, speak() {}, cancel() {} },
  SpeechSynthesisUtterance: function (t) { this.text = t; },
};

const sandbox = { window: windowMock, document: documentMock, location: locationMock, console, setTimeout, clearTimeout, JSON, Math, Date, Array, Object, String, RegExp, parseInt, parseFloat, isNaN };
sandbox.window.JSON = JSON;
vm.createContext(sandbox);

function loadScript(p) { vm.runInContext(fs.readFileSync(p, 'utf8'), sandbox, { filename: p }); }

let failed = 0;
function assert(cond, msg) { if (!cond) { failed++; console.log('  ✗ ' + msg); } else { console.log('  ✓ ' + msg); } }

try {
  loadScript(dir + '/js/courses.js');
  loadScript(dir + '/js/data.js');
  loadScript(dir + '/js/sentences.js');
  loadScript(dir + '/js/words.js');
  loadScript(dir + '/js/phonics.js');
  loadScript(dir + '/js/textbook.js');
  loadScript(dir + '/js/app.js');
  // 触发 DOMContentLoaded -> route() 渲染首页
  if (documentMock._domReady) documentMock._domReady();
  assert(true, '脚本加载 + 首页渲染未抛错');

  // 1) 单元列表页
  locationMock.hash = '#/courses/g4/a';
  if (windowMock._handlers.hashchange) windowMock._handlers.hashchange();
  const listHtml = getEl('app')._html;
  assert(listHtml.indexOf('Unit 1 My classroom') >= 0, '单元列表含 Unit 1 My classroom');
  assert(listHtml.indexOf('Unit 2 My schoolbag') >= 0, '单元列表含 Unit 2 My schoolbag');
  assert(listHtml.indexOf('示例数据') >= 0, '示例说明已渲染（提示需跑 fetch/download）');
  assert(listHtml.indexOf('📺 同步课堂') >= 0, '顶部 Tab 含「同步课堂」');

  // 2) 单元详情页（含本地视频 + 平台深链）
  locationMock.hash = '#/courses/g4/a/0';
  if (windowMock._handlers.hashchange) windowMock._handlers.hashchange();
  const unitHtml = getEl('app')._html;
  assert(unitHtml.indexOf('<video class="lesson-video" data-src="videos/g4/a/sample_lesson.mp4"') >= 0, '已下载课时产出 <video data-src=本地mp4>');
  assert(unitHtml.indexOf('✅ 已下载 · 离线可看') >= 0, '已下载标记正确');
  assert(unitHtml.indexOf('https://basic.smartedu.cn/syncClassroom/classActivity?activityId=42ffa88d') >= 0, '「在平台看」深链正确');
  assert(unitMockFallback(unitHtml), '未下载课时给出下载提示而非破图');

  // 3) 下册也可渲染
  locationMock.hash = '#/courses/g4/b/0';
  if (windowMock._handlers.hashchange) windowMock._handlers.hashchange();
  assert(getEl('app')._html.indexOf('Unit 1 My school') >= 0, '下册单元可渲染');
} catch (e) {
  failed++;
  console.log('  ✗ 抛异常: ' + e.stack);
}

function unitMockFallback(html) {
  // 未下载课时（A Let's learn）应出现下载提示文案
  return html.indexOf('未下载到本地') >= 0;
}

console.log(failed ? ('\nFAILED (' + failed + ' 条)') : '\nALL PASS');
process.exit(failed ? 1 : 0);
