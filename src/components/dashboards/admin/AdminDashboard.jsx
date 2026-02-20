import React, { useState } from 'react';
import { DashShell } from '../../common/DashShell';
import { adminData } from '../../../data/mockData';
import { Overview } from './sections/Overview';
import { Users } from './sections/Users';
import { Transactions } from './sections/Transactions';
import { Analytics } from './sections/Analytics';
import { Settings } from './sections/Settings';

export function AdminDashboard({ user, nav, logout, notify }) {
  const [active, setActive] = useState('overview');

  const navItems = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'users', label: 'Users', icon: '👥' },
    { id: 'transactions', label: 'Transactions', icon: '💳' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  const renderPage = () => {
    switch (active) {
      case 'overview':
        return <Overview user={user} adminData={adminData} notify={notify} />;
      case 'users':
        return <Users user={user} adminData={adminData} notify={notify} />;
      case 'transactions':
        return <Transactions user={user} adminData={adminData} />;
      case 'analytics':
        return <Analytics user={user} adminData={adminData} />;
      case 'settings':
        return <Settings user={user} notify={notify} logout={logout} nav={nav} />;
      default:
        return <Overview user={user} adminData={adminData} notify={notify} />;
    }
  };

  const Sidebar = () => (
    <div className="sidebar-nav">
      <div style={{ padding: '20px 10px' }}>
        <div style={{ marginBottom: '30px' }}>
          <div style={{ fontSize: '14px', fontWeight: '500', color: '#666', marginBottom: '8px' }}>
            {user.name}
          </div>
          <div style={{ fontSize: '12px', color: '#999' }}>Platform Admin</div>
        </div>
        {navItems.map(item => (
          <div
            key={item.id}
            className={`nav-item ${active === item.id ? 'active' : ''}`}
            onClick={() => setActive(item.id)}
            style={{ cursor: 'pointer', padding: '10px 12px', marginBottom: '8px', borderRadius: '6px', fontWeight: active === item.id ? '500' : '400' }}
          >
            <span style={{ marginRight: '8px' }}>{item.icon}</span>
            {item.label}
          </div>
        ))}
        <button
          onClick={() => {
            logout();
            nav('home');
          }}
          style={{
            marginTop: '20px',
            width: '100%',
            padding: '10px',
            border: 'none',
            borderRadius: '6px',
            backgroundColor: '#f5f5f5',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            color: '#e74c3c',
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );

  return (
    <DashShell
      sidebar={<Sidebar />}
      topbarTitle={navItems.find(i => i.id === active)?.label || 'Dashboard'}
    >
      {renderPage()}
    </DashShell>
  );
}
