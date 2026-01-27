const projects = [
    {
        title: "PDF Maker",
        description: "A lightning-fast tool to convert images to PDF. Built for efficiency.",
        link: "https://pdf-maker-flash.vercel.app/"
    },
    {
        title: "CGPA Calculator",
        description: "Calculate your academic speed (CGPA) with precision.",
        link: "https://cgpa-calculator-flash.vercel.app/"
    },
    {
        title: "Air Purifier",
        description: "Breathe easy with this smart monitoring application.",
        link: "https://air-purifier-kappa.vercel.app/"
    },
    {
        title: "Todo List",
        description: "Keep track of your missions and daily tasks.",
        link: "https://todo-list-mu-neon-58.vercel.app/"
    },
    {
        title: "ACE Index Generator",
        description: "Advanced computational engine for index generation.",
        link: "https://index.ace-ml.eu.org/"
    },
    {
        title: "Youtube Downloader",
        description: "Ongoing Project. Downloading content at super speed.",
        link: "https://github.com/TheFlashSpeedster/Youtube-Downloader"
    }
];

const projectsGrid = document.getElementById('projects-grid');

function renderProjects() {
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.description}</p>
                <a href="${project.link}" target="_blank" class="project-link">Launch Mission &rarr;</a>
            </div>
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
});
