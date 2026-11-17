import React from 'react';
import { Briefcase, Award, GitPullRequest, Users, Trophy, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  const getTypeBadge = (type) => {
    switch (type) {
      case 'Achievement':
        return {
          bg: 'rgba(16, 185, 129, 0.12)',
          border: 'rgba(16, 185, 129, 0.3)',
          color: '#10b981',
          icon: <Award size={12} />
        };
      case 'Leadership':
        return {
          bg: 'rgba(168, 85, 247, 0.12)',
          border: 'rgba(168, 85, 247, 0.3)',
          color: '#c084fc',
          icon: <Users size={12} />
        };
      case 'Hackathon':
        return {
          bg: 'rgba(56, 189, 248, 0.12)',
          border: 'rgba(56, 189, 248, 0.3)',
          color: '#38bdf8',
          icon: <Trophy size={12} />
        };
      case 'Open Source':
      case 'Contribution':
        return {
          bg: 'rgba(56, 189, 248, 0.12)',
          border: 'rgba(56, 189, 248, 0.3)',
          color: '#38bdf8',
          icon: <GitPullRequest size={12} />
        };
      case 'Community':
      case 'Participation':
      default:
        return {
          bg: 'rgba(234, 179, 8, 0.12)',
          border: 'rgba(234, 179, 8, 0.3)',
          color: '#facc15',
          icon: <Sparkles size={12} />
        };
    }
  };

  return (
    <section id="experience" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Trophy size={14} />
            <span>Hackathons & Leadership</span>
          </div>
          <h2 className="section-title">
            Hackathons & Engineering Leadership
          </h2>
          <p className="section-description">
            Hands-on technical architectures, hackathon breakthroughs, and team leadership across national and institutional competitions.
          </p>
        </div>

        {/* Timeline / Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {experience.map((item, index) => {
            const badgeStyle = getTypeBadge(item.type);

            return (
              <div
                key={index}
                className="card-base"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Card Top: Type & Period */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      padding: '0.2rem 0.65rem',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: badgeStyle.bg,
                      border: `1px solid ${badgeStyle.border}`,
                      color: badgeStyle.color,
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {badgeStyle.icon}
                    {item.type}
                  </span>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {item.period}
                  </span>
                </div>

                {/* Role Title */}
                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    marginBottom: '0.35rem',
                    lineHeight: 1.3,
                  }}
                >
                  {item.role}
                </h3>

                {/* Organization */}
                <div
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--accent)',
                    fontWeight: 500,
                    marginBottom: '1rem',
                  }}
                >
                  {item.organization}
                </div>

                {/* Description */}
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    marginBottom: '1.25rem',
                  }}
                >
                  {item.description}
                </p>

                {/* Highlights List */}
                {item.highlights && item.highlights.length > 0 && (
                  <div
                    style={{
                      marginTop: 'auto',
                      paddingTop: '1rem',
                      borderTop: '1px solid var(--border-subtle)',
                    }}
                  >
                    <ul
                      style={{
                        listStyle: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.45rem',
                      }}
                    >
                      {item.highlights.map((h, hIdx) => (
                        <li
                          key={hIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.5rem',
                            fontSize: '0.85rem',
                            color: 'var(--text-secondary)',
                          }}
                        >
                          <span style={{ color: 'var(--accent)', marginTop: '1px' }}>▹</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
