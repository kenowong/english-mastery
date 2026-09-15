const fs = require('fs');
const dir = 'E:/WorkBuddy/workspace/english-mastery';
let html = fs.readFileSync(dir + '/index.html', 'utf8');
const css = fs.readFileSync(dir + '/styles.css', 'utf8');
const data = fs.readFileSync(dir + '/js/data.js', 'utf8');
const sent = fs.readFileSync(dir + '/js/sentences.js', 'utf8');
const app = fs.readFileSync(dir + '/js/app.js', 'utf8');
const words = fs.readFileSync(dir + '/js/words.js', 'utf8');
const phx = fs.readFileSync(dir + '/js/phonics.js', 'utf8');
const tb = fs.readFileSync(dir + '/js/textbook.js', 'utf8');

function inline(linkRe, code) {
  const before = html;
  html = html.replace(linkRe, code);
  if (html === before) throw new Error('NO MATCH for ' + linkRe);
}

inline(/<link[^>]*href=["']styles\.css["'][^>]*>/, '<style>\n' + css + '\n</style>');
inline(/<script[^>]*src=["']js\/data\.js["'][^>]*>\s*<\/script>/, '<script>\n' + data + '\n</script>');
inline(/<script[^>]*src=["']js\/sentences\.js["'][^>]*>\s*<\/script>/, '<script>\n' + sent + '\n</script>');
inline(/<script[^>]*src=["']js\/words\.js["'][^>]*>\s*<\/script>/, '<script>\n' + words + '\n</script>');
inline(/<script[^>]*src=["']js\/phonics\.js["'][^>]*>\s*<\/script>/, '<script>\n' + phx + '\n</script>');
inline(/<script[^>]*src=["']js\/textbook\.js["'][^>]*>\s*<\/script>/, '<script>\n' + tb + '\n</script>');
inline(/<script[^>]*src=["']js\/app\.js["'][^>]*>\s*<\/script>/, '<script>\n' + app + '\n</script>');

fs.writeFileSync(dir + '/english-mastery-standalone.html', html);
console.log('STANDALONE_OK bytes=' + html.length);
