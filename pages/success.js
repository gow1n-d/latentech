export function renderSuccess() {
  return `
  <div class="page active" id="page-success">
    <section class="hero" style="min-height:65vh">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <div class="hero-badge"><span class="dot"></span> Success Stories</div>
        <h1>Results That Speak<br/><span class="gradient-text">Louder Than Promises</span></h1>
        <p>Every project we undertake creates measurable impact. These are the stories of enterprises transformed through intelligent technology.</p>
      </div>
    </section>
    <div class="stats-bar">
      <div class="stat-item reveal"><div class="stat-number">500+</div><div class="stat-label">Projects Delivered</div></div>
      <div class="stat-item reveal"><div class="stat-number">98.7%</div><div class="stat-label">Client Satisfaction</div></div>
      <div class="stat-item reveal"><div class="stat-number">$4.2B+</div><div class="stat-label">Business Value</div></div>
      <div class="stat-item reveal"><div class="stat-number">3.2x</div><div class="stat-label">Avg ROI</div></div>
    </div>
    <section>
      <div class="grid-3" style="gap:2rem">
        ${[
          ['Healthcare','Global Healthcare Network','A multinational healthcare provider needed to unify patient data across 200+ facilities while maintaining strict regulatory compliance.','340%','Efficiency Increase','12 months','Deployment Time','$180M','Annual Savings','Unified patient data ecosystem serving 2M+ patients across 47 countries with zero compliance violations.'],
          ['Finance','Fortune 500 Financial Institution','A leading financial institution required real-time fraud detection and automated compliance across 15 global markets.','$2.4B','Optimized Operations','99.99%','System Uptime','85%','Fraud Reduction','Real-time transaction monitoring processing 50M+ daily transactions with AI-powered anomaly detection.'],
          ['Logistics','International Logistics Corporation','A global logistics company needed end-to-end supply chain visibility and predictive route optimization across 30 countries.','99.7%','Delivery Accuracy','67%','Cost Reduction','3.8x','ROI Achieved','Intelligent supply chain platform orchestrating 100K+ daily shipments with predictive delay prevention.']
        ].map(([tag,title,challenge,m1v,m1l,m2v,m2l,m3v,m3l,result])=>`
          <div class="case-card reveal">
            <div class="case-card-header">
              <span class="case-tag">${tag}</span>
              <h3 style="font-size:1.2rem;font-weight:700">${title}</h3>
              <p style="font-size:0.85rem;color:var(--text-secondary);margin-top:0.5rem">${challenge}</p>
            </div>
            <div class="case-card-body">
              <div class="case-metric"><span class="case-metric-value">${m1v}</span><span class="case-metric-label">${m1l}</span></div>
              <div class="case-metric"><span class="case-metric-value">${m2v}</span><span class="case-metric-label">${m2l}</span></div>
              <div class="case-metric"><span class="case-metric-value">${m3v}</span><span class="case-metric-label">${m3l}</span></div>
              <p style="font-size:0.85rem;color:var(--text-secondary);margin-top:1rem;padding-top:1rem;border-top:1px solid var(--border-glass)">${result}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
    <section class="quote-section"><p class="quote-text reveal">"Tomorrow's leaders are built by today's technology decisions."</p></section>
    <section class="cta-section">
      <div class="cta-content reveal">
        <h2>Your Success Story<br/><span class="gradient-text">Starts Here</span></h2>
        <p>Join 500+ enterprises that chose transformation over stagnation.</p>
        <a href="#consultation" data-nav="consultation" class="btn-primary">Write Your Story →</a>
      </div>
    </section>
  </div>`;
}
