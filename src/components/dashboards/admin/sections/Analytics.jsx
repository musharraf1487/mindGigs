import React from 'react';

export function Analytics({ user, adminData }) {
  return (
    <div className="dash-content">
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px' }}>Platform Analytics</h2>
        <div style={{ fontSize: '14px', color: '#666' }}>Detailed platform performance metrics</div>
      </div>

      {/* Platform Metrics */}
      <div className="card" style={{ marginBottom: '30px' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Key Metrics</h3>
        </div>
        <div style={{ padding: '20px' }}>
          <div className="grid-4" style={{ gap: '20px' }}>
            {adminData?.platformMetrics?.map((metric, i) => (
              <div key={i} style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '6px' }}>
                <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px', fontWeight: '500' }}>{metric.label}</div>
                <div style={{ fontSize: '20px', fontWeight: '700', color: '#333', marginBottom: '4px' }}>{metric.value}</div>
                <div style={{ fontSize: '12px', color: '#666' }}>{metric.trend}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="card" style={{ marginBottom: '30px' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Monthly Revenue Trend</h3>
        </div>
        <div style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', height: '300px' }}>
            {adminData?.chartBars?.map((bar, i) => (
              <div key={i} style={{ textAlign: 'center', flex: 1 }}>
                <div 
                  style={{ 
                    height: (bar / 100) * 250,
                    backgroundColor: '#0066ff',
                    borderRadius: '4px 4px 0 0',
                    margin: '0 4px',
                    minHeight: '2px'
                  }}
                />
                <div style={{ fontSize: '11px', marginTop: '8px', color: '#666' }}>
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* User Growth */}
      <div className="grid-2" style={{ gap: '20px', marginBottom: '30px' }}>
        <div className="card">
          <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600' }}>User Growth</h3>
          </div>
          <div style={{ padding: '20px' }}>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontSize: '13px', fontWeight: '500' }}>Experts</span>
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#0066ff' }}>1,840 (74%)</span>
              </div>
              <div style={{ height: '8px', backgroundColor: '#e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '74%', backgroundColor: '#0066ff' }} />
              </div>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontSize: '13px', fontWeight: '500' }}>Affiliates</span>
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#f39c12' }}>450 (18%)</span>
              </div>
              <div style={{ height: '8px', backgroundColor: '#e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '18%', backgroundColor: '#f39c12' }} />
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontSize: '13px', fontWeight: '500' }}>Visitors</span>
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#666' }}>1,958 (8%)</span>
              </div>
              <div style={{ height: '8px', backgroundColor: '#e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '8%', backgroundColor: '#666' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Revenue Breakdown</h3>
          </div>
          <div style={{ padding: '20px' }}>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontSize: '13px', fontWeight: '500' }}>Session Bookings</span>
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#4ecb87' }}>46%</span>
              </div>
              <div style={{ height: '8px', backgroundColor: '#e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '46%', backgroundColor: '#4ecb87' }} />
              </div>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontSize: '13px', fontWeight: '500' }}>Subscriptions</span>
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#1ab8a0' }}>35%</span>
              </div>
              <div style={{ height: '8px', backgroundColor: '#e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '35%', backgroundColor: '#1ab8a0' }} />
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontSize: '13px', fontWeight: '500' }}>Digital Products</span>
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#e8c547' }}>19%</span>
              </div>
              <div style={{ height: '8px', backgroundColor: '#e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '19%', backgroundColor: '#e8c547' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
