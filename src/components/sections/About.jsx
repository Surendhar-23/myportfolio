import React from 'react';
import {
  Download,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  Award,
  CheckCircle2,
  UserCheck
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

export default function About({ onNotify }) {
  const handleDownload = () => {
    if (onNotify) {
      onNotify('Resume downloaded successfully!', 'success');
    }
  };

  const infoItems = [
    { label: 'Current Role', value: 'Software Developer @ ComplianceCow', icon: Briefcase },
    { label: 'Education', value: 'B.E. CSE (CGPA: 8.49) - K.S.R College', icon: GraduationCap },
    { label: 'Top Credential', value: 'Neo4j & Meta Certified, NPTEL Top 1%', icon: Award },
    { label: 'Location', value: personalInfo.location, icon: MapPin },
    { label: 'Email', value: personalInfo.email, icon: Mail },
    { label: 'Phone', value: personalInfo.phoneFormatted, icon: Phone }
  ];

  return (
    <section id="about" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        <SectionHeading
          pill="Background"
          title="About"
          highlight="My Journey"
          subtitle="Software Developer at ComplianceCow crafting autonomous security workflows and modern web experiences."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}
        >
          {/* About Image Frame */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '420px'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: '-10px',
                  borderRadius: '1.5rem',
                  background: 'var(--grad-cyan-indigo)',
                  opacity: 0.25,
                  filter: 'blur(20px)',
                  zIndex: 0
                }}
              />
              <div
                className="glass-card"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  padding: '1rem',
                  borderRadius: '1.5rem',
                  overflow: 'hidden',
                  background: 'linear-gradient(160deg, rgba(20, 30, 50, 0.85) 0%, rgba(10, 15, 26, 0.95) 100%)',
                  border: '1px solid rgba(6, 182, 212, 0.3)'
                }}
              >
                <img
                  src={personalInfo.aboutImage}
                  alt={personalInfo.name}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '1rem',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  onError={(e) => {
                    e.currentTarget.src = personalInfo.profileImage;
                  }}
                />
              </div>

              {/* Float Tag */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-15px',
                  right: '15px',
                  zIndex: 2,
                  background: 'rgba(15, 23, 42, 0.95)',
                  border: '1px solid rgba(6, 182, 212, 0.4)',
                  borderRadius: '12px',
                  padding: '0.6rem 1.25rem',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.7)'
                }}
              >
                <div style={{ fontSize: '0.75rem', color: 'var(--cyan-primary)', fontWeight: 600 }}>
                  Current Position
                </div>
                <div style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 700 }}>
                  ComplianceCow &bull; Software Dev
                </div>
              </div>
            </div>
          </div>

          {/* Narrative & Details */}
          <div>
            <h3
              style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '1rem',
                letterSpacing: '-0.02em'
              }}
            >
              Engineering Full-Stack Systems & Autonomous Compliance
            </h3>

            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-muted)',
                marginBottom: '1.5rem',
                lineHeight: 1.7
              }}
            >
              {personalInfo.bioFull}
            </p>

            {/* Quick Info Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1rem',
                marginBottom: '2rem'
              }}
            >
              {infoItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.label}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '10px',
                      padding: '0.85rem 1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.85rem'
                    }}
                  >
                    <div
                      style={{
                        color: 'var(--cyan-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-faint)', textTransform: 'uppercase' }}>
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          color: 'var(--text-main)',
                          wordBreak: 'break-word'
                        }}
                      >
                        {item.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button
                variant="primary"
                size="md"
                href={personalInfo.resumeUrl}
                download="Surendhar_N_D_Resume.pdf"
                onClick={handleDownload}
                icon={Download}
              >
                Download Curriculum Vitae
              </Button>

              <Button variant="secondary" size="md" href="#contact">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
