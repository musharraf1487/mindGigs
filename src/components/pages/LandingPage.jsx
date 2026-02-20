import React from 'react';

export function LandingPage({ nav, onLogin }) {
  return (
    <div>
      {/* NAV */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 72,
          padding: '0 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(250,249,245,.9)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(45,158,95,.1)',
          boxShadow: '0 1px 12px rgba(10,46,26,.06)',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--fu)',
            fontWeight: 800,
            fontSize: '1.35rem',
            color: 'var(--gd)',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: 'var(--gl)',
              display: 'inline-block',
              animation: 'pd 2s ease-in-out infinite',
            }}
          />
          mindGigs
        </div>
        <div style={{ display: 'flex', gap: 32 }}>
          {['Features', 'Pricing', 'Affiliates'].map((l) => (
            <a
              key={l}
              href="#"
              style={{
                fontSize: '.875rem',
                fontWeight: 500,
                color: 'var(--sl)',
                transition: 'color .2s',
              }}
              onMouseOver={(e) => (e.target.style.color = 'var(--gb)')}
              onMouseOut={(e) => (e.target.style.color = 'var(--sl)')}
            >
              {l}
            </a>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <button className="btn btn-gh" onClick={onLogin}>
            Log In
          </button>
          <button className="btn btn-pr" onClick={() => nav('signup')}>
            Create Profile →
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-bg" />
        <div className="hero-grid" />

        <div className="float-card fc-1">
          <div className="fc-avatar">🧠</div>
          <div>
            <div className="fc-sub">New booking</div>
            <div className="fc-val">1:1 Strategy · $250</div>
          </div>
        </div>
        <div className="float-card fc-2">
          <div className="fc-chip">Affiliate Earned</div>
          <div className="fc-big">+$1,240</div>
          <div className="fc-sub">Lifetime Commission</div>
        </div>
        <div className="float-card fc-3">
          <div className="fc-avatar" style={{ background: 'rgba(26,184,160,.12)' }}>💳</div>
          <div>
            <div className="fc-sub">Monthly Recurring</div>
            <div className="fc-val">$3,840 MRR</div>
          </div>
        </div>

        <div style={{ position: 'relative', zIndex: 3, maxWidth: 820 }}>
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Human-as-a-Service Platform
          </div>
          <h1 className="hero-title">
            Your Knowledge Is Worth Money.
            <br />
            <em>Start Charging For It.</em>
          </h1>
          <p className="hero-sub">
            Sell 1:1 sessions, recurring subscriptions, and digital products. Earn passively through
            our two-tier affiliate engine. Your profile. Your income. Your rules.
          </p>
          <div className="hero-actions">
            <button className="btn btn-gr btn-xl" onClick={() => nav('signup')}>
              🟢 Create Your Profile
            </button>
            <button className="btn btn-gh btn-xl" onClick={() => nav('public-profile')}>
              Explore Experts →
            </button>
          </div>
          <div className="hero-stats">
            {[
              ['20%', 'Lifetime Affiliate Commission'],
              ['3 Types', 'Revenue Streams'],
              ['2-Tier', 'Affiliate Network'],
              ['∞', 'Earning Potential'],
            ]
              .map(([n, l]) => (
                <>
                  <div className="hstat" key={n}>
                    <span className="hstat-n">{n}</span>
                    <span className="hstat-l">{l}</span>
                  </div>
                  <div className="hdiv" />
                </>
              ))
              .flat()
              .slice(0, -1)}
          </div>
          <div className="trust-badges">
            <div className="trust-badge">
              <span className="trust-badge-icon">🔒</span> Stripe Secure Payments
            </div>
            <div className="trust-badge">
              <span className="trust-badge-icon">🌍</span> Global Payouts
            </div>
            <div className="trust-badge">
              <span className="trust-badge-icon">⚡</span> Instant Setup
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="problem-section">
        <div className="container">
          <div className="slabel slabel-lt">The Problem</div>
          <h2 className="stitle stitle-lt">Stop Giving Advice For Free</h2>
          <p className="ssub ssub-lt">Every day, experts like you are leaking value with no return.</p>
          <div className="problem-cards">
            {[
              {
                icon: '📩',
                title: 'Endless DMs',
                desc: 'Strangers extracting hours of your knowledge through free messages with no compensation.',
              },
              {
                icon: '📞',
                title: 'Free Strategy Calls',
                desc: '"Quick calls" that turn into unpaid consulting. Your expertise deserves a price tag.',
              },
              {
                icon: '💸',
                title: 'No Monetization',
                desc: 'You have a massive following but no system to convert attention into recurring income.',
              },
              {
                icon: '🔥',
                title: 'Burnout',
                desc: 'Giving endlessly without building passive income systems leads to exhaustion and resentment.',
              },
            ].map((p) => (
              <div key={p.title} className="prob-card">
                <div className="prob-icon">{p.icon}</div>
                <div className="prob-title">{p.title}</div>
                <div className="prob-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section">
        <div className="container">
          <div className="slabel">How It Works</div>
          <h2 className="stitle">Three Steps to Recurring Revenue</h2>
          <p className="ssub">From signup to earning in under 5 minutes. No technical skills needed.</p>
          <div className="how-cards">
            {[
              {
                n: '01',
                icon: '👤',
                title: 'Create Your Profile',
                desc: 'Build your public page at mindgigs.com/yourname. Add bio, expertise tags, and social links. Takes 2 minutes.',
              },
              {
                n: '02',
                icon: '💼',
                title: 'Set Your Pricing',
                desc: 'Add 1:1 sessions with calendar sync, monthly subscriptions, or digital downloads. You control pricing — always.',
              },
              {
                n: '03',
                icon: '📈',
                title: 'Monetize Your Knowledge',
                desc: 'Share your link. Stripe handles payments globally. Your affiliate link earns 20% on every expert you refer.',
              },
            ].map((s) => (
              <div key={s.n} className="how-card">
                <div className="how-step-num">Step {s.n}</div>
                <div className="how-icon">{s.icon}</div>
                <div className="how-title">{s.title}</div>
                <div className="how-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MONETIZATION TYPES */}
      <section className="mono-section">
        <div className="container">
          <div className="slabel">Monetization Types</div>
          <h2 className="stitle">Four Ways to Earn</h2>
          <div className="mono-grid">
            {[
              {
                icon: '🗓️',
                title: '1:1 Paid Calls',
                desc: 'Book 15, 30, or 60-minute sessions with calendar integration and automatic payment collection.',
              },
              {
                icon: '💬',
                title: 'Recurring WhatsApp Groups',
                desc: 'Charge monthly access to your private group. Auto-renew via Stripe, cancel anytime.',
              },
              {
                icon: '📦',
                title: 'Digital Downloads',
                desc: 'Sell PDFs, templates, courses, and files securely via AWS S3 with expiring download links.',
              },
              {
                icon: '🎯',
                title: 'Advisory Sessions',
                desc: 'Offer premium-priced custom advisory packages with tailored deliverables and follow-ups.',
              },
            ].map((m) => (
              <div key={m.title} className="mono-card">
                <div className="mono-icon">{m.icon}</div>
                <div className="mono-title">{m.title}</div>
                <div className="mono-desc">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AFFILIATE ENGINE */}
      <section className="aff-section">
        <div className="container">
          <div className="aff-layout">
            <div>
              <div className="slabel">Affiliate Engine</div>
              <h2 className="stitle">
                Earn Even When
                <br />
                Others Earn
              </h2>
              <p className="ssub" style={{ marginBottom: 32 }}>
                Our two-tier commission structure builds compounding passive income. No caps, no expiry.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                {[
                  '20% lifetime on every direct referral payment',
                  "5% on your referrals' referrals (Tier 2)",
                  'Unique referral link: mindgigs.com/?ref=you',
                  'Affiliate wallet with payout requests',
                ].map((b) => (
                  <li
                    key={b}
                    style={{
                      display: 'flex',
                      gap: 10,
                      alignItems: 'flex-start',
                      fontSize: '.875rem',
                      color: 'var(--sl)',
                    }}
                  >
                    <span style={{ color: 'var(--gb)', fontWeight: 700 }}>✓</span> {b}
                  </li>
                ))}
              </ul>
              <button className="btn btn-gr btn-lg" onClick={() => nav('signup')}>
                Start Earning →
              </button>
            </div>
            <div className="aff-diagram">
              <p
                style={{
                  fontFamily: 'var(--fu)',
                  fontSize: '.68rem',
                  fontWeight: 700,
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  color: 'var(--mu)',
                  marginBottom: 20,
                }}
              >
                How commissions flow
              </p>
              <div className="aff-flow">
                <div className="aff-node">
                  <div className="aff-node-left">
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: '50%',
                        background: 'var(--gp)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1rem',
                        border: '2px solid var(--gb)',
                      }}
                    >
                      🧠
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '.88rem' }}>You</div>
                      <div style={{ fontSize: '.7rem', color: 'var(--mu)' }}>Expert & Affiliate</div>
                    </div>
                  </div>
                </div>
                <div className="aff-arrow">↓</div>
                <div className="aff-node">
                  <div className="aff-node-left">
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: '50%',
                        background: 'rgba(26,184,160,.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1rem',
                      }}
                    >
                      👩‍💻
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '.88rem' }}>Sarah (L1)</div>
                      <div style={{ fontSize: '.7rem', color: 'var(--mu)' }}>Earns $1,000/mo</div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div className="aff-comm">$200</div>
                    <div style={{ fontSize: '.7rem', color: 'var(--mu)' }}>20% to you</div>
                  </div>
                </div>
                <div className="aff-arrow">↓</div>
                <div className="aff-node aff-node-t2">
                  <div className="aff-node-left">
                    <div
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: '50%',
                        background: 'rgba(232,197,71,.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '.9rem',
                      }}
                    >
                      👨‍🏫
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '.82rem' }}>Ahmed (L2)</div>
                      <div style={{ fontSize: '.68rem', color: 'var(--mu)' }}>Earns $800/mo</div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div className="aff-comm" style={{ fontSize: '1rem' }}>
                      $40
                    </div>
                    <div style={{ fontSize: '.7rem', color: 'var(--mu)' }}>5% to you</div>
                  </div>
                </div>
                <div className="aff-total">
                  <span
                    style={{
                      fontSize: '.8rem',
                      color: 'rgba(255,255,255,.6)',
                      fontFamily: 'var(--fu)',
                      fontWeight: 600,
                    }}
                  >
                    Your monthly passive
                  </span>
                  <span className="aff-total-val">
                    $240
                    <span
                      style={{
                        fontSize: '.85rem',
                        fontWeight: 400,
                        color: 'rgba(255,255,255,.4)',
                      }}
                    >
                      /mo
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO ITS FOR */}
      <section className="who-section">
        <div className="container">
          <div className="slabel slabel-lt">Who It's For</div>
          <h2 className="stitle stitle-lt">Built For Every Expert</h2>
          <div className="who-grid">
            {[
              ['💼', 'Consultants'],
              ['🤖', 'AI Builders'],
              ['⚖️', 'Lawyers'],
              ['💻', 'Developers'],
              ['🎯', 'Coaches'],
              ['📊', 'Analysts'],
              ['🎨', 'Designers'],
              ['📝', 'Writers'],
              ['🏋️', 'Trainers'],
              ['🏥', 'Doctors'],
              ['🎓', 'Educators'],
              ['📈', 'Traders'],
            ].map(([icon, label]) => (
              <div key={label} className="who-card">
                <div className="who-icon">{icon}</div>
                <div className="who-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="slabel" style={{ justifyContent: 'center' }}>
            Start Today
          </div>
          <h2
            style={{
              fontFamily: 'var(--fd)',
              fontSize: 'clamp(2.5rem,5vw,4rem)',
              color: 'var(--gd)',
              marginBottom: 20,
              lineHeight: 1.1,
            }}
          >
            Don't Just Share Knowledge.
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--gb)' }}>Sell It.</em>
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--sl)',
              maxWidth: 500,
              margin: '0 auto 40px',
              lineHeight: 1.75,
            }}
          >
            Join thousands of knowledge experts monetizing their skills. Free to start, powerful when
            you scale.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 20 }}>
            <button className="btn btn-gr btn-xl" onClick={() => nav('signup')}>
              Create Profile
            </button>
            <button className="btn btn-gh btn-lg" onClick={onLogin}>
              Log In
            </button>
          </div>
          <p
            style={{
              fontSize: '.8rem',
              color: 'var(--mu)',
              display: 'flex',
              gap: 12,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <span>✓ No credit card</span>
            <span>·</span>
            <span>✓ Live in 5 min</span>
            <span>·</span>
            <span>✓ Cancel anytime</span>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-brand-logo">
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: 'var(--gl)',
                    display: 'inline-block',
                  }}
                />
                mindGigs
              </div>
              <p
                style={{
                  fontSize: '.85rem',
                  color: 'rgba(255,255,255,.45)',
                  lineHeight: 1.72,
                  maxWidth: 260,
                  marginBottom: 20,
                }}
              >
                The monetization infrastructure for knowledge experts who are serious about recurring
                income.
              </p>
            </div>
            {[
              [
                'Platform',
                ['Expert Profiles', 'Session Booking', 'Subscriptions', 'Digital Products', 'Affiliate Engine'],
              ],
              ['Company', ['About', 'Blog', 'Careers', 'Press', 'Partners']],
              ['Support', ['Help Center', 'API Docs', 'Community', 'Status', 'Contact']],
            ].map(([h, links]) => (
              <div key={h} className="footer-link-group">
                <h4>{h}</h4>
                {links.map((l) => (
                  <a key={l} href="#" className="footer-link">
                    {l}
                  </a>
                ))}
              </div>
            ))}
          </div>
          <div className="footer-bottom">
            <span>© 2025 mindGigs.com · All rights reserved.</span>
            <div className="footer-legal">
              {['Privacy Policy', 'Terms', 'Cookies'].map((l) => (
                <a key={l} href="#">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
