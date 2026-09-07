import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import './Hero.css';

export default function Hero({ scrollToSection }) {
    return (
        <section id="hero" class="hero-section">
            <div className="hero-glow-blob hero-glow-1" aria-hidden="true"></div>
            <div className="hero-glow-blob hero-glow-2" aria-hidden="true"></div>

            <div className="hero-container">
                <div className="hero-content reveal-on-scroll" data-reveal="fade-up">
                    <div className="hero-greeting">
                        <h1 className="glitch-title" data-text="WELCOME">WELCOME</h1>
                        <p className="subtitle">{personalInfo.subtitle}</p>
                    </div>

                    <p className="hero-summary">
                        Second-year CSE student at <strong>{personalInfo.university}</strong> (CGPA: <strong>{personalInfo.cgpa}</strong>). Building clean, fast, and user-friendly web experiences. Passionate about full-stack development and open-source contributions.
                    </p>

                    <div className="hero-socials">
                        <a
                            href={personalInfo.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-social-link"
                        >
                            <i className="fa-brands fa-github"></i>
                            <span>GitHub</span>
                        </a>
                        <a
                            href={personalInfo.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-social-link"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="hero-social-link"
                        >
                            <i className="fa-solid fa-envelope"></i>
                            <span>Email</span>
                        </a>
                        <a
                            href={personalInfo.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-social-link"
                        >
                            <i className="fa-brands fa-whatsapp"></i>
                            <span>WhatsApp</span>
                        </a>
                    </div>

                    <div className="hero-actions">
                        <a
                            href={personalInfo.cvUrl}
                            className="btn btn-primary"
                            download="atul-cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-solid fa-file-arrow-down"></i>
                            <span>Download CV</span>
                        </a>
                        <a
                            href="#contact"
                            className="btn btn-secondary"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('#contact');
                            }}
                        >
                            <i className="fa-solid fa-envelope"></i>
                            <span>Get In Touch</span>
                        </a>
                    </div>
                </div>

                <div className="hero-visual reveal-on-scroll" data-reveal="zoom">
                    <div className="hero-avatar-container">
                        <div className="avatar-ring avatar-ring-pulse" aria-hidden="true"></div>
                        <div className="avatar-ring avatar-ring-outer" aria-hidden="true"></div>
                        <div className="avatar-ring avatar-ring-middle" aria-hidden="true"></div>

                        <div className="avatar-frame">
                            <img
                                src={personalInfo.avatarUrl}
                                alt="Atul Kumar profile photo"
                                className="hero-avatar-img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
