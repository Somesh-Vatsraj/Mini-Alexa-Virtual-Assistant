import React, { useState } from 'react';
import { quotes } from '../data/quotes';

export const QuoteCard = () => {
  const [current, setCurrent] = useState(quotes[0]);

  const getRandomQuote = () => {
    let rand;
    do {
      rand = quotes[Math.floor(Math.random() * quotes.length)];
    } while (rand.quote === current.quote && quotes.length > 1);
    setCurrent(rand);
  };

  return (
    <div className="glass-card">
      <h3 style={{ marginBottom: '1rem' }}>Inspirational Quote</h3>
      <blockquote style={{ fontStyle: 'italic', marginBottom: '1rem', fontSize: '1.1rem' }}>
        "{current.quote}"
      </blockquote>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', textAlign: 'right' }}>— {current.author}</p>
      <button onClick={getRandomQuote}>New Quote</button>
    </div>
  );
};
