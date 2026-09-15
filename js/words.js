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
      },
      {
        id: "p-sh3a-u1",
        title: "3年级上 · Unit 1",
        words: [
          { en: "hello", zh: "你好" },
          { en: "morning", zh: "早晨，上午" },
          { en: "Miss", zh: "小姐（未婚女士）" },
          { en: "I", zh: "我" },
          { en: "good", zh: "好的" },
        ]
      },
      {
        id: "p-sh3a-u2",
        title: "3年级上 · Unit 2",
        words: [
          { en: "Mr", zh: "先生" },
          { en: "Mrs", zh: "太太" },
          { en: "are", zh: "是（复数）" },
          { en: "fine", zh: "健康的" },
          { en: "goodbye", zh: "再见" },
          { en: "hi", zh: "嗨" },
          { en: "thank", zh: "谢谢" },
          { en: "you", zh: "你，你们" },
        ]
      },
      {
        id: "p-sh3a-u3",
        title: "3年级上 · Unit 3",
        words: [
          { en: "boy", zh: "男孩" },
          { en: "girl", zh: "女孩" },
          { en: "am", zh: "是" },
          { en: "no", zh: "不 ，不是" },
          { en: "not", zh: "不是" },
          { en: "yes", zh: "是，" },
        ]
      },
      {
        id: "p-sh3a-u4",
        title: "3年级上 · Unit 4",
        words: [
          { en: "tail", zh: "高的" },
          { en: "short", zh: "矮的" },
          { en: "fat", zh: "胖的" },
          { en: "thin", zh: "瘦的" },
          { en: "friend", zh: "朋友" },
          { en: "is", zh: "是" },
          { en: "he", zh: "他（指男性）" },
          { en: "my", zh: "我的" },
          { en: "this", zh: "这，这个" },
          { en: "she", zh: "她（指女性）" },
        ]
      },
      {
        id: "p-sh3a-u5",
        title: "3年级上 · Unit 5",
        words: [
          { en: "father", zh: "爸爸" },
          { en: "mother", zh: "妈妈" },
          { en: "brother", zh: "哥哥，弟弟" },
          { en: "sister", zh: "姐姐、妹妹" },
          { en: "me", zh: "我" },
          { en: "beautiful", zh: "美丽的" },
          { en: "who", zh: "谁" },
          { en: "family", zh: "家庭" },
        ]
      },
      {
        id: "p-sh3a-u6",
        title: "3年级上 · Unit 6",
        words: [
          { en: "hair", zh: "头发" },
          { en: "eye", zh: "眼睛" },
          { en: "ear", zh: "耳朵" },
          { en: "nose", zh: "鼻子" },
          { en: "mouth", zh: "嘴巴" },
          { en: "face", zh: "脸" },
          { en: "big", zh: "大的" },
          { en: "long", zh: "长的" },
          { en: "look", zh: "看" },
          { en: "small", zh: "小的" },
        ]
      },
      {
        id: "p-sh3a-u7",
        title: "3年级上 · Unit 7",
        words: [
          { en: "blackboard", zh: "黑板" },
          { en: "door", zh: "门" },
          { en: "window", zh: "窗户" },
          { en: "clean", zh: "把---擦干净，打扫" },
          { en: "please", zh: "请，劳烦。。。" },
          { en: "late", zh: "迟到" },
          { en: "look at", zh: "看" },
          { en: "open", zh: "打开" },
          { en: "close", zh: "关" },
          { en: "the", zh: "（表示特指）" },
        ]
      },
      {
        id: "p-sh3a-u8",
        title: "3年级上 · Unit 8",
        words: [
          { en: "a(an)", zh: "一个" },
          { en: "apple", zh: "苹果" },
          { en: "banana", zh: "香蕉" },
          { en: "orange", zh: "桔子" },
          { en: "pear", zh: "梨" },
          { en: "dad", zh: "爸爸（口语）" },
          { en: "good", zh: "好的" },
          { en: "here", zh: "这里" },
          { en: "how much", zh: "多少（询问价钱）" },
          { en: "they", zh: "（他、她、它）们" },
          { en: "it", zh: "它" },
        ]
      },
      {
        id: "p-sh3a-u9",
        title: "3年级上 · Unit 9",
        words: [
          { en: "chair", zh: "椅子" },
          { en: "desk", zh: "书桌" },
          { en: "pen", zh: "钢笔" },
          { en: "bed", zh: "床" },
          { en: "schoolbag", zh: "书包" },
          { en: "book", zh: "书" },
          { en: "these", zh: "这些" },
          { en: "pencil", zh: "铅笔" },
          { en: "ruler", zh: "尺子" },
          { en: "mum", zh: "妈妈（口语）" },
          { en: "your", zh: "你的，你们的" },
        ]
      },
      {
        id: "p-sh3a-u10",
        title: "3年级上 · Unit 10",
        words: [
          { en: "one", zh: "一" },
          { en: "two", zh: "二" },
          { en: "three", zh: "三" },
          { en: "four", zh: "四" },
          { en: "five", zh: "五" },
          { en: "six", zh: "六" },
          { en: "seven", zh: "七" },
          { en: "eight", zh: "八" },
          { en: "nine", zh: "九" },
          { en: "ten", zh: "十" },
          { en: "how many", zh: "多少（询问数量）" },
        ]
      },
      {
        id: "p-sh3a-u11",
        title: "3年级上 · Unit 11",
        words: [
          { en: "mouse", zh: "老鼠" },
          { en: "cat", zh: "猫" },
          { en: "dog", zh: "狗" },
          { en: "rabbit", zh: "兔子" },
          { en: "fish", zh: "鱼" },
          { en: "it's", zh: "它的" },
          { en: "tail", zh: "尾巴" },
          { en: "what", zh: "什么" },
        ]
      },
      {
        id: "p-sh3a-u12",
        title: "3年级上 · Unit 12",
        words: [
          { en: "spring", zh: "春天" },
          { en: "summer", zh: "夏天" },
          { en: "autumn", zh: "秋天" },
          { en: "winter", zh: "冬天" },
          { en: "cold", zh: "寒冷的" },
          { en: "cool", zh: "凉爽的" },
          { en: "hot", zh: "炎热的" },
          { en: "warm", zh: "温暖的" },
          { en: "in", zh: "在（某段时间）里" },
        ]
      },
      {
        id: "p-sh3b-u1",
        title: "3年级下 · Unit 1",
        words: [
          { en: "black", zh: "黑色" },
          { en: "blue", zh: "蓝色" },
          { en: "green", zh: "绿色" },
          { en: "red", zh: "红色" },
          { en: "white", zh: "白色" },
          { en: "yellow", zh: "黄色" },
          { en: "and", zh: "和" },
          { en: "ball", zh: "球" },
          { en: "colour", zh: "颜色" },
        ]
      },
      {
        id: "p-sh3b-u2",
        title: "3年级下 · Unit 2",
        words: [
          { en: "candy", zh: "糖果" },
          { en: "ice cream", zh: "冰淇淋" },
          { en: "lemon", zh: "柠檬" },
          { en: "how", zh: "怎样" },
          { en: "orange", zh: "橘子" },
          { en: "sour", zh: "酸的" },
          { en: "sweet", zh: "甜的" },
          { en: "taste", zh: "品尝" },
        ]
      },
      {
        id: "p-sh3b-u3",
        title: "3年级下 · Unit 3",
        words: [
          { en: "Bike", zh: "自行车" },
          { en: "bus", zh: "大客车" },
          { en: "plane", zh: "飞机" },
          { en: "ship", zh: "船" },
          { en: "car", zh: "汽车" },
          { en: "train", zh: "火车" },
          { en: "can", zh: "能" },
          { en: "hear", zh: "听见……" },
          { en: "listen", zh: "听" },
        ]
      },
      {
        id: "p-sh3b-u4",
        title: "3年级下 · Unit 4",
        words: [
          { en: "Bear", zh: "熊" },
          { en: "elephant", zh: "大象" },
          { en: "lion", zh: "狮子" },
          { en: "monkey", zh: "猴子" },
          { en: "panda", zh: "熊猫" },
          { en: "tiger", zh: "老虎" },
          { en: "like", zh: "像，喜欢" },
          { en: "man", zh: "男人" },
          { en: "old", zh: "旧，老的" },
          { en: "our", zh: "我们的" },
          { en: "strong", zh: "强壮" },
        ]
      },
      {
        id: "p-sh3b-u5",
        title: "3年级下 · Unit 5",
        words: [
          { en: "Kite", zh: "风筝" },
          { en: "robot", zh: "机器人" },
          { en: "toy bear", zh: "玩具熊" },
          { en: "fun", zh: "有趣的" },
          { en: "lovely", zh: "可爱的" },
          { en: "play", zh: "玩" },
          { en: "sorry", zh: "对不起" },
        ]
      },
      {
        id: "p-sh3b-u6",
        title: "3年级下 · Unit 6",
        words: [
          { en: "Biscuit", zh: "饼干" },
          { en: "bread", zh: "面包" },
          { en: "egg", zh: "鸡蛋" },
          { en: "juice", zh: "果汁" },
          { en: "milk", zh: "牛奶" },
          { en: "water", zh: "水" },
          { en: "breakfast", zh: "早餐" },
          { en: "child", zh: "孩子" },
          { en: "have", zh: "有" },
          { en: "some", zh: "一些" },
          { en: "too", zh: "也" },
          { en: "We", zh: "我们" },
        ]
      },
      {
        id: "p-sh3b-u7",
        title: "3年级下 · Unit 7",
        words: [
          { en: "dance", zh: "跳舞" },
          { en: "paint", zh: "画画" },
          { en: "read", zh: "读（书）" },
          { en: "sing", zh: "唱（歌）" },
          { en: "skate", zh: "滑冰" },
          { en: "swim", zh: "游泳" },
          { en: "at home", zh: "在家" },
          { en: "come in", zh: "进来" },
          { en: "sleep", zh: "睡觉" },
          { en: "work", zh: "工作" },
          { en: "worker", zh: "工人" },
        ]
      },
      {
        id: "p-sh3b-u8",
        title: "3年级下 · Unit 8",
        words: [
          { en: "cake", zh: "蛋糕" },
          { en: "card", zh: "卡片" },
          { en: "noodle", zh: "面条" },
          { en: "birthday", zh: "生日" },
          { en: "dear", zh: "亲爱的" },
          { en: "for", zh: "为了" },
          { en: "how old", zh: "多大（年纪）" },
          { en: "to", zh: "向，朝着" },
        ]
      },
      {
        id: "p-sh3b-u9",
        title: "3年级下 · Unit 9",
        words: [
          { en: "cow", zh: "牛" },
          { en: "horse", zh: "马" },
          { en: "pig", zh: "猪" },
          { en: "sheep", zh: "羊" },
          { en: "bye", zh: "再见" },
          { en: "farm", zh: "农场" },
          { en: "grass", zh: "草" },
          { en: "great", zh: "好，伟大的" },
          { en: "litter", zh: "垃圾" },
          { en: "stone", zh: "石头" },
          { en: "throw", zh: "扔" },
        ]
      },
      {
        id: "p-sh3b-u10",
        title: "3年级下 · Unit 10",
        words: [
          { en: "Head", zh: "头" },
          { en: "body", zh: "身体" },
          { en: "arm", zh: "胳膊" },
          { en: "hand", zh: "手" },
          { en: "leg", zh: "腿" },
          { en: "foot", zh: "脚" },
        ]
      },
      {
        id: "p-sh3b-u11",
        title: "3年级下 · Unit 11",
        words: [
          { en: "Flower", zh: "花" },
          { en: "photo", zh: "照片" },
          { en: "tea", zh: "茶" },
          { en: "cup", zh: "杯子" },
          { en: "day", zh: "天，白天" },
          { en: "idea", zh: "主意" },
          { en: "love", zh: "爱" },
        ]
      },
      {
        id: "p-sh3b-u12",
        title: "3年级下 · Unit 12",
        words: [
          { en: "afraid(of)", zh: "害怕" },
          { en: "bad", zh: "坏的" },
          { en: "house", zh: "房子" },
          { en: "little", zh: "小，一点儿" },
          { en: "make", zh: "做，制造" },
          { en: "now", zh: "现在" },
          { en: "there", zh: "那里" },
          { en: "very", zh: "非常" },
        ]
      },
      {
        id: "p-sh4a-u1",
        title: "4年级上 · Unit 1",
        words: [
          { en: "meet", zh: "相识" },
          { en: "new", zh: "新的" },
          { en: "morning", zh: "早晨" },
          { en: "classmate", zh: "同学" },
          { en: "her", zh: "她的" },
          { en: "name", zh: "名字" },
          { en: "sit", zh: "坐" },
          { en: "afternoon", zh: "下午" },
          { en: "his", zh: "他的" },
        ]
      },
      {
        id: "p-sh4a-u2",
        title: "4年级上 · Unit 2",
        words: [
          { en: "run", zh: "跑" },
          { en: "fast", zh: "快" },
          { en: "fly", zh: "飞" },
          { en: "draw", zh: "画画" },
          { en: "write", zh: "写字" },
          { en: "jump", zh: "跳" },
          { en: "welcome", zh: "欢迎" },
          { en: "woof", zh: "汪汪" },
          { en: "but", zh: "但是" },
        ]
      },
      {
        id: "p-sh4a-u3",
        title: "4年级上 · Unit 3",
        words: [
          { en: "happy", zh: "开心的" },
          { en: "sad", zh: "难过的" },
          { en: "tired", zh: "累的" },
          { en: "hungry", zh: "饥饿的" },
          { en: "full", zh: "饱的" },
          { en: "thirsty", zh: "口渴的" },
          { en: "bird", zh: "鸟" },
          { en: "see", zh: "看见" },
          { en: "bottle", zh: "瓶子" },
          { en: "drink", zh: "喝" },
        ]
      },
      {
        id: "p-sh4a-u4",
        title: "4年级上 · Unit 4",
        words: [
          { en: "any", zh: "任何" },
          { en: "cousin", zh: "表兄弟" },
          { en: "family", zh: "家庭" },
          { en: "parent", zh: "父母 亲" },
          { en: "grandparent", zh: "祖父母亲" },
          { en: "son", zh: "儿子" },
          { en: "grandfather(grandpa)", zh: "外公（爷爷）" },
          { en: "grandmother(grandma)", zh: "外婆（奶奶）" },
          { en: "uncle", zh: "叔叔，舅舅" },
          { en: "aunt", zh: "姑妈，阿姨that 那个" },
        ]
      },
      {
        id: "p-sh4a-u5",
        title: "4年级上 · Unit 5",
        words: [
          { en: "T-shirt", zh: "T 恤衫" },
          { en: "brown", zh: "棕色" },
          { en: "shorts", zh: "短裤" },
          { en: "ride", zh: "骑" },
          { en: "skirt", zh: "短裙" },
          { en: "dress", zh: "连衣裙" },
          { en: "shirt", zh: "衬衫" },
          { en: "tooth", zh: "( 复数teeth) 牙齿" },
          { en: "Sharp", zh: "锋利" },
          { en: "help", zh: "帮助" },
          { en: "get out", zh: "出去" },
        ]
      },
      {
        id: "p-sh4a-u6",
        title: "4年级上 · Unit 6",
        words: [
          { en: "nurse", zh: "护士" },
          { en: "fireman", zh: "消防员" },
          { en: "teacher", zh: "教师" },
          { en: "doctor", zh: "医生" },
          { en: "bus drive", zh: "公共汽车司机" },
          { en: "kid", zh: "小孩" },
          { en: "so", zh: "如此" },
          { en: "fire", zh: "火" },
          { en: "people", zh: "人们" },
          { en: "job", zh: "工作" },
        ]
      },
      {
        id: "p-sh4a-u7",
        title: "4年级上 · Unit 7",
        words: [
          { en: "School", zh: "学校" },
          { en: "office", zh: "办公室" },
          { en: "busy", zh: "繁忙" },
          { en: "computer", zh: "电脑" },
          { en: "many", zh: "许多" },
          { en: "library", zh: "图书馆" },
          { en: "playground", zh: "操场" },
          { en: "classroom", zh: "教室" },
          { en: "toilet", zh: "厕所" },
          { en: "animal", zh: "动物" },
          { en: "forest", zh: "森林" },
          { en: "pupil", zh: "小学生" },
          { en: "try", zh: "尝试" },
          { en: "first", zh: "第一" },
        ]
      },
      {
        id: "p-sh4a-u8",
        title: "4年级上 · Unit 8",
        words: [
          { en: "Shop", zh: "商店" },
          { en: "tomato", zh: "西红柿" },
          { en: "soup", zh: "汤" },
          { en: "potato", zh: "土豆" },
          { en: "carrot", zh: "胡萝卜" },
          { en: "thirty", zh: "三十" },
          { en: "fish", zh: "鱼" },
          { en: "meat", zh: "肉" },
          { en: "rice", zh: "米饭" },
          { en: "glasses", zh: "眼镜" },
          { en: "want", zh: "想要" },
          { en: "together", zh: "一起" },
          { en: "magic", zh: "神奇" },
        ]
      },
      {
        id: "p-sh4a-u9",
        title: "4年级上 · Unit 9",
        words: [
          { en: "need", zh: "需要" },
          { en: "where", zh: "哪里" },
          { en: "in", zh: "在--里面" },
          { en: "box", zh: "盒子" },
          { en: "give", zh: "给" },
          { en: "plate", zh: "盘子" },
          { en: "on", zh: "在--上面" },
          { en: "table", zh: "桌子" },
          { en: "lunch", zh: "午餐" },
          { en: "under", zh: "在--下面" },
          { en: "beside", zh: "在--旁边" },
          { en: "kitchen", zh: "厨房" },
          { en: "floor", zh: "地板" },
          { en: "angry", zh: "生气的" },
        ]
      },
      {
        id: "p-sh4a-u10",
        title: "4年级上 · Unit 10",
        words: [
          { en: "around", zh: "到处" },
          { en: "home", zh: "家" },
          { en: "street", zh: "街道" },
          { en: "park", zh: "公园" },
          { en: "near", zh: "附近" },
          { en: "behind", zh: "在--后面" },
          { en: "supermarket", zh: "超市" },
          { en: "restaurant", zh: "餐馆" },
          { en: "live", zh: "居住" },
          { en: "old", zh: "古老的" },
          { en: "eat", zh: "吃" },
          { en: "nice", zh: "美味的" },
          { en: "food", zh: "食物" },
          { en: "a lot of", zh: "很多" },
        ]
      },
      {
        id: "p-sh4a-u11",
        title: "4年级上 · Unit 11",
        words: [
          { en: "Shape", zh: "形状" },
          { en: "picture", zh: "图画" },
          { en: "square", zh: "正方形" },
          { en: "circle", zh: "圆形" },
          { en: "star", zh: "五角星" },
          { en: "rectangle", zh: "长方形" },
          { en: "triangle", zh: "三角形" },
          { en: "today", zh: "今天" },
          { en: "well", zh: "好，健康" },
        ]
      },
      {
        id: "p-sh4a-u12",
        title: "4年级上 · Unit 12",
        words: [
          { en: "Weather", zh: "天气" },
          { en: "rainy", zh: "多雨的" },
          { en: "cloudy", zh: "多云的" },
          { en: "windy", zh: "多风的" },
          { en: "sunny", zh: "阳光充足的" },
          { en: "Sunday", zh: "星期天" },
          { en: "cloud", zh: "云" },
          { en: "rain", zh: "雨" },
          { en: "sun", zh: "太阳" },
          { en: "wind", zh: "风" },
        ]
      },
      {
        id: "p-sh4b-u1",
        title: "4年级下 · Unit 1",
        words: [
          { en: "Touch", zh: "碰，触摸" },
          { en: "feel", zh: "摸起来，感到" },
          { en: "soft", zh: "柔软的" },
          { en: "hard", zh: "坚硬的" },
          { en: "thick", zh: "厚的，粗的" },
          { en: "thin", zh: "薄的，细的" },
          { en: "blind", zh: "瞎的，失明的" },
          { en: "noise", zh: "响声，吵闹声" },
          { en: "young", zh: "年轻的" },
        ]
      },
      {
        id: "p-sh4b-u2",
        title: "4年级下 · Unit 2",
        words: [
          { en: "smell", zh: "闻，嗅" },
          { en: "strawberry", zh: "草莓" },
          { en: "or", zh: "或者，还是" },
          { en: "watermelon", zh: "西瓜" },
          { en: "grape", zh: "葡萄" },
          { en: "fox", zh: "狐狸" },
          { en: "round", zh: "圆的" },
          { en: "purple", zh: "紫色的" },
          { en: "wait", zh: "等待，等候" },
          { en: "minute", zh: "一会儿，分钟" },
          { en: "get", zh: "得到" },
          { en: "those", zh: "那些" },
        ]
      },
      {
        id: "p-sh4b-u3",
        title: "4年级下 · Unit 3",
        words: [
          { en: "rise", zh: "升起" },
          { en: "shadow", zh: "影子" },
          { en: "noon", zh: "中午" },
          { en: "high", zh: "高的" },
          { en: "sky", zh: "天空" },
          { en: "evening", zh: "黄昏，晚上" },
          { en: "again", zh: "再，又" },
          { en: "night", zh: "夜晚" },
          { en: "moon", zh: "月亮" },
          { en: "him", zh: "他" },
          { en: "stop", zh: "停下" },
          { en: "at noon", zh: "在中午" },
          { en: "go down", zh: "落下" },
          { en: "at night", zh: "在夜晚" },
          { en: "take a walk", zh: "散步" },
        ]
      },
      {
        id: "p-sh4b-u4",
        title: "4年级下 · Unit 4",
        words: [
          { en: "subject", zh: "学科，科目" },
          { en: "lesson", zh: "课" },
          { en: "Chinese", zh: "〔学科〕语文" },
          { en: "Maths", zh: "〔学科〕数学" },
          { en: "English", zh: "〔学科〕英语" },
          { en: "Science", zh: "〔学科〕科学" },
          { en: "PE", zh: "〔学科〕体育" },
          { en: "Music", zh: "〔学科〕音乐" },
          { en: "Art", zh: "〔学科〕美术" },
          { en: "timetable", zh: "课程表" },
          { en: "from", zh: "从，来自" },
          { en: "a.m", zh: "上午" },
          { en: "p.m", zh: "下午" },
          { en: "break", zh: "休息" },
          { en: "from…to…", zh: "从…到…." },
        ]
      },
      {
        id: "p-sh4b-u5",
        title: "4年级下 · Unit 5",
        words: [
          { en: "sport", zh: "体育运动" },
          { en: "football", zh: "足球" },
          { en: "club", zh: "俱乐部" },
          { en: "join", zh: "参加，参加" },
          { en: "tell", zh: "告诉" },
          { en: "about", zh: "关于" },
          { en: "basketball", zh: "篮球" },
          { en: "volleyball", zh: "排球" },
          { en: "us", zh: "我们" },
          { en: "table tennis", zh: "乒乓球运动" },
          { en: "play football", zh: "踢足球" },
          { en: "play basketball", zh: "打篮球" },
          { en: "play volleyball", zh: "打排球" },
        ]
      },
      {
        id: "p-sh4b-u6",
        title: "4年级下 · Unit 6",
        words: [
          { en: "wonderful", zh: "使人愉悦的，绝妙的" },
          { en: "violin", zh: "小提琴" },
          { en: "guitar", zh: "吉他" },
          { en: "whose", zh: "谁的" },
          { en: "piano", zh: "钢琴" },
          { en: "city", zh: "城市" },
          { en: "bag", zh: "袋子" },
          { en: "all", zh: "全部，全部" },
          { en: "play the violin", zh: "拉小提琴" },
          { en: "play the guitar", zh: "弹吉他" },
        ]
      },
      {
        id: "p-sh4b-u7",
        title: "4年级下 · Unit 7",
        words: [
          { en: "o’clock", zh: "…点钟" },
          { en: "quarter", zh: "一刻钟" },
          { en: "time", zh: "时间" },
          { en: "half", zh: "半，一半" },
          { en: "wash", zh: "洗" },
          { en: "dinner", zh: "晚餐，正餐" },
          { en: "start", zh: "开始" },
          { en: "catch", zh: "捉住" },
          { en: "get up", zh: "起床" },
          { en: "brush…teeth", zh: "刷牙" },
          { en: "half past", zh: "…点半" },
          { en: "have breakfast", zh: "吃早餐" },
          { en: "go to school", zh: "去上学" },
          { en: "wash…face", zh: "洗脸" },
          { en: "have lunch", zh: "吃午餐" },
          { en: "have dinner", zh: "吃晚餐" },
          { en: "go to bed", zh: "上床睡觉" },
        ]
      },
      {
        id: "p-sh4b-u8",
        title: "4年级下 · Unit 8",
        words: [
          { en: "week", zh: "星期" },
          { en: "Monday", zh: "星期一" },
          { en: "with", zh: "和…一起" },
          { en: "Tuesday", zh: "星期二" },
          { en: "Wednesday", zh: "星期三" },
          { en: "Thursday", zh: "星期四" },
          { en: "Friday", zh: "星期五" },
          { en: "game", zh: "游戏" },
          { en: "Saturday", zh: "星期六" },
          { en: "Sunday", zh: "星期日" },
          { en: "clock", zh: "时钟，钟" },
          { en: "play chess", zh: "下国际象棋" },
          { en: "at the weekend", zh: "在周末" },
          { en: "(be)late for", zh: "迟到" },
        ]
      },
      {
        id: "p-sh4b-u9",
        title: "4年级下 · Unit 9",
        words: [
          { en: "China", zh: "中国" },
          { en: "talk", zh: "谈话，说话" },
          { en: "May", zh: "五月" },
          { en: "June", zh: "六月" },
          { en: "January", zh: "一月" },
          { en: "February", zh: "二月" },
          { en: "March", zh: "三月" },
          { en: "April", zh: "四月" },
          { en: "July", zh: "七月" },
          { en: "August", zh: "八月" },
          { en: "September", zh: "九月" },
          { en: "October", zh: "十月" },
          { en: "November", zh: "十一月" },
          { en: "December", zh: "十二月" },
          { en: "email", zh: "电子邮件" },
          { en: "hat", zh: "帽子" },
          { en: "wear", zh: "穿，戴" },
          { en: "yours", zh: "你的，你们的" },
          { en: "every year", zh: "每年" },
        ]
      },
      {
        id: "p-sh4b-u10",
        title: "4年级下 · Unit 10",
        words: [
          { en: "Garden", zh: "花园" },
          { en: "plant", zh: "植物" },
          { en: "leaf", zh: "叶子" },
          { en: "water", zh: "给…浇水" },
          { en: "them", zh: "它们，他们，她们" },
          { en: "grow", zh: "生长，成长" },
          { en: "seed", zh: "种子" },
          { en: "every day", zh: "每天" },
        ]
      },
      {
        id: "p-sh4b-u11",
        title: "4年级下 · Unit 11",
        words: [
          { en: "Song", zh: "歌曲" },
          { en: "zoo", zh: "动物园" },
          { en: "cinema", zh: "电影院" },
          { en: "museum", zh: "博物馆" },
          { en: "also", zh: "也，还" },
          { en: "have a party", zh: "举办聚会" },
        ]
      },
      {
        id: "p-sh4b-u12",
        title: "4年级下 · Unit 12",
        words: [
          { en: "Ugly", zh: "丑的，丑陋的" },
          { en: "duck", zh: "鸭子" },
          { en: "duckling", zh: "小鸭子" },
          { en: "river", zh: "河，江" },
          { en: "baby", zh: "宝宝，婴儿" },
          { en: "later", zh: "后来，以后" },
          { en: "quack", zh: "〔鸭叫声〕嘎嘎" },
          { en: "back", zh: "背，背部" },
          { en: "away", zh: "去别处，朝另一个方向" },
          { en: "swan", zh: "天鹅" },
          { en: "into", zh: "朝，向，到…里面" },
        ]
      },
      {
        id: "p-sh5a-u1",
        title: "5年级上 · Unit 1",
        words: [
          { en: "future", zh: "未来" },
          { en: "want", zh: "想要" },
          { en: "pilot", zh: "飞行员" },
          { en: "teach", zh: "教" },
          { en: "cook", zh: "厨师，烹饪" },
          { en: "taxi driver", zh: "出租车司机" },
          { en: "job", zh: "工作，职业" },
          { en: "singer", zh: "歌手" },
          { en: "fall", zh: "掉落" },
          { en: "lifeguard", zh: "救生员" },
          { en: "save", zh: "救" },
          { en: "become", zh: "变成，变得" },
          { en: "(be)good at", zh: "擅长" },
        ]
      },
      {
        id: "p-sh5a-u2",
        title: "5年级上 · Unit 2",
        words: [
          { en: "by", zh: "靠近" },
          { en: "walk", zh: "走，步行" },
          { en: "Ms", zh: "女士" },
          { en: "journey", zh: "旅程" },
          { en: "primary school", zh: "小学" },
          { en: "underground", zh: "地铁" },
          { en: "station", zh: "车站" },
          { en: "take", zh: "乘坐，带领" },
          { en: "after", zh: "在……之后" },
          { en: "hour", zh: "小时" },
          { en: "bus stop", zh: "公共汽车站" },
          { en: "by bus", zh: "乘公共汽车" },
          { en: "far from", zh: "离……远" },
          { en: "on foot", zh: "步行" },
          { en: "by bike", zh: "骑自行车" },
          { en: "by car", zh: "乘小汽车" },
          { en: "get off", zh: "下车" },
        ]
      },
      {
        id: "p-sh5a-u3",
        title: "5年级上 · Unit 3",
        words: [
          { en: "party", zh: "聚会" },
          { en: "when", zh: "什么时候" },
          { en: "begin", zh: "开始" },
          { en: "bring", zh: "带来" },
          { en: "thing", zh: "东西" },
          { en: "favourite", zh: "最喜欢的" },
          { en: "interesting", zh: "有趣的" },
          { en: "hat", zh: "帽子" },
          { en: "have fun", zh: "尽情玩" },
        ]
      },
      {
        id: "p-sh5a-u4",
        title: "5年级上 · Unit 4",
        words: [
          { en: "usually", zh: "通常" },
          { en: "often", zh: "经常" },
          { en: "visit", zh: "看望，拜访" },
          { en: "sometimes", zh: "有时" },
          { en: "always", zh: "总是，一直" },
          { en: "never", zh: "从不" },
          { en: "play sport", zh: "做运动" },
          { en: "go shopping", zh: "去购物" },
          { en: "clever", zh: "聪明的" },
        ]
      },
      {
        id: "p-sh5a-u5",
        title: "5年级上 · Unit 5",
        words: [
          { en: "same", zh: "相同的" },
          { en: "class", zh: "班级" },
          { en: "both", zh: "（两个）都" },
          { en: "cross", zh: "穿越，越过" },
          { en: "carry", zh: "背，提" },
          { en: "heavy", zh: "重的" },
          { en: "different", zh: "不同的" },
          { en: "bored", zh: "无聊的" },
          { en: "word", zh: "单词" },
          { en: "easy", zh: "容易的" },
          { en: "say", zh: "说" },
          { en: "then", zh: "然后，那么" },
          { en: "ask", zh: "问" },
          { en: "answer", zh: "回答" },
          { en: "soon", zh: "很快，不久" },
          { en: "each other", zh: "互相" },
          { en: "make phone calls", zh: "打电话" },
        ]
      },
      {
        id: "p-sh5a-u6",
        title: "5年级上 · Unit 6",
        words: [
          { en: "life", zh: "生活" },
          { en: "living room", zh: "客厅" },
          { en: "bedroom", zh: "卧室" },
          { en: "model plane", zh: "飞机模型" },
          { en: "kitchen", zh: "厨房" },
          { en: "bathroom", zh: "浴室，卫生间" },
          { en: "their", zh: "他们的 light灯，光" },
          { en: "watch", zh: "观看" },
          { en: "TV", zh: "电视机" },
          { en: "before", zh: "在….以前" },
          { en: "bedtime", zh: "就寝时间" },
          { en: "do……homework", zh: "做家庭作业" },
          { en: "turn off", zh: "关掉" },
          { en: "watch TV", zh: "看电视" },
          { en: "tell a story", zh: "讲故事" },
        ]
      },
      {
        id: "p-sh5a-u7",
        title: "5年级上 · Unit 7",
        words: [
          { en: "beach", zh: "海滩" },
          { en: "enjoy", zh: "享受……的乐趣" },
          { en: "sunshine", zh: "阳光" },
          { en: "collect", zh: "收集" },
          { en: "shell", zh: "贝壳" },
          { en: "sea", zh: "海" },
          { en: "letter", zh: "信" },
          { en: "put", zh: "放，安置" },
          { en: "know", zh: "知道" },
        ]
      },
      {
        id: "p-sh5a-u8",
        title: "5年级上 · Unit 8",
        words: [
          { en: "year", zh: "年岁，年" },
          { en: "on holiday", zh: "度假" },
          { en: "have a good time", zh: "玩得高兴" },
          { en: "outing", zh: "远足" },
          { en: "map", zh: "地图" },
          { en: "hill山 find", zh: "找到" },
          { en: "diamond", zh: "钻石" },
          { en: "another", zh: "另一个" },
          { en: "lake", zh: "湖" },
          { en: "funny", zh: "滑稽的，好笑的" },
          { en: "hole", zh: "洞" },
          { en: "key", zh: "钥匙" },
          { en: "think", zh: "想" },
          { en: "at the top of", zh: "在….顶部" },
          { en: "get through", zh: "通过" },
        ]
      },
      {
        id: "p-sh5a-u9",
        title: "5年级上 · Unit 9",
        words: [
          { en: "post office", zh: "邮局" },
          { en: "quite", zh: "相当，十分" },
          { en: "along", zh: "沿着，顺着" },
          { en: "turn", zh: "转向，转弯" },
          { en: "left", zh: "左边" },
          { en: "straight", zh: "笔直地" },
          { en: "right", zh: "右边，正确的" },
          { en: "between", zh: "在…..中间" },
          { en: "flower shop", zh: "花店" },
          { en: "hospital", zh: "医院" },
          { en: "toy shop", zh: "玩具店" },
          { en: "road", zh: "路，马路" },
          { en: "get to", zh: "到达" },
        ]
      },
      {
        id: "p-sh5a-u10",
        title: "5年级上 · Unit 10",
        words: [
          { en: "gently", zh: "和缓地，温柔地" },
          { en: "blow", zh: "刮，吹" },
          { en: "softly", zh: "轻柔地" },
          { en: "strongly", zh: "强劲地" },
          { en: "happily", zh: "快乐地" },
          { en: "windmill", zh: "风车" },
          { en: "move", zh: "移动，（使）改变位置" },
          { en: "slowly", zh: "缓慢地" },
          { en: "quickly", zh: "迅速地" },
          { en: "sound", zh: "声音，听起来好像" },
          { en: "wind-bell", zh: "风铃" },
          { en: "cut", zh: "剪，砍，" },
          { en: "paper", zh: "纸" },
          { en: "quiet", zh: "轻声的" },
          { en: "tap", zh: "水龙头" },
        ]
      },
      {
        id: "p-sh5a-u11",
        title: "5年级上 · Unit 11",
        words: [
          { en: "use", zh: "使用" },
          { en: "vegetables", zh: "蔬菜" },
          { en: "clothes", zh: "衣服" },
          { en: "farmer", zh: "农民" },
          { en: "useful", zh: "有用的" },
          { en: "drop", zh: "滴，水珠" },
          { en: "up", zh: "向上" },
          { en: "shine", zh: "照耀" },
          { en: "over", zh: "在…..上方" },
          { en: "mountain", zh: "山，山脉" },
          { en: "tree", zh: "树" },
          { en: "ground", zh: "地面" },
          { en: "inside", zh: "在….里面" },
          { en: "grow crops", zh: "种庄稼" },
          { en: "put out fire", zh: "灭火" },
        ]
      },
      {
        id: "p-sh5a-u12",
        title: "5年级上 · Unit 12",
        words: [
          { en: "fire", zh: "火" },
          { en: "burn", zh: "燃烧" },
          { en: "hurt", zh: "（使）受伤" },
          { en: "must", zh: "必须" },
          { en: "careful", zh: "小心的" },
          { en: "safety", zh: "安全" },
          { en: "smoke", zh: "吸烟" },
          { en: "match", zh: "火柴" },
          { en: "heat", zh: "热，高温" },
          { en: "hate", zh: "讨厌" },
          { en: "burn down", zh: "烧毁" },
          { en: "(be) careful with", zh: "当心……" },
          { en: "not…..at all", zh: "一点也不……." },
        ]
      },
      {
        id: "p-sh5b-u1",
        title: "5年级下 · Unit 1",
        words: [
          { en: "tidy", zh: "整理" },
          { en: "mess", zh: "脏乱，不整洁" },
          { en: "let", zh: "让" },
          { en: "sock", zh: "短袜" },
          { en: "yours", zh: "你的，你们的" },
          { en: "cap", zh: "帽子" },
          { en: "mine", zh: "我的" },
          { en: "crayon", zh: "蜡笔" },
          { en: "umbrella", zh: "雨伞" },
          { en: "nail", zh: "钉子" },
          { en: "drop", zh: "使落下" },
          { en: "stick", zh: "粘贴" },
          { en: "second", zh: "秒" },
          { en: "hers", zh: "她的" },
          { en: "theirs", zh: "他们的" },
          { en: "tidy up", zh: "把.....整理好" },
          { en: "(be)full of", zh: "装满…….." },
          { en: "a few", zh: "几个，一些" },
        ]
      },
      {
        id: "p-sh5b-u2",
        title: "5年级下 · Unit 2",
        words: [
          { en: "why", zh: "为什么" },
          { en: "because", zh: "因为" },
          { en: "study", zh: "书房，学习" },
          { en: "dining room", zh: "餐厅" },
          { en: "wild goose", zh: "大雁（复数wild geese）" },
          { en: "change", zh: "改变" },
          { en: "place", zh: "地方" },
          { en: "twice", zh: "两次" },
          { en: "every", zh: "每个" },
          { en: "north", zh: "北方" },
          { en: "south", zh: "南方" },
          { en: "enough", zh: "足够的" },
          { en: "then", zh: "然后" },
          { en: "all day", zh: "一天到晚" },
        ]
      },
      {
        id: "p-sh5b-u3",
        title: "5年级下 · Unit 3",
        words: [
          { en: "future", zh: "未来" },
          { en: "stand", zh: "站" },
          { en: "machine", zh: "机器" },
          { en: "will", zh: "将" },
          { en: "exercise", zh: "运动" },
          { en: "early", zh: "早，提早" },
          { en: "easily", zh: "容易地" },
          { en: "hard", zh: "努力地" },
          { en: "more", zh: "更多的" },
          { en: "in the future", zh: "将来" },
          { en: "in front of", zh: "在…..前面" },
          { en: "take a photo", zh: "拍照" },
          { en: "wear glasses", zh: "戴眼镜" },
          { en: "do exercise", zh: "做运动" },
          { en: "(be)weak in", zh: "不擅长" },
          { en: "not …any more", zh: "不再" },
        ]
      },
      {
        id: "p-sh5b-u4",
        title: "5年级下 · Unit 4",
        words: [
          { en: "storybook", zh: "故事书" },
          { en: "buy", zh: "买" },
          { en: "story", zh: "故事" },
          { en: "dictionary", zh: "字典" },
          { en: "magazine", zh: "杂志" },
          { en: "newspaper", zh: "报纸" },
          { en: "week", zh: "周" },
          { en: "student", zh: "学生" },
          { en: "poster", zh: "海报" },
          { en: "best", zh: "最好的" },
          { en: "writer", zh: "作家" },
          { en: "over there", zh: "在那边" },
          { en: "do a survey", zh: "做调查" },
          { en: "act …out", zh: "表演" },
        ]
      },
      {
        id: "p-sh5b-u5",
        title: "5年级下 · Unit 5",
        words: [
          { en: "weekend", zh: "周末" },
          { en: "stay", zh: "待，暂住" },
          { en: "film", zh: "电影" },
          { en: "boat", zh: "小船" },
          { en: "plan", zh: "安排，计划" },
          { en: "tomorrow", zh: "明天" },
          { en: "build", zh: "建筑" },
          { en: "next", zh: "紧接着" },
          { en: "swing", zh: "秋千" },
          { en: "cry", zh: "哭，喊叫" },
          { en: "until", zh: "直到" },
          { en: "see a film", zh: "看电影" },
          { en: "row a boat", zh: "划船" },
        ]
      },
      {
        id: "p-sh5b-u6",
        title: "5年级下 · Unit 6",
        words: [
          { en: "holiday", zh: "假日" },
          { en: "clear", zh: "清澈的" },
          { en: "seafood", zh: "海鲜" },
          { en: "hotel", zh: "旅馆" },
          { en: "island", zh: "岛" },
          { en: "butterfly", zh: "蝴蝶" },
          { en: "how long", zh: "多久" },
          { en: "go swimming", zh: "去游泳" },
          { en: "in the south of", zh: "在…..的南部" },
          { en: "all year round", zh: "一年到头" },
        ]
      },
      {
        id: "p-sh5b-u7",
        title: "5年级下 · Unit 7",
        words: [
          { en: "meet", zh: "迎接，会见" },
          { en: "school gate", zh: "校门" },
          { en: "art room", zh: "美术室" },
          { en: "hall", zh: "礼堂" },
          { en: "finally", zh: "最后" },
          { en: "room", zh: "会议室" },
          { en: "show", zh: "给……看" },
          { en: "project", zh: "课题" },
          { en: "board", zh: "布告牌" },
        ]
      },
      {
        id: "p-sh5b-u8",
        title: "5年级下 · Unit 8",
        words: [
          { en: "which", zh: "哪一个" },
          { en: "trousers", zh: "裤子" },
          { en: "size", zh: "尺寸" },
          { en: "sweater", zh: "毛衣" },
          { en: "coat", zh: "外套" },
          { en: "shoe", zh: "鞋子" },
          { en: "emperor", zh: "皇帝" },
          { en: "only", zh: "只有" },
          { en: "nod", zh: "点头" },
          { en: "smile", zh: "微笑" },
          { en: "money", zh: "钱" },
          { en: "keep", zh: "保持" },
          { en: "laugh", zh: "大笑" },
          { en: "try…..on", zh: "试穿（衣物）" },
          { en: "put…..on", zh: "穿，戴" },
          { en: "keep quite", zh: "保持安静" },
          { en: "have a look", zh: "看一看" },
        ]
      },
      {
        id: "p-sh5b-u9",
        title: "5年级下 · Unit 9",
        words: [
          { en: "ill", zh: "生病的" },
          { en: "wrong", zh: "有毛病，不正常" },
          { en: "headache", zh: "头疼" },
          { en: "fever", zh: "发烧" },
          { en: "should", zh: "应该" },
          { en: "medicine", zh: "药" },
          { en: "rest", zh: "休息" },
          { en: "toothache", zh: "牙痛" },
          { en: "toothless", zh: "没有牙齿的" },
          { en: "present", zh: "礼物" },
          { en: "world", zh: "世界" },
          { en: "dentist", zh: "牙医" },
          { en: "have a headache", zh: "头疼" },
          { en: "have a fever", zh: "发烧" },
          { en: "have a cold", zh: "感冒" },
          { en: "have a rest", zh: "休息一下" },
          { en: "get well", zh: "康复" },
          { en: "have a toothache", zh: "牙疼" },
          { en: "have a meeting", zh: "开会" },
          { en: "pull……out", zh: "把…….拔出" },
        ]
      },
      {
        id: "p-sh5b-u10",
        title: "5年级下 · Unit 10",
        words: [
          { en: "invention", zh: "发明" },
          { en: "watch", zh: "手表" },
          { en: "anywhere", zh: "任何地方" },
          { en: "travel", zh: "旅行" },
          { en: "invent", zh: "发明" },
          { en: "something", zh: "某事，某物" },
          { en: "myself", zh: "我自己" },
          { en: "camera", zh: "相机" },
          { en: "far away from……", zh: "远离……." },
        ]
      },
      {
        id: "p-sh5b-u11",
        title: "5年级下 · Unit 11",
        words: [
          { en: "festival", zh: "节日" },
          { en: "important", zh: "重要的" },
          { en: "call", zh: "把…..叫做" },
          { en: "dumpling", zh: "饺子" },
          { en: "relative", zh: "亲戚" },
          { en: "red packet", zh: "红包" },
          { en: "firework", zh: "烟花" },
          { en: "monster", zh: "怪物" },
          { en: "end", zh: "结尾，结束" },
          { en: "village", zh: "村庄" },
          { en: "last", zh: "最后的" },
          { en: "firecracker", zh: "鞭炮" },
          { en: "mooncake", zh: "月饼" },
          { en: "at the end of", zh: "在…..最后" },
        ]
      },
      {
        id: "p-sh5b-u12",
        title: "5年级下 · Unit 12",
        words: [
          { en: "giant", zh: "巨人" },
          { en: "wall", zh: "围墙" },
          { en: "kind", zh: "友好的" },
          { en: "through", zh: "穿过" },
          { en: "no entry", zh: "禁止入内" },
          { en: "(be)kind to", zh: "对….友好" },
          { en: "knock down", zh: "推到，拆掉" },
        ]
      },
      {
        id: "p-sh6a-u1",
        title: "6年级上 · Unit 1",
        words: [
          { en: "month", zh: "一个月的时间，月份" },
          { en: "cute", zh: "可爱的" },
          { en: "pretty", zh: "漂亮的" },
          { en: "handsome", zh: "英俊的，帅气的" },
          { en: "turtle", zh: "乌龟" },
          { en: "catch", zh: "逮住，捕捉" },
          { en: "fly", zh: "苍蝇" },
          { en: "grow up", zh: "长大，成长" },
          { en: "junior high school", zh: "初级中学" },
        ]
      },
      {
        id: "p-sh6a-u2",
        title: "6年级上 · Unit 2",
        words: [
          { en: "famous", zh: "著名的，出名的" },
          { en: "during", zh: "在 ...... 期间" },
          { en: "spend", zh: "度过" },
          { en: "everyone", zh: "每个人，所有人" },
          { en: "countryside", zh: "乡村，农村" },
          { en: "pick", zh: "采摘" },
          { en: "summer holiday", zh: "暑假" },
        ]
      },
      {
        id: "p-sh6a-u3",
        title: "6年级上 · Unit 3",
        words: [
          { en: "healthy", zh: "健康的，有益于健康的" },
          { en: "unhealthy", zh: "不健康的，损害健康的" },
          { en: "hamburger", zh: "汉堡包" },
          { en: "cola", zh: "可乐" },
          { en: "yesterday", zh: "昨天" },
          { en: "fruit", zh: "水果" },
          { en: "pie", zh: "馅饼" },
          { en: "pizza", zh: "比萨饼" },
          { en: "sandwich", zh: "三明治" },
          { en: "vegetable", zh: "蔬菜" },
          { en: "chicken", zh: "鸡肉" },
          { en: "chocolate", zh: "巧克力" },
        ]
      },
      {
        id: "p-sh6a-u4",
        title: "6年级上 · Unit 4",
        words: [
          { en: "neighbour", zh: "邻居" },
          { en: "son", zh: "儿子" },
          { en: "daughter", zh: "女儿" },
          { en: "noisy", zh: "吵闹的" },
          { en: "owl", zh: "猫头鹰" },
          { en: "dig", zh: "挖（土），掘（洞）" },
          { en: "make noise", zh: "制造噪音" },
        ]
      },
      {
        id: "p-sh6a-u5",
        title: "6年级上 · Unit 5",
        words: [
          { en: "thousand", zh: "一千" },
          { en: "hundred", zh: "一百" },
          { en: "wild", zh: "野生环境，野生的" },
          { en: "south China tiger", zh: "华南虎" },
          { en: "blue whale", zh: "蓝鲸" },
          { en: "way", zh: "路，方式，方法" },
          { en: "die", zh: "死，死亡" },
          { en: "rhino", zh: "犀牛" },
          { en: "learn", zh: "学会，学习" },
          { en: "send", zh: "安排去，寄，送" },
          { en: "in danger", zh: "面临危险" },
        ]
      },
      {
        id: "p-sh6a-u6",
        title: "6年级上 · Unit 6",
        words: [
          { en: "e-friend", zh: "网友" },
          { en: "country", zh: "国家" },
          { en: "other", zh: "其他的" },
          { en: "team", zh: "（游戏或运动的）队" },
          { en: "hobby", zh: "业余爱好" },
          { en: "grade", zh: "年级" },
          { en: "yourself", zh: "你自己" },
        ]
      },
      {
        id: "p-sh6a-u7",
        title: "6年级上 · Unit 7",
        words: [
          { en: "shall", zh: "表示提出或征求意见" },
          { en: "princess", zh: "公主" },
          { en: "police", zh: "警方，警察部门" },
          { en: "exciting", zh: "令人激动的，使人兴奋的" },
          { en: "brave", zh: "勇敢的" },
          { en: "policeman", zh: "警察（复数 policemen）" },
          { en: "boring", zh: "没趣的，令人厌倦的" },
          { en: "queen", zh: "王后" },
          { en: "mirror", zh: "镜子" },
          { en: "fairest", zh: "最美丽的" },
          { en: "kill", zh: "杀死" },
          { en: "asleep", zh: "睡着的" },
        ]
      },
      {
        id: "p-sh6a-u8",
        title: "6年级上 · Unit 8",
        words: [
          { en: "bee", zh: "蜜蜂" },
          { en: "insect", zh: "昆虫" },
          { en: "ant", zh: "蚂蚁" },
          { en: "anything", zh: "任何东西" },
          { en: "kind", zh: "种类" },
          { en: "finger", zh: "手指" },
          { en: "dancer", zh: "跳舞者，舞蹈演员" },
          { en: "insect museum", zh: "昆虫博物馆" },
          { en: "model car", zh: "汽车模型" },
          { en: "science museum", zh: "科学博物馆" },
        ]
      },
      {
        id: "p-sh6a-u9",
        title: "6年级上 · Unit 9",
        words: [
          { en: "capital", zh: "首都" },
          { en: "north", zh: "北，北部" },
          { en: "east", zh: "东，东部" },
          { en: "west", zh: "西，西部" },
          { en: "south", zh: "南，南部" },
          { en: "palace", zh: "王宫，宫殿" },
          { en: "most", zh: "大多数" },
          { en: "tourist", zh: "游客" },
          { en: "building", zh: "建筑物，楼房" },
          { en: "sushi", zh: "寿司（日本食物）" },
        ]
      },
      {
        id: "p-sh6a-u10",
        title: "6年级上 · Unit 10",
        words: [
          { en: "air", zh: "空气" },
          { en: "everywhere", zh: "处处，到处" },
          { en: "alive", zh: "活着的" },
          { en: "balloon", zh: "气球" },
          { en: "factory", zh: "工厂" },
          { en: "smoke", zh: "烟" },
          { en: "dirty", zh: "脏的" },
          { en: "clean", zh: "干净的，洁净的" },
          { en: "hurt", zh: "感到痛" },
          { en: "fresh", zh: "清新的" },
          { en: "plant", zh: "种植" },
        ]
      },
      {
        id: "p-sh6a-u11",
        title: "6年级上 · Unit 11",
        words: [
          { en: "wood", zh: "木头，木材" },
          { en: "cool", zh: "使变凉" },
          { en: "match", zh: "火柴" },
          { en: "miss", zh: "想念" },
        ]
      },
      {
        id: "p-sh6a-u12",
        title: "6年级上 · Unit 12",
        words: [
          { en: "Earth", zh: "地球" },
          { en: "part", zh: "地区，区域" },
          { en: "forest", zh: "森林" },
          { en: "land", zh: "陆地" },
          { en: "ocean", zh: "海洋" },
          { en: "rubbish", zh: "垃圾" },
          { en: "sick", zh: "生病的" },
          { en: "recycle", zh: "回收利用，再利用" },
          { en: "own", zh: "自己的" },
          { en: "plastic", zh: "塑料" },
        ]
      },
      {
        id: "p-sh6b-u1",
        title: "6年级下 · Unit 1",
        words: [
          { en: "weigh", zh: "有……重；重" },
          { en: "kilogram", zh: "千克；公斤（缩写形式kg）" },
          { en: "centimetre", zh: "厘米（缩写形式cm）" },
          { en: "taller", zh: "更高的" },
          { en: "fan", zh: "（足球、电影等）迷；爱好者" },
          { en: "fantastic", zh: "极好的" },
          { en: "themselves", zh: "他们自己、她们自己、它们自己" },
          { en: "theatre", zh: "剧院" },
          { en: "go fishing", zh: "去钓鱼" },
          { en: "enjoy oneself", zh: "玩的愉快；得到乐趣" },
          { en: "get…in", zh: "收割" },
        ]
      },
      {
        id: "p-sh6b-u2",
        title: "6年级下 · Unit 2",
        words: [
          { en: "life", zh: "生活" },
          { en: "writer", zh: "作家" },
          { en: "photographer", zh: "摄影师" },
          { en: "film", zh: "胶卷" },
          { en: "digital", zh: "数码的" },
          { en: "street cleaner", zh: "环卫工人" },
          { en: "sweep", zh: "扫地" },
          { en: "broom", zh: "扫帚" },
          { en: "drive", zh: "驾驶" },
          { en: "street sweeper", zh: "扫地车" },
          { en: "wife", zh: "妻子" },
          { en: "poor", zh: "贫穷的；差的；次的" },
          { en: "fairy", zh: "仙子；小精灵" },
          { en: "wish", zh: "愿望；祝愿" },
          { en: "by hand", zh: "用手" },
          { en: "right away", zh: "立即；马上" },
          { en: "in a short time", zh: "很快" },
        ]
      },
      {
        id: "p-sh6b-u3",
        title: "6年级下 · Unit 3",
        words: [
          { en: "carry", zh: "背；提；拿" },
          { en: "online", zh: "在线地；在线的" },
          { en: "head teacher", zh: "校长" },
          { en: "PS", zh: "附言（用于信末）" },
          { en: "mountain", zh: "山；山脉" },
          { en: "even", zh: "甚至" },
          { en: "space", zh: "太空" },
          { en: "dinosaur", zh: "恐龙" },
          { en: "a piece of", zh: "一张；一片" },
          { en: "have a picnic", zh: "去野餐" },
          { en: "better and better", zh: "越来越好" },
        ]
      },
      {
        id: "p-sh6b-u4",
        title: "6年级下 · Unit 4",
        words: [
          { en: "oil", zh: "油" },
          { en: "oil painting", zh: "油画" },
          { en: "powerful", zh: "强有力的；力量强大的" },
          { en: "ink", zh: "墨水；墨汁" },
          { en: "Chinese ink painting", zh: "中国水墨画" },
          { en: "brush", zh: "画笔；刷子；刷" },
          { en: "paints", zh: "绘画颜料" },
          { en: "artist", zh: "艺术家；（尤指）画家" },
          { en: "unhappy", zh: "不高兴的" },
          { en: "carefully", zh: "仔细地" },
          { en: "on the left", zh: "在左边" },
          { en: "on the right", zh: "在右边" },
          { en: "all the time", zh: "一直；始终" },
        ]
      },
      {
        id: "p-sh6b-u5",
        title: "6年级下 · Unit 5",
        words: [
          { en: "craft", zh: "手艺" },
          { en: "crown", zh: "王冠；皇冠" },
          { en: "scissors", zh: "剪刀" },
          { en: "tape", zh: "胶带" },
          { en: "glue", zh: "胶水" },
          { en: "saw", zh: "锯" },
          { en: "craftman", zh: "工匠；手艺人（复数 craftmen）" },
          { en: "tool", zh: "工具" },
          { en: "easily", zh: "容易地" },
          { en: "himself", zh: "他自己" },
          { en: "still", zh: "仍然" },
          { en: "model house", zh: "房子模型" },
          { en: "a long time ago", zh: "很久以前" },
          { en: "at work", zh: "忙着（做事情）" },
          { en: "say to oneself", zh: "自言自语" },
        ]
      },
      {
        id: "p-sh6b-u6",
        title: "6年级下 · Unit 6",
        words: [
          { en: "long race", zh: "长跑" },
          { en: "short race", zh: "短跑" },
          { en: "win", zh: "获胜；赢" },
          { en: "long jump", zh: "跳远" },
          { en: "high jump", zh: "跳高" },
          { en: "swimsuit", zh: "游泳衣（尤指女式）" },
          { en: "swimming cap", zh: "游泳帽" },
          { en: "swimming pool", zh: "游泳池" },
          { en: "warm-up", zh: "准备活动；热身练习" },
          { en: "fit", zh: "健壮的" },
          { en: "swimming goggles", zh: "游泳镜" },
        ]
      },
      {
        id: "p-sh6b-u7",
        title: "6年级下 · Unit 7",
        words: [
          { en: "bell", zh: "铃铛" },
          { en: "neck", zh: "脖子" },
          { en: "ago", zh: "以前" },
          { en: "gatekeeper", zh: "门卫" },
          { en: "praise", zh: "赞扬；称赞" },
          { en: "praise …for…", zh: "因……而表扬……" },
        ]
      },
      {
        id: "p-sh6b-u8",
        title: "6年级下 · Unit 8",
        words: [
          { en: "sign", zh: "标识" },
          { en: "middle", zh: "中间；中部；中心" },
          { en: "special", zh: "特别的" },
          { en: "path", zh: "小路；小径" },
          { en: "may", zh: "可能；可以" },
          { en: "lost", zh: "迷路的；迷失的" },
          { en: "worry", zh: "担心" },
          { en: "follow", zh: "跟随；跟着" },
          { en: "in the middle", zh: "在中间" },
          { en: "look out", zh: "小心；当心" },
          { en: "no smoking", zh: "禁止吸烟" },
          { en: "no swimming", zh: "禁止游泳" },
          { en: "get lost", zh: "迷路" },
          { en: "some time", zh: "一段时间" },
          { en: "on the way", zh: "在路上" },
        ]
      },
      {
        id: "p-sh6b-u9",
        title: "6年级下 · Unit 9",
        words: [
          { en: "reuse", zh: "重新利用" },
          { en: "can", zh: "金属罐" },
          { en: "rubber", zh: "橡皮" },
          { en: "vase", zh: "花瓶" },
          { en: "pen holder", zh: "笔筒" },
          { en: "envelope", zh: "信封" },
          { en: "plastic", zh: "塑料制的；塑料的" },
          { en: "rubbish bin", zh: "垃圾桶" },
          { en: "truck", zh: "卡车" },
          { en: "piece", zh: "碎片；碎块" },
          { en: "cloth", zh: "布；布料" },
          { en: "throw away", zh: "扔掉" },
        ]
      },
      {
        id: "p-sh6b-u10",
        title: "6年级下 · Unit 10",
        words: [
          { en: "fairy table", zh: "童话（故事）" },
          { en: "adult", zh: "成年人" },
          { en: "well-known", zh: "众所周知的；著名的" },
          { en: "stronger", zh: "更强大的" },
          { en: "than", zh: "比" },
          { en: "scarf", zh: "围巾（复数 scarfs或 scarves）" },
          { en: "blow off", zh: "吹掉" },
          { en: "take off", zh: "脱掉" },
        ]
      },
      {
        id: "p-sh6b-u11",
        title: "6年级下 · Unit 11",
        words: [
          { en: "Western", zh: "西方的" },
          { en: "turkey", zh: "火鸡" },
          { en: "bright", zh: "明亮的；鲜艳的" },
          { en: "laugh at", zh: "嘲笑" },
          { en: "jack-o’-lantern", zh: "南瓜灯" },
        ]
      },
      {
        id: "p-sh6b-u12",
        title: "6年级下 · Unit 12",
        words: [
          { en: "pea", zh: "豌豆" },
          { en: "pod", zh: "豆荚" },
          { en: "forever", zh: "永远" },
          { en: "bigger", zh: "更大的" },
          { en: "excited", zh: "兴奋的" },
          { en: "bullet", zh: "子弹" },
          { en: "lazy", zh: "懒惰的" },
          { en: "roof", zh: "屋顶" },
          { en: "yard", zh: "院子" },
          { en: "hit", zh: "碰撞；撞击" },
          { en: "see the world", zh: "见世面" },
          { en: "one by one", zh: "一个接一个地" },
          { en: "look out of", zh: "往外看" },
        ]
      },
    ],
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
