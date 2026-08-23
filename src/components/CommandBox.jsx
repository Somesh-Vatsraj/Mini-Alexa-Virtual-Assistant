import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { handleCommand } from '../utils/commands';
import { useNavigate } from 'react-router-dom';

export const CommandBox = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const res = handleCommand(input, navigate);
    setResponse(res);
    setInput('');
  };

  return (
    <div className="glass-card" style={{ marginBottom: '1.5rem' }}>
      <form onSubmit={onSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
        <div style={{ position: 'relative', flex: 1 }}>
          <FiSearch style={{ position: 'absolute', top: '14px', left: '12px', color: 'var(--text-secondary)' }} />
          <input 
            type="text" 
            placeholder="Ask Mini Alexa (e.g., 'What time is it?', 'Open calculator')..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ width: '100%', paddingLeft: '2.5rem' }}
          />
        </div>
        <button type="submit">Ask</button>
      </form>
      {response && (
        <div style={{ marginTop: '0.75rem', padding: '0.75rem', background: 'var(--bg-secondary)', borderRadius: '8px', borderLeft: '4px solid var(--accent-primary)' }}>
          <strong>Alexa:</strong> {response}
        </div>
      )}
    </div>
  );
};
