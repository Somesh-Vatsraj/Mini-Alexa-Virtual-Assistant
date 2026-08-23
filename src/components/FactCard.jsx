import React, { useState } from 'react';
import { facts } from '../data/facts';

export const FactCard = () => {
  const [fact, setFact] = useState(facts[0]);

  const getRandomFact = () => {
    const rand = facts[Math.floor(Math.random() * facts.length)];
    setFact(rand);
  };

  return (
    <div className="glass-card">
      <h3 style={{ marginBottom: '1rem' }}>Did You Know?</h3>
      <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>{fact}</p>
      <button onClick={getRandomFact}>New Fact</button>
    </div>
  );
};
