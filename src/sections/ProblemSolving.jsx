import React from 'react';
import { Binary, ExternalLink, Code2, CheckCircle2, GitBranch, Cpu, Trophy, Target } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ProblemSolving() {
  const { problemSolving } = portfolioData;
  const { leetcode, github } = problemSolving;

  return (
    <section id="dsa" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Binary size={14} />
            <span>Problem Solving & Algorithms</span>
          </div>
          <h2 className="section-title">
            Algorithmic Rigor & Practice
          </h2>
          <p className="section-description">
            Strengthening core computer science principles through deliberate practice on data structures, algorithmic complexity, and efficient coding.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {/* LeetCode Card */}
          <div
            className="card-base"
            style={{
              padding: '2.25rem',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(234, 179, 8, 0.1)',
                    border: '1px solid rgba(234, 179, 8, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#eab308',
                  }}
                >
                  <Trophy size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)' }}>
                    LeetCode Practice
                  </h3>
                  <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    @PrakalyaK
                  </span>
                </div>
              </div>

              <a
                href={leetcode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                <span>Visit Profile</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Solved Stat Highlight */}
            <div
              style={{
                backgroundColor: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem 1.5rem',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'block' }}>
                  Total Problems Solved
                </span>
                <span
                  style={{
                    fontSize: '2.25rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--accent)',
                    lineHeight: 1.1,
                  }}
                >
                  {leetcode.solvedCount}
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: '0.35rem',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'rgba(234, 179, 8, 0.12)',
                    border: '1px solid rgba(234, 179, 8, 0.25)',
                    color: '#facc15',
                    fontWeight: 600,
                  }}
                >
                  {leetcode.mediumCount}
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>C++ Primary</span>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {leetcode.summary}
            </p>

            {/* Topic Breakdown Grid */}
            <div style={{ marginTop: 'auto' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.75rem' }}>
                Key Problem Domains
              </span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.65rem' }}>
                {leetcode.primaryTopics.map((topic, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '0.55rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--bg-surface-elevated)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-main)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {topic.name}
                    </span>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>
                      {topic.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* GitHub Activity & Engineering Habits */}
          <div
            className="card-base"
            style={{
              padding: '2.25rem',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                  }}
                >
                  <GitBranch size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)' }}>
                    GitHub & Open Source
                  </h3>
                  <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    @PrakalyaK
                  </span>
                </div>
              </div>

              <a
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                <span>View GitHub</span>
                <ExternalLink size={14} />
              </a>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
              {github.summary}
            </p>

            {/* Principles of Problem Solving */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: 'auto' }}>
              <div
                style={{
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  gap: '0.85rem',
                }}
              >
                <CheckCircle2 size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                    Complexity-First Thinking
                  </h4>
                  <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Always analyzing asymptotic time and space bounds before jumping into implementation.
                  </p>
                </div>
              </div>

              <div
                style={{
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  gap: '0.85rem',
                }}
              >
                <CheckCircle2 size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                    Pattern Recognition
                  </h4>
                  <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Proficiency in trees, graphs, dynamic programming, sliding window, and two-pointer paradigms.
                  </p>
                </div>
              </div>

              <div
                style={{
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  gap: '0.85rem',
                }}
              >
                <CheckCircle2 size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                    Translating DSA into Distributed Systems
                  </h4>
                  <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Applying algorithmic caching, indexing, and debounce logic directly inside production web stacks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
