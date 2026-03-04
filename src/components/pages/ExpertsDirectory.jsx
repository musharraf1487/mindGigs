import React, { useState, useMemo } from 'react';


const CATEGORIES = ['All', 'AI', 'Development', 'Marketing', 'Legal', 'Design', 'Business'];

function ExpertCard({ expert, nav }) {
    return (
        <div
            style={{
                background: '#547792',
                border: '1px solid rgba(245, 245, 244, 0.1)',
                borderRadius: '40px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'transform 0.3s, box-shadow 0.5s, border-color 0.3s',
                cursor: 'pointer',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.05)',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 40px 80px rgba(245, 158, 11, 0.2)';
                e.currentTarget.style.borderColor = '#F59E0B';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(245, 245, 244, 0.1)';
            }}
        >
            {/* Top Image */}
            <div style={{ aspectRatio: '1', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
                <img
                    src={expert.image}
                    alt={expert.name}
                    referrerPolicy="no-referrer"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </div>

            {/* Card Body */}
            <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative', zIndex: 10 }}>
                <div>
                    <div
                        style={{
                            fontFamily: 'var(--fb)',
                            fontWeight: 700,
                            fontSize: '1.4rem',
                            color: 'white',
                            marginBottom: 4,
                        }}
                    >
                        {expert.name}
                    </div>
                    <p
                        style={{
                            fontSize: '.85rem',
                            color: 'rgba(255,255,255,0.6)',
                            lineHeight: 1.6,
                            fontWeight: 500,
                            marginTop: 4,
                        }}
                    >
                        {expert.bio || expert.role || ''}
                    </p>
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {(expert.tags || []).slice(0, 3).map((t) => (
                        <span
                            key={t}
                            style={{
                                fontSize: '.625rem',
                                fontFamily: 'var(--fb)',
                                fontWeight: 900,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                padding: '6px 12px',
                                background: 'rgba(245, 245, 244, 0.1)',
                                color: 'rgba(245, 245, 244, 0.7)',
                                border: '1px solid rgba(245, 245, 244, 0.1)',
                                borderRadius: '8px',
                            }}
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* Footer */}
                <div style={{ paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: 'auto' }}>
                    <button
                        style={{
                            width: '100%',
                            background: '#213448',
                            color: 'white',
                            padding: '16px',
                            borderRadius: '16px',
                            fontWeight: 700,
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '0.95rem',
                            fontFamily: 'var(--fb)',
                            transition: 'background 0.3s, box-shadow 0.3s, color 0.3s',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#F59E0B';
                            e.currentTarget.style.color = '#0F172A';
                            e.currentTarget.style.boxShadow = '0 8px 32px rgba(245,158,11,0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#213448';
                            e.currentTarget.style.color = 'white';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                        onClick={() => nav('public-profile', { expertId: expert.id })}
                    >
                        View Profile
                    </button>
                </div>
            </div>
        </div>
    );
}

export function ExpertsDirectory({ nav, onLogin, experts }) {
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const filtered = useMemo(() => {
        return experts.filter((e) => {
            const catMapping = {
                'AI': 'Tech',
                'Development': 'Tech',
                'Marketing': 'Creative',
                'Design': 'Creative',
                'Legal': 'Law',
            };

            let mappedCat = activeCategory;
            if (catMapping[activeCategory]) {
                mappedCat = catMapping[activeCategory];
            }

            const matchCat = activeCategory === 'All' ||
                e.category === mappedCat ||
                e.category === activeCategory ||
                e.category.toLowerCase() === activeCategory.toLowerCase();

            const q = search.toLowerCase();
            const matchSearch =
                !q ||
                (e.name || '').toLowerCase().includes(q) ||
                (e.tags || []).some((t) => t.toLowerCase().includes(q)) ||
                (e.category || '').toLowerCase().includes(q) ||
                (e.bio || '').toLowerCase().includes(q);

            return matchCat && matchSearch;
        });
    }, [search, activeCategory]);

    return (
        <div style={{ background: '#0F172A', minHeight: '100vh', paddingBottom: 80 }}>
            {/* ── NAV ── */}
            <nav
                style={{
                    height: 72,
                    padding: '0 48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid rgba(245,245,244,0.05)',
                    background: 'rgba(15, 23, 42, 0.85)',
                    backdropFilter: 'blur(12px)',
                    position: 'sticky',
                    top: 0,
                    zIndex: 50,
                }}
            >
                <span
                    style={{
                        fontFamily: 'var(--fb)',
                        fontWeight: 700,
                        fontSize: '1.45rem',
                        color: 'white',
                        cursor: 'pointer',
                        letterSpacing: '-0.04em',
                        background: 'none',
                        border: 'none',
                    }}
                    onClick={() => nav('landingboard')}
                >
                    mindGigs
                </span>

                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <button
                        style={{
                            background: 'none',
                            border: 'none',
                            fontFamily: 'var(--fb)',
                            fontWeight: 600,
                            fontSize: '0.875rem',
                            color: 'rgba(245,245,244,0.75)',
                            cursor: 'pointer',
                            padding: '8px 16px',
                            transition: 'color 0.2s',
                        }}
                        onClick={onLogin}
                        onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(245,245,244,0.75)'; }}
                    >
                        Log In
                    </button>
                    <button
                        style={{
                            background: '#F59E0B',
                            color: '#0F172A',
                            border: 'none',
                            fontFamily: 'var(--fb)',
                            fontWeight: 700,
                            fontSize: '0.875rem',
                            padding: '10px 24px',
                            borderRadius: '999px',
                            cursor: 'pointer',
                            transition: 'background 0.2s, box-shadow 0.2s',
                            boxShadow: '0 4px 16px rgba(245,158,11,0.3)',
                        }}
                        onClick={() => nav('home')}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#d97706';
                            e.currentTarget.style.boxShadow = '0 8px 24px rgba(245,158,11,0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#F59E0B';
                            e.currentTarget.style.boxShadow = '0 4px 16px rgba(245,158,11,0.3)';
                        }}
                    >
                        Join as Expert
                    </button>
                </div>
            </nav>

            {/* ── HERO SECTION ── */}
            <section style={{ padding: '60px 24px 40px', textAlign: 'center' }}>
                <h1
                    style={{
                        fontFamily: 'var(--fd)',
                        color: '#F5F5F4',
                        fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
                        marginBottom: 16,
                        fontWeight: 800,
                        letterSpacing: '-0.02em',
                    }}
                >
                    Explore{' '}
                    <span style={{ color: '#F59E0B' }}>Experts</span>
                </h1>
                <p
                    style={{
                        fontSize: '1.05rem',
                        color: '#D1D5DB',
                        marginBottom: 40,
                    }}
                >
                    Book 1:1 sessions, join communities, and learn from the best
                </p>

                {/* Search Bar */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            background: '#1E293B',
                            borderRadius: '12px',
                            padding: '12px 20px',
                            width: '100%',
                            maxWidth: 600,
                            border: '1px solid rgba(245,245,244,0.1)',
                        }}
                    >
                        <span style={{ color: '#9CA3AF', marginRight: 12, fontSize: '1.1rem' }}>🔍</span>
                        <input
                            style={{
                                border: 'none',
                                background: 'transparent',
                                outline: 'none',
                                width: '100%',
                                fontSize: '.95rem',
                                fontFamily: 'var(--fb)',
                                color: '#F5F5F4',
                            }}
                            placeholder="Search by name, expertise, or topic..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                {/* Category Pills */}
                <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
                    {CATEGORIES.map((cat) => {
                        const isActive = activeCategory === cat;
                        return (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                style={{
                                    padding: '8px 20px',
                                    borderRadius: '24px',
                                    background: isActive ? '#F59E0B' : '#1E293B',
                                    color: isActive ? '#0F172A' : 'rgba(245,245,244,0.7)',
                                    fontFamily: 'var(--fb)',
                                    fontSize: '.85rem',
                                    fontWeight: isActive ? 700 : 600,
                                    border: isActive ? 'none' : '1px solid rgba(245,245,244,0.1)',
                                    cursor: 'pointer',
                                    transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
                                    boxShadow: isActive ? '0 4px 16px rgba(245,158,11,0.3)' : 'none',
                                }}
                            >
                                {cat}
                            </button>
                        );
                    })}
                </div>
            </section>

            {/* ── GRID SECTION ── */}
            <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
                {filtered.length > 0 ? (
                    <div className="grid-3" style={{ gap: 24 }}>
                        {filtered.map((expert) => (
                            <ExpertCard key={expert.id} expert={expert} nav={nav} />
                        ))}
                    </div>
                ) : (
                    <div style={{ textAlign: 'center', padding: '60px 0', color: 'rgba(245,245,244,0.4)' }}>
                        <p>No experts found matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
