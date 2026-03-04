import React, { useState, useMemo } from 'react';


const CATEGORIES = ['All', 'AI', 'Development', 'Marketing', 'Legal', 'Design', 'Business'];

function ExpertCard({ expert, nav }) {
    return (
        <div
            className="card"
            style={{
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'default',
                border: '1px solid rgba(37,52,63,0.08)',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--sc)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '';
            }}
        >
            {/* Top Image */}
            <img
                src={expert.image}
                alt={expert.name}
                style={{
                    width: '100%',
                    height: 220,
                    objectFit: 'cover',
                    borderBottom: '1px solid rgba(37,52,63,0.05)',
                }}
            />

            {/* Card Body */}
            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div
                    style={{
                        fontFamily: 'var(--fu)',
                        fontWeight: 800,
                        fontSize: '1.1rem',
                        color: 'var(--gd)',
                        marginBottom: 8,
                    }}
                >
                    {expert.name}
                </div>

                <p
                    style={{
                        fontSize: '.88rem',
                        color: 'var(--sl)',
                        lineHeight: 1.6,
                        marginBottom: 16,
                        flex: 1, // Push tags and button to bottom
                    }}
                >
                    {expert.bio}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
                    {expert.tags.slice(0, 3).map((t) => (
                        <span
                            key={t}
                            style={{
                                fontSize: '.72rem',
                                fontFamily: 'var(--fu)',
                                fontWeight: 600,
                                color: 'var(--gm)',
                                background: 'var(--gmt)',
                                padding: '4px 10px',
                                borderRadius: '4px',
                            }}
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* Button */}
                <button
                    className="btn"
                    style={{
                        width: '100%',
                        background: 'var(--gm)',
                        color: '#fff',
                        borderRadius: '6px',
                        padding: '12px 0',
                        fontFamily: 'var(--fu)',
                        fontWeight: 700,
                        fontSize: '.9rem',
                    }}
                    onClick={() => nav('public-profile', { expertId: expert.id })}
                >
                    View Profile
                </button>
            </div>
        </div>
    );
}

export function ExpertsDirectory({ nav, onLogin, experts }) {
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const filtered = useMemo(() => {
        return experts.filter((e) => {
            // Map mock data categories to the UI categories shown in the image roughly
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

            // Just check if the expert category matches our UI filter or the mapped equivalent
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
        <div style={{ background: '#fff', minHeight: '100vh', paddingBottom: 80 }}>
            {/* ── NAV ── */}
            <nav
                style={{
                    height: 64,
                    padding: '0 48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid rgba(84,119,146,0.1)',
                    background: 'rgba(255,255,255,0.9)',
                    backdropFilter: 'blur(10px)',
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
                            fontSize: '1.2rem',
                            color: 'var(--gb)',
                            cursor: 'pointer',
                            letterSpacing: '-0.04em',
                        }}
                        onClick={() => nav('landingboard')}
                    >
                        mindGigs
                    </span>
                </div>

                <div style={{ display: 'flex', gap: 10 }}>
                    <button className="btn btn-gh btn-sm" onClick={onLogin}>
                        Log In
                    </button>
                    <button className="btn btn-pr btn-sm" style={{ background: 'var(--gm)', color: '#fff' }} onClick={() => nav('signup')}>
                        Join as Expert
                    </button>
                </div>
            </nav>

            {/* ── HERO SECTION ── */}
            <section style={{ padding: '60px 24px 40px', textAlign: 'center' }}>
                <h1
                    style={{
                        fontFamily: 'var(--fd)',
                        // In the image, the title is purple. We will use --gb (orange) or --gd (dark blue) to match the website theme. Let's use var(--gm) to fit the image's dark blue aesthetic or var(--gb) for accent.
                        color: 'var(--gb)',
                        fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
                        marginBottom: 16,
                        fontWeight: 800,
                        letterSpacing: '-0.02em',
                    }}
                >
                    Explore Experts
                </h1>
                <p
                    style={{
                        fontSize: '1.05rem',
                        color: 'var(--sl)',
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
                            background: 'var(--cr)', // Very light grayish cyan
                            borderRadius: '8px',
                            padding: '12px 20px',
                            width: '100%',
                            maxWidth: 600,
                            border: '1px solid rgba(37,52,63,0.05)',
                        }}
                    >
                        <span style={{ color: 'var(--mu)', marginRight: 12, fontSize: '1.1rem' }}>🔍</span>
                        <input
                            style={{
                                border: 'none',
                                background: 'transparent',
                                outline: 'none',
                                width: '100%',
                                fontSize: '.95rem',
                                fontFamily: 'var(--fb)',
                                color: 'var(--ch)',
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
                                    background: isActive ? 'var(--gb)' : 'var(--cr)',
                                    color: isActive ? '#fff' : 'var(--gm)',
                                    fontFamily: 'var(--fu)',
                                    fontSize: '.85rem',
                                    fontWeight: isActive ? 700 : 600,
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'background 0.2s',
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
                    <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--mu)' }}>
                        <p>No experts found matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
