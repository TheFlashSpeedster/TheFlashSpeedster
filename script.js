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

const projectsGrid = document.getElementById('projects-grid');
const ongoingGrid = document.getElementById('ongoing-grid');

function renderProjects() {
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-content">
                <div class="project-header">
                    <h3 class="project-title">${project.title}</h3>
                    ${project.date ? `<span class="project-date">${project.date}</span>` : ''}
                </div>
                <p class="project-desc">${project.description}</p>
                ${project.tech ? `<div class="project-tech">${project.tech.map(t => `<span class="tech-chip">${t}</span>`).join('')}</div>` : ''}
                <div class="project-actions">
                    <a href="${project.live || '#'}" target="_blank" class="project-btn ${project.live ? '' : 'is-disabled'}" ${project.live ? '' : 'aria-disabled="true"'}>
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        Live Demo
                    </a>
                    <a href="${project.source || '#'}" target="_blank" class="project-btn secondary ${project.source ? '' : 'is-disabled'}" ${project.source ? '' : 'aria-disabled="true"'}>
                        <i class="fa-brands fa-github"></i>
                        Source
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

function renderOngoing() {
    if (!ongoingGrid) return;
    ongoingGrid.innerHTML = ongoingProjects.map(item => `
        <div class="ongoing-card">
            <div class="ongoing-header">
                <h3 class="ongoing-title">${item.title}</h3>
                <span class="ongoing-badge ${item.status === 'Ongoing' ? 'is-ongoing' : 'is-upcoming'}">${item.status}</span>
            </div>
            <p class="ongoing-desc">${item.description}</p>
        </div>
    `).join('');
}

// lightning effect on click
document.addEventListener('click', (e) => {
    createLightning(e.clientX, e.clientY);
});

function createLightning(x, y) {
    const lightning = document.createElement('div');
    lightning.style.position = 'fixed';
    lightning.style.left = x + 'px';
    lightning.style.top = y + 'px';
    lightning.style.width = '2px';
    lightning.style.height = '100px';
    lightning.style.background = '#FFD700'; // Gold
    lightning.style.transform = `rotate(${Math.random() * 360}deg)`;
    lightning.style.zIndex = '9999';
    lightning.style.boxShadow = '0 0 10px #FFD700, 0 0 20px white';
    lightning.style.pointerEvents = 'none'; // Don't block clicks
    
    document.body.appendChild(lightning);
    
    // Animate out
    const animation = lightning.animate([
        { opacity: 1, height: '0px' },
        { opacity: 0, height: '150px' }
    ], {
        duration: 300,
        easing: 'ease-out'
    });

    animation.onfinish = () => lightning.remove();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderOngoing();
});
