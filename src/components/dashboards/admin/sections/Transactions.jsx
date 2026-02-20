import React, { useState } from 'react';

export function Transactions({ user, adminData }) {
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredTransactions = adminData?.recentTransactions?.filter(txn => 
    statusFilter === 'all' || txn.status === statusFilter
  ) || [];

  return (
    <div className="dash-content">
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px' }}>Transactions</h2>
        <div style={{ fontSize: '14px', color: '#666' }}>Monitor all platform transactions</div>
      </div>

      <div className="grid-3" style={{ gap: '20px', marginBottom: '30px' }}>
        <div className="stat-card">
          <div style={{ fontSize: '28px', fontWeight: '700', color: '#1aa34a', marginBottom: '8px' }}>
            ${adminData?.recentTransactions?.reduce((sum, t) => sum + parseFloat(t.amount), 0).toFixed(0) || '0'}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>Total Volume</div>
        </div>
        <div className="stat-card">
          <div style={{ fontSize: '28px', fontWeight: '700', color: '#0066ff', marginBottom: '8px' }}>
            {adminData?.recentTransactions?.filter(t => t.status === 'completed').length || 0}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>Completed</div>
        </div>
        <div className="stat-card">
          <div style={{ fontSize: '28px', fontWeight: '700', color: '#f39c12', marginBottom: '8px' }}>
            {adminData?.recentTransactions?.filter(t => t.status === 'pending').length || 0}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>Pending</div>
        </div>
      </div>

      {/* Filter */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        {['all', 'completed', 'pending'].map(status => (
          <button
            key={status}
            onClick={() => setStatusFilter(status)}
            style={{
              padding: '8px 16px',
              backgroundColor: statusFilter === status ? '#0066ff' : '#f0f0f0',
              color: statusFilter === status ? '#fff' : '#333',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              textTransform: 'capitalize'
            }}
          >
            {status === 'all' ? 'All Transactions' : status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Transactions Table */}
      <div className="card">
        <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Transaction History</h3>
        </div>
        <div style={{ padding: '20px' }}>
          {filteredTransactions.length > 0 ? (
            <div>
              {filteredTransactions.map((txn, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', paddingBottom: '20px', borderBottom: i < filteredTransactions.length - 1 ? '1px solid #eee' : 'none' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: '600', marginBottom: '4px' }}>{txn.user}</div>
                    <div style={{ fontSize: '12px', color: '#999' }}>
                      {txn.id} • {txn.type} • {txn.date}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right', marginRight: '20px' }}>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#1aa34a' }}>+{txn.amount}</div>
                  </div>
                  <div>
                    <span style={{ 
                      display: 'inline-block', 
                      padding: '6px 12px', 
                      borderRadius: '4px', 
                      fontSize: '12px', 
                      fontWeight: '500',
                      backgroundColor: txn.status === 'completed' ? '#d4f5e4' : '#fef3c7',
                      color: txn.status === 'completed' ? '#1aa34a' : '#92400e'
                    }}>
                      {txn.status === 'completed' ? '✓ Completed' : '⏳ Pending'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', color: '#999', padding: '40px 20px' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>💳</div>
              No transactions found
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
