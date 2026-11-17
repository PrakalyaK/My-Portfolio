import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'DSA', href: '#dsa' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'dsa', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: 'var(--nav-height)',
        display: 'flex',
        alignItems: 'center',
        transition: 'background-color 0.25s ease, border-color 0.25s ease, backdrop-filter 0.25s ease',
        backgroundColor: isScrolled ? 'rgba(10, 14, 23, 0.92)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={closeMenu}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontWeight: 700,
            fontSize: '1.25rem',
            letterSpacing: '-0.02em',
            color: 'var(--text-main)',
          }}
        >
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '8px',
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent)',
              fontSize: '0.9rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 800,
            }}
          >
            PK
          </div>
          <span>
            {portfolioData.personal.name}
            <span style={{ color: 'var(--accent)' }}>.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.75rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                  position: 'relative',
                  padding: '0.25rem 0',
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: 0,
                      width: '100%',
                      height: '2px',
                      backgroundColor: 'var(--accent)',
                      borderRadius: '2px',
                    }}
                  />
                )}
              </a>
            );
          })}

          <a
            href={portfolioData.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="btn btn-primary btn-sm"
            style={{ textDecoration: 'none' }}
          >
            <FileDown size={15} />
            <span>Resume</span>
          </a>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          className="mobile-nav-toggle"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-main)',
          }}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'var(--nav-height)',
            left: 0,
            right: 0,
            backgroundColor: 'var(--bg-surface)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                style={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: isActive ? 'var(--accent)' : 'var(--text-main)',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                {link.label}
              </a>
            );
          })}

          <a
            href={portfolioData.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            onClick={closeMenu}
            className="btn btn-primary"
            style={{ marginTop: '0.5rem', width: '100%' }}
          >
            <FileDown size={18} />
            <span>Download Resume</span>
          </a>
        </div>
      )}

      {/* Inline styles for responsive breakpoint */}
      <style>{`
        @media (min-width: 860px) {
          .desktop-nav { display: flex !important; }
          .mobile-nav-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
