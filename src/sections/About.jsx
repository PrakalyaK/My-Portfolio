import React from 'react';
import { User, Terminal, Server, Code, Sparkles, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  const highlights = [
    {
      title: 'Full-Stack Architecture',
      description: 'Building decoupled, component-driven client interfaces integrated with RESTful Node/Express APIs.',
      icon: <Terminal size={20} color="var(--accent)" />
    },
    {
      title: 'Algorithmic Foundation',
      description: 'Strong mastery of C++ and core data structures with 350+ LeetCode problems solved across diverse paradigms.',
      icon: <Code size={20} color="var(--accent)" />
    },
    {
      title: 'Backend & Data Modeling',
      description: 'Designing normalized relational database schemas with PostgreSQL and MySQL, prioritizing ACID compliance and speed.',
      icon: <Server size={20} color="var(--accent)" />
    },
    {
      title: 'Engineering Rigor',
      description: 'Emphasizing clean modular design, maintainable folder structures, Git collaboration, and pragmatic engineering.',
      icon: <Sparkles size={20} color="var(--accent)" />
    }
  ];

  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <User size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Engineering with curiosity and intent.
          </h2>
          <p className="section-description">
            A developer who loves the entire lifecycle of software creation — from drafting whiteboard schemas to shipping intuitive frontends.
          </p>
        </div>

        {/* Grid layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Narrative text card */}
          <div
            className="card-base"
            style={{
              padding: '2.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)' }}>
              My Journey & Philosophy
            </h3>
            
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1rem' }}>
              Currently an Information Technology student at <strong>Sri Krishna College of Engineering and Technology</strong> (skcet.ac.in), I maintain a <strong>9.04 CGPA</strong> while actively architecting web applications and tackling algorithmic challenges.
            </p>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1rem' }}>
              I am driven by a deep fascination with how complex distributed systems operate under the hood. Whether optimizing SQL queries for sub-50ms latency or architecting intuitive state flows in React, my goal is to build software that is resilient, maintainable, and directly helpful to users.
            </p>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1rem' }}>
              Beyond coursework, I invest significant time exploring open-source projects, participating in national hackathons like SIH, and mentoring fellow students on Git branching workflows and modern web architecture.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '1.5rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-subtle)',
                marginTop: '0.5rem',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>College</span>
                <div style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem' }}>SKCET, Coimbatore</div>
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Degree</span>
                <div style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem' }}>B.Tech Information Technology</div>
              </div>
            </div>
          </div>

          {/* Pillars / Competencies */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }}>
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card-base"
                style={{
                  padding: '1.5rem 1.75rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.25rem',
                }}
              >
                <div
                  style={{
                    padding: '0.65rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--accent-dim)',
                    border: '1px solid var(--accent-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.55 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
