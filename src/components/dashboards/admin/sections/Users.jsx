import React, { useState } from 'react';

export function Users({ user, adminData, notify }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredUsers = adminData?.users?.filter(u => {
    const matchSearch = u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchRole = filterRole === 'all' || u.role === filterRole;
    const matchStatus = filterStatus === 'all' || u.status === filterStatus;
    return matchSearch && matchRole && matchStatus;
  }) || [];

  const roleCounts = { expert: 0, affiliate: 0, visitor: 0 };
  adminData?.users?.forEach(u => { if (roleCounts[u.role] !== undefined) roleCounts[u.role]++; });

  const roleColor = { expert: 'var(--gl)', affiliate: 'var(--teal)', visitor: 'var(--mu)' };
  const roleBg = { expert: 'rgba(255,178,122,0.1)', affiliate: 'rgba(191,201,209,0.1)', visitor: 'rgba(138,145,153,0.1)' };
  const statusColor = { active: 'var(--gl)', suspended: 'var(--rd)', pending: 'var(--gold)' };
  const statusBg = { active: 'rgba(255,178,122,0.1)', suspended: 'rgba(232,68,68,0.1)', pending: 'rgba(232,197,71,0.1)' };

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--fu)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--gd)', marginBottom: '4px' }}>
            User Management
          </h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--mu)' }}>Manage platform users and permissions</p>
        </div>
        <button
          onClick={() => notify?.('Invite sent!', 'success')}
          style={{
            padding: '9px 18px', background: 'var(--gb)', color: '#fff',
            borderRadius: '8px', fontFamily: 'var(--fu)', fontWeight: 600,
            fontSize: '0.82rem', cursor: 'pointer',
          }}
        >
          + Invite User
        </button>
      </div>

      {/* Summary stat pills */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
        {Object.entries(roleCounts).map(([role, count]) => (
          <div key={role} style={{
            display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px',
            background: '#fff', borderRadius: '8px', border: '1px solid rgba(255,155,81,0.08)',
            boxShadow: '0 2px 8px rgba(37,52,63,0.04)',
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: roleColor[role], display: 'inline-block' }} />
            <span style={{ fontFamily: 'var(--fu)', fontWeight: 700, fontSize: '1rem', color: 'var(--gd)' }}>{count}</span>
            <span style={{ fontSize: '0.78rem', color: 'var(--mu)', textTransform: 'capitalize' }}>{role}s</span>
          </div>
        ))}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px',
          background: '#fff', borderRadius: '8px', border: '1px solid rgba(255,155,81,0.08)',
          boxShadow: '0 2px 8px rgba(37,52,63,0.04)',
        }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--gd)', display: 'inline-block' }} />
          <span style={{ fontFamily: 'var(--fu)', fontWeight: 700, fontSize: '1rem', color: 'var(--gd)' }}>{adminData?.users?.length || 0}</span>
          <span style={{ fontSize: '0.78rem', color: 'var(--mu)' }}>Total</span>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="🔍  Search by name or email…"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{
            flex: 1, padding: '10px 14px', border: '1.5px solid rgba(255,155,81,0.15)',
            borderRadius: '8px', fontSize: '0.875rem', fontFamily: 'var(--fb)',
            background: '#fff', outline: 'none', color: 'var(--ch)',
          }}
        />
        <select
          value={filterRole}
          onChange={e => setFilterRole(e.target.value)}
          style={{ padding: '10px 14px', border: '1.5px solid rgba(255,155,81,0.15)', borderRadius: '8px', background: '#fff', fontSize: '0.875rem', cursor: 'pointer', color: 'var(--ch)' }}
        >
          <option value="all">All Roles</option>
          <option value="expert">Experts</option>
          <option value="affiliate">Affiliates</option>
          <option value="visitor">Visitors</option>
        </select>
        <select
          value={filterStatus}
          onChange={e => setFilterStatus(e.target.value)}
          style={{ padding: '10px 14px', border: '1.5px solid rgba(255,155,81,0.15)', borderRadius: '8px', background: '#fff', fontSize: '0.875rem', cursor: 'pointer', color: 'var(--ch)' }}
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="suspended">Suspended</option>
        </select>
      </div>

      {/* Users Table */}
      <div className="table-wrap">
        <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,155,81,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: 'var(--fu)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--gd)' }}>
            Users <span style={{ fontWeight: 400, color: 'var(--mu)', fontSize: '0.82rem' }}>({filteredUsers.length})</span>
          </div>
        </div>
        {filteredUsers.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Joined</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((u, i) => (
                <tr key={i}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: 34, height: 34, borderRadius: '50%',
                        background: roleBg[u.role] || 'var(--gmt)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '0.9rem', flexShrink: 0
                      }}>
                        {u.role === 'expert' ? '🧠' : u.role === 'affiliate' ? '🔗' : '👤'}
                      </div>
                      <span style={{ fontWeight: 600, color: 'var(--ch)' }}>{u.name}</span>
                    </div>
                  </td>
                  <td style={{ color: 'var(--mu)', fontSize: '0.82rem' }}>{u.email}</td>
                  <td>
                    <span style={{
                      padding: '3px 10px', borderRadius: '100px', fontSize: '0.72rem', fontWeight: 700,
                      fontFamily: 'var(--fu)', textTransform: 'capitalize',
                      background: roleBg[u.role], color: roleColor[u.role],
                    }}>{u.role}</span>
                  </td>
                  <td>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: '4px',
                      padding: '3px 10px', borderRadius: '100px', fontSize: '0.72rem', fontWeight: 600,
                      background: statusBg[u.status] || 'rgba(138,145,153,0.1)',
                      color: statusColor[u.status] || 'var(--mu)',
                    }}>
                      {u.status === 'active' ? '●' : '○'} {u.status}
                    </span>
                  </td>
                  <td style={{ color: 'var(--mu)' }}>{u.joined}</td>
                  <td>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <button
                        onClick={() => notify?.(`Viewing ${u.name}`, 'success')}
                        style={{ padding: '5px 10px', borderRadius: '6px', background: 'var(--gmt)', color: 'var(--gm)', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', border: '1px solid rgba(255,155,81,0.12)' }}
                      >View</button>
                      <button
                        onClick={() => u.status === 'suspended'
                          ? notify?.(`${u.name} reactivated`, 'success')
                          : notify?.(`${u.name} suspended`, 'warning')}
                        style={{
                          padding: '5px 10px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer',
                          background: u.status === 'suspended' ? 'rgba(255,178,122,0.1)' : 'rgba(232,68,68,0.08)',
                          color: u.status === 'suspended' ? 'var(--gl)' : 'var(--rd)',
                          border: u.status === 'suspended' ? '1px solid rgba(255,178,122,0.2)' : '1px solid rgba(232,68,68,0.15)',
                        }}
                      >{u.status === 'suspended' ? 'Reactivate' : 'Suspend'}</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--mu)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>👥</div>
            <div style={{ fontFamily: 'var(--fu)', fontWeight: 600 }}>No users found</div>
            <div style={{ fontSize: '0.82rem', marginTop: '4px' }}>Try adjusting your filters</div>
          </div>
        )}
      </div>
    </div>
  );
}
