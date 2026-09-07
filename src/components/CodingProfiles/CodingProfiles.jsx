import React from 'react';
import { codingProfiles } from '../../data/portfolioData';
import './CodingProfiles.css';

export default function CodingProfiles() {
    return (
        <section id="coding-profiles" className="section coding-section">
            <div className="section-header reveal-on-scroll" data-reveal="fade-up">
                <h2 className="section-title">Coding <span className="highlight-gold">Profiles</span></h2>
                <p className="section-subtitle">Where I practice, compete, and contribute.</p>
            </div>

            <div className="contact-grid reveal-on-scroll reveal-stagger">
                {codingProfiles.map((profile) => (
                    <a
                        key={profile.name}
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card"
                    >
                        <i
                            className={`${profile.icon} contact-icon`}
                            style={profile.color ? { color: profile.color } : {}}
                        ></i>
                        <div>
                            <span className="contact-label">{profile.name}</span>
                            <span className="contact-hint">{profile.handle}</span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
