import React, { useState } from 'react';
import { DashShell } from '../../common/DashShell';
import { expertData } from '../../../data/mockData';
import { Overview } from './sections/Overview';
import { Offers } from './sections/Offers';
import { Bookings } from './sections/Bookings';
import { Subscriptions } from './sections/Subscriptions';
import { Products } from './sections/Products';
import { Affiliate } from './sections/Affiliate';
import { Earnings } from './sections/Earnings';
import { Settings } from './sections/Settings';

export function ExpertDashboard({ user, nav, logout, notify }) {
  const [active, setActive] = useState('overview');

  const navItems = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'offers', label: 'My Offers', icon: '💼' },
    { id: 'bookings', label: 'Bookings', icon: '📅' },
    { id: 'subscriptions', label: 'Subscriptions', icon: '🔄' },
    { id: 'products', label: 'Digital Products', icon: '🎁' },
    { id: 'affiliate', label: 'Affiliate', icon: '🚀' },
    { id: 'earnings', label: 'Earnings', icon: '💰' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  const renderPage = () => {
    switch (active) {
      case 'overview':
        return <Overview user={user} expertData={expertData} notify={notify} nav={nav} />;
      case 'offers':
        return <Offers user={user} expertData={expertData} notify={notify} />;
      case 'bookings':
        return <Bookings user={user} expertData={expertData} />;
      case 'subscriptions':
        return <Subscriptions user={user} expertData={expertData} />;
      case 'products':
        return <Products user={user} expertData={expertData} />;
      case 'affiliate':
        return <Affiliate user={user} expertData={expertData} />;
      case 'earnings':
        return <Earnings user={user} expertData={expertData} />;
      case 'settings':
        return <Settings user={user} notify={notify} logout={logout} nav={nav} />;
      default:
        return <Overview user={user} expertData={expertData} notify={notify} nav={nav} />;
    }
  };

  const Sidebar = () => (
    <div className="sidebar-nav">
      <div style={{ padding: '20px 10px' }}>
        <div style={{ marginBottom: '30px' }}>
          <div style={{ fontSize: '14px', fontWeight: '500', color: '#666', marginBottom: '8px' }}>
            {user.name}
          </div>
          <div style={{ fontSize: '12px', color: '#999' }}>Expert</div>
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
