import React, { useState } from 'react';

export function Transactions({ user, adminData }) {
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  const txns = adminData?.recentTransactions || [];
  const filtered = txns.filter(t =>
    (statusFilter === 'all' || t.status === statusFilter) &&
    (typeFilter === 'all' || t.type === typeFilter)
  );

  const totalVolume = txns.reduce((s, t) => s + parseFloat(t.amount.replace('$', '')), 0);
  const completedCnt = txns.filter(t => t.status === 'completed').length;
  const pendingCnt = txns.filter(t => t.status === 'pending').length;
  const types = [...new Set(txns.map(t => t.type))];

  const statusColor = { completed: 'var(--gl)', pending: 'var(--gold)' };
  const statusBg = { completed: 'rgba(255,178,122,0.1)', pending: 'rgba(232,197,71,0.1)' };

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <h2 style={{ fontFamily: 'var(--fu)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--gd)', marginBottom: '4px' }}>
          Transactions
        </h2>
        <p style={{ fontSize: '0.875rem', color: 'var(--mu)' }}>Monitor all platform financial activity</p>
      </div>

      {/* Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
        <div className="stat-card">
          <div className="stat-label">Total Volume</div>
          <div className="stat-val" style={{ color: 'var(--gl)' }}>${totalVolume.toLocaleString()}</div>
          <div className="stat-change stat-change-gr">All transactions</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Completed</div>
          <div className="stat-val" style={{ color: 'var(--teal)' }}>{completedCnt}</div>
          <div className="stat-change stat-change-tl">Successfully processed</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Pending</div>
          <div className="stat-val" style={{ color: 'var(--gold)' }}>{pendingCnt}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--gold)', fontWeight: 600, marginTop: '6px' }}>Awaiting confirmation</div>
        </div>
      </div>

      {/* Filter Bar */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <select
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value)}
          style={{ padding: '9px 14px', border: '1.5px solid rgba(255,155,81,0.15)', borderRadius: '8px', background: '#fff', fontSize: '0.875rem', cursor: 'pointer', color: 'var(--ch)' }}
        >
          <option value="all">All Status</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
        <select
          value={typeFilter}
          onChange={e => setTypeFilter(e.target.value)}
          style={{ padding: '9px 14px', border: '1.5px solid rgba(255,155,81,0.15)', borderRadius: '8px', background: '#fff', fontSize: '0.875rem', cursor: 'pointer', color: 'var(--ch)' }}
        >
          <option value="all">All Types</option>
          {types.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', alignItems: 'center', padding: '9px 14px', background: 'rgba(255,178,122,0.08)', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600, color: 'var(--gm)' }}>
          {filtered.length} transaction{filtered.length !== 1 ? 's' : ''} shown
        </div>
      </div>

      {/* Table */}
      <div className="table-wrap">
        {filtered.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>User</th>
                <th>Type</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((txn, i) => (
                <tr key={i}>
                  <td>
                    <span style={{ fontFamily: 'monospace', fontSize: '0.78rem', color: 'var(--mu)', background: 'var(--gmt)', padding: '2px 8px', borderRadius: '4px' }}>
                      {txn.id}
                    </span>
                  </td>
                  <td style={{ fontWeight: 600 }}>{txn.user}</td>
                  <td>
                    <span style={{ padding: '3px 10px', borderRadius: '100px', fontSize: '0.72rem', fontWeight: 600, background: 'rgba(255,155,81,0.06)', color: 'var(--gm)' }}>
                      {txn.type}
                    </span>
                  </td>
                  <td style={{ color: 'var(--mu)' }}>{txn.date}</td>
                  <td style={{ fontWeight: 700, color: 'var(--gl)' }}>+{txn.amount}</td>
                  <td>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: '4px',
                      padding: '3px 10px', borderRadius: '100px', fontSize: '0.72rem', fontWeight: 600,
                      background: statusBg[txn.status] || 'rgba(138,145,153,0.1)',
                      color: statusColor[txn.status] || 'var(--mu)',
                    }}>
                      {txn.status === 'completed' ? '✓' : '⏳'} {txn.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--mu)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>💳</div>
            <div style={{ fontFamily: 'var(--fu)', fontWeight: 600 }}>No transactions found</div>
            <div style={{ fontSize: '0.82rem', marginTop: '4px' }}>Try adjusting filters</div>
          </div>
        )}
      </div>
    </div>
  );
}
