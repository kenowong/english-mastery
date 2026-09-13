/*
 * english-mastery · 跟读练习句库
 * 按方法 id 映射适龄、地道的英文跟读句（en + 中文释义 zh）。
 * 由 app.js 的「🎤 跟读练习」区驱动，使用浏览器 Web Speech API 朗读+识别打分。
 * 与 window.METHODS 解耦：方法数据不动，这里只补充跟读素材。
 */
window.READ_SENTENCES = {

  /* ===================== 小学 primary ===================== */
  "p-phonics": [
    { en: "The cat sat on the mat.", zh: "猫坐在垫子上。" },
    { en: "A big red dog runs fast.", zh: "一只大红狗跑得很快。" },
    { en: "I see a sun and a pen.", zh: "我看见太阳和一支钢笔。" }
  ],
  "p-topic-words": [
    { en: "I like apples, bananas and oranges.", zh: "我喜欢苹果、香蕉和橙子。" },
    { en: "We have red, blue and green books.", zh: "我们有红色、蓝色和绿色的书。" },
    { en: "The dog is under the table.", zh: "狗在桌子下面。" }
  ],
  "p-listen": [
    { en: "Twinkle, twinkle, little star.", zh: "一闪一闪小星星。" },
    { en: "The wheels on the bus go round and round.", zh: "公共汽车轮子转啊转。" },
    { en: "Old MacDonald had a farm.", zh: "老麦克唐纳有个农场。" }
  ],
  "p-reading": [
    { en: "I can read a small book.", zh: "我能读一本小书。" },
    { en: "The frog is in the pond.", zh: "青蛙在池塘里。" },
    { en: "We go to school every day.", zh: "我们每天去上学。" }
  ],
  "p-speaking": [
    { en: "Please touch your nose.", zh: "请摸摸你的鼻子。" },
    { en: "Can I have some water, please?", zh: "请给我一点水好吗？" },
    { en: "Let us clap our hands together.", zh: "我们一起拍手吧。" }
  ],
  "p-writing": [
    { en: "I write the letter A on the line.", zh: "我在线上写字母 A。" },
    { en: "My name is on the paper.", zh: "我的名字写在了纸上。" },
    { en: "Please write neatly and slowly.", zh: "请写得整齐又慢一些。" }
  ],
  "p-sightwords": [
    { en: "I can see the big red ball.", zh: "我能看见那个大红球。" },
    { en: "We go to the park with you.", zh: "我们和你一起去公园。" },
    { en: "He said he would come for me.", zh: "他说他会来接我。" }
  ],
  "p-sentence": [
    { en: "I like apples because they are sweet.", zh: "我喜欢苹果因为它们甜。" },
    { en: "She goes to school by bus.", zh: "她坐公共汽车去上学。" },
    { en: "They are playing in the garden.", zh: "他们正在花园里玩。" }
  ],
  "p-cartoon": [
    { en: "Peppa likes jumping in muddy puddles.", zh: "佩奇喜欢在泥坑里跳。" },
    { en: "Bluey plays with her little sister.", zh: "布鲁伊和她的妹妹玩耍。" },
    { en: "The monkey is very funny and clever.", zh: "这只猴子又滑稽又聪明。" }
  ],
  "p-wordgame": [
    { en: "Find the word that means apple.", zh: "找出意思是“苹果”的那个词。" },
    { en: "Spell the word: c-a-t, cat.", zh: "拼出这个词：c-a-t，猫。" },
    { en: "Match the picture with the word.", zh: "把图片和单词连起来。" }
  ],
  "p-mistake": [
    { en: "I made a mistake, but I can fix it.", zh: "我犯了个错，但我能改正。" },
    { en: "Let us write the wrong word five times.", zh: "我们把写错的词写五遍。" },
    { en: "Check your homework before you rest.", zh: "休息前检查一下你的作业。" }
  ],
  "p-routine": [
    { en: "I read English aloud every morning.", zh: "我每天早晨大声朗读英语。" },
    { en: "Ten minutes a day keeps English strong.", zh: "每天十分钟，英语更扎实。" },
    { en: "Practice makes my English better.", zh: "练习让我的英语更好。" }
  ],

  /* ===================== 初中 junior ===================== */
  "j-cornell": [
    { en: "We should review new words every evening.", zh: "我们该每晚复习生词。" },
    { en: "A good note helps me remember faster.", zh: "好笔记帮我记得更快。" },
    { en: "I write the key point on the right side.", zh: "我把要点写在右边。" }
  ],
  "j-tense-axis": [
    { en: "I am reading a book now.", zh: "我现在正在读一本书。" },
    { en: "She finished her homework yesterday.", zh: "她昨天完成了作业。" },
    { en: "We will visit the museum next week.", zh: "我们下周将去参观博物馆。" }
  ],
  "j-cloze": [
    { en: "He was so tired that he fell asleep.", zh: "他太累了，就睡着了。" },
    { en: "Although it rained, we went out.", zh: "尽管下雨，我们还是出门了。" },
    { en: "The boy who won the prize is my friend.", zh: "那个获奖的男孩是我的朋友。" }
  ],
  "j-reading": [
    { en: "Read the question before the passage.", zh: "读文章前先读问题。" },
    { en: "The answer is in the second paragraph.", zh: "答案在第二段里。" },
    { en: "Skim the text to find the main idea.", zh: "略读文章找出主旨。" }
  ],
  "j-listen3": [
    { en: "The speaker gave three reasons for his idea.", zh: "说话人给了三个支持他的理由。" },
    { en: "Listen carefully and write down the number.", zh: "仔细听并写下那个数字。" },
    { en: "What does the girl want to do next?", zh: "女孩接下来想做什么？" }
  ],
  "j-grammar-example": [
    { en: "If it rains, we will stay at home.", zh: "如果下雨，我们就待在家里。" },
    { en: "The book which you lent me is great.", zh: "你借我的那本书很棒。" },
    { en: "He has lived here for five years.", zh: "他在这里已经住了五年。" }
  ],
  "j-writing3": [
    { en: "First, we should protect the environment.", zh: "首先，我们应该保护环境。" },
    { en: "In my opinion, reading is very helpful.", zh: "在我看来，阅读非常有帮助。" },
    { en: "All in all, we must take action now.", zh: "总之，我们现在必须行动起来。" }
  ],
  "j-affix": [
    { en: "Happy becomes unhappy with the prefix un.", zh: "happy 加上前缀 un 变成 unhappy。" },
    { en: "Teach plus er makes teacher.", zh: "teach 加上 er 变成 teacher。" },
    { en: "Careful means full of care.", zh: "careful 意思是充满关心。" }
  ],
  "j-mistake": [
    { en: "I collected my mistakes in a red book.", zh: "我把错题收进一个红本子里。" },
    { en: "Why did I get this question wrong?", zh: "我为什么这道题做错了？" },
    { en: "Same mistake, never twice.", zh: "同样的错误，绝不再犯。" }
  ],
  "j-preread": [
    { en: "Guess the answer before you listen.", zh: "听之前先猜一猜答案。" },
    { en: "The question is about a place.", zh: "这道题问的是一个地点。" },
    { en: "Look at the options and predict the talk.", zh: "看选项，预测一下对话内容。" }
  ],
  "j-recite": [
    { en: "Reciting texts builds a good sense of English.", zh: "背诵课文能培养好的语感。" },
    { en: "I read it aloud three times to remember.", zh: "我大声读了三遍来记住它。" },
    { en: "Good sentences are worth reciting.", zh: "好的句子值得背诵。" }
  ],
  "j-synonym": [
    { en: "Big and large mean almost the same.", zh: "big 和 large 意思几乎一样。" },
    { en: "We can replace happy with glad.", zh: "我们可以用 glad 替换 happy。" },
    { en: "Find a synonym for the word quick.", zh: "找出 quick 这个词的一个同义词。" }
  ],

  /* ===================== 高中 senior ===================== */
  "s-3500": [
    { en: "The experiment confirmed our hypothesis.", zh: "实验证实了我们的假设。" },
    { en: "He analyzed the data with great care.", zh: "他极其仔细地分析了数据。" },
    { en: "A responsible person keeps his promises.", zh: "一个负责任的人信守诺言。" }
  ],
  "s-seven": [
    { en: "However, the result was quite different.", zh: "然而，结果大不相同。" },
    { en: "For example, recycling helps the earth.", zh: "例如，回收有益于地球。" },
    { en: "In addition, we should save energy.", zh: "此外，我们应该节约能源。" }
  ],
  "s-continue": [
    { en: "Tears rolled down her pale face.", zh: "泪水滑下她苍白的脸颊。" },
    { en: "The wind whispered through the trees.", zh: "风穿过树林低语。" },
    { en: "He breathed a sigh of relief at last.", zh: "他终于松了一口气。" }
  ],
  "s-grammar-fill": [
    { en: "It is widely believed that practice matters.", zh: "人们普遍认为练习很重要。" },
    { en: "The bridge built last year is safe.", zh: "去年建的那座桥很安全。" },
    { en: "Given more time, we could do better.", zh: "如果给更多时间，我们能做得更好。" }
  ],
  "s-listen-focus": [
    { en: "The woman is worried about the meeting.", zh: "那位女士在担心会议。" },
    { en: "What is the man's suggestion?", zh: "那位男士的建议是什么？" },
    { en: "The number you heard was seven forty.", zh: "你听到的数字是七点四十。" }
  ],
  "s-application": [
    { en: "I am writing to apply for the job.", zh: "我写信申请这份工作。" },
    { en: "I would appreciate your early reply.", zh: "如能早日回复，我将不胜感激。" },
    { en: "Thank you for your time and consideration.", zh: "感谢您抽出时间并予考虑。" }
  ],
  "s-past-paper": [
    { en: "Past papers show the real exam style.", zh: "真题展现了真实的考试风格。" },
    { en: "We should learn from every mistake.", zh: "我们应该从每个错误中学习。" },
    { en: "Time management is the key to success.", zh: "时间管理是成功的关键。" }
  ],
  "s-long-sentence": [
    { en: "The book that the teacher recommended was sold out.", zh: "老师推荐的那本书卖光了。" },
    { en: "What we need is more practice, not advice.", zh: "我们需要的是更多练习，而不是建议。" },
    { en: "It is a fact that hard work pays off.", zh: "努力会有回报，这是事实。" }
  ],
  "s-handwriting": [
    { en: "Clear handwriting wins more points.", zh: "工整的书写能多得分数。" },
    { en: "Write each letter the same height.", zh: "每个字母写得一样高。" },
    { en: "Practice one sentence ten times a day.", zh: "每天把一句话练十遍。" }
  ],
  "s-synonym-senior": [
    { en: "The word obtain equals get here.", zh: "在这里 obtain 等于 get。" },
    { en: "They replaced the old with the new.", zh: "他们以新换旧。" },
    { en: "In short, the plan was accepted.", zh: "简言之，这个计划被采纳了。" }
  ],
  "s-cloze-senior": [
    { en: "He smiled, which made us relaxed.", zh: "他笑了，这让我们放松下来。" },
    { en: "Even though tired, she kept working.", zh: "尽管很累，她仍继续工作。" },
    { en: "The story tells of a boy's growth.", zh: "这个故事讲述一个男孩的成长。" }
  ],
  "s-timed": [
    { en: "Finish the reading in eight minutes.", zh: "八分钟内完成这篇阅读。" },
    { en: "Keep calm when the clock is running.", zh: "计时的时候保持冷静。" },
    { en: "Speed comes from daily training.", zh: "速度来自日常的训练。" }
  ]
};
