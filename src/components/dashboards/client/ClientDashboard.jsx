import React, { useState } from 'react';
import { clientData } from '../../../data/mockData';

const STATUS_COLORS = {
    upcoming: { bg: 'rgba(191,201,209,0.1)', color: '#1ab8a0' },
    completed: { bg: 'rgba(255,178,122,0.12)', color: 'var(--gb)' },
    cancelled: { bg: 'rgba(232,68,68,0.08)', color: 'var(--rd)' },
    active: { bg: 'rgba(255,178,122,0.12)', color: 'var(--gb)' },
};

function StatusBadge({ status }) {
    const s = STATUS_COLORS[status] || STATUS_COLORS.completed;
    return (
        <span
            style={{
                background: s.bg,
                color: s.color,
                borderRadius: 20,
                padding: '3px 10px',
                fontSize: '.7rem',
                fontFamily: 'var(--fu)',
                fontWeight: 700,
                textTransform: 'capitalize',
            }}
        >
            {status}
        </span>
    );
}

function StatCard({ label, val, ch, color }) {
    const chColor =
        color === 'gr' ? 'var(--gl)' : color === 'tl' ? 'var(--teal)' : 'var(--gb)';
    return (
        <div className="stat-card">
            <div className="stat-label">{label}</div>
            <div className="stat-val">{val}</div>
            <div className="stat-change" style={{ color: chColor }}>
                {ch}
            </div>
        </div>
    );
}

/* ── SECTIONS ── */

function Overview({ nav }) {
    return (
        <div>
            <div className="grid-4" style={{ gap: 16, marginBottom: 28 }}>
                {clientData.stats.map((s) => (
                    <StatCard key={s.label} {...s} />
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                {/* Upcoming sessions */}
                <div className="card" style={{ padding: 24 }}>
                    <div
                        style={{
                            fontFamily: 'var(--fu)',
                            fontWeight: 700,
                            color: 'var(--gd)',
                            marginBottom: 16,
                        }}
                    >
                        📅 Upcoming Sessions
                    </div>
                    {clientData.bookings
                        .filter((b) => b.status === 'upcoming')
                        .map((b, i) => (
                            <div
                                key={i}
                                style={{
                                    padding: '12px 0',
                                    borderBottom: '1px solid rgba(255,155,81,0.06)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    gap: 8,
                                }}
                            >
                                <div>
                                    <div
                                        style={{
                                            fontFamily: 'var(--fu)',
                                            fontWeight: 600,
                                            fontSize: '.85rem',
                                            color: 'var(--gd)',
                                            marginBottom: 3,
                                        }}
                                    >
                                        {b.expert}
                                    </div>
                                    <div style={{ fontSize: '.75rem', color: 'var(--mu)' }}>{b.type}</div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div
                                        style={{
                                            fontSize: '.75rem',
                                            fontFamily: 'var(--fu)',
                                            fontWeight: 600,
                                            color: 'var(--gb)',
                                        }}
                                    >
                                        {b.date}
                                    </div>
                                    <StatusBadge status={b.status} />
                                </div>
                            </div>
                        ))}
                    <button
                        className="btn btn-gh btn-sm"
                        style={{ marginTop: 16, width: '100%' }}
                        onClick={() => nav('booking')}
                    >
                        Book New Session →
                    </button>
                </div>

                {/* Recent activity */}
                <div className="card" style={{ padding: 24 }}>
                    <div
                        style={{
                            fontFamily: 'var(--fu)',
                            fontWeight: 700,
                            color: 'var(--gd)',
                            marginBottom: 16,
                        }}
                    >
                        ⚡ Recent Activity
                    </div>
                    {clientData.activities.map((a, i) => (
                        <div key={i} className="activity-item">
                            <div
                                className="activity-icon"
                                style={{ background: 'var(--gmt)', fontSize: '1rem' }}
                            >
                                {a.icon}
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '.82rem', color: 'var(--sl)', lineHeight: 1.4 }}>
                                    {a.text}
                                </div>
                                <div style={{ fontSize: '.7rem', color: 'var(--mu)', marginTop: 3 }}>
                                    {a.time}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function MyBookings({ nav, notify }) {
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 20,
                }}
            >
                <div>
                    <div
                        style={{ fontFamily: 'var(--fu)', fontWeight: 700, color: 'var(--gd)', fontSize: '1.05rem' }}
                    >
                        My Bookings
                    </div>
                    <div style={{ fontSize: '.8rem', color: 'var(--mu)', marginTop: 3 }}>
                        All 1:1 sessions you have booked
                    </div>
                </div>
                <button className="btn btn-gr btn-sm" onClick={() => nav('experts')}>
                    + Book New Session
                </button>
            </div>

            <div className="table-wrap">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Expert</th>
                            <th>Session Type</th>
                            <th>Date & Time</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientData.bookings.map((b, i) => (
                            <tr key={i}>
                                <td>
                                    <span style={{ fontFamily: 'var(--fu)', fontWeight: 600, color: 'var(--gd)' }}>
                                        {b.expert}
                                    </span>
                                </td>
                                <td>{b.type}</td>
                                <td style={{ fontFamily: 'var(--fu)', fontSize: '.82rem' }}>{b.date}</td>
                                <td>
                                    <StatusBadge status={b.status} />
                                </td>
                                <td>
                                    {b.status === 'upcoming' ? (
                                        <div style={{ display: 'flex', gap: 6 }}>
                                            <button
                                                className="btn btn-gh btn-sm"
                                                style={{ fontSize: '.7rem' }}
                                                onClick={() => notify('Rescheduling flow coming soon!')}
                                            >
                                                Reschedule
                                            </button>
                                            <button
                                                className="btn btn-sm"
                                                style={{
                                                    fontSize: '.7rem',
                                                    background: 'var(--rd-lt)',
                                                    color: 'var(--rd)',
                                                    borderRadius: 'var(--rsm)',
                                                }}
                                                onClick={() => notify('Session cancellation coming soon.', 'warn')}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    ) : b.status === 'completed' ? (
                                        <button
                                            className="btn btn-gh btn-sm"
                                            style={{ fontSize: '.7rem' }}
                                            onClick={() => notify('Review functionality coming soon!')}
                                        >
                                            ⭐ Leave Review
                                        </button>
                                    ) : (
                                        <span style={{ fontSize: '.72rem', color: 'var(--mu)' }}>—</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function Subscriptions({ notify }) {
    return (
        <div>
            <div style={{ marginBottom: 20 }}>
                <div
                    style={{ fontFamily: 'var(--fu)', fontWeight: 700, color: 'var(--gd)', fontSize: '1.05rem' }}
                >
                    Active Subscriptions
                </div>
                <div style={{ fontSize: '.8rem', color: 'var(--mu)', marginTop: 3 }}>
                    Manage your recurring memberships
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
                {clientData.subscriptions.map((s, i) => (
                    <div
                        key={i}
                        className="card"
                        style={{ padding: 24, borderLeft: '3px solid var(--gb)' }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                flexWrap: 'wrap',
                                gap: 16,
                            }}
                        >
                            <div>
                                <div
                                    style={{
                                        fontFamily: 'var(--fu)',
                                        fontWeight: 700,
                                        fontSize: '1rem',
                                        color: 'var(--gd)',
                                        marginBottom: 4,
                                    }}
                                >
                                    {s.plan}
                                </div>
                                <div style={{ fontSize: '.8rem', color: 'var(--mu)', marginBottom: 12 }}>
                                    by {s.expert}
                                </div>
                                <div style={{ display: 'flex', gap: 20, fontSize: '.78rem', color: 'var(--sl)' }}>
                                    <span>📅 Since {s.since}</span>
                                    <span>🔄 Renews {s.renewal}</span>
                                </div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div
                                    style={{
                                        fontFamily: 'var(--fu)',
                                        fontWeight: 800,
                                        fontSize: '1.3rem',
                                        color: 'var(--gd)',
                                        marginBottom: 8,
                                    }}
                                >
                                    {s.price}
                                </div>
                                <div style={{ display: 'flex', gap: 8 }}>
                                    <StatusBadge status={s.status} />
                                    <button
                                        style={{
                                            padding: '4px 12px',
                                            borderRadius: 20,
                                            border: '1.5px solid var(--rd)',
                                            background: 'transparent',
                                            color: 'var(--rd)',
                                            fontSize: '.7rem',
                                            fontFamily: 'var(--fu)',
                                            fontWeight: 600,
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => notify('Cancellation flow coming soon.', 'warn')}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div
                style={{
                    background: 'var(--gmt)',
                    border: '1.5px dashed rgba(255,155,81,0.25)',
                    borderRadius: 'var(--rmd)',
                    padding: 28,
                    textAlign: 'center',
                }}
            >
                <div style={{ fontSize: '1.5rem', marginBottom: 10 }}>🔍</div>
                <div
                    style={{
                        fontFamily: 'var(--fu)',
                        fontWeight: 600,
                        color: 'var(--gd)',
                        marginBottom: 6,
                        fontSize: '.9rem',
                    }}
                >
                    Discover More Communities
                </div>
                <p style={{ fontSize: '.8rem', color: 'var(--mu)', marginBottom: 16 }}>
                    Browse expert memberships and WhatsApp groups to join.
                </p>
                <button className="btn btn-gr btn-sm">Explore Subscriptions →</button>
            </div>
        </div>
    );
}

function Purchases({ notify }) {
    return (
        <div>
            <div style={{ marginBottom: 20 }}>
                <div
                    style={{ fontFamily: 'var(--fu)', fontWeight: 700, color: 'var(--gd)', fontSize: '1.05rem' }}
                >
                    My Purchases
                </div>
                <div style={{ fontSize: '.8rem', color: 'var(--mu)', marginTop: 3 }}>
                    Digital products you own
                </div>
            </div>

            <div className="grid-3" style={{ gap: 16 }}>
                {clientData.purchases.map((p, i) => (
                    <div key={i} className="card" style={{ padding: 20 }}>
                        <div
                            style={{
                                height: 56,
                                background: 'var(--gmt)',
                                borderRadius: 'var(--rsm)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.6rem',
                                marginBottom: 14,
                            }}
                        >
                            {p.icon}
                        </div>
                        <div
                            style={{
                                fontFamily: 'var(--fu)',
                                fontWeight: 700,
                                color: 'var(--gd)',
                                fontSize: '.88rem',
                                marginBottom: 4,
                            }}
                        >
                            {p.title}
                        </div>
                        <div style={{ fontSize: '.74rem', color: 'var(--mu)', marginBottom: 12 }}>
                            by {p.expert} · {p.date}
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: 'var(--fu)',
                                    fontWeight: 800,
                                    color: 'var(--gd)',
                                    fontSize: '.9rem',
                                }}
                            >
                                {p.price}
                            </span>
                            <button
                                className="btn btn-gr btn-sm"
                                style={{ fontSize: '.74rem' }}
                                onClick={() => notify(`Downloading "${p.title}"…`)}
                            >
                                ↓ Download
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Settings({ notify }) {
    return (
        <div style={{ maxWidth: 560 }}>
            <div
                style={{
                    fontFamily: 'var(--fu)',
                    fontWeight: 700,
                    color: 'var(--gd)',
                    fontSize: '1.05rem',
                    marginBottom: 24,
                }}
            >
                Account Settings
            </div>

            <div className="card" style={{ padding: 28, marginBottom: 20 }}>
                <div
                    style={{
                        fontFamily: 'var(--fu)',
                        fontWeight: 600,
                        color: 'var(--gd)',
                        marginBottom: 20,
                        fontSize: '.9rem',
                    }}
                >
                    Profile Information
                </div>
                {[
                    { label: 'Full Name', placeholder: 'Aisha Khan', type: 'text' },
                    { label: 'Email Address', placeholder: 'client@mindgigs.com', type: 'email' },
                    { label: 'Phone Number', placeholder: '+1 (555) 000-0000', type: 'text' },
                    { label: 'Location', placeholder: 'New York, USA', type: 'text' },
                ].map((f) => (
                    <div className="field" key={f.label}>
                        <label className="label">{f.label}</label>
                        <input className="input" type={f.type} placeholder={f.placeholder} />
                    </div>
                ))}
                <button
                    className="btn btn-gr"
                    onClick={() => notify('Profile updated successfully!')}
                >
                    Save Changes
                </button>
            </div>

            <div className="card" style={{ padding: 28 }}>
                <div
                    style={{
                        fontFamily: 'var(--fu)',
                        fontWeight: 600,
                        color: 'var(--gd)',
                        marginBottom: 20,
                        fontSize: '.9rem',
                    }}
                >
                    Change Password
                </div>
                {['Current Password', 'New Password', 'Confirm New Password'].map((f) => (
                    <div className="field" key={f}>
                        <label className="label">{f}</label>
                        <input className="input" type="password" placeholder="••••••••" />
                    </div>
                ))}
                <button
                    className="btn btn-gh"
                    onClick={() => notify('Password updated successfully!')}
                >
                    Update Password
                </button>
            </div>
        </div>
    );
}

/* ── MAIN DASHBOARD ── */
const NAV_ITEMS = [
    { key: 'overview', icon: '🏠', label: 'Overview' },
    { key: 'bookings', icon: '📅', label: 'My Bookings' },
    { key: 'subscriptions', icon: '♻️', label: 'Subscriptions' },
    { key: 'purchases', icon: '📦', label: 'Purchases' },
    { key: 'settings', icon: '⚙️', label: 'Settings' },
];

export function ClientDashboard({ user, nav, logout, notify }) {
    const [section, setSection] = useState('overview');

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--cr)' }}>
            {/* ── SIDEBAR ── */}
            <aside
                className="sidebar"
                style={{
                    width: 240,
                    background: 'var(--gd)',
                    minHeight: '100vh',
                    position: 'sticky',
                    top: 0,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {/* Logo */}
                <div
                    style={{
                        padding: '28px 24px 20px',
                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                    }}
                >
                    <div
                        style={{
                            fontFamily: 'var(--fu)',
                            fontWeight: 800,
                            fontSize: '1.15rem',
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            cursor: 'pointer',
                        }}
                        onClick={() => nav('home')}
                    >
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
                    <div
                        style={{
                            fontSize: '.7rem',
                            color: 'rgba(255,255,255,0.35)',
                            marginTop: 4,
                            fontFamily: 'var(--fu)',
                        }}
                    >
                        Client Portal
                    </div>
                </div>

                {/* User info */}
                <div
                    style={{
                        padding: '16px 24px',
                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                    }}
                >
                    <div
                        style={{
                            width: 38,
                            height: 38,
                            borderRadius: '50%',
                            background: 'rgba(255,178,122,0.2)',
                            border: '2px solid rgba(255,178,122,0.4)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1rem',
                        }}
                    >
                        🛍️
                    </div>
                    <div>
                        <div
                            style={{
                                fontFamily: 'var(--fu)',
                                fontWeight: 700,
                                color: '#fff',
                                fontSize: '.85rem',
                            }}
                        >
                            {user.name}
                        </div>
                        <div style={{ fontSize: '.65rem', color: 'rgba(255,255,255,0.4)' }}>Client Account</div>
                    </div>
                </div>

                {/* Nav items */}
                <nav style={{ flex: 1, padding: '12px 0' }}>
                    {NAV_ITEMS.map((item) => (
                        <div
                            key={item.key}
                            onClick={() => setSection(item.key)}
                            style={{
                                padding: '11px 24px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 12,
                                cursor: 'pointer',
                                background:
                                    section === item.key
                                        ? 'rgba(245, 158, 11, 0.12)'
                                        : 'transparent',
                                borderLeft:
                                    section === item.key
                                        ? '3px solid var(--gb)'
                                        : '3px solid transparent',
                                transition: 'all 0.18s',
                                fontSize: '.85rem',
                                fontFamily: 'var(--fu)',
                                fontWeight: section === item.key ? 700 : 500,
                                color: section === item.key ? '#fff' : 'rgba(255,255,255,0.55)',
                            }}
                            onMouseEnter={(e) => {
                                if (section !== item.key)
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                            }}
                            onMouseLeave={(e) => {
                                if (section !== item.key)
                                    e.currentTarget.style.background = 'transparent';
                            }}
                        >
                            <span style={{ fontSize: '1rem' }}>{item.icon}</span>
                            {item.label}
                        </div>
                    ))}
                </nav>

                {/* Explore CTA */}
                <div style={{ padding: '16px 16px 8px' }}>
                    <button
                        className="btn btn-gr w-full btn-sm"
                        onClick={() => nav('experts')}
                        style={{ marginBottom: 8 }}
                    >
                        🔍 Find Experts
                    </button>
                </div>

                {/* Logout */}
                <div style={{ padding: '8px 16px 24px' }}>
                    <button
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: 'var(--rsm)',
                            background: 'rgba(255,255,255,0.05)',
                            color: 'rgba(255,255,255,0.5)',
                            fontFamily: 'var(--fu)',
                            fontSize: '.78rem',
                            fontWeight: 600,
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.18s',
                            textAlign: 'left',
                            display: 'flex',
                            gap: 8,
                            alignItems: 'center',
                        }}
                        onClick={logout}
                        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(232,68,68,0.15)')}
                        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
                    >
                        ← Log Out
                    </button>
                </div>
            </aside>

            {/* ── MAIN ── */}
            <main style={{ flex: 1, padding: '32px 36px', maxWidth: 'calc(100% - 240px)' }}>
                {/* Top bar */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 28,
                    }}
                >
                    <div>
                        <div
                            style={{
                                fontFamily: 'var(--fu)',
                                fontWeight: 800,
                                color: 'var(--gd)',
                                fontSize: '1.4rem',
                            }}
                        >
                            {NAV_ITEMS.find((n) => n.key === section)?.icon}{' '}
                            {NAV_ITEMS.find((n) => n.key === section)?.label}
                        </div>
                        <div style={{ fontSize: '.8rem', color: 'var(--mu)', marginTop: 4 }}>
                            Welcome back, {user.name}
                        </div>
                    </div>
                    <button className="btn btn-gr btn-sm" onClick={() => nav('experts')}>
                        🔍 Explore Experts
                    </button>
                </div>

                {/* Section content */}
                {section === 'overview' && <Overview nav={nav} />}
                {section === 'bookings' && <MyBookings nav={nav} notify={notify} />}
                {section === 'subscriptions' && <Subscriptions notify={notify} />}
                {section === 'purchases' && <Purchases notify={notify} />}
                {section === 'settings' && <Settings notify={notify} />}
            </main>
        </div>
    );
}
