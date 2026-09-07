import React from 'react';
import './FloatingSpeedometer.css';

export default function FloatingSpeedometer({
    scrollProgress,
    scrollVelocity = 0,
    scrollDirection = 'down',
    scrollToSection
}) {
    const isVisible = scrollProgress > 4;
    const circumference = 263.89;
    const offset = Math.max(0, circumference - (scrollProgress / 100) * circumference);

    const isFast = scrollVelocity > 6;
    const tiltAngle = isFast ? (scrollDirection === 'down' ? 14 : -14) : 0;
    const iconStyle = isFast ? {
        transform: `scale(1.18) rotate(${tiltAngle}deg)`,
        filter: 'drop-shadow(0 0 10px #FFDE00) drop-shadow(0 0 18px #FF1E27)'
    } : {
        transform: 'scale(1) rotate(0deg)',
        filter: 'none'
    };

    return (
        <button
            id="floating-speedometer"
            className={`floating-speedometer ${isVisible ? 'visible' : ''}`}
            type="button"
            aria-label="Scroll to top"
            onClick={() => scrollToSection('#hero')}
        >
            <svg className="speedometer-svg" viewBox="0 0 100 100">
                <circle className="speedometer-track" cx="50" cy="50" r="42" />
                <circle
                    className="speedometer-progress"
                    id="scroll-progress-circle"
                    cx="50"
                    cy="50"
                    r="42"
                    style={{ strokeDashoffset: offset }}
                />
            </svg>
            <span className="speedometer-icon" style={iconStyle}>
                ⚡
            </span>
        </button>
    );
}
