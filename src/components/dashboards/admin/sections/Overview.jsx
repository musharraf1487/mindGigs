import React from 'react';

export function Overview({ user, adminData, notify }) {
  return (
    <div className="dash-content">
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px' }}>Platform Overview</h2>
        <div style={{ fontSize: '14px', color: '#666' }}>Real-time platform metrics and insights</div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid-2" style={{ marginBottom: '40px', gap: '20px' }}>
        <div className="stat-card">
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#1aa34a', marginBottom: '8px' }}>
            {adminData?.stats?.[0]?.val || '$0'}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>{adminData?.stats?.[0]?.label}</div>
          <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>{adminData?.stats?.[0]?.ch}</div>
        </div>

        <div className="stat-card">
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#0066ff', marginBottom: '8px' }}>
            {adminData?.stats?.[1]?.val || '$0'}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>{adminData?.stats?.[1]?.label}</div>
          <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>{adminData?.stats?.[1]?.ch}</div>
        </div>

        <div className="stat-card">
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#f39c12', marginBottom: '8px' }}>
            {adminData?.stats?.[2]?.val || '0'}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>{adminData?.stats?.[2]?.label}</div>
          <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>{adminData?.stats?.[2]?.ch}</div>
        </div>

        <div className="stat-card">
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#e74c3c', marginBottom: '8px' }}>
            {adminData?.stats?.[3]?.val || '0'}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>{adminData?.stats?.[3]?.label}</div>
          <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>{adminData?.stats?.[3]?.ch}</div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="card" style={{ marginBottom: '30px' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Key Performance Indicators</h3>
        </div>
        <div style={{ padding: '20px' }}>
          <div className="grid-4" style={{ gap: '20px' }}>
            {adminData?.keyMetrics?.map((metric, i) => (
              <div key={i} style={{ padding: '16px', backgroundColor: '#f9f9f9', borderRadius: '6px' }}>
                <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px', fontWeight: '500' }}>{metric.label}</div>
                <div style={{ fontSize: '20px', fontWeight: '700', color: '#333' }}>{metric.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="card">
        <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Recent Transactions</h3>
        </div>
        <div style={{ padding: '20px' }}>
          {adminData?.recentTransactions?.slice(0, 5).map((txn, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', paddingBottom: '16px', borderBottom: i < 4 ? '1px solid #eee' : 'none' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '500', marginBottom: '4px' }}>{txn.user}</div>
                <div style={{ fontSize: '12px', color: '#999' }}>
                  {txn.type} • {txn.date}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#1aa34a' }}>+{txn.amount}</div>
                <div style={{ fontSize: '12px', color: txn.status === 'completed' ? '#1aa34a' : '#f39c12', fontWeight: '500' }}>
                  {txn.status === 'completed' ? '✓ Completed' : '⏳ Pending'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
