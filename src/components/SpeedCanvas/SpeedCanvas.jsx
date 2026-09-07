import React, { useEffect, useRef } from 'react';
import './SpeedCanvas.css';

export default function SpeedCanvas({ theme, scrollVelocity = 0, scrollDirection = 'down' }) {
    const canvasRef = useRef(null);
    const engineRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        let particles = [];
        let width = window.innerWidth;
        let height = window.innerHeight;
        let isVisible = true;
        let animFrameId = null;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const createParticles = (currentTheme) => {
            const count = Math.min(Math.floor(width / 35), 35);
            particles = [];
            const isLight = currentTheme === 'light';

            for (let i = 0; i < count; i++) {
                const baseVy = (Math.random() - 0.5) * 0.5;
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    radius: Math.random() * 1.5 + 1,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: baseVy,
                    baseVy: baseVy,
                    color: isLight
                        ? (Math.random() > 0.4 ? 'rgba(217, 119, 6, ' : 'rgba(211, 24, 33, ')
                        : (Math.random() > 0.4 ? 'rgba(255, 222, 0, ' : 'rgba(255, 30, 39, '),
                    alpha: isLight ? (Math.random() * 0.35 + 0.35) : (Math.random() * 0.4 + 0.2),
                    sparkleSpeed: Math.random() * 0.02 + 0.01,
                    sparkleAngle: Math.random() * Math.PI * 2
                });
            }
        };

        resize();
        createParticles(theme);

        const animate = () => {
            if (!isVisible) return;

            ctx.clearRect(0, 0, width, height);

            const isLight = theme === 'light';
            const lineBaseColor = isLight ? 'rgba(211, 24, 33, ' : 'rgba(255, 222, 0, ';

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                p.x += p.vx;
                p.y += p.vy;

                // Damping
                p.vy += (p.baseVy - p.vy) * 0.05;

                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                p.sparkleAngle += p.sparkleSpeed;
                const currentAlpha = Math.abs(Math.sin(p.sparkleAngle)) * p.alpha;

                ctx.fillStyle = `${p.color}${currentAlpha})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const distSq = dx * dx + dy * dy;

                    if (distSq < 4900) {
                        const dist = Math.sqrt(distSq);
                        ctx.strokeStyle = `${lineBaseColor}${(1 - dist / 70) * (isLight ? 0.07 : 0.08)})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            animFrameId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            resize();
            createParticles(theme);
        };

        const handleVisibilityChange = () => {
            isVisible = !document.hidden;
            if (isVisible) {
                cancelAnimationFrame(animFrameId);
                animFrameId = requestAnimationFrame(animate);
            }
        };

        window.addEventListener('resize', handleResize, { passive: true });
        document.addEventListener('visibilitychange', handleVisibilityChange);

        engineRef.current = {
            onScrollVelocity: (velocity, direction) => {
                const impulse = Math.min(velocity * 0.035, 2.2) * (direction === 'down' ? -1 : 1);
                for (let i = 0; i < particles.length; i++) {
                    particles[i].vy = particles[i].baseVy + impulse;
                }
            },
            createParticles
        };

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            cancelAnimationFrame(animFrameId);
        };
    }, []);

    // Theme reaction
    useEffect(() => {
        if (engineRef.current) {
            engineRef.current.createParticles(theme);
        }
    }, [theme]);

    // Velocity impulse reaction
    useEffect(() => {
        if (engineRef.current && scrollVelocity > 0) {
            engineRef.current.onScrollVelocity(scrollVelocity, scrollDirection);
        }
    }, [scrollVelocity, scrollDirection]);

    return <canvas id="speed-canvas" ref={canvasRef} aria-hidden="true" />;
}
