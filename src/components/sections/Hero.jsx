import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  MessageSquare,
  Mail,
  Code2,
  Atom,
  Server,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import Button from '../common/Button';

export default function Hero({ onNotify }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  const roles = personalInfo.roles;

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setTypingSpeed(50);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText((prev) => currentRole.slice(0, prev.length + 1));
        setTypingSpeed(110);
      }, typingSpeed);
    }

    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setTypingSpeed(300);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles, typingSpeed]);

  const handleDownloadCV = () => {
    if (onNotify) {
      onNotify('Resume download initiated! Thank you for reviewing my profile.', 'success');
    }
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '7rem',
        paddingBottom: '4rem',
        overflow: 'hidden'
      }}
    >
      {/* Background Ambient Glows */}
      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Hero Content */}
          <div className="animate-fade-in-up">
            {/* Availability Badge */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div className="badge-status">
                <span className="status-dot" />
                <span>{personalInfo.statusText}</span>
              </div>
            </div>

            {/* Greeting & Name */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: '1rem',
                letterSpacing: '-0.03em'
              }}
            >
              Hello, I'm <br />
              <span className="text-gradient">{personalInfo.name}</span>
            </h1>

            {/* Dynamic Typewriter Role */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                minHeight: '2.5rem',
                marginBottom: '1.25rem'
              }}
            >
              <h2
                style={{
                  fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                  fontWeight: 600,
                  color: 'var(--text-muted)'
                }}
              >
                A <span style={{ color: 'var(--cyan-primary)', fontWeight: 700 }}>{displayText}</span>
                <span className="cursor-blink" />
              </h2>
            </div>

            {/* Short Bio */}
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-muted)',
                marginBottom: '2rem',
                maxWidth: '540px',
                lineHeight: 1.7
              }}
            >
              {personalInfo.bioIntro} Specialized in developing modern web applications with{' '}
              <strong style={{ color: '#ffffff' }}>React</strong>, <strong style={{ color: '#ffffff' }}>Node.js</strong>, and robust engineering principles.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2.5rem'
              }}
            >
              <Button variant="primary" size="lg" href="#projects" icon={ArrowRight}>
                Explore Projects
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href={personalInfo.resumeUrl}
                download="Surendhar_N_D_Resume.pdf"
                onClick={handleDownloadCV}
                icon={Download}
              >
                Download CV
              </Button>
            </div>

            {/* Social Quick Bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-faint)', fontWeight: 500 }}>
                Connect with me:
              </span>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  style={{
                    width: '38px',
                    height: '38px',
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
                  <Github size={17} />
                </a>

                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  style={{
                    width: '38px',
                    height: '38px',
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
                    e.currentTarget.style.borderColor = 'var(--indigo-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-muted)';
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  }}
                >
                  <Linkedin size={17} />
                </a>

                <a
                  href={personalInfo.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  style={{
                    width: '38px',
                    height: '38px',
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
                    e.currentTarget.style.color = '#34d399';
                    e.currentTarget.style.borderColor = '#10b981';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-muted)';
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  }}
                >
                  <MessageSquare size={17} />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email"
                  style={{
                    width: '38px',
                    height: '38px',
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
                    e.currentTarget.style.color = 'var(--cyan-primary)';
                    e.currentTarget.style.borderColor = 'var(--cyan-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-muted)';
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  }}
                >
                  <Mail size={17} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Profile Visual */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '420px'
              }}
            >
              {/* Outer Glow Ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-10px',
                  borderRadius: '2rem',
                  background: 'var(--grad-cyan-indigo)',
                  opacity: 0.35,
                  filter: 'blur(24px)',
                  zIndex: 0
                }}
              />

              {/* Profile Card Frame */}
              <div
                className="glass-card"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  borderRadius: '1.75rem',
                  overflow: 'hidden',
                  padding: '1.25rem',
                  background: 'linear-gradient(160deg, rgba(20, 30, 50, 0.85) 0%, rgba(10, 15, 26, 0.95) 100%)',
                  border: '1px solid rgba(6, 182, 212, 0.3)'
                }}
              >
                <div
                  style={{
                    borderRadius: '1.25rem',
                    overflow: 'hidden',
                    backgroundColor: '#0a101d',
                    position: 'relative',
                    aspectRatio: '1 / 1.15',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      transition: 'transform 0.4s ease'
                    }}
                    onError={(e) => {
                      e.currentTarget.src = personalInfo.aboutImage;
                    }}
                  />
                </div>
              </div>

              {/* Floating Badge 1 - React */}
              <div
                className="animate-float"
                style={{
                  position: 'absolute',
                  top: '12%',
                  left: '-25px',
                  zIndex: 2,
                  background: 'rgba(15, 23, 42, 0.9)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(6, 182, 212, 0.4)',
                  borderRadius: '12px',
                  padding: '0.6rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.6), 0 0 15px var(--cyan-glow)'
                }}
              >
                <Atom size={20} color="#06b6d4" />
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f8fafc' }}>
                  React.js
                </span>
              </div>

              {/* Floating Badge 2 - Node.js */}
              <div
                className="animate-float-reverse"
                style={{
                  position: 'absolute',
                  bottom: '15%',
                  right: '-25px',
                  zIndex: 2,
                  background: 'rgba(15, 23, 42, 0.9)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(99, 102, 241, 0.4)',
                  borderRadius: '12px',
                  padding: '0.6rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.6), 0 0 15px var(--indigo-glow)'
                }}
              >
                <Server size={20} color="#818cf8" />
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f8fafc' }}>
                  Node.js & APIs
                </span>
              </div>

              {/* Floating Badge 3 - Full Stack */}
              <div
                className="animate-float"
                style={{
                  position: 'absolute',
                  bottom: '-18px',
                  left: '15%',
                  zIndex: 2,
                  background: 'rgba(15, 23, 42, 0.92)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  borderRadius: '12px',
                  padding: '0.5rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.6)'
                }}
              >
                <Sparkles size={16} color="#34d399" />
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#34d399' }}>
                  Full Stack Architecture
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
