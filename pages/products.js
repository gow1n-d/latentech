export function renderProducts() {
  return `
  <div class="page active" id="page-products">
    <section class="hero" style="min-height:65vh">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <div class="hero-badge"><span class="dot"></span> Our Products</div>
        <h1>Intelligent Products<br/><span class="gradient-text">Built for Impact</span></h1>
        <p>Discover our suite of AI-powered digital products designed to solve real business challenges and drive measurable outcomes.</p>
      </div>
    </section>
    <section class="quote-section">
      <p class="quote-text reveal">"Great products are born where bold vision meets intelligent engineering."</p>
    </section>
    <section>
      <div class="section-center reveal">
        <div class="section-label">Product Suite</div>
        <h2 class="section-title">Coming Soon</h2>
        <p class="section-subtitle">We are crafting next-generation AI-powered digital products that will redefine how enterprises operate. Stay tuned for groundbreaking launches.</p>
      </div>
      <div class="grid-3" style="margin-top:3rem">
        ${[['🤖','AI-Powered Solutions','Intelligent products that learn, adapt, and optimize your business operations autonomously.'],
           ['📊','Data Intelligence','Transform raw data into strategic insights with our upcoming analytics platforms.'],
           ['⚡','Smart Automation','End-to-end automation products that eliminate friction and accelerate growth.']
        ].map(([icon,title,desc])=>`
          <div class="glass-card reveal" style="text-align:center;border-style:dashed">
            <div style="font-size:2.5rem;margin-bottom:1.2rem">${icon}</div>
            <h3 style="font-family:var(--display);font-size:1.15rem;font-weight:700;margin-bottom:0.8rem">${title}</h3>
            <p style="font-size:0.9rem;color:var(--text2);line-height:1.7">${desc}</p>
            <div style="margin-top:1.5rem;font-size:0.75rem;color:var(--green);font-weight:700;text-transform:uppercase;letter-spacing:2px">Coming Soon</div>
          </div>
        `).join('')}
      </div>
    </section>
    <section class="cta-section">
      <div class="cta-content reveal">
        <h2>Want Early Access to<br/><span class="gradient-text">Our Products?</span></h2>
        <p>Be the first to experience our AI-powered solutions. Get in touch for exclusive early access.</p>
        <a href="#consultation" data-nav="consultation" class="btn-primary">Request Early Access →</a>
      </div>
    </section>
  </div>`;
}
