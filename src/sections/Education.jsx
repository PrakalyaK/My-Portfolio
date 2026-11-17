import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education & Qualifications
          </h2>
          <p className="section-description">
            Strong academic trajectory spanning higher secondary school distinction and rigorous engineering coursework in Information Technology.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
          {education.map((item, index) => (
            <div
              key={index}
              className="card-base"
              style={{
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Header row */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--text-main)',
                      marginBottom: '0.25rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {item.degree}
                  </h3>
                  <div
                    style={{
                      fontSize: '1rem',
                      color: 'var(--accent)',
                      fontWeight: 600,
                    }}
                  >
                    {item.institution}
                  </div>
                </div>

                {/* Score Badge */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.35rem 0.8rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'rgba(16, 185, 129, 0.12)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    color: '#10b981',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                  }}
                >
                  <Award size={15} />
                  <span>{item.cgpa.includes('%') ? item.cgpa : `CGPA: ${item.cgpa}`}</span>
                </div>
              </div>

              {/* Meta details: Period & Location */}
              <div
                style={{
                  display: 'flex',
                  gap: '1.25rem',
                  fontSize: '0.825rem',
                  color: 'var(--text-muted)',
                  marginBottom: '1.25rem',
                  fontFamily: 'var(--font-mono)',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Calendar size={14} />
                  <span>{item.period}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <MapPin size={14} />
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Description */}
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem',
                  flexGrow: 1,
                }}
              >
                {item.description}
              </p>

              {/* Relevant Coursework */}
              {item.coursework && (
                <div
                  style={{
                    paddingTop: '1.25rem',
                    borderTop: '1px solid var(--border-subtle)',
                    marginTop: 'auto',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--text-main)',
                      marginBottom: '0.65rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    <BookOpen size={14} color="var(--accent)" />
                    <span>Core Focus Areas</span>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.4rem',
                    }}
                  >
                    {item.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        style={{
                          fontSize: '0.785rem',
                          padding: '0.25rem 0.65rem',
                          borderRadius: 'var(--radius-md)',
                          backgroundColor: 'var(--bg-surface-elevated)',
                          border: '1px solid var(--border-subtle)',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
