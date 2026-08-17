import React from 'react';
import { ExternalLink, Github, CheckCircle2, Layers, Cpu } from 'lucide-react';
import Modal from '../common/Modal';
import Button from '../common/Button';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title} maxWidth="820px">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
        {/* Project Preview Image */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16 / 9',
            borderRadius: '0.75rem',
            overflow: 'hidden',
            backgroundColor: '#0a0f1d',
            border: '1px solid var(--border-subtle)'
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        {/* Overview & Architecture */}
        <div>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.6rem' }}>
            Project Overview
          </h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
            {project.longDesc || project.shortDesc}
          </p>
        </div>

        {/* Architecture Note */}
        {project.architecture && (
          <div
            style={{
              padding: '1rem 1.25rem',
              background: 'rgba(6, 182, 212, 0.08)',
              border: '1px solid rgba(6, 182, 212, 0.25)',
              borderRadius: '0.75rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem'
            }}
          >
            <Cpu size={20} color="var(--cyan-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--cyan-primary)' }}>
                Architecture & Implementation
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-main)', marginTop: '0.2rem' }}>
                {project.architecture}
              </div>
            </div>
          </div>
        )}

        {/* Key Features */}
        {project.highlights && (
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem' }}>
              Key Features & Capabilities
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem' }}>
              {project.highlights.map((feature, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.6rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '8px',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <CheckCircle2 size={16} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-main)' }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies Used */}
        <div>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem' }}>
            Technologies & Tools
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '6px',
                  background: 'rgba(99, 102, 241, 0.1)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  color: 'var(--indigo-hover)',
                  fontWeight: 500
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            paddingTop: '1rem',
            borderTop: '1px solid var(--border-subtle)',
            flexWrap: 'wrap'
          }}
        >
          {project.liveUrl && project.liveUrl !== '#' && (
            <Button
              variant="primary"
              size="md"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={ExternalLink}
            >
              Launch Live Application
            </Button>
          )}

          {project.githubUrl && (
            <Button
              variant="secondary"
              size="md"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={Github}
            >
              View GitHub Repository
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
}
