import React from 'react';
import { quickFacts } from '../../data/portfolioData';
import './About.css';

export default function About() {
    return (
        <section id="about" className="section about-section">
            <div className="section-header reveal-on-scroll" data-reveal="fade-up">
                <h2 className="section-title">About <span className="highlight-crimson">Me</span></h2>
            </div>

            <div className="about-container">
                <div className="about-text info-panel reveal-on-scroll" data-reveal="fade-right">
                    <h3 className="panel-title">Details About Me</h3>
                    <p className="panel-subtitle">Full-Stack Developer / CSE Student / Problem Solver</p>
                    <p>
                        Second-year Computer Science Engineering student at Lovely Professional University with a
                        passion for full-stack development. Actively building projects and expanding technical skills in web development.
                    </p>
                    <p>
                        Interested in learning, collaborating, and contributing to innovative solutions. I focus on
                        writing clean code, learning modern development tools, and continuously improving my problem-solving skills.
                    </p>
                    <p>
                        Currently looking for opportunities to grow as a developer through internships, open-source
                        contributions, and exciting collaborative projects.
                    </p>
                </div>

                <div className="quick-facts reveal-on-scroll reveal-stagger" data-reveal="fade-left">
                    {quickFacts.map((fact, idx) => (
                        <div className="fact-item" key={fact.label || idx}>
                            <div className="fact-icon-box">
                                <i className={fact.icon}></i>
                            </div>
                            <div>
                                <span className="fact-label">{fact.label}</span>
                                <span className="fact-value">
                                    {fact.highlight ? (
                                        <>
                                            {fact.value.split(fact.highlight)[0]}
                                            <strong>{fact.highlight}</strong>
                                            {fact.value.split(fact.highlight)[1]}
                                        </>
                                    ) : (
                                        fact.value
                                    )}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
