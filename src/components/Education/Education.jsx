import React from 'react';
import { educationTimeline } from '../../data/portfolioData';
import './Education.css';

export default function Education() {
    return (
        <section id="education" className="section edu-section">
            <div className="section-header reveal-on-scroll" data-reveal="fade-up">
                <h2 className="section-title">Academic <span className="highlight-gold">Education</span></h2>
            </div>

            <div className="timeline">
                {educationTimeline.map((item) => (
                    <article className="timeline-item reveal-on-scroll" data-reveal="fade-up" key={item.role}>
                        <div className="timeline-head">
                            <div>
                                <h3 className="timeline-role">{item.role}</h3>
                                <p className="timeline-place">{item.place}</p>
                            </div>
                            <span className="timeline-period">{item.period}</span>
                        </div>
                        <ul className="timeline-list">
                            {item.points.map((pt, i) => (
                                <li key={i}>{pt}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}
