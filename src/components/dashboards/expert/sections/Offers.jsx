import React, { useState } from 'react';

export function Offers({ user, expertData, notify }) {
  const [offers] = useState(expertData?.offers || []);

  return (
    <div className="dash-content">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600' }}>My Offers</h2>
        <button className="btn btn-pr">+ Create New Offer</button>
      </div>

      <div className="grid-3" style={{ gap: '20px' }}>
        {offers.length > 0 ? (
          offers.map((offer, i) => (
            <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '20px', flex: 1 }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
                  {offer.type}
                </h3>
                <div style={{ fontSize: '28px', fontWeight: '700', color: '#1aa34a', marginBottom: '12px' }}>
                  ${offer.price}
                </div>
                <div style={{ fontSize: '13px', color: '#666', marginBottom: '12px' }}>
                  {offer.duration}
                </div>
                <div style={{ fontSize: '13px', color: '#999' }}>
                  {offer.description}
                </div>
              </div>
              <div style={{ padding: '15px 20px', borderTop: '1px solid #eee', display: 'flex', gap: '10px' }}>
                <button className="btn btn-sm" style={{ flex: 1, fontSize: '13px' }}>Edit</button>
                <button className="btn btn-sm" style={{ flex: 1, fontSize: '13px', backgroundColor: '#f5f5f5', color: '#333' }}>Duplicate</button>
              </div>
            </div>
          ))
        ) : (
          <div style={{ gridColumn: '1 / -1', padding: '60px 20px', textAlign: 'center', color: '#999' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>💼</div>
            <p>No offers yet. Create your first offer to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
}
