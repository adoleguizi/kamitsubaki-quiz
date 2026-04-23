// Character profiles
const characters = {
    kaf: {
        name: '花谱',
        nameJp: 'KAF',
        color: '#e8a0d0',
        type: 'INFP · 感性魔女',
        icon: '花',
        desc: '你是花谱——神椿最初的魔女。你拥有丰富而细腻的感性，内心世界深邃如海。你的情感表达既温柔又深沉，如同花谱那清澈又多变的歌声。你善于感受身边的美好，也容易陷入深思。',
        emoji: '🌸'
    },
    rim: {
        name: '理芽',
        nameJp: 'RIM',
        color: '#a0c8e8',
        type: 'ENFJ · 理性魔女',
        icon: '理',
        desc: '你是理芽——可靠的姐姐担当。你理智而聪明，善于为他人指引方向。你心思细腻、努力上进，就像理芽用多语言的歌声连接不同的文化。你是身边人最信赖的依靠。',
        emoji: '🌊'
    },
    isekai: {
        name: '异世界情绪',
        nameJp: 'ISEKAIJOUCHO',
        color: '#8080c0',
        type: 'INTP · 暗黑魔女',
        icon: '異',
        desc: '你是异世界情绪——来自另一个世界的神秘歌手。你冷静、空灵、充满智慧，拥有独特的世界观和战略眼光。你不随波逐流，用深邃的思考力和非凡的勇气探索着世界的真相。',
        emoji: '🌑'
    },
    haru: {
        name: '春猿火',
        nameJp: 'HARUSARUHI',
        color: '#e8a060',
        type: 'ESFP · 元气魔女',
        icon: '春',
        desc: '你是春猿火——元气满满的说唱魔女！你活力四射、热情奔放，像春天的火焰一样感染身边的每一个人。你有野心、有冲劲，虽然偶尔冲动，但那份真诚和力量正是你最迷人的地方。',
        emoji: '🔥'
    },
    koko: {
        name: '幸祜',
        nameJp: 'KOKO',
        color: '#c0a0e0',
        type: 'ISFP · 电子魔女',
        icon: '幸',
        desc: '你是幸祜——徜徉于虚拟之海的电子魔女。你有些社恐，但内心温柔而坚定。你拥有空灵美丽的歌声般的灵魂，不善于言辞却能用行动传达深深的情感。你是安静的力量。',
        emoji: '✨'
    }
};

// Quiz questions - each option maps to character scores
const questions = [
    {
        question: '在一场热闹的派对上，你最可能的状态是？',
        options: [
            { text: '尽情释放自己，和所有人聊天互动', char: 'haru', score: 3 },
            { text: '和几个聊得来的朋友深入交流', char: 'kaf', score: 3 },
            { text: '在一旁观察大家，偶尔参与话题', char: 'isekai', score: 3 },
            { text: '找个安静的角落待着，不太想社交', char: 'koko', score: 3 }
        ]
    },
    {
        question: '朋友遇到了困难来找你倾诉，你会怎么做？',
        options: [
            { text: '先认真听TA说完，然后一起分析问题找解决办法', char: 'rim', score: 3 },
            { text: '感同身受地陪TA一起难过，给TA温暖的拥抱', char: 'kaf', score: 3 },
            { text: '用幽默和元气让TA开心起来，带TA去吃好吃的', char: 'haru', score: 3 },
            { text: '默默陪伴，用行动而不是话语表达关心', char: 'koko', score: 3 }
        ]
    },
    {
        question: '你最向往的生活状态是？',
        options: [
            { text: '自由自在地创作，表达自己的内心世界', char: 'kaf', score: 3 },
            { text: '事业有成，成为身边人可以依靠的存在', char: 'rim', score: 3 },
            { text: '不断追求真相，揭开世界的秘密', char: 'isekai', score: 3 },
            { text: '充满冒险和刺激，每天都不一样', char: 'haru', score: 3 }
        ]
    },
    {
        question: '当你看到一幅抽象画时，你的第一反应是？',
        options: [
            { text: '它让我感受到了某种强烈的情绪', char: 'kaf', score: 3 },
            { text: '分析画家的技法和构图逻辑', char: 'isekai', score: 3 },
            { text: '想知道画家想传达什么信息', char: 'rim', score: 3 },
            { text: '嗯...挺好看的（内心毫无波澜）', char: 'koko', score: 3 }
        ]
    },
    {
        question: '做决定的时候，你更倾向于？',
        options: [
            { text: '听从内心的声音，跟着感觉走', char: 'kaf', score: 3 },
            { text: '列出利弊，理性分析后再决定', char: 'rim', score: 3 },
            { text: '先做了再说，边做边调整', char: 'haru', score: 3 },
            { text: '深思熟虑，想清楚所有可能性再行动', char: 'isekai', score: 3 }
        ]
    },
    {
        question: '周末的早晨醒来，你最想做的是？',
        options: [
            { text: '窝在床上听音乐或看动漫', char: 'koko', score: 3 },
            { text: '约朋友出去逛街吃饭', char: 'haru', score: 3 },
            { text: '整理房间，规划这一周的安排', char: 'rim', score: 3 },
            { text: '发呆，让思绪飘到远方', char: 'isekai', score: 3 }
        ]
    },
    {
        question: '你对"规则"的态度是？',
        options: [
            { text: '规则是用来打破的！创新需要突破', char: 'haru', score: 3 },
            { text: '理解规则存在的意义，但在合理范围内灵活变通', char: 'rim', score: 3 },
            { text: '不喜欢被束缚，更想做自己觉得对的事', char: 'kaf', score: 3 },
            { text: '默默遵守，不去挑战也没关系', char: 'koko', score: 3 }
        ]
    },
    {
        question: '如果你拥有一种超能力，你希望是？',
        options: [
            { text: '读心术——能理解每个人的内心', char: 'kaf', score: 3 },
            { text: '预知未来——看到世界的发展方向', char: 'isekai', score: 3 },
            { text: '治愈之力——帮助身边的人摆脱痛苦', char: 'rim', score: 3 },
            { text: '瞬间移动——随时随地去任何地方冒险', char: 'haru', score: 3 }
        ]
    },
    {
        question: '在团队合作中，你通常扮演什么角色？',
        options: [
            { text: '领导者——统筹规划，分配任务', char: 'rim', score: 3 },
            { text: '创意担当——提供想法和灵感', char: 'kaf', score: 3 },
            { text: '气氛组——活跃气氛，团结大家', char: 'haru', score: 3 },
            { text: '默默做事的类型——不声张但很靠谱', char: 'koko', score: 3 }
        ]
    },
    {
        question: '听到一首很好听的歌，你的反应是？',
        options: [
            { text: '单曲循环一整天，沉浸在情绪里', char: 'kaf', score: 3 },
            { text: '研究歌词的含义和编曲的技巧', char: 'isekai', score: 3 },
            { text: '立刻分享给所有朋友！', char: 'haru', score: 3 },
            { text: '默默收藏到歌单，偶尔翻出来听', char: 'koko', score: 3 }
        ]
    },
    {
        question: '你对"孤独"的看法是？',
        options: [
            { text: '孤独是可怕的，我更喜欢有人陪伴', char: 'haru', score: 3 },
            { text: '孤独是一种享受，能让我更好地思考', char: 'isekai', score: 3 },
            { text: '孤独中带着美感，是一种安静的力量', char: 'koko', score: 3 },
            { text: '孤独时我会创作，把情感化为文字或音乐', char: 'kaf', score: 3 }
        ]
    },
    {
        question: '如果要用一种颜色形容自己，你会选？',
        options: [
            { text: '粉色——温柔而感性', char: 'kaf', score: 3 },
            { text: '蓝色——冷静而理性', char: 'rim', score: 3 },
            { text: '紫色——神秘而深邃', char: 'isekai', score: 3 },
            { text: '橙色——热情而活力', char: 'haru', score: 3 }
        ]
    }
];

// Compatibility data (how well each character gets along with others)
const compatibility = {
    kaf: [
        { char: 'rim', label: '理芽', percent: 95 },
        { char: 'koko', label: '幸祜', percent: 80 },
        { char: 'isekai', label: '异世界情绪', percent: 75 },
        { char: 'haru', label: '春猿火', percent: 65 }
    ],
    rim: [
        { char: 'kaf', label: '花谱', percent: 95 },
        { char: 'koko', label: '幸祜', percent: 85 },
        { char: 'haru', label: '春猿火', percent: 70 },
        { char: 'isekai', label: '异世界情绪', percent: 65 }
    ],
    isekai: [
        { char: 'koko', label: '幸祜', percent: 90 },
        { char: 'haru', label: '春猿火', percent: 80 },
        { char: 'kaf', label: '花谱', percent: 75 },
        { char: 'rim', label: '理芽', percent: 65 }
    ],
    haru: [
        { char: 'koko', label: '幸祜', percent: 90 },
        { char: 'isekai', label: '异世界情绪', percent: 80 },
        { char: 'rim', label: '理芽', percent: 70 },
        { char: 'kaf', label: '花谱', percent: 65 }
    ],
    koko: [
        { char: 'haru', label: '春猿火', percent: 90 },
        { char: 'rim', label: '理芽', percent: 85 },
        { char: 'kaf', label: '花谱', percent: 80 },
        { char: 'isekai', label: '异世界情绪', percent: 90 }
    ]
};
