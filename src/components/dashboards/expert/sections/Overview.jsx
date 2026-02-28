export function Overview({ user, expertData, notify, nav }) {
  const stats = expertData?.stats || [
    { label: 'Total Earnings', val: '$0', ch: '0%', color: 'gr' },
    { label: 'Monthly Revenue', val: '$0', ch: '0%', color: 'gr' },
    { label: 'Active Subscriptions', val: '0', ch: '0%', color: 'tl' },
    { label: 'Upcoming Sessions', val: '0', ch: '0%', color: 'gd' },
  ];

  return (
    <>
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px' }}>Dashboard Overview</h2>
        <p style={{ color: 'var(--sl)', fontSize: '0.9rem' }}>Welcome back, {user?.name || 'Expert'}! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid-4" style={{ marginBottom: '40px', gap: '20px' }}>
        {stats.map((s, i) => (
          <div key={i} className="stat-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
              <div className={`stat-badge bg-${s.color}`} style={{ padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 700, color: '#fff' }}>
                {s.ch}
              </div>
            </div>
            <div style={{ fontSize: '28px', fontWeight: '800', color: 'var(--gd)', marginBottom: '4px' }}>
              {s.val}
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--sl)', fontWeight: 500 }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid-2" style={{ gap: '30px', marginBottom: '40px' }}>
        {/* Recent Activity */}
        <div className="card">
          <div style={{ padding: '20px', borderBottom: '1px solid rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--gd)' }}>Recent Bookings</h3>
            <button className="btn btn-gh btn-sm">View All</button>
          </div>
          <div style={{ padding: '20px' }}>
            {expertData?.bookings?.slice(0, 4).map((booking, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: i === 3 ? 'none' : '1px solid rgba(0,0,0,0.03)' }}>
                <div>
                  <div style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--gd)' }}>{booking.client}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--mu)' }}>{booking.type} · {booking.date}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className={`tag ${booking.status === 'confirmed' ? 'tag-gr' : 'tag-yl'}`} style={{ fontSize: '0.65rem' }}>
                    {booking.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--gd)', marginBottom: '20px' }}>Quick Actions</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <button className="btn btn-gr" style={{ padding: '16px', height: 'auto', flexDirection: 'column', gap: '8px' }} onClick={() => notify('Opening offer creation...')}>
              <span style={{ fontSize: '1.5rem' }}>💼</span>
              <span style={{ fontSize: '0.8rem' }}>New Offer</span>
            </button>
            <button className="btn btn-gh" style={{ padding: '16px', height: 'auto', flexDirection: 'column', gap: '8px' }} onClick={() => nav('public-profile')}>
              <span style={{ fontSize: '1.5rem' }}>👤</span>
              <span style={{ fontSize: '0.8rem' }}>My Profile</span>
            </button>
            <button className="btn btn-gh" style={{ padding: '16px', height: 'auto', flexDirection: 'column', gap: '8px' }} onClick={() => notify('Opening availability settings...')}>
              <span style={{ fontSize: '1.5rem' }}>🕒</span>
              <span style={{ fontSize: '0.8rem' }}>Availability</span>
            </button>
            <button className="btn btn-gh" style={{ padding: '16px', height: 'auto', flexDirection: 'column', gap: '8px' }} onClick={() => notify('Redirecting to Stripe...')}>
              <span style={{ fontSize: '1.5rem' }}>💳</span>
              <span style={{ fontSize: '0.8rem' }}>Payouts</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
