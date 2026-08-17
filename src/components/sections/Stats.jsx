import React from 'react';
import { Code2, FolderCheck, Cpu, Award, Zap } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export default function Stats() {
  const getStatIcon = (index) => {
    switch (index) {
      case 0:
        return <Code2 size={24} color="var(--cyan-primary)" />;
      case 1:
        return <FolderCheck size={24} color="var(--indigo-primary)" />;
      case 2:
        return <Cpu size={24} color="#38bdf8" />;
      default:
        return <Award size={24} color="#34d399" />;
    }
  };

  return (
    <section style={{ padding: '2rem 0', position: 'relative', zIndex: 2 }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="glass-card"
              style={{
                padding: '1.75rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                borderRadius: '1rem',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                {getStatIcon(idx)}
              </div>
              <div>
                <div
                  style={{
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  <span className="text-gradient-cyan">{stat.value}</span>
                </div>
                <div
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--text-main)',
                    marginTop: '0.25rem'
                  }}
                >
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.775rem', color: 'var(--text-faint)' }}>
                  {stat.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
