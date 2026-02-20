import React, { useState } from 'react';
import { DashShell } from '../../common/DashShell';
import { affiliateData } from '../../../data/mockData';
import { Overview } from './sections/Overview';
import { Referrals } from './sections/Referrals';
import { Campaigns } from './sections/Campaigns';
import { Earnings } from './sections/Earnings';
import { Settings } from './sections/Settings';

export function AffiliateDashboard({ user, nav, logout, notify }) {
  const [active, setActive] = useState('overview');

  const navItems = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'referrals', label: 'Referrals', icon: '👥' },
    { id: 'campaigns', label: 'Campaigns', icon: '📢' },
    { id: 'earnings', label: 'Earnings', icon: '💰' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  const renderPage = () => {
    switch (active) {
      case 'overview':
        return <Overview user={user} affiliateData={affiliateData} notify={notify} />;
      case 'referrals':
        return <Referrals user={user} affiliateData={affiliateData} notify={notify} />;
      case 'campaigns':
        return <Campaigns user={user} affiliateData={affiliateData} />;
      case 'earnings':
        return <Earnings user={user} affiliateData={affiliateData} />;
      case 'settings':
        return <Settings user={user} notify={notify} logout={logout} nav={nav} />;
      default:
        return <Overview user={user} affiliateData={affiliateData} notify={notify} />;
    }
  };

  const Sidebar = () => (
    <div className="sidebar-nav">
      <div style={{ padding: '20px 10px' }}>
        <div style={{ marginBottom: '30px' }}>
          <div style={{ fontSize: '14px', fontWeight: '500', color: '#666', marginBottom: '8px' }}>
            {user.name}
          </div>
          <div style={{ fontSize: '12px', color: '#999' }}>Affiliate Partner</div>
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
