import React, { useState } from 'react';
import { personalInfo } from '../../data/portfolioData';
import { createLightning } from '../../utils/lightning';
import './Contact.css';

export default function Contact({ showToast }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = formData.name.trim();
        const email = formData.email.trim();
        const subject = formData.subject.trim() || 'Portfolio Inquiry';
        const message = formData.message.trim();

        if (!name || !email || !message) {
            if (showToast) showToast('Please fill out all required fields.', 'fa-triangle-exclamation');
            return;
        }

        setIsSubmitting(true);

        const btn = e.currentTarget.querySelector('button[type="submit"]');
        if (btn) {
            const rect = btn.getBoundingClientRect();
            createLightning(rect.left + rect.width / 2, rect.top + rect.height / 2);
        }

        try {
            const mailtoSubject = encodeURIComponent(`[Portfolio] ${subject}`);
            const mailtoBody = encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`);
            const mailtoUrl = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

            await new Promise((res) => setTimeout(res, 600));

            window.location.href = mailtoUrl;
            if (showToast) showToast('⚡ Message prepared! Opening email client...', 'fa-check');

            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (err) {
            if (showToast) showToast(`Please email directly at ${personalInfo.email}`, 'fa-circle-exclamation');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="section-header reveal-on-scroll" data-reveal="fade-up">
                <h2 className="section-title">Contact — <span className="highlight-crimson">Get in Touch</span></h2>
                <p className="section-subtitle">Feel free to reach out for collaborations, opportunities, or just a chat.</p>
            </div>

            <div className="contact-details-grid reveal-on-scroll reveal-stagger">
                <div className="contact-detail-card">
                    <i className="fa-solid fa-phone"></i>
                    <div>
                        <span className="contact-label">Phone</span>
                        <span className="contact-hint">{personalInfo.phone}</span>
                    </div>
                </div>
                <div className="contact-detail-card">
                    <i className="fa-solid fa-location-dot"></i>
                    <div>
                        <span className="contact-label">Location</span>
                        <span className="contact-hint">{personalInfo.location}</span>
                    </div>
                </div>
                <div className="contact-detail-card">
                    <i className="fa-solid fa-link"></i>
                    <div>
                        <span className="contact-label">Website</span>
                        <span className="contact-hint">
                            <a href={personalInfo.websiteUrl} target="_blank" rel="noopener noreferrer">
                                {personalInfo.website}
                            </a>
                        </span>
                    </div>
                </div>
            </div>

            <div className="contact-grid reveal-on-scroll reveal-stagger">
                <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card"
                >
                    <i className="fa-brands fa-github contact-icon icon-github"></i>
                    <div>
                        <span className="contact-label">GitHub</span>
                        <span className="contact-hint">@TheFlashSpeedster</span>
                    </div>
                </a>
                <a
                    href={`mailto:${personalInfo.email}`}
                    className="contact-card"
                >
                    <i className="fa-solid fa-envelope contact-icon icon-email"></i>
                    <div>
                        <span className="contact-label">Email</span>
                        <span className="contact-hint">{personalInfo.email}</span>
                    </div>
                </a>
                <a
                    href={personalInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card"
                >
                    <i className="fa-brands fa-whatsapp contact-icon icon-whatsapp"></i>
                    <div>
                        <span className="contact-label">WhatsApp</span>
                        <span className="contact-hint">{personalInfo.phone}</span>
                    </div>
                </a>
                <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card"
                >
                    <i className="fa-brands fa-linkedin contact-icon icon-linkedin"></i>
                    <div>
                        <span className="contact-label">LinkedIn</span>
                        <span className="contact-hint">atul120</span>
                    </div>
                </a>
            </div>

            {/* Direct Contact Form */}
            <div className="contact-form-wrapper">
                <div className="contact-form-card reveal-on-scroll" data-reveal="fade-up">
                    <div className="form-header">
                        <h3 className="form-title">
                            <i className="fa-solid fa-paper-plane"></i> Send a <span className="highlight-crimson">Direct Message</span>
                        </h3>
                        <p className="form-desc">
                            Have a question, collaboration idea, or opportunity? Drop a message below and I'll respond lightning fast.
                        </p>
                    </div>

                    <form id="contact-form" className="contact-form" onSubmit={handleSubmit} noValidate>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="contact-name" className="form-label">Your Name</label>
                                <div className="input-wrapper">
                                    <i className="fa-solid fa-user input-icon"></i>
                                    <input
                                        type="text"
                                        id="contact-name"
                                        name="name"
                                        className="form-input"
                                        placeholder="e.g. Alex Smith"
                                        required
                                        autoComplete="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="contact-email" className="form-label">Your Email</label>
                                <div className="input-wrapper">
                                    <i className="fa-solid fa-envelope input-icon"></i>
                                    <input
                                        type="email"
                                        id="contact-email"
                                        name="email"
                                        className="form-input"
                                        placeholder="e.g. alex@example.com"
                                        required
                                        autoComplete="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="contact-subject" className="form-label">Subject</label>
                            <div className="input-wrapper">
                                <i className="fa-solid fa-tag input-icon"></i>
                                <input
                                    type="text"
                                    id="contact-subject"
                                    name="subject"
                                    className="form-input"
                                    placeholder="Project Inquiry / Job Opportunity"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="contact-message" className="form-label">Message</label>
                            <div className="input-wrapper textarea-wrapper">
                                <i className="fa-solid fa-message input-icon textarea-icon"></i>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    className="form-input form-textarea"
                                    rows="4"
                                    placeholder="Hello Atul, I would like to discuss..."
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                        </div>

                        <button
                            type="submit"
                            id="contact-submit-btn"
                            className="btn btn-primary btn-submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <i className="fa-solid fa-spinner fa-spin"></i>
                                    <span>Sending...</span>
                                </>
                            ) : (
                                <>
                                    <i className="fa-solid fa-bolt"></i>
                                    <span>Send Message</span>
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
