import React, { useState, useEffect } from 'react';

export const Greeting = () => {
  const [name, setName] = useState(localStorage.getItem('mini_alexa_name') || '');
  const [tempName, setTempName] = useState('');
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) setGreeting('Good Morning');
      else if (hour < 18) setGreeting('Good Afternoon');
      else setGreeting('Good Evening');
    };
    updateGreeting();
    const timer = setInterval(updateGreeting, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    if (tempName.trim()) {
      localStorage.setItem('mini_alexa_name', tempName.trim());
      setName(tempName.trim());
    }
  };

  if (!name) {
    return (
      <div className="glass-card" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        <h2>Welcome to Mini Alexa</h2>
        <p style={{ color: 'var(--text-secondary)', margin: '0.5rem 0 1rem' }}>Please enter your name to personalize your assistant experience:</p>
        <form onSubmit={handleSave} style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
          <input 
            type="text" 
            placeholder="Your name..." 
            value={tempName} 
            onChange={(e) => setTempName(e.target.value)} 
            required 
          />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }

  return (
    <div className="glass-card" style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <h1 style={{ fontSize: '1.8rem' }}>{greeting}, {name}!</h1>
        <p style={{ color: 'var(--text-secondary)' }}>How can I help you streamline your day?</p>
      </div>
      <button onClick={() => { localStorage.removeItem('mini_alexa_name'); setName(''); }} style={{ background: 'transparent', color: 'var(--text-secondary)', border: '1px solid var(--border-color)', fontSize: '0.8rem', padding: '0.3rem 0.6rem' }}>Change Name</button>
    </div>
  );
};
