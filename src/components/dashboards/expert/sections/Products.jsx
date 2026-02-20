import React, { useState } from 'react';

export function Products({ user, expertData }) {
  const [products] = useState(expertData?.products || []);

  return (
    <div className="dash-content">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px' }}>Digital Products</h2>
          <div style={{ fontSize: '14px', color: '#666' }}>Create and manage digital products to sell</div>
        </div>
        <button className="btn btn-pr">+ Upload Product</button>
      </div>

      {products.length > 0 ? (
        <div className="grid-3" style={{ gap: '20px' }}>
          {products.map((product, i) => (
            <div key={i} className="card">
              <div style={{ height: '160px', backgroundColor: '#f5f5f5', borderRadius: '8px 8px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px' }}>
                📦
              </div>
              <div style={{ padding: '16px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
                  {product.name}
                </h3>
                <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px', height: '36px', overflow: 'hidden' }}>
                  {product.description}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '16px', fontWeight: '700', color: '#1aa34a' }}>${product.price}</span>
                  <span className="tag tag-sm">✓ {product.sales} sold</span>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button style={{ flex: 1, padding: '6px', fontSize: '12px', backgroundColor: '#f5f5f5', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Edit
                  </button>
                  <button style={{ flex: 1, padding: '6px', fontSize: '12px', backgroundColor: '#f5f5f5', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card" style={{ padding: '60px 20px', textAlign: 'center', color: '#999' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎁</div>
          <p>No products yet. Upload your first digital product to start selling!</p>
          <button className="btn btn-pr" style={{ marginTop: '16px' }}>Upload Product</button>
        </div>
      )}
    </div>
  );
}
