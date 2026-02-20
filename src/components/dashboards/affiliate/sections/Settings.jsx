import React from 'react';

export function Settings({ user, notify, logout, nav }) {
  const handleAccountUpdate = () => {
    notify?.('Account settings updated', 'success');
  };

  const handleNotificationToggle = (name) => {
    notify?.(`${name} notifications ${Math.random() > 0.5 ? 'enabled' : 'disabled'}`, 'info');
  };

  return (
    <div className="dash-content">
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px' }}>Settings</h2>
        <div style={{ fontSize: '14px', color: '#666' }}>Manage your account and preferences</div>
      </div>

      {/* Account Settings */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Account Information</h3>
        </div>
        <div style={{ padding: '20px' }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '8px' }}>Full Name</label>
            <input 
              type="text" 
              defaultValue={user?.name} 
              style={{ width: '100%', padding: '10px 12px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '8px' }}>Email Address</label>
            <input 
              type="email" 
              defaultValue={user?.email} 
              style={{ width: '100%', padding: '10px 12px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px' }}
            />
          </div>
          <button 
            onClick={handleAccountUpdate}
            style={{ padding: '10px 20px', backgroundColor: '#0066ff', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '500', cursor: 'pointer' }}
          >
            Save Changes
          </button>
        </div>
      </div>

      {/* Payout Settings */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Payout Information</h3>
        </div>
        <div style={{ padding: '20px' }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '8px' }}>Preferred Payout Method</label>
            <select style={{ width: '100%', padding: '10px 12px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px', backgroundColor: '#fff', cursor: 'pointer' }}>
              <option>Bank Transfer</option>
              <option>PayPal</option>
              <option>Stripe Connect</option>
            </select>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '8px' }}>Bank Account / PayPal Email</label>
            <input 
              type="text" 
              placeholder="••••••••••••1234"
              style={{ width: '100%', padding: '10px 12px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px' }}
              disabled
            />
            <button style={{ marginTop: '10px', padding: '8px 16px', backgroundColor: '#f5f5f5', border: '1px solid #ddd', borderRadius: '6px', fontSize: '13px', cursor: 'pointer' }}>
              Update Method
            </button>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Notifications</h3>
        </div>
        <div style={{ padding: '20px' }}>
          {['Referral Approvals', 'Campaign Performance', 'Payout Reminders', 'Marketing Tips'].map((notif) => (
            <div key={notif} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid #eee' }}>
              <div style={{ fontSize: '14px' }}>{notif}</div>
              <input 
                type="checkbox" 
                defaultChecked 
                onChange={() => handleNotificationToggle(notif)}
                style={{ cursor: 'pointer', width: '16px', height: '16px' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Danger Zone */}
      <div className="card" style={{ borderColor: '#fee2e2' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #fecaca' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#dc2626' }}>Danger Zone</h3>
        </div>
        <div style={{ padding: '20px' }}>
          <button 
            onClick={() => {
              logout();
              nav('home');
            }}
            style={{ padding: '10px 20px', backgroundColor: '#fee2e2', color: '#dc2626', border: '1px solid #fecaca', borderRadius: '6px', fontWeight: '500', cursor: 'pointer', marginRight: '10px' }}
          >
            Log Out of This Device
          </button>
          <button style={{ padding: '10px 20px', backgroundColor: '#fee2e2', color: '#dc2626', border: '1px solid #fecaca', borderRadius: '6px', fontWeight: '500', cursor: 'pointer' }}>
            Deactivate Account
          </button>
        </div>
      </div>
    </div>
  );
}
