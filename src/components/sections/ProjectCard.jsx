import React from 'react';
import { ExternalLink, Github, Eye, Sparkles } from 'lucide-react';
import Badge from '../common/Badge';

export default function ProjectCard({ project, onOpenModal }) {
  return (
    <div
      className="glass-card"
      style={{
        borderRadius: '1.25rem',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        border: '1px solid var(--border-subtle)',
        transition: 'all 0.3s ease'
      }}
    >
      {/* Thumbnail Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',
          backgroundColor: '#0c1322',
          overflow: 'hidden'
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
            display: 'block'
          }}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />

        {/* Fallback Graphic if image fails */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 0
          }}
        >
          <Sparkles size={32} color="var(--cyan-primary)" opacity={0.6} />
        </div>

        {/* Top Floating Category Badge */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            zIndex: 2
          }}
        >
          <span
            style={{
              padding: '0.25rem 0.7rem',
              borderRadius: '9999px',
              background: 'rgba(8, 12, 20, 0.85)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              color: 'var(--cyan-primary)',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              backdropFilter: 'blur(8px)'
            }}
          >
            {project.category}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div
        style={{
          padding: '1.75rem',
          display: 'flex',
          flexDirection: 'column',
          flex: 1
        }}
      >
        <h3
          style={{
            fontSize: '1.3rem',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '0.6rem',
            letterSpacing: '-0.02em'
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontSize: '0.9rem',
            color: 'var(--text-muted)',
            lineHeight: 1.6,
            marginBottom: '1.5rem',
            flex: 1
          }}
        >
          {project.shortDesc}
        </p>

        {/* Tech Stack Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.4rem',
            marginBottom: '1.75rem'
          }}
        >
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                padding: '0.2rem 0.55rem',
                borderRadius: '6px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                color: '#cbd5e1'
              }}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span
              style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                padding: '0.2rem 0.45rem',
                borderRadius: '6px',
                background: 'rgba(6, 182, 212, 0.1)',
                color: 'var(--cyan-primary)'
              }}
            >
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
            paddingTop: '1rem',
            borderTop: '1px solid var(--border-subtle)'
          }}
        >
          <button
            type="button"
            onClick={() => onOpenModal(project)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'transparent',
              border: 'none',
              color: 'var(--cyan-primary)',
              fontSize: '0.875rem',
              fontWeight: 600,
              cursor: 'pointer',
              padding: '0.3rem 0'
            }}
          >
            <Eye size={16} />
            <span>Details</span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Source code for ${project.title}`}
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-muted)',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.borderColor = 'var(--cyan-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                }}
              >
                <Github size={16} />
              </a>
            )}

            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '8px',
                  background: 'var(--grad-cyan-indigo)',
                  color: '#ffffff',
                  fontSize: '0.825rem',
                  fontWeight: 600,
                  boxShadow: '0 2px 10px rgba(6, 182, 212, 0.3)'
                }}
              >
                <span>Live</span>
                <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
