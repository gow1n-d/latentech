export function renderIndustries() {
  const industries = [
    ['🏥','Healthcare & Life Sciences','Architecting intelligent patient management ecosystems, clinical decision support systems, and regulatory-compliant health platforms.'],
    ['🏦','Finance & Banking','Engineering secure, high-performance financial platforms with real-time analytics, fraud detection, and automated compliance.'],
    ['🏭','Manufacturing & Industry','Developing smart factory solutions for Industry 4.0 transformation — from predictive maintenance to supply chain orchestration.'],
    ['🛒','Retail & E-Commerce','Building omnichannel commerce platforms with AI-driven personalization and inventory intelligence.'],
    ['🚚','Logistics & Supply Chain','Creating end-to-end supply chain visibility with predictive optimization and warehouse automation.'],
    ['🎓','Education & EdTech','Designing next-generation learning platforms and AI-powered educational tools that transform knowledge delivery.'],
    ['🏢','Real Estate & PropTech','Innovating property intelligence platforms and automated portfolio management solutions.'],
    ['⚡','Energy & Utilities','Formulating smart grid solutions and sustainable resource management platforms for the energy transition era.']
  ];
  return `
  <div class="page active" id="page-industries">
    <section class="hero" style="min-height:55vh; padding-top: 10rem;">
      <div class="hero-bg"></div>
      <div class="hero-content" style="max-width: 800px; margin: 0 auto; text-align: center;">
        <div class="hero-badge"><span class="dot"></span> Target Industries</div>
        <h1 style="font-size: clamp(2.5rem, 5vw, 4rem);">Ready to Transform<br/><span class="gradient-text">Any Industry</span></h1>
        <p style="margin: 0 auto 2rem;">Every sector has unique challenges. We are prepared to bring domain expertise and cutting-edge technology together to engineer solutions for your specific industry.</p>
      </div>
    </section>
    
    <section style="padding-top: 2rem; padding-bottom: 2rem;">
      <div class="grid-2 reveal" style="max-width: 900px; margin: 0 auto;">
        <div class="stat-item glass-card" style="padding: 2.5rem;">
          <div class="stat-number">0</div>
          <div class="stat-label">Industries Worked</div>
        </div>
        <div class="stat-item glass-card" style="padding: 2.5rem;">
          <div class="stat-number">0</div>
          <div class="stat-label">Problems Solved</div>
        </div>
      </div>
      <p style="text-align:center; color:var(--text3); font-size:0.85rem; margin-top:1.5rem;">* We are a newly launched agency ready for our first major enterprise partner.</p>
    </section>

    <section>
      <div class="section-center reveal">
        <div class="section-label">Our Capabilities</div>
        <h2 class="section-title">Industries We Are Ready To Serve</h2>
      </div>
      <div class="grid-2" style="gap:2.5rem; margin-top: 3rem;">
        ${industries.map(([icon,title,desc])=>`
          <div class="glass-card reveal">
            <div style="display:flex;align-items:center;gap:1.5rem;margin-bottom:1.2rem">
              <span style="font-size:2.5rem">${icon}</span>
              <h3 style="font-size:1.2rem;font-weight:800">${title}</h3>
            </div>
            <p style="font-size:0.95rem;color:var(--text2);line-height:1.7">${desc}</p>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="cta-section">
      <div class="cta-content reveal">
        <h2>Be Our First<br/><span class="gradient-text">Success Story</span></h2>
        <p>Tell us your challenge, and we'll engineer the perfect solution for your industry.</p>
        <a href="#consultation" data-nav="consultation" class="btn-primary">Start a Conversation →</a>
      </div>
    </section>
  </div>`;
}
