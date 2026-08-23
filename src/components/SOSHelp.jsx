import React, { useState } from 'react';
import { FiAlertTriangle } from 'react-icons/fi';

export const SOSHelp = () => {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="glass-card" style={{ borderLeft: '4px solid #ef4444' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <FiAlertTriangle size={24} color="#ef4444" />
        <h3>SOS Emergency Information</h3>
      </div>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
        This is an informational safety panel. Mini Alexa does not automatically connect to or trigger live emergency services.
      </p>
      <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
        <p><strong>Emergency Helpline:</strong> 911 / 112</p>
        <p><strong>Poison Control:</strong> 1-800-222-1222</p>
      </div>
      {!confirmed ? (
        <button onClick={() => setConfirmed(true)} style={{ background: '#ef4444' }}>Acknowledge Protocol</button>
      ) : (
        <p style={{ color: '#10b981', fontWeight: '600' }}>Emergency protocol acknowledged safely.</p>
      )}
    </div>
  );
};
