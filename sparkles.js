document.addEventListener('DOMContentLoaded', () => {
    const createSparkle = () => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = `${Math.random() * window.innerWidth}px`;
        sparkle.style.animationDuration = `${Math.random() * 3 + 2}s`;
        document.body.appendChild(sparkle);

        sparkle.addEventListener('animationend', () => {
            sparkle.remove();
        });
    };

    setInterval(createSparkle, 200);
});