import React from 'react';

export function Overview({ user, affiliateData, notify }) {
  return (
    <div className="dash-content">
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '20px' }}>Affiliate Overview</h2>
      </div>

      {/* Stats Grid */}
      <div className="grid-2" style={{ marginBottom: '40px', gap: '20px' }}>
        <div className="stat-card">
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#1aa34a', marginBottom: '8px' }}>
            {affiliateData?.totalEarnings || '$0'}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>Total Earnings</div>
          <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>All-time commission</div>
        </div>

        <div className="stat-card">
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#0066ff', marginBottom: '8px' }}>
            {affiliateData?.referrals?.length || 0}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>Active Referrals</div>
          <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>Approved experts</div>
        </div>

        <div className="stat-card">
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#f39c12', marginBottom: '8px' }}>
            {affiliateData?.campaigns?.length || 0}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>Active Campaigns</div>
          <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>Marketing efforts</div>
        </div>

        <div className="stat-card">
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#e74c3c', marginBottom: '8px' }}>
            ${affiliateData?.pendingPayout || '0'}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>Pending Payout</div>
          <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>Ready to withdraw</div>
        </div>
      </div>

      {/* Affiliate Link */}
      <div className="card" style={{ marginBottom: '30px', padding: '20px', backgroundColor: '#f0fdf4', border: '1px solid #dcfce7' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>Your Affiliate Link</div>
            <div style={{ fontSize: '12px', color: '#666', fontFamily: 'monospace', backgroundColor: '#fff', padding: '8px 12px', borderRadius: '4px', marginTop: '8px', wordBreak: 'break-all' }}>
              https://mindgigs.com/ref/{user?.username || 'zaid'}
            </div>
          </div>
          <button 
            onClick={() => {
              navigator.clipboard.writeText(`https://mindgigs.com/ref/${user?.username || 'zaid'}`);
              notify?.('Affiliate link copied!', 'success');
            }}
            className="btn btn-sm" 
            style={{ fontSize: '13px' }}
          >
            Copy Link
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card">
        <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Recent Activity</h3>
        </div>
        <div style={{ padding: '20px' }}>
          {affiliateData?.activities?.length > 0 ? (
            affiliateData.activities.slice(0, 5).map((activity, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px', paddingBottom: '16px', borderBottom: i < 4 ? '1px solid #eee' : 'none' }}>
                <div style={{ fontSize: '18px', marginRight: '12px' }}>{activity.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: '500', marginBottom: '4px' }}>{activity.text}</div>
                  <div style={{ fontSize: '12px', color: '#999' }}>{activity.time}</div>
                </div>
                {activity.val && <div style={{ fontSize: '14px', fontWeight: '600', color: '#1aa34a' }}>{activity.val}</div>}
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', color: '#999', padding: '20px' }}>
              No activity yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
