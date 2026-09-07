import React from 'react';
import { skills, softSkills } from '../../data/portfolioData';
import './Skills.css';

export default function Skills() {
    return (
        <section id="skills" className="section skills-section">
            <div className="section-header reveal-on-scroll" data-reveal="fade-up">
                <h2 className="section-title">Programming <span className="highlight-gold">Languages</span></h2>
                <p className="section-subtitle">Languages, frameworks, and tools I work with.</p>
            </div>

            <div className="skills-grid reveal-on-scroll reveal-stagger">
                {skills.map((skill) => (
                    <div className="skill-card" key={skill.name}>
                        <i className={`${skill.icon} skill-icon ${skill.iconClass}`}></i>
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>

            {/* Soft Skills Subsection */}
            <div className="soft-skills-container" id="soft-skills">
                <div className="section-header reveal-on-scroll" data-reveal="fade-up">
                    <h2 className="section-title">Soft <span className="highlight-gold">Skills</span></h2>
                    <p className="section-subtitle">
                        Interpersonal capabilities and working methodologies driving high-velocity development.
                    </p>
                </div>

                <div className="soft-skills-grid reveal-on-scroll reveal-stagger">
                    {softSkills.map((item) => (
                        <div className="soft-skill-card" key={item.name}>
                            <div className="soft-skill-icon-wrapper">
                                <i className={item.icon}></i>
                            </div>
                            <div className="soft-skill-info">
                                <h4 className="soft-skill-name">{item.name}</h4>
                                <p className="soft-skill-desc">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
