import React, { useState } from 'react';

const inputStyle = {
  width: '100%', padding: '10px 14px',
  border: '1.5px solid rgba(255,155,81,0.15)', borderRadius: '8px',
  fontSize: '0.875rem', fontFamily: 'var(--fb)', background: '#fff',
  outline: 'none', color: 'var(--ch)', transition: 'border-color 0.2s',
};

const labelStyle = {
  display: 'block', fontSize: '0.72rem', fontWeight: 700,
  color: 'var(--mu)', letterSpacing: '0.06em', textTransform: 'uppercase',
  marginBottom: '6px', fontFamily: 'var(--fu)',
};

export function Settings({ user, notify, logout, nav }) {
  const [features, setFeatures] = useState({
    'Affiliate Program': true,
    'Digital Products': true,
    'Subscriptions': true,
    'Expert Verification': true,
    'Public Marketplace': true,
  });

  const handleSave = (section) => notify?.(`${section} saved!`, 'success');
  const toggleFeature = (f) => setFeatures(p => ({ ...p, [f]: !p[f] }));

  const emailTemplates = ['Welcome Email', 'Booking Confirmation', 'Payout Notification', 'Weekly Digest'];

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <h2 style={{ fontFamily: 'var(--fu)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--gd)', marginBottom: '4px' }}>
          Platform Settings
        </h2>
        <p style={{ fontSize: '0.875rem', color: 'var(--mu)' }}>Manage configurations, policies, and your account</p>
      </div>

      {/* Two-column layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>

        {/* Commission Settings */}
        <div className="stat-card">
          <div style={{ fontFamily: 'var(--fu)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--gd)', marginBottom: '18px' }}>
            💰 Commission & Fees
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>Platform Commission Rate (%)</label>
            <input type="number" defaultValue="20" min="0" max="100" style={{ ...inputStyle, width: '120px' }} />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>Affiliate Base Rate (%)</label>
            <input type="number" defaultValue="15" min="0" max="100" style={{ ...inputStyle, width: '120px' }} />
          </div>
          <div style={{ marginBottom: '0' }}>
            <label style={labelStyle}>Min. Payout Threshold ($)</label>
            <input type="number" defaultValue="50" min="0" style={{ ...inputStyle, width: '120px' }} />
          </div>
          <button
            onClick={() => handleSave('Commission settings')}
            style={{
              marginTop: '18px', padding: '9px 20px', background: 'var(--gb)', color: '#fff',
              borderRadius: '8px', fontFamily: 'var(--fu)', fontWeight: 600, fontSize: '0.82rem', cursor: 'pointer',
            }}
          >Save Commission Settings</button>
        </div>

        {/* Admin Account */}
        <div className="stat-card">
          <div style={{ fontFamily: 'var(--fu)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--gd)', marginBottom: '18px' }}>
            🛡️ Admin Account
          </div>
          <div style={{ marginBottom: '14px' }}>
            <label style={labelStyle}>Name</label>
            <input type="text" defaultValue={user?.name} style={inputStyle} />
          </div>
          <div style={{ marginBottom: '14px' }}>
            <label style={labelStyle}>Email</label>
            <input type="email" defaultValue={user?.email || 'admin@mindgigs.com'} style={inputStyle} />
          </div>
          <div style={{ marginBottom: '0' }}>
            <label style={labelStyle}>New Password</label>
            <input type="password" placeholder="Leave blank to keep current" style={inputStyle} />
          </div>
          <button
            onClick={() => handleSave('Admin account')}
            style={{
              marginTop: '18px', padding: '9px 20px', background: 'var(--gb)', color: '#fff',
              borderRadius: '8px', fontFamily: 'var(--fu)', fontWeight: 600, fontSize: '0.82rem', cursor: 'pointer',
            }}
          >Update Profile</button>
        </div>
      </div>

      {/* Feature Toggles */}
      <div className="stat-card" style={{ marginBottom: '20px' }}>
        <div style={{ fontFamily: 'var(--fu)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--gd)', marginBottom: '18px' }}>
          🔧 Feature Toggles
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {Object.entries(features).map(([feature, enabled]) => (
            <div key={feature} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '12px 16px', background: enabled ? 'var(--gmt)' : '#f9f9f9',
              borderRadius: '8px', border: `1px solid ${enabled ? 'rgba(255,155,81,0.12)' : 'rgba(0,0,0,0.05)'}`,
              transition: 'all 0.2s',
            }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 500, color: enabled ? 'var(--gm)' : 'var(--mu)' }}>{feature}</span>
              <div
                onClick={() => { toggleFeature(feature); notify?.(`${feature} ${!enabled ? 'enabled' : 'disabled'}`, !enabled ? 'success' : 'warning'); }}
                style={{
                  width: 38, height: 22, borderRadius: '100px', cursor: 'pointer',
                  background: enabled ? 'var(--gb)' : '#d4d4d4',
                  position: 'relative', transition: 'background 0.25s',
                }}
              >
                <div style={{
                  position: 'absolute', top: 3, left: enabled ? 18 : 3,
                  width: 16, height: 16, borderRadius: '50%', background: '#fff',
                  transition: 'left 0.25s', boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Email Templates */}
      <div className="stat-card" style={{ marginBottom: '20px' }}>
        <div style={{ fontFamily: 'var(--fu)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--gd)', marginBottom: '18px' }}>
          ✉️ Email Templates
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {emailTemplates.map(t => (
            <div key={t} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', background: 'var(--gmt)', borderRadius: '8px', border: '1px solid rgba(255,155,81,0.08)' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{t}</span>
              <button
                onClick={() => notify?.(`Opening template: ${t}`, 'success')}
                style={{ padding: '6px 14px', background: '#fff', border: '1.5px solid rgba(255,155,81,0.15)', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', color: 'var(--gm)', fontFamily: 'var(--fu)' }}
              >Edit</button>
            </div>
          ))}
        </div>
      </div>

      {/* Danger Zone */}
      <div className="stat-card" style={{ border: '1px solid rgba(232,68,68,0.2)', background: 'rgba(232,68,68,0.02)' }}>
        <div style={{ fontFamily: 'var(--fu)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--rd)', marginBottom: '14px' }}>
          ⚠️ Danger Zone
        </div>
        <p style={{ fontSize: '0.82rem', color: 'var(--mu)', marginBottom: '16px' }}>These actions are irreversible. Proceed with caution.</p>
        <button
          onClick={() => { logout(); nav('home'); }}
          style={{
            padding: '9px 20px', background: 'rgba(232,68,68,0.1)', color: 'var(--rd)',
            border: '1px solid rgba(232,68,68,0.2)', borderRadius: '8px',
            fontFamily: 'var(--fu)', fontWeight: 600, fontSize: '0.82rem', cursor: 'pointer',
          }}
        >🚪 Log Out</button>
      </div>
    </div>
  );
}
