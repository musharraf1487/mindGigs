import React from 'react';

export function Affiliate({ user, expertData }) {
  return (
    <div className="dash-content">
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px' }}>Affiliate Program</h2>
        <div style={{ fontSize: '14px', color: '#666' }}>Earn commissions by referring experts to mindGigs</div>
      </div>

      <div className="card" style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#f0f7ff', border: '1px solid #d4e8f7' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>Your Affiliate Link</div>
            <div style={{ fontSize: '12px', color: '#666', fontFamily: 'monospace', backgroundColor: '#fff', padding: '8px 12px', borderRadius: '4px', marginTop: '8px', wordBreak: 'break-all' }}>
              https://mindgigs.com/ref/{user?.username}
            </div>
          </div>
          <button className="btn btn-sm" style={{ fontSize: '13px' }}>Copy Link</button>
        </div>
      </div>

      <div className="grid-2" style={{ gap: '20px', marginBottom: '30px' }}>
        <div className="stat-card">
          <div style={{ fontSize: '28px', fontWeight: '700', color: '#1aa34a', marginBottom: '8px' }}>
            {expertData?.affiliateStats?.referrals || 0}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>Total Referrals</div>
        </div>
        <div className="stat-card">
          <div style={{ fontSize: '28px', fontWeight: '700', color: '#0066ff', marginBottom: '8px' }}>
            ${expertData?.affiliateStats?.balance || '0'}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>Pending Commission</div>
        </div>
      </div>

      <div className="card">
        <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Program Details</h3>
        </div>
        <div style={{ padding: '20px' }}>
          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Commission Structure</div>
            <div style={{ fontSize: '13px', color: '#666', marginBottom: '4px' }}>• 20% commission on expert signups</div>
            <div style={{ fontSize: '13px', color: '#666', marginBottom: '4px' }}>• 10% commission on their earnings</div>
            <div style={{ fontSize: '13px', color: '#666' }}>• Minimum payout: $50</div>
          </div>
        </div>
      </div>
    </div>
  );
}
