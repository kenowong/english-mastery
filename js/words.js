/*
 * english-mastery · 单词词库（WORD_BANK）
 * 按 学段(grade) + 单元/主题(unit) 组织，每个词 {en, zh}。
 *
 * ⚠️ 数据性质说明（重要）：
 * 本文件当前是「核心种子词」——基于《义务教育英语课程标准》《高中英语课程标准》
 * 的分级框架，由高置信度基础/核心词整理而成，用于打通「单词」模块的练习链路
 * （闪卡 / 拼写 / 听写 / 跟读）。它并非完整的 6000+ 课标/教材词表。
 *
 * 要补全为「新课标课标词表 + 人教版/外研社单元词表」全量：
 *   - 把教材单元词表整理成 {en, zh} 数组，按册/单元挂到对应 grade.units 下即可；
 *   - 结构与本文件完全一致，直接追加 unit 对象，无需改前端代码。
 *   - 若有官方词表电子文件（xlsx/txt/csv），交给助手转成此结构合并，保证 100% 准确。
 *
 * 字段：
 *   grade: primary(小学) / junior(初中) / senior(高中)
 *   unit:  { id, title, words:[{en, zh}] }
 */
window.WORD_BANK = {

  /* ===================== 小学 primary ===================== */
  primary: {
    label: "小学",
    note: "核心种子词（基于新课标一级/二级词汇框架）",
    units: [
      {
        id: "p-core",
        title: "基础核心词",
        words: [
          { en: "I", zh: "我" }, { en: "you", zh: "你；你们" }, { en: "he", zh: "他" },
          { en: "she", zh: "她" }, { en: "we", zh: "我们" }, { en: "they", zh: "他们" },
          { en: "am", zh: "是(我)" }, { en: "is", zh: "是" }, { en: "are", zh: "是(复数)" },
          { en: "have", zh: "有" }, { en: "has", zh: "有(三单)" }, { en: "a", zh: "一个" },
          { en: "an", zh: "一个(元音前)" }, { en: "the", zh: "这；那" }, { en: "and", zh: "和" },
          { en: "red", zh: "红色" }, { en: "blue", zh: "蓝色" }, { en: "yellow", zh: "黄色" },
          { en: "green", zh: "绿色" }, { en: "one", zh: "一" }, { en: "two", zh: "二" },
          { en: "three", zh: "三" }, { en: "four", zh: "四" }, { en: "five", zh: "五" },
          { en: "six", zh: "六" }, { en: "seven", zh: "七" }, { en: "eight", zh: "八" },
          { en: "nine", zh: "九" }, { en: "ten", zh: "十" }, { en: "apple", zh: "苹果" },
          { en: "book", zh: "书" }, { en: "cat", zh: "猫" }, { en: "dog", zh: "狗" }
        ]
      },
      {
        id: "p-animals",
        title: "动物",
        words: [
          { en: "bird", zh: "鸟" }, { en: "fish", zh: "鱼" }, { en: "pig", zh: "猪" },
          { en: "cow", zh: "牛" }, { en: "duck", zh: "鸭子" }, { en: "panda", zh: "熊猫" },
          { en: "tiger", zh: "老虎" }, { en: "lion", zh: "狮子" }, { en: "rabbit", zh: "兔子" },
          { en: "monkey", zh: "猴子" }, { en: "elephant", zh: "大象" }, { en: "bear", zh: "熊" },
          { en: "chicken", zh: "鸡" }, { en: "horse", zh: "马" }, { en: "sheep", zh: "绵羊" },
          { en: "mouse", zh: "老鼠" }, { en: "snake", zh: "蛇" }, { en: "zoo", zh: "动物园" }
        ]
      },
      {
        id: "p-food",
        title: "食物",
        words: [
          { en: "egg", zh: "蛋" }, { en: "rice", zh: "米饭" }, { en: "milk", zh: "牛奶" },
          { en: "bread", zh: "面包" }, { en: "water", zh: "水" }, { en: "banana", zh: "香蕉" },
          { en: "orange", zh: "橙子" }, { en: "pear", zh: "梨" }, { en: "cake", zh: "蛋糕" },
          { en: "meat", zh: "肉" }, { en: "noodle", zh: "面条" }, { en: "tea", zh: "茶" },
          { en: "juice", zh: "果汁" }, { en: "candy", zh: "糖果" }, { en: "hamburger", zh: "汉堡" }
        ]
      },
      {
        id: "p-school",
        title: "学校",
        words: [
          { en: "pen", zh: "钢笔" }, { en: "pencil", zh: "铅笔" }, { en: "bag", zh: "书包" },
          { en: "ruler", zh: "尺子" }, { en: "teacher", zh: "老师" }, { en: "student", zh: "学生" },
          { en: "school", zh: "学校" }, { en: "classroom", zh: "教室" }, { en: "desk", zh: "课桌" },
          { en: "chair", zh: "椅子" }, { en: "blackboard", zh: "黑板" }, { en: "read", zh: "读" },
          { en: "write", zh: "写" }, { en: "learn", zh: "学习" }
        ]
      },
      {
        id: "p-family",
        title: "家庭",
        words: [
          { en: "father", zh: "父亲" }, { en: "mother", zh: "母亲" }, { en: "brother", zh: "兄弟" },
          { en: "sister", zh: "姐妹" }, { en: "grandpa", zh: "爷爷；外公" }, { en: "grandma", zh: "奶奶；外婆" },
          { en: "family", zh: "家庭" }, { en: "baby", zh: "婴儿" }, { en: "son", zh: "儿子" },
          { en: "daughter", zh: "女儿" }, { en: "uncle", zh: "叔叔；舅舅" }, { en: "aunt", zh: "阿姨；姑姑" }
        ]
      },
      {
        id: "p-action",
        title: "动作",
        words: [
          { en: "run", zh: "跑" }, { en: "jump", zh: "跳" }, { en: "eat", zh: "吃" },
          { en: "drink", zh: "喝" }, { en: "sleep", zh: "睡觉" }, { en: "sing", zh: "唱" },
          { en: "dance", zh: "跳舞" }, { en: "play", zh: "玩" }, { en: "swim", zh: "游泳" },
          { en: "fly", zh: "飞" }, { en: "walk", zh: "走" }, { en: "sit", zh: "坐" },
          { en: "stand", zh: "站" }, { en: "open", zh: "打开" }, { en: "close", zh: "关上" },
          { en: "look", zh: "看" }, { en: "listen", zh: "听" }, { en: "speak", zh: "说" }
        ]
      },
      {
        id: "p-nature",
        title: "自然",
        words: [
          { en: "sun", zh: "太阳" }, { en: "moon", zh: "月亮" }, { en: "star", zh: "星星" },
          { en: "tree", zh: "树" }, { en: "flower", zh: "花" }, { en: "grass", zh: "草" },
          { en: "sky", zh: "天空" }, { en: "cloud", zh: "云" }, { en: "rain", zh: "雨" },
          { en: "wind", zh: "风" }, { en: "fire", zh: "火" }
        ]
      }
    ]
  },

  /* ===================== 初中 junior ===================== */
  junior: {
    label: "初中",
    note: "核心种子词（基于新课标三级/四级词汇框架）",
    units: [
      {
        id: "j-core",
        title: "核心词汇",
        words: [
          { en: "dictionary", zh: "词典" }, { en: "weather", zh: "天气" }, { en: "hospital", zh: "医院" },
          { en: "vacation", zh: "假期" }, { en: "computer", zh: "电脑" }, { en: "internet", zh: "互联网" },
          { en: "friend", zh: "朋友" }, { en: "happy", zh: "开心的" }, { en: "healthy", zh: "健康的" },
          { en: "exercise", zh: "锻炼；练习" }, { en: "week", zh: "周" }, { en: "month", zh: "月" },
          { en: "year", zh: "年" }, { en: "morning", zh: "早晨" }, { en: "evening", zh: "晚上" },
          { en: "question", zh: "问题" }, { en: "answer", zh: "回答" }, { en: "problem", zh: "难题" },
          { en: "example", zh: "例子" }, { en: "important", zh: "重要的" }, { en: "different", zh: "不同的" },
          { en: "together", zh: "一起" }, { en: "beautiful", zh: "美丽的" }, { en: "favorite", zh: "最喜爱的" },
          { en: "because", zh: "因为" }, { en: "before", zh: "在…之前" }, { en: "after", zh: "在…之后" },
          { en: "always", zh: "总是" }, { en: "never", zh: "从不" }
        ]
      },
      {
        id: "j-school",
        title: "学科与学习",
        words: [
          { en: "subject", zh: "科目" }, { en: "math", zh: "数学" }, { en: "Chinese", zh: "语文" },
          { en: "English", zh: "英语" }, { en: "science", zh: "科学" }, { en: "history", zh: "历史" },
          { en: "geography", zh: "地理" }, { en: "PE", zh: "体育" }, { en: "music", zh: "音乐" },
          { en: "art", zh: "美术" }, { en: "exam", zh: "考试" }, { en: "homework", zh: "家庭作业" },
          { en: "lesson", zh: "课" }, { en: "classmate", zh: "同学" }, { en: "grade", zh: "年级；成绩" },
          { en: "study", zh: "学习" }, { en: "practice", zh: "练习" }, { en: "knowledge", zh: "知识" }
        ]
      },
      {
        id: "j-life",
        title: "生活家庭",
        words: [
          { en: "parent", zh: "父/母亲" }, { en: "child", zh: "孩子" }, { en: "children", zh: "孩子们" },
          { en: "people", zh: "人们" }, { en: "neighbor", zh: "邻居" }, { en: "gift", zh: "礼物" },
          { en: "party", zh: "聚会" }, { en: "kitchen", zh: "厨房" }, { en: "bedroom", zh: "卧室" },
          { en: "bathroom", zh: "浴室" }, { en: "garden", zh: "花园" }, { en: "clean", zh: "打扫；干净的" },
          { en: "cook", zh: "做饭" }, { en: "wash", zh: "洗" }, { en: "help", zh: "帮助" }
        ]
      },
      {
        id: "j-shopping",
        title: "购物",
        words: [
          { en: "shop", zh: "商店" }, { en: "store", zh: "商店" }, { en: "money", zh: "钱" },
          { en: "price", zh: "价格" }, { en: "cheap", zh: "便宜的" }, { en: "expensive", zh: "昂贵的" },
          { en: "buy", zh: "买" }, { en: "sell", zh: "卖" }, { en: "pay", zh: "付款" },
          { en: "market", zh: "市场" }, { en: "clothes", zh: "衣服" }, { en: "shoe", zh: "鞋" }
        ]
      },
      {
        id: "j-travel",
        title: "出行旅行",
        words: [
          { en: "train", zh: "火车" }, { en: "bus", zh: "公交车" }, { en: "plane", zh: "飞机" },
          { en: "station", zh: "车站" }, { en: "airport", zh: "机场" }, { en: "hotel", zh: "酒店" },
          { en: "trip", zh: "旅行" }, { en: "visit", zh: "参观；拜访" }, { en: "country", zh: "国家" },
          { en: "city", zh: "城市" }, { en: "map", zh: "地图" }, { en: "ticket", zh: "票" },
          { en: "travel", zh: "旅行" }, { en: "luggage", zh: "行李" }, { en: "tourist", zh: "游客" }
        ]
      },
      {
        id: "j-health",
        title: "健康",
        words: [
          { en: "doctor", zh: "医生" }, { en: "nurse", zh: "护士" }, { en: "sick", zh: "生病的" },
          { en: "cold", zh: "感冒" }, { en: "fever", zh: "发烧" }, { en: "medicine", zh: "药" },
          { en: "rest", zh: "休息" }, { en: "tooth", zh: "牙齿" }, { en: "eye", zh: "眼睛" },
          { en: "hand", zh: "手" }, { en: "body", zh: "身体" }, { en: "sport", zh: "运动" }
        ]
      },
      {
        id: "j-nature",
        title: "自然与社会",
        words: [
          { en: "mountain", zh: "山" }, { en: "river", zh: "河" }, { en: "lake", zh: "湖" },
          { en: "sea", zh: "海" }, { en: "island", zh: "岛" }, { en: "forest", zh: "森林" },
          { en: "animal", zh: "动物" }, { en: "plant", zh: "植物" }, { en: "earth", zh: "地球" },
          { en: "world", zh: "世界" }, { en: "environment", zh: "环境" }, { en: "air", zh: "空气" },
          { en: "pollution", zh: "污染" }, { en: "protect", zh: "保护" }, { en: "recycle", zh: "回收" }
        ]
      }
    ]
  },

  /* ===================== 高中 senior ===================== */
  senior: {
    label: "高中",
    note: "核心种子词（基于新课标五级/六级及高考核心词汇框架）",
    units: [
      {
        id: "s-core",
        title: "核心词汇",
        words: [
          { en: "analyze", zh: "分析" }, { en: "approach", zh: "方法；接近" }, { en: "attitude", zh: "态度" },
          { en: "benefit", zh: "益处；有益于" }, { en: "challenge", zh: "挑战" }, { en: "community", zh: "社区；群体" },
          { en: "consider", zh: "考虑" }, { en: "consist", zh: "由…组成" }, { en: "contribute", zh: "贡献" },
          { en: "culture", zh: "文化" }, { en: "decision", zh: "决定" }, { en: "develop", zh: "发展；开发" },
          { en: "economic", zh: "经济的" }, { en: "effect", zh: "影响；效果" }, { en: "environment", zh: "环境" },
          { en: "establish", zh: "建立" }, { en: "evidence", zh: "证据" }, { en: "experience", zh: "经验；经历" },
          { en: "feature", zh: "特征" }, { en: "focus", zh: "集中" }, { en: "function", zh: "功能；起作用" },
          { en: "global", zh: "全球的" }, { en: "identify", zh: "识别；确认" }, { en: "increase", zh: "增加" },
          { en: "individual", zh: "个人；个体的" }, { en: "influence", zh: "影响" }, { en: "instance", zh: "例子" },
          { en: "issue", zh: "问题；议题" }, { en: "majority", zh: "大多数" }, { en: "occur", zh: "发生" }
        ]
      },
      {
        id: "s-academic",
        title: "学术写作",
        words: [
          { en: "achievement", zh: "成就" }, { en: "acquire", zh: "获得" }, { en: "adapt", zh: "适应；改编" },
          { en: "adequate", zh: "充足的" }, { en: "apparent", zh: "明显的" }, { en: "appreciate", zh: "欣赏；感激" },
          { en: "aspect", zh: "方面" }, { en: "assume", zh: "假定" }, { en: "available", zh: "可获得的" },
          { en: "circumstance", zh: "情况" }, { en: "complex", zh: "复杂的" }, { en: "concept", zh: "概念" },
          { en: "conclude", zh: "总结；得出结论" }, { en: "consequence", zh: "后果" }, { en: "constant", zh: "持续的" },
          { en: "contrast", zh: "对比" }, { en: "create", zh: "创造" }, { en: "critical", zh: "关键的；批判的" },
          { en: "demonstrate", zh: "证明；展示" }
        ]
      },
      {
        id: "s-abstract",
        title: "抽象概念",
        words: [
          { en: "significant", zh: "重要的；显著的" }, { en: "potential", zh: "潜力；潜在的" },
          { en: "reveal", zh: "揭示" }, { en: "shift", zh: "转变" }, { en: "source", zh: "来源" },
          { en: "specific", zh: "具体的" }, { en: "structure", zh: "结构" }, { en: "theory", zh: "理论" },
          { en: "threaten", zh: "威胁" }, { en: "traditional", zh: "传统的" }, { en: "transform", zh: "转变" },
          { en: "unique", zh: "独特的" }, { en: "valid", zh: "有效的；合理的" }, { en: "value", zh: "价值" },
          { en: "vary", zh: "变化" }, { en: "view", zh: "观点；看法" }, { en: "volume", zh: "量；体积" },
          { en: "welfare", zh: "福利" }, { en: "whereas", zh: "然而" }, { en: "witness", zh: "见证" }
        ]
      },
      {
        id: "s-science",
        title: "科学技术",
        words: [
          { en: "experiment", zh: "实验" }, { en: "hypothesis", zh: "假设" }, { en: "observation", zh: "观察" },
          { en: "phenomenon", zh: "现象" }, { en: "principle", zh: "原则；原理" }, { en: "process", zh: "过程" },
          { en: "result", zh: "结果" }, { en: "sample", zh: "样本" }, { en: "signal", zh: "信号" },
          { en: "substance", zh: "物质" }, { en: "system", zh: "系统" }, { en: "technical", zh: "技术的" },
          { en: "technology", zh: "技术" }, { en: "variable", zh: "变量" }
        ]
      },
      {
        id: "s-society",
        title: "社会话题",
        words: [
          { en: "society", zh: "社会" }, { en: "economy", zh: "经济" }, { en: "education", zh: "教育" },
          { en: "government", zh: "政府" }, { en: "industry", zh: "工业" }, { en: "institution", zh: "机构" },
          { en: "law", zh: "法律" }, { en: "media", zh: "媒体" }, { en: "policy", zh: "政策" },
          { en: "population", zh: "人口" }, { en: "poverty", zh: "贫困" }, { en: "progress", zh: "进步" },
          { en: "region", zh: "地区" }, { en: "resource", zh: "资源" }, { en: "responsibility", zh: "责任" }
        ]
      }
    ]
  }
};
