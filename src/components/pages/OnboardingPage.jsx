import React, { useState } from 'react';

export function OnboardingPage({ nav, notify }) {
  const [step, setStep] = useState(0);
  const [offerTab, setOfferTab] = useState(0);
  const steps = ['Profile Setup', 'Add First Offer', 'Payment Setup'];

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--gmt)',
        padding: '80px 24px 40px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%,rgba(255,178,122,.1) 0%,transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <div style={{ maxWidth: 600, margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <span
            style={{
              fontFamily: 'var(--fu)',
              fontWeight: 800,
              fontSize: '1.3rem',
              color: 'var(--gd)',
            }}
          >
            🌿 mindGigs
          </span>
          <p style={{ fontSize: '.82rem', color: 'var(--mu)', marginTop: 4 }}>
            Expert Onboarding · Step {step + 1} of {steps.length}
          </p>
        </div>

        {/* Progress */}
        <div className="progress-bar" style={{ marginBottom: 8 }}>
          <div
            className="progress-fill"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 32 }}>
          {steps.map((s, i) => (
            <span
              key={s}
              style={{
                fontSize: '.72rem',
                fontFamily: 'var(--fu)',
                fontWeight: 600,
                color: i <= step ? 'var(--gb)' : 'var(--mu)',
              }}
            >
              {s}
            </span>
          ))}
        </div>

        <div className="card" style={{ padding: 40 }}>
          {step === 0 && (
            <>
              <div className="slabel">Step 01</div>
              <h2 className="stitle" style={{ fontSize: '1.6rem' }}>
                Set Up Your Profile
              </h2>
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background: 'var(--gp)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  margin: '0 auto 24px',
                  border: '3px dashed rgba(255,155,81,.3)',
                  cursor: 'pointer',
                }}
              >
                📷
              </div>
              <p style={{ textAlign: 'center', fontSize: '.78rem', color: 'var(--mu)', marginBottom: 24 }}>
                Click to upload profile photo
              </p>
              <div className="field">
                <label className="label">Bio (max 300 chars)</label>
                <textarea
                  className="textarea"
                  placeholder="Tell experts and visitors who you are and what you offer..."
                  style={{ minHeight: 80 }}
                />
              </div>
              <div className="field">
                <label className="label">Expertise Tags</label>
                <input
                  className="input"
                  placeholder="e.g. Product Strategy, SaaS, Fundraising"
                />
              </div>
              <div className="field">
                <label className="label">LinkedIn (optional)</label>
                <input className="input" placeholder="https://linkedin.com/in/yourname" />
              </div>
              <div className="field">
                <label className="label">Twitter / X (optional)</label>
                <input className="input" placeholder="https://twitter.com/yourhandle" />
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <div className="slabel">Step 02</div>
              <h2 className="stitle" style={{ fontSize: '1.6rem' }}>
                Add Your First Offer
              </h2>
              <div className="offer-tabs">
                {['🗓️ 1:1 Session', '♻️ Subscription', '📦 Digital Product'].map((t, i) => (
                  <button
                    key={t}
                    className={`offer-tab ${offerTab === i ? 'active' : ''}`}
                    onClick={() => setOfferTab(i)}
                  >
                    {t}
                  </button>
                ))}
              </div>
              {offerTab === 0 && (
                <>
                  <div className="field">
                    <label className="label">Session Title</label>
                    <input className="input" placeholder="e.g. 60-min Strategy Deep Dive" />
                  </div>
                  <div className="field">
                    <label className="label">Duration</label>
                    <select className="select w-full">
                      <option>15 minutes</option>
                      <option>30 minutes</option>
                      <option selected>60 minutes</option>
                      <option>Custom</option>
                    </select>
                  </div>
                  <div className="field">
                    <label className="label">Price (USD)</label>
                    <input className="input" type="number" placeholder="e.g. 150" />
                  </div>
                  <div className="field">
                    <label className="label">Description</label>
                    <textarea
                      className="textarea"
                      placeholder="What will you cover in this session?"
                    />
                  </div>
                </>
              )}
              {offerTab === 1 && (
                <>
                  <div className="field">
                    <label className="label">Subscription Name</label>
                    <input className="input" placeholder="e.g. Monthly Mentorship Club" />
                  </div>
                  <div className="field">
                    <label className="label">Monthly Price (USD)</label>
                    <input className="input" type="number" placeholder="e.g. 99" />
                  </div>
                  <div className="field">
                    <label className="label">What's Included</label>
                    <textarea
                      className="textarea"
                      placeholder="Weekly Q&A, WhatsApp group access, monthly 1:1..."
                    />
                  </div>
                </>
              )}
              {offerTab === 2 && (
                <>
                  <div className="field">
                    <label className="label">Product Title</label>
                    <input className="input" placeholder="e.g. The Ultimate SaaS Pitch Deck Template" />
                  </div>
                  <div className="field">
                    <label className="label">Price (USD)</label>
                    <input className="input" type="number" placeholder="e.g. 49" />
                  </div>
                  <div
                    style={{
                      border: '2px dashed rgba(255,155,81,.2)',
                      borderRadius: 'var(--rsm)',
                      padding: 24,
                      textAlign: 'center',
                      cursor: 'pointer',
                      background: 'var(--gmt)',
                      marginBottom: 16,
                    }}
                  >
                    <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>📎</div>
                    <div style={{ fontSize: '.82rem', color: 'var(--mu)' }}>
                      Upload file (PDF, ZIP, DOC)
                    </div>
                  </div>
                </>
              )}
            </>
          )}

          {step === 2 && (
            <>
              <div className="slabel">Step 03</div>
              <h2 className="stitle" style={{ fontSize: '1.6rem' }}>
                Payment Setup
              </h2>
              <div
                style={{
                  background: 'var(--gmt)',
                  borderRadius: 'var(--rsm)',
                  padding: 20,
                  marginBottom: 24,
                  border: '1px solid rgba(255,155,81,.15)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--fu)',
                    fontSize: '.88rem',
                    fontWeight: 700,
                    color: 'var(--gd)',
                    marginBottom: 6,
                  }}
                >
                  🔗 Connect Stripe
                </div>
                <p style={{ fontSize: '.82rem', color: 'var(--sl)', lineHeight: 1.65 }}>
                  mindGigs uses Stripe to process payments globally. Connect your Stripe account to
                  receive payouts directly.
                </p>
              </div>
              <button
                className="btn w-full"
                style={{
                  background: '#635bff',
                  color: '#fff',
                  marginBottom: 16,
                  padding: 14,
                  borderRadius: 'var(--rsm)',
                  fontFamily: 'var(--fu)',
                  fontWeight: 700,
                  fontSize: '.9rem',
                }}
              >
                🔌 Connect with Stripe
              </button>
              <div
                style={{
                  background: 'rgba(232,197,71,.08)',
                  borderRadius: 'var(--rsm)',
                  padding: 16,
                  border: '1px solid rgba(232,197,71,.2)',
                  marginBottom: 24,
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--fu)',
                    fontSize: '.78rem',
                    fontWeight: 700,
                    color: '#9a7a00',
                    marginBottom: 4,
                  }}
                >
                  ⚡ KYC Note
                </div>
                <p style={{ fontSize: '.78rem', color: 'var(--sl)' }}>
                  Stripe will verify your identity for compliance. This is a one-time process required
                  for payouts.
                </p>
              </div>
              <div className="field">
                <label className="label">Bank / Payout Account</label>
                <input
                  className="input"
                  placeholder="Auto-configured via Stripe Connect"
                  disabled
                  style={{ opacity: 0.6 }}
                />
              </div>
            </>
          )}

          <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
            {step > 0 && (
              <button className="btn btn-gh flex-1" onClick={() => setStep((s) => s - 1)}>
                ← Back
              </button>
            )}
            <button
              className="btn btn-gr flex-1 btn-lg"
              onClick={() => {
                if (step < steps.length - 1) setStep((s) => s + 1);
                else {
                  notify('🎉 Profile live! Your page is ready.');
                  nav('expert-dashboard');
                }
              }}
            >
              {step < steps.length - 1 ? 'Continue →' : '🚀 Launch My Profile'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
