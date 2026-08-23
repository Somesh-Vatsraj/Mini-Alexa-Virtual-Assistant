import React, { useState } from 'react';
import { getRecommendation } from '../utils/recommendations';

export const ActivityRecommendation = () => {
  const [mood, setMood] = useState('Happy');
  const [rec, setRec] = useState(getRecommendation('Happy'));

  const handleSubmit = (e) => {
    e.preventDefault();
    setRec(getRecommendation(mood));
  };

  return (
    <div className="glass-card">
      <h3 style={{ marginBottom: '1rem' }}>Activity Assistant</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <select value={mood} onChange={(e) => setMood(e.target.value)} style={{ flex: 1 }}>
          <option value="Happy">Happy</option>
          <option value="Bored">Bored</option>
          <option value="Tired">Tired</option>
          <option value="Productive">Productive</option>
        </select>
        <button type="submit">Recommend</button>
      </form>
      <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '8px' }}>
        <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{rec.type}</h4>
        <p>{rec.activity}</p>
      </div>
    </div>
  );
};
