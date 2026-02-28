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
    <>
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '4px' }}>Account Settings</h2>
        <p style={{ color: 'var(--sl)', fontSize: '0.9rem' }}>Manage your profile, security, and notification preferences.</p>
      </div>

      {/* Profile Settings */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--gd)' }}>Profile Information</h3>
        </div>
        <div style={{ padding: '24px' }}>
          <div className="grid-2" style={{ gap: '24px', marginBottom: '24px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--gd)', marginBottom: '8px' }}>Full Name</label>
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--gd)', marginBottom: '8px' }}>Email Address</label>
              <input
                type="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--gd)', marginBottom: '8px' }}>Bio</label>
            <textarea
              className="input"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows="4"
              style={{ width: '100%', resize: 'vertical', minHeight: '100px' }}
              placeholder="Tell us about yourself..."
            />
          </div>

          <button className="btn btn-gr" style={{ padding: '10px 24px' }} onClick={handleSave}>Save Changes</button>
        </div>
      </div>

      {/* Security Settings */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--gd)' }}>Security</h3>
        </div>
        <div style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid rgba(0,0,0,0.03)' }}>
            <div>
              <div style={{ fontWeight: '600', color: 'var(--gd)', marginBottom: '4px' }}>Change Password</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--mu)' }}>Last changed 3 months ago</div>
            </div>
            <button className="btn btn-gh btn-sm" onClick={handleChangePassword}>Update Password</button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: '600', color: 'var(--gd)', marginBottom: '4px' }}>Two-Factor Authentication</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--mu)' }}>Secure your account with 2FA</div>
            </div>
            <button className="btn btn-gh btn-sm" disabled>Enable 2FA</button>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--gd)' }}>Notifications</h3>
        </div>
        <div style={{ padding: '12px 24px' }}>
          {['Booking Confirmations', 'New Messages', 'Marketing Updates', 'Platform Alerts'].map((item, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: i === 3 ? 'none' : '1px solid rgba(0,0,0,0.03)' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--gd)', fontWeight: 500 }}>{item}</span>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider round"></span>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Danger Zone */}
      <div className="card" style={{ borderColor: 'rgba(232, 68, 68, 0.2)', backgroundColor: 'rgba(232, 68, 68, 0.02)' }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(232, 68, 68, 0.1)' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#e84444' }}>Danger Zone</h3>
        </div>
        <div style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: '600', color: 'var(--gd)', marginBottom: '4px' }}>Delete Account</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--mu)' }}>Permanently erase all your data and access.</div>
            </div>
            <button className="btn btn-rd btn-sm">Delete Account</button>
          </div>
        </div>
      </div>
    </>
  );
}
