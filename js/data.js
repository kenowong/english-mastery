/*
 * english-mastery · 中小学英语学习技巧归档
 * 数据驱动：window.METHODS 定义全部技巧/方法/视频/练习
 * 结构对齐 math-mastery：纯前端、零依赖、离线可用、localStorage 进度
 *
 * 字段说明：
 *   id        唯一标识
 *   grade     primary(小学) | junior(初中) | senior(高中)
 *   gradeLabel
 *   dim       能力维度键：phonics/vocabulary/listening/speaking/reading/writing/grammar/habit
 *   dimLabel  维度中文
 *   icon      卡片 emoji
 *   title     方法名
 *   summary   一句话定位
 *   why       为什么有用（孩子视角的趣味说明）
 *   steps     核心步骤（数组）
 *   tips      实战窍门（数组）
 *   videos    推荐视频/资源 [{title,url}]（默认 B 站真实检索链接，可换成具体 BV）
 *   bv        可选：具体 B 站视频 BV 号，填了就内嵌播放器
 *   practice  互动小练习（可选）：{type:'flashcard'|'choice'|'fill'|'checklist', items:[...]}
 *   source    来源标注
 */

window.METHODS = [

  /* ===================== 小学 primary ===================== */
  {
    id: "p-phonics",
    grade: "primary", gradeLabel: "小学",
    dim: "phonics", dimLabel: "自然拼读",
    icon: "🔤",
    title: "自然拼读法 Phonics",
    summary: "见词能读、听音能写，把字母和声音直接挂钩",
    why: "不用再一个一个背单词怎么拼，像拼积木一样把声音拼出来，记单词快一倍还不容易忘。",
    steps: [
      "先学 26 个字母的「字母音」（a=/æ/ 不是「哎」），再学常见组合音（sh=/ʃ/、ch=/tʃ/、ee=/iː/）。",
      "练「拆音」：cat → /k/-/æ/-/t/，听到声音能写出字母。",
      "每天 5 个简单词拼读：cat / dog / pen / sun / map，拼对就给自己贴一颗星。",
      "用《牛津自然拼读》或 Starfall 游戏巩固，从单音节过渡到多音节。",
      "「听音能写」逆向训练：家长读 pen，孩子写出 p-e-n。"
    ],
    tips: [
      "千万别用汉字给英语注音（比如把 apple 标成「阿婆」），会毁掉发音。",
      "中段（三、四年级）是自然拼读黄金期，系统学完就能自主读分级读物。",
      "配高频词 Sight Words 一起练，见词能读 + 一眼认词，自主阅读两大基石。"
    ],
    videos: [
      { title: "B 站：自然拼读全套教学", url: "https://search.bilibili.com/all?keyword=自然拼读%20Phonics%20教学" },
      { title: "BBC 自然拼读动画（全集）", url: "https://search.bilibili.com/all?keyword=BBC%20Alphablocks%20自然拼读" }
    ],
    practice: {
      type: "flashcard",
      items: [
        { word: "cat", meaning: "猫" },
        { word: "dog", meaning: "狗" },
        { word: "pen", meaning: "钢笔" },
        { word: "sun", meaning: "太阳" },
        { word: "ship", meaning: "船" },
        { word: "fish", meaning: "鱼" },
        { word: "book", meaning: "书" },
        { word: "tree", meaning: "树" }
      ]
    },
    source: "来源：小学英语教师培训建议 / 家庭英语启蒙素养指南"
  },
  {
    id: "p-topic-words",
    grade: "primary", gradeLabel: "小学",
    dim: "vocabulary", dimLabel: "词汇",
    icon: "🗂️",
    title: "主题分类记词法",
    summary: "把单词按场景装进「词筐」，一次记一串",
    why: "孤立背单词像抓散沙，按主题（动物/食物/颜色）归类，大脑有抽屉放，考试写作随取随用。",
    steps: [
      "选一个主题：动物、食物、颜色、家庭、学校……每周一个。",
      "做单词卡：正面英文 + 图，背面中文 + 例句。",
      "用实物/图片联想：看到苹果就说 apple，贴在家里的物品上。",
      "每周学 10–15 个新词，周末用「我说你指」游戏复习。",
      "把同主题词串成小短文：I like apples, bananas and oranges."
    ],
    tips: [
      "小学阶段需掌握约 800 个基础词汇，按主题分批吃下不费力。",
      "建立「单词墙」：客厅贴满主题词卡，每天路过看一眼。"
    ],
    videos: [
      { title: "B 站：小学主题单词分类记忆", url: "https://search.bilibili.com/all?keyword=小学%20英语%20主题%20单词%20分类" }
    ],
    practice: {
      type: "choice",
      items: [
        { q: "「苹果」的英文是？", options: ["apple", "banana", "orange"], answer: "apple" },
        { q: "「猫」的英文是？", options: ["cat", "dog", "cow"], answer: "cat" },
        { q: "「红色」的英文是？", options: ["red", "blue", "green"], answer: "red" },
        { q: "「书」的英文是？", options: ["book", "look", "cook"], answer: "book" }
      ]
    },
    source: "来源：小学英语学习要点总结（路问教育）/ 许昌教师培训平台"
  },
  {
    id: "p-listen",
    grade: "primary", gradeLabel: "小学",
    dim: "listening", dimLabel: "听力",
    icon: "👂",
    title: "磨耳朵听力启蒙",
    summary: "每天 15 分钟可理解输入，耳朵先「醒」过来",
    why: "小孩是语言模仿家，耳朵对声音超敏感。每天磨耳朵，语音语感悄悄就长了，不枯燥还好玩。",
    steps: [
      "选慢速、有趣的材料：《Super Simple Songs》《Peppa Pig》《English Singsing》。",
      "「可理解输入」：配合动画/图画/动作，知道在说什么再听。",
      "TPR 全身反应：听到 jump 就跳，听到 clap 就拍手。",
      "听音选图：听到 cat 选出猫咪图片，练反应速度。",
      "每天固定 15–20 分钟，晨起听、睡前听，碎片时间也行。"
    ],
    tips: [
      "别追求单词量，先让娃「愿意听、听得懂」。",
      "不急着纠正每个发音，敢开口最重要。"
    ],
    videos: [
      { title: "B 站：Super Simple Songs 儿歌", url: "https://search.bilibili.com/all?keyword=Super%20Simple%20Songs" },
      { title: "B 站：Peppa Pig 英文版", url: "https://search.bilibili.com/all?keyword=Peppa%20Pig%20英文版" }
    ],
    practice: {
      type: "checklist",
      items: [
        "今天听了 1 段英语儿歌/动画（≥10 分钟）",
        "跟着唱/跳了 1 首",
        "用英语做了 1 个 TPR 动作指令",
        "听了 1 个词并选出正确图片"
      ]
    },
    source: "来源：小学英语启蒙素养指南 / 许昌教师培训平台"
  },
  {
    id: "p-reading",
    grade: "primary", gradeLabel: "小学",
    dim: "reading", dimLabel: "阅读",
    icon: "📚",
    title: "分级阅读 RAZ / 牛津树",
    summary: "从绘本到故事书，指读 + 复述步步升级",
    why: "分级读物像爬楼梯，一级一级刚刚好。大声朗读协调眼口耳脑，是培养语感最有效的训练。",
    steps: [
      "选对级别：RAZ 从 AA 级、牛津树从 1–2 级起步。",
      "指读：边指单词边朗读，建立「字形—声音」对应。",
      "每天大声朗读 1 本分级读物，不少于 10 分钟。",
      "读后复述：用中文说大意也行，高年级尝试英文短句。",
      "把喜欢的句子抄进「摘抄本」，慢慢攒成自己的语料。"
    ],
    tips: [
      "低段用《Dr. Seuss》这种韵律绘本，高段过渡到《21 世纪学生英文报》。",
      "「朗读」是小学中段核心任务，比刷题管用。"
    ],
    videos: [
      { title: "B 站：RAZ 分级阅读精讲", url: "https://search.bilibili.com/all?keyword=RAZ%20分级阅读" },
      { title: "B 站：牛津阅读树 Oxford Reading Tree", url: "https://search.bilibili.com/all?keyword=牛津阅读树" }
    ],
    source: "来源：小学英语学习要点总结 / 英语启蒙素养指南"
  },
  {
    id: "p-speaking",
    grade: "primary", gradeLabel: "小学",
    dim: "speaking", dimLabel: "口语",
    icon: "🗣️",
    title: "亲子口语 + TPR 互动",
    summary: "在家说起来，把英语变成日常对话",
    why: "敢说才能学好。用 I Spy、角色扮演这种游戏，娃在玩中就开口了，不尴尬。",
    steps: [
      "日常短句：Good morning / What's this? / I like...",
      "I Spy 游戏：I spy something red，让孩子用英语猜。",
      "角色扮演：模拟购物、问路，用《Peppa Pig》配音。",
      "对着镜子练自我介绍，录 1 分钟小视频。",
      "家庭英语角：每周 3 次、每次 20 分钟全英文交流。"
    ],
    tips: [
      "多鼓励敢说，别每个错音都纠正。",
      "用 Lingokids、Duolingo Kids 等 APP 游戏化练口语。"
    ],
    videos: [
      { title: "B 站：小学英语日常口语对话", url: "https://search.bilibili.com/all?keyword=小学%20英语%20日常%20口语%20对话" }
    ],
    source: "来源：许昌教师培训平台 / 小学英语不好怎么补"
  },
  {
    id: "p-writing",
    grade: "primary", gradeLabel: "小学",
    dim: "writing", dimLabel: "书写",
    icon: "✍️",
    title: "四线三格书写规范",
    summary: "字母写工整，卷面分从小学抓起",
    why: "书写规范是隐形分。四线三格练好了，以后写作文老师看得舒服，自己也有信心。",
    steps: [
      "用四线三格本，认识每条线的位置（占中格/上伸/下伸）。",
      "区分大小写：句首字母大写，专有名词大写。",
      "每周抄写 5 个重点句型，注意笔顺。",
      "用彩色笔标注课文重点句型（如 There is...）。",
      "对照字帖描红，形成肌肉记忆。"
    ],
    tips: [
      "书写和拼读同步练，听音能写巩固拼读规则。",
      "高年级开始写日记/小短文，从短语到句子。"
    ],
    videos: [
      { title: "B 站：英文字母书写规范教学", url: "https://search.bilibili.com/all?keyword=英文字母%20书写%20四线三格" }
    ],
    source: "来源：小学英语学习方法（wordln）/ 路问教育"
  },
  {
    id: "p-sightwords",
    grade: "primary", gradeLabel: "小学",
    dim: "vocabulary", dimLabel: "高频词",
    icon: "⚡",
    title: "高频词 Sight Words 220",
    summary: "一眼认出最常见 220 词，阅读不卡壳",
    why: "英文里最常见的 220 个词占了读物的一大半，一眼认得，朗读和阅读速度直接起飞。",
    steps: [
      "按 Dolch / Fry 词表分批，每周 20 个。",
      "闪卡游戏：看到词立刻读出来，不拼读直接认。",
      "在分级读物里圈出已学高频词，加深印象。",
      "「我说你找」：一段话里快速圈出 the / and / you。",
      "和自然拼读配合：拼读词 + 高频词 = 自主阅读双引擎。"
    ],
    tips: [
      "高频词大多不符合拼读规则，靠「整体认读」而非拼。",
      "配合 RAZ 指读，效果翻倍。"
    ],
    videos: [
      { title: "B 站：Sight Words 高频词动画", url: "https://search.bilibili.com/all?keyword=Sight%20Words%20220%20高频词" }
    ],
    practice: {
      type: "flashcard",
      items: [
        { word: "the", meaning: "（定冠词）" },
        { word: "and", meaning: "和" },
        { word: "you", meaning: "你" },
        { word: "what", meaning: "什么" },
        { word: "they", meaning: "他们" },
        { word: "were", meaning: "是(过去)" }
      ]
    },
    source: "来源：英语启蒙素养指南（中段阅读准备）"
  },
  {
    id: "p-sentence",
    grade: "primary", gradeLabel: "小学",
    dim: "grammar", dimLabel: "句型",
    icon: "🔁",
    title: "句型替换造句",
    summary: "一个骨架套不同词，造句不费劲",
    why: "用一个句型当模板，换关键词就能造一堆句子，语法不知不觉就懂了。",
    steps: [
      "学一个核心句型：I like... / What's this? It's a...",
      "替换关键词：I like dogs → I like reading → I like apples.",
      "完成句子填空：She ___ (go) to school → goes.",
      "每天模仿录音读 5 个句子，注意语音语调。",
      "用句型描述身边事物：This is a red apple."
    ],
    tips: [
      "从基础对话入手，先求敢说，再求准确。",
      "准备「句型本」，按功能归类（提问/喜好/描述）。"
    ],
    videos: [
      { title: "B 站：小学英语句型替换训练", url: "https://search.bilibili.com/all?keyword=小学%20英语%20句型%20替换%20造句" }
    ],
    practice: {
      type: "fill",
      items: [
        { sentence: "I ___ (like) apples.", answer: "like" },
        { sentence: "She ___ (go) to school by bus.", answer: "goes" },
        { sentence: "What ___ this? It's a cat.", answer: "is" },
        { sentence: "They ___ (be) my friends.", answer: "are" }
      ]
    },
    source: "来源：小学英语学习方法（wordln）"
  },
  {
    id: "p-cartoon",
    grade: "primary", gradeLabel: "小学",
    dim: "speaking", dimLabel: "趣味",
    icon: "📺",
    title: "看动画学英语",
    summary: "追动画片顺便练听力口语，娃最买账",
    why: "孩子天生爱动画。模仿角色台词，语音语调和胆量一起练，比上课有意思多了。",
    steps: [
      "选对片子：《Peppa Pig》《Maisy》《Bluey》，语速慢、用词简单。",
      "每天看 15 分钟，先看懂再跟读。",
      "挑喜欢的片段配音/角色扮演。",
      "用英语描述画面：This is Peppa's family.",
      "录自己朗读视频，对比原版纠正发音。"
    ],
    tips: [
      "别开着中文字幕当背景音，要「可理解输入」。",
      "《西游记》英语动画版、《看童话学英文》也适合。"
    ],
    videos: [
      { title: "B 站：英文版西游记动画", url: "https://search.bilibili.com/all?keyword=西游记%20英语%20动画版" },
      { title: "B 站：Bluey 英文版", url: "https://search.bilibili.com/all?keyword=Bluey%20英文版" }
    ],
    source: "来源：小学英语不好怎么补 / 初中英语人教版资源"
  },
  {
    id: "p-wordgame",
    grade: "primary", gradeLabel: "小学",
    dim: "vocabulary", dimLabel: "游戏",
    icon: "🎴",
    title: "单词卡片游戏",
    summary: "配对、抢答、翻牌，记词像玩游戏",
    why: "把记单词变成桌游，娃抢着玩。记忆配对、快速认读，不知不觉词汇量就上去了。",
    steps: [
      "做一套单词卡（图 + 词）。",
      "记忆配对：翻两张，英文和图配成对就收走。",
      "快速认读：家长举卡，娃 1 秒内读出。",
      "I Spy：用英语描述物品让别人猜。",
      "Kahoot! 在线单词抢答赛，和家人 PK。"
    ],
    tips: [
      "APP 辅助：Lingokids、Duolingo Kids、Kahoot!。",
      "每周设「英语之星」奖励墙，完成目标给小奖励。"
    ],
    videos: [
      { title: "B 站：英语单词游戏教学", url: "https://search.bilibili.com/all?keyword=英语%20单词%20卡片%20游戏" }
    ],
    source: "来源：许昌教师培训平台 / 小学英语不好怎么补"
  },
  {
    id: "p-mistake",
    grade: "primary", gradeLabel: "小学",
    dim: "habit", dimLabel: "习惯",
    icon: "📒",
    title: "错题本 + 单词墙",
    summary: "错过的别再错，墙上天天见",
    why: "错题本把漏洞记下来，单词墙把词天天见，双管齐下，基础越来越扎实。",
    steps: [
      "准备英语错题本，按「单词/句型/语法」分类。",
      "每道错题写：正确答案 + 为什么错。",
      "每周复习一次错题，红笔标还不会的。",
      "在家物品贴英文标签，建「单词墙」。",
      "每掌握 100 个词给一次正向激励。"
    ],
    tips: [
      "错题本要「周周清」，别堆到考试前。",
      "单词墙贴在娃常路过的地方，无意识记忆。"
    ],
    videos: [
      { title: "B 站：如何做英语错题本", url: "https://search.bilibili.com/all?keyword=英语%20错题本%20怎么做" }
    ],
    source: "来源：小学英语不好怎么补 / 路问教育"
  },
  {
    id: "p-routine",
    grade: "primary", gradeLabel: "小学",
    dim: "habit", dimLabel: "习惯",
    icon: "⏰",
    title: "晨读晚练「四个一」",
    summary: "每天固定节奏，进步看得见",
    why: "学习最怕三天打鱼。固定「四个一」日常，像刷牙一样自然，三个月见明显提升。",
    steps: [
      "每天「四个一」：听 1 段对话、读 1 个故事、说 3 句英语、写 2 个新词。",
      "晨读 15 分钟：大声朗读课文，培养语感。",
      "晚练 15 分钟：完成每日一练 + 复习当天内容。",
      "碎片时间磨耳朵：早餐、睡前放英语音频。",
      "每周 4–5 次、每次 30 分钟，保持稳定节奏。"
    ],
    tips: [
      "家长用成长型思维评价进步，别和别人比。",
      "配合 DHA 饮食 + 运动，记忆力更好（健康小贴士）。"
    ],
    videos: [
      { title: "B 站：小学生英语日常学习计划", url: "https://search.bilibili.com/all?keyword=小学生%20英语%20每日%20学习计划" }
    ],
    source: "来源：小学英语不好怎么补（复禾健康）"
  },

  /* ===================== 初中 junior ===================== */
  {
    id: "j-cornell",
    grade: "junior", gradeLabel: "初中",
    dim: "vocabulary", dimLabel: "词汇",
    icon: "🗒️",
    title: "康奈尔笔记法记单词",
    summary: "右释义、左词性、底易错，生词本秒变复习神器",
    why: "普通生词本只会抄中文，考完就忘。康奈尔格式把词性、同义、易错点分区，复习一眼到位。",
    steps: [
      "右侧写英文释义 + 课本原句例句。",
      "左侧写词性 + 同义词/反义词。",
      "底部每周总结 3 个易错点。",
      "每天 3 次黄金记忆：早读 20 分新词、午休 5 分回顾、睡前 10 分造句。",
      "每周复盘，把总错的词红笔标出优先复习。"
    ],
    tips: [
      "例句优先：结合原句记（如 kind of 配 The panda is kind of shy）。",
      "场景分类：天气类/情绪类做对比表格。"
    ],
    videos: [
      { title: "B 站：康奈尔笔记法 英语", url: "https://search.bilibili.com/all?keyword=康奈尔笔记法%20英语%20单词" }
    ],
    source: "来源：勤学教育网《提高初中英语成绩的方法》"
  },
  {
    id: "j-tense-axis",
    grade: "junior", gradeLabel: "初中",
    dim: "grammar", dimLabel: "语法",
    icon: "🕒",
    title: "时态时间轴法",
    summary: "画一条时间轴，时态再也不乱",
    why: "时态是初中语法的半壁江山。在轴上标「过去—现在—将来」，配合课本例句，混淆瞬间消失。",
    steps: [
      "在笔记本画一条横向时间轴。",
      "标出：过去（一般过去时）—现在（现在进行时）—将来（一般将来时）。",
      "把课本例句按时间点贴到轴上。",
      "现在完成时 vs 一般过去时：看动作是否「持续到现在」。",
      "用「for+时间段 / since+点」判断现在完成时。"
    ],
    tips: [
      "初中语法核心考点不超过 20 个，别买 300 页以上的语法书。",
      "错题归因：标注错误类型（如时态错误）而非只写答案。"
    ],
    videos: [
      { title: "B 站：初中英语时态时间轴", url: "https://search.bilibili.com/all?keyword=初中%20英语%20时态%20时间轴" }
    ],
    practice: {
      type: "choice",
      items: [
        { q: "He ___ here for 5 years.（持续到现在）", options: ["lived", "has lived", "lives"], answer: "has lived" },
        { q: "She ___ a gift but didn't accept it.", options: ["received", "has received", "receives"], answer: "received" },
        { q: "Look! They ___ football.（正在进行）", options: ["play", "are playing", "played"], answer: "are playing" }
      ]
    },
    source: "来源：勤学教育网 / 初三英语中考冲刺指南"
  },
  {
    id: "j-cloze",
    grade: "junior", gradeLabel: "初中",
    dim: "reading", dimLabel: "完形",
    icon: "🧩",
    title: "完形上下文线索法",
    summary: "答案藏在前后句，瞻前顾后再下手",
    why: "完形填空 60% 的答案在空格前后 1–2 句。不孤立看空，通读全文，逻辑一下就通了。",
    steps: [
      "先通读全文把握主旨，不会的词跳过。",
      "边读边做：代入选项翻译，看上下文是否出现过原词。",
      "固定搭配：look forward to doing 等直接选。",
      "逻辑连接词：however / therefore / although 提示转折因果。",
      "第二遍联系上下文补漏，局部服从整体。"
    ],
    tips: [
      "遇到逻辑题，先读开头结尾抓主旨。",
      "填词前先判断成分：名/动/形/副/介/冠。"
    ],
    videos: [
      { title: "B 站：初中完形填空技巧", url: "https://search.bilibili.com/all?keyword=初中%20完形填空%20技巧%20上下文" }
    ],
    source: "来源：初中英语题型技巧汇总 / 中考冲刺指南"
  },
  {
    id: "j-reading",
    grade: "junior", gradeLabel: "初中",
    dim: "reading", dimLabel: "阅读",
    icon: "🔍",
    title: "阅读跳读 + 细节定位",
    summary: "30 秒抓主旨，细节题回原文扫",
    why: "阅读扣分多半是「读得慢没时间」。跳读首段末段抓中心，细节题圈专有名词回原文定位，又快又准。",
    steps: [
      "跳读找主旨：首段前两句 + 每段首句 + 末段末句。",
      "细节题：圈题干专有名词/数字，回原文快速扫描。",
      "推理题：立足原文推断，不凭空猜。",
      "词义猜测：用 because/but/however 或前后缀猜。",
      "每天精做 1–2 篇真题，总结错因。"
    ],
    tips: [
      "正确选项 ABCD 个数通常 4–6 个，可用来推理。",
      "作者态度题一般选客观积极（objectively）。"
    ],
    videos: [
      { title: "B 站：初中英语阅读理解技巧", url: "https://search.bilibili.com/all?keyword=初中%20英语%20阅读理解%20技巧" }
    ],
    source: "来源：初中英语题型技巧 / 中考冲刺指南（徐莎）"
  },
  {
    id: "j-listen3",
    grade: "junior", gradeLabel: "初中",
    dim: "listening", dimLabel: "听力",
    icon: "🎧",
    title: "听力精听三步法",
    summary: "盲听→听写→跟读，反应慢的克星",
    why: "听力失分多不是听不懂，是反应慢。三步法把耳朵练「快」，连读弱读都听得出。",
    steps: [
      "第一遍盲听抓主旨。",
      "第二遍听写关键词：数字、地点、转折词 but。",
      "第三遍对照原文跟读，模仿语音语调。",
      "碎片时间每天 10 分钟听课本录音，重点听连读（not at all→/no ta tall/）。",
      "整理「同义替换表」：take a bus = by bus。"
    ],
    tips: [
      "听前 30 秒读选项预测话题，听中圈画时间/数字/转折。",
      "数字快速写阿拉伯数字，避免记中文混淆。"
    ],
    videos: [
      { title: "B 站：初中英语听力精听法", url: "https://search.bilibili.com/all?keyword=初中%20英语%20听力%20精听%20三步法" }
    ],
    source: "来源：勤学教育网 / 初三英语中考冲刺指南"
  },
  {
    id: "j-grammar-example",
    grade: "junior", gradeLabel: "初中",
    dim: "grammar", dimLabel: "语法",
    icon: "💡",
    title: "语法 + 例句法",
    summary: "先懂规则再记例句，死背公式没用",
    why: "把语法当数学公式背最坑。先懂「为什么」，再记 2–3 个典型例句，比背条文管用十倍。",
    steps: [
      "学每个语法点，先搞懂规则本质（如主将从现=未发生的假设）。",
      "记 2–3 个课本原句例句。",
      "句型转换训练：每天 5 个原句「一变三」（主动变被动、陈述变感叹）。",
      "错题归类：按时态/复合句/非谓语分类，标错误原因。",
      "每天 1 篇语法填空真题，分析每空考点。"
    ],
    tips: [
      "非谓语口诀：介词后 doing，want/hope 后 to do，过去分词表被动。",
      "定语从句只用 that 的 5 种情况贴课本对照。"
    ],
    videos: [
      { title: "B 站：初中语法 例句记忆法", url: "https://search.bilibili.com/all?keyword=初中%20语法%20从句%20例句" }
    ],
    source: "来源：勤学教育网 / 初三英语中考冲刺指南"
  },
  {
    id: "j-writing3",
    grade: "junior", gradeLabel: "初中",
    dim: "writing", dimLabel: "写作",
    icon: "📝",
    title: "写作三段式模板",
    summary: "三段式保底 18 分，高级替换冲 22+",
    why: "初中写作 25 分，三段式模板先拿基础分，再用高级词汇和复杂句往上冲，分数稳。",
    steps: [
      "开头段：引出要点/核心问题。",
      "正文段：围绕主题叙述/讨论，用并列或对比结构。",
      "结尾段：总结观点或展望未来。",
      "高级词汇替换：nice→warm-hearted / generous。",
      "背 3–5 个万能句型 + 1 句谚语（Actions speak louder than words）。"
    ],
    tips: [
      "卷面整洁、杜绝简单词拼写错误，分数不会低。",
      "句式多样化：状语从句、感叹句、被动语态穿插用。"
    ],
    videos: [
      { title: "B 站：初中英语作文三段式", url: "https://search.bilibili.com/all?keyword=初中%20英语%20作文%20三段式%20模板" }
    ],
    source: "来源：勤学教育网 / 中考冲刺指南（徐莎）"
  },
  {
    id: "j-affix",
    grade: "junior", gradeLabel: "初中",
    dim: "vocabulary", dimLabel: "词汇",
    icon: "🔗",
    title: "词根词缀法",
    summary: "记一个根，串出一串词，效率翻倍",
    why: "care→careful→carefully→careless→carelessness，一次记一串还懂词性变化，词汇量滚雪球。",
    steps: [
      "记词根/前后缀：un-（否定）、dis-（相反）、-ing/-ed（时态）。",
      "以 care 为例延伸整串派生词。",
      "场景联想法：restaurant 联想 menu/waiter/order/delicious 成词群。",
      "每天 30 词：早上 15 分记，晚上 5 分闭眼回忆+开口说。",
      "红笔标忘的词，第二天优先复习，形成记忆闭环。"
    ],
    tips: [
      "易混词用「例句对比法」：I received a gift but didn't accept it.",
      "用法易混（rise 不及物 vs raise 及物）做用法表格每天看。"
    ],
    videos: [
      { title: "B 站：初中英语词根词缀记忆", url: "https://search.bilibili.com/all?keyword=初中%20英语%20词根%20词缀%20记忆法" }
    ],
    source: "来源：初三英语中考冲刺指南（词汇篇）"
  },
  {
    id: "j-mistake",
    grade: "junior", gradeLabel: "初中",
    dim: "habit", dimLabel: "习惯",
    icon: "📕",
    title: "错题归类法",
    summary: "错因写清楚，同类错误不再犯",
    why: "错题不归类只是抄答案。标明「错在哪类」，每周复盘 30 分钟，漏洞一个个补上。",
    steps: [
      "按维度分类：时态 / 复合句 / 非谓语 / 词汇辨析。",
      "每道错题旁写错误原因（如「没看到 for+时间段误用过去时」）。",
      "每周花 30 分钟复盘同类错题。",
      "把易错点做成「特殊情况清单」贴课本。",
      "语法填空每天 1 篇，勾画需加强的考点精准训练。"
    ],
    tips: [
      "错题本要「周周清」，别堆到期末。",
      "错题归因比写正确答案重要。"
    ],
    videos: [
      { title: "B 站：初中英语错题本怎么用", url: "https://search.bilibili.com/all?keyword=初中%20英语%20错题本%20归类" }
    ],
    source: "来源：初三英语中考冲刺指南 / 勤学教育网"
  },
  {
    id: "j-preread",
    grade: "junior", gradeLabel: "初中",
    dim: "listening", dimLabel: "听力",
    icon: "👀",
    title: "提前读选项预测法",
    summary: "听前 30 秒抢分，猜对一半",
    why: "听力播放前先读选项预测话题，听时更有针对性，等于开考前先拿分。",
    steps: [
      "听力前 30 秒快速读所有选项。",
      "预测话题：选项都是 hospital/doctor→看病场景。",
      "听中圈画时间、地点、数字、转折词 but/however。",
      "听到 but 后面往往是重点。",
      "长独白听开头抓主旨、中间抓细节（时间/数字/原因）。"
    ],
    tips: [
      "数字速记阿拉伯数字，防连读误听（half past seven→7:30）。",
      "整理「同义替换表」每天读，培养敏感度。"
    ],
    videos: [
      { title: "B 站：听力提前读选项技巧", url: "https://search.bilibili.com/all?keyword=听力%20提前%20读%20选项%20预测" }
    ],
    source: "来源：初三英语中考冲刺指南（听力篇）"
  },
  {
    id: "j-recite",
    grade: "junior", gradeLabel: "初中",
    dim: "reading", dimLabel: "语感",
    icon: "🗣️",
    title: "课文背诵语感法",
    summary: "背熟课文，语感自己长出来",
    why: "初中起步没方法时，最直接的就是背。文章印进脑子，语感、结构、词汇一起到位。",
    steps: [
      "课本文章反复朗诵，甚至背下来。",
      "无意识背出后，慢慢就懂结构和意思。",
      "做完阅读后深度分析：逐句拆成分和含义，再朗读。",
      "每天保持一篇阅读手感，课外有余力多拓展。",
      "分析课文句子成分，理解「语不离句、句不离文」。"
    ],
    tips: [
      "背诵+深度分析，阅读水平提升最快。",
      "坚持阅读，每天找一点时间做一篇。"
    ],
    videos: [
      { title: "B 站：初中英语课文背诵方法", url: "https://search.bilibili.com/all?keyword=初中%20英语%20课文%20背诵%20语感" }
    ],
    source: "来源：初中英语人教版同步辅导"
  },
  {
    id: "j-synonym",
    grade: "junior", gradeLabel: "初中",
    dim: "reading", dimLabel: "词汇",
    icon: "🔄",
    title: "同义替换积累表",
    summary: "听力阅读都考替换，攒表就得分",
    why: "听力说 take a bus，选项写 by bus；阅读原文复数，选项用 they。同义替换是隐形考点，攒熟就稳。",
    steps: [
      "整理同义替换：take a bus=by bus、look after=take care of。",
      "not free=busy、not enough time=too busy 等反义转换。",
      "每天读 1 遍替换表，培养敏感度。",
      "七选五里原文复数对应选项 they，快速判断。",
      "阅读中标注同义改写，训练识别能力。"
    ],
    tips: [
      "替换表分「听力替换」和「阅读替换」两类整理。",
      "结合真题积累，比盲目背单词有用。"
    ],
    videos: [
      { title: "B 站：英语同义替换积累", url: "https://search.bilibili.com/all?keyword=英语%20同义%20替换%20听力%20阅读" }
    ],
    source: "来源：合肥八中高分笔记 / 初三中考冲刺指南"
  },

  /* ===================== 高中 senior ===================== */
  {
    id: "s-3500",
    grade: "senior", gradeLabel: "高中",
    dim: "vocabulary", dimLabel: "词汇",
    icon: "🎯",
    title: "3500 词做减法",
    summary: "聚焦高频词+熟词生义，拒绝面面俱到",
    why: "高中词汇量大，但分数来自高频核心词和熟词生义。做减法，把时间花在刀刃上。",
    steps: [
      "背熟高考必备 3500 词，注意一词多义和搭配。",
      "四大重点：高频核心词、阅读完形熟词生义、易混短语、写作高级词。",
      "勤翻错题本，吃透易错词汇，做到会读会写会用。",
      "每天精读默写一部分高频词，关注多义/易混/固定搭配。",
      "优先记历年高考出现过的词汇用法。"
    ],
    tips: [
      "熟词生义是阅读完形隐形坑（如 book 作「预订」）。",
      "用《闪过高考词汇》按考频背，别按字母顺序。"
    ],
    videos: [
      { title: "B 站：高考3500词高频核心", url: "https://search.bilibili.com/all?keyword=高考%203500%20词%20高频%20核心" }
    ],
    source: "来源：寿光中学张玉翠老师 / 中华教育时报网"
  },
  {
    id: "s-seven",
    grade: "senior", gradeLabel: "高中",
    dim: "reading", dimLabel: "七选五",
    icon: "🔢",
    title: "七选五逻辑词定位",
    summary: "抓主旨 + 逻辑词，段落呼应秒选",
    why: "七选五有明确定位技巧。紧抓主旨和逻辑衔接词，原文复数对应选项 they，正确率立刻上来。",
    steps: [
      "先读小标题/段首，抓全文主旨。",
      "看空格前后句的逻辑词：however/therefore/besides。",
      "原文复数名词↔选项 they，快速判断指代。",
      "提高段落间逻辑感，熟悉常见连接方式。",
      "代入选项通读，检查连贯和上下文呼应。"
    ],
    tips: [
      "七选五技巧明确，掌握后正确率提升明显。",
      "每天练 1 篇，重点在连贯和呼应。"
    ],
    videos: [
      { title: "B 站：高考七选五解题技巧", url: "https://search.bilibili.com/all?keyword=高考%20七选五%20解题%20技巧" }
    ],
    source: "来源：合肥八中高分笔记 / 寿光中学张玉翠老师"
  },
  {
    id: "s-continue",
    grade: "senior", gradeLabel: "高中",
    dim: "writing", dimLabel: "读后续写",
    icon: "✨",
    title: "读后续写描写法",
    summary: "动作+心理+环境，情节不跑偏文采来",
    why: "读后续写是高分关键。紧扣原文情节，用动作/心理/环境描写 + 高级句式，语言立刻有质感。",
    steps: [
      "紧扣原文情节，不跑偏、不瞎编。",
      "巧用动作描写（动词链）、心理描写、环境描写。",
      "灵活运用高级句式提升文采。",
      "结尾升华：阅读 B 篇积累适合升华的句子。",
      "每两天完成 1 篇完整写作并修改，积累 20+ 模板词句。"
    ],
    tips: [
      "看《夏洛的网》《秘密花园》《绿山墙的安妮》积累描写语料。",
      "小作文背 3–5 篇范文，掌握书信/通知/演讲稿格式。"
    ],
    videos: [
      { title: "B 站：高考读后续写技巧", url: "https://search.bilibili.com/all?keyword=高考%20读后续写%20技巧%20描写" }
    ],
    source: "来源：寿光中学张玉翠老师 / 桂林桂电中学唐新妍老师"
  },
  {
    id: "s-grammar-fill",
    grade: "senior", gradeLabel: "高中",
    dim: "grammar", dimLabel: "语法填空",
    icon: "🧠",
    title: "语法填空考点分析法",
    summary: "每空分析考点，精准补弱",
    why: "语法填空考查基础语法+句子结构+篇章意识。每空分析考点，对照答案册勾画薄弱点，练得准。",
    steps: [
      "先标注备选词词性，再结合语境选词并注意词形变化。",
      "每空分析考点：非谓语/时态语态/从句引导词。",
      "利用答案册归纳每空考点，勾画需加强的。",
      "高频考点：非谓语、时态语态、从句引导词，牢记基础规则。",
      "每天 1 篇，减少粗心失误。"
    ],
    tips: [
      "时态语态、虚拟语气、定/状语从句、非谓语、强调/倒装是高频。",
      "每天复习 1–2 个考点 + 配真题练。"
    ],
    videos: [
      { title: "B 站：高考语法填空技巧", url: "https://search.bilibili.com/all?keyword=高考%20语法填空%20技巧%20考点" }
    ],
    source: "来源：寿光中学张玉翠老师 / 唐新妍老师"
  },
  {
    id: "s-listen-focus",
    grade: "senior", gradeLabel: "高中",
    dim: "listening", dimLabel: "听力",
    icon: "🎯",
    title: "听力抗干扰 + 听前猜",
    summary: "前五题听前猜答案，练抗干扰",
    why: "高考听力对注意力要求高，考场环境干扰大。平时练抗干扰，前五题听前让题目过一遍大脑。",
    steps: [
      "前五题用「听前猜答案」，让题目在大脑过一遍。",
      "每天练 1 篇真题听力，听后对照文本精听。",
      "积累听力常用词组句式（整理本）。",
      "熟读课标所有单词，保证发音正确不漏关键信息。",
      "模拟考场：关窗关空调环境练抗干扰。"
    ],
    tips: [
      "听力不难，坚持听进步明显。",
      "精听积累常见表达，比刷题重要。"
    ],
    videos: [
      { title: "B 站：高考听力技巧抗干扰", url: "https://search.bilibili.com/all?keyword=高考%20听力%20技巧%20抗干扰" }
    ],
    source: "来源：合肥八中高分笔记（王璇月）"
  },
  {
    id: "s-application",
    grade: "senior", gradeLabel: "高中",
    dim: "writing", dimLabel: "应用文",
    icon: "✉️",
    title: "应用文万能句型 + 格式",
    summary: "书信通知演讲稿，格式标准语言得体",
    why: "应用文有固定格式和常用句型，相对好提分。掌握高频文体格式 + 万能句，基础分稳拿。",
    steps: [
      "背熟书信、通知、演讲稿等高频文体格式。",
      "储备校园生活、传统文化主题万能句型。",
      "开头段引出主题（背景+观点）。",
      "中间段表达看法（并列/对比结构）。",
      "结尾段总结或展望未来，注意礼貌语气。"
    ],
    tips: [
      "攻克要点不全、句式单一、格式不规范三大问题。",
      "卷面整洁、语言得体，分数不低。"
    ],
    videos: [
      { title: "B 站：高考英语应用文模板", url: "https://search.bilibili.com/all?keyword=高考%20英语%20应用文%20模板%20格式" }
    ],
    source: "来源：寿光中学张玉翠老师 / 唐新妍老师"
  },
  {
    id: "s-past-paper",
    grade: "senior", gradeLabel: "高中",
    dim: "habit", dimLabel: "真题",
    icon: "📜",
    title: "真题深耕近五年",
    summary: "真题是最好的复习资料，摸清命题规律",
    why: "真题含金量最高。深耕近五年新高考真题，摸清命题规律和考点分布，比盲目刷题强百倍。",
    steps: [
      "深耕近五年本省新高考真题。",
      "阅读找准原文定位，细心比对选项，不主观臆断。",
      "完形立足上下文，把握情感与逻辑走向。",
      "语法填空聚焦高频考点，记基础规则。",
      "做一篇吃透一篇，分析错因比做三篇囫囵强。"
    ],
    tips: [
      "思维易错练真题，易踩陷阱练模拟题，定期回真题。",
      "不钻偏题怪题，紧盯错题补短板。"
    ],
    videos: [
      { title: "B 站：高考英语真题精讲", url: "https://search.bilibili.com/all?keyword=高考%20英语%20真题%20精讲%20近五年" }
    ],
    source: "来源：寿光中学张玉翠老师 / 中华教育时报网"
  },
  {
    id: "s-long-sentence",
    grade: "senior", gradeLabel: "高中",
    dim: "reading", dimLabel: "长难句",
    icon: "🧩",
    title: "长难句拆解法",
    summary: "找主干砍修饰，长句变短句",
    why: "阅读卡壳多半是长难句。找主谓宾砍掉修饰，句子瞬间变短，理解和速度都上来了。",
    steps: [
      "找主干：主语 + 谓语 + 宾语。",
      "砍修饰：定语从句、分词、插入语先放一边。",
      "还原修饰，弄清谁修饰谁。",
      "遇到非谓语（doing/done）判断主动被动。",
      "每天拆 3–5 个真题长难句，积累语感。"
    ],
    tips: [
      "长难句=简单句+修饰，别被长度吓到。",
      "配合语法填空的句子结构分析一起练。"
    ],
    videos: [
      { title: "B 站：高考长难句拆解", url: "https://search.bilibili.com/all?keyword=高考%20英语%20长难句%20拆解" }
    ],
    source: "来源：唐新妍老师 / 高中知识库"
  },
  {
    id: "s-handwriting",
    grade: "senior", gradeLabel: "高中",
    dim: "writing", dimLabel: "书写",
    icon: "🅰️",
    title: "衡水体练字",
    summary: "卷面分白送，千万别写连笔",
    why: "作文字迹工整直接加分。衡水体圆润规范、无连笔，阅卷老师看着舒服，分数自然高。",
    steps: [
      "练衡水体，字母圆润、大小均匀、不连笔。",
      "每天练 10 分钟，描红+临摹。",
      "注意间距和基线对齐。",
      "平时书写就保持整洁规范，考试不临时抱佛脚。",
      "用四线格本打底，逐步形成肌肉记忆。"
    ],
    tips: [
      "千万不要写连笔，高考书写大忌。",
      "卷面清爽的作文分数一般都不会太低。"
    ],
    videos: [
      { title: "B 站：高考衡水体练字教程", url: "https://search.bilibili.com/all?keyword=高考%20衡水体%20练字%20教程" }
    ],
    source: "来源：合肥八中高分笔记（汪乐妍）"
  },
  {
    id: "s-synonym-senior",
    grade: "senior", gradeLabel: "高中",
    dim: "reading", dimLabel: "阅读",
    icon: "🔁",
    title: "阅读同义改写识别",
    summary: "选项多是原文的改写，识破就选对",
    why: "高考阅读正确选项常是原文的同义改写而非原句。训练识别改写，细节题推理题正确率双升。",
    steps: [
      "细节题：选项方向一致→出处只有一个；方向不一→四出处都看。",
      "识别同义改写：原文动词→选项名词，原文肯定→选项否定。",
      "推理题：立足原文推断，不直接选原文陈述。",
      "词义猜测：用因果/同反义/构词法猜。",
      "每天做 2–3 篇真题，分析错因和出题套路。"
    ],
    tips: [
      "正确选项常含更多原文关键词。",
      "态度题一般选客观积极。"
    ],
    videos: [
      { title: "B 站：高考阅读同义改写", url: "https://search.bilibili.com/all?keyword=高考%20阅读%20同义%20改写%20识别" }
    ],
    source: "来源：高中题型技巧 / 合肥八中高分笔记"
  },
  {
    id: "s-cloze-senior",
    grade: "senior", gradeLabel: "高中",
    dim: "reading", dimLabel: "完形",
    icon: "🧩",
    title: "完形顺读 + 排除法",
    summary: "顺读抓情感逻辑，排除法稳拿分",
    why: "高中完形重上下文逻辑和情感走向。顺读法 + 排除法，不确定也能缩到二选一。",
    steps: [
      "顺读全文，把握情感与逻辑走向。",
      "第一遍不急填，联系上下文二遍做。",
      "填词先判成分：名/动/形/副/介/冠。",
      "固定搭配 + 逻辑连接词辅助。",
      "用排除法去掉明显错误，剩余结合语境分析。"
    ],
    tips: [
      "完形立足上下文，不孤立看空。",
      "情感走向题看首尾段和重复词。"
    ],
    videos: [
      { title: "B 站：高考完形填空顺读法", url: "https://search.bilibili.com/all?keyword=高考%20完形填空%20顺读%20排除法" }
    ],
    source: "来源：唐新妍老师 / 高中知识库"
  },
  {
    id: "s-timed",
    grade: "senior", gradeLabel: "高中",
    dim: "habit", dimLabel: "限时",
    icon: "⏱️",
    title: "限时训练 + 手感",
    summary: "贴合模考节奏，答题状态不掉线",
    why: "最后阶段手感和心态同样重要。限时训练保持答题状态，合理分配时间，把每次练习当实战。",
    steps: [
      "坚持限时训练，贴合模考节奏。",
      "合理分配答题时间（阅读/完形/七选五/写作）。",
      "紧盯错题补齐短板，不钻偏题怪题。",
      "每日积累复盘，把练习当实战。",
      "考前放平心态，正视自身优劣。"
    ],
    tips: [
      "词汇 20 分 + 语法 20 分 + 真题 30 分 + 复习 2 分，每日 1.2 小时配比。",
      "优先第一、二梯队（词汇/语法/阅读），再攻写作听力。"
    ],
    videos: [
      { title: "B 站：高考英语限时训练安排", url: "https://search.bilibili.com/all?keyword=高考%20英语%20限时%20训练%20时间%20分配" }
    ],
    source: "来源：中华教育时报网 / 唐新妍老师"
  }
];

/* 维度元数据：用于筛选标签与配色 */
window.DIMENSIONS = [
  { key: "phonics",     label: "自然拼读" },
  { key: "vocabulary",  label: "词汇" },
  { key: "listening",   label: "听力" },
  { key: "speaking",    label: "口语" },
  { key: "reading",     label: "阅读" },
  { key: "writing",     label: "写作" },
  { key: "grammar",     label: "语法" },
  { key: "habit",       label: "习惯/方法" }
];

window.GRADES = [
  { key: "primary", label: "小学",  color: "#2bb673" },
  { key: "junior",  label: "初中",  color: "#2f80ed" },
  { key: "senior",  label: "高中",  color: "#eb5757" }
];
