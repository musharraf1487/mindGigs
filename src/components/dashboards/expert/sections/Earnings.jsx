import React, { useState } from 'react';

export function Earnings({ user, expertData }) {
  const [period, setPeriod] = useState('month');
  const earnings = expertData?.earnings || [];

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
            ${expertData?.totalEarnings || '0'}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>Total Earnings</div>
        </div>
        <div className="stat-card">
          <div style={{ fontSize: '28px', fontWeight: '700', color: '#0066ff', marginBottom: '8px' }}>
            ${expertData?.pendingPayout || '0'}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>Pending Payout</div>
        </div>
        <div className="stat-card">
          <div style={{ fontSize: '28px', fontWeight: '700', color: '#f39c12', marginBottom: '8px' }}>
            ${expertData?.totalPaidOut || '0'}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>Total Paid Out</div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: '20px' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Recent Transactions</h3>
        </div>
        <div style={{ padding: '20px' }}>
          {earnings.length > 0 ? (
            earnings.slice(0, 5).map((earning, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', paddingBottom: '12px', borderBottom: i < 4 ? '1px solid #eee' : 'none' }}>
                <div>
                  <div style={{ fontWeight: '500', marginBottom: '4px' }}>{earning.description}</div>
                  <div style={{ fontSize: '12px', color: '#999' }}>{earning.date}</div>
                </div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#1aa34a' }}>+${earning.amount}</div>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', color: '#999', padding: '20px' }}>
              No transactions yet
            </div>
          )}
        </div>
      </div>

      <button className="btn btn-pr">Request Payout</button>
    </div>
  );
}
