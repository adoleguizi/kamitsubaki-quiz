// 角色图片预览功能
// 角色名与图片文件名的映射
const characterImages = {
    kaf: '花谱.png',
    rim: '理芽.png',
    isekai: '异世界情绪.png',
    haru: '春猿火.png',
    koko: '幸枯.png'
};

// 鼠标悬停显示图片（覆盖原型图标并放大）
function setupCharacterHover() {
    const previewDiv = document.querySelector('.character-preview');
    if (!previewDiv) return;

    previewDiv.querySelectorAll('.char-card').forEach(card => {
        const iconDiv = card.querySelector('.char-icon');
        if (!iconDiv) return;
        let charKey = null;
        if (iconDiv.classList.contains('kaf-icon')) charKey = 'kaf';
        if (iconDiv.classList.contains('rim-icon')) charKey = 'rim';
        if (iconDiv.classList.contains('isekai-icon')) charKey = 'isekai';
        if (iconDiv.classList.contains('haru-icon')) charKey = 'haru';
        if (iconDiv.classList.contains('koko-icon')) charKey = 'koko';
        if (!charKey) return;

        // 创建图片元素并插入到iconDiv
        let img = document.createElement('img');
        img.className = 'char-hover-img';
        img.style.display = 'none';
        img.style.position = 'absolute';
        img.style.left = '50%';
        img.style.top = '50%';
        img.style.transform = 'translate(-50%, -50%)';
        img.style.zIndex = 20;
        img.style.width = '160px';
        img.style.height = '160px';
        img.style.borderRadius = '32px';
        img.style.boxShadow = '0 4px 24px rgba(0,0,0,0.25)';
        img.style.background = '#fff';
        img.style.objectFit = 'cover';
        img.style.pointerEvents = 'none';
        iconDiv.style.position = 'relative';
        iconDiv.appendChild(img);

        iconDiv.addEventListener('mouseenter', () => {
            img.src = `character/${characterImages[charKey]}`;
            img.style.display = 'block';
            // 只隐藏icon里的文字，不影响图片
            Array.from(iconDiv.childNodes).forEach(node => {
                if (node !== img) {
                    if (node.nodeType === 1) node.style.visibility = 'hidden';
                    if (node.nodeType === 3) node.textContent = '';
                }
            });
        });
        iconDiv.addEventListener('mouseleave', () => {
            img.style.display = 'none';
            Array.from(iconDiv.childNodes).forEach(node => {
                if (node !== img) {
                    if (node.nodeType === 1) node.style.visibility = '';
                }
            });
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupCharacterHover);
} else {
    setupCharacterHover();
}
