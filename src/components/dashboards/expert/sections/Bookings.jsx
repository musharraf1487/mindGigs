export function Bookings({ user, expertData }) {
  const bookings = expertData?.bookings || [];
  const [filter, setFilter] = useState('all');

  const filteredBookings = filter === 'all'
    ? bookings
    : bookings.filter(b => b.status === filter);

  return (
    <>
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '4px' }}>All Bookings</h2>
        <p style={{ color: 'var(--sl)', fontSize: '0.9rem' }}>Track and manage your upcoming and past client sessions.</p>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', overflowX: 'auto', paddingBottom: '4px' }}>
        {['all', 'confirmed', 'pending', 'completed', 'cancelled'].map(status => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`btn btn-sm ${filter === status ? 'btn-gr' : 'btn-gh'}`}
            style={{ textTransform: 'capitalize', whiteSpace: 'nowrap' }}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="card" style={{ overflow: 'hidden' }}>
        {filteredBookings.length > 0 ? (
          <div style={{ overflowX: 'auto' }}>
            <table className="table" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ textAlign: 'left', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <th style={{ padding: '16px 20px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--mu)', textTransform: 'uppercase' }}>Client</th>
                  <th style={{ padding: '16px 20px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--mu)', textTransform: 'uppercase' }}>Date & Time</th>
                  <th style={{ padding: '16px 20px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--mu)', textTransform: 'uppercase' }}>Type</th>
                  <th style={{ padding: '16px 20px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--mu)', textTransform: 'uppercase' }}>Status</th>
                  <th style={{ padding: '16px 20px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--mu)', textTransform: 'uppercase', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.map((booking, i) => (
                  <tr key={i} style={{ borderBottom: i === filteredBookings.length - 1 ? 'none' : '1px solid rgba(0,0,0,0.03)' }}>
                    <td style={{ padding: '16px 20px', fontWeight: 600, color: 'var(--gd)', fontSize: '0.9rem' }}>{booking.client}</td>
                    <td style={{ padding: '16px 20px', fontSize: '0.85rem', color: 'var(--sl)' }}>{booking.date}</td>
                    <td style={{ padding: '16px 20px', fontSize: '0.85rem', color: 'var(--sl)' }}>{booking.type}</td>
                    <td style={{ padding: '16px 20px' }}>
                      <span className={`tag tag-${booking.status === 'confirmed' ? 'gr' : booking.status === 'completed' ? 'tl' : booking.status === 'cancelled' ? 'rd' : 'yl'}`} style={{ fontSize: '0.7rem' }}>
                        {booking.status}
                      </span>
                    </td>
                    <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                      <button className="btn btn-gh btn-sm" style={{ padding: '4px 12px' }}>Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div style={{ padding: '100px 20px', textAlign: 'center', color: 'var(--mu)' }}>
            <div style={{ fontSize: '4rem', marginBottom: '16px' }}>📅</div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--gd)', marginBottom: '8px' }}>No bookings found</h3>
            <p>Your scheduled sessions will appear here.</p>
          </div>
        )}
      </div>
    </>
  );
}
