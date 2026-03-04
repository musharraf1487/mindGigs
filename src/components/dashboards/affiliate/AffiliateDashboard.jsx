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
    { id: 'overview', label: 'Overview', icon: '📊', group: 'MAIN' },
    { id: 'referrals', label: 'Referrals', icon: '👥', group: 'MAIN' },
    { id: 'campaigns', label: 'Campaigns', icon: '📢', group: 'MAIN' },
    { id: 'earnings', label: 'Earnings', icon: '💰', group: 'FINANCE' },
    { id: 'settings', label: 'Settings', icon: '⚙️', group: 'ACCOUNT' },
  ];

  const groups = ['MAIN', 'FINANCE', 'ACCOUNT'];

  const renderPage = () => {
    switch (active) {
      case 'overview': return <Overview user={user} affiliateData={affiliateData} notify={notify} />;
      case 'referrals': return <Referrals user={user} affiliateData={affiliateData} notify={notify} />;
      case 'campaigns': return <Campaigns user={user} affiliateData={affiliateData} notify={notify} />;
      case 'earnings': return <Earnings user={user} affiliateData={affiliateData} />;
      case 'settings': return <Settings user={user} notify={notify} logout={logout} nav={nav} />;
      default: return <Overview user={user} affiliateData={affiliateData} notify={notify} />;
    }
  };

  const Sidebar = () => (
    <div className="sidebar sidebar-aff">
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="sidebar-logo-dot" style={{ background: '#1ab8a0' }} />
        <span className="sidebar-logo-mark">mindGigs</span>
        <span className="sidebar-role-badge role-aff">Affiliate</span>
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
                  className={`nav-item nav-item-aff ${active === item.id ? 'active' : ''}`}
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
          <div style={{
            width: 36, height: 36, borderRadius: '50%',
            background: 'rgba(191,201,209,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1rem', flexShrink: 0,
          }}>🔗</div>
          <div>
            <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#fff' }}>{user.name}</div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)' }}>Affiliate Partner</div>
          </div>
        </div>
        <button
          onClick={() => { logout(); nav('home'); }}
          style={{
            width: '100%', padding: '8px', borderRadius: '6px',
            background: 'rgba(232,68,68,0.12)', color: '#e84444',
            fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer',
            border: '1px solid rgba(232,68,68,0.2)', transition: 'all 0.2s',
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
      <div className="topbar-avatar" style={{ background: 'rgba(191,201,209,0.15)', border: '2px solid rgba(191,201,209,0.3)' }}>🔗</div>
      <div className="topbar-name">{user.name}</div>
    </div>
  );

  return (
    <DashShell
      sidebar={<Sidebar />}
      topbarTitle={`🔗  ${navItems.find(i => i.id === active)?.label || 'Dashboard'}`}
      topbarRight={topbarRight}
    >
      {renderPage()}
    </DashShell>
  );
}
