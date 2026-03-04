import React, { useState } from 'react';

const inputStyle = {
  width: '100%', padding: '10px 14px',
  border: '1.5px solid rgba(255,155,81,0.15)', borderRadius: '8px',
  fontSize: '0.875rem', fontFamily: 'var(--fb)', background: '#fff',
  outline: 'none', color: 'var(--ch)',
};
const labelStyle = {
  display: 'block', fontSize: '0.72rem', fontWeight: 700,
  color: 'var(--mu)', letterSpacing: '0.06em', textTransform: 'uppercase',
  marginBottom: '6px', fontFamily: 'var(--fu)',
};

export function Settings({ user, notify, logout, nav }) {
  const [notifs, setNotifs] = useState({
    'Referral Approvals': true,
    'Campaign Performance': true,
    'Payout Reminders': true,
    'Marketing Tips': false,
  });

  const toggleNotif = (n) => {
    setNotifs(p => {
      const next = { ...p, [n]: !p[n] };
      notify?.(`${n} ${next[n] ? 'enabled' : 'disabled'}`, 'success');
      return next;
    });
  };

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <h2 style={{ fontFamily: 'var(--fu)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--gd)', marginBottom: '4px' }}>
          Settings
        </h2>
        <p style={{ fontSize: '0.875rem', color: 'var(--mu)' }}>Manage your account, payouts, and preferences</p>
      </div>

      {/* Two-column: Account + Payout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>

        {/* Account Info */}
        <div className="stat-card">
          <div style={{ fontFamily: 'var(--fu)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--gd)', marginBottom: '18px' }}>
            🔗 Account Information
          </div>
          <div style={{ marginBottom: '14px' }}>
            <label style={labelStyle}>Full Name</label>
            <input type="text" defaultValue={user?.name} style={inputStyle} />
          </div>
          <div style={{ marginBottom: '14px' }}>
            <label style={labelStyle}>Email Address</label>
            <input type="email" defaultValue={user?.email || 'zaid@example.com'} style={inputStyle} />
          </div>
          <div style={{ marginBottom: '0' }}>
            <label style={labelStyle}>Username / Handle</label>
            <input type="text" defaultValue={user?.username || user?.name?.split(' ')[0]?.toLowerCase() || 'zaid'} style={inputStyle} />
          </div>
          <button
            onClick={() => notify?.('Account saved!', 'success')}
            style={{
              marginTop: '18px', padding: '9px 20px', background: 'var(--gb)', color: '#fff',
              borderRadius: '8px', fontFamily: 'var(--fu)', fontWeight: 600, fontSize: '0.82rem', cursor: 'pointer',
            }}
          >Save Changes</button>
        </div>

        {/* Payout Settings */}
        <div className="stat-card">
          <div style={{ fontFamily: 'var(--fu)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--gd)', marginBottom: '18px' }}>
            💰 Payout Information
          </div>
          <div style={{ marginBottom: '14px' }}>
            <label style={labelStyle}>Preferred Payout Method</label>
            <select style={{ ...inputStyle }}>
              <option>Bank Transfer</option>
              <option>PayPal</option>
              <option>Stripe Connect</option>
            </select>
          </div>
          <div style={{ marginBottom: '14px' }}>
            <label style={labelStyle}>Account / Email</label>
            <input type="text" placeholder="zaid@paypal.com or ••••••1234" style={inputStyle} />
          </div>
          <div style={{ padding: '10px 14px', background: 'rgba(191,201,209,0.06)', borderRadius: '8px', border: '1px solid rgba(191,201,209,0.12)', fontSize: '0.78rem', color: 'var(--gb)', marginBottom: '4px' }}>
            ✅ Min. payout: <strong>$50</strong> · Processed every 2 weeks on Fridays
          </div>
          <button
            onClick={() => notify?.('Payout method saved!', 'success')}
            style={{
              marginTop: '14px', padding: '9px 20px', background: 'var(--gb)', color: '#fff',
              borderRadius: '8px', fontFamily: 'var(--fu)', fontWeight: 600, fontSize: '0.82rem', cursor: 'pointer',
            }}
          >Save Payout Info</button>
        </div>
      </div>

      {/* Notifications */}
      <div className="stat-card" style={{ marginBottom: '20px' }}>
        <div style={{ fontFamily: 'var(--fu)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--gd)', marginBottom: '18px' }}>
          🔔 Notifications
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {Object.entries(notifs).map(([name, on]) => (
            <div key={name} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '12px 16px', background: on ? 'var(--gmt)' : '#f9f9f9',
              borderRadius: '8px', border: `1px solid ${on ? 'rgba(255,155,81,0.12)' : 'rgba(0,0,0,0.05)'}`,
            }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 500, color: on ? 'var(--gm)' : 'var(--mu)' }}>{name}</span>
              <div
                onClick={() => toggleNotif(name)}
                style={{
                  width: 38, height: 22, borderRadius: '100px', cursor: 'pointer',
                  background: on ? 'var(--gb)' : '#d4d4d4', position: 'relative', transition: 'background 0.25s',
                }}
              >
                <div style={{
                  position: 'absolute', top: 3, left: on ? 18 : 3,
                  width: 16, height: 16, borderRadius: '50%', background: '#fff',
                  transition: 'left 0.25s', boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
                }} />
              </div>
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
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => { logout(); nav('home'); }}
            style={{
              padding: '9px 18px', background: 'rgba(232,68,68,0.1)', color: 'var(--rd)',
              border: '1px solid rgba(232,68,68,0.2)', borderRadius: '8px',
              fontFamily: 'var(--fu)', fontWeight: 600, fontSize: '0.82rem', cursor: 'pointer',
            }}
          >🚪 Log Out</button>
          <button
            onClick={() => notify?.('Please contact support to deactivate.', 'warning')}
            style={{
              padding: '9px 18px', background: 'rgba(232,68,68,0.05)', color: 'var(--rd)',
              border: '1px solid rgba(232,68,68,0.15)', borderRadius: '8px',
              fontFamily: 'var(--fu)', fontWeight: 600, fontSize: '0.82rem', cursor: 'pointer',
            }}
          >Deactivate Account</button>
        </div>
      </div>
    </div>
  );
}
