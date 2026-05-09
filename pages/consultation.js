export function renderConsultation() {
  return `
  <div class="page active" id="page-consultation">
    <section class="hero" style="min-height:60vh">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <div class="hero-badge"><span class="dot"></span> Strategic Consultation</div>
        <h1>Book Your<br/><span class="gradient-text">Strategic Consultation</span></h1>
        <p>Every great enterprise begins with one bold decision. Take the first step toward intelligent transformation with a personalized strategy session.</p>
      </div>
    </section>
    <section>
      <div class="grid-2" style="gap:4rem;align-items:start">
        <div class="reveal">
          <div class="section-label">What to Expect</div>
          <h2 class="section-title" style="font-size:1.8rem">Your Consultation Includes</h2>
          <div style="margin-top:2rem">
            ${[['🔍','Business Assessment','Deep-dive analysis of your current technology landscape and operational challenges.'],
               ['🎯','Strategic Roadmap','Custom technology roadmap aligned with your business objectives and growth trajectory.'],
               ['💡','Solution Architecture','High-level solution design with scalability, security, and ROI projections.'],
               ['📊','ROI Projection','Data-driven return on investment analysis to support your decision-making.']
            ].map(([icon,title,desc])=>`
              <div class="glass-card" style="margin-bottom:1rem;display:flex;gap:1.5rem;align-items:start">
                <span style="font-size:1.5rem;flex-shrink:0">${icon}</span>
                <div><h4 style="font-size:1rem;font-weight:600;margin-bottom:0.3rem">${title}</h4><p style="font-size:0.85rem;color:var(--text-secondary)">${desc}</p></div>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="reveal">
          <div class="glass-card" style="padding:2.5rem">
            <h3 style="font-size:1.3rem;font-weight:700;margin-bottom:0.5rem">Schedule Your Session</h3>
            <p style="font-size:0.9rem;color:var(--text-secondary);margin-bottom:2rem">Fill in the details below and our strategy team will reach out within 24 hours.</p>
            <form id="consultForm">
              <div class="form-group"><label>Full Name *</label><input type="text" placeholder="Your name" required/></div>
              <div class="form-group"><label>Work Email *</label><input type="email" placeholder="you@company.com" required/></div>
              <div class="form-group"><label>Company Name *</label><input type="text" placeholder="Your company" required/></div>
              <div class="form-group"><label>Job Title</label><input type="text" placeholder="Your role"/></div>
              <div class="form-group"><label>Industry</label>
                <select><option value="">Select your industry</option><option>Healthcare</option><option>Finance</option><option>Manufacturing</option><option>Retail</option><option>Logistics</option><option>Education</option><option>Real Estate</option><option>Energy</option><option>Other</option></select>
              </div>
              <div class="form-group"><label>Project Brief</label><textarea placeholder="Briefly describe your challenge or vision..."></textarea></div>
              <div class="form-group"><label>Preferred Date</label><input type="date"/></div>
              <button type="submit" class="btn-primary" style="width:100%;justify-content:center">Request Consultation →</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section class="quote-section"><p class="quote-text reveal">"The future favors the bold. Your transformation starts with a single conversation."</p></section>
  </div>`;
}
