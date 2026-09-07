import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

export default function Navbar({
    theme,
    toggleTheme,
    isScrolled,
    activeSection,
    scrollToSection
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navMenuRef = useRef(null);
    const menuBtnRef = useRef(null);

    const isLight = theme === 'light';
    const nextLabel = isLight ? "Switch to dark theme (Press 'T')" : "Switch to light theme (Press 'T')";

    const handleLinkClick = (e, targetId) => {
        e.preventDefault();
        setIsMenuOpen(false);
        scrollToSection(targetId);
    };

    const handleToggleMenu = (e) => {
        e.stopPropagation();
        setIsMenuOpen((prev) => !prev);
    };

    // Close on outside click
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (isMenuOpen) {
                if (
                    navMenuRef.current && !navMenuRef.current.contains(e.target) &&
                    menuBtnRef.current && !menuBtnRef.current.contains(e.target)
                ) {
                    setIsMenuOpen(false);
                }
            }
        };

        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isMenuOpen]);

    const navItems = [
        { href: '#about', label: 'About', id: 'about' },
        { href: '#skills', label: 'Skills', id: 'skills' },
        { href: '#coding-profiles', label: 'Coding Profiles', id: 'coding-profiles' },
        { href: '#projects', label: 'Projects', id: 'projects' },
        { href: '#certifications', label: 'Certificates', id: 'certifications' },
        { href: '#education', label: 'Education', id: 'education' },
        { href: '#contact', label: 'Contact', id: 'contact' }
    ];

    return (
        <header className="navbar-wrapper">
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar" aria-label="Main Navigation">
                <a
                    href="#hero"
                    className="logo"
                    aria-label="Atul Kumar Home"
                    onClick={(e) => handleLinkClick(e, '#hero')}
                >
                    <span className="logo-lightning">⚡</span>
                    <span className="logo-name">Atul Kumar</span>
                </a>

                <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`} id="nav-menu" ref={navMenuRef}>
                    <ul className="nav-links">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={item.href}
                                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                                    onClick={(e) => handleLinkClick(e, item.href)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="mobile-theme-row">
                        <span className="mobile-theme-label">
                            <i className="fa-solid fa-circle-half-stroke"></i> Theme
                        </span>
                        <button
                            id="theme-toggle-mobile"
                            className="theme-toggle-btn mobile-theme-toggle"
                            type="button"
                            aria-label="Toggle theme"
                            title="Toggle Light/Dark Theme (Press 'T')"
                            onClick={toggleTheme}
                        >
                            <span className="theme-toggle-track">
                                <i className="fa-solid fa-bolt theme-toggle-bolt" aria-hidden="true"></i>
                                <span className="theme-toggle-thumb">
                                    <i className="fa-solid fa-moon theme-icon-moon" aria-hidden="true"></i>
                                    <i className="fa-solid fa-sun theme-icon-sun" aria-hidden="true"></i>
                                </span>
                            </span>
                            <span className="theme-mode-text">
                                {isLight ? 'Light Mode' : 'Dark Mode'}
                            </span>
                        </button>
                    </div>

                    <a
                        href="/assets/docs/atul-cv.pdf"
                        className="nav-cv-btn mobile-cv-btn"
                        download="atul-cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <i className="fa-solid fa-file-arrow-down"></i>
                        <span>Download CV</span>
                    </a>
                </div>

                <div className="nav-actions">
                    <button
                        id="theme-toggle"
                        className="theme-toggle-btn desktop-theme-toggle"
                        type="button"
                        aria-label={nextLabel}
                        title={nextLabel}
                        onClick={toggleTheme}
                    >
                        <span className="theme-toggle-track">
                            <i className="fa-solid fa-bolt theme-toggle-bolt" aria-hidden="true"></i>
                            <span className="theme-toggle-thumb">
                                <i className="fa-solid fa-moon theme-icon-moon" aria-hidden="true"></i>
                                <i className="fa-solid fa-sun theme-icon-sun" aria-hidden="true"></i>
                            </span>
                        </span>
                    </button>

                    <a
                        href="/assets/docs/atul-cv.pdf"
                        className="nav-cv-btn desktop-cv-btn"
                        download="atul-cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-solid fa-file-arrow-down"></i>
                        <span>Download CV</span>
                    </a>

                    <button
                        id="menu-toggle"
                        className={`menu-btn ${isMenuOpen ? 'active' : ''}`}
                        type="button"
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMenuOpen}
                        ref={menuBtnRef}
                        onClick={handleToggleMenu}
                    >
                        <span className="bar bar-1"></span>
                        <span className="bar bar-2"></span>
                        <span className="bar bar-3"></span>
                    </button>
                </div>
            </nav>
        </header>
    );
}
