import React, { useState, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import { db, storage } from '../../config/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export function OnboardingPage({ nav, notify, addExpert }) {
  const [step, setStep] = useState(0);
  const [offerTab, setOfferTab] = useState(0);

  // Profile Setup State
  const [bio, setBio] = useState('');
  const [tags, setTags] = useState('');

  // Offer Setup State
  const [offerTitle, setOfferTitle] = useState('');
  const [offerPrice, setOfferPrice] = useState('');
  const [offerDesc, setOfferDesc] = useState('');
  const [offerDuration, setOfferDuration] = useState('60 min');

  const { currentUser, userData } = useAuth();
  const fileInputRef = useRef(null);
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAvatarFile(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

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
                  background: avatarPreview ? `url(${avatarPreview}) center/cover` : 'var(--gp)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: avatarPreview ? '0' : '2rem',
                  margin: '0 auto 24px',
                  border: '3px dashed rgba(255,155,81,.3)',
                  cursor: 'pointer',
                }}
                onClick={() => fileInputRef.current?.click()}
              >
                📷
              </div>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                accept="image/*"
                onChange={handleFileChange}
              />
              <p style={{ textAlign: 'center', fontSize: '.78rem', color: 'var(--mu)', marginBottom: 24 }}>
                {avatarPreview ? 'Photo selected. Click to change.' : 'Click to upload profile photo'}
              </p>
              <div className="field">
                <label className="label">Bio (max 300 chars)</label>
                <textarea
                  className="textarea"
                  placeholder="Tell experts and visitors who you are and what you offer..."
                  style={{ minHeight: 80 }}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>
              <div className="field">
                <label className="label">Expertise Tags</label>
                <input
                  className="input"
                  placeholder="e.g. Product Strategy, SaaS, Fundraising"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
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
                    <input className="input" placeholder="e.g. 60-min Strategy Deep Dive" value={offerTitle} onChange={e => setOfferTitle(e.target.value)} />
                  </div>
                  <div className="field">
                    <label className="label">Duration</label>
                    <select className="select w-full" value={offerDuration} onChange={e => setOfferDuration(e.target.value)}>
                      <option value="15 min">15 minutes</option>
                      <option value="30 min">30 minutes</option>
                      <option value="60 min">60 minutes</option>
                      <option value="Custom">Custom</option>
                    </select>
                  </div>
                  <div className="field">
                    <label className="label">Price (USD)</label>
                    <input className="input" type="number" placeholder="e.g. 150" value={offerPrice} onChange={e => setOfferPrice(e.target.value)} />
                  </div>
                  <div className="field">
                    <label className="label">Description</label>
                    <textarea
                      className="textarea"
                      placeholder="What will you cover in this session?"
                      value={offerDesc}
                      onChange={e => setOfferDesc(e.target.value)}
                    />
                  </div>
                </>
              )}
              {offerTab === 1 && (
                <>
                  <div className="field">
                    <label className="label">Subscription Name</label>
                    <input className="input" placeholder="e.g. Monthly Mentorship Club" value={offerTitle} onChange={e => setOfferTitle(e.target.value)} />
                  </div>
                  <div className="field">
                    <label className="label">Monthly Price (USD)</label>
                    <input className="input" type="number" placeholder="e.g. 99" value={offerPrice} onChange={e => setOfferPrice(e.target.value)} />
                  </div>
                  <div className="field">
                    <label className="label">What's Included</label>
                    <textarea
                      className="textarea"
                      placeholder="Weekly Q&A, WhatsApp group access, monthly 1:1..."
                      value={offerDesc}
                      onChange={e => setOfferDesc(e.target.value)}
                    />
                  </div>
                </>
              )}
              {offerTab === 2 && (
                <>
                  <div className="field">
                    <label className="label">Product Title</label>
                    <input className="input" placeholder="e.g. The Ultimate SaaS Pitch Deck Template" value={offerTitle} onChange={e => setOfferTitle(e.target.value)} />
                  </div>
                  <div className="field">
                    <label className="label">Price (USD)</label>
                    <input className="input" type="number" placeholder="e.g. 49" value={offerPrice} onChange={e => setOfferPrice(e.target.value)} />
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
              disabled={isSubmitting}
              onClick={async () => {
                if (step < steps.length - 1) {
                  setStep((s) => s + 1);
                } else {
                  if (!currentUser) return notify('User not authenticated', 'error');
                  setIsSubmitting(true);
                  try {
                    let photoUrl = userData?.image || 'https://i.pravatar.cc/400?img=50';

                    if (avatarFile) {
                      const storageRef = ref(storage, `avatars/${currentUser.uid}`);
                      await uploadBytes(storageRef, avatarFile);
                      photoUrl = await getDownloadURL(storageRef);
                    }

                    const newSession = offerTab === 0 && offerTitle ? { title: offerTitle, price: `$${offerPrice || 0}`, desc: offerDesc, duration: offerDuration } : null;
                    const newSub = offerTab === 1 && offerTitle ? { title: offerTitle, price: `$${offerPrice || 0}`, desc: offerDesc } : null;
                    const newProduct = offerTab === 2 && offerTitle ? { title: offerTitle, price: `$${offerPrice || 0}`, desc: offerDesc } : null;

                    const expertUpdates = {
                      image: photoUrl,
                      category: 'Business', // Default or could be a field
                      tags: tags ? tags.split(',').map(t => t.trim()) : ['New Expert', 'Consulting'],
                      bio: bio || 'Newly onboarded expert profile on mindGigs.',
                      rating: 0,
                      sessions: 0,
                      startingPrice: offerPrice || 100,
                      verified: false,
                      sessionsList: newSession ? [newSession] : [],
                      subscriptionsList: newSub ? [newSub] : [],
                      productsList: newProduct ? [newProduct] : [],
                      onboardingComplete: true
                    };

                    await updateDoc(doc(db, 'users', currentUser.uid), expertUpdates);

                    if (addExpert) addExpert({ ...userData, ...expertUpdates, id: currentUser.uid });
                    notify('🎉 Profile live! Your page is ready.');
                    nav('experts');
                  } catch (err) {
                    console.error('Error saving profile:', err);
                    notify('Failed to save profile', 'error');
                  } finally {
                    setIsSubmitting(false);
                  }
                }
              }}
            >
              {isSubmitting ? 'Launching...' : (step < steps.length - 1 ? 'Continue →' : '🚀 Launch My Profile')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
