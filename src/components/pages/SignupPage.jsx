import React, { useState } from 'react';

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
        <div className="card" style={{ padding: 40 }}>{children}</div>
      </div>
    </div>
  );
}

export function SignupPage({ nav, notify }) {
  const [agreed, setAgreed] = useState(false);

  return (
    <AuthShell nav={nav}>
      <div className="slabel">Get Started Free</div>
      <h2 className="stitle" style={{ fontSize: '1.8rem' }}>
        Create Your Account
      </h2>
      <p style={{ fontSize: '.875rem', color: 'var(--sl)', marginBottom: 24 }}>
        Join thousands of experts monetizing their knowledge.
      </p>
      <div className="field">
        <label className="label">Full Name</label>
        <input className="input" placeholder="Priya Sharma" />
      </div>
      <div className="field">
        <label className="label">Username</label>
        <div style={{ position: 'relative' }}>
          <span
            style={{
              position: 'absolute',
              left: 12,
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '.85rem',
              color: 'var(--mu)',
            }}
          >
            mindgigs.com/
          </span>
          <input className="input" style={{ paddingLeft: 120 }} placeholder="yourname" />
        </div>
      </div>
      <div className="field">
        <label className="label">Email Address</label>
        <input className="input" placeholder="your@email.com" />
      </div>
      <div className="field">
        <label className="label">Password</label>
        <input className="input" type="password" placeholder="Min 8 characters" />
      </div>
      <div className="field">
        <label className="label">Referral Code (Optional)</label>
        <input className="input" placeholder="Friend's username" />
      </div>
      <label className="checkbox-row" style={{ marginBottom: 20 }}>
        <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
        <span>
          I agree to the <a href="#" style={{ color: 'var(--gb)' }}>Terms of Service</a> and{' '}
          <a href="#" style={{ color: 'var(--gb)' }}>Privacy Policy</a>
        </span>
      </label>
      <button
        className="btn btn-gr w-full btn-lg"
        onClick={() => {
          if (agreed) {
            notify('Account created! Let\'s set up your profile.');
            nav('onboarding');
          } else notify('Please agree to terms first.', 'warn');
        }}
      >
        Create Account →
      </button>
      <p style={{ textAlign: 'center', marginTop: 20, fontSize: '.82rem', color: 'var(--mu)' }}>
        Already have an account?{' '}
        <span
          style={{ color: 'var(--gb)', cursor: 'pointer', fontWeight: 600 }}
          onClick={() => nav('login')}
        >
          Log In →
        </span>
      </p>
    </AuthShell>
  );
}
