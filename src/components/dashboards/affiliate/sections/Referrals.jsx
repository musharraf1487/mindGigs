import React from 'react';

export function Referrals({ user, affiliateData, notify }) {
  const active = affiliateData?.referrals?.filter(r => r.status === 'active').length || 0;
  const pending = affiliateData?.referrals?.filter(r => r.status === 'pending').length || 0;
  const total = affiliateData?.referrals?.length || 0;

  const totalEarned = affiliateData?.referrals?.reduce((s, r) => s + parseFloat(r.earnings?.replace('$', '') || 0), 0) || 0;

  const statusColor = { active: 'var(--gl)', pending: 'var(--gold)' };
  const statusBg = { active: 'rgba(255,178,122,0.1)', pending: 'rgba(232,197,71,0.1)' };

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <h2 style={{ fontFamily: 'var(--fu)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--gd)', marginBottom: '4px' }}>
          My Referrals
        </h2>
        <p style={{ fontSize: '0.875rem', color: 'var(--mu)' }}>Track referred experts and your commissions</p>
      </div>

      {/* Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
        {[
          { label: 'Total Referred', val: total, color: 'var(--teal)', icon: '👥' },
          { label: 'Active', val: active, color: 'var(--gl)', icon: '✅' },
          { label: 'Pending Approval', val: pending, color: 'var(--gold)', icon: '⏳' },
          { label: 'Total Earned', val: `$${totalEarned}`, color: 'var(--purp)', icon: '💰' },
        ].map((s, i) => (
          <div key={i} className="stat-card" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
              <div className="stat-label">{s.label}</div>
              <span>{s.icon}</span>
            </div>
            <div className="stat-val" style={{ color: s.color }}>{s.val}</div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: s.color, opacity: 0.3 }} />
          </div>
        ))}
      </div>

      {/* Referrals Table */}
      <div className="table-wrap">
        <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,155,81,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: 'var(--fu)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--gd)' }}>
            Referral List <span style={{ fontWeight: 400, color: 'var(--mu)', fontSize: '0.82rem' }}>({total})</span>
          </div>
          <button
            onClick={() => notify?.('Invite copied to clipboard!', 'success')}
            style={{
              padding: '7px 14px', background: 'var(--teal)', color: '#fff',
              borderRadius: '6px', fontFamily: 'var(--fu)', fontWeight: 600,
              fontSize: '0.78rem', cursor: 'pointer',
            }}
          >+ Invite Expert</button>
        </div>
        {total > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Expert</th>
                <th>Joined</th>
                <th>Referral Link</th>
                <th>Earnings</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {affiliateData.referrals.map((r, i) => (
                <tr key={i}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(191,201,209,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', flexShrink: 0 }}>🧠</div>
                      <span style={{ fontWeight: 600, color: 'var(--ch)' }}>{r.name}</span>
                    </div>
                  </td>
                  <td style={{ color: 'var(--mu)' }}>{r.joined}</td>
                  <td>
                    <span style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'var(--gb)', background: 'var(--gmt)', padding: '3px 8px', borderRadius: '4px' }}>
                      {r.referralLink}
                    </span>
                  </td>
                  <td style={{ fontWeight: 700, color: 'var(--gl)' }}>{r.earnings}</td>
                  <td>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: '4px',
                      padding: '3px 10px', borderRadius: '100px', fontSize: '0.72rem', fontWeight: 600,
                      background: statusBg[r.status], color: statusColor[r.status],
                    }}>
                      {r.status === 'active' ? '●' : '◐'} {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--mu)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>👥</div>
            <div style={{ fontFamily: 'var(--fu)', fontWeight: 600 }}>No referrals yet</div>
          </div>
        )}
      </div>

      {/* Tip */}
      <div style={{
        marginTop: '16px', padding: '14px 18px',
        background: 'rgba(191,201,209,0.06)', borderRadius: '10px',
        border: '1.5px solid rgba(191,201,209,0.12)', fontSize: '0.82rem', color: 'var(--sl)',
      }}>
        <strong style={{ color: 'var(--teal)' }}>💡 Tip:</strong> Share your affiliate link to earn 20% on their first year + 10% recurring commission.
      </div>
    </div>
  );
}
