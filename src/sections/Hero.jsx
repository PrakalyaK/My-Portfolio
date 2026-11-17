import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, FileDown, Phone, Code2, Trophy, Layers, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal, problemSolving } = portfolioData;

  const statCards = [
    {
      value: "350+",
      label: "LeetCode Solved",
      sub: "150+ Med/Hard",
      icon: <Code2 size={15} color="var(--accent)" />,
      link: "#dsa"
    },
    {
      value: "8+",
      label: "Hackathons",
      sub: "SIH '26 Selected",
      icon: <Trophy size={15} color="#facc15" />,
      link: "#experience"
    },
    {
      value: "5+",
      label: "Major Systems",
      sub: "Full-Stack & Cloud",
      icon: <Layers size={15} color="#38bdf8" />,
      link: "#projects"
    },
    {
      value: "9.1",
      label: "SKCET CGPA",
      sub: "Information Tech",
      icon: <Award size={15} color="#10b981" />,
      link: "#education"
    }
  ];

  return (
    <section
      id="hero"
      style={{
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--nav-height) + 1.25rem)',
        paddingBottom: '2.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Dot Matrix Grid with Radial Mask */}
      <div
        className="bg-grid-pattern"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.3,
          maskImage: 'radial-gradient(ellipse at 50% 25%, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 25%, black 40%, transparent 80%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Ambient Top Glow Orbs */}
      <div
        className="animate-pulse-glow"
        style={{
          position: 'absolute',
          top: '5%',
          left: '12%',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, rgba(10, 14, 23, 0) 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        className="animate-pulse-glow"
        style={{
          position: 'absolute',
          top: '15%',
          right: '8%',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.07) 0%, rgba(10, 14, 23, 0) 70%)',
          filter: 'blur(55px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Introduction & Interactive CTAs */}
          <div>
            {/* Live Availability Radar Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 12px -2px rgba(0, 0, 0, 0.4)',
                marginBottom: '0.85rem',
              }}
            >
              <span style={{ position: 'relative', display: 'flex', width: '8px', height: '8px' }}>
                <span
                  className="animate-ping-slow"
                  style={{
                    position: 'absolute',
                    display: 'inline-flex',
                    height: '100%',
                    width: '100%',
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                    opacity: 0.75,
                  }}
                />
                <span
                  style={{
                    position: 'relative',
                    display: 'inline-flex',
                    borderRadius: '50%',
                    height: '8px',
                    width: '8px',
                    backgroundColor: '#10b981',
                  }}
                />
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.785rem',
                  fontWeight: 500,
                  color: 'var(--text-main)',
                  letterSpacing: '0.015em',
                }}
              >
                Available for Full-Stack & Engineering Roles
              </span>
            </div>

            {/* Name Heading */}
            <h1
              style={{
                fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '0.45rem',
              }}
            >
              <span
                style={{
                  background: 'linear-gradient(135deg, #ffffff 60%, #94a3b8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {personal.name}
              </span>
              <span style={{ color: 'var(--accent)' }}>.</span>
            </h1>

            {/* Role & Specialization Badge Pill */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.45rem',
                marginBottom: '1rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--accent)',
                  backgroundColor: 'var(--accent-dim)',
                  border: '1px solid var(--accent-border)',
                  padding: '0.2rem 0.65rem',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                Full-Stack Developer
              </span>
              <span style={{ color: 'var(--text-muted)' }}>•</span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  fontWeight: 500,
                }}
              >
                Problem Solver
              </span>
              <span style={{ color: 'var(--text-muted)' }}>•</span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: '#c084fc',
                  backgroundColor: 'rgba(168, 85, 247, 0.1)',
                  border: '1px solid rgba(168, 85, 247, 0.25)',
                  padding: '0.15rem 0.55rem',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                GSSoC '26 Contributor
              </span>
            </div>

            {/* Narrative Bio */}
            <p
              style={{
                fontSize: '0.985rem',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
                maxWidth: '600px',
                marginBottom: '1.5rem',
              }}
            >
              Information Technology undergraduate at{' '}
              <strong style={{ color: 'var(--text-main)', fontWeight: 600 }}>SKCET (9.1 CGPA)</strong>. 
              Engineering scalable distributed systems and modern web experiences using React, Node.js, and PostgreSQL, backed by deliberate practice across{' '}
              <strong style={{ color: 'var(--text-main)', fontWeight: 600 }}>350+ LeetCode algorithmic problems</strong> and{' '}
              <strong style={{ color: 'var(--text-main)', fontWeight: 600 }}>8+ hackathons</strong>.
            </p>

            {/* Primary Action Buttons & Direct Contact Links */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                alignItems: 'center',
                marginBottom: '1.75rem',
              }}
            >
              <a href="#projects" className="btn btn-primary" style={{ padding: '0.7rem 1.4rem', fontSize: '0.925rem' }}>
                <span>Explore Projects</span>
                <ArrowDown size={16} />
              </a>

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Prakalya_K_Resume.pdf"
                className="btn btn-secondary"
                style={{ padding: '0.7rem 1.3rem', fontSize: '0.925rem' }}
              >
                <FileDown size={16} />
                <span>Download Resume</span>
              </a>

              {/* Direct Quick-Connect Buttons */}
              <div style={{ display: 'flex', gap: '0.5rem', marginLeft: '0.2rem' }}>
                <a
                  href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
                  aria-label="Call Mobile"
                  title={`Call ${personal.phone}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--accent)';
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Phone size={16} />
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  title="View GitHub Profile"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--accent)';
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Github size={17} />
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  title="View LinkedIn Profile"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--accent)';
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Linkedin size={17} />
                </a>

                <a
                  href={`mailto:${personal.email}`}
                  aria-label="Email Me"
                  title={`Email ${personal.email}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--accent)';
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Mail size={17} />
                </a>
              </div>
            </div>

            {/* Compact Stat Cards Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: '0.75rem',
              }}
            >
              {statCards.map((card, idx) => (
                <a
                  key={idx}
                  href={card.link}
                  style={{
                    display: 'block',
                    padding: '0.75rem 0.85rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(15, 23, 42, 0.7)',
                    border: '1px solid var(--border-subtle)',
                    backdropFilter: 'blur(8px)',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-border)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.backgroundColor = 'var(--bg-surface-elevated)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.backgroundColor = 'rgba(15, 23, 42, 0.7)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        color: 'var(--text-main)',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {card.value}
                    </span>
                    <div style={{ opacity: 0.9 }}>{card.icon}</div>
                  </div>
                  <div style={{ fontSize: '0.785rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                    {card.label}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: '0.1rem' }}>
                    {card.sub}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Clean, Compact Framed Portrait */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {/* Soft Ambient Radial Halo */}
            <div
              style={{
                position: 'absolute',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(56, 189, 248, 0.16) 0%, rgba(10, 14, 23, 0) 70%)',
                filter: 'blur(40px)',
                zIndex: 0,
                pointerEvents: 'none',
              }}
            />

            {/* Photo Container Frame (Proportional 280px max-width) */}
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                maxWidth: '280px',
                borderRadius: '22px',
                padding: '6px',
                background: 'linear-gradient(145deg, rgba(56, 189, 248, 0.3) 0%, rgba(30, 41, 59, 0.6) 50%, rgba(56, 189, 248, 0.12) 100%)',
                boxShadow: '0 20px 45px -12px rgba(0, 0, 0, 0.85), 0 0 30px -8px rgba(56, 189, 248, 0.18)',
                transition: 'all 0.35s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 25px 55px -12px rgba(0, 0, 0, 0.9), 0 0 40px -5px rgba(56, 189, 248, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 20px 45px -12px rgba(0, 0, 0, 0.85), 0 0 30px -8px rgba(56, 189, 248, 0.18)';
              }}
            >
              <div
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  backgroundColor: '#0f172a',
                  aspectRatio: '4 / 5',
                }}
              >
                <img
                  src={personal.avatarUrl}
                  alt={personal.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.03)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />

                {/* Soft Vignette Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    boxShadow: 'inset 0 0 30px rgba(10, 14, 23, 0.3)',
                    pointerEvents: 'none',
                  }}
                />
              </div>

              {/* Top-Right Floating Institution Chip */}
              <div
                style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  padding: '0.35rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'rgba(15, 23, 42, 0.92)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--text-main)',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent)',
                    display: 'inline-block',
                  }}
                />
                <span>SKCET • IT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
