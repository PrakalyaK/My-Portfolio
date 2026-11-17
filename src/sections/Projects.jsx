import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, Info, Sparkles, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from '../components/ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Featured Work</span>
          </div>
          <h2 className="section-title">
            Architected & Built Projects
          </h2>
          <p className="section-description">
            Each project demonstrates intentional software architecture, clean separation of concerns, and pragmatic problem-solving.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="card-base"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              {/* Card Image */}
              <div
                style={{
                  position: 'relative',
                  height: '210px',
                  width: '100%',
                  overflow: 'hidden',
                  backgroundColor: 'var(--bg-surface-elevated)',
                  cursor: 'pointer',
                }}
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '0.75rem',
                    right: '0.75rem',
                    padding: '0.35rem 0.65rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(10, 14, 23, 0.85)',
                    backdropFilter: 'blur(4px)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--accent)',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <Layers size={13} />
                  <span>Click for Architecture</span>
                </div>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                }}
              >
                {/* Title */}
                <h3
                  onClick={() => setSelectedProject(project)}
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    marginBottom: '0.75rem',
                    cursor: 'pointer',
                    lineHeight: 1.35,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-main)')}
                >
                  {project.title}
                </h3>

                {/* Short Description */}
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.925rem',
                    lineHeight: 1.6,
                    marginBottom: '1.25rem',
                    flexGrow: 1,
                  }}
                >
                  {project.shortDescription}
                </p>

                {/* Tech Stack Badges */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.45rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        padding: '0.2rem 0.55rem',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--bg-surface-elevated)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid var(--border-subtle)',
                    flexWrap: 'wrap',
                  }}
                >
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-secondary btn-sm"
                    style={{ flexGrow: 1 }}
                  >
                    <Info size={15} />
                    <span>Deep Dive</span>
                  </button>

                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Source code for ${project.title}`}
                        className="btn btn-outline btn-sm"
                        style={{ padding: '0.5rem 0.65rem' }}
                      >
                        <Github size={16} />
                      </a>
                    )}

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Live demo for ${project.title}`}
                        className="btn btn-primary btn-sm"
                        style={{ padding: '0.5rem 0.65rem' }}
                      >
                        <ExternalLink size={16} />
                      </a>
                    ) : (
                      <span
                        title="Live demo link will be attached once deployed"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '0.5rem 0.65rem',
                          borderRadius: 'var(--radius-md)',
                          backgroundColor: 'var(--bg-surface-elevated)',
                          border: '1px solid var(--border-subtle)',
                          color: 'var(--text-muted)',
                          opacity: 0.6,
                          cursor: 'not-allowed',
                        }}
                      >
                        <ExternalLink size={16} />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture Deep Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
