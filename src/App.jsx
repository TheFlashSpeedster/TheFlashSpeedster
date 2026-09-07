import React, { useState, useCallback } from 'react';
import { useTheme } from './hooks/useTheme';
import { useScrollManager } from './hooks/useScrollManager';

import SpeedCanvas from './components/SpeedCanvas/SpeedCanvas';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import CodingProfiles from './components/CodingProfiles/CodingProfiles';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import FloatingSpeedometer from './components/FloatingSpeedometer/FloatingSpeedometer';
import ToastContainer from './components/Toast/ToastContainer';

export default function App() {
    const { theme, toggleTheme } = useTheme();
    const {
        isScrolled,
        scrollDirection,
        scrollProgress,
        scrollVelocity,
        activeSection,
        scrollToSection
    } = useScrollManager();

    const [toasts, setToasts] = useState([]);

    const showToast = useCallback((message, icon = 'fa-bolt') => {
        const id = Date.now() + Math.random();
        setToasts((prev) => [...prev, { id, message, icon }]);
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 3500);
    }, []);

    return (
        <div className="speedster-app">
            {/* Speed Force Background Canvas */}
            <SpeedCanvas
                theme={theme}
                scrollVelocity={scrollVelocity}
                scrollDirection={scrollDirection}
            />

            {/* Speed Force Ambient Grid */}
            <div className="speed-grid-overlay" aria-hidden="true" />
            <div className="lightning-container" id="lightning-container" aria-hidden="true" />

            {/* Navigation Bar (Command HUD) */}
            <Navbar
                theme={theme}
                toggleTheme={toggleTheme}
                isScrolled={isScrolled}
                activeSection={activeSection}
                scrollToSection={scrollToSection}
            />

            {/* Main Content Sections */}
            <main>
                <Hero scrollToSection={scrollToSection} />
                <About />
                <Skills />
                <CodingProfiles />
                <Projects />
                <Certifications />
                <Education />
                <Contact showToast={showToast} />
            </main>

            {/* Footer */}
            <Footer scrollToSection={scrollToSection} />

            {/* Floating Speedometer (Scroll-to-top) */}
            <FloatingSpeedometer
                scrollProgress={scrollProgress}
                scrollVelocity={scrollVelocity}
                scrollDirection={scrollDirection}
                scrollToSection={scrollToSection}
            />

            {/* Toast Notifications */}
            <ToastContainer toasts={toasts} />
        </div>
    );
}
