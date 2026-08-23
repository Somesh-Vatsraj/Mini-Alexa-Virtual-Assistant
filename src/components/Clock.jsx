import React, { useState, useEffect } from 'react';
import { FiClock, FiCalendar } from 'react-icons/fi';

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid-cols-2" style={{ marginBottom: '1.5rem' }}>
      <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <FiClock size={32} color="var(--accent-primary)" />
        <div>
          <h3 style={{ fontSize: '1.5rem', fontFamily: 'monospace' }}>{time.toLocaleTimeString()}</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Live Digital Clock</p>
        </div>
      </div>
      <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <FiCalendar size={32} color="var(--accent-secondary)" />
        <div>
          <h3 style={{ fontSize: '1.2rem' }}>{time.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })}</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Current Date</p>
        </div>
      </div>
    </div>
  );
};
