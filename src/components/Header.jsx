import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { FiCpu } from 'react-icons/fi';

export const Header = () => {
  return (
    <header className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '0', borderLeft: 'none', borderRight: 'none', borderTop: 'none', padding: '1rem 2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <FiCpu size={28} color="var(--accent-primary)" />
        <h2 style={{ fontSize: '1.2rem', fontWeight: '700' }}>Mini Alexa</h2>
      </div>
      <ThemeToggle />
    </header>
  );
};
