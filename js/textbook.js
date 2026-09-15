/*
 * english-mastery · 课文跟读句库（人教版 PEP，三起点）
 * 覆盖小学 3~6 年级、上下学期，按教材单元（Unit）组织典型课文句子。
 * 每句 { en, zh }，由 app.js 的「课文跟读」模块驱动：听示范 + 跟我读 + 语音识别逐词批改。
 *
 * 说明：以下为标准课程英语里「代表性 / 高频」的课文句，对齐 PEP 各册单元话题，
 * 便于孩子按年级单元练跟读；并非逐字翻印教材。若想用孩子课本里的原句，
 * 直接把对应句子替换进本文件的 sentences 数组即可，结构不变。
 */
window.TEXTBOOK = [
  /* ===================== 三年级上册（PEP 3A） ===================== */
  {
    key: "pep3a", label: "三年级上册", edition: "人教版 PEP（三起点）",
    units: [
      { id: "pep3a-u1", title: "Unit 1 Hello!", sentences: [
        { en: "Hello, I'm Mike.", zh: "你好，我是迈克。" },
        { en: "Hi, I'm Sarah. What's your name?", zh: "嗨，我是萨拉。你叫什么名字？" },
        { en: "My name's John.", zh: "我叫约翰。" },
        { en: "I have a ruler.", zh: "我有一把尺子。" },
        { en: "I have an eraser.", zh: "我有一块橡皮。" },
        { en: "Goodbye! See you!", zh: "再见！回头见！" }
      ]},
      { id: "pep3a-u2", title: "Unit 2 Colours", sentences: [
        { en: "Good morning!", zh: "早上好！" },
        { en: "This is Miss Green.", zh: "这是格林小姐。" },
        { en: "I see red.", zh: "我看见红色。" },
        { en: "Show me blue.", zh: "给我看蓝色。" },
        { en: "Colour it brown!", zh: "把它涂成棕色！" },
        { en: "Nice to meet you.", zh: "很高兴认识你。" }
      ]},
      { id: "pep3a-u3", title: "Unit 3 Look at me!", sentences: [
        { en: "How are you? I'm fine, thank you.", zh: "你好吗？我很好，谢谢。" },
        { en: "Look at me! This is my face.", zh: "看我！这是我的脸。" },
        { en: "Touch your nose.", zh: "摸摸你的鼻子。" },
        { en: "This is my arm.", zh: "这是我的胳膊。" },
        { en: "Clap your hands.", zh: "拍拍你的手。" },
        { en: "Shake your legs.", zh: "抖抖你的腿。" }
      ]},
      { id: "pep3a-u4", title: "Unit 4 We love animals", sentences: [
        { en: "What's this? It's a duck.", zh: "这是什么？是一只鸭子。" },
        { en: "What's that? It's a panda.", zh: "那是什么？是一只熊猫。" },
        { en: "Look! A funny dog!", zh: "看！一只滑稽的狗！" },
        { en: "I like it.", zh: "我喜欢它。" },
        { en: "Act like a bird.", zh: "像小鸟一样做动作。" },
        { en: "Follow me!", zh: "跟我做！" }
      ]},
      { id: "pep3a-u5", title: "Unit 5 Let's eat!", sentences: [
        { en: "I'd like some juice, please.", zh: "我想要些果汁，谢谢。" },
        { en: "Here you are. Thank you.", zh: "给你。谢谢。" },
        { en: "Have some bread.", zh: "吃些面包吧。" },
        { en: "Can I have some water?", zh: "我能喝点水吗？" },
        { en: "You're welcome.", zh: "不客气。" },
        { en: "Eat some eggs.", zh: "吃些鸡蛋。" }
      ]},
      { id: "pep3a-u6", title: "Unit 6 Happy birthday!", sentences: [
        { en: "Happy birthday!", zh: "生日快乐！" },
        { en: "How old are you? I'm six.", zh: "你几岁了？我六岁。" },
        { en: "How many plates?", zh: "几个盘子？" },
        { en: "This one, please.", zh: "请给我这个。" },
        { en: "Show me six.", zh: "给我看六。" },
        { en: "I have two gifts.", zh: "我有两份礼物。" }
      ]}
    ]
  },

  /* ===================== 三年级下册（PEP 3B） ===================== */
  {
    key: "pep3b", label: "三年级下册", edition: "人教版 PEP（三起点）",
    units: [
      { id: "pep3b-u1", title: "Unit 1 Welcome back!", sentences: [
        { en: "Where are you from? I'm from China.", zh: "你来自哪里？我来自中国。" },
        { en: "This is Amy. She's a student.", zh: "这是艾米。她是一名学生。" },
        { en: "We have a new friend today.", zh: "今天我们有个新朋友。" },
        { en: "I'm from the UK.", zh: "我来自英国。" },
        { en: "He's a teacher.", zh: "他是一位老师。" },
        { en: "Nice to see you again.", zh: "很高兴再见到你。" }
      ]},
      { id: "pep3b-u2", title: "Unit 2 My family", sentences: [
        { en: "Who's that man? He's my father.", zh: "那个男人是谁？他是我的爸爸。" },
        { en: "Who's that woman? She's my mother.", zh: "那个女人是谁？她是我的妈妈。" },
        { en: "Is she your sister? Yes, she is.", zh: "她是你的妹妹吗？是的。" },
        { en: "This is my grandmother.", zh: "这是我的奶奶。" },
        { en: "I love my family.", zh: "我爱我的家人。" },
        { en: "How many people are there?", zh: "有多少人？" }
      ]},
      { id: "pep3b-u3", title: "Unit 3 At the zoo", sentences: [
        { en: "Look at that monkey. It's fat!", zh: "看那只猴子。它好胖！" },
        { en: "It's so tall.", zh: "它好高。" },
        { en: "It has a short tail.", zh: "它有一条短尾巴。" },
        { en: "Make your eyes big.", zh: "把你的眼睛睁大。" },
        { en: "It is a small dog.", zh: "它是一只小狗。" },
        { en: "Be fat. Be thin.", zh: "变胖。变瘦。" }
      ]},
      { id: "pep3b-u4", title: "Unit 4 Where is my car?", sentences: [
        { en: "Where is my pencil box?", zh: "我的铅笔盒在哪？" },
        { en: "Is it in your desk? Yes, it is.", zh: "它在你书桌里吗？是的。" },
        { en: "Is it under the chair? No, it isn't.", zh: "它在椅子下面吗？不，不在。" },
        { en: "Put your hand on your chair.", zh: "把你的手放在椅子上。" },
        { en: "Row a boat.", zh: "划船。" },
        { en: "Drive a car.", zh: "开车。" }
      ]},
      { id: "pep3b-u5", title: "Unit 5 Do you like pears?", sentences: [
        { en: "Do you like oranges? Yes, I do.", zh: "你喜欢橙子吗？是的，喜欢。" },
        { en: "No, I don't. I like apples.", zh: "不，不喜欢。我喜欢苹果。" },
        { en: "Have some grapes.", zh: "吃些葡萄吧。" },
        { en: "I don't like watermelons.", zh: "我不喜欢西瓜。" },
        { en: "An apple a day.", zh: "一天一苹果。" },
        { en: "Let's buy some fruit.", zh: "我们买些水果吧。" }
      ]},
      { id: "pep3b-u6", title: "Unit 6 How many?", sentences: [
        { en: "How many kites do you see?", zh: "你看见多少只风筝？" },
        { en: "I see twelve.", zh: "我看见十二只。" },
        { en: "How many crayons do you have?", zh: "你有多少支蜡笔？" },
        { en: "The black one is a bird.", zh: "黑色那只是只鸟。" },
        { en: "So many!", zh: "这么多！" },
        { en: "Look at the cars!", zh: "看那些车！" }
      ]}
    ]
  },

  /* ===================== 四年级上册（PEP 4A） ===================== */
  {
    key: "pep4a", label: "四年级上册", edition: "人教版 PEP（三起点）",
    units: [
      { id: "pep4a-u1", title: "Unit 1 My classroom", sentences: [
        { en: "What's in the classroom?", zh: "教室里有什么？" },
        { en: "A blackboard, many desks and chairs.", zh: "一块黑板，许多课桌和椅子。" },
        { en: "Where is it? It's near the window.", zh: "它在哪？在窗户旁边。" },
        { en: "Let's clean the classroom!", zh: "我们打扫教室吧！" },
        { en: "Open the door, please.", zh: "请开门。" },
        { en: "Let me help you.", zh: "让我帮你。" }
      ]},
      { id: "pep4a-u2", title: "Unit 2 My schoolbag", sentences: [
        { en: "What's in your schoolbag?", zh: "你书包里有什么？" },
        { en: "An English book and a maths book.", zh: "一本英语书和一本数学书。" },
        { en: "I have a new schoolbag.", zh: "我有一个新书包。" },
        { en: "Put your Chinese book in your desk.", zh: "把你的语文书放进书桌。" },
        { en: "It's a fat panda!", zh: "它是一只胖熊猫！" },
        { en: "Zoom, your bag is heavy.", zh: "祖姆，你的包好重。" }
      ]},
      { id: "pep4a-u3", title: "Unit 3 My friends", sentences: [
        { en: "I have a good friend.", zh: "我有一个好朋友。" },
        { en: "He's tall and strong.", zh: "他又高又壮。" },
        { en: "Who's he? He's Zhang Peng.", zh: "他是谁？他是张鹏。" },
        { en: "She's quiet and friendly.", zh: "她安静又友好。" },
        { en: "He has glasses and short hair.", zh: "他戴眼镜，留短发。" },
        { en: "His shoes are blue.", zh: "他的鞋是蓝色的。" }
      ]},
      { id: "pep4a-u4", title: "Unit 4 My home", sentences: [
        { en: "Is she in the living room? No, she isn't.", zh: "她在客厅吗？不，不在。" },
        { en: "Where are the keys? They're on the table.", zh: "钥匙在哪？在桌上。" },
        { en: "Go to the bedroom.", zh: "去卧室。" },
        { en: "Is it in your hand? Yes, it is.", zh: "它在你手里吗？是的。" },
        { en: "Open the fridge.", zh: "打开冰箱。" },
        { en: "She's in the kitchen.", zh: "她在厨房。" }
      ]},
      { id: "pep4a-u5", title: "Unit 5 Dinner's ready", sentences: [
        { en: "What would you like? I'd like some soup.", zh: "你想吃什么？我想喝些汤。" },
        { en: "I'd like some beef and noodles.", zh: "我想要些牛肉和面条。" },
        { en: "Help yourself.", zh: "随便吃吧。" },
        { en: "Would you like a knife and fork?", zh: "你要刀叉吗？" },
        { en: "Pass me the bowl, please.", zh: "请把碗递给我。" },
        { en: "Dinner is ready!", zh: "晚饭好了！" }
      ]},
      { id: "pep4a-u6", title: "Unit 6 Meet my family!", sentences: [
        { en: "How many people are there in your family?", zh: "你家有几口人？" },
        { en: "Three. My parents and me.", zh: "三口。我的父母和我。" },
        { en: "What's your father's job? He's a doctor.", zh: "你爸爸做什么工作？他是医生。" },
        { en: "Is this your uncle? Yes, it is.", zh: "这是你叔叔吗？是的。" },
        { en: "My aunt is a nurse.", zh: "我姑姑是护士。" },
        { en: "We are a happy family.", zh: "我们是幸福的一家。" }
      ]}
    ]
  },

  /* ===================== 四年级下册（PEP 4B） ===================== */
  {
    key: "pep4b", label: "四年级下册", edition: "人教版 PEP（三起点）",
    units: [
      { id: "pep4b-u1", title: "Unit 1 My school", sentences: [
        { en: "Where's the teachers' office?", zh: "教师办公室在哪？" },
        { en: "It's on the second floor.", zh: "在二楼。" },
        { en: "Is this the library? Yes, it is.", zh: "这是图书馆吗？是的。" },
        { en: "The art room is next to the music room.", zh: "美术室在音乐室旁边。" },
        { en: "Go to the garden. Water the flowers.", zh: "去花园。浇花。" },
        { en: "This way, please.", zh: "请这边走。" }
      ]},
      { id: "pep4b-u2", title: "Unit 2 What time is it?", sentences: [
        { en: "What time is it? It's eight o'clock.", zh: "几点了？八点。" },
        { en: "It's time for English class.", zh: "该上英语课了。" },
        { en: "It's time to go to school.", zh: "该去上学了。" },
        { en: "Hurry up!", zh: "快点！" },
        { en: "Breakfast is ready.", zh: "早饭好了。" },
        { en: "It's time for bed.", zh: "该睡觉了。" }
      ]},
      { id: "pep4b-u3", title: "Unit 3 Weather", sentences: [
        { en: "What's the weather like in London?", zh: "伦敦天气怎么样？" },
        { en: "It's rainy.", zh: "下雨了。" },
        { en: "Is it cold in Moscow? Yes, it is.", zh: "莫斯科冷吗？是的。" },
        { en: "It's warm in Beijing today.", zh: "北京今天暖和。" },
        { en: "Can I go outside now?", zh: "我现在能出去吗？" },
        { en: "Be careful! It's hot.", zh: "小心！很烫。" }
      ]},
      { id: "pep4b-u4", title: "Unit 4 At the farm", sentences: [
        { en: "Are these carrots? Yes, they are.", zh: "这些是胡萝卜吗？是的。" },
        { en: "What are those? They're horses.", zh: "那些是什么？是马。" },
        { en: "They're sheep.", zh: "它们是绵羊。" },
        { en: "I like tomatoes.", zh: "我喜欢西红柿。" },
        { en: "Look at the green beans.", zh: "看那些四季豆。" },
        { en: "I love to eat green grass.", zh: "我爱吃青草。" }
      ]},
      { id: "pep4b-u5", title: "Unit 5 My clothes", sentences: [
        { en: "Whose coat is this? It's mine.", zh: "这是谁的外套？是我的。" },
        { en: "Whose pants are those? They're your father's.", zh: "那条裤子是谁的？是你爸爸的。" },
        { en: "I like that green skirt.", zh: "我喜欢那条绿裙子。" },
        { en: "Put on your shirt.", zh: "穿上你的衬衫。" },
        { en: "Hang up your dress.", zh: "挂起你的连衣裙。" },
        { en: "Whose hat is this?", zh: "这是谁的帽子？" }
      ]},
      { id: "pep4b-u6", title: "Unit 6 Shopping", sentences: [
        { en: "Can I help you? Yes, the gloves, please.", zh: "我能帮你吗？是的，请看手套。" },
        { en: "How much is it? It's ten yuan.", zh: "多少钱？十元。" },
        { en: "How much are those shoes?", zh: "那双鞋多少钱？" },
        { en: "They're ninety yuan.", zh: "九十元。" },
        { en: "Can I try them on?", zh: "我能试穿吗？" },
        { en: "They're too expensive!", zh: "太贵了！" }
      ]}
    ]
  },

  /* ===================== 五年级上册（PEP 5A） ===================== */
  {
    key: "pep5a", label: "五年级上册", edition: "人教版 PEP（三起点）",
    units: [
      { id: "pep5a-u1", title: "Unit 1 What's he like?", sentences: [
        { en: "Who's your English teacher?", zh: "谁是你们的英语老师？" },
        { en: "Mr Li. He's very funny.", zh: "李老师。他很有趣。" },
        { en: "What's she like? She's kind.", zh: "她是个怎样的人？她很和蔼。" },
        { en: "Is he strict? Yes, sometimes.", zh: "他严厉吗？是的，有时。" },
        { en: "We like our teachers.", zh: "我们喜欢我们的老师。" },
        { en: "She's hard-working.", zh: "她很勤奋。" }
      ]},
      { id: "pep5a-u2", title: "Unit 2 My week", sentences: [
        { en: "What do you have on Mondays?", zh: "你们周一有什么课？" },
        { en: "I have Chinese and English.", zh: "我有语文和英语。" },
        { en: "Do you often read books? Yes, I do.", zh: "你经常读书吗？是的。" },
        { en: "I have a cooking class.", zh: "我有一节烹饪课。" },
        { en: "What do you do on the weekend?", zh: "你周末做什么？" },
        { en: "I often play football.", zh: "我经常踢足球。" }
      ]},
      { id: "pep5a-u3", title: "Unit 3 What would you like?", sentences: [
        { en: "What would you like to eat? A sandwich.", zh: "你想吃什么？三明治。" },
        { en: "What would you like to drink? Some tea.", zh: "你想喝什么？一些茶。" },
        { en: "I'd like a salad.", zh: "我想要份沙拉。" },
        { en: "My favourite food is ice cream.", zh: "我最喜欢的食物是冰淇淋。" },
        { en: "The noodles are delicious.", zh: "面条很好吃。" },
        { en: "Here's some water.", zh: "这里有些水。" }
      ]},
      { id: "pep5a-u4", title: "Unit 4 What can you do?", sentences: [
        { en: "What can you do? I can sing.", zh: "你会做什么？我会唱歌。" },
        { en: "I can draw cartoons.", zh: "我会画漫画。" },
        { en: "Can you swim? Yes, I can.", zh: "你会游泳吗？是的，会。" },
        { en: "Can he dance? No, he can't.", zh: "他会跳舞吗？不，不会。" },
        { en: "I can play basketball.", zh: "我会打篮球。" },
        { en: "Let's have a party!", zh: "我们开个派对吧！" }
      ]},
      { id: "pep5a-u5", title: "Unit 5 There is a big bed", sentences: [
        { en: "There is a big bed in my room.", zh: "我房间里有一张大床。" },
        { en: "There are so many pictures.", zh: "有这么多画。" },
        { en: "Where is the ball? It's behind the door.", zh: "球在哪？在门后。" },
        { en: "There is a clock on the wall.", zh: "墙上有一个钟。" },
        { en: "I have a plant beside the table.", zh: "桌边有一盆绿植。" },
        { en: "Your room is really nice!", zh: "你的房间真不错！" }
      ]},
      { id: "pep5a-u6", title: "Unit 6 In a nature park", sentences: [
        { en: "Is there a river in the park? Yes, there is.", zh: "公园里有河吗？是的，有。" },
        { en: "Is there a lake? No, there isn't.", zh: "有湖吗？不，没有。" },
        { en: "Are there any mountains? Yes, there are.", zh: "有山吗？是的，有。" },
        { en: "There is a village near the river.", zh: "河边有一个村庄。" },
        { en: "I like this nature park.", zh: "我喜欢这个自然公园。" },
        { en: "Let's go to the forest!", zh: "我们去森林吧！" }
      ]}
    ]
  },

  /* ===================== 五年级下册（PEP 5B） ===================== */
  {
    key: "pep5b", label: "五年级下册", edition: "人教版 PEP（三起点）",
    units: [
      { id: "pep5b-u1", title: "Unit 1 This is my day", sentences: [
        { en: "When do you get up? At 7 o'clock.", zh: "你几点起床？七点。" },
        { en: "I eat breakfast at 8.", zh: "我八点吃早饭。" },
        { en: "What do you do on the weekend?", zh: "你周末做什么？" },
        { en: "I often clean my room.", zh: "我经常打扫房间。" },
        { en: "I usually watch TV.", zh: "我通常看电视。" },
        { en: "That sounds like a lot of fun.", zh: "听起来很有趣。" }
      ]},
      { id: "pep5b-u2", title: "Unit 2 My favourite season", sentences: [
        { en: "Which season do you like best? Autumn.", zh: "你最喜欢哪个季节？秋天。" },
        { en: "Why? Because I can pick apples.", zh: "为什么？因为我能摘苹果。" },
        { en: "Spring is green and warm.", zh: "春天是绿色又温暖的。" },
        { en: "I like winter because of snow.", zh: "我喜欢冬天，因为雪。" },
        { en: "The colours are beautiful.", zh: "色彩很美。" },
        { en: "I can make a snowman.", zh: "我能堆雪人。" }
      ]},
      { id: "pep5b-u3", title: "Unit 3 My school calendar", sentences: [
        { en: "When is Tree Planting Day? In March.", zh: "植树节是什么时候？三月。" },
        { en: "When is the school trip? In April.", zh: "学校旅行是什么时候？四月。" },
        { en: "What do you do in winter?", zh: "你们冬天做什么？" },
        { en: "We have a few fun things.", zh: "我们有一些有趣的活动。" },
        { en: "The sports meet is in May.", zh: "运动会在五月。" },
        { en: "Christmas is in December.", zh: "圣诞节在十二月。" }
      ]},
      { id: "pep5b-u4", title: "Unit 4 When is Easter?", sentences: [
        { en: "When is Easter? It's in April.", zh: "复活节是什么时候？在四月。" },
        { en: "When is your birthday? My birthday is on May 1st.", zh: "你生日是什么时候？五月一日。" },
        { en: "It's on the first Sunday.", zh: "在第一个星期日。" },
        { en: "The kittens are six days old.", zh: "小猫六天大了。" },
        { en: "There are twelve months in a year.", zh: "一年有十二个月。" },
        { en: "Happy birthday to you!", zh: "祝你生日快乐！" }
      ]},
      { id: "pep5b-u5", title: "Unit 5 Whose dog is it?", sentences: [
        { en: "Whose dog is it? It's mine.", zh: "这是谁的狗？是我的。" },
        { en: "Whose book is this? It's hers.", zh: "这是谁的书？是她的。" },
        { en: "The yellow picture is his.", zh: "那幅黄色的画是他的。" },
        { en: "Are these all ours? Yes, they are.", zh: "这些全是我们的吗？是的。" },
        { en: "The dog is sleeping.", zh: "狗在睡觉。" },
        { en: "Look! The dog is eating.", zh: "看！狗在吃东西。" }
      ]},
      { id: "pep5b-u6", title: "Unit 6 Work quietly!", sentences: [
        { en: "What are they doing? They're eating lunch.", zh: "他们在做什么？在吃午饭。" },
        { en: "What is she doing? She's listening to music.", zh: "她在做什么？在听音乐。" },
        { en: "Talk quietly, please.", zh: "请小声说话。" },
        { en: "Keep your desk clean.", zh: "保持桌面整洁。" },
        { en: "Work quietly in the library.", zh: "在图书馆安静地学习。" },
        { en: "The boy is reading a book.", zh: "男孩在看书。" }
      ]}
    ]
  },

  /* ===================== 六年级上册（PEP 6A） ===================== */
  {
    key: "pep6a", label: "六年级上册", edition: "人教版 PEP（三起点）",
    units: [
      { id: "pep6a-u1", title: "Unit 1 How can I get there?", sentences: [
        { en: "Where is the museum shop?", zh: "博物馆商店在哪？" },
        { en: "It's near the door.", zh: "在门附近。" },
        { en: "How can I get there? Turn left.", zh: "我怎么到那？向左转。" },
        { en: "Turn right at the bookstore.", zh: "在书店右转。" },
        { en: "Is it far? No, it's near.", zh: "远吗？不，很近。" },
        { en: "Excuse me, sir.", zh: "打扰一下，先生。" }
      ]},
      { id: "pep6a-u2", title: "Unit 2 Ways to go to school", sentences: [
        { en: "How do you come to school? By bus.", zh: "你怎么来上学？乘公交。" },
        { en: "I come on foot.", zh: "我步行来。" },
        { en: "Don't go at the red light.", zh: "红灯时不要走。" },
        { en: "Slow down and stop.", zh: "慢下来并停下。" },
        { en: "We must pay attention to the traffic.", zh: "我们必须注意交通。" },
        { en: "I go by bike.", zh: "我骑自行车去。" }
      ]},
      { id: "pep6a-u3", title: "Unit 3 My weekend plan", sentences: [
        { en: "What are you going to do? I'm going to see a film.", zh: "你打算做什么？我打算看电影。" },
        { en: "When are you going? This evening.", zh: "你什么时候去？今晚。" },
        { en: "I'm going to visit my grandparents.", zh: "我要去看望祖父母。" },
        { en: "We're going to take a trip.", zh: "我们要去旅行。" },
        { en: "Have a good time!", zh: "玩得开心！" },
        { en: "Sounds great!", zh: "听起来很棒！" }
      ]},
      { id: "pep6a-u4", title: "Unit 4 I have a pen pal", sentences: [
        { en: "What are your hobbies? I like reading stories.", zh: "你的爱好是什么？我喜欢读故事。" },
        { en: "He likes doing kung fu.", zh: "他喜欢练功夫。" },
        { en: "Does he live in China? Yes, he does.", zh: "他住在中国吗？是的。" },
        { en: "Does she like singing? No, she doesn't.", zh: "她喜欢唱歌吗？不，不喜欢。" },
        { en: "I'm writing an email to my pen pal.", zh: "我在给笔友写邮件。" },
        { en: "We can share.", zh: "我们可以分享。" }
      ]},
      { id: "pep6a-u5", title: "Unit 5 What does he do?", sentences: [
        { en: "What does your father do? He's a doctor.", zh: "你爸爸做什么工作？他是医生。" },
        { en: "What does she do? She's a factory worker.", zh: "她做什么？她是工厂工人。" },
        { en: "Where does he work? He works at sea.", zh: "他在哪工作？在海上。" },
        { en: "How does he go to work? By car.", zh: "他怎么去上班？开车。" },
        { en: "I want to be a businessman.", zh: "我想当商人。" },
        { en: "She is a head teacher.", zh: "她是一位校长。" }
      ]},
      { id: "pep6a-u6", title: "Unit 6 How do you feel?", sentences: [
        { en: "What's wrong? My cat is ill.", zh: "怎么了？我的猫病了。" },
        { en: "How do you feel? I'm sad.", zh: "你感觉怎样？我很伤心。" },
        { en: "Don't be angry.", zh: "别生气。" },
        { en: "You should see a doctor.", zh: "你应该去看医生。" },
        { en: "I'm afraid of the dog.", zh: "我怕那只狗。" },
        { en: "Take a deep breath.", zh: "深呼吸。" }
      ]}
    ]
  },

  /* ===================== 六年级下册（PEP 6B） ===================== */
  {
    key: "pep6b", label: "六年级下册", edition: "人教版 PEP（三起点）",
    units: [
      { id: "pep6b-u1", title: "Unit 1 How tall are you?", sentences: [
        { en: "How tall are you? I'm 1.65 metres.", zh: "你多高？我一点六五米。" },
        { en: "I'm taller than this one.", zh: "我比这只高。" },
        { en: "Who is taller than you?", zh: "谁比你高？" },
        { en: "You're older than me.", zh: "你比我大。" },
        { en: "How heavy are you?", zh: "你多重？" },
        { en: "I'm 48 kilograms.", zh: "我四十八公斤。" }
      ]},
      { id: "pep6b-u2", title: "Unit 2 Last weekend", sentences: [
        { en: "What did you do last weekend? I washed my clothes.", zh: "你上周末做了什么？我洗了衣服。" },
        { en: "Did you see a film? Yes, I did.", zh: "你看电影了吗？是的。" },
        { en: "I stayed at home.", zh: "我待在家里。" },
        { en: "Did he read a book? No, he didn't.", zh: "他读书了吗？不，没读。" },
        { en: "It was a busy weekend.", zh: "是个忙碌的周末。" },
        { en: "I cleaned my room.", zh: "我打扫了房间。" }
      ]},
      { id: "pep6b-u3", title: "Unit 3 Where did you go?", sentences: [
        { en: "Where did you go? I went to Xinjiang.", zh: "你去哪了？我去了新疆。" },
        { en: "How did you go there? By plane.", zh: "你怎么去的？乘飞机。" },
        { en: "What did you do there?", zh: "你在那做了什么？" },
        { en: "I took pictures and ate good food.", zh: "我拍照还吃了美食。" },
        { en: "Did you go with your parents?", zh: "你和父母一起去的吗？" },
        { en: "It looks like a mule!", zh: "它看起来像头骡子！" }
      ]},
      { id: "pep6b-u4", title: "Unit 4 Then and now", sentences: [
        { en: "There was no library in my old school.", zh: "我以前的学校没有图书馆。" },
        { en: "There were no computers.", zh: "那时没有电脑。" },
        { en: "I didn't like winter before.", zh: "我以前不喜欢冬天。" },
        { en: "Now I love to ice-skate.", zh: "现在我热爱滑冰。" },
        { en: "Tell us about your school.", zh: "跟我们说说是你的学校。" },
        { en: "The world is changing.", zh: "世界在变化。" }
      ]}
    ]
  }
];
