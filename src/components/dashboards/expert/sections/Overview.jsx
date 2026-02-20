import React from 'react';

export function Overview({ user, expertData, notify, nav }) {
  return (
    <div className="dash-content">
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '20px' }}>Dashboard Overview</h2>
      </div>

      {/* Stats Grid */}
      <div className="grid-2" style={{ marginBottom: '40px', gap: '20px' }}>
        <div className="stat-card">
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#1aa34a', marginBottom: '8px' }}>
            {expertData?.totalEarnings || '$0'}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>Total Earnings</div>
          <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>This month</div>
        </div>

        <div className="stat-card">
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#0066ff', marginBottom: '8px' }}>
            {expertData?.bookings?.length || 0}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>Active Bookings</div>
          <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>Upcoming sessions</div>
        </div>

        <div className="stat-card">
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#f39c12', marginBottom: '8px' }}>
            {expertData?.subscriptions?.length || 0}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>Active Subscribers</div>
          <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>Recurring revenue</div>
        </div>

        <div className="stat-card">
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#e74c3c', marginBottom: '8px' }}>
            {expertData?.rating || '4.8'}⭐
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>Your Rating</div>
          <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>Based on {expertData?.reviews || 0} reviews</div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card" style={{ marginBottom: '30px' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Recent Bookings</h3>
        </div>
        <div style={{ padding: '20px' }}>
          {expertData?.bookings?.slice(0, 3).map((booking, i) => (
            <div key={i} className="activity-item" style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #eee' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: '500', marginBottom: '4px' }}>{booking.client}</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>{booking.date}</div>
                </div>
                <span className="tag tag-gr" style={{ fontSize: '12px' }}>${booking.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <button className="btn btn-pr" onClick={() => nav('expert-dashboard')}>
          Create New Offer
        </button>
        <button className="btn btn-gr" onClick={() => nav('expert-dashboard')}>
          View Profile
        </button>
        <button className="btn btn-gh" onClick={() => nav('expert-dashboard')}>
          Download Invoice
        </button>
      </div>
    </div>
  );
}
