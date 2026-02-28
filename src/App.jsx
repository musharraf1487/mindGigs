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
import { LandingBoard } from './components/pages/LandingBoard';
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

// Using mock data for fallback/initial state
import { mockExperts } from './data/mockData';
import { useAuth } from './context/AuthContext';
import { db } from './config/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

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
  const { currentUser, userData, logout: firebaseLogout } = useAuth();
  const [page, setPage] = useState('landingboard');
  const [showLoginSelector, setShowLoginSelector] = useState(false);
  const [loginRole, setLoginRole] = useState(null);
  const [notifs, setNotifs] = useState([]);
  const [experts, setExperts] = useState(mockExperts);
  const [activeExpertId, setActiveExpertId] = useState(null);

  React.useEffect(() => {
    const fetchExperts = async () => {
      try {
        const q = query(
          collection(db, 'users'),
          where('role', '==', 'expert'),
          where('onboardingComplete', '==', true)
        );
        const snapshot = await getDocs(q);
        const liveExperts = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        if (liveExperts.length > 0) setExperts(liveExperts);
      } catch (err) {
        console.error("Error fetching experts:", err);
      }
    };
    fetchExperts();
  }, [userData]); // Re-fetch loosely around login/state changes

  const notify = (msg, type = 'success') => {
    const id = Date.now();
    setNotifs((p) => [...p, { id, msg, type }]);
    setTimeout(() => setNotifs((p) => p.filter((n) => n.id !== id)), 3500);
  };

  React.useEffect(() => {
    // If user data loads and we are on the login page, redirect them to dashboard
    if (userData && page === 'login') {
      const { role } = userData;
      if (role === 'expert') setPage('expert-dashboard');
      else if (role === 'admin') setPage('admin-dashboard');
      else if (role === 'affiliate') setPage('affiliate-dashboard');
      else if (role === 'client') setPage('client-dashboard');
      notify(`Welcome back!`);
    }
  }, [userData, page]);

  const logout = async () => {
    await firebaseLogout();
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
      {page === 'landingboard' && (
        <LandingBoard nav={nav} onLogin={() => setShowLoginSelector(true)} />
      )}
      {page === 'experts' && (
        <ExpertsDirectory
          nav={nav}
          notify={notify}
          onLogin={() => setShowLoginSelector(true)}
          experts={experts}
        />
      )}
      {page === 'expert-dashboard' && userData?.role === 'expert' && (
        <ExpertDashboard user={userData} nav={nav} logout={logout} notify={notify} />
      )}
      {page === 'admin-dashboard' && userData?.role === 'admin' && (
        <AdminDashboard user={userData} nav={nav} logout={logout} notify={notify} />
      )}
      {page === 'affiliate-dashboard' && userData?.role === 'affiliate' && (
        <AffiliateDashboard user={userData} nav={nav} logout={logout} notify={notify} />
      )}
      {page === 'client-dashboard' && userData?.role === 'client' && (
        <ClientDashboard user={userData} nav={nav} logout={logout} notify={notify} />
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
