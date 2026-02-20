import React, { useState } from 'react';

export function Subscriptions({ user, expertData }) {
  const [subscriptions] = useState(expertData?.subscriptions || []);

  return (
    <div className="dash-content">
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px' }}>Your Subscriptions</h2>
        <div style={{ fontSize: '14px', color: '#666' }}>Manage your subscription offerings and subscriber list</div>
      </div>

      {subscriptions.length > 0 ? (
        <div className="grid-2" style={{ gap: '20px', marginBottom: '40px' }}>
          {subscriptions.map((sub, i) => (
            <div key={i} className="card">
              <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: '600' }}>{sub.name}</h3>
                  <span className="tag tag-gr">Active</span>
                </div>
                <div style={{ fontSize: '24px', fontWeight: '700', color: '#1aa34a', marginBottom: '8px' }}>
                  ${sub.price}/month
                </div>
              </div>
              <div style={{ padding: '20px' }}>
                <div style={{ fontSize: '13px', color: '#666', marginBottom: '16px' }}>
                  <strong>{sub.subscribers}</strong> active subscribers
                </div>
                <ul style={{ fontSize: '13px', color: '#666', marginBottom: '16px', listStyle: 'none', padding: 0 }}>
                  {sub.benefits?.map((benefit, j) => (
                    <li key={j} style={{ marginBottom: '8px' }}>
                      ✓ {benefit}
                    </li>
                  ))}
                </ul>
                <button style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '6px', backgroundColor: '#fff', cursor: 'pointer', fontWeight: '500', fontSize: '13px' }}>
                  Edit Subscription
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card" style={{ padding: '60px 20px', textAlign: 'center', color: '#999' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔄</div>
          <p>No subscriptions yet. Create a subscription offering to earn recurring revenue!</p>
          <button className="btn btn-pr" style={{ marginTop: '16px' }}>Create Subscription</button>
        </div>
      )}
    </div>
  );
}
