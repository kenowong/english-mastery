/*
 * english-mastery · 自然拼读数据与规则引擎（PHONICS）
 * 为「🔤 拼读拆解」提供每个词的四件事：
 *   1) 音节切分（yes·ter·day）  2) 音标（/ˈjestədeɪ/）
 *   3) 音素序列（/j/ /e/ /s/ /t/ /ə/ /d/ /eɪ/）  4) 自然拼读映射（字母组合 → 发音）
 *
 * ⚠️ 数据准确度声明（重要，请勿隐瞒使用者）：
 *   - window.PHONICS：**人工逐词校对**的高频基础词（音标按英式/课标常用记法），
 *     每条都满足「g 里所有字母组合按顺序拼起来 == 该单词本身」，可被 tools/check_phonics.js 自动校验。
 *   - 其余单词由下方**规则引擎**按自然拼读规则推导（开闭音节、magic-e、常见字母组合），
 *     结果标记 src:"rule"，界面上显示「规则推导 · 近似」徽标。
 *     英语存在大量不规则词，规则推导**可能出错**，仅供参考，不作为权威音标。
 *   - 要 100% 准确，请以词典/教材音标为准，并把校对好的词条补进 window.PHONICS。
 *
 * 字段：s = 音节数组；i = 音标；g = [[字母组合, 音标], ...]（音标 "" 表示不发音）
 */
(function () {
  "use strict";

  /* ============================================================
   * 一、人工校对词表（优先级最高）
   * ============================================================ */
  window.PHONICS = {
    /* —— 人称代词 / be 动词 / 冠词 / 连词 —— */
    "i": { s: ["I"], i: "/aɪ/", g: [["I", "/aɪ/"]] },
    "you": { s: ["you"], i: "/juː/", g: [["y", "/j/"], ["ou", "/uː/"]] },
    "he": { s: ["he"], i: "/hiː/", g: [["h", "/h/"], ["e", "/iː/"]] },
    "she": { s: ["she"], i: "/ʃiː/", g: [["sh", "/ʃ/"], ["e", "/iː/"]] },
    "we": { s: ["we"], i: "/wiː/", g: [["w", "/w/"], ["e", "/iː/"]] },
    "they": { s: ["they"], i: "/ðeɪ/", g: [["th", "/ð/"], ["ey", "/eɪ/"]] },
    "am": { s: ["am"], i: "/æm/", g: [["a", "/æ/"], ["m", "/m/"]] },
    "is": { s: ["is"], i: "/ɪz/", g: [["i", "/ɪ/"], ["s", "/z/"]] },
    "are": { s: ["are"], i: "/ɑː/", g: [["a", "/ɑː/"], ["re", ""]] },
    "have": { s: ["have"], i: "/hæv/", g: [["h", "/h/"], ["a", "/æ/"], ["ve", "/v/"]] },
    "has": { s: ["has"], i: "/hæz/", g: [["h", "/h/"], ["a", "/æ/"], ["s", "/z/"]] },
    "a": { s: ["a"], i: "/ə/", g: [["a", "/ə/"]] },
    "an": { s: ["an"], i: "/ən/", g: [["a", "/ə/"], ["n", "/n/"]] },
    "the": { s: ["the"], i: "/ðə/", g: [["th", "/ð/"], ["e", "/ə/"]] },
    "and": { s: ["and"], i: "/ænd/", g: [["a", "/æ/"], ["n", "/n/"], ["d", "/d/"]] },

    /* —— 颜色 —— */
    "red": { s: ["red"], i: "/red/", g: [["r", "/r/"], ["e", "/e/"], ["d", "/d/"]] },
    "blue": { s: ["blue"], i: "/bluː/", g: [["b", "/b/"], ["l", "/l/"], ["ue", "/uː/"]] },
    "green": { s: ["green"], i: "/ɡriːn/", g: [["g", "/ɡ/"], ["r", "/r/"], ["ee", "/iː/"], ["n", "/n/"]] },
    "yellow": { s: ["yel", "low"], i: "/ˈjeləʊ/", g: [["y", "/j/"], ["e", "/e/"], ["ll", "/l/"], ["ow", "/əʊ/"]] },

    /* —— 数字 —— */
    "one": { s: ["one"], i: "/wʌn/", g: [["o", "/wʌ/"], ["n", "/n/"], ["e", ""]] },
    "two": { s: ["two"], i: "/tuː/", g: [["t", "/t/"], ["w", ""], ["o", "/uː/"]] },
    "three": { s: ["three"], i: "/θriː/", g: [["th", "/θ/"], ["r", "/r/"], ["ee", "/iː/"]] },
    "four": { s: ["four"], i: "/fɔː/", g: [["f", "/f/"], ["our", "/ɔː/"]] },
    "five": { s: ["five"], i: "/faɪv/", g: [["f", "/f/"], ["i", "/aɪ/"], ["ve", "/v/"]] },
    "six": { s: ["six"], i: "/sɪks/", g: [["s", "/s/"], ["i", "/ɪ/"], ["x", "/ks/"]] },
    "seven": { s: ["sev", "en"], i: "/ˈsevn/", g: [["s", "/s/"], ["e", "/e/"], ["v", "/v/"], ["e", "/ə/"], ["n", "/n/"]] },
    "eight": { s: ["eight"], i: "/eɪt/", g: [["eigh", "/eɪ/"], ["t", "/t/"]] },
    "nine": { s: ["nine"], i: "/naɪn/", g: [["n", "/n/"], ["i", "/aɪ/"], ["ne", "/n/"]] },
    "ten": { s: ["ten"], i: "/ten/", g: [["t", "/t/"], ["e", "/e/"], ["n", "/n/"]] },

    /* —— 基础名词 —— */
    "apple": { s: ["ap", "ple"], i: "/ˈæpəl/", g: [["a", "/æ/"], ["pp", "/p/"], ["le", "/əl/"]] },
    "book": { s: ["book"], i: "/bʊk/", g: [["b", "/b/"], ["oo", "/ʊ/"], ["k", "/k/"]] },
    "cat": { s: ["cat"], i: "/kæt/", g: [["c", "/k/"], ["a", "/æ/"], ["t", "/t/"]] },
    "dog": { s: ["dog"], i: "/dɒɡ/", g: [["d", "/d/"], ["o", "/ɒ/"], ["g", "/ɡ/"]] },
    "pen": { s: ["pen"], i: "/pen/", g: [["p", "/p/"], ["e", "/e/"], ["n", "/n/"]] },
    "bag": { s: ["bag"], i: "/bæɡ/", g: [["b", "/b/"], ["a", "/æ/"], ["g", "/ɡ/"]] },

    /* —— 动物 —— */
    "bird": { s: ["bird"], i: "/bɜːd/", g: [["b", "/b/"], ["ir", "/ɜː/"], ["d", "/d/"]] },
    "fish": { s: ["fish"], i: "/fɪʃ/", g: [["f", "/f/"], ["i", "/ɪ/"], ["sh", "/ʃ/"]] },
    "pig": { s: ["pig"], i: "/pɪɡ/", g: [["p", "/p/"], ["i", "/ɪ/"], ["g", "/ɡ/"]] },
    "cow": { s: ["cow"], i: "/kaʊ/", g: [["c", "/k/"], ["ow", "/aʊ/"]] },
    "duck": { s: ["duck"], i: "/dʌk/", g: [["d", "/d/"], ["u", "/ʌ/"], ["ck", "/k/"]] },
    "panda": { s: ["pan", "da"], i: "/ˈpændə/", g: [["p", "/p/"], ["a", "/æ/"], ["n", "/n/"], ["d", "/d/"], ["a", "/ə/"]] },
    "tiger": { s: ["ti", "ger"], i: "/ˈtaɪɡə/", g: [["t", "/t/"], ["i", "/aɪ/"], ["g", "/ɡ/"], ["er", "/ə/"]] },
    "lion": { s: ["li", "on"], i: "/ˈlaɪən/", g: [["l", "/l/"], ["i", "/aɪ/"], ["o", "/ə/"], ["n", "/n/"]] },
    "rabbit": { s: ["rab", "bit"], i: "/ˈræbɪt/", g: [["r", "/r/"], ["a", "/æ/"], ["bb", "/b/"], ["i", "/ɪ/"], ["t", "/t/"]] },
    "monkey": { s: ["mon", "key"], i: "/ˈmʌŋki/", g: [["m", "/m/"], ["o", "/ʌ/"], ["n", "/n/"], ["k", "/k/"], ["ey", "/i/"]] },
    "elephant": { s: ["e", "le", "phant"], i: "/ˈelɪfənt/", g: [["e", "/e/"], ["le", "/lɪ/"], ["ph", "/f/"], ["a", "/ə/"], ["n", "/n/"], ["t", "/t/"]] },
    "bear": { s: ["bear"], i: "/beə/", g: [["b", "/b/"], ["ear", "/eə/"]] },
    "chicken": { s: ["chick", "en"], i: "/ˈtʃɪkɪn/", g: [["ch", "/tʃ/"], ["i", "/ɪ/"], ["ck", "/k/"], ["e", "/ɪ/"], ["n", "/n/"]] },
    "horse": { s: ["horse"], i: "/hɔːs/", g: [["h", "/h/"], ["or", "/ɔː/"], ["s", "/s/"], ["e", ""]] },
    "sheep": { s: ["sheep"], i: "/ʃiːp/", g: [["sh", "/ʃ/"], ["ee", "/iː/"], ["p", "/p/"]] },
    "mouse": { s: ["mouse"], i: "/maʊs/", g: [["m", "/m/"], ["ou", "/aʊ/"], ["s", "/s/"], ["e", ""]] },
    "snake": { s: ["snake"], i: "/sneɪk/", g: [["s", "/s/"], ["n", "/n/"], ["a", "/eɪ/"], ["k", "/k/"], ["e", ""]] },
    "zoo": { s: ["zoo"], i: "/zuː/", g: [["z", "/z/"], ["oo", "/uː/"]] },

    /* —— 食物 —— */
    "egg": { s: ["egg"], i: "/eɡ/", g: [["e", "/e/"], ["gg", "/ɡ/"]] },
    "rice": { s: ["rice"], i: "/raɪs/", g: [["r", "/r/"], ["i", "/aɪ/"], ["c", "/s/"], ["e", ""]] },
    "milk": { s: ["milk"], i: "/mɪlk/", g: [["m", "/m/"], ["i", "/ɪ/"], ["l", "/l/"], ["k", "/k/"]] },
    "bread": { s: ["bread"], i: "/bred/", g: [["b", "/b/"], ["r", "/r/"], ["ea", "/e/"], ["d", "/d/"]] },
    "water": { s: ["wa", "ter"], i: "/ˈwɔːtə/", g: [["w", "/w/"], ["a", "/ɔː/"], ["t", "/t/"], ["er", "/ə/"]] },
    "banana": { s: ["ba", "na", "na"], i: "/bəˈnɑːnə/", g: [["b", "/b/"], ["a", "/ə/"], ["n", "/n/"], ["a", "/ɑː/"], ["n", "/n/"], ["a", "/ə/"]] },
    "orange": { s: ["or", "ange"], i: "/ˈɒrɪndʒ/", g: [["o", "/ɒ/"], ["r", "/r/"], ["a", "/ɪ/"], ["n", "/n/"], ["g", "/dʒ/"], ["e", ""]] },
    "pear": { s: ["pear"], i: "/peə/", g: [["p", "/p/"], ["ear", "/eə/"]] },
    "cake": { s: ["cake"], i: "/keɪk/", g: [["c", "/k/"], ["a", "/eɪ/"], ["k", "/k/"], ["e", ""]] },
    "meat": { s: ["meat"], i: "/miːt/", g: [["m", "/m/"], ["ea", "/iː/"], ["t", "/t/"]] },
    "noodle": { s: ["noo", "dle"], i: "/ˈnuːdəl/", g: [["n", "/n/"], ["oo", "/uː/"], ["d", "/d/"], ["le", "/əl/"]] },
    "tea": { s: ["tea"], i: "/tiː/", g: [["t", "/t/"], ["ea", "/iː/"]] },
    "juice": { s: ["juice"], i: "/dʒuːs/", g: [["j", "/dʒ/"], ["ui", "/uː/"], ["c", "/s/"], ["e", ""]] },
    "candy": { s: ["can", "dy"], i: "/ˈkændi/", g: [["c", "/k/"], ["a", "/æ/"], ["n", "/n/"], ["d", "/d/"], ["y", "/i/"]] },
    "hamburger": { s: ["ham", "bur", "ger"], i: "/ˈhæmbɜːɡə/", g: [["h", "/h/"], ["a", "/æ/"], ["m", "/m/"], ["b", "/b/"], ["ur", "/ɜː/"], ["g", "/ɡ/"], ["er", "/ə/"]] },

    /* —— 学校 —— */
    "pencil": { s: ["pen", "cil"], i: "/ˈpensəl/", g: [["p", "/p/"], ["e", "/e/"], ["n", "/n/"], ["c", "/s/"], ["i", "/ə/"], ["l", "/l/"]] },
    "school": { s: ["school"], i: "/skuːl/", g: [["s", "/s/"], ["ch", "/k/"], ["oo", "/uː/"], ["l", "/l/"]] },
    "teacher": { s: ["teach", "er"], i: "/ˈtiːtʃə/", g: [["t", "/t/"], ["ea", "/iː/"], ["ch", "/tʃ/"], ["er", "/ə/"]] },
    "student": { s: ["stu", "dent"], i: "/ˈstjuːdnt/", g: [["s", "/s/"], ["t", "/t/"], ["u", "/juː/"], ["d", "/d/"], ["e", "/ə/"], ["n", "/n/"], ["t", "/t/"]] },

    /* —— 第二批：规则必然读错的高频词（不规则拼写、哑音字母、特殊重音） —— */
    "father": { s: ["fa", "ther"], i: "/ˈfɑːðə/", g: [["f", "/f/"], ["a", "/ɑː/"], ["th", "/ð/"], ["er", "/ə/"]] },
    "mother": { s: ["mo", "ther"], i: "/ˈmʌðə/", g: [["m", "/m/"], ["o", "/ʌ/"], ["th", "/ð/"], ["er", "/ə/"]] },
    "brother": { s: ["bro", "ther"], i: "/ˈbrʌðə/", g: [["b", "/b/"], ["r", "/r/"], ["o", "/ʌ/"], ["th", "/ð/"], ["er", "/ə/"]] },
    "sister": { s: ["sis", "ter"], i: "/ˈsɪstə/", g: [["s", "/s/"], ["i", "/ɪ/"], ["s", "/s/"], ["t", "/t/"], ["er", "/ə/"]] },
    "son": { s: ["son"], i: "/sʌn/", g: [["s", "/s/"], ["o", "/ʌ/"], ["n", "/n/"]] },
    "daughter": { s: ["daugh", "ter"], i: "/ˈdɔːtə/", g: [["d", "/d/"], ["au", "/ɔː/"], ["gh", ""], ["t", "/t/"], ["er", "/ə/"]] },
    "aunt": { s: ["aunt"], i: "/ɑːnt/", g: [["au", "/ɑː/"], ["n", "/n/"], ["t", "/t/"]] },
    "uncle": { s: ["un", "cle"], i: "/ˈʌŋkl/", g: [["u", "/ʌ/"], ["n", "/ŋ/"], ["c", "/k/"], ["l", "/əl/"], ["e", ""]] },
    "family": { s: ["fam", "i", "ly"], i: "/ˈfæməli/", g: [["f", "/f/"], ["a", "/æ/"], ["m", "/m/"], ["i", "/ə/"], ["l", "/l/"], ["y", "/i/"]] },
    "baby": { s: ["ba", "by"], i: "/ˈbeɪbi/", g: [["b", "/b/"], ["a", "/eɪ/"], ["b", "/b/"], ["y", "/i/"]] },
    "friend": { s: ["friend"], i: "/frend/", g: [["f", "/f/"], ["r", "/r/"], ["ie", "/e/"], ["n", "/n/"], ["d", "/d/"]] },
    "happy": { s: ["hap", "py"], i: "/ˈhæpi/", g: [["h", "/h/"], ["a", "/æ/"], ["pp", "/p/"], ["y", "/i/"]] },
    "dance": { s: ["dance"], i: "/dɑːns/", g: [["d", "/d/"], ["a", "/ɑː/"], ["n", "/n/"], ["c", "/s/"], ["e", ""]] },
    "walk": { s: ["walk"], i: "/wɔːk/", g: [["w", "/w/"], ["al", "/ɔː/"], ["k", "/k/"]] },
    "learn": { s: ["learn"], i: "/lɜːn/", g: [["l", "/l/"], ["ear", "/ɜː/"], ["n", "/n/"]] },
    "listen": { s: ["lis", "ten"], i: "/ˈlɪsn/", g: [["l", "/l/"], ["i", "/ɪ/"], ["s", "/s/"], ["t", ""], ["e", "/ə/"], ["n", "/n/"]] },
    "write": { s: ["write"], i: "/raɪt/", g: [["w", ""], ["r", "/r/"], ["i", "/aɪ/"], ["t", "/t/"], ["e", ""]] },
    "read": { s: ["read"], i: "/riːd/", g: [["r", "/r/"], ["ea", "/iː/"], ["d", "/d/"]] },
    "play": { s: ["play"], i: "/pleɪ/", g: [["p", "/p/"], ["l", "/l/"], ["ay", "/eɪ/"]] },
    "fly": { s: ["fly"], i: "/flaɪ/", g: [["f", "/f/"], ["l", "/l/"], ["y", "/aɪ/"]] },
    "sky": { s: ["sky"], i: "/skaɪ/", g: [["s", "/s/"], ["k", "/k/"], ["y", "/aɪ/"]] },
    "rain": { s: ["rain"], i: "/reɪn/", g: [["r", "/r/"], ["ai", "/eɪ/"], ["n", "/n/"]] },
    "cloud": { s: ["cloud"], i: "/klaʊd/", g: [["c", "/k/"], ["l", "/l/"], ["ou", "/aʊ/"], ["d", "/d/"]] },
    "wind": { s: ["wind"], i: "/wɪnd/", g: [["w", "/w/"], ["i", "/ɪ/"], ["n", "/n/"], ["d", "/d/"]] },
    "sun": { s: ["sun"], i: "/sʌn/", g: [["s", "/s/"], ["u", "/ʌ/"], ["n", "/n/"]] },
    "moon": { s: ["moon"], i: "/muːn/", g: [["m", "/m/"], ["oo", "/uː/"], ["n", "/n/"]] },
    "star": { s: ["star"], i: "/stɑː/", g: [["s", "/s/"], ["t", "/t/"], ["ar", "/ɑː/"]] },
    "tree": { s: ["tree"], i: "/triː/", g: [["t", "/t/"], ["r", "/r/"], ["ee", "/iː/"]] },
    "grass": { s: ["grass"], i: "/ɡrɑːs/", g: [["g", "/ɡ/"], ["r", "/r/"], ["a", "/ɑː/"], ["ss", "/s/"]] },
    "flower": { s: ["flow", "er"], i: "/ˈflaʊə/", g: [["f", "/f/"], ["l", "/l/"], ["ow", "/aʊ/"], ["er", "/ə/"]] },
    "fire": { s: ["fi", "re"], i: "/ˈfaɪə/", g: [["f", "/f/"], ["i", "/aɪ/"], ["re", "/ə/"]] },
    "eat": { s: ["eat"], i: "/iːt/", g: [["ea", "/iː/"], ["t", "/t/"]] },
    "run": { s: ["run"], i: "/rʌn/", g: [["r", "/r/"], ["u", "/ʌ/"], ["n", "/n/"]] },
    "look": { s: ["look"], i: "/lʊk/", g: [["l", "/l/"], ["oo", "/ʊ/"], ["k", "/k/"]] },
    "sing": { s: ["sing"], i: "/sɪŋ/", g: [["s", "/s/"], ["i", "/ɪ/"], ["ng", "/ŋ/"]] },
    "open": { s: ["o", "pen"], i: "/ˈəʊpən/", g: [["o", "/əʊ/"], ["p", "/p/"], ["e", "/ə/"], ["n", "/n/"]] },
    "close": { s: ["close"], i: "/kləʊz/", g: [["c", "/k/"], ["l", "/l/"], ["o", "/əʊ/"], ["s", "/z/"], ["e", ""]] },
    "week": { s: ["week"], i: "/wiːk/", g: [["w", "/w/"], ["ee", "/iː/"], ["k", "/k/"]] },
    "month": { s: ["month"], i: "/mʌnθ/", g: [["m", "/m/"], ["o", "/ʌ/"], ["n", "/n/"], ["th", "/θ/"]] },
    "year": { s: ["year"], i: "/jɪə/", g: [["y", "/j/"], ["ear", "/ɪə/"]] },
    "morning": { s: ["morn", "ing"], i: "/ˈmɔːnɪŋ/", g: [["m", "/m/"], ["or", "/ɔː/"], ["n", "/n/"], ["i", "/ɪ/"], ["ng", "/ŋ/"]] },
    "evening": { s: ["eve", "ning"], i: "/ˈiːvnɪŋ/", g: [["e", "/iː/"], ["v", "/v/"], ["e", ""], ["n", "/n/"], ["i", "/ɪ/"], ["ng", "/ŋ/"]] },
    "weather": { s: ["wea", "ther"], i: "/ˈweðə/", g: [["w", "/w/"], ["ea", "/e/"], ["th", "/ð/"], ["er", "/ə/"]] },
    "healthy": { s: ["health", "y"], i: "/ˈhelθi/", g: [["h", "/h/"], ["ea", "/e/"], ["l", "/l/"], ["th", "/θ/"], ["y", "/i/"]] },
    "music": { s: ["mu", "sic"], i: "/ˈmjuːzɪk/", g: [["m", "/m/"], ["u", "/juː/"], ["s", "/z/"], ["i", "/ɪ/"], ["c", "/k/"]] },
    "art": { s: ["art"], i: "/ɑːt/", g: [["ar", "/ɑː/"], ["t", "/t/"]] },
    "science": { s: ["sci", "ence"], i: "/ˈsaɪəns/", g: [["sci", "/saɪ/"], ["ence", "/əns/"]] },
    "english": { s: ["eng", "lish"], i: "/ˈɪŋɡlɪʃ/", g: [["e", "/ɪ/"], ["ng", "/ŋ/"], ["l", "/l/"], ["i", "/ɪ/"], ["sh", "/ʃ/"]] },
    "chinese": { s: ["chi", "nese"], i: "/ˌtʃaɪˈniːz/", g: [["ch", "/tʃ/"], ["i", "/aɪ/"], ["n", "/n/"], ["e", "/iː/"], ["s", "/z/"], ["e", ""]] },
    "exam": { s: ["ex", "am"], i: "/ɪɡˈzæm/", g: [["e", "/ɪ/"], ["x", "/ɡz/"], ["a", "/æ/"], ["m", "/m/"]] },
    "subject": { s: ["sub", "ject"], i: "/ˈsʌbdʒɪkt/", g: [["s", "/s/"], ["u", "/ʌ/"], ["b", "/b/"], ["j", "/dʒ/"], ["e", "/ɪ/"], ["c", "/k/"], ["t", "/t/"]] },
    "homework": { s: ["home", "work"], i: "/ˈhəʊmwɜːk/", g: [["h", "/h/"], ["o", "/əʊ/"], ["m", "/m/"], ["e", ""], ["w", "/w/"], ["or", "/ɜː/"], ["k", "/k/"]] },
    "question": { s: ["ques", "tion"], i: "/ˈkwestʃən/", g: [["qu", "/kw/"], ["e", "/e/"], ["s", "/s/"], ["tion", "/ʃən/"]] },
    "answer": { s: ["an", "swer"], i: "/ˈɑːnsə/", g: [["a", "/ɑː/"], ["n", "/n/"], ["s", ""], ["w", ""], ["er", "/ə/"]] },
    "computer": { s: ["com", "pu", "ter"], i: "/kəmˈpjuːtə/", g: [["c", "/k/"], ["o", "/ə/"], ["m", "/m/"], ["p", "/p/"], ["u", "/juː/"], ["t", "/t/"], ["er", "/ə/"]] },
    "internet": { s: ["in", "ter", "net"], i: "/ˈɪntənet/", g: [["i", "/ɪ/"], ["n", "/n/"], ["t", "/t/"], ["er", "/ə/"], ["n", "/n/"], ["e", "/e/"], ["t", "/t/"]] },
    "exercise": { s: ["ex", "er", "cise"], i: "/ˈeksəsaɪz/", g: [["e", "/e/"], ["x", "/ks/"], ["er", "/ə/"], ["c", "/s/"], ["i", "/aɪ/"], ["s", "/z/"], ["e", ""]] },
    "important": { s: ["im", "por", "tant"], i: "/ɪmˈpɔːtnt/", g: [["i", "/ɪ/"], ["m", "/m/"], ["p", "/p/"], ["or", "/ɔː/"], ["t", "/t/"], ["a", "/ə/"], ["n", "/n/"], ["t", "/t/"]] },
    "different": { s: ["dif", "fer", "ent"], i: "/ˈdɪfrənt/", g: [["d", "/d/"], ["i", "/ɪ/"], ["ff", "/f/"], ["er", "/ə/"], ["e", "/ə/"], ["n", "/n/"], ["t", "/t/"]] },
    "together": { s: ["to", "geth", "er"], i: "/təˈɡeðə/", g: [["t", "/t/"], ["o", "/ə/"], ["g", "/ɡ/"], ["e", "/e/"], ["th", "/ð/"], ["er", "/ə/"]] },
    "beautiful": { s: ["beau", "ti", "ful"], i: "/ˈbjuːtɪfl/", g: [["b", "/b/"], ["eau", "/juː/"], ["t", "/t/"], ["i", "/ɪ/"], ["f", "/f/"], ["u", ""], ["l", "/l/"]] },
    "favorite": { s: ["fa", "vor", "ite"], i: "/ˈfeɪvərɪt/", g: [["f", "/f/"], ["a", "/eɪ/"], ["v", "/v/"], ["o", "/ə/"], ["r", "/r/"], ["i", "/ɪ/"], ["t", "/t/"], ["e", ""]] },
    "because": { s: ["be", "cause"], i: "/bɪˈkɒz/", g: [["b", "/b/"], ["e", "/ɪ/"], ["c", "/k/"], ["au", "/ɒ/"], ["s", "/z/"], ["e", ""]] },
    "before": { s: ["be", "fore"], i: "/bɪˈfɔː/", g: [["b", "/b/"], ["e", "/ɪ/"], ["f", "/f/"], ["o", "/ɔː/"], ["re", ""]] },
    "after": { s: ["af", "ter"], i: "/ˈɑːftə/", g: [["a", "/ɑː/"], ["f", "/f/"], ["t", "/t/"], ["er", "/ə/"]] },
    "always": { s: ["al", "ways"], i: "/ˈɔːlweɪz/", g: [["al", "/ɔːl/"], ["w", "/w/"], ["ay", "/eɪ/"], ["s", "/z/"]] },
    "never": { s: ["ne", "ver"], i: "/ˈnevə/", g: [["n", "/n/"], ["e", "/e/"], ["v", "/v/"], ["er", "/ə/"]] },
    "dictionary": { s: ["dic", "tion", "ar", "y"], i: "/ˈdɪkʃənəri/", g: [["d", "/d/"], ["i", "/ɪ/"], ["c", "/k/"], ["tion", "/ʃən/"], ["ar", "/ə/"], ["y", "/i/"]] },
    "vacation": { s: ["va", "ca", "tion"], i: "/vəˈkeɪʃn/", g: [["v", "/v/"], ["a", "/ə/"], ["c", "/k/"], ["a", "/eɪ/"], ["tion", "/ʃən/"]] },
    "classroom": { s: ["class", "room"], i: "/ˈklɑːsruːm/", g: [["c", "/k/"], ["l", "/l/"], ["a", "/ɑː/"], ["ss", "/s/"], ["r", "/r/"], ["oo", "/uː/"], ["m", "/m/"]] },
    "blackboard": { s: ["black", "board"], i: "/ˈblækbɔːd/", g: [["b", "/b/"], ["l", "/l/"], ["a", "/æ/"], ["ck", "/k/"], ["b", "/b/"], ["oar", "/ɔː/"], ["d", "/d/"]] },
    "ruler": { s: ["ru", "ler"], i: "/ˈruːlə/", g: [["r", "/r/"], ["u", "/uː/"], ["l", "/l/"], ["er", "/ə/"]] },
    "desk": { s: ["desk"], i: "/desk/", g: [["d", "/d/"], ["e", "/e/"], ["s", "/s/"], ["k", "/k/"]] },
    "chair": { s: ["chair"], i: "/tʃeə/", g: [["ch", "/tʃ/"], ["air", "/eə/"]] },

    /* —— 多音节示例（参考图同款） —— */
    "yesterday": { s: ["yes", "ter", "day"], i: "/ˈjestədeɪ/", g: [["y", "/j/"], ["e", "/e/"], ["st", "/st/"], ["er", "/ə/"], ["d", "/d/"], ["ay", "/eɪ/"]] },

    /* —— 规则引擎易错的常见词（人工补校，避免推导出 eye→/ie/、store→/stə/ 之类） —— */
    "eye": { s: ["eye"], i: "/aɪ/", g: [["eye", "/aɪ/"]] },
    "buy": { s: ["buy"], i: "/baɪ/", g: [["b", "/b/"], ["uy", "/aɪ/"]] },
    "store": { s: ["store"], i: "/stɔː/", g: [["s", "/s/"], ["t", "/t/"], ["ore", "/ɔː/"]] },
    "island": { s: ["is", "land"], i: "/ˈaɪlənd/", g: [["i", "/aɪ/"], ["s", ""], ["l", "/l/"], ["a", "/ə/"], ["n", "/n/"], ["d", "/d/"]] },
    "knowledge": { s: ["know", "ledge"], i: "/ˈnɒlɪdʒ/", g: [["k", ""], ["n", "/n/"], ["ow", "/ɒ/"], ["l", "/l/"], ["e", "/ɪ/"], ["dge", "/dʒ/"]] },
    "hospital": { s: ["hos", "pi", "tal"], i: "/ˈhɒspɪtl/", g: [["h", "/h/"], ["o", "/ɒ/"], ["s", "/s/"], ["p", "/p/"], ["i", "/ɪ/"], ["t", "/t/"], ["a", "/ə/"], ["l", "/l/"]] },
    "history": { s: ["his", "to", "ry"], i: "/ˈhɪstri/", g: [["h", "/h/"], ["i", "/ɪ/"], ["s", "/s/"], ["t", "/t/"], ["o", "/ə/"], ["r", "/r/"], ["y", "/i/"]] },
    "clothes": { s: ["clothes"], i: "/kləʊðz/", g: [["c", "/k/"], ["l", "/l/"], ["o", "/əʊ/"], ["th", "/ð/"], ["e", ""], ["s", "/z/"]] }
  };

  /* ============================================================
   * 二、音素近似朗读表：把音标近似成语音合成器读得出的拼写
   *     仅用于「点读单个音」，是近似音，不是真人示范。
   * ============================================================ */
  /* 音素 → 例词（点击「学」里的格子听到的示范音）。
   * 用关键词法：TTS 读例词，其重读开头就是该音素的正确发音，
   * 比旧版把 /θ/ 写成 "th"（TTS 读成 tee-aitch）、/æ/ 写成 "aah"（读成 ah）可靠得多。 */
  window.PHONICS_SPEAK = {
    "/j/": "yes", "/w/": "we", "/e/": "egg", "/s/": "sun", "/t/": "top", "/d/": "dog",
    "/ə/": "about", "/ʌ/": "cup", "/ɪ/": "it", "/ɒ/": "hot", "/æ/": "apple", "/eɪ/": "cake",
    "/iː/": "see", "/uː/": "zoo", "/ʊ/": "book", "/ɜː/": "bird", "/ɑː/": "car", "/ɔː/": "door",
    "/aɪ/": "eye", "/aʊ/": "out", "/ɔɪ/": "boy", "/əʊ/": "go", "/eə/": "hair", "/ɪə/": "ear",
    "/b/": "big", "/p/": "pig", "/k/": "cat", "/ɡ/": "go", "/f/": "fish", "/v/": "van",
    "/z/": "zoo", "/m/": "man", "/n/": "no", "/l/": "leg", "/r/": "red",
    "/h/": "hat", "/ʃ/": "she", "/tʃ/": "chair", "/θ/": "thumb", "/ð/": "this", "/dʒ/": "jump",
    "/ŋ/": "sing", "/ks/": "box", "/kw/": "queen", "/st/": "star", "/ŋk/": "ink",
    "/əl/": "apple", "/lɪ/": "little", "/ʃən/": "nation", "/ʒən/": "vision", "/wʌ/": "one", "/juː/": "you",
    "/saɪ/": "rice", "/əns/": "dance", "/ɡz/": "exam", "/i/": "see", "/ɔːl/": "all",
    "/jʊə/": "Europe"
  };

  /* 音素 → 单音示范（用于「学」里点格子听的单个音，也用于「读 / 拼读」的逐音拼读）。
   * 两条硬规则（否则 TTS 会读错）：
   *   ① 辅音一律写成「辅音 + 轻元音」：fuh / shuh / thuh / juh / nguh…
   *      —— 光写 "sh" "th" "ng" 会被读成字母名（ess-aitch / tee-aitch / en-jee），这是踩过的坑。
   *   ② 每个 token 必须含元音字母，保证 TTS 按「音」读，而不是按「字母名」读。
   * 元音本身即该音，用最短的可读片段（it / et / at / ah / ay…）。全部为近似示范，
   * 标准整词发音以「听整词 / 听示范 / 连起来拼读」读出的真实单词为准。 */
  window.PHONICS_BLEND = {
    "/j/": "yuh", "/w/": "wuh", "/e/": "et", "/s/": "suh", "/t/": "tuh", "/d/": "duh",
    "/ə/": "uh", "/ʌ/": "uh", "/ɪ/": "it", "/ɒ/": "ot", "/æ/": "at", "/eɪ/": "ay",
    "/iː/": "ee", "/uː/": "oo", "/ʊ/": "ook", "/ɜː/": "er", "/ɑː/": "ah", "/ɔː/": "aw",
    "/aɪ/": "eye", "/aʊ/": "ow", "/ɔɪ/": "oy", "/əʊ/": "oh", "/eə/": "air", "/ɪə/": "ear",
    "/b/": "buh", "/p/": "puh", "/k/": "kuh", "/ɡ/": "guh", "/f/": "fuh", "/v/": "vuh",
    "/z/": "zuh", "/m/": "muh", "/n/": "nuh", "/l/": "luh", "/r/": "ruh",
    "/h/": "huh", "/ʃ/": "shuh", "/tʃ/": "chuh", "/θ/": "thuh", "/ð/": "thuh", "/dʒ/": "juh",
    "/ŋ/": "nguh", "/ks/": "ksuh", "/kw/": "kwuh", "/st/": "stuh", "/ŋk/": "nkuh",
    "/əl/": "ul", "/lɪ/": "li", "/ʃən/": "shun", "/ʒən/": "zhun", "/juː/": "you", "/ɔːl/": "all",
    "/jʊə/": "you-er", "/saɪ/": "sigh", "/əns/": "unce", "/ɡz/": "guhz", "/wʌ/": "wuh"
  };

  /* ============================================================
   * 三、规则引擎（兜底推导，标记 src:"rule"）
   * ============================================================ */
  var VOWELS = "aeiou";

  // 多字母组合 → 音标（长组合优先匹配）
  var MULTI = [
    ["eigh", "/eɪ/"], ["igh", "/aɪ/"], ["tch", "/tʃ/"], ["dge", "/dʒ/"],
    ["tion", "/ʃən/"], ["sion", "/ʒən/"], ["ough", "/ʌf/"],
    ["alk", "/ɔːk/"], ["oar", "/ɔː/"], ["air", "/eə/"], ["ear", "/ɪə/"], ["oor", "/ɔː/"], ["our", "/ɔː/"], ["ure", "/jʊə/"],
    ["ck", "/k/"], ["sh", "/ʃ/"], ["ch", "/tʃ/"], ["th", "/θ/"], ["ph", "/f/"], ["wh", "/w/"],
    ["ng", "/ŋ/"], ["nk", "/ŋk/"], ["qu", "/kw/"], ["gh", ""],
    ["ee", "/iː/"], ["ea", "/iː/"], ["ai", "/eɪ/"], ["ay", "/eɪ/"], ["oa", "/əʊ/"], ["oe", "/əʊ/"],
    ["oi", "/ɔɪ/"], ["oy", "/ɔɪ/"], ["oo", "/uː/"], ["ou", "/aʊ/"], ["ow", "/aʊ/"], ["au", "/ɔː/"],
    ["aw", "/ɔː/"], ["ew", "/uː/"], ["ui", "/uː/"], ["ue", "/uː/"], ["ie", "/iː/"], ["ey", "/i/"],
    ["ll", "/l/"], ["ss", "/s/"], ["ff", "/f/"], ["zz", "/z/"], ["gg", "/ɡ/"], ["tt", "/t/"],
    ["pp", "/p/"], ["bb", "/b/"], ["dd", "/d/"], ["mm", "/m/"], ["nn", "/n/"], ["rr", "/r/"],
    ["ar", "/ɑː/"], ["or", "/ɔː/"], ["er", "/ɜː/"], ["ir", "/ɜː/"], ["ur", "/ɜː/"]
  ].sort(function (a, b) { return b[0].length - a[0].length; });

  var CONS = {
    b: "/b/", c: "/k/", d: "/d/", f: "/f/", g: "/ɡ/", h: "/h/", j: "/dʒ/", k: "/k/", l: "/l/",
    m: "/m/", n: "/n/", p: "/p/", q: "/kw/", r: "/r/", s: "/s/", t: "/t/", v: "/v/",
    w: "/w/", x: "/ks/", z: "/z/"
  };
  var SHORT_V = { a: "/æ/", e: "/e/", i: "/ɪ/", o: "/ɒ/", u: "/ʌ/" };
  var LONG_V = { a: "/eɪ/", e: "/iː/", i: "/aɪ/", o: "/əʊ/", u: "/uː/" };

  function isVowelLetter(c) { return VOWELS.indexOf(c) >= 0; }
  function isVowelSound(ph) { return /[aeiouæɒʌɪʊəɜiueeɔɑʌei]/.test(String(ph || "").replace(/[\/]/g, "")); }

  function tokenize(w) {
    var out = [], i = 0;
    while (i < w.length) {
      var hit = null;
      for (var k = 0; k < MULTI.length; k++) {
        if (w.substr(i, MULTI[k][0].length) === MULTI[k][0]) { hit = MULTI[k]; break; }
      }
      if (hit) { out.push({ g: hit[0], ph: hit[1], st: i, en: i + hit[0].length }); i += hit[0].length; }
      else { out.push({ g: w.charAt(i), ph: null, st: i, en: i + 1 }); i++; }
    }
    return out;
  }

  /* 不规则高频词的小修正表（比逐词校对省，又能挡住最常见的错）。
   * 这些词靠通用规则必然读错，用词表纠正；真正的逐词校正在上方 PHONICS。 */
  var EA_SHORT = ("head bread ready heavy health healthy breakfast weather feather dead death sweat thread " +
    "spread instead breath measure pleasure treasure deaf sweater").split(" ");
  var EAR_NURSE = "learn heard earth early earn search research heard".split(" ");
  var TH_VOICED = ("the this that these those they them then there than their mother father brother other " +
    "weather together either neither rather whether another").split(" ");

  function assignPhonemes(tokens, w) {
    // 词尾哑音 e：单词长于 3 个字母、以「辅音+e」结尾，且不是 le / ee / oe / ie 收尾
    var silentE = -1;
    if (w.length > 3 && /[^aeiou]e$/.test(w) && !/le$/.test(w) && !/[aeiou]e$/.test(w)) {
      silentE = tokens.length - 1;
    }
    // 词尾 -le（apple / uncle / table）：l 读 /əl/，e 不发音
    var leAt = -1;
    if (/[^aeiou]le$/.test(w) && tokens.length >= 2 &&
        tokens[tokens.length - 1].g === "e" && tokens[tokens.length - 2].g === "l") {
      leAt = tokens.length - 2;
      silentE = tokens.length - 1;
    }
    // magic-e：哑音 e 之前最后那个单字母元音读长音
    var longIdx = -1;
    if (silentE > 0) {
      for (var j = silentE - 1; j >= 0; j--) {
        if (tokens[j].ph !== null) break;
        if (tokens[j].g.length === 1 && isVowelLetter(tokens[j].g)) { longIdx = j; break; }
      }
    }
    // 估算整词元音音组数量（决定词尾 y 读 /i/ 还是 /aɪ/）
    var vowelSoundCount = 0;
    for (var a = 0; a < tokens.length; a++) {
      if (tokens[a].ph && isVowelSound(tokens[a].ph)) vowelSoundCount++;
      else if (tokens[a].ph === null && (isVowelLetter(tokens[a].g) || (tokens[a].g === "y" && a > 0))) vowelSoundCount++;
    }

    for (var i = 0; i < tokens.length; i++) {
      var t = tokens[i];
      if (t.ph !== null) continue;
      var c = t.g;
      if (i === silentE) { t.ph = ""; continue; }
      if (i === leAt) { t.ph = "/əl/"; continue; }
      if (c === "y") { t.ph = (i === 0) ? "/j/" : (vowelSoundCount <= 1 ? "/aɪ/" : "/i/"); continue; }
      if (isVowelLetter(c)) {
        if (i === longIdx) t.ph = LONG_V[c];
        else t.ph = SHORT_V[c];
        continue;
      }
      var nxt = (i + 1 < tokens.length) ? tokens[i + 1].g.charAt(0) : "";
      if (c === "c" && "eiy".indexOf(nxt) >= 0) { t.ph = "/s/"; continue; }
      if (c === "g" && "eiy".indexOf(nxt) >= 0) { t.ph = "/dʒ/"; continue; }
      if (c === "s" && i > 0 && i < tokens.length - 1 &&
          isVowelSound(tokens[i - 1].ph) && isVowelSound(tokens[i + 1].ph)) { t.ph = "/z/"; continue; }
      t.ph = CONS[c] || "";
    }

    // 词表修正（覆盖上面的默认判断）
    for (var x = 0; x < tokens.length; x++) {
      var g = tokens[x].g;
      if (g === "ea" && EA_SHORT.indexOf(w) >= 0) tokens[x].ph = "/e/";
      else if (g === "ear" && EAR_NURSE.indexOf(w) >= 0) tokens[x].ph = "/ɜː/";
      else if (g === "th") {
        if (TH_VOICED.indexOf(w) >= 0) tokens[x].ph = "/ð/";
        else if (x > 0 && x < tokens.length - 1 &&
                 isVowelSound(tokens[x - 1].ph) && isVowelSound(tokens[x + 1].ph)) tokens[x].ph = "/ð/";
      }
    }

    // 非重读词尾：-er / -or / -ar / -ur 读 /ə/（sister / doctor / dollar）
    for (var z = 0; z < tokens.length; z++) {
      if (!/^(er|or|ar|ur)$/.test(tokens[z].g)) continue;
      var last = (z === tokens.length - 1) ||
        (z === tokens.length - 2 && tokens[tokens.length - 1].ph === "");
      if (last) tokens[z].ph = "/ə/";
    }
  }

  // 音节切分：按「元音音组 + 中间辅音」的数量决定切点
  function splitSyllables(tokens, w) {
    var vs = [];
    for (var i = 0; i < tokens.length; i++) if (tokens[i].ph && isVowelSound(tokens[i].ph)) vs.push(i);
    if (vs.length < 2) return [w];
    var cuts = [];
    for (var k = 0; k < vs.length - 1; k++) {
      var between = tokens.slice(vs[k] + 1, vs[k + 1]);
      var cut;
      if (between.length === 0) cut = tokens[vs[k + 1]].st;                       // 元音相连：li|on
      else if (between.length === 1) {
        var t = between[0];
        if (/^(ck|ng|nk|tch|dge|gh)$/.test(t.g)) cut = t.en;                      // 不能起首的二合字母：归前
        else if (/^(ch|sh|th|ph|wh)$/.test(t.g)) cut = t.en;                      // 二合字母整体归前：teach|er
        else if (t.g.length === 2 && t.g.charAt(0) === t.g.charAt(1)) cut = t.st + 1; // 重叠辅音从中间切：rab|bit
        else cut = t.st;                                                          // V-CV：辅音归后
      } else cut = between[0].en;                                                 // 多辅音：切在第一个之后
      cuts.push(cut);
    }
    var out = [], prev = 0;
    for (var j = 0; j < cuts.length; j++) { out.push(w.slice(prev, cuts[j])); prev = cuts[j]; }
    out.push(w.slice(prev));
    return out.filter(function (s) { return s.length > 0; });
  }

  /* 统一出口：优先人工词表，其次规则推导 */
  window.phonicsFor = function (word) {
    var w = String(word || "").toLowerCase().trim();
    if (!w) return null;

    var cur = window.PHONICS[w];
    if (cur) {
      return {
        word: word, syl: cur.s.slice(), ipa: cur.i,
        seg: cur.g.map(function (p) { return [p[0], p[1]]; }),
        ph: cur.g.map(function (p) { return p[1]; }).filter(function (x) { return x !== ""; }),
        src: "curated"
      };
    }
    if (!/^[a-z]+$/.test(w)) return null;   // 含连字符 / 数字 / 空格等不推导
    if (String(word).length > 1 && String(word) === String(word).toUpperCase()) return null; // 全大写缩写（PE 等）不推导

    var tokens = tokenize(w);
    assignPhonemes(tokens, w);
    var syl = splitSyllables(tokens, w);
    var ph = [], seg = [];
    for (var i = 0; i < tokens.length; i++) {
      seg.push([tokens[i].g, tokens[i].ph]);
      if (tokens[i].ph !== "") ph.push(tokens[i].ph);
    }
    // 拼成整词音标：去掉每个音素自带的斜杠再合并
    var body = ph.map(function (p) { return p.replace(/\//g, ""); }).join("");
    if (syl.length > 1) body = "ˈ" + body;   // 近似：重音标首音节
    return { word: word, syl: syl, ipa: "/" + body + "/", seg: seg, ph: ph, src: "rule" };
  };
})();
