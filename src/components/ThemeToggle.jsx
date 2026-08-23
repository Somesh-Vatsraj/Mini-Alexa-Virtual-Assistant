import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button onClick={toggleTheme} aria-label="Toggle Theme" style={{ background: 'transparent', boxShadow: 'none' }}>
      {theme === 'dark' ? <FiSun size={20} color="#f8fafc" /> : <FiMoon size={20} color="#0f172a" />}
    </button>
  );
};
