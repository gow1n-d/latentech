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
        <div class="section-label">Coming Soon</div>
        <h2 class="section-title">Social Automation</h2>
        <p class="section-subtitle" style="max-width: 800px;">A highly user-friendly tool that enables anyone to automate their social media simply by connecting their accounts. Built primarily for business professionals and product influencers, it makes managing and scaling your online presence effortless.</p>
      </div>
      <div class="grid-3" style="margin-top:3rem">
        ${[['🔗','Seamless Integration','Easily link and control all your social media profiles just by connecting your accounts and IDs.'],
           ['⏱️','Effortless Automation','Plan, schedule, and automate your posts to maintain a consistent online presence without the hassle.'],
           ['📈','Built for Influencers','Designed specifically for business professionals and product influencers looking to scale their reach.']
        ].map(([icon,title,desc])=>`
          <div class="glass-card reveal" style="text-align:center;">
            <div style="font-size:2.5rem;margin-bottom:1.2rem">${icon}</div>
            <h3 style="font-family:var(--display);font-size:1.15rem;font-weight:700;margin-bottom:0.8rem">${title}</h3>
            <p style="font-size:0.9rem;color:var(--text2);line-height:1.7">${desc}</p>
          </div>
        `).join('')}
      </div>
    </section>
    <section class="cta-section">
      <div class="cta-content reveal">
        <h2>Want Early Access to<br/><span class="gradient-text">Social Automation?</span></h2>
        <p>Be among the first to take control of your social media presence and scale your influence. Get in touch for exclusive early access.</p>
        <a href="#consultation" data-nav="consultation" class="btn-primary">Request Early Access →</a>
      </div>
    </section>
  </div>`;
}
