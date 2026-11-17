import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, AlertTriangle } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-medium)',
          borderRadius: 'var(--radius-lg)',
          width: '100%',
          maxWidth: '750px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image / Banner */}
        <div style={{ position: 'relative', height: '220px', width: '100%', overflow: 'hidden' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, var(--bg-surface) 10%, transparent 100%)',
            }}
          />
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'rgba(10, 14, 23, 0.8)',
              border: '1px solid var(--border-subtle)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content Body */}
        <div style={{ padding: '1.75rem 2rem 2.5rem' }}>
          <h2 style={{ fontSize: '1.65rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
            {project.title}
          </h2>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '0.785rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '0.2rem 0.65rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--accent)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Problem Statement */}
          {project.details?.problemStatement && (
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                <AlertTriangle size={16} color="var(--accent)" /> Problem Statement
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.6 }}>
                {project.details.problemStatement}
              </p>
            </div>
          )}

          {/* Architecture & Implementation */}
          {project.details?.architecture && (
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                <Cpu size={16} color="var(--accent)" /> Architecture & Implementation
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.6 }}>
                {project.details.architecture}
              </p>
            </div>
          )}

          {/* Key Features */}
          {project.details?.keyFeatures && (
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                <CheckCircle2 size={16} color="var(--accent)" /> Key Capabilities
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {project.details.keyFeatures.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--accent)', marginTop: '2px' }}>•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technical Challenges */}
          {project.details?.challengesSolved && (
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                <Layers size={16} color="var(--accent)" /> Technical Challenges Solved
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {project.details.challengesSolved.map((chal, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--accent)', marginTop: '2px' }}>•</span>
                    <span>{chal}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Actions */}
          <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', flexWrap: 'wrap' }}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Github size={18} />
                <span>View Source Code</span>
              </a>
            )}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <ExternalLink size={18} />
                <span>Live Demo</span>
              </a>
            ) : (
              <button
                disabled
                className="btn btn-secondary"
                style={{ opacity: 0.6, cursor: 'not-allowed' }}
                title="Live deployment URL will be linked upon public hosting"
              >
                <ExternalLink size={18} />
                <span>Live Demo (Pending Deployment)</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
