import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiGrid, FiHelpCircle, FiActivity, FiSmile, FiCpu } from 'react-icons/fi';

export const Sidebar = () => {
  const navStyle = ({ isActive }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.75rem 1rem',
    color: isActive ? '#fff' : 'var(--text-secondary)',
    background: isActive ? 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' : 'transparent',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '500',
    marginBottom: '0.5rem'
  });

  return (
    <aside style={{ width: '260px', background: 'var(--bg-secondary)', borderRight: '1px solid var(--border-color)', padding: '1.5rem', display: 'flex', flexDirection: 'column', minHeight: '100vh' }} className="desktop-sidebar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
        <FiCpu size={32} color="var(--accent-primary)" />
        <h2 style={{ fontSize: '1.2rem' }}>Mini Alexa</h2>
      </div>
      <nav style={{ flex: 1 }}>
        <NavLink to="/" style={navStyle} end><FiHome /> Home</NavLink>
        <NavLink to="/calculator" style={navStyle}><FiGrid /> Calculator</NavLink>
        <NavLink to="/games" style={navStyle}><FiSmile /> Number Game</NavLink>
        <NavLink to="/quotes" style={navStyle}><FiSmile /> Quotes & Facts</NavLink>
        <NavLink to="/activities" style={navStyle}><FiActivity /> Activities</NavLink>
        <NavLink to="/perceptron" style={navStyle}><FiCpu /> Perceptron Demo</NavLink>
        <NavLink to="/sos" style={navStyle}><FiHelpCircle /> SOS Help</NavLink>
      </nav>
      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
        v1.0.0 Production Ready
      </div>
    </aside>
  );
};
