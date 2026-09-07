import React from 'react';
import './Footer.css';

export default function Footer({ scrollToSection }) {
    return (
        <footer>
            <div className="footer-content">
                <p>© 2026 Atul Kumar. Powered by Speed Force.</p>
                <a
                    href="#hero"
                    className="back-to-top"
                    aria-label="Back to Top"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('#hero');
                    }}
                >
                    <i className="fa-solid fa-arrow-up"></i> Top
                </a>
            </div>
        </footer>
    );
}
