import { useState, useEffect, useRef, useCallback } from 'react';

export function useScrollManager() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('down');
    const [scrollProgress, setScrollProgress] = useState(0);
    const [scrollVelocity, setScrollVelocity] = useState(0);
    const [activeSection, setActiveSection] = useState('hero');

    const lastScrollYRef = useRef(0);
    const isScrollingRef = useRef(false);
    const directionRef = useRef('down');

    // Throttled Scroll Listener (requestAnimationFrame)
    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY || window.pageYOffset || 0;
            const deltaY = currentY - lastScrollYRef.current;

            let currentDir = directionRef.current;
            if (Math.abs(deltaY) >= 2) {
                currentDir = deltaY > 0 ? 'down' : 'up';
                directionRef.current = currentDir;
                setScrollDirection(currentDir);
                document.documentElement.setAttribute('data-scroll-dir', currentDir);

                const vel = Math.min(Math.abs(deltaY), 50);
                setScrollVelocity(vel);
            }

            lastScrollYRef.current = currentY;

            if (!isScrollingRef.current) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(currentY > 40);

                    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                    const progress = docHeight > 0 ? (currentY / docHeight) * 100 : 0;
                    setScrollProgress(Math.min(Math.max(0, progress), 100));

                    isScrollingRef.current = false;
                });
                isScrollingRef.current = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Native ScrollSpy via IntersectionObserver
    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        if (!sections.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    if (id) setActiveSection(id);
                }
            });
        }, {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        });

        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    // Bidirectional Scroll Reveal Observer
    useEffect(() => {
        document.documentElement.classList.add('js-reveal');

        const reveals = document.querySelectorAll('.reveal-on-scroll, .reveal-stagger');
        if (!reveals.length) return;

        // Set stagger indices on grid children
        document.querySelectorAll('.reveal-stagger').forEach((container) => {
            Array.from(container.children).forEach((child, idx) => {
                child.style.setProperty('--stagger-i', idx);
            });
        });

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const el = entry.target;
                const dir = directionRef.current;

                if (entry.isIntersecting) {
                    el.classList.remove('scroll-enter-down', 'scroll-enter-up');
                    if (dir === 'down') {
                        el.classList.add('scroll-enter-down');
                    } else {
                        el.classList.add('scroll-enter-up');
                    }
                    el.classList.add('is-revealed');
                } else {
                    const bounds = entry.boundingClientRect;
                    // Reset when element scrolls past viewport buffer
                    if (bounds.top > window.innerHeight || bounds.bottom < 0) {
                        el.classList.remove('is-revealed', 'scroll-enter-down', 'scroll-enter-up');
                    }
                }
            });
        }, {
            root: null,
            rootMargin: '60px 0px 60px 0px',
            threshold: [0, 0.08]
        });

        reveals.forEach((el) => revealObserver.observe(el));
        return () => revealObserver.disconnect();
    }, []);

    const scrollToSection = useCallback((sectionId) => {
        const target = document.querySelector(sectionId);
        if (!target) return;

        if (sectionId === '#hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const navWrapper = document.querySelector('.navbar-wrapper');
            let navOffset = 110;
            if (navWrapper) {
                const rect = navWrapper.getBoundingClientRect();
                const computed = window.getComputedStyle(navWrapper);
                const topMargin = parseFloat(computed.top) || 16;
                navOffset = rect.height + topMargin + 18;
            }
            const elementTop = target.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: Math.max(0, Math.round(elementTop - navOffset)),
                behavior: 'smooth'
            });
        }

        if (history.pushState) {
            history.pushState(null, '', sectionId);
        } else {
            window.location.hash = sectionId;
        }
    }, []);

    return {
        isScrolled,
        scrollDirection,
        scrollProgress,
        scrollVelocity,
        activeSection,
        scrollToSection
    };
}
