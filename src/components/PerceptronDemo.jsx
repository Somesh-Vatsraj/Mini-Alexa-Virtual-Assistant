import React, { useState } from 'react';

export const PerceptronDemo = () => {
  const [x1, setX1] = useState(1);
  const [x2, setX2] = useState(0);
  const weight1 = 0.5;
  const weight2 = 0.5;
  const bias = -0.5;

  const rawOutput = (x1 * weight1) + (x2 * weight2) + bias;
  const output = rawOutput >= 0 ? 1 : 0;

  return (
    <div className="glass-card" style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h3 style={{ marginBottom: '1rem' }}>Perceptron Demonstration</h3>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>
        Simple binary classifier model simulation (Inputs: 0 or 1).
      </p>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <div style={{ flex: 1 }}>
          <label>Input 1 (x1):</label>
          <input type="number" min="0" max="1" value={x1} onChange={(e) => setX1(Number(e.target.value))} style={{ width: '100%', marginTop: '0.3rem' }} />
        </div>
        <div style={{ flex: 1 }}>
          <label>Input 2 (x2):</label>
          <input type="number" min="0" max="1" value={x2} onChange={(e) => setX2(Number(e.target.value))} style={{ width: '100%', marginTop: '0.3rem' }} />
        </div>
      </div>
      <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
        <p><strong>Weights:</strong> w1 = {weight1}, w2 = {weight2}</p>
        <p><strong>Bias:</strong> b = {bias}</p>
        <p style={{ marginTop: '0.5rem' }}><strong>Calculated Sum:</strong> {rawOutput}</p>
        <p style={{ marginTop: '0.3rem', color: 'var(--accent-primary)', fontSize: '1.1rem' }}><strong>Final Activation Output:</strong> {output}</p>
      </div>
      <button onClick={() => { setX1(0); setX2(0); }} style={{ width: '100%', background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}>Reset Weights / Inputs</button>
    </div>
  );
};
