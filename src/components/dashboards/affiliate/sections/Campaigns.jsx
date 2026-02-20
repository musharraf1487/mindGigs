import React from 'react';

export function Campaigns({ user, affiliateData }) {
  return (
    <div className="dash-content">
      <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px' }}>Marketing Campaigns</h2>
          <div style={{ fontSize: '14px', color: '#666' }}>Track performance of your campaigns</div>
        </div>
        <button className="btn btn-pr">New Campaign</button>
      </div>

      <div className="card">
        <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Active & Past Campaigns</h3>
        </div>
        <div style={{ padding: '20px' }}>
          {affiliateData?.campaigns?.length > 0 ? (
            <div>
              {affiliateData.campaigns.map((campaign, i) => (
                <div key={i} style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: i < affiliateData.campaigns.length - 1 ? '1px solid #eee' : 'none' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>{campaign.name}</div>
                      <div style={{ fontSize: '12px', color: '#999' }}>
                        Status: <span style={{ fontWeight: '500', color: campaign.status === 'active' ? '#1aa34a' : '#f39c12' }}>
                          {campaign.status === 'active' ? '🟢 Active' : '⏸️ Paused'}
                        </span>
                      </div>
                    </div>
                    <button className="btn btn-sm">Manage</button>
                  </div>
                  <div className="grid-4" style={{ gap: '12px' }}>
                    <div style={{ padding: '12px', backgroundColor: '#f9f9f9', borderRadius: '6px' }}>
                      <div style={{ fontSize: '11px', color: '#999', marginBottom: '4px' }}>Clicks</div>
                      <div style={{ fontSize: '16px', fontWeight: '700', color: '#0066ff' }}>{campaign.clicks}</div>
                    </div>
                    <div style={{ padding: '12px', backgroundColor: '#f9f9f9', borderRadius: '6px' }}>
                      <div style={{ fontSize: '11px', color: '#999', marginBottom: '4px' }}>Conversions</div>
                      <div style={{ fontSize: '16px', fontWeight: '700', color: '#1aa34a' }}>{campaign.conversions}</div>
                    </div>
                    <div style={{ padding: '12px', backgroundColor: '#f9f9f9', borderRadius: '6px' }}>
                      <div style={{ fontSize: '11px', color: '#999', marginBottom: '4px' }}>Conversion Rate</div>
                      <div style={{ fontSize: '16px', fontWeight: '700', color: '#666' }}>
                        {campaign.clicks > 0 ? ((campaign.conversions / campaign.clicks * 100).toFixed(1) + '%') : '0%'}
                      </div>
                    </div>
                    <div style={{ padding: '12px', backgroundColor: '#f9f9f9', borderRadius: '6px' }}>
                      <div style={{ fontSize: '11px', color: '#999', marginBottom: '4px' }}>ROI</div>
                      <div style={{ fontSize: '16px', fontWeight: '700', color: '#1aa34a' }}>{campaign.roi}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', color: '#999', padding: '40px 20px' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>📢</div>
              No campaigns yet
            </div>
          )}
        </div>
      </div>

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#fef3c7', borderRadius: '6px', border: '1px solid #fce7b6', fontSize: '13px', color: '#92400e' }}>
        <strong>📊 Pro Tip:</strong> Email outreach and LinkedIn campaigns have the highest ROI. Try A/B testing different messages to optimize conversions.
      </div>
    </div>
  );
}
