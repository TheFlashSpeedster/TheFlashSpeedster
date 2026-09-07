/**
 * ==========================================================================
 * THE FLASH SPEEDSTER — CLIENT SCRIPT & HIGH PERFORMANCE ENGINE
 * Developer: Atul Kumar | Speedster Portfolio
 * Features: High-Performance Canvas Particles, IntersectionObserver ScrollSpy,
 *           Optimized Lightning Sparks, Zero-Lag Scrolling
 * ==========================================================================
 */

'use strict';

/* --------------------------------------------------------------------------
   1. Genuine Projects Data
   -------------------------------------------------------------------------- */
const projects = [
    {
        title: "Anti-Theft Locker System",
        description: "An interactive digital locker security interface with PIN/passcode verification, real-time status tracking, unauthorized access alerts, and security incident event logging.",
        tech: ["HTML5", "CSS3", "JavaScript", "Web APIs", "Vercel"],
        live: "https://anti-theft-locker-system.vercel.app/",
        source: "https://github.com/TheFlashSpeedster/Anti-Theft-Locker-System",
        date: "Feb 2026"
    },
    {
        title: "Resume Parser",
        description: "An NLP-driven resume parsing tool that automatically extracts contact details, technical skills, work history, and education from uploaded documents into structured JSON.",
        tech: ["Python", "JavaScript", "NLP", "Regex", "HTML", "CSS", "Vercel"],
        live: "https://resume-parser-flash.vercel.app/",
        source: "https://github.com/TheFlashSpeedster/Resume-Parser",
        date: "Jan 2026"
    },
    {
        title: "CGPA Calculator",
        description: "A responsive web utility for LPU students to compute semester GPA and cumulative CGPA with dynamic subject/credit inputs, LocalStorage persistence, and zero-latency calculations.",
        tech: ["HTML5", "CSS3", "JavaScript", "Vercel"],
        live: "https://cgpa-calculator-flash.vercel.app/",
        source: "https://github.com/TheFlashSpeedster/CGPA-Calculator",
        date: "Dec 2025"
    },
    {
        title: "PDF Maker",
        description: "A lightning-fast tool to convert images to PDF with a clean, intuitive interface. Built for efficiency and speed.",
        tech: ["HTML5", "CSS3", "JavaScript", "Vercel"],
        live: "https://pdf-maker-flash.vercel.app/",
        source: "https://github.com/TheFlashSpeedster/PDF-Maker",
        date: null
    },
    {
        title: "Air Purifier Simulation",
        description: "An interactive simulation demonstrating the working mechanism of an Air Purifier with animated UI elements.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        live: "https://air-purifier-kappa.vercel.app/",
        source: "https://github.com/TheFlashSpeedster/Air-Purifier",
        date: null
    },
    {
        title: "Todo List",
        description: "A clean, minimal task management app to keep track of projects and daily tasks with local storage persistence.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        live: "https://todo-list-mu-neon-58.vercel.app/",
        source: "https://github.com/TheFlashSpeedster/ToDo-List",
        date: null
    }
];

/* --------------------------------------------------------------------------
   2. DOM References & State
   -------------------------------------------------------------------------- */
const dom = {
    navbar: document.getElementById('navbar'),
    navMenu: document.getElementById('nav-menu'),
    menuToggle: document.getElementById('menu-toggle'),
    navLinks: document.querySelectorAll('.nav-link'),
    projectsGrid: document.getElementById('projects-grid'),
    speedometer: document.getElementById('floating-speedometer'),
    progressCircle: document.getElementById('scroll-progress-circle'),
    speedCanvas: document.getElementById('speed-canvas'),
    themeToggle: document.getElementById('theme-toggle'),
    themeToggleMobile: document.getElementById('theme-toggle-mobile')
};

/* --------------------------------------------------------------------------
   3. High Performance Speed Force Canvas Engine (60fps Optimized)
   -------------------------------------------------------------------------- */
class SpeedCanvasEngine {
    constructor(canvas) {
        this.canvas = canvas;
        if (!this.canvas) return;
        this.ctx = canvas.getContext('2d', { alpha: true });
        this.particles = [];
        this.width = 0;
        this.height = 0;
        this.mouseX = null;
        this.mouseY = null;
        this.isVisible = true;
        this.theme = document.documentElement.getAttribute('data-theme') || 'dark';
        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize(), { passive: true });

        window.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        }, { passive: true });

        window.addEventListener('mouseleave', () => {
            this.mouseX = null;
            this.mouseY = null;
        });

        // Pause animation when tab is not visible to conserve battery & GPU
        document.addEventListener('visibilitychange', () => {
            this.isVisible = !document.hidden;
            if (this.isVisible) this.animate();
        });

        this.createParticles();
        this.animate();
    }

    setTheme(newTheme) {
        this.theme = newTheme;
        this.createParticles();
    }

    resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }

    createParticles() {
        // Optimized particle count for silky smooth 60/120fps performance
        const count = Math.min(Math.floor(this.width / 35), 35);
        this.particles = [];
        const isLight = this.theme === 'light';

        for (let i = 0; i < count; i++) {
            const baseVy = (Math.random() - 0.5) * 0.5;
            this.particles.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
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
    }

    onScrollVelocity(deltaY, direction) {
        // Speed Force particle stream effect based on scroll direction
        const impulse = Math.min(Math.abs(deltaY) * 0.035, 2.2) * (direction === 'down' ? -1 : 1);
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].vy = this.particles[i].baseVy + impulse;
        }
    }

    animate() {
        if (!this.isVisible) return;

        this.ctx.clearRect(0, 0, this.width, this.height);

        const isLight = this.theme === 'light';
        const lineBaseColor = isLight ? 'rgba(211, 24, 33, ' : 'rgba(255, 222, 0, ';

        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];

            p.x += p.vx;
            p.y += p.vy;

            // Damping: smoothly recover to base vertical drifting speed
            p.vy += (p.baseVy - p.vy) * 0.05;

            if (p.x < 0) p.x = this.width;
            if (p.x > this.width) p.x = 0;
            if (p.y < 0) p.y = this.height;
            if (p.y > this.height) p.y = 0;

            p.sparkleAngle += p.sparkleSpeed;
            const currentAlpha = Math.abs(Math.sin(p.sparkleAngle)) * p.alpha;

            // Direct circle drawing without heavy software shadowBlur
            this.ctx.fillStyle = `${p.color}${currentAlpha})`;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fill();

            // Lightweight connection lines
            for (let j = i + 1; j < this.particles.length; j++) {
                const p2 = this.particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const distSq = dx * dx + dy * dy;

                if (distSq < 4900) { // 70px squared
                    const dist = Math.sqrt(distSq);
                    this.ctx.strokeStyle = `${lineBaseColor}${(1 - dist / 70) * (isLight ? 0.07 : 0.08)})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.beginPath();
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.stroke();
                }
            }
        }

        requestAnimationFrame(() => this.animate());
    }
}

/* --------------------------------------------------------------------------
   4. Render Projects
   -------------------------------------------------------------------------- */
function renderProjects() {
    if (!dom.projectsGrid) return;

    dom.projectsGrid.innerHTML = projects.map((project, index) => `
        <div class="project-card" style="--stagger-i: ${index}">
            <div class="project-content">
                <div class="project-header">
                    <h3 class="project-title">${project.title}</h3>
                    ${project.date ? `<span class="project-date">${project.date}</span>` : ''}
                </div>
                <p class="project-desc">${project.description}</p>
                ${project.tech ? `
                    <div class="project-tech">
                        ${project.tech.map(t => `<span class="tech-chip">${t}</span>`).join('')}
                    </div>
                ` : ''}
                <div class="project-actions">
                    <a href="${project.live || '#'}" target="_blank" rel="noopener noreferrer" class="project-btn ${project.live ? '' : 'is-disabled'}" ${project.live ? '' : 'aria-disabled="true"'}>
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        <span>Live Demo</span>
                    </a>
                    <a href="${project.source || '#'}" target="_blank" rel="noopener noreferrer" class="project-btn secondary ${project.source ? '' : 'is-disabled'}" ${project.source ? '' : 'aria-disabled="true"'}>
                        <i class="fa-brands fa-github"></i>
                        <span>Source</span>
                    </a>
                </div>
            </div>
        </div>
    `).join('');

    if (typeof window.observeNewRevealElements === 'function') {
        window.observeNewRevealElements();
    }
}

/* --------------------------------------------------------------------------
   5. Lightning Click Sparks (Lightweight & Clean)
   -------------------------------------------------------------------------- */
function createLightning(x, y) {
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

/* --------------------------------------------------------------------------
   6. Native ScrollSpy via IntersectionObserver (Zero Layout Thrashing)
   -------------------------------------------------------------------------- */
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                dom.navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
    });

    sections.forEach(section => observer.observe(section));
}

/* --------------------------------------------------------------------------
   7. Throttled Scroll Listener & Velocity Tracker (requestAnimationFrame)
   -------------------------------------------------------------------------- */
let isScrolling = false;
let lastScrollY = window.scrollY || 0;
let currentScrollDirection = 'down';
let scrollVelocity = 0;
let canvasEngineInstance = null;

function onScroll() {
    const currentY = window.scrollY || 0;
    const deltaY = currentY - lastScrollY;

    if (Math.abs(deltaY) >= 2) {
        currentScrollDirection = deltaY > 0 ? 'down' : 'up';
        scrollVelocity = Math.min(Math.abs(deltaY), 50);
        document.documentElement.setAttribute('data-scroll-dir', currentScrollDirection);

        if (canvasEngineInstance && typeof canvasEngineInstance.onScrollVelocity === 'function') {
            canvasEngineInstance.onScrollVelocity(deltaY, currentScrollDirection);
        }
    }

    lastScrollY = currentY;

    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            updateScrollUI(currentY, currentScrollDirection, scrollVelocity);
            isScrolling = false;
        });
        isScrolling = true;
    }
}

function updateScrollUI(scrollY, direction = 'down', velocity = 0) {
    // 1. Navbar Glass State
    if (dom.navbar) {
        if (scrollY > 40) {
            dom.navbar.classList.add('scrolled');
        } else {
            dom.navbar.classList.remove('scrolled');
        }
    }

    // 2. Floating Speedometer Progress & Flash Directional Dynamics
    if (dom.speedometer && dom.progressCircle) {
        if (scrollY > 300) {
            dom.speedometer.classList.add('visible');
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? (scrollY / docHeight) : 0;
            const circumference = 263.89;
            const offset = circumference - (scrollPercent * circumference);
            dom.progressCircle.style.strokeDashoffset = Math.max(0, offset);

            const icon = dom.speedometer.querySelector('.speedometer-icon');
            if (icon) {
                if (velocity > 6) {
                    const tilt = direction === 'down' ? 14 : -14;
                    icon.style.transform = `scale(1.18) rotate(${tilt}deg)`;
                    icon.style.filter = 'drop-shadow(0 0 10px #FFDE00) drop-shadow(0 0 18px #FF1E27)';
                } else {
                    icon.style.transform = 'scale(1) rotate(0deg)';
                    icon.style.filter = '';
                }
            }
        } else {
            dom.speedometer.classList.remove('visible');
        }
    }
}

/* --------------------------------------------------------------------------
   8. Navigation & Mobile Drawer
   -------------------------------------------------------------------------- */
function initNavigation() {
    const closeMenu = () => {
        if (dom.navMenu && dom.menuToggle) {
            dom.navMenu.classList.remove('open');
            dom.menuToggle.classList.remove('active');
            dom.menuToggle.setAttribute('aria-expanded', 'false');
        }
    };

    if (dom.menuToggle && dom.navMenu) {
        dom.menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = dom.navMenu.classList.toggle('open');
            dom.menuToggle.classList.toggle('active', isOpen);
            dom.menuToggle.setAttribute('aria-expanded', String(isOpen));
        });

        const mobileCvBtn = dom.navMenu.querySelector('.mobile-cv-btn');
        if (mobileCvBtn) {
            mobileCvBtn.addEventListener('click', closeMenu);
        }

        // Close on clicking outside mobile drawer
        document.addEventListener('click', (e) => {
            if (dom.navMenu.classList.contains('open')) {
                if (!dom.navMenu.contains(e.target) && !dom.menuToggle.contains(e.target)) {
                    closeMenu();
                }
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && dom.navMenu.classList.contains('open')) {
                closeMenu();
            }
        });
    }

    // Dynamic offset calculation for the floating HUD navbar
    const getNavOffset = () => {
        const navWrapper = document.querySelector('.navbar-wrapper');
        if (!navWrapper) return 100;
        const rect = navWrapper.getBoundingClientRect();
        const computed = window.getComputedStyle(navWrapper);
        const topMargin = parseFloat(computed.top) || 16;
        // Floating navbar height + top position + breathing gap (18px)
        return rect.height + topMargin + 18;
    };

    // Smooth scroll with precise offset for in-page anchors
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;

            e.preventDefault();
            closeMenu();

            if (targetId === '#hero') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                const navOffset = getNavOffset();
                const elementTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const targetScrollY = Math.max(0, Math.round(elementTop - navOffset));

                window.scrollTo({
                    top: targetScrollY,
                    behavior: 'smooth'
                });
            }

            // Instantly sync active nav links
            dom.navLinks.forEach(navLink => {
                if (navLink.getAttribute('href') === targetId) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            });

            // Update URL hash without browser abrupt jump
            if (history.pushState) {
                history.pushState(null, '', targetId);
            } else {
                window.location.hash = targetId;
            }
        });
    });

    // Handle initial hash in URL on page load with correct offset
    if (window.location.hash && window.location.hash !== '#hero') {
        const initialTarget = document.querySelector(window.location.hash);
        if (initialTarget) {
            setTimeout(() => {
                const navOffset = getNavOffset();
                const elementTop = initialTarget.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: Math.max(0, Math.round(elementTop - navOffset)),
                    behavior: 'smooth'
                });
            }, 120);
        }
    }

    if (dom.speedometer) {
        dom.speedometer.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

/* --------------------------------------------------------------------------
   9. Toast Notifications
   -------------------------------------------------------------------------- */
function showToast(message, icon = 'fa-bolt') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid ${icon}"></i><span>${message}</span>`;
    container.appendChild(toast);

    toast.animate([
        { opacity: 0, transform: 'translateY(15px) scale(0.95)' },
        { opacity: 1, transform: 'translateY(0) scale(1)' }
    ], {
        duration: 250,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        fill: 'forwards'
    });

    setTimeout(() => {
        const exitAnim = toast.animate([
            { opacity: 1, transform: 'translateY(0) scale(1)' },
            { opacity: 0, transform: 'translateY(-10px) scale(0.95)' }
        ], {
            duration: 200,
            easing: 'ease-in',
            fill: 'forwards'
        });
        exitAnim.onfinish = () => toast.remove();
    }, 3500);
}

/* --------------------------------------------------------------------------
   10. Contact Form Handler
   -------------------------------------------------------------------------- */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = document.getElementById('contact-submit-btn');
        const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '';

        const nameInput = document.getElementById('contact-name');
        const emailInput = document.getElementById('contact-email');
        const subjectInput = document.getElementById('contact-subject');
        const messageInput = document.getElementById('contact-message');

        const name = nameInput ? nameInput.value.trim() : '';
        const email = emailInput ? emailInput.value.trim() : '';
        const subject = subjectInput ? subjectInput.value.trim() : 'Portfolio Inquiry';
        const message = messageInput ? messageInput.value.trim() : '';

        if (!name || !email || !message) {
            showToast('Please fill out all required fields.', 'fa-triangle-exclamation');
            return;
        }

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Sending...</span>';
        }

        try {
            if (submitBtn) {
                const rect = submitBtn.getBoundingClientRect();
                createLightning(rect.left + rect.width / 2, rect.top + rect.height / 2);
            }

            const mailtoSubject = encodeURIComponent(subject ? `[Portfolio] ${subject}` : `Message from ${name}`);
            const mailtoBody = encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`);
            const mailtoUrl = `mailto:atulk5137@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

            await new Promise(res => setTimeout(res, 600));

            window.location.href = mailtoUrl;
            showToast('⚡ Message prepared! Opening email client...', 'fa-check');
            form.reset();
        } catch (err) {
            showToast('Please email directly at atulk5137@gmail.com', 'fa-circle-exclamation');
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHtml;
            }
        }
    });
}

/* --------------------------------------------------------------------------
   11. Theme Toggle System (Light / Dark Mode)
   -------------------------------------------------------------------------- */
function initThemeToggle(canvasEngine) {
    const THEME_KEY = 'speedster-theme';
    const root = document.documentElement;
    const desktopBtn = dom.themeToggle;
    const mobileBtn = dom.themeToggleMobile;
    const mobileText = document.querySelector('.theme-mode-text');

    const getPreferredTheme = () => {
        try {
            const saved = localStorage.getItem(THEME_KEY);
            if (saved) return saved;
        } catch (e) {}
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const updateUI = (theme) => {
        root.setAttribute('data-theme', theme);
        root.style.colorScheme = theme;

        const isDark = theme === 'dark';
        const nextLabel = isDark ? "Switch to light theme (Press 'T')" : "Switch to dark theme (Press 'T')";
        const labelText = isDark ? 'Dark Mode' : 'Light Mode';

        if (desktopBtn) {
            desktopBtn.setAttribute('aria-label', nextLabel);
            desktopBtn.setAttribute('title', nextLabel);
            desktopBtn.setAttribute('aria-checked', !isDark);
        }

        if (mobileBtn) {
            mobileBtn.setAttribute('aria-label', nextLabel);
            mobileBtn.setAttribute('title', nextLabel);
            mobileBtn.setAttribute('aria-checked', !isDark);
        }

        if (mobileText) {
            mobileText.textContent = labelText;
        }

        if (canvasEngine && typeof canvasEngine.setTheme === 'function') {
            canvasEngine.setTheme(theme);
        }
    };

    const toggleTheme = (e) => {
        const current = root.getAttribute('data-theme') || 'dark';
        const next = current === 'dark' ? 'light' : 'dark';

        try {
            localStorage.setItem(THEME_KEY, next);
        } catch (err) {}

        updateUI(next);

        // Lightning micro-spark effect on the toggle button
        if (e && e.currentTarget) {
            const rect = e.currentTarget.getBoundingClientRect();
            createLightning(rect.left + rect.width / 2, rect.top + rect.height / 2);
        }
    };

    if (desktopBtn) desktopBtn.addEventListener('click', toggleTheme);
    if (mobileBtn) mobileBtn.addEventListener('click', toggleTheme);

    // Keyboard shortcut: Press 'T' or 't' to toggle theme
    document.addEventListener('keydown', (e) => {
        // Prevent toggle if user is typing in form inputs, textareas, or contentEditable
        const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
        if (
            activeTag === 'input' ||
            activeTag === 'textarea' ||
            (document.activeElement && document.activeElement.isContentEditable)
        ) {
            return;
        }

        // Avoid overriding browser shortcuts like Cmd+T or Ctrl+T (new tab) or Alt+T
        if (e.metaKey || e.ctrlKey || e.altKey) {
            return;
        }

        if (e.key === 't' || e.key === 'T') {
            e.preventDefault();
            const activeBtn = (desktopBtn && desktopBtn.offsetParent !== null) ? desktopBtn : mobileBtn;
            toggleTheme(activeBtn ? { currentTarget: activeBtn } : null);
        }
    });

    // Dynamic adaptation if system theme changes and no explicit user pin is set
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            try {
                if (!localStorage.getItem(THEME_KEY)) {
                    updateUI(e.matches ? 'dark' : 'light');
                }
            } catch (err) {}
        });
    }

    // Sync initial state
    updateUI(root.getAttribute('data-theme') || getPreferredTheme());
}

/* --------------------------------------------------------------------------
   12. High-Performance Bidirectional Scroll-Driven & Observer Animations
   -------------------------------------------------------------------------- */
function initScrollReveal() {
    // Add js-reveal class to activate CSS initial hidden state progressively
    document.documentElement.classList.add('js-reveal');

    // Accessibility check: disable animations if reduced motion is requested
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        document.querySelectorAll('.reveal-on-scroll, .reveal-stagger').forEach(el => {
            el.classList.add('is-revealed');
        });
        return;
    }

    // Calculate and apply staggered index to all container children
    const applyStaggerIndices = (container) => {
        Array.from(container.children).forEach((child, index) => {
            child.style.setProperty('--stagger-i', index);
        });
    };

    document.querySelectorAll('.reveal-stagger').forEach(applyStaggerIndices);

    // Continuous bidirectional observer: triggers on both downward and upward scroll passes
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const el = entry.target;
            const dir = currentScrollDirection || 'down';

            if (entry.isIntersecting) {
                // Apply direction-aware speed surge classes
                el.classList.remove('scroll-enter-down', 'scroll-enter-up');
                el.classList.add(dir === 'down' ? 'scroll-enter-down' : 'scroll-enter-up');
                el.classList.add('is-revealed');
            } else {
                // Reset when element moves well outside viewport buffer to allow re-animation on return
                const rect = entry.boundingClientRect;
                const isOutOfView = rect.bottom < -40 || rect.top > window.innerHeight + 40;

                if (isOutOfView) {
                    el.classList.remove('is-revealed', 'scroll-enter-down', 'scroll-enter-up');
                }
            }
        });
    }, {
        root: null,
        rootMargin: '60px 0px 60px 0px',
        threshold: 0.08
    });

    document.querySelectorAll('.reveal-on-scroll, .reveal-stagger').forEach(el => {
        observer.observe(el);
    });

    // Expose hook to observe dynamically injected elements (like project cards)
    window.observeNewRevealElements = () => {
        document.querySelectorAll('.reveal-stagger').forEach(applyStaggerIndices);
        document.querySelectorAll('.reveal-on-scroll, .reveal-stagger').forEach(el => {
            observer.observe(el);
        });
    };
}

/* --------------------------------------------------------------------------
   13. Initialize
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    if (dom.speedCanvas) {
        canvasEngineInstance = new SpeedCanvasEngine(dom.speedCanvas);
    }

    initThemeToggle(canvasEngineInstance);
    renderProjects();
    initScrollReveal();
    initNavigation();
    initScrollSpy();
    initContactForm();

    window.addEventListener('scroll', onScroll, { passive: true });
    updateScrollUI(window.scrollY, currentScrollDirection, 0);

    document.addEventListener('click', (e) => {
        createLightning(e.clientX, e.clientY);
    });
});
