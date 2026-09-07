import React from 'react';
import { certifications } from '../../data/portfolioData';
import './Certifications.css';

export default function Certifications() {
    return (
        <section id="certifications" className="section cert-section">
            <div className="section-header reveal-on-scroll" data-reveal="fade-up">
                <h2 className="section-title">My <span className="highlight-crimson">Certificates</span></h2>
                <p className="section-subtitle">Verified courses, professional workshops, and technical credentials.</p>
            </div>

            <div className="resume-grid reveal-on-scroll reveal-stagger">
                {certifications.map((cert) => (
                    <article className="resume-card" key={cert.title}>
                        <a
                            href={cert.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cert-preview-wrap"
                            aria-label={`View ${cert.title} PDF`}
                        >
                            <img
                                src={cert.thumbnailUrl}
                                alt={`${cert.title} Certificate`}
                                className="cert-preview-img"
                                loading="lazy"
                            />
                        </a>

                        <div className="resume-card-top">
                            <i
                                className={`${cert.icon} card-icon`}
                                style={cert.iconColor ? { color: cert.iconColor } : {}}
                            ></i>
                            <h3>{cert.title}</h3>
                        </div>

                        <p className="card-meta">
                            <strong>Provider:</strong> {cert.provider} &bull; <strong>Issued:</strong> {cert.issued}
                        </p>

                        <p>{cert.desc}</p>

                        <div className="project-actions">
                            <a
                                href={cert.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-btn"
                            >
                                <i className="fa-solid fa-file-pdf"></i>
                                <span>View Cert</span>
                            </a>
                            {cert.verifyUrl && (
                                <a
                                    href={cert.verifyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-btn secondary"
                                >
                                    <i className="fa-solid fa-circle-check"></i>
                                    <span>Verify</span>
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
