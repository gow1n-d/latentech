export function renderIndustries() {
  const industries = [
    ['🏥','Healthcare & Life Sciences','Intelligent patient management ecosystems, clinical decision support systems, and regulatory-compliant health platforms that improve outcomes while reducing operational costs.','340% efficiency increase','HIPAA-compliant architectures'],
    ['🏦','Finance & Banking','Secure, high-performance financial platforms with real-time analytics, fraud detection, and automated compliance — engineered for the speed and precision modern finance demands.','$2.4B optimized operations','Real-time risk intelligence'],
    ['🏭','Manufacturing & Industry','Smart factory solutions driving Industry 4.0 transformation — from predictive maintenance and quality assurance to supply chain orchestration and digital twin technologies.','99.7% accuracy achieved','Predictive maintenance systems'],
    ['🛒','Retail & E-Commerce','Omnichannel commerce platforms with AI-driven personalization, inventory intelligence, and customer experience optimization that convert browsers into loyal advocates.','185% revenue uplift','AI-powered personalization'],
    ['🚚','Logistics & Supply Chain','End-to-end supply chain visibility with predictive optimization, route intelligence, and warehouse automation that turn logistical complexity into competitive advantage.','67% cost reduction','Predictive route optimization'],
    ['🎓','Education & EdTech','Next-generation learning platforms, institutional management systems, and AI-powered educational tools that transform how knowledge is delivered and absorbed.','2M+ students served','Adaptive learning engines'],
    ['🏢','Real Estate & PropTech','Property intelligence platforms, automated portfolio management, and smart building solutions that maximize asset value and tenant satisfaction.','$8B assets managed','Smart building integration'],
    ['⚡','Energy & Utilities','Smart grid solutions, renewable energy optimization, and sustainable resource management platforms for the energy transition era.','40% efficiency gains','Sustainable energy solutions']
  ];
  return `
  <div class="page active" id="page-industries">
    <section class="hero" style="min-height:65vh">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <div class="hero-badge"><span class="dot"></span> Industries We Serve</div>
        <h1>Transforming Industries Through<br/><span class="gradient-text">Intelligent Innovation</span></h1>
        <p>Every industry has unique challenges. We bring domain expertise and cutting-edge technology together to create solutions that redefine what's possible.</p>
      </div>
    </section>
    <section>
      <div class="grid-2" style="gap:2rem">
        ${industries.map(([icon,title,desc,metric,tag])=>`
          <div class="glass-card reveal" style="position:relative;overflow:hidden">
            <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.2rem">
              <span style="font-size:2rem">${icon}</span>
              <h3 style="font-size:1.2rem;font-weight:700">${title}</h3>
            </div>
            <p style="font-size:0.9rem;color:var(--text-secondary);line-height:1.7;margin-bottom:1.2rem">${desc}</p>
            <div style="display:flex;gap:1rem;flex-wrap:wrap">
              <span class="case-tag">${metric}</span>
              <span class="case-tag" style="background:var(--accent-violet-glow);color:#b388ff">${tag}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
    <section class="cta-section">
      <div class="cta-content reveal">
        <h2>Don't See Your Industry?<br/><span class="gradient-text">We Adapt.</span></h2>
        <p>Our expertise transcends sectors. Tell us your challenge, and we'll engineer the solution.</p>
        <a href="#consultation" data-nav="consultation" class="btn-primary">Explore Industry Solutions →</a>
      </div>
    </section>
  </div>`;
}
