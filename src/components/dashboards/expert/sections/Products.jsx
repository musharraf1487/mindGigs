export function Products({ user, expertData }) {
  const products = expertData?.offers?.products || [];

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '4px' }}>Digital Products</h2>
          <p style={{ color: 'var(--sl)', fontSize: '0.9rem' }}>Sell templates, guides, and tools to your audience.</p>
        </div>
        <button className="btn btn-gr">+ Upload Product</button>
      </div>

      {products.length > 0 ? (
        <div className="grid-3" style={{ gap: '24px' }}>
          {products.map((product, i) => (
            <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              <div style={{ height: '140px', background: 'var(--gmt)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem' }}>
                📦
              </div>
              <div style={{ padding: '20px', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--gd)', lineHeight: 1.4 }}>
                    {product.title}
                  </h3>
                  <div style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--gb)' }}>
                    ${product.price.replace('$', '')}
                  </div>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--sl)', marginBottom: '20px', lineHeight: 1.5 }}>
                  {product.description || 'Pre-configured digital asset for your clients.'}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', background: 'rgba(0,0,0,0.02)', borderRadius: '8px', marginBottom: '20px' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--mu)', fontWeight: 600, textTransform: 'uppercase' }}>Sales</div>
                  <div style={{ fontWeight: 700, color: 'var(--gd)' }}>{product.sales}</div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button className="btn btn-sm btn-gh" style={{ flex: 1 }}>Edit</button>
                  <button className="btn btn-sm btn-gh" style={{ flex: 1 }}>Stats</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card" style={{ padding: '100px 20px', textAlign: 'center', color: 'var(--mu)' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🎁</div>
          <h3 style={{ fontSize: '1.2rem', color: 'var(--gd)', marginBottom: '8px' }}>No products yet</h3>
          <p style={{ maxWidth: '300px', margin: '0 auto 24px' }}>Upload your first digital product to start earning passive income.</p>
          <button className="btn btn-gr">Upload Product</button>
        </div>
      )}
    </>
  );
}
