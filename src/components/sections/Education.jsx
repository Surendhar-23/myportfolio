import React, { useState } from 'react';
import {
  GraduationCap,
  Briefcase,
  Calendar,
  MapPin,
  Award,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import {
  educationData,
  experienceHighlights,
  certificationsData
} from '../../data/portfolioData';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';

export default function Education() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="education" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        <SectionHeading
          pill="Career & Academics"
          title="Experience,"
          highlight="Education & Certifications"
          subtitle="My professional engineering journey at ComplianceCow, academic distinction, and verified credentials."
        />

        {/* 3-Track Toggle */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '3.5rem'
          }}
        >
          <button
            type="button"
            onClick={() => setActiveTab('experience')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.75rem',
              fontSize: '0.925rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              border:
                activeTab === 'experience'
                  ? '1px solid var(--cyan-primary)'
                  : '1px solid var(--border-subtle)',
              background:
                activeTab === 'experience'
                  ? 'rgba(6, 182, 212, 0.15)'
                  : 'rgba(255, 255, 255, 0.04)',
              color: activeTab === 'experience' ? '#ffffff' : 'var(--text-muted)',
              boxShadow: activeTab === 'experience' ? '0 0 20px var(--cyan-glow)' : 'none'
            }}
          >
            <Briefcase size={18} color={activeTab === 'experience' ? 'var(--cyan-primary)' : 'currentColor'} />
            <span>Work Experience</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('education')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.75rem',
              fontSize: '0.925rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              border:
                activeTab === 'education'
                  ? '1px solid var(--indigo-primary)'
                  : '1px solid var(--border-subtle)',
              background:
                activeTab === 'education'
                  ? 'rgba(99, 102, 241, 0.15)'
                  : 'rgba(255, 255, 255, 0.04)',
              color: activeTab === 'education' ? '#ffffff' : 'var(--text-muted)',
              boxShadow: activeTab === 'education' ? '0 0 20px var(--indigo-glow)' : 'none'
            }}
          >
            <GraduationCap size={18} color={activeTab === 'education' ? 'var(--indigo-primary)' : 'currentColor'} />
            <span>Academic Education</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('certifications')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.75rem',
              fontSize: '0.925rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              border:
                activeTab === 'certifications'
                  ? '1px solid #10b981'
                  : '1px solid var(--border-subtle)',
              background:
                activeTab === 'certifications'
                  ? 'rgba(16, 185, 129, 0.15)'
                  : 'rgba(255, 255, 255, 0.04)',
              color: activeTab === 'certifications' ? '#ffffff' : 'var(--text-muted)',
              boxShadow: activeTab === 'certifications' ? '0 0 20px rgba(16, 185, 129, 0.3)' : 'none'
            }}
          >
            <Award size={18} color={activeTab === 'certifications' ? '#34d399' : 'currentColor'} />
            <span>Certifications ({certificationsData.length}+)</span>
          </button>
        </div>

        {/* Tab 1: Experience */}
        {activeTab === 'experience' && (
          <div style={{ maxWidth: '840px', margin: '0 auto', position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                top: '10px',
                bottom: '10px',
                left: '24px',
                width: '2px',
                background: 'linear-gradient(180deg, var(--cyan-primary) 0%, var(--indigo-primary) 100%)',
                opacity: 0.4
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {experienceHighlights.map((exp, idx) => (
                <div
                  key={idx}
                  className="animate-fade-in-up"
                  style={{
                    display: 'flex',
                    gap: '2rem',
                    position: 'relative'
                  }}
                >
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: '#090e1a',
                      border: '2px solid var(--cyan-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      zIndex: 2,
                      boxShadow: '0 0 15px var(--cyan-glow)'
                    }}
                  >
                    <Briefcase size={20} color="var(--cyan-primary)" />
                  </div>

                  <div
                    className="glass-card"
                    style={{
                      flex: 1,
                      padding: '1.75rem',
                      borderRadius: '1rem',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        flexWrap: 'wrap',
                        gap: '0.75rem',
                        marginBottom: '0.75rem'
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff' }}>
                            {exp.role}
                          </h3>
                          {exp.type && (
                            <span
                              style={{
                                fontSize: '0.75rem',
                                padding: '0.2rem 0.5rem',
                                borderRadius: '4px',
                                background: 'rgba(6, 182, 212, 0.12)',
                                color: 'var(--cyan-primary)',
                                fontWeight: 600
                              }}
                            >
                              {exp.type}
                            </span>
                          )}
                        </div>
                        <div
                          style={{
                            fontSize: '1rem',
                            color: 'var(--cyan-primary)',
                            fontWeight: 600,
                            marginTop: '0.2rem'
                          }}
                        >
                          {exp.company}
                        </div>
                      </div>

                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          padding: '0.3rem 0.75rem',
                          background: 'rgba(6, 182, 212, 0.1)',
                          border: '1px solid rgba(6, 182, 212, 0.25)',
                          borderRadius: '9999px',
                          color: 'var(--cyan-primary)',
                          fontSize: '0.8rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 600
                        }}
                      >
                        <Calendar size={13} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--text-muted)',
                        fontSize: '0.875rem',
                        marginBottom: '1rem'
                      }}
                    >
                      <MapPin size={15} color="var(--text-faint)" />
                      <span>{exp.location}</span>
                    </div>

                    <p
                      style={{
                        color: 'var(--text-muted)',
                        fontSize: '0.9rem',
                        marginBottom: '1.25rem',
                        lineHeight: 1.6
                      }}
                    >
                      {exp.description}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {exp.deliverables.map((item, i) => (
                        <div
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.6rem',
                            fontSize: '0.85rem',
                            color: '#cbd5e1'
                          }}
                        >
                          <CheckCircle2 size={15} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Education */}
        {activeTab === 'education' && (
          <div style={{ maxWidth: '840px', margin: '0 auto', position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                top: '10px',
                bottom: '10px',
                left: '24px',
                width: '2px',
                background: 'linear-gradient(180deg, var(--indigo-primary) 0%, var(--cyan-primary) 100%)',
                opacity: 0.4
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {educationData.map((edu) => (
                <div
                  key={edu.id}
                  className="animate-fade-in-up"
                  style={{
                    display: 'flex',
                    gap: '2rem',
                    position: 'relative'
                  }}
                >
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: '#090e1a',
                      border: '2px solid var(--indigo-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      zIndex: 2,
                      boxShadow: '0 0 15px var(--indigo-glow)'
                    }}
                  >
                    <GraduationCap size={20} color="var(--indigo-primary)" />
                  </div>

                  <div
                    className="glass-card"
                    style={{
                      flex: 1,
                      padding: '1.75rem',
                      borderRadius: '1rem',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        flexWrap: 'wrap',
                        gap: '0.75rem',
                        marginBottom: '0.75rem'
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>
                            {edu.degree}
                          </h3>
                          {edu.grade && (
                            <span
                              style={{
                                fontSize: '0.8rem',
                                padding: '0.2rem 0.6rem',
                                borderRadius: '9999px',
                                background: 'rgba(16, 185, 129, 0.15)',
                                color: '#34d399',
                                fontWeight: 700,
                                fontFamily: 'var(--font-mono)'
                              }}
                            >
                              {edu.grade}
                            </span>
                          )}
                        </div>
                        <div
                          style={{
                            fontSize: '0.95rem',
                            color: 'var(--indigo-hover)',
                            fontWeight: 600,
                            marginTop: '0.2rem'
                          }}
                        >
                          {edu.field}
                        </div>
                      </div>

                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          padding: '0.3rem 0.75rem',
                          background: 'rgba(99, 102, 241, 0.1)',
                          border: '1px solid rgba(99, 102, 241, 0.25)',
                          borderRadius: '9999px',
                          color: 'var(--indigo-hover)',
                          fontSize: '0.8rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 600
                        }}
                      >
                        <Calendar size={13} />
                        <span>{edu.duration}</span>
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--text-muted)',
                        fontSize: '0.875rem',
                        marginBottom: '1rem'
                      }}
                    >
                      <MapPin size={15} color="var(--text-faint)" />
                      <span>{edu.institution} &bull; {edu.location}</span>
                    </div>

                    <p
                      style={{
                        color: 'var(--text-muted)',
                        fontSize: '0.9rem',
                        marginBottom: '1.25rem',
                        lineHeight: 1.6
                      }}
                    >
                      {edu.description}
                    </p>

                    {edu.highlights && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {edu.highlights.map((h, i) => (
                          <div
                            key={i}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                              fontSize: '0.85rem',
                              color: '#cbd5e1'
                            }}
                          >
                            <ChevronRight size={14} color="var(--indigo-primary)" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Certifications */}
        {activeTab === 'certifications' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              maxWidth: '960px',
              margin: '0 auto'
            }}
          >
            {certificationsData.map((cert, idx) => (
              <div
                key={idx}
                className="glass-card animate-fade-in-up"
                style={{
                  padding: '1.75rem',
                  borderRadius: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1rem'
                    }}
                  >
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        background: 'rgba(16, 185, 129, 0.1)',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#34d399'
                      }}
                    >
                      <Award size={20} />
                    </div>

                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '9999px',
                        background: 'rgba(6, 182, 212, 0.12)',
                        border: '1px solid rgba(6, 182, 212, 0.3)',
                        color: 'var(--cyan-primary)',
                        fontWeight: 600
                      }}
                    >
                      {cert.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
                    {cert.title}
                  </h3>

                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                    {cert.issuer} &bull; <span style={{ color: 'var(--text-faint)' }}>{cert.date}</span>
                  </div>

                  <div
                    style={{
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-faint)',
                      wordBreak: 'break-all',
                      marginBottom: '1.25rem'
                    }}
                  >
                    ID: {cert.credentialId}
                  </div>
                </div>

                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--cyan-primary)',
                    marginTop: 'auto',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid var(--border-subtle)'
                  }}
                >
                  <span>Verify Credential</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
