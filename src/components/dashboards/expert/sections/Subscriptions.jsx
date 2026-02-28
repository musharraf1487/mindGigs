export function Subscriptions({ user, expertData }) {
  const plans = expertData?.offers?.subscriptions || [];
  const individualSubs = expertData?.subscriptions || [];

  return (
    <>
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '4px' }}>Membership Plans</h2>
        <p style={{ color: 'var(--sl)', fontSize: '0.9rem' }}>Manage your recurring revenue streams and subscriber community.</p>
      </div>

      {plans.length > 0 ? (
        <div className="grid-2" style={{ gap: '24px', marginBottom: '40px' }}>
          {plans.map((sub, i) => (
            <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '24px', borderBottom: '1px solid rgba(0,0,0,0.05)', background: 'rgba(0,0,0,0.01)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--gd)' }}>{sub.title}</h3>
                  <span className="tag tag-gr" style={{ fontSize: '0.7rem' }}>Active</span>
                </div>
                <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--gb)' }}>
                  {sub.price}
                </div>
              </div>
              <div style={{ padding: '24px', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', padding: '12px', background: 'var(--gmt)', borderRadius: '8px' }}>
                  <span style={{ fontSize: '1.5rem' }}>👥</span>
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--gd)' }}>{sub.subscribers}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--sl)' }}>Active Members</div>
                  </div>
                </div>
                <h4 style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--gd)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Included Benefits:</h4>
                <ul style={{ fontSize: '0.85rem', color: 'var(--sl)', marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {(sub.benefits || [
                    'Private WhatsApp group access',
                    'Weekly group Q&A sessions',
                    'Resource library & templates',
                    'Priority support'
                  ]).map((benefit, j) => (
                    <li key={j} style={{ display: 'flex', gap: '10px' }}>
                      <span style={{ color: 'var(--gb)' }}>✓</span> {benefit}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-gh w-full">Edit Plan Details</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card" style={{ padding: '100px 20px', textAlign: 'center', color: 'var(--mu)' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🔄</div>
          <h3 style={{ fontSize: '1.2rem', color: 'var(--gd)', marginBottom: '8px' }}>No subscriptions offered</h3>
          <p style={{ maxWidth: '400px', margin: '0 auto 24px' }}>Create a recurring membership plan to build a stable income and community.</p>
          <button className="btn btn-gr">Create Subscription Plan</button>
        </div>
      )}

      {/* Subscriber List */}
      {individualSubs.length > 0 && (
        <div className="card">
          <div style={{ padding: '20px', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--gd)' }}>Recent Subscribers</h3>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="table" style={{ width: '100%' }}>
              <thead>
                <tr style={{ textAlign: 'left', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <th style={{ padding: '16px 20px', fontSize: '0.75rem', color: 'var(--mu)', textTransform: 'uppercase' }}>Member</th>
                  <th style={{ padding: '16px 20px', fontSize: '0.75rem', color: 'var(--mu)', textTransform: 'uppercase' }}>Plan</th>
                  <th style={{ padding: '16px 20px', fontSize: '0.75rem', color: 'var(--mu)', textTransform: 'uppercase' }}>Joined</th>
                  <th style={{ padding: '16px 20px', fontSize: '0.75rem', color: 'var(--mu)', textTransform: 'uppercase' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {individualSubs.map((s, i) => (
                  <tr key={i} style={{ borderBottom: i === individualSubs.length - 1 ? 'none' : '1px solid rgba(0,0,0,0.03)' }}>
                    <td style={{ padding: '16px 20px', fontWeight: 600, color: 'var(--gd)', fontSize: '0.9rem' }}>{s.name}</td>
                    <td style={{ padding: '16px 20px', fontSize: '0.85rem', color: 'var(--sl)' }}>{s.plan}</td>
                    <td style={{ padding: '16px 20px', fontSize: '0.85rem', color: 'var(--sl)' }}>{s.since}</td>
                    <td style={{ padding: '16px 20px' }}>
                      <span className={`tag tag-${s.status === 'active' ? 'gr' : 'gh'}`} style={{ fontSize: '0.65rem' }}>{s.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}
