import React, { useState } from 'react';

export function Settings({ user, notify, logout, nav }) {
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [bio, setBio] = useState(user?.bio || '');

  const handleSave = () => {
    notify('Success', 'Settings updated successfully');
  };

  const handleChangePassword = () => {
    notify('Info', 'Password change email sent');
  };

  return (
    <div className="dash-content">
      <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '30px' }}>Settings</h2>

      {/* Profile Settings */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Profile Information</h3>
        </div>
        <div style={{ padding: '20px' }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', marginBottom: '6px' }}>Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '13px' }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', marginBottom: '6px' }}>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '13px' }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', marginBottom: '6px' }}>Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows="4"
              style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '13px', fontFamily: 'inherit' }}
            />
          </div>

          <button className="btn btn-gr" onClick={handleSave}>Save Changes</button>
        </div>
      </div>

      {/* Security Settings */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Security</h3>
        </div>
        <div style={{ padding: '20px' }}>
          <div style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid #eee' }}>
            <div style={{ fontWeight: '500', marginBottom: '8px' }}>Password</div>
            <div style={{ fontSize: '13px', color: '#666', marginBottom: '12px' }}>
              Last changed 3 months ago
            </div>
            <button className="btn btn-gh" onClick={handleChangePassword}>Change Password</button>
          </div>

          <div>
            <div style={{ fontWeight: '500', marginBottom: '8px' }}>Two-Factor Authentication</div>
            <div style={{ fontSize: '13px', color: '#666', marginBottom: '12px' }}>
              Not enabled
            </div>
            <button className="btn btn-gh">Enable 2FA</button>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Notifications</h3>
        </div>
        <div style={{ padding: '20px' }}>
          {['Email notifications', 'SMS notifications', 'Push notifications', 'Marketing emails'].map((item, i) => (
            <div key={i} style={{ display: 'flex', justify: 'space-between', alignItems: 'center', marginBottom: '16px', paddingBottom: '16px', borderBottom: i < 3 ? '1px solid #eee' : 'none' }}>
              <span style={{ fontSize: '13px' }}>{item}</span>
              <input type="checkbox" defaultChecked style={{ cursor: 'pointer', width: '18px', height: '18px' }} />
            </div>
          ))}
        </div>
      </div>

      {/* Danger Zone */}
      <div className="card" style={{ borderColor: '#fee', backgroundColor: '#fff9f9' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#e74c3c' }}>Danger Zone</h3>
        </div>
        <div style={{ padding: '20px' }}>
          <div style={{ marginBottom: '16px' }}>
            <div style={{ fontWeight: '500', marginBottom: '8px' }}>Delete Account</div>
            <div style={{ fontSize: '13px', color: '#666', marginBottom: '12px' }}>
              Permanently delete your account and all associated data
            </div>
            <button className="btn btn-red" style={{ backgroundColor: '#e74c3c', color: '#fff' }}>Delete Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
