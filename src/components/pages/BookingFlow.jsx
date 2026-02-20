import React, { useState } from 'react';

export function BookingFlow({ nav, notify }) {
  const [step, setStep] = useState(0);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const days = Array.from({ length: 28 }, (_, i) => i + 1);
  const times = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'];
  const available = [3, 5, 8, 12, 15, 19, 22, 26];

  if (step === 2)
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--gmt)',
          padding: 24,
        }}
      >
        <div className="card" style={{ padding: 48, maxWidth: 440, width: '100%', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: 20, animation: 'fl1 1s ease' }}>✅</div>
          <h2 style={{ fontFamily: 'var(--fd)', fontSize: '2rem', color: 'var(--gd)', marginBottom: 12 }}>
            Booking Confirmed!
          </h2>
          <p
            style={{
              fontSize: '.9rem',
              color: 'var(--sl)',
              lineHeight: 1.7,
              marginBottom: 24,
            }}
          >
            Your 60-min Strategy Deep Dive with Priya Sharma is confirmed for <strong>Feb {selectedDay}, {selectedTime}</strong>. A
            calendar invite and Zoom link have been sent to your email.
          </p>
          <button
            className="btn btn-gr btn-lg w-full"
            onClick={() => {
              notify('Calendar event added!');
              nav('home');
            }}
          >
            Add to Calendar
          </button>
          <button className="btn btn-gh w-full" style={{ marginTop: 10 }} onClick={() => nav('home')}>
            Back to Home
          </button>
        </div>
      </div>
    );

  return (
    <div style={{ minHeight: '100vh', background: 'var(--gmt)', padding: '80px 24px 40px' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <div
          style={{
            textAlign: 'center',
            marginBottom: 32,
            cursor: 'pointer',
          }}
          onClick={() => nav('public-profile')}
        >
          <span style={{ fontFamily: 'var(--fu)', fontWeight: 800, fontSize: '1.3rem', color: 'var(--gd)' }}>
            ← Back to Priya's Profile
          </span>
        </div>

        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 32 }}>
          {['Select Date & Time', 'Checkout'].map((s, i) => (
            <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  background: i <= step ? 'var(--gb)' : 'rgba(45,158,95,.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--fu)',
                  fontSize: '.78rem',
                  fontWeight: 700,
                  color: i <= step ? '#fff' : 'var(--mu)',
                }}
              >
                {i + 1}
              </div>
              <span
                style={{
                  fontFamily: 'var(--fu)',
                  fontSize: '.8rem',
                  fontWeight: 600,
                  color: i === step ? 'var(--gd)' : 'var(--mu)',
                }}
              >
                {s}
              </span>
              {i < 1 && <span style={{ color: 'var(--mu)', margin: '0 4px' }}>→</span>}
            </div>
          ))}
        </div>

        {step === 0 && (
          <div className="card" style={{ padding: 32 }}>
            <div
              style={{
                fontFamily: 'var(--fu)',
                fontWeight: 700,
                color: 'var(--gd)',
                marginBottom: 4,
              }}
            >
              60-min Strategy Deep Dive with Priya Sharma
            </div>
            <div style={{ fontSize: '.8rem', color: 'var(--mu)', marginBottom: 24 }}>
              $250 · Select your preferred date and time
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 2, marginBottom: 16 }}>
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
                <div
                  key={d}
                  style={{
                    textAlign: 'center',
                    fontFamily: 'var(--fu)',
                    fontSize: '.65rem',
                    fontWeight: 700,
                    color: 'var(--mu)',
                    padding: '8px 0',
                  }}
                >
                  {d}
                </div>
              ))}
            </div>
            <div className="cal-grid" style={{ marginBottom: 24 }}>
              {days.map((d) => (
                <button
                  key={d}
                  className={`cal-day ${d < 19 ? 'cal-past' : available.includes(d) ? 'available' : ''} ${
                    selectedDay === d ? 'selected' : ''
                  }`}
                  onClick={() => available.includes(d) && d >= 19 && setSelectedDay(d)}
                >
                  {d}
                </button>
              ))}
            </div>

            {selectedDay && (
              <>
                <div
                  style={{
                    fontFamily: 'var(--fu)',
                    fontSize: '.82rem',
                    fontWeight: 700,
                    color: 'var(--gd)',
                    marginBottom: 12,
                  }}
                >
                  Available slots for Feb {selectedDay}
                </div>
                <div className="time-slots">
                  {times.map((t) => (
                    <button
                      key={t}
                      className={`time-slot ${selectedTime === t ? 'selected' : ''}`}
                      onClick={() => setSelectedTime(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </>
            )}

            <button
              className="btn btn-gr btn-lg w-full"
              style={{ marginTop: 24 }}
              onClick={() => {
                if (selectedDay && selectedTime) setStep(1);
                else notify('Please select a date and time.', 'warn');
              }}
            >
              Continue to Checkout →
            </button>
          </div>
        )}

        {step === 1 && (
          <div className="card" style={{ padding: 32 }}>
            <div
              style={{
                fontFamily: 'var(--fu)',
                fontWeight: 700,
                color: 'var(--gd)',
                marginBottom: 20,
              }}
            >
              Order Summary
            </div>
            <div
              style={{
                background: 'var(--gmt)',
                borderRadius: 'var(--rsm)',
                padding: 20,
                marginBottom: 24,
                border: '1px solid rgba(45,158,95,.12)',
              }}
            >
              <div style={{ display: 'flex', gap: 14 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    background: 'var(--gp)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.3rem',
                    flexShrink: 0,
                    border: '2px solid rgba(45,158,95,.2)',
                  }}
                >
                  🧠
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--fu)', fontWeight: 700, color: 'var(--gd)' }}>
                    Priya Sharma
                  </div>
                  <div style={{ fontSize: '.82rem', color: 'var(--sl)', marginTop: 2 }}>
                    60-min Strategy Deep Dive
                  </div>
                  <div
                    style={{
                      fontSize: '.78rem',
                      color: 'var(--gb)',
                      marginTop: 4,
                      fontWeight: 600,
                    }}
                  >
                    📅 Feb {selectedDay}, {selectedTime}
                  </div>
                </div>
                <div
                  style={{
                    marginLeft: 'auto',
                    fontFamily: 'var(--fu)',
                    fontSize: '1.3rem',
                    fontWeight: 800,
                    color: 'var(--gd)',
                  }}
                >
                  $250
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">Email Address</label>
              <input className="input" placeholder="your@email.com" />
            </div>
            <div className="field">
              <label className="label">Note to Expert (optional)</label>
              <textarea
                className="textarea"
                placeholder="What do you want to focus on in this session?"
                style={{ minHeight: 70 }}
              />
            </div>
            <div
              style={{
                borderTop: '1px solid rgba(45,158,95,.08)',
                paddingTop: 16,
                marginBottom: 20,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--fu)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: 'var(--gd)',
                }}
              >
                Total
              </span>
              <span
                style={{
                  fontFamily: 'var(--fu)',
                  fontWeight: 800,
                  fontSize: '1.3rem',
                  color: 'var(--gd)',
                }}
              >
                $250
              </span>
            </div>
            <button
              className="btn w-full btn-lg"
              style={{
                background: '#635bff',
                color: '#fff',
                fontFamily: 'var(--fu)',
                fontWeight: 700,
                fontSize: '1rem',
              }}
              onClick={() => setStep(2)}
            >
              🔒 Pay with Stripe
            </button>
            <p style={{ textAlign: 'center', fontSize: '.72rem', color: 'var(--mu)', marginTop: 12 }}>
              Secured by Stripe · 256-bit encryption
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
