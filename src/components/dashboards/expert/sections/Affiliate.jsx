export function Affiliate({ user, expertData }) {
  const stats = [
    { label: 'Total Referrals', val: expertData?.affiliateStats?.referrals || 0, icon: '👥', color: 'tl' },
    { label: 'Pending Commission', val: `$${expertData?.affiliateStats?.balance || '0'}`, icon: '💰', color: 'gr' }
  ];

  return (
    <>
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '4px' }}>Affiliate Program</h2>
        <p style={{ color: 'var(--sl)', fontSize: '0.9rem' }}>Earn commissions by referring fellow experts to the mindGigs platform.</p>
      </div>

      <div className="card" style={{ marginBottom: '32px', padding: '24px', background: 'linear-gradient(135deg, rgba(84, 119, 146, 0.05) 0%, rgba(26, 184, 160, 0.05) 100%)', border: '1px solid rgba(84, 119, 146, 0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--gd)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Your Referral Link</div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <div style={{ flex: 1, fontSize: '0.9rem', color: 'var(--sl)', fontFamily: 'monospace', backgroundColor: '#fff', padding: '12px 16px', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.05)', wordBreak: 'break-all' }}>
                mindgigs.com/ref/{user?.username || 'expert'}
              </div>
              <button className="btn btn-gr" style={{ padding: '12px 20px' }}>Copy</button>
            </div>
          </div>
          <div style={{ padding: '16px', borderRadius: '12px', background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.02)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--mu)', fontWeight: 600, marginBottom: '4px' }}>Conversion Rate</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--gd)' }}>12.4%</div>
          </div>
        </div>
      </div>

      <div className="grid-2" style={{ gap: '24px', marginBottom: '32px' }}>
        {stats.map((s, i) => (
          <div key={i} className="stat-card" style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '24px' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: `var(--gmt)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
              {s.icon}
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--gd)', marginBottom: '2px' }}>{s.val}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--sl)', fontWeight: 500 }}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="card">
        <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--gd)' }}>Program Details</h3>
        </div>
        <div style={{ padding: '24px' }}>
          <div className="grid-3" style={{ gap: '24px' }}>
            <div style={{ padding: '16px', borderRadius: '8px', background: 'rgba(0,0,0,0.01)', border: '1px solid rgba(0,0,0,0.02)' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--gd)', marginBottom: '8px' }}>Signup Commission</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--gb)' }}>20%</div>
              <p style={{ fontSize: '0.75rem', color: 'var(--mu)', marginTop: '4px' }}>One-time payment for each new expert referred.</p>
            </div>
            <div style={{ padding: '16px', borderRadius: '8px', background: 'rgba(0,0,0,0.01)', border: '1px solid rgba(0,0,0,0.02)' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--gd)', marginBottom: '8px' }}>Earning Shares</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--gb)' }}>10%</div>
              <p style={{ fontSize: '0.75rem', color: 'var(--mu)', marginTop: '4px' }}>Recurring commission on all their platform earnings.</p>
            </div>
            <div style={{ padding: '16px', borderRadius: '8px', background: 'rgba(0,0,0,0.01)', border: '1px solid rgba(0,0,0,0.02)' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--gd)', marginBottom: '8px' }}>Minimum Payout</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--gd)' }}>$50</div>
              <p style={{ fontSize: '0.75rem', color: 'var(--mu)', marginTop: '4px' }}>Monthly payouts via Stripe or PayPal.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
