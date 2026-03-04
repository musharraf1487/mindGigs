import React from 'react';


export function PublicProfile({ nav, notify, expert }) {
  if (!expert) return null;
  return (
    <div style={{ background: 'var(--cr)', minHeight: '100vh' }}>
      {/* Nav */}
      <div
        style={{
          background: '#fff',
          borderBottom: '1px solid rgba(84,119,146,0.1)',
          padding: '0 48px',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span
            style={{
              fontFamily: 'var(--fb)',
              fontWeight: 700,
              fontSize: '1.1rem',
              color: 'var(--gb)',
              cursor: 'pointer',
              letterSpacing: '-0.04em',
              paddingLeft: 4,
            }}
            onClick={() => nav('landingboard')}
          >
            mindGigs
          </span>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button className="btn btn-gh btn-sm" onClick={() => notify('Profile link copied!')}>
            📤 Share
          </button>
          <button className="btn btn-gr btn-sm" onClick={() => nav('signup')}>
            Create Your Profile
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 780, margin: '0 auto', padding: '40px 24px' }}>
        {/* Profile Header */}
        <div className="card" style={{ overflow: 'hidden', marginBottom: 24 }}>
          <div
            style={{
              height: 140,
              background: 'linear-gradient(135deg, var(--gd), var(--gb))',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                bottom: -32,
                left: 32,
                width: 72,
                height: 72,
                borderRadius: '50%',
                background: 'var(--gp)',
                border: '4px solid #fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                boxShadow: '0 4px 16px rgba(0,0,0,.12)',
              }}
            >
              {expert.image ? (
                <img
                  src={expert.image}
                  alt={expert.name}
                  style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
                />
              ) : (
                expert.avatar || '🧠'
              )}
            </div>
          </div>
          <div style={{ padding: '44px 32px 28px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: 12,
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--fu)',
                    fontWeight: 800,
                    fontSize: '1.4rem',
                    color: 'var(--gd)',
                  }}
                >
                  {expert.name}
                </div>
                <div
                  style={{
                    fontSize: '.82rem',
                    color: 'var(--gb)',
                    fontWeight: 500,
                    marginBottom: 10,
                  }}
                >
                  mindgigs.com/{expert.handle}
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {expert.tags?.map((t) => (
                    <span key={t} className="tag tag-gr">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <a href="#" style={{ fontSize: '.82rem', color: 'var(--mu)' }}>
                  🐦 Twitter
                </a>
                <a href="#" style={{ fontSize: '.82rem', color: 'var(--mu)' }}>
                  💼 LinkedIn
                </a>
              </div>
            </div>
            <p
              style={{
                fontSize: '.92rem',
                color: 'var(--sl)',
                lineHeight: 1.75,
                marginTop: 16,
                maxWidth: 580,
              }}
            >
              {expert.bio}
            </p>
            <div
              style={{
                display: 'flex',
                gap: 24,
                marginTop: 16,
                fontSize: '.8rem',
                color: 'var(--mu)',
              }}
            >
              <span>⭐ {expert.rating || 'New'} rating</span>
              <span>📅 {expert.sessions || '0'} sessions completed</span>
              <span>👥 {expert.rating ? '24' : '0'} subscribers</span>
            </div>
          </div>
        </div>

        {/* 1:1 Sessions */}
        {expert.id === 1 || expert.sessionsList?.length > 0 ? (
          <div style={{ marginBottom: 32 }}>
            <h3
              style={{
                fontFamily: 'var(--fu)',
                fontWeight: 700,
                color: 'var(--gd)',
                marginBottom: 16,
                fontSize: '1.1rem',
              }}
            >
              🗓️ 1:1 Sessions
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {(
                expert.sessionsList || [
                  {
                    title: '60-min Strategy Deep Dive',
                    duration: '60 min',
                    price: '$250',
                    desc: 'Deep dive into your product strategy, roadmap, or fundraising pitch with actionable takeaways.',
                  },
                  {
                    title: '15-min Quick Call',
                    duration: '15 min',
                    price: '$40',
                    desc: 'Fast, focused answer to your most pressing question.',
                  },
                ]
              ).map((s) => (
                <div
                  key={s.title}
                  className="card"
                  style={{
                    padding: 20,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 16,
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontFamily: 'var(--fu)',
                        fontWeight: 700,
                        color: 'var(--gd)',
                        marginBottom: 4,
                      }}
                    >
                      {s.title}
                    </div>
                    <div style={{ fontSize: '.78rem', color: 'var(--mu)', marginBottom: 6 }}>
                      ⏱ {s.duration}
                    </div>
                    <div style={{ fontSize: '.83rem', color: 'var(--sl)' }}>{s.desc}</div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div
                      style={{
                        fontFamily: 'var(--fu)',
                        fontSize: '1.3rem',
                        fontWeight: 800,
                        color: 'var(--gd)',
                        marginBottom: 10,
                      }}
                    >
                      {s.price}
                    </div>
                    <button className="btn btn-gr btn-sm" onClick={() => nav('booking')}>
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* Subscriptions */}
        {(expert.subscriptionsList || expert.subscriptions)?.length > 0 ? (
          <div style={{ marginBottom: 32 }}>
            <h3
              style={{
                fontFamily: 'var(--fu)',
                fontWeight: 700,
                color: 'var(--gd)',
                marginBottom: 16,
                fontSize: '1.1rem',
              }}
            >
              ♻️ Subscriptions
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {(expert.subscriptionsList || expert.subscriptions).map((sub) => (
                <div key={sub.id || sub.title} className="card" style={{ padding: 24, background: 'var(--gmt)', border: '1.5px solid rgba(255,155,81,.15)' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: 16,
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontFamily: 'var(--fu)',
                          fontWeight: 700,
                          color: 'var(--gd)',
                          fontSize: '1.05rem',
                          marginBottom: 12,
                        }}
                      >
                        {sub.title}
                      </div>
                      <p style={{ fontSize: '.83rem', color: 'var(--sl)', marginBottom: 12 }}>
                        {sub.desc}
                      </p>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        {(sub.features || [
                          'Private WhatsApp group access',
                          'Weekly group Q&A sessions',
                          'Monthly 1:1 check-in (30 min)',
                          'Resource library & templates',
                        ]).map((b) => (
                          <li key={b} style={{ fontSize: '.83rem', color: 'var(--sl)', display: 'flex', gap: 8 }}>
                            ✓ {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--fu)', fontSize: '2rem', fontWeight: 800, color: 'var(--gd)' }}>
                        {sub.price.includes('$') ? sub.price.split('/')[0] : `$${sub.price}`}
                      </div>
                      <div style={{ fontSize: '.78rem', color: 'var(--mu)', marginBottom: 12 }}>/month</div>
                      <button className="btn btn-gr" onClick={() => notify('Redirecting to Stripe checkout...')}>
                        Subscribe →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* Digital Products */}
        {expert.id === 1 || expert.productsList?.length > 0 ? (
          <div style={{ marginBottom: 40 }}>
            <h3
              style={{
                fontFamily: 'var(--fu)',
                fontWeight: 700,
                color: 'var(--gd)',
                marginBottom: 16,
                fontSize: '1.1rem',
              }}
            >
              📦 Digital Products
            </h3>
            <div className="grid-3">
              {(
                expert.productsList || [
                  { title: 'Pitch Deck Template', price: '$79', desc: 'Proven template used by 142 founders.' },
                  { title: 'SaaS Metrics Dashboard', price: '$49', desc: 'Track all key SaaS metrics in one place.' },
                  { title: 'Fundraising Playbook', price: '$129', desc: 'Step-by-step guide for raising a seed round.' },
                ]
              ).map((p) => (
                <div key={p.title} className="card" style={{ padding: 20 }}>
                  <div
                    style={{
                      height: 60,
                      background: 'var(--gmt)',
                      borderRadius: 'var(--rsm)',
                      marginBottom: 14,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                    }}
                  >
                    📄
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--fu)',
                      fontWeight: 700,
                      color: 'var(--gd)',
                      fontSize: '.88rem',
                      marginBottom: 6,
                    }}
                  >
                    {p.title}
                  </div>
                  <div style={{ fontSize: '.78rem', color: 'var(--sl)', marginBottom: 14 }}>{p.desc}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--fu)', fontWeight: 800, color: 'var(--gd)' }}>
                      {p.price}
                    </span>
                    <button
                      className="btn btn-pr btn-sm"
                      onClick={() => notify('Redirecting to checkout...')}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* Profile Footer CTA */}
        <div style={{ background: 'var(--gd)', borderRadius: 'var(--rlg)', padding: 40, textAlign: 'center' }}>
          <h3
            style={{
              fontFamily: 'var(--fd)',
              fontSize: '1.8rem',
              color: '#fff',
              marginBottom: 12,
            }}
          >
            Start Monetizing Your Knowledge
          </h3>
          <p style={{ fontSize: '.9rem', color: 'rgba(255,255,255,.65)', marginBottom: 24 }}>
            Join Priya and thousands of experts earning recurring income on mindGigs.
          </p>
          <button className="btn btn-gr btn-lg" onClick={() => nav('signup')}>
            Create Your Profile — Free →
          </button>
        </div>
      </div>
    </div>
  );
}
