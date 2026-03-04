import React, { useState } from 'react';

export function Campaigns({ user, affiliateData, notify }) {
  const [showNew, setShowNew] = useState(false);
  const campaigns = affiliateData?.campaigns || [];

  const totalClicks = campaigns.reduce((s, c) => s + c.clicks, 0);
  const totalConversions = campaigns.reduce((s, c) => s + c.conversions, 0);
  const avgRoi = campaigns.length ? Math.round(campaigns.reduce((s, c) => s + parseFloat(c.roi), 0) / campaigns.length) : 0;

  const statusColor = { active: 'var(--gl)', paused: 'var(--gold)' };
  const statusBg = { active: 'rgba(255,178,122,0.1)', paused: 'rgba(232,197,71,0.1)' };

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--fu)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--gd)', marginBottom: '4px' }}>
            Marketing Campaigns
          </h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--mu)' }}>Track and manage your marketing campaigns</p>
        </div>
        <button
          onClick={() => { setShowNew(true); notify?.('Campaign creation opened', 'success'); }}
          style={{ padding: '9px 18px', background: 'var(--gb)', color: '#fff', borderRadius: '8px', fontFamily: 'var(--fu)', fontWeight: 600, fontSize: '0.82rem', cursor: 'pointer' }}
        >+ New Campaign</button>
      </div>

      {/* Summary Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
        {[
          { label: 'Total Clicks', val: totalClicks, color: 'var(--gb)', icon: '👆' },
          { label: 'Total Conversions', val: totalConversions, color: 'var(--gl)', icon: '✅' },
          { label: 'Avg ROI', val: `${avgRoi}%`, color: 'var(--gold)', icon: '📈' },
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

      {/* Campaigns Table */}
      <div className="table-wrap" style={{ marginBottom: '20px' }}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,155,81,0.07)' }}>
          <div style={{ fontFamily: 'var(--fu)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--gd)' }}>
            All Campaigns
          </div>
        </div>
        {campaigns.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Campaign</th>
                <th>Status</th>
                <th>Clicks</th>
                <th>Conversions</th>
                <th>Conv. Rate</th>
                <th>ROI</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((c, i) => {
                const convRate = c.clicks > 0 ? ((c.conversions / c.clicks) * 100).toFixed(1) + '%' : '0%';
                return (
                  <tr key={i}>
                    <td style={{ fontWeight: 600 }}>{c.name}</td>
                    <td>
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: '4px',
                        padding: '3px 10px', borderRadius: '100px', fontSize: '0.72rem', fontWeight: 600,
                        background: statusBg[c.status], color: statusColor[c.status],
                      }}>
                        {c.status === 'active' ? '●' : '⏸'} {c.status}
                      </span>
                    </td>
                    <td style={{ fontWeight: 600, color: 'var(--gb)' }}>{c.clicks.toLocaleString()}</td>
                    <td style={{ fontWeight: 600, color: 'var(--gl)' }}>{c.conversions}</td>
                    <td style={{ color: 'var(--sl)' }}>{convRate}</td>
                    <td>
                      <span style={{ fontWeight: 700, color: 'var(--gold)', fontFamily: 'var(--fu)' }}>{c.roi}</span>
                    </td>
                    <td>
                      <button
                        onClick={() => notify?.(`${c.status === 'active' ? 'Pausing' : 'Resuming'} ${c.name}`, 'success')}
                        style={{
                          padding: '5px 12px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer',
                          background: c.status === 'active' ? 'rgba(232,197,71,0.1)' : 'rgba(255,178,122,0.1)',
                          color: c.status === 'active' ? 'var(--gold)' : 'var(--gl)',
                          border: c.status === 'active' ? '1px solid rgba(232,197,71,0.2)' : '1px solid rgba(255,178,122,0.2)',
                        }}
                      >{c.status === 'active' ? 'Pause' : 'Resume'}</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--mu)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>📢</div>
            <div style={{ fontFamily: 'var(--fu)', fontWeight: 600 }}>No campaigns yet</div>
          </div>
        )}
      </div>

      {/* Pro Tip */}
      <div style={{ padding: '14px 18px', background: 'rgba(232,197,71,0.06)', borderRadius: '10px', border: '1.5px solid rgba(232,197,71,0.15)', fontSize: '0.82rem', color: 'var(--sl)' }}>
        <strong style={{ color: 'var(--gold)' }}>📊 Pro Tip:</strong> Email outreach and LinkedIn campaigns have the highest ROI. Try A/B testing different messages to optimize conversions.
      </div>
    </div>
  );
}
