const projects = [
    {
        title: "PDF Maker",
        description: "A lightning-fast tool to convert images to PDF. Built for efficiency.",
        live: "https://pdf-maker-flash.vercel.app/",
        source: "https://github.com/TheFlashSpeedster/PDF-Maker"
    },
    {
        title: "CGPA Calculator",
        description: "Calculate your academic speed (CGPA) with precision.",
        live: "https://cgpa-calculator-flash.vercel.app/",
        source: "https://github.com/TheFlashSpeedster/CGPA-Calculator"
    },
    {
        title: "Air Purifier",
        description: "Simulation showing the working of an Air Purifier",
        live: "https://air-purifier-kappa.vercel.app/",
        source: "https://github.com/TheFlashSpeedster/Air-Purifier"
    },
    {
        title: "Todo List",
        description: "Keep track of your projects and daily tasks.",
        live: "https://todo-list-mu-neon-58.vercel.app/",
        source: "https://github.com/TheFlashSpeedster/ToDo-List"
    },
    {
        title: "ACE Index Generator",
        description: "Generate Direct Download Link for Any Google Drive File",
        live: "https://index.ace-ml.eu.org/",
        source: null
    },
    {
        title: "Youtube Downloader",
        description: "Ongoing Project. Downloading content at super speed. Free & Unlimited",
        live: null,
        source: null
    }
];

const ongoingProjects = [
    {
        title: "Youtube Downloader",
        description: "Lightning-fast downloads with a clean UI.",
        status: "Ongoing"
    },
    {
        title: "Flash Analytics",
        description: "Real-time dashboards with speed-first design.",
        status: "Upcoming"
    },
    {
        title: "Speed Notes",
        description: "Minimal notes app with instant sync.",
        status: "Upcoming"
    }
];

const projectsGrid = document.getElementById('projects-grid');
const ongoingGrid = document.getElementById('ongoing-grid');

function renderProjects() {
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.description}</p>
                <div class="project-actions">
                    <a href="${project.live || '#'}" target="_blank" class="project-btn ${project.live ? '' : 'is-disabled'}" ${project.live ? '' : 'aria-disabled="true"'}>
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        Live
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
