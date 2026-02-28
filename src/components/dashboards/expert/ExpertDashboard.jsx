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
    { id: 'overview', label: 'Overview', icon: '📊', group: 'MAIN' },
    { id: 'offers', label: 'My Offers', icon: '💼', group: 'MANAGEMENT' },
    { id: 'bookings', label: 'Bookings', icon: '📅', group: 'MANAGEMENT' },
    { id: 'subscriptions', label: 'Subscriptions', icon: '🔄', group: 'MANAGEMENT' },
    { id: 'products', label: 'Digital Products', icon: '🎁', group: 'MANAGEMENT' },
    { id: 'affiliate', label: 'Affiliate', icon: '🚀', group: 'NETWORK' },
    { id: 'earnings', label: 'Earnings', icon: '💰', group: 'NETWORK' },
    { id: 'settings', label: 'Settings', icon: '⚙️', group: 'ACCOUNT' },
  ];

  const groups = ['MAIN', 'MANAGEMENT', 'NETWORK', 'ACCOUNT'];

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
    <div className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="sidebar-logo-dot" />
        <span className="sidebar-logo-mark">mindGigs</span>
        <span className="sidebar-role-badge role-expert">Expert</span>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {groups.map(group => {
          const items = navItems.filter(i => i.group === group);
          return (
            <div key={group}>
              <div className="nav-group-label">{group}</div>
              {items.map(item => (
                <button
                  key={item.id}
                  className={`nav-item ${active === item.id ? 'active' : ''}`}
                  onClick={() => setActive(item.id)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <div className="topbar-avatar" style={{ width: 32, height: 32, fontSize: '0.8rem' }}>🧠</div>
          <div style={{ overflow: 'hidden' }}>
            <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {user.name}
            </div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)' }}>Certified Expert</div>
          </div>
        </div>
        <button
          onClick={() => {
            logout();
            nav('home');
          }}
          style={{
            width: '100%',
            padding: '8px',
            borderRadius: '6px',
            background: 'rgba(232,68,68,0.12)',
            color: '#e84444',
            fontSize: '0.82rem',
            fontWeight: 600,
            cursor: 'pointer',
            border: '1px solid rgba(232,68,68,0.2)',
            transition: 'all 0.2s',
          }}
          onMouseOver={e => e.currentTarget.style.background = 'rgba(232,68,68,0.22)'}
          onMouseOut={e => e.currentTarget.style.background = 'rgba(232,68,68,0.12)'}
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );

  const topbarRight = (
    <div className="topbar-user">
      <div style={{ fontSize: '0.82rem', color: '#666' }}>
        {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
      </div>
      <div className="topbar-avatar">🧠</div>
      <div className="topbar-name">{user.name}</div>
    </div>
  );

  return (
    <DashShell
      sidebar={<Sidebar />}
      topbarTitle={`✨ ${navItems.find(i => i.id === active)?.label || 'Dashboard'}`}
      topbarRight={topbarRight}
    >
      {renderPage()}
    </DashShell>
  );
}
