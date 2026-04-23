// 神椿魔女匹配测试 - 核心交互逻辑
const state = {
    currentQuestion: 0,
    scores: { kaf: 0, rim: 0, isekai: 0, haru: 0, koko: 0 },
    selectedOption: null
};

const elements = {
    landingPage: document.getElementById('landing'),
    quizPage: document.getElementById('quiz'),
    resultPage: document.getElementById('result'),
    startBtn: document.getElementById('start-btn'),
    retryBtn: document.getElementById('retry-btn'),
    shareBtn: document.getElementById('share-btn'),
    progressFill: document.getElementById('progress-fill'),
    questionCounter: document.getElementById('question-counter'),
    question: document.getElementById('question'),
    options: document.getElementById('options'),
    resultCharacter: document.getElementById('result-character'),
    resultInfo: document.getElementById('result-info'),
    resultType: document.getElementById('result-type'),
    resultDesc: document.getElementById('result-desc'),
    compatibility: document.getElementById('compatibility'),
    particles: document.getElementById('particles'),
    resultParticles: document.getElementById('result-particles')
};

// 粒子背景动画
function initParticles(container) {
    if (!container) return;
    container.innerHTML = '';
    const count = window.innerWidth < 600 ? 30 : 50;
    const colors = ['#e8a0d0', '#a0c8e8', '#8080c0', '#e8a060', '#c0a0e0'];
    
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.classList.add('particle');
        p.style.width = p.style.height = Math.random() * 4 + 2 + 'px';
        p.style.left = Math.random() * 100 + '%';
        p.style.background = colors[Math.floor(Math.random() * 5)];
        p.style.animation = `float ${Math.random() * 20 + 10}s linear ${Math.random() * 5}s infinite`;
        container.appendChild(p);
    }
}

// 切换页面
function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    if (id === 'landing') initParticles(elements.particles);
    if (id === 'result') initParticles(elements.resultParticles);
}

// 加载题目
function loadCurrentQuestion() {
    const q = questions[state.currentQuestion];
    elements.question.textContent = q.question;
    elements.options.innerHTML = '';
    
    const progress = ((state.currentQuestion + 1) / questions.length) * 100;
    elements.progressFill.style.width = progress + '%';
    elements.questionCounter.textContent = `${state.currentQuestion + 1} / ${questions.length}`;
    
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option';
        btn.textContent = opt.text;
        btn.dataset.char = opt.char;
        btn.dataset.score = opt.score;
        
        btn.addEventListener('click', () => {
            document.querySelectorAll('.option').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            state.selectedOption = opt;
            setTimeout(submitAnswer, 300);
        });
        
        elements.options.appendChild(btn);
    });
}

// 提交答案
function submitAnswer() {
    if (!state.selectedOption) return;
    state.scores[state.selectedOption.char] += parseInt(state.selectedOption.score);
    state.currentQuestion++;
    
    if (state.currentQuestion < questions.length) {
        state.selectedOption = null;
        loadCurrentQuestion();
    } else {
        calculateResult();
        showPage('result');
    }
}

// 计算结果
function calculateResult() {
    let max = 0, top = 'kaf';
    Object.entries(state.scores).forEach(([c, s]) => {
        if (s > max) { max = s; top = c; }
    });
    
    const data = characters[top];
    elements.resultCharacter.textContent = `${data.emoji} ${data.name}`;
    elements.resultInfo.textContent = data.nameJp;
    elements.resultType.textContent = data.type;
    elements.resultDesc.textContent = data.desc;
    
    elements.compatibility.innerHTML = '<h3>与其他魔女的匹配度</h3>';
    compatibility[top].forEach(item => {
        const div = document.createElement('div');
        div.className = 'compat-item';
        const color = characters[item.char].color;
        div.innerHTML = `
            <span class="name">${characters[item.char].emoji} ${item.label}</span>
            <div class="compat-bar"><div class="compat-fill" style="width:0%;background:${color}"></div></div>
            <span>${item.percent}%</span>
        `;
        elements.compatibility.appendChild(div);
        setTimeout(() => div.querySelector('.compat-fill').style.width = item.percent + '%', 300);
    });
}

// 重置测试
function resetQuiz() {
    state.currentQuestion = 0;
    state.scores = { kaf: 0, rim: 0, isekai: 0, haru: 0, koko: 0 };
    state.selectedOption = null;
    loadCurrentQuestion();
    showPage('quiz');
}

// 分享
function shareResult() {
    const text = `我的神椿专属魔女：${elements.resultCharacter.textContent}
类型：${elements.resultType.textContent}
快来测试你与谁最匹配！`;
    navigator.clipboard.writeText(text).then(() => alert('结果已复制到剪贴板！')).catch(() => alert('复制失败'));
}

// 绑定事件
function bindEvents() {
    elements.startBtn.onclick = resetQuiz;
    elements.retryBtn.onclick = resetQuiz;
    elements.shareBtn.onclick = shareResult;
    window.addEventListener('resize', () => {
        initParticles(elements.particles);
        initParticles(elements.resultParticles);
    });
}

// 启动
document.addEventListener('DOMContentLoaded', () => {
    bindEvents();
    initParticles(elements.particles);
    showPage('landing');
});