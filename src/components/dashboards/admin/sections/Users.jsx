import React, { useState } from 'react';

export function Users({ user, adminData, notify }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');

  const filteredUsers = adminData?.users?.filter(u => {
    const matchesSearch = u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          u.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || u.role === filterRole;
    return matchesSearch && matchesRole;
  }) || [];

  const handleSuspend = (userName) => {
    notify?.(`${userName} account suspended`, 'warning');
  };

  const handleReactivate = (userName) => {
    notify?.(`${userName} account reactivated`, 'success');
  };

  return (
    <div className="dash-content">
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px' }}>User Management</h2>
        <div style={{ fontSize: '14px', color: '#666' }}>Manage platform users and permissions</div>
      </div>

      {/* Search & Filter */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ flex: 1, padding: '10px 12px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px' }}
        />
        <select 
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
          style={{ padding: '10px 12px', border: '1px solid #ddd', borderRadius: '6px', backgroundColor: '#fff', cursor: 'pointer', fontSize: '14px' }}
        >
          <option value="all">All Roles</option>
          <option value="expert">Experts</option>
          <option value="affiliate">Affiliates</option>
          <option value="visitor">Visitors</option>
        </select>
      </div>

      {/* Users Table */}
      <div className="card">
        <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Users ({filteredUsers.length})</h3>
        </div>
        <div style={{ padding: '20px' }}>
          {filteredUsers.length > 0 ? (
            <div>
              {filteredUsers.map((u, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', paddingBottom: '20px', borderBottom: i < filteredUsers.length - 1 ? '1px solid #eee' : 'none' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: '600', marginBottom: '4px' }}>{u.name}</div>
                    <div style={{ fontSize: '12px', color: '#999', marginBottom: '6px' }}>{u.email}</div>
                    <div style={{ fontSize: '12px' }}>
                      <span style={{ display: 'inline-block', backgroundColor: '#f0f0f0', padding: '2px 8px', borderRadius: '3px', marginRight: '8px', fontWeight: '500', textTransform: 'capitalize' }}>
                        {u.role}
                      </span>
                      <span style={{ display: 'inline-block', backgroundColor: u.status === 'active' ? '#d4f5e4' : u.status === 'suspended' ? '#fee2e2' : '#f0f0f0', padding: '2px 8px', borderRadius: '3px', fontWeight: '500', color: u.status === 'active' ? '#1aa34a' : u.status === 'suspended' ? '#dc2626' : '#666' }}>
                        {u.status === 'active' ? '✓ Active' : u.status === 'suspended' ? '⛔ Suspended' : u.status}
                      </span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '12px', color: '#999', marginBottom: '8px' }}>Joined {u.joined}</div>
                    <button 
                      onClick={() => u.status === 'suspended' ? handleReactivate(u.name) : handleSuspend(u.name)}
                      style={{ padding: '6px 12px', backgroundColor: u.status === 'suspended' ? '#d4f5e4' : '#fee2e2', color: u.status === 'suspended' ? '#1aa34a' : '#dc2626', border: 'none', borderRadius: '4px', fontSize: '12px', fontWeight: '500', cursor: 'pointer' }}
                    >
                      {u.status === 'suspended' ? 'Reactivate' : 'Suspend'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', color: '#999', padding: '40px 20px' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>👥</div>
              No users found
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
