const p = document.querySelector('.progressBar');
const logo = document.getElementById('logo');
const maxLogoMove = 1000; // px — distance maximale que le logo montera
if (p) {
    const set = () => {
        const s = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const percent = max > 0 ? (s / max) * 100 : 0;
        const height = Math.max(0, Math.min(100, 100 - percent));
        p.style.height = height + '%';

        if (logo) {
            const translateY = Math.min(maxLogoMove, (percent / 100) * maxLogoMove);
            logo.style.transform = `translateY(${translateY}px) scaleX(-100%) translateX(15%)`;
        }
    };
    set();
    window.addEventListener('scroll', set, { passive: true });
    window.addEventListener('resize', set);
}