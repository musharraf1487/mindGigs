export function Earnings({ user, expertData }) {
  const [period, setPeriod] = useState('month');
  const earnings = expertData?.earnings || [];

  const stats = [
    { label: 'Total Earnings', val: expertData?.totalEarnings || '$0', icon: '💰', color: 'gr' },
    { label: 'Pending Payout', val: expertData?.pendingPayout || '$0', icon: '⏳', color: 'yl' },
    { label: 'Total Paid Out', val: expertData?.totalPaidOut || '$0', icon: '✅', color: 'tl' }
  ];

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '4px' }}>Financial Overview</h2>
          <p style={{ color: 'var(--sl)', fontSize: '0.9rem' }}>Track your revenue, payouts, and incoming transactions.</p>
        </div>
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="btn btn-gh btn-sm"
          style={{ width: 'auto', background: '#fff', border: '1px solid rgba(0,0,0,0.1)' }}
        >
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="year">This Year</option>
          <option value="all">All Time</option>
        </select>
      </div>

      <div className="grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
        {stats.map((s, i) => (
          <div key={i} className="stat-card" style={{ padding: '24px' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--mu)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>{s.label}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--gd)' }}>{s.val}</div>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(0,0,0,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                {s.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card" style={{ marginBottom: '30px', overflow: 'hidden' }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--gd)' }}>Recent Transactions</h3>
          <button className="btn btn-gh btn-sm">Export CSV</button>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table className="table" style={{ width: '100%' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <th style={{ padding: '16px 24px', fontSize: '0.75rem', color: 'var(--mu)', textTransform: 'uppercase' }}>Description</th>
                <th style={{ padding: '16px 24px', fontSize: '0.75rem', color: 'var(--mu)', textTransform: 'uppercase' }}>Date</th>
                <th style={{ padding: '16px 24px', fontSize: '0.75rem', color: 'var(--mu)', textTransform: 'uppercase', textAlign: 'right' }}>Amount</th>
              </tr>
            </thead>
            <tbody>
              {earnings.length > 0 ? (
                earnings.slice(0, 8).map((earning, i) => (
                  <tr key={i} style={{ borderBottom: i === earnings.length - 1 ? 'none' : '1px solid rgba(0,0,0,0.02)' }}>
                    <td style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--gd)', fontSize: '0.9rem' }}>{earning.description}</td>
                    <td style={{ padding: '16px 24px', fontSize: '0.85rem', color: 'var(--sl)' }}>{earning.date}</td>
                    <td style={{ padding: '16px 24px', textAlign: 'right', fontWeight: 700, color: 'var(--gb)', fontSize: '0.95rem' }}>+${earning.amount}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" style={{ padding: '60px 24px', textAlign: 'center', color: 'var(--mu)' }}>No transactions yet</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <button className="btn btn-gr" style={{ padding: '12px 32px' }}>Request Immediate Payout</button>
      </div>
    </>
  );
}
