import React, { useState } from 'react';

export function Earnings({ user, affiliateData }) {
  const [period, setPeriod] = useState('month');

  return (
    <div className="dash-content">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600' }}>Earnings & Payouts</h2>
        <select 
          value={period} 
          onChange={(e) => setPeriod(e.target.value)}
          style={{ padding: '8px 12px', border: '1px solid #ddd', borderRadius: '6px', backgroundColor: '#fff', cursor: 'pointer' }}
        >
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="year">This Year</option>
          <option value="all">All Time</option>
        </select>
      </div>

      <div className="grid-3" style={{ gap: '20px', marginBottom: '30px' }}>
        <div className="stat-card">
          <div style={{ fontSize: '28px', fontWeight: '700', color: '#1aa34a', marginBottom: '8px' }}>
            {affiliateData?.totalCommissions || '$0'}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>Total Commissions</div>
        </div>
        <div className="stat-card">
          <div style={{ fontSize: '28px', fontWeight: '700', color: '#0066ff', marginBottom: '8px' }}>
            {affiliateData?.pendingPayout || '$0'}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>Pending Payout</div>
        </div>
        <div className="stat-card">
          <div style={{ fontSize: '28px', fontWeight: '700', color: '#f39c12', marginBottom: '8px' }}>
            {affiliateData?.totalEarnings || '$0'}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>Total Withdrawn</div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: '20px' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Payout History</h3>
        </div>
        <div style={{ padding: '20px' }}>
          {affiliateData?.payouts?.length > 0 ? (
            <div>
              {affiliateData.payouts.map((payout, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', paddingBottom: '16px', borderBottom: i < affiliateData.payouts.length - 1 ? '1px solid #eee' : 'none' }}>
                  <div>
                    <div style={{ fontWeight: '600', marginBottom: '4px' }}>{payout.date}</div>
                    <div style={{ fontSize: '12px', color: '#999' }}>{payout.method}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#1aa34a' }}>+{payout.amount}</div>
                    <div style={{ fontSize: '12px', color: '#1aa34a', fontWeight: '500' }}>{payout.status}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', color: '#999', padding: '20px' }}>
              No payouts yet
            </div>
          )}
        </div>
      </div>

      <button className="btn btn-pr">Request Payout</button>

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f0fdf4', borderRadius: '6px', border: '1px solid #dcfce7', fontSize: '13px', color: '#166534' }}>
        <strong>✓ Minimum payout:</strong> $50. Payouts are processed every 2 weeks on Fridays.
      </div>
    </div>
  );
}
