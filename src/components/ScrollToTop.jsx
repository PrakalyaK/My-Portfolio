import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 40,
        width: '46px',
        height: '46px',
        borderRadius: '50%',
        backgroundColor: 'var(--bg-surface-elevated)',
        border: '1px solid var(--border-medium)',
        color: 'var(--accent)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--accent)';
        e.currentTarget.style.color = '#0a0e17';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--bg-surface-elevated)';
        e.currentTarget.style.color = 'var(--accent)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <ChevronUp size={22} />
    </button>
  );
}
