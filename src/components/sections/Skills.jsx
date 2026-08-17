import React, { useState } from 'react';
import { Layout, Server, Database, Terminal, CheckCircle } from 'lucide-react';
import { skillsData } from '../../data/portfolioData';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'Frontend Engineering', label: 'Frontend' },
    { id: 'Backend & Systems', label: 'Backend & APIs' },
    { id: 'Databases & Cloud', label: 'Databases & Cloud' },
    { id: 'Core CS & Practices', label: 'Core CS & Practices' }
  ];

  const filteredCategories =
    activeCategory === 'all'
      ? skillsData
      : skillsData.filter((cat) => cat.category === activeCategory);

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Layout':
        return <Layout size={22} color="var(--cyan-primary)" />;
      case 'Server':
        return <Server size={22} color="var(--indigo-primary)" />;
      case 'Database':
        return <Database size={22} color="#38bdf8" />;
      default:
        return <Terminal size={22} color="#34d399" />;
    }
  };

  return (
    <section id="skills" className="section-wrapper" style={{ backgroundColor: '#070b14' }}>
      <div className="container">
        <SectionHeading
          pill="Capabilities"
          title="Technical"
          highlight="Expertise & Skills"
          subtitle="A comprehensive overview of my development stack, frameworks, and software engineering competencies."
        />

        {/* Category Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.6rem',
            marginBottom: '3rem'
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.6rem 1.25rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  border: isActive
                    ? '1px solid var(--cyan-primary)'
                    : '1px solid var(--border-subtle)',
                  background: isActive
                    ? 'rgba(6, 182, 212, 0.15)'
                    : 'rgba(255, 255, 255, 0.04)',
                  color: isActive ? '#ffffff' : 'var(--text-muted)',
                  boxShadow: isActive ? '0 0 15px var(--cyan-glow)' : 'none'
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Category Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {filteredCategories.map((cat) => (
            <div
              key={cat.category}
              className="glass-card"
              style={{
                padding: '2rem',
                borderRadius: '1.25rem',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Category Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  {getCategoryIcon(cat.icon)}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>
                    {cat.category}
                  </h3>
                </div>
              </div>

              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                  marginBottom: '1.75rem',
                  lineHeight: 1.5
                }}
              >
                {cat.description}
              </p>

              {/* Skills List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: 'auto' }}>
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '0.4rem'
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.925rem',
                          fontWeight: 600,
                          color: 'var(--text-main)'
                        }}
                      >
                        {skill.name}
                      </span>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--cyan-primary)',
                          fontWeight: 600,
                          background: 'rgba(6, 182, 212, 0.1)',
                          padding: '0.15rem 0.5rem',
                          borderRadius: '4px'
                        }}
                      >
                        {skill.tag}
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div
                      style={{
                        width: '100%',
                        height: '6px',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        borderRadius: '3px',
                        overflow: 'hidden'
                      }}
                    >
                      <div
                        style={{
                          width: `${skill.level}%`,
                          height: '100%',
                          background: 'var(--grad-cyan-indigo)',
                          borderRadius: '3px',
                          boxShadow: '0 0 8px var(--cyan-primary)'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
