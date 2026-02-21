import React, { useState } from 'react';

export function Earnings({ user, affiliateData }) {
  const [period, setPeriod] = useState('all');

  const commissions = parseFloat(affiliateData?.totalCommissions?.replace('$', '') || 0);
  const pending = parseFloat(affiliateData?.pendingPayout || 0);
  const total = parseFloat(affiliateData?.totalEarnings?.replace('$', '') || 0);
  const withdrawn = total - pending;

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--fu)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--gd)', marginBottom: '4px' }}>
            Earnings & Payouts
          </h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--mu)' }}>Your commission history and payout records</p>
        </div>
        <select
          value={period}
          onChange={e => setPeriod(e.target.value)}
          style={{ padding: '9px 14px', border: '1.5px solid rgba(255,155,81,0.15)', borderRadius: '8px', background: '#fff', fontSize: '0.875rem', cursor: 'pointer', color: 'var(--ch)' }}
        >
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="year">This Year</option>
          <option value="all">All Time</option>
        </select>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
        {[
          { label: 'Total Commissions', val: `$${commissions.toLocaleString()}`, ch: 'All commissions earned', color: 'var(--gl)', icon: '💰' },
          { label: 'Pending Payout', val: `$${pending}`, ch: 'Ready to withdraw', color: 'var(--gold)', icon: '⏳' },
          { label: 'Total Withdrawn', val: `$${withdrawn.toLocaleString()}`, ch: 'Successfully paid out', color: 'var(--teal)', icon: '✅' },
        ].map((s, i) => (
          <div key={i} className="stat-card" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
              <div className="stat-label">{s.label}</div>
              <span>{s.icon}</span>
            </div>
            <div className="stat-val" style={{ color: s.color }}>{s.val}</div>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: s.color, marginTop: '6px' }}>{s.ch}</div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: s.color, opacity: 0.3 }} />
          </div>
        ))}
      </div>

      {/* Pending Payout Banner */}
      {pending > 0 && (
        <div style={{
          marginBottom: '24px', padding: '16px 20px',
          background: 'linear-gradient(135deg, rgba(255,178,122,0.08), rgba(191,201,209,0.06))',
          borderRadius: '12px', border: '1.5px solid rgba(255,178,122,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div>
            <div style={{ fontFamily: 'var(--fu)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--gd)', marginBottom: '4px' }}>
              💸 ${pending} ready for withdrawal
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--mu)' }}>Payouts process every 2 weeks on Fridays. Min. $50.</div>
          </div>
          <button style={{
            padding: '10px 20px', background: 'var(--gb)', color: '#fff',
            borderRadius: '8px', fontFamily: 'var(--fu)', fontWeight: 600, fontSize: '0.82rem', cursor: 'pointer',
          }}>
            Request Payout
          </button>
        </div>
      )}

      {/* Payout History */}
      <div className="table-wrap">
        <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,155,81,0.07)' }}>
          <div style={{ fontFamily: 'var(--fu)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--gd)' }}>Payout History</div>
        </div>
        {affiliateData?.payouts?.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {affiliateData.payouts.map((p, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 500 }}>{p.date}</td>
                  <td style={{ fontWeight: 700, color: 'var(--gl)' }}>+{p.amount}</td>
                  <td>
                    <span style={{ padding: '3px 10px', borderRadius: '100px', fontSize: '0.72rem', fontWeight: 600, background: 'rgba(255,155,81,0.06)', color: 'var(--gm)' }}>
                      {p.method}
                    </span>
                  </td>
                  <td>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: '4px',
                      padding: '3px 10px', borderRadius: '100px', fontSize: '0.72rem', fontWeight: 600,
                      background: 'rgba(255,178,122,0.1)', color: 'var(--gl)',
                    }}>
                      ✓ {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--mu)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>💰</div>
            <div style={{ fontFamily: 'var(--fu)', fontWeight: 600 }}>No payouts yet</div>
            <div style={{ fontSize: '0.82rem', marginTop: '4px' }}>Reach the $50 minimum to request your first payout</div>
          </div>
        )}
      </div>
    </div>
  );
}
