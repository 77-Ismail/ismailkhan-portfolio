document.addEventListener('DOMContentLoaded', () => {
    const bg = document.getElementById('background');

    // Create and append multiple layers of animated backgrounds
    for (let i = 0; i < 20; i++) {
        let star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${2 + Math.random() * 3}s`;
        bg.appendChild(star);
    }
});
