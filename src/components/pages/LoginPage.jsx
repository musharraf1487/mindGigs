import React, { useState } from 'react';
import { mockUsers } from '../../data/mockData';

function AuthShell({ children, nav }) {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--gmt)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 60% 60% at 50% 0%,rgba(255,178,122,.12) 0%,transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div style={{ width: '100%', maxWidth: 480, position: 'relative', zIndex: 1 }}>
        <div
          style={{ textAlign: 'center', marginBottom: 32, cursor: 'pointer' }}
          onClick={() => nav('home')}
        >
          <span
            style={{
              fontFamily: 'var(--fu)',
              fontWeight: 800,
              fontSize: '1.4rem',
              color: 'var(--gd)',
            }}
          >
            🌿 mindGigs
          </span>
        </div>
        <div className="card" style={{ padding: 40 }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export function LoginPage({ role, login, nav, onSwitchRole, notify }) {
  const [email, setEmail] = useState(role ? mockUsers[role]?.email : '');
  const [pass, setPass] = useState('demo');
  const [forgot, setForgot] = useState(false);

  const roleConfig = {
    expert: { label: 'Expert Portal', color: 'var(--gb)', icon: '🧠', badge: 'role-expert' },
    admin: { label: 'Admin Portal', color: 'var(--gold)', icon: '🛡️', badge: 'role-admin' },
    affiliate: {
      label: 'Affiliate Portal',
      color: 'var(--teal)',
      icon: '🔗',
      badge: 'role-aff',
    },
  };
  const rc = role ? roleConfig[role] : roleConfig.expert;

  const handleLogin = () => {
    const u = Object.values(mockUsers).find((u) => u.email === email && u.pass === pass);
    if (u) login(u.role);
    else notify('Invalid credentials. Try: expert@mindgigs.com / demo', 'error');
  };

  if (forgot)
    return (
      <AuthShell nav={nav}>
        <div className="slabel">Password Reset</div>
        <h2 className="stitle" style={{ fontSize: '1.8rem' }}>
          Forgot Password
        </h2>
        <p style={{ fontSize: '.875rem', color: 'var(--sl)', marginBottom: 24 }}>
          We'll send a reset link to your email.
        </p>
        <div className="field">
          <label className="label">Email Address</label>
          <input className="input" placeholder="your@email.com" />
        </div>
        <button
          className="btn btn-gr w-full"
          style={{ marginTop: 8 }}
          onClick={() => {
            setForgot(false);
            notify('Reset link sent! Check your email.');
          }}
        >
          Send Reset Link
        </button>
        <p style={{ textAlign: 'center', marginTop: 16, fontSize: '.82rem', color: 'var(--mu)' }}>
          <span
            style={{ color: 'var(--gb)', cursor: 'pointer', fontWeight: 600 }}
            onClick={() => setForgot(false)}
          >
            ← Back to Login
          </span>
        </p>
      </AuthShell>
    );

  return (
    <AuthShell nav={nav}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
        <span style={{ fontSize: '1.5rem' }}>{rc.icon}</span>
        <div>
          <div className="slabel" style={{ marginBottom: 0 }}>
            {rc.label}
          </div>
        </div>
        <button
          className="btn btn-gh btn-sm"
          style={{ marginLeft: 'auto' }}
          onClick={onSwitchRole}
        >
          Switch Role
        </button>
      </div>
      <h2 className="stitle" style={{ fontSize: '1.8rem' }}>
        Welcome Back
      </h2>
      <p style={{ fontSize: '.875rem', color: 'var(--sl)', marginBottom: 24 }}>
        Sign in to your account to continue.
      </p>
      <div className="field">
        <label className="label">Email Address</label>
        <input
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
        />
      </div>
      <div className="field">
        <label className="label">Password</label>
        <input
          className="input"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="••••••••"
        />
      </div>
      <div style={{ textAlign: 'right', marginBottom: 20 }}>
        <span
          style={{
            fontSize: '.8rem',
            color: 'var(--gb)',
            cursor: 'pointer',
            fontWeight: 600,
          }}
          onClick={() => setForgot(true)}
        >
          Forgot Password?
        </span>
      </div>
      <button className="btn btn-gr w-full btn-lg" onClick={handleLogin}>
        Sign In →
      </button>
      <p style={{ textAlign: 'center', marginTop: 20, fontSize: '.82rem', color: 'var(--mu)' }}>
        Don't have an account?{' '}
        <span
          style={{ color: 'var(--gb)', cursor: 'pointer', fontWeight: 600 }}
          onClick={() => nav('signup')}
        >
          Create one →
        </span>
      </p>
      <div
        style={{
          marginTop: 20,
          padding: '12px 16px',
          background: 'var(--gmt)',
          borderRadius: 'var(--rsm)',
          fontSize: '.78rem',
          color: 'var(--gm)',
        }}
      >
        <strong>Demo:</strong> expert@mindgigs.com · admin@mindgigs.com · aff@mindgigs.com | pass:
        demo
      </div>
    </AuthShell>
  );
}
