export function renderInnovation() {
  return `
  <div class="page active" id="page-innovation">
    <section class="hero" style="min-height:65vh">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <div class="hero-badge"><span class="dot"></span> Innovation & Vision</div>
        <h1>Pioneering the Future of<br/><span class="gradient-text">Enterprise Technology</span></h1>
        <p>We don't wait for the future — we build it. Our innovation labs are where tomorrow's breakthrough solutions are born today.</p>
      </div>
    </section>
    <section class="quote-section"><p class="quote-text reveal">"Every great enterprise begins with one bold decision."</p></section>
    <section>
      <div class="section-center reveal">
        <div class="section-label">Innovation Pillars</div>
        <h2 class="section-title">The Four Frontiers of<br/>Enterprise Intelligence</h2>
      </div>
      <div class="grid-4" style="margin-top:3rem">
        ${[['🧠','Artificial Intelligence','Deep learning architectures, natural language understanding, and computer vision systems that bring human-like intelligence to enterprise operations.'],
           ['📈','Predictive Analytics','Advanced forecasting engines that transform historical data into actionable foresight — enabling proactive decision-making at every level.'],
           ['🤖','Autonomous Systems','Self-optimizing platforms that learn, adapt, and improve continuously — reducing human intervention while increasing accuracy and efficiency.'],
           ['🔮','Quantum-Ready Architecture','Forward-engineered systems designed to seamlessly integrate quantum computing capabilities as the technology matures.']
        ].map(([icon,title,desc])=>`
          <div class="pillar-card reveal"><div class="pillar-icon">${icon}</div><h3>${title}</h3><p>${desc}</p></div>
        `).join('')}
      </div>
    </section>
    <section>
      <div class="section-center reveal">
        <div class="section-label">Vision 2030</div>
        <h2 class="section-title">Our Roadmap to the Future</h2>
        <p class="section-subtitle">A strategic vision for the next era of enterprise technology innovation.</p>
      </div>
      <div style="max-width:700px;margin:3rem auto">
        ${[['2025','Intelligent Automation Mastery','Achieving 95% autonomous workflow optimization across all client deployments.'],
           ['2026','Predictive Enterprise Platform','Launching our flagship predictive business intelligence platform for real-time strategic decision-making.'],
           ['2027','Global AI Research Centers','Opening dedicated AI research facilities in Silicon Valley, London, Singapore, and Tel Aviv.'],
           ['2028','Industry 5.0 Solutions','Pioneering human-machine collaboration platforms for next-generation industrial applications.'],
           ['2030','Quantum Enterprise Computing','Delivering the first enterprise-grade quantum-enhanced business solutions to market.']
        ].map(([year,title,desc])=>`
          <div style="display:flex;gap:2rem;margin-bottom:2.5rem;align-items:flex-start" class="reveal">
            <div style="flex-shrink:0;width:60px;color:var(--accent-cyan);font-weight:700;font-size:0.9rem;padding-top:0.2rem">${year}</div>
            <div style="flex-shrink:0;width:14px;height:14px;border-radius:50%;background:var(--accent-cyan);margin-top:0.3rem;box-shadow:0 0 15px var(--accent-cyan-glow)"></div>
            <div><h3 style="font-size:1.05rem;font-weight:700;margin-bottom:0.3rem">${title}</h3><p style="font-size:0.9rem;color:var(--text-secondary)">${desc}</p></div>
          </div>
        `).join('')}
      </div>
    </section>
    <section>
      <div class="section-center reveal">
        <div class="section-label">Thought Leadership</div>
        <h2 class="section-title">Insights from the Frontier</h2>
      </div>
      <div class="grid-3" style="margin-top:3rem">
        ${[['The Enterprise AI Imperative: Why 2026 Changes Everything','Explore how artificial intelligence is transitioning from competitive advantage to operational necessity for modern enterprises.','5 min read'],
           ['Beyond Automation: Building Truly Intelligent Organizations','Discover the paradigm shift from simple process automation to holistic organizational intelligence that drives exponential growth.','7 min read'],
           ['The Quantum Enterprise: Preparing for the Next Computing Revolution','A strategic guide for enterprise leaders on positioning their technology infrastructure for the quantum computing era.','6 min read']
        ].map(([title,desc,time])=>`
          <div class="glass-card reveal" style="cursor:pointer">
            <div style="font-size:0.75rem;color:var(--accent-cyan);font-weight:600;text-transform:uppercase;letter-spacing:1px;margin-bottom:1rem">${time}</div>
            <h3 style="font-size:1.1rem;font-weight:700;margin-bottom:0.8rem">${title}</h3>
            <p style="font-size:0.9rem;color:var(--text-secondary);line-height:1.7">${desc}</p>
          </div>
        `).join('')}
      </div>
    </section>
    <section class="cta-section">
      <div class="cta-content reveal">
        <h2>Partner with<br/><span class="gradient-text">Tomorrow's Technology</span></h2>
        <p>The future belongs to those who build it. Let's innovate together.</p>
        <a href="#consultation" data-nav="consultation" class="btn-primary">Explore Innovation Partnership →</a>
      </div>
    </section>
  </div>`;
}
