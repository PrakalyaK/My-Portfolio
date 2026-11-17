import React from 'react';
import { Wrench, Code, Layout, Database, Terminal, Cpu, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={20} color="var(--accent)" />,
      items: skills.languages,
    },
    {
      title: 'Full-Stack Development',
      icon: <Layout size={20} color="var(--accent)" />,
      items: skills.development,
    },
    {
      title: 'Core Computer Science',
      icon: <Cpu size={20} color="var(--accent)" />,
      items: skills.coreCS,
    },
    {
      title: 'Developer Tools & Environments',
      icon: <Terminal size={20} color="var(--accent)" />,
      items: skills.tools,
    }
  ];

  return (
    <section id="skills" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Wrench size={14} />
            <span>Technical Skills</span>
          </div>
          <h2 className="section-title">
            Skills & Core Competencies
          </h2>
          <p className="section-description">
            A balanced technical stack emphasizing foundational computer science, strong typing, scalable backend systems, and modern frontend design.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {skillCategories.map((cat, index) => (
            <div
              key={index}
              className="card-base"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Category Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.5rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {cat.icon}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-main)' }}>
                  {cat.title}
                </h3>
              </div>

              {/* Skill Pills */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {cat.items.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--bg-surface-elevated)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.75rem',
                      transition: 'border-color 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent-border)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontWeight: 600,
                          fontSize: '0.95rem',
                          color: 'var(--text-main)',
                          display: 'block',
                        }}
                      >
                        {skill.name}
                      </span>
                      {(skill.description || skill.category) && (
                        <span
                          style={{
                            fontSize: '0.8rem',
                            color: 'var(--text-secondary)',
                            display: 'block',
                            marginTop: '0.15rem',
                          }}
                        >
                          {skill.description || skill.category}
                        </span>
                      )}
                    </div>

                    {skill.level && (
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          padding: '0.2rem 0.6rem',
                          borderRadius: 'var(--radius-full)',
                          backgroundColor: 'var(--accent-dim)',
                          color: 'var(--accent)',
                          border: '1px solid var(--accent-border)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
