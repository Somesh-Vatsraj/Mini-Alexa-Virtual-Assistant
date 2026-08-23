import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiGrid, FiSmile, FiActivity, FiHelpCircle } from 'react-icons/fi';

export const BottomNav = () => {
  const navStyle = ({ isActive }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.2rem',
    color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
    textDecoration: 'none',
    fontSize: '0.7rem',
    fontWeight: '500'
  });

  return (
    <nav className="mobile-bottom-nav">
      <NavLink to="/" style={navStyle} end><FiHome size={20} /> Home</NavLink>
      <NavLink to="/calculator" style={navStyle}><FiGrid size={20} /> Calc</NavLink>
      <NavLink to="/games" style={navStyle}><FiSmile size={20} /> Games</NavLink>
      <NavLink to="/activities" style={navStyle}><FiActivity size={20} /> Activities</NavLink>
      <NavLink to="/sos" style={navStyle}><FiHelpCircle size={20} /> SOS</NavLink>
    </nav>
  );
};
