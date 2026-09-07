export const personalInfo = {
    name: "Atul Kumar",
    title: "Atul Kumar | Full Stack Developer",
    subtitle: "Atul Kumar | Full Stack Developer",
    summary: "Second-year CSE student at Lovely Professional University (CGPA: 8.96). Building clean, fast, and user-friendly web experiences. Passionate about full-stack development and open-source contributions.",
    university: "Lovely Professional University",
    cgpa: "8.96",
    location: "Phagwara, Punjab, India (LPU)",
    phone: "+91-7367098488",
    email: "atulk5137@gmail.com",
    website: "theflash.eu.org",
    websiteUrl: "https://theflash.eu.org",
    whatsappUrl: "https://wa.me/917367098488",
    linkedinUrl: "https://www.linkedin.com/in/atul120/",
    githubUrl: "https://github.com/TheFlashSpeedster",
    cvUrl: "/assets/docs/atul-cv.pdf",
    avatarUrl: "/assets/images/me-red.png"
};

export const quickFacts = [
    {
        icon: "fa-solid fa-location-dot",
        label: "Location",
        value: "Phagwara, Punjab, India (LPU)"
    },
    {
        icon: "fa-solid fa-graduation-cap",
        label: "University",
        value: "Lovely Professional University — CGPA: 8.96",
        highlight: "8.96"
    },
    {
        icon: "fa-solid fa-laptop-code",
        label: "Interests",
        value: "Web Development, Full-Stack, Problem Solving"
    },
    {
        icon: "fa-solid fa-bullseye",
        label: "Goal",
        value: "Build impactful products and grow as a full-stack developer"
    }
];

export const skills = [
    { name: "JavaScript", icon: "fa-brands fa-js", iconClass: "icon-js" },
    { name: "C", icon: "fa-solid fa-c", iconClass: "icon-c" },
    { name: "C++", icon: "fa-brands fa-cuttlefish", iconClass: "icon-cpp" },
    { name: "Python", icon: "fa-brands fa-python", iconClass: "icon-python" },
    { name: "CSS3", icon: "fa-brands fa-css3-alt", iconClass: "icon-css" },
    { name: "HTML5", icon: "fa-brands fa-html5", iconClass: "icon-html" },
    { name: "Git / GitHub", icon: "fa-brands fa-git-alt", iconClass: "icon-git" },
    { name: "PostgreSQL / SQL", icon: "fa-solid fa-database", iconClass: "icon-db" },
    { name: "React.js", icon: "fa-brands fa-react", iconClass: "icon-react" },
    { name: "Linux", icon: "fa-brands fa-linux", iconClass: "icon-linux" }
];

export const softSkills = [
    {
        name: "Problem Solving & Logic",
        icon: "fa-solid fa-puzzle-piece",
        desc: "Analytical approach to decomposing complex computational challenges into optimized, modular solutions."
    },
    {
        name: "Time Management & Focus",
        icon: "fa-solid fa-stopwatch",
        desc: "Certified in professional time management; skilled in milestone prioritization, sprint execution, and deep focus."
    },
    {
        name: "Team Collaboration",
        icon: "fa-solid fa-people-group",
        desc: "Thrives in cross-functional agile teams, collaborative pair programming, peer reviews, and open-source workflows."
    },
    {
        name: "Fast Learning & Adaptability",
        icon: "fa-solid fa-bolt-lightning",
        desc: "Speedster agility to master modern frameworks, emerging tech stacks, and evolving project requirements rapidly."
    },
    {
        name: "Clear Communication",
        icon: "fa-solid fa-comments",
        desc: "Articulating engineering decisions transparently, writing thorough documentation, and constructive discussions."
    },
    {
        name: "Resilience & Debugging",
        icon: "fa-solid fa-arrows-spin",
        desc: "Tenacity in tracing elusive bugs, edge case handling, and optimizing performance bottlenecks under pressure."
    }
];

export const codingProfiles = [
    {
        name: "GitHub",
        handle: "@TheFlashSpeedster",
        url: "https://github.com/TheFlashSpeedster",
        icon: "fa-brands fa-github",
        color: ""
    },
    {
        name: "LeetCode",
        handle: "atul-08",
        url: "https://leetcode.com/u/atul-08/",
        icon: "fa-solid fa-code",
        color: "#FFA116"
    },
    {
        name: "GeeksforGeeks",
        handle: "atul08",
        url: "https://www.geeksforgeeks.org/user/atul08/",
        icon: "fa-solid fa-laptop-code",
        color: "#2F8D46"
    },
    {
        name: "HackerRank",
        handle: "atulk5137",
        url: "https://www.hackerrank.com/profile/atulk5137",
        icon: "fa-brands fa-hackerrank",
        color: "#00EA64"
    },
    {
        name: "HackerEarth",
        handle: "@atulk5137",
        url: "https://www.hackerearth.com/@atulk5137/",
        icon: "fa-solid fa-earth-asia",
        color: "#5C7CFA"
    },
    {
        name: "Stack Overflow",
        handle: "atul-kumar",
        url: "https://stackoverflow.com/users/31317116/atul-kumar",
        icon: "fa-brands fa-stack-overflow",
        color: "#F48024"
    }
];

export const projects = [
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

export const certifications = [
    {
        title: "Community Development Project",
        provider: "Times Foundation (The Times of India)",
        issued: "LPU Collaboration",
        desc: "Awarded for leadership, social responsibility, and dedicated community service.",
        pdfUrl: "/assets/docs/times-of-india-cert.pdf",
        thumbnailUrl: "/assets/docs/times-of-india-cert.png",
        verifyUrl: "https://verification.givemycertificate.com/v/7691c424-4963-47e6-ab26-57a7f6158ee6",
        icon: "fa-solid fa-newspaper",
        iconColor: "#FF3B44"
    },
    {
        title: "Introduction to Artificial Intelligence",
        provider: "Infosys Springboard",
        issued: "8 Mar 2026",
        desc: "Mastered fundamental AI principles, intelligent systems concepts, and computational theory.",
        pdfUrl: "/assets/docs/infosys-introduction-to-artificial-intelligence.pdf",
        thumbnailUrl: "/assets/docs/intro-to-ai.png",
        icon: "fa-solid fa-brain",
        iconColor: "#007CC3"
    },
    {
        title: "Introduction to Python",
        provider: "Infosys Springboard",
        issued: "12 Jun 2026",
        desc: "Mastered core Python syntax, data structures, modular programming, and algorithmic problem solving.",
        pdfUrl: "/assets/docs/infosys-introduction-to-python.pdf",
        thumbnailUrl: "/assets/docs/intro-to-python.png",
        icon: "fa-brands fa-python",
        iconColor: "#FFDE00"
    },
    {
        title: "Effective Time Management",
        provider: "TECH VEDA",
        issued: "29 Oct 2025",
        desc: "Certified in productivity strategies, milestone scheduling, and professional time management.",
        pdfUrl: "/assets/docs/time-management-cert.pdf",
        thumbnailUrl: "/assets/docs/time-management-cert.png",
        icon: "fa-solid fa-stopwatch",
        iconColor: "#FFA000"
    }
];

export const educationTimeline = [
    {
        role: "B.Tech in Computer Science and Engineering",
        place: "Lovely Professional University, Phagwara, Punjab, India",
        period: "Aug 2023 – Present",
        points: [
            "CGPA: 8.96 / 10",
            "Relevant coursework: DSA, DBMS, OS, Computer Networks, Web Development",
            "Actively building full-stack projects and contributing to open-source"
        ]
    },
    {
        role: "Intermediate (Class XII) — Science",
        place: "Jesus And Mary Academy, Darbhanga, Bihar",
        period: "Apr 2023 – Mar 2024",
        points: [
            "Percentage: 70%"
        ]
    },
    {
        role: "Matriculation (Class X)",
        place: "Jesus And Mary Academy, Darbhanga, Bihar",
        period: "Apr 2021 – Mar 2022",
        points: [
            "Percentage: 88%"
        ]
    }
];
