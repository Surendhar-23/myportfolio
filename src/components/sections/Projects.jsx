import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Sparkles, CheckCircle2, Shield, Zap, Code2, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../../data/portfolioData';
import SectionHeading from '../common/SectionHeading';
import ProjectModal from './ProjectModal';
import Button from '../common/Button';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const project = projectsData[0]; // Flagship SNDDiffX

  return (
    <section id="projects" className="section-wrapper" style={{ backgroundColor: '#070b14', position: 'relative' }}>
      <div className="container">
        <SectionHeading
          pill="Featured Project"
          title="Flagship"
          highlight="Engineering Showcase"
          subtitle="Explore SNDDiffX — a high-performance, 100% private in-browser diff checker & comparison suite."
        />

        {/* Flagship Project Showcase Container */}
        {project && (
          <div
            className="glass-card animate-fade-in-up"
            style={{
              maxWidth: '1080px',
              margin: '0 auto',
              borderRadius: '1.5rem',
              overflow: 'hidden',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              background: 'linear-gradient(165deg, rgba(15, 23, 42, 0.9) 0%, rgba(9, 14, 26, 0.95) 100%)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(6, 182, 212, 0.15)'
            }}
          >
            {/* Top Bar Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.25rem 2rem',
                borderBottom: '1px solid var(--border-subtle)',
                background: 'rgba(255, 255, 255, 0.02)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f87171' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fbbf24' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#34d399' }} />
                <span
                  style={{
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-faint)',
                    marginLeft: '0.5rem'
                  }}
                >
                  diff.surendhar.space
                </span>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.3rem 0.85rem',
                  borderRadius: '9999px',
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: '#34d399',
                  fontSize: '0.8rem',
                  fontWeight: 600
                }}
              >
                <Shield size={13} />
                <span>100% Client-Side Private</span>
              </div>
            </div>

            {/* Main Showcase Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                gap: '2.5rem',
                padding: '2.5rem'
              }}
            >
              {/* Left Column: Image Preview with Click to Live */}
              <div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    position: 'relative',
                    borderRadius: '1rem',
                    overflow: 'hidden',
                    border: '1px solid var(--border-subtle)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--cyan-primary)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      objectFit: 'cover'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '8px',
                      background: 'rgba(8, 12, 20, 0.9)',
                      border: '1px solid rgba(6, 182, 212, 0.4)',
                      color: 'var(--cyan-primary)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      backdropFilter: 'blur(8px)'
                    }}
                  >
                    <span>Click to Open Live Tool</span>
                    <ArrowUpRight size={14} />
                  </div>
                </a>

                {/* Tech Pills */}
                <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.3rem 0.7rem',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-subtle)',
                        color: '#cbd5e1'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Narrative & Key Features */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div
                    style={{
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--cyan-primary)',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      marginBottom: '0.5rem'
                    }}
                  >
                    Developer Productivity Tool
                  </div>

                  <h3
                    style={{
                      fontSize: '1.85rem',
                      fontWeight: 800,
                      color: '#ffffff',
                      marginBottom: '0.75rem',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.7,
                      marginBottom: '1.5rem'
                    }}
                  >
                    {project.shortDesc}
                  </p>

                  {/* Highlights checklist */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                    {project.highlights.slice(0, 5).map((feature, i) => (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.65rem',
                          fontSize: '0.875rem',
                          color: '#e2e8f0'
                        }}
                      >
                        <CheckCircle2 size={16} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    flexWrap: 'wrap',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid var(--border-subtle)'
                  }}
                >
                  <Button
                    variant="primary"
                    size="lg"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={ExternalLink}
                  >
                    Launch SNDDiffX
                  </Button>

                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => setSelectedProject(project)}
                    icon={Eye}
                  >
                    Deep Dive Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project Deep Dive Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
