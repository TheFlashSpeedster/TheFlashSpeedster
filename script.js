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
    speedCanvas: document.getElementById('speed-canvas')
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
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                radius: Math.random() * 1.5 + 1,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                color: Math.random() > 0.4 ? 'rgba(255, 222, 0, ' : 'rgba(255, 30, 39, ',
                alpha: Math.random() * 0.4 + 0.2,
                sparkleSpeed: Math.random() * 0.02 + 0.01,
                sparkleAngle: Math.random() * Math.PI * 2
            });
        }
    }

    animate() {
        if (!this.isVisible) return;

        this.ctx.clearRect(0, 0, this.width, this.height);

        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];

            p.x += p.vx;
            p.y += p.vy;

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
                    this.ctx.strokeStyle = `rgba(255, 222, 0, ${(1 - dist / 70) * 0.08})`;
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

    dom.projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
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
   7. Throttled Scroll Listener (requestAnimationFrame)
   -------------------------------------------------------------------------- */
let isScrolling = false;
let lastScrollY = 0;

function onScroll() {
    lastScrollY = window.scrollY;

    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            updateScrollUI(lastScrollY);
            isScrolling = false;
        });
        isScrolling = true;
    }
}

function updateScrollUI(scrollY) {
    // 1. Navbar Glass State
    if (dom.navbar) {
        if (scrollY > 40) {
            dom.navbar.classList.add('scrolled');
        } else {
            dom.navbar.classList.remove('scrolled');
        }
    }

    // 2. Floating Speedometer Progress
    if (dom.speedometer && dom.progressCircle) {
        if (scrollY > 300) {
            dom.speedometer.classList.add('visible');
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? (scrollY / docHeight) : 0;
            const circumference = 263.89;
            const offset = circumference - (scrollPercent * circumference);
            dom.progressCircle.style.strokeDashoffset = Math.max(0, offset);
        } else {
            dom.speedometer.classList.remove('visible');
        }
    }
}

/* --------------------------------------------------------------------------
   8. Navigation & Mobile Drawer
   -------------------------------------------------------------------------- */
function initNavigation() {
    if (dom.menuToggle && dom.navMenu) {
        dom.menuToggle.addEventListener('click', () => {
            const isOpen = dom.navMenu.classList.toggle('open');
            dom.menuToggle.classList.toggle('active', isOpen);
            dom.menuToggle.setAttribute('aria-expanded', isOpen);
        });

        const closeMenu = () => {
            dom.navMenu.classList.remove('open');
            dom.menuToggle.classList.remove('active');
            dom.menuToggle.setAttribute('aria-expanded', false);
        };

        dom.navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        const mobileCvBtn = dom.navMenu.querySelector('.mobile-cv-btn');
        if (mobileCvBtn) {
            mobileCvBtn.addEventListener('click', closeMenu);
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && dom.navMenu.classList.contains('open')) {
                closeMenu();
            }
        });
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
   11. Initialize
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    if (dom.speedCanvas) {
        new SpeedCanvasEngine(dom.speedCanvas);
    }

    renderProjects();
    initNavigation();
    initScrollSpy();
    initContactForm();

    window.addEventListener('scroll', onScroll, { passive: true });
    updateScrollUI(window.scrollY);

    document.addEventListener('click', (e) => {
        createLightning(e.clientX, e.clientY);
    });
});
