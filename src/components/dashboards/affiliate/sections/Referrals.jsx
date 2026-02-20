import React from 'react';

export function Referrals({ user, affiliateData, notify }) {
  return (
    <div className="dash-content">
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px' }}>My Referrals</h2>
        <div style={{ fontSize: '14px', color: '#666' }}>Track your expert referrals and earnings</div>
      </div>

      <div className="grid-2" style={{ gap: '20px', marginBottom: '30px' }}>
        <div className="stat-card">
          <div style={{ fontSize: '28px', fontWeight: '700', color: '#1aa34a', marginBottom: '8px' }}>
            {affiliateData?.referrals?.filter(r => r.status === 'active').length || 0}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>Active Referrals</div>
        </div>
        <div className="stat-card">
          <div style={{ fontSize: '28px', fontWeight: '700', color: '#f39c12', marginBottom: '8px' }}>
            {affiliateData?.referrals?.filter(r => r.status === 'pending').length || 0}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>Pending Approval</div>
        </div>
      </div>

      <div className="card">
        <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Referral List</h3>
        </div>
        <div style={{ padding: '20px' }}>
          {affiliateData?.referrals?.length > 0 ? (
            <div>
              {affiliateData.referrals.map((referral, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', paddingBottom: '16px', borderBottom: i < affiliateData.referrals.length - 1 ? '1px solid #eee' : 'none' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: '600', marginBottom: '4px' }}>{referral.name}</div>
                    <div style={{ fontSize: '12px', color: '#999' }}>
                      Joined {referral.joined} • Status: <span style={{ fontWeight: '500', color: referral.status === 'active' ? '#1aa34a' : '#f39c12' }}>{referral.status === 'active' ? '✓ Active' : '⏳ Pending'}</span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#1aa34a' }}>{referral.earnings}</div>
                    <div style={{ fontSize: '11px', color: '#999', fontFamily: 'monospace', marginTop: '4px' }}>{referral.referralLink}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', color: '#999', padding: '20px' }}>
              No referrals yet
            </div>
          )}
        </div>
      </div>

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f0f7ff', borderRadius: '6px', border: '1px solid #d4e8f7', fontSize: '13px', color: '#333' }}>
        <strong>💡 Tip:</strong> Share your referral link to earn commissions. You get 20% on their first year revenue + 10% recurring on their ongoing earnings.
      </div>
    </div>
  );
}
