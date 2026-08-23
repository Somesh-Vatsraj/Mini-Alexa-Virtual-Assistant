import React, { useState } from 'react';
import { jokes } from '../data/jokes';

export const JokeCard = () => {
  const [joke, setJoke] = useState(jokes[0]);

  const getRandomJoke = () => {
    const rand = jokes[Math.floor(Math.random() * jokes.length)];
    setJoke(rand);
  };

  return (
    <div className="glass-card">
      <h3 style={{ marginBottom: '1rem' }}>Daily Joke</h3>
      <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>{joke}</p>
      <button onClick={getRandomJoke}>New Joke</button>
    </div>
  );
};
