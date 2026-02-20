import React, { useState } from 'react';

export function Bookings({ user, expertData }) {
  const [bookings] = useState(expertData?.bookings || []);
  const [filter, setFilter] = useState('all');

  const filteredBookings = filter === 'all' 
    ? bookings 
    : bookings.filter(b => b.status === filter);

  return (
    <div className="dash-content">
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '20px' }}>All Bookings</h2>
        
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          {['all', 'confirmed', 'completed', 'cancelled'].map(status => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              style={{
                padding: '8px 16px',
                border: 'none',
                borderRadius: '6px',
                backgroundColor: filter === status ? '#1aa34a' : '#f5f5f5',
                color: filter === status ? '#fff' : '#333',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '13px',
                textTransform: 'capitalize'
              }}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <div className="card">
        {filteredBookings.length > 0 ? (
          <table className="table" style={{ width: '100%' }}>
            <thead>
              <tr>
                <th>Client</th>
                <th>Date & Time</th>
                <th>Type</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((booking, i) => (
                <tr key={i}>
                  <td>{booking.client}</td>
                  <td>{booking.date} at {booking.time}</td>
                  <td>{booking.type}</td>
                  <td>${booking.price}</td>
                  <td>
                    <span className={`tag tag-${booking.status === 'confirmed' ? 'gr' : booking.status === 'completed' ? 'tl' : 'gh'}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td>
                    <button style={{ padding: '4px 8px', fontSize: '12px', backgroundColor: '#f5f5f5', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div style={{ padding: '60px 20px', textAlign: 'center', color: '#999' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📅</div>
            <p>No bookings found</p>
          </div>
        )}
      </div>
    </div>
  );
}
