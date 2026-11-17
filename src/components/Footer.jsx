import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-main)',
        borderTop: '1px solid var(--border-subtle)',
        padding: '3.5rem 0 2.5rem',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem',
            marginBottom: '2.5rem',
          }}
        >
          {/* Brand & Tagline */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontWeight: 700,
                fontSize: '1.25rem',
                color: 'var(--text-main)',
                marginBottom: '0.5rem',
              }}
            >
              <Code2 size={22} color="var(--accent)" />
              <span>{portfolioData.personal.name}</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '420px' }}>
              Full-Stack Developer focused on building clean, high-performance web systems and solving real problems.
            </p>
          </div>

          {/* Social Links & Back to top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent)';
                e.currentTarget.style.borderColor = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
              }}
            >
              <Github size={20} />
            </a>

            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent)';
                e.currentTarget.style.borderColor = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
              }}
            >
              <Linkedin size={20} />
            </a>

            <a
              href={`mailto:${portfolioData.personal.email}`}
              aria-label="Direct Email"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent)';
                e.currentTarget.style.borderColor = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
              }}
            >
              <Mail size={20} />
            </a>

            <button
              onClick={scrollToTop}
              className="btn btn-secondary btn-sm"
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <ArrowUp size={16} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom row: copyright */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © {currentYear} {portfolioData.personal.name}. All rights reserved.
          </div>
          <div>
            Engineered with React, modern CSS & EmailJS.
          </div>
        </div>
      </div>
    </footer>
  );
}
