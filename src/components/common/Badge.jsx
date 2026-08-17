import React from 'react';

export default function Badge({
  children,
  variant = 'default',
  icon: Icon,
  className = ''
}) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'cyan':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
      case 'indigo':
        return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30';
      case 'emerald':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'amber':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'outline':
        return 'bg-transparent text-slate-300 border-slate-700';
      default:
        return 'bg-slate-800/80 text-slate-300 border-slate-700/60';
    }
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium rounded-full border transition-all hover:border-cyan-500/50 ${getVariantStyles()} ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.35rem',
        padding: '0.25rem 0.65rem',
        fontSize: '0.75rem',
        fontFamily: 'var(--font-mono)',
        borderRadius: '9999px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        background: 'rgba(15, 23, 42, 0.6)',
        color: '#cbd5e1'
      }}
    >
      {Icon && <Icon size={13} style={{ color: 'var(--cyan-primary)' }} />}
      {children}
    </span>
  );
}
