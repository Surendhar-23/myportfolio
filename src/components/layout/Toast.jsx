import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ message, type = 'success', onClose, duration = 3500 }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, onClose, duration]);

  if (!message) return null;

  const getIcon = () => {
    switch (type) {
      case 'error':
        return <AlertCircle size={20} color="#f87171" />;
      case 'info':
        return <Info size={20} color="var(--cyan-primary)" />;
      default:
        return <CheckCircle2 size={20} color="#34d399" />;
    }
  };

  return (
    <div
      className="animate-slide-down"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 1100,
        backgroundColor: '#0c1322',
        border: '1px solid rgba(6, 182, 212, 0.4)',
        borderRadius: '0.75rem',
        padding: '0.85rem 1.25rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(6, 182, 212, 0.25)',
        backdropFilter: 'blur(12px)',
        color: '#f8fafc',
        fontSize: '0.9rem',
        maxWidth: '400px'
      }}
    >
      {getIcon()}
      <span style={{ flex: 1 }}>{message}</span>
      <button
        type="button"
        onClick={onClose}
        style={{
          background: 'transparent',
          border: 'none',
          color: 'var(--text-muted)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.2rem'
        }}
      >
        <X size={16} />
      </button>
    </div>
  );
}
