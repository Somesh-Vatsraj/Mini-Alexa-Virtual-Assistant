import React, { useState } from 'react';

export const Calculator = () => {
  const [display, setDisplay] = useState('0');

  const handleAppend = (val) => {
    if (display === '0' && val !== '.') {
      setDisplay(val);
    } else {
      setDisplay(display + val);
    }
  };

  const clear = () => setDisplay('0');
  const deleteLast = () => setDisplay(display.length > 1 ? display.slice(0, -1) : '0');

  const calculate = () => {
    try {
      // Safe function evaluation wrapper for calculator
      const sanitized = display.replace(/[^0-9+\-*/().]/g, '');
      const result = Function(`'use strict'; return (${sanitized})`)();
      if (!isFinite(result)) throw new Error('Math Error');
      setDisplay(String(result));
    } catch {
      setDisplay('Error');
    }
  };

  const buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'];

  return (
    <div className="glass-card" style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h3 style={{ marginBottom: '1rem' }}>Calculator</h3>
      <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '8px', textAlign: 'right', fontSize: '1.8rem', fontFamily: 'monospace', marginBottom: '1rem', overflowX: 'auto' }}>
        {display}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
        <button onClick={clear} style={{ gridColumn: 'span 2', background: '#ef4444' }}>Clear</button>
        <button onClick={deleteLast} style={{ gridColumn: 'span 2', background: '#f59e0b' }}>Del</button>
        {buttons.map((btn, idx) => (
          <button 
            key={idx} 
            onClick={() => btn === '=' ? calculate() : handleAppend(btn)}
            style={{ padding: '1rem', fontSize: '1.1rem', background: ['/', '*', '-', '+', '='].includes(btn) ? 'var(--accent-primary)' : 'var(--bg-secondary)', color: 'var(--text-primary)' }}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};
