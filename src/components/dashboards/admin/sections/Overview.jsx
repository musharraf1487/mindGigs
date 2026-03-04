import React from 'react';

export function Overview({ user, adminData, notify }) {
  const stats = [
    { label: 'Platform Revenue', val: adminData?.stats?.[1]?.val || '$0', ch: adminData?.stats?.[1]?.ch, color: '#547792', icon: '💰' },
    { label: 'Total Users', val: adminData?.stats?.[0]?.val || '0', ch: adminData?.stats?.[0]?.ch, color: '#e8c547', icon: '👥' },
    { label: 'Active Experts', val: adminData?.stats?.[2]?.val || '0', ch: adminData?.stats?.[2]?.ch, color: '#1ab8a0', icon: '🧠' },
    { label: 'Total Transactions', val: adminData?.stats?.[3]?.val || '0', ch: adminData?.stats?.[3]?.ch, color: '#7c4ecb', icon: '💳' },
  ];

  const bars = adminData?.chartBars || [];
  const months = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'];

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <h2 style={{ fontFamily: 'var(--fu)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--gd)', marginBottom: '4px' }}>
          Platform Overview
        </h2>
        <p style={{ fontSize: '0.875rem', color: 'var(--mu)' }}>Real-time platform metrics and insights</p>
      </div>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '28px' }}>
        {stats.map((s, i) => (
          <div key={i} className="stat-card" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
              <div className="stat-label">{s.label}</div>
              <span style={{ fontSize: '1.2rem' }}>{s.icon}</span>
            </div>
            <div className="stat-val" style={{ color: s.color }}>{s.val}</div>
            <div className="stat-change stat-change-gr" style={{ color: s.color, marginTop: '6px' }}>{s.ch}</div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: s.color, opacity: 0.35 }} />
          </div>
        ))}
      </div>

      {/* Two-column layout: Chart + Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '20px', marginBottom: '24px' }}>
        {/* Revenue Chart */}
        <div className="stat-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <div style={{ fontFamily: 'var(--fu)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--gd)' }}>Revenue Over Time</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--mu)', marginTop: '2px' }}>Last 12 months</div>
            </div>
            <span style={{ fontSize: '1.5rem', fontFamily: 'var(--fu)', fontWeight: 800, color: 'var(--gl)' }}>{adminData?.stats?.[1]?.val}</span>
          </div>
          <div className="chart-bars" style={{ height: '140px' }}>
            {bars.map((h, i) => (
              <div
                key={i}
                className={`cbar ${h === 100 ? 'cbar-high' : 'cbar-main'}`}
                style={{ height: `${h}%` }}
                title={`${months[i]}: ${h}%`}
              />
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
            {months.map((m, i) => (
              <div key={i} style={{ fontSize: '0.6rem', color: 'var(--mu)', fontFamily: 'var(--fu)', flex: 1, textAlign: 'center' }}>{m}</div>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="stat-card">
          <div style={{ fontFamily: 'var(--fu)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--gd)', marginBottom: '16px' }}>
            Key Metrics
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {adminData?.keyMetrics?.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: 'var(--gmt)', borderRadius: '8px', border: '1px solid rgba(255,155,81,0.08)' }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--mu)', fontFamily: 'var(--fu)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{m.label}</div>
                <div style={{ fontFamily: 'var(--fu)', fontWeight: 800, fontSize: '1.05rem', color: 'var(--gd)' }}>{m.value}</div>
              </div>
            ))}
          </div>

          {/* Platform Metrics */}
          <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255,155,81,0.08)' }}>
            <div style={{ fontSize: '0.72rem', fontFamily: 'var(--fu)', fontWeight: 700, color: 'var(--mu)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>
              Platform Health
            </div>
            {adminData?.platformMetrics?.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '8px' }}>
                <span style={{ color: 'var(--mu)' }}>{m.label}</span>
                <span style={{ fontWeight: 600, color: 'var(--gd)' }}>{m.value} <span style={{ color: 'var(--gl)', fontWeight: 500, fontSize: '0.75rem' }}>{m.trend}</span></span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="table-wrap">
        <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,155,81,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: 'var(--fu)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--gd)' }}>Recent Transactions</div>
          <span style={{ fontSize: '0.75rem', color: 'var(--mu)' }}>Last 5</span>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Type</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {adminData?.recentTransactions?.map((txn, i) => (
              <tr key={i}>
                <td style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'var(--mu)' }}>{txn.id}</td>
                <td style={{ fontWeight: 500 }}>{txn.user}</td>
                <td>{txn.type}</td>
                <td style={{ color: 'var(--mu)' }}>{txn.date}</td>
                <td style={{ fontWeight: 700, color: 'var(--gl)' }}>+{txn.amount}</td>
                <td>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: '4px',
                    padding: '3px 10px', borderRadius: '100px', fontSize: '0.72rem', fontWeight: 600,
                    background: txn.status === 'completed' ? 'rgba(255,178,122,0.12)' : 'rgba(232,197,71,0.12)',
                    color: txn.status === 'completed' ? 'var(--gl)' : 'var(--gold)',
                  }}>
                    {txn.status === 'completed' ? '✓' : '⏳'} {txn.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
