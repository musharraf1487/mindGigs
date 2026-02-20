import React from 'react';

export function Settings({ user, notify, logout, nav }) {
  const handleSave = (setting) => {
    notify?.(`${setting} updated successfully`, 'success');
  };

  return (
    <div className="dash-content">
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px' }}>Platform Settings</h2>
        <div style={{ fontSize: '14px', color: '#666' }}>Manage platform configurations and policies</div>
      </div>

      {/* Commission Settings */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Commission & Fee Settings</h3>
        </div>
        <div style={{ padding: '20px' }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '8px' }}>Platform Commission (%)</label>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <input 
                type="number" 
                defaultValue="20"
                min="0"
                max="100"
                step="1"
                style={{ width: '100px', padding: '10px 12px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px' }}
              />
              <span style={{ fontSize: '13px', color: '#666' }}>Applied to all transactions</span>
            </div>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '8px' }}>Affiliate Commission (%)</label>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <input 
                type="number" 
                defaultValue="15"
                min="0"
                max="100"
                step="1"
                style={{ width: '100px', padding: '10px 12px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px' }}
              />
              <span style={{ fontSize: '13px', color: '#666' }}>Base affiliate payout rate</span>
            </div>
          </div>
          <button 
            onClick={() => handleSave('Commission settings')}
            style={{ padding: '10px 20px', backgroundColor: '#0066ff', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '500', cursor: 'pointer' }}
          >
            Save Changes
          </button>
        </div>
      </div>

      {/* Email Templates */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Email Templates</h3>
        </div>
        <div style={{ padding: '20px' }}>
          {['Welcome Email', 'Booking Confirmation', 'Payout Notification', 'Weekly Report'].map((template) => (
            <div key={template} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #eee' }}>
              <div style={{ fontSize: '14px' }}>{template}</div>
              <button 
                style={{ padding: '6px 12px', backgroundColor: '#f0f0f0', border: '1px solid #ddd', borderRadius: '4px', fontSize: '12px', cursor: 'pointer', fontWeight: '500' }}
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Toggles */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Feature Toggles</h3>
        </div>
        <div style={{ padding: '20px' }}>
          {['Affiliate Program', 'Digital Products', 'Subscriptions', 'Expert Verification'].map((feature) => (
            <div key={feature} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid #eee' }}>
              <div style={{ fontSize: '14px' }}>{feature}</div>
              <input 
                type="checkbox" 
                defaultChecked 
                onChange={() => handleSave(`${feature} feature`)}
                style={{ cursor: 'pointer', width: '18px', height: '18px' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Admin Account */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Admin Account</h3>
        </div>
        <div style={{ padding: '20px' }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '8px' }}>Admin Name</label>
            <input 
              type="text" 
              defaultValue={user?.name}
              style={{ width: '100%', padding: '10px 12px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '8px' }}>Email</label>
            <input 
              type="email" 
              defaultValue={user?.email}
              style={{ width: '100%', padding: '10px 12px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px' }}
            />
          </div>
          <button 
            onClick={() => handleSave('Admin account')}
            style={{ padding: '10px 20px', backgroundColor: '#0066ff', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '500', cursor: 'pointer' }}
          >
            Update Profile
          </button>
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
            style={{ padding: '10px 20px', backgroundColor: '#fee2e2', color: '#dc2626', border: '1px solid #fecaca', borderRadius: '6px', fontWeight: '500', cursor: 'pointer' }}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
