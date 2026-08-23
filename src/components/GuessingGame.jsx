import React, { useState } from 'react';

export const GuessingGame = () => {
  const [target, setTarget] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('Guess a number between 1 and 100');
  const [attempts, setAttempts] = useState(0);
  const [won, setWon] = useState(false);

  const handleGuess = (e) => {
    e.preventDefault();
    const val = parseInt(guess, 10);
    if (isNaN(val)) {
      setMessage('Please enter a valid number!');
      return;
    }
    setAttempts(attempts + 1);
    if (val === target) {
      setMessage(`Correct! You guessed it in ${attempts + 1} attempts.`);
      setWon(true);
    } else if (val < target) {
      setMessage('Too Low! Try higher.');
    } else {
      setMessage('Too High! Try lower.');
    }
    setGuess('');
  };

  const resetGame = () => {
    setTarget(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('Guess a number between 1 and 100');
    setAttempts(0);
    setWon(false);
  };

  return (
    <div className="glass-card" style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h3 style={{ marginBottom: '1rem' }}>Number Guessing Game</h3>
      <p style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontWeight: '600' }}>{message}</p>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Attempts: {attempts}</p>
      {!won ? (
        <form onSubmit={handleGuess} style={{ display: 'flex', gap: '0.5rem' }}>
          <input 
            type="number" 
            value={guess} 
            onChange={(e) => setGuess(e.target.value)} 
            placeholder="Enter guess..."
            required 
            style={{ flex: 1 }}
          />
          <button type="submit">Guess</button>
        </form>
      ) : (
        <button onClick={resetGame} style={{ width: '100%' }}>New Game</button>
      )}
    </div>
  );
};
