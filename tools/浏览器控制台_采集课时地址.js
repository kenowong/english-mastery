/* ============================================================
 * 浏览器控制台采集脚本 —— 一次捞出「你已经浏览/播放过的所有课时」视频地址
 *
 * 用法（在 basic.smartedu.cn / 国家平台课程页，已登录状态）：
 *   1. 打开「课程教学 / 同步课堂」，逐个点开你要下载的课时，让播放器开始加载
 *      （每课只要播放器起了、出了画面就行，播 2 秒即可切下一课）
 *   2. 全部点完后，F12 → Console → 粘贴下面【脚本 A】回车
 *   3. 它会自动把结果复制到剪贴板；把它贴到聊天里发我即可
 *
 * 说明：performance 资源计时在整个 SPA 会话内累积（切课是 hash 路由，不刷新页面），
 *       所以点完一批课再跑一次脚本，就能拿到全部课时地址。
 * ============================================================ */

/* ---------- 脚本 A：采集 .ts 切片地址（首选，推荐） ---------- */
(() => {
  const res = performance.getEntriesByType('resource').map(e => e.name);
  // 国家平台视频切片：.../videos/<长名>-NNNNN.ts
  const ts = res.filter(u => /\/videos\/[^/]+-\d{5}\.ts(\?|$)/.test(u));
  const prefixes = [...new Set(ts.map(u => u.replace(/-\d{5}\.ts.*$/, '')))];
  if (!prefixes.length) {
    console.log('✗ 没采集到 .ts 切片。可能这课是 mp4 格式，改用脚本 B；或播放器还没真正加载分段。');
  } else {
    const out = prefixes.join('\n');
    console.log('✅ 采集到 ' + prefixes.length + ' 节课的切片前缀：');
    prefixes.forEach((p, i) => console.log('  ' + (i + 1) + '. ' + p.slice(-80)));
    try { copy(out); console.log('\n已复制到剪贴板，直接粘给我即可。'); } catch (e) { console.log('\n请手动复制以上内容。'); }
  }
})();

/* ---------- 脚本 B：若 A 没结果（mp4 格式课时） ---------- */
/*
(() => {
  const res = performance.getEntriesByType('resource').map(e => e.name);
  const mp4 = res.filter(u => /\/videos\/.*\.mp4(\?|$)/.test(u));
  const uniq = [...new Set(mp4)];
  console.log('采集到 ' + uniq.length + ' 条 mp4 地址：');
  uniq.forEach((u,i)=>console.log('  '+(i+1)+'. '+u));
  if (uniq.length) { try { copy(uniq.join('\n')); console.log('已复制到剪贴板'); } catch(e){} }
})();
*/

/* ---------- 脚本 C：兜底 —— 把所有 .m3u8 也捞出来 ---------- */
/*
(() => {
  const res = performance.getEntriesByType('resource').map(e => e.name);
  const m = [...new Set(res.filter(u => /\.m3u8(\?|$)/.test(u)))];
  console.log('m3u8 共 ' + m.length + ' 条：'); m.forEach((u,i)=>console.log(' '+(i+1)+'. '+u));
  if (m.length) { try { copy(m.join('\n')); console.log('已复制'); } catch(e){} }
})();
*/
