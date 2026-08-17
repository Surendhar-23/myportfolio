import React from 'react';

export default function SectionHeading({
  pill,
  title,
  highlight,
  subtitle,
  alignment = 'center',
  className = ''
}) {
  const isCenter = alignment === 'center';

  return (
    <div className={`section-header ${isCenter ? '' : 'text-left'} ${className}`}>
      {pill && (
        <div className="section-pill animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          <span>{pill}</span>
        </div>
      )}
      <h2 className="section-title">
        {title}{' '}
        {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
