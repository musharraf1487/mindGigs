export function Offers({ user, expertData, notify }) {
  const sessionOffers = expertData?.offers?.sessions || [];
  const subscriptionOffers = expertData?.offers?.subscriptions || [];
  const productOffers = expertData?.offers?.products || [];

  const allOffers = [
    ...sessionOffers.map(o => ({ ...o, category: 'Session' })),
    ...subscriptionOffers.map(o => ({ ...o, category: 'Subscription' })),
    ...productOffers.map(o => ({ ...o, category: 'Product' }))
  ];

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '4px' }}>My Offers</h2>
          <p style={{ color: 'var(--sl)', fontSize: '0.9rem' }}>Manage your sessions, subscriptions, and digital products.</p>
        </div>
        <button className="btn btn-gr" onClick={() => notify('Opening offer creator...')}>+ Create New Offer</button>
      </div>

      <div className="grid-3" style={{ gap: '20px' }}>
        {allOffers.length > 0 ? (
          allOffers.map((offer, i) => (
            <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', transition: 'transform 0.2s', cursor: 'default' }}>
              <div style={{ padding: '24px', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <span className="tag" style={{ background: 'rgba(0,0,0,0.05)', color: 'var(--sl)', fontSize: '0.65rem' }}>{offer.category}</span>
                  {!offer.active && <span className="tag tag-gh" style={{ fontSize: '0.65rem' }}>Inactive</span>}
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--gd)', marginBottom: '8px', lineHeight: 1.4 }}>
                  {offer.title}
                </h3>
                <div style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--gb)', marginBottom: '12px' }}>
                  {offer.price.includes('$') ? offer.price : `$${offer.price}`}
                </div>
                {offer.duration && (
                  <div style={{ fontSize: '0.8rem', color: 'var(--sl)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    🕒 {offer.duration}
                  </div>
                )}
                <p style={{ fontSize: '0.82rem', color: 'var(--mu)', lineHeight: 1.5 }}>
                  {offer.description || offer.desc || 'No description provided.'}
                </p>
              </div>
              <div style={{ padding: '16px 24px', borderTop: '1px solid rgba(0,0,0,0.05)', display: 'flex', gap: '10px', background: 'rgba(0,0,0,0.01)' }}>
                <button className="btn btn-sm btn-gh" style={{ flex: 1 }} onClick={() => notify('Edit functionality coming soon!')}>Edit</button>
                <button className="btn btn-sm btn-gh" style={{ flex: 1 }} onClick={() => notify('Offer duplicated.')}>Duplicate</button>
              </div>
            </div>
          ))
        ) : (
          <div style={{ gridColumn: '1 / -1', padding: '100px 20px', textAlign: 'center', color: 'var(--mu)', background: '#fff', borderRadius: '12px', border: '2px dashed rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>💼</div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--gd)', marginBottom: '8px' }}>No offers yet</h3>
            <p style={{ maxWidth: '300px', margin: '0 auto 24px' }}>Create your first session or product to start earning.</p>
            <button className="btn btn-gr" onClick={() => notify('Opening offer creator...')}>Create My First Offer</button>
          </div>
        )}
      </div>
    </>
  );
}
