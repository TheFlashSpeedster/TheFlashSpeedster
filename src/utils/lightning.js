/**
 * Lightning Click / Tap Sparks (Lightweight & Clean)
 */
export function createLightning(x, y) {
    const container = document.getElementById('lightning-container');
    if (!container) return;

    for (let i = 0; i < 3; i++) {
        const spark = document.createElement('div');
        const angle = (Math.PI * 2 / 3) * i + (Math.random() - 0.5);
        const length = Math.random() * 50 + 30;

        spark.style.position = 'fixed';
        spark.style.left = `${x}px`;
        spark.style.top = `${y}px`;
        spark.style.width = '2px';
        spark.style.height = `${length}px`;
        spark.style.background = '#FFDE00';
        spark.style.transformOrigin = 'top center';
        spark.style.transform = `rotate(${angle}rad)`;
        spark.style.boxShadow = '0 0 6px #FFDE00';
        spark.style.pointerEvents = 'none';
        spark.style.zIndex = '9999';

        container.appendChild(spark);

        const anim = spark.animate([
            { opacity: 1, height: `${length}px` },
            { opacity: 0, height: `${length * 1.3}px` }
        ], {
            duration: 220,
            easing: 'ease-out'
        });

        anim.onfinish = () => spark.remove();
    }
}
