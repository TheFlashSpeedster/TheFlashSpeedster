import React from 'react';
import { projects } from '../../data/portfolioData';
import './Projects.css';

export default function Projects() {
    return (
        <section id="projects" className="section projects-section">
            <div className="section-header reveal-on-scroll" data-reveal="fade-up">
                <h2 className="section-title">My <span className="highlight-crimson">Projects</span></h2>
                <p className="section-subtitle">Real-world applications and web tools.</p>
            </div>

            <div className="projects-grid reveal-on-scroll reveal-stagger" id="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={project.title} style={{ '--stagger-i': index }}>
                        <div className="project-content">
                            <div className="project-header">
                                <h3 className="project-title">{project.title}</h3>
                                {project.date && <span className="project-date">{project.date}</span>}
                            </div>
                            <p className="project-desc">{project.description}</p>
                            {project.tech && (
                                <div className="project-tech">
                                    {project.tech.map((tech) => (
                                        <span className="tech-chip" key={tech}>{tech}</span>
                                    ))}
                                </div>
                            )}
                            <div className="project-actions">
                                <a
                                    href={project.live || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`project-btn ${project.live ? '' : 'is-disabled'}`}
                                    aria-disabled={!project.live}
                                >
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    <span>Live Demo</span>
                                </a>
                                <a
                                    href={project.source || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`project-btn secondary ${project.source ? '' : 'is-disabled'}`}
                                    aria-disabled={!project.source}
                                >
                                    <i className="fa-brands fa-github"></i>
                                    <span>Source</span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
