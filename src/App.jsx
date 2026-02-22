import React, { useState } from 'react';
import { Notifications } from './components/common/Notifications';
import { DashShell } from './components/common/DashShell';
import { LandingPage } from './components/pages/LandingPage';
import { LoginPage } from './components/pages/LoginPage';
import { SignupPage } from './components/pages/SignupPage';
import { OnboardingPage } from './components/pages/OnboardingPage';
import { PublicProfile } from './components/pages/PublicProfile';
import { BookingFlow } from './components/pages/BookingFlow';
import { ExpertsDirectory } from './components/pages/ExpertsDirectory';
import { ExpertDashboard } from './components/dashboards/expert/ExpertDashboard';
import { AdminDashboard } from './components/dashboards/admin/AdminDashboard';
import { AffiliateDashboard } from './components/dashboards/affiliate/AffiliateDashboard';
import { ClientDashboard } from './components/dashboards/client/ClientDashboard';

// Import stylesheets
import './styles/globals.css';
import './styles/utilities.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/pages.css';

// Using mock data
// Using mock data
import { mockUsers, mockExperts } from './data/mockData';

function LoginSelectorModal({ onClose, onSelect }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        <div className="slabel">Access Your Account</div>
        <h2 className="stitle" style={{ fontSize: '1.6rem' }}>
          Who are you logging in as?
        </h2>
        <p style={{ fontSize: '.875rem', color: 'var(--sl)', marginTop: '8px' }}>
          mindGigs has separate portals for experts, affiliates, and administrators.
        </p>
        <div className="login-selector">
          {[
            {
              role: 'expert',
              icon: '🧠',
              title: 'Expert / Creator',
              sub: 'Access your profile, bookings & earnings',
              cls: 'lo-expert',
            },
            {
              role: 'client',
              icon: '🛍️',
              title: 'Client / Buyer',
              sub: 'View bookings, subscriptions & purchases',
              cls: 'lo-expert',
            },
            {
              role: 'affiliate',
              icon: '🔗',
              title: 'Affiliate Partner',
              sub: 'View referrals, commissions & payouts',
              cls: 'lo-aff',
            },
            {
              role: 'admin',
              icon: '🛡️',
              title: 'Administrator',
              sub: 'Platform management & oversight',
              cls: 'lo-admin',
            },
          ].map((o) => (
            <div
              key={o.role}
              className="login-option"
              onClick={() => onSelect(o.role)}
            >
              <div className={`login-option-icon ${o.cls}`}>{o.icon}</div>
              <div>
                <div className="login-option-title">{o.title}</div>
                <div className="login-option-sub">{o.sub}</div>
              </div>
              <span className="login-option-arrow">→</span>
            </div>
          ))}
        </div>
        <p
          style={{
            textAlign: 'center',
            fontSize: '.8rem',
            color: 'var(--mu)',
            marginTop: '20px',
          }}
        >
          Demo credentials: any role email + password "demo"
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState('home');
  const [user, setUser] = useState(null);
  const [showLoginSelector, setShowLoginSelector] = useState(false);
  const [loginRole, setLoginRole] = useState(null);
  const [notifs, setNotifs] = useState([]);
  const [experts, setExperts] = useState(mockExperts);
  const [activeExpertId, setActiveExpertId] = useState(null);

  const notify = (msg, type = 'success') => {
    const id = Date.now();
    setNotifs((p) => [...p, { id, msg, type }]);
    setTimeout(() => setNotifs((p) => p.filter((n) => n.id !== id)), 3500);
  };

  const login = (role) => {
    const u = mockUsers[role];
    setUser(u);
    setShowLoginSelector(false);
    setLoginRole(null);
    if (role === 'expert') setPage('expert-dashboard');
    else if (role === 'admin') setPage('admin-dashboard');
    else if (role === 'affiliate') setPage('affiliate-dashboard');
    else if (role === 'client') setPage('client-dashboard');
    notify(`Welcome back, ${u.name}!`);
  };

  const logout = () => {
    setUser(null);
    setPage('home');
    notify('Logged out successfully.');
  };

  const nav = (p, ctx) => {
    if (ctx?.expertId) setActiveExpertId(ctx.expertId);
    setPage(p);
  };

  return (
    <>
      <Notifications notifs={notifs} />

      {/* LOGIN SELECTOR MODAL */}
      {showLoginSelector && (
        <LoginSelectorModal
          onClose={() => setShowLoginSelector(false)}
          onSelect={(role) => {
            setShowLoginSelector(false);
            setLoginRole(role);
            setPage('login');
          }}
        />
      )}

      {/* ROUTE RENDERING */}
      {page === 'home' && (
        <LandingPage nav={nav} onLogin={() => setShowLoginSelector(true)} />
      )}
      {page === 'login' && (
        <LoginPage
          role={loginRole}
          login={login}
          nav={nav}
          onSwitchRole={() => setShowLoginSelector(true)}
          notify={notify}
        />
      )}
      {page === 'signup' && <SignupPage nav={nav} notify={notify} />}
      {page === 'onboarding' && (
        <OnboardingPage
          nav={nav}
          notify={notify}
          addExpert={(e) => setExperts((prev) => [e, ...prev])}
        />
      )}
      {page === 'experts' && (
        <ExpertsDirectory
          nav={nav}
          notify={notify}
          onLogin={() => setShowLoginSelector(true)}
          experts={experts}
        />
      )}
      {page === 'expert-dashboard' && user?.role === 'expert' && (
        <ExpertDashboard user={user} nav={nav} logout={logout} notify={notify} />
      )}
      {page === 'admin-dashboard' && user?.role === 'admin' && (
        <AdminDashboard user={user} nav={nav} logout={logout} notify={notify} />
      )}
      {page === 'affiliate-dashboard' && user?.role === 'affiliate' && (
        <AffiliateDashboard user={user} nav={nav} logout={logout} notify={notify} />
      )}
      {page === 'client-dashboard' && user?.role === 'client' && (
        <ClientDashboard user={user} nav={nav} logout={logout} notify={notify} />
      )}
      {page === 'public-profile' && (
        <PublicProfile
          nav={nav}
          notify={notify}
          expert={experts.find((e) => e.id === activeExpertId) || experts[0]}
        />
      )}
      {page === 'booking' && <BookingFlow nav={nav} notify={notify} />}
    </>
  );
}
