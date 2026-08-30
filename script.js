/**
 * ==========================================================================
 * THE FLASH SPEEDSTER — CLIENT SCRIPT & INTERACTION ENGINE
 * Developer: Atul Kumar | Speedster Portfolio
 * Features: Speed Force Particle Canvas, Dynamic Project Rendering,
 *           ScrollSpy, Lightning Click Sparks, Interactive Navigation
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
    },
    {
        title: "ACE Index Generator",
        description: "Generate direct download links for any Google Drive file. A fast and reliable tool for file sharing.",
        tech: ["Web APIs"],
        live: "https://index.ace-ml.eu.org/",
        source: null,
        date: null
    }
];

const ongoingProjects = [
    {
        title: "Youtube Downloader",
        description: "Lightning-fast YouTube downloads with a clean UI. Free & Unlimited.",
        status: "Ongoing"
    }
];

/* --------------------------------------------------------------------------
   2. DOM References
   -------------------------------------------------------------------------- */
const dom = {
    navbar: document.getElementById('navbar'),
    navMenu: document.getElementById('nav-menu'),
    menuToggle: document.getElementById('menu-toggle'),
    navLinks: document.querySelectorAll('.nav-link'),
    projectsGrid: document.getElementById('projects-grid'),
    ongoingGrid: document.getElementById('ongoing-grid'),
    speedometer: document.getElementById('floating-speedometer'),
    progressCircle: document.getElementById('scroll-progress-circle'),
    speedCanvas: document.getElementById('speed-canvas')
};

/* --------------------------------------------------------------------------
   3. Speed Force Particle Canvas Engine
   -------------------------------------------------------------------------- */
class SpeedCanvasEngine {
    constructor(canvas) {
        this.canvas = canvas;
        if (!this.canvas) return;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.width = 0;
        this.height = 0;
        this.mouseX = null;
        this.mouseY = null;
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
        const count = Math.min(Math.floor(this.width / 22), 55);
        this.particles = [];
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                radius: Math.random() * 2 + 1,
                vx: (Math.random() - 0.5) * 0.7,
                vy: (Math.random() - 0.5) * 0.7,
                color: Math.random() > 0.4 ? '#FFDE00' : '#FF1E27',
                alpha: Math.random() * 0.5 + 0.2,
                sparkleSpeed: Math.random() * 0.02 + 0.01,
                sparkleAngle: Math.random() * Math.PI * 2
            });
        }
    }

    animate() {
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

            if (this.mouseX !== null && this.mouseY !== null) {
                const dx = this.mouseX - p.x;
                const dy = this.mouseY - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    p.x += (dx / dist) * -1.2;
                    p.y += (dy / dist) * -1.2;
                }
            }

            this.ctx.save();
            this.ctx.globalAlpha = currentAlpha;
            this.ctx.fillStyle = p.color;
            this.ctx.shadowBlur = 6;
            this.ctx.shadowColor = p.color;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();

            for (let j = i + 1; j < this.particles.length; j++) {
                const p2 = this.particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const maxDist = 80;

                if (dist < maxDist) {
                    this.ctx.save();
                    this.ctx.globalAlpha = (1 - dist / maxDist) * 0.12;
                    this.ctx.strokeStyle = p.color;
                    this.ctx.lineWidth = 0.7;
                    this.ctx.beginPath();
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.stroke();
                    this.ctx.restore();
                }
            }
        }

        requestAnimationFrame(() => this.animate());
    }
}

/* --------------------------------------------------------------------------
   4. Render Projects & Ongoing Projects
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

function renderOngoing() {
    if (!dom.ongoingGrid) return;
    
    dom.ongoingGrid.innerHTML = ongoingProjects.map(item => `
        <div class="ongoing-card">
            <div class="ongoing-header">
                <h3 class="ongoing-title">${item.title}</h3>
                <span class="ongoing-badge ${item.status === 'Ongoing' ? 'is-ongoing' : 'is-upcoming'}">${item.status}</span>
            </div>
            <p class="ongoing-desc">${item.description}</p>
        </div>
    `).join('');
}

/* --------------------------------------------------------------------------
   5. Lightning Click Sparks
   -------------------------------------------------------------------------- */
function createLightning(x, y) {
    const container = document.getElementById('lightning-container');
    if (!container) return;

    const sparkCount = 3;

    for (let i = 0; i < sparkCount; i++) {
        const spark = document.createElement('div');
        const angle = (Math.PI * 2 / sparkCount) * i + (Math.random() - 0.5);
        const length = Math.random() * 60 + 35;
        const color = Math.random() > 0.3 ? '#FFDE00' : '#FFFFFF';

        spark.style.position = 'fixed';
        spark.style.left = `${x}px`;
        spark.style.top = `${y}px`;
        spark.style.width = '2px';
        spark.style.height = `${length}px`;
        spark.style.background = color;
        spark.style.transformOrigin = 'top center';
        spark.style.transform = `rotate(${angle}rad)`;
        spark.style.boxShadow = `0 0 8px ${color}, 0 0 16px #FF1E27`;
        spark.style.pointerEvents = 'none';
        spark.style.zIndex = '9999';

        container.appendChild(spark);

        const anim = spark.animate([
            { opacity: 1, height: `${length}px` },
            { opacity: 0, height: `${length * 1.4}px` }
        ], {
            duration: 250 + Math.random() * 100,
            easing: 'ease-out'
        });

        anim.onfinish = () => spark.remove();
    }
}

/* --------------------------------------------------------------------------
   6. ScrollSpy, Sticky Navbar & Speedometer
   -------------------------------------------------------------------------- */
function handleScroll() {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollY / docHeight) : 0;

    // Navbar Scrolled Glass
    if (dom.navbar) {
        if (scrollY > 50) {
            dom.navbar.classList.add('scrolled');
        } else {
            dom.navbar.classList.remove('scrolled');
        }
    }

    // Floating Speedometer
    if (dom.speedometer && dom.progressCircle) {
        if (scrollY > 300) {
            dom.speedometer.classList.add('visible');
        } else {
            dom.speedometer.classList.remove('visible');
        }

        const circumference = 263.89;
        const offset = circumference - (scrollPercent * circumference);
        dom.progressCircle.style.strokeDashoffset = Math.max(0, offset);
    }

    // ScrollSpy active link detection
    const sections = document.querySelectorAll('section[id]');
    let currentSectionId = '';

    sections.forEach(section => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
            currentSectionId = section.getAttribute('id');
        }
    });

    dom.navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
        }
    });
}

/* --------------------------------------------------------------------------
   7. Navigation & Mobile Drawer
   -------------------------------------------------------------------------- */
function initNavigation() {
    if (dom.menuToggle && dom.navMenu) {
        dom.menuToggle.addEventListener('click', () => {
            const isOpen = dom.navMenu.classList.toggle('open');
            dom.menuToggle.classList.toggle('active', isOpen);
            dom.menuToggle.setAttribute('aria-expanded', isOpen);
        });

        dom.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                dom.navMenu.classList.remove('open');
                dom.menuToggle.classList.remove('active');
                dom.menuToggle.setAttribute('aria-expanded', false);
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && dom.navMenu.classList.contains('open')) {
                dom.navMenu.classList.remove('open');
                dom.menuToggle.classList.remove('active');
                dom.menuToggle.setAttribute('aria-expanded', false);
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
   8. Initialize
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    if (dom.speedCanvas) {
        new SpeedCanvasEngine(dom.speedCanvas);
    }

    renderProjects();
    renderOngoing();
    initNavigation();

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    document.addEventListener('click', (e) => {
        createLightning(e.clientX, e.clientY);
    });
});
