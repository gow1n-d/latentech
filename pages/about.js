export function renderAbout() {
  return `
  <div class="page active" id="page-about">
    <section class="hero" style="padding-top: 10rem; padding-bottom: 6rem;">
      <div class="hero-bg"></div>
      <div class="hero-container" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 350px), 1fr)); gap:4rem; align-items:center; max-width: 1200px; margin: 0 auto; position:relative; z-index:2; width: 100%;">
        <div class="hero-text" style="text-align:left;">
          <div class="hero-badge"><span class="dot"></span> Our Story</div>
          <h1 style="text-align:left; margin-left:0; font-size: clamp(2.5rem, 6vw, 4.5rem);">Born From a Vision to<br/><span class="gradient-text">Redefine Enterprise</span></h1>
          <p style="text-align:left; margin-left:0; max-width: 500px;">LatenTech was founded on a singular belief: that technology, when intelligently applied, can transform any business into an industry leader.</p>
        </div>
        <div class="hero-image-wrapper reveal" style="display:flex; justify-content:center;">
          <img src="/about_tech.png" alt="Enterprise Technology" style="width: 100%; max-width: 500px; height: auto; border-radius: 20px; filter: drop-shadow(0 30px 60px rgba(5,150,105,0.15));" />
        </div>
      </div>
    </section>
    <section class="quote-section"><p class="quote-text reveal">"Where vision meets execution, transformation begins."</p></section>
    <section>
      <div class="grid-2" style="align-items:center;gap:4rem">
        <div class="reveal">
          <div class="section-label">Our Mission</div>
          <h2 class="section-title">Empowering Enterprises Through Intelligent Innovation</h2>
          <p class="section-subtitle">We exist to bridge the gap between ambition and achievement. Every enterprise deserves technology that doesn't just support operations — it accelerates them. Our mission is to design, engineer, and deliver solutions that make businesses unstoppable.</p>
        </div>
        <div class="glass-card reveal" style="padding:3rem">
          <div class="section-label">Our Vision</div>
          <h3 style="font-size:1.3rem;font-weight:700;margin-bottom:1rem">A World Where Every Enterprise Operates at Its Full Potential</h3>
          <p style="color:var(--text-secondary);line-height:1.8">We envision a future where intelligent technology eliminates inefficiency, where data drives every decision, and where every business — regardless of size — has access to enterprise-grade innovation.</p>
        </div>
      </div>
    </section>
    <section>
      <div class="grid-2" style="align-items:center;gap:4rem">
        <div class="reveal">
          <div class="section-label">Leadership</div>
          <h2 class="section-title">Meet Our Founder</h2>
          <p class="section-subtitle">Driven by a passion for innovation and a vision to illuminate the future of technology.</p>
        </div>
        <div class="glass-card reveal" style="padding:2.5rem;text-align:center">
          <div style="width:90px;height:90px;border-radius:50%;background:linear-gradient(135deg,var(--green),var(--gold));display:flex;align-items:center;justify-content:center;margin:0 auto 1.5rem;font-size:2rem;font-weight:800;color:#0D0D0D">G</div>
          <h3 style="font-family:var(--display);font-size:1.4rem;font-weight:700;margin-bottom:0.3rem">Gowind B M</h3>
          <p style="color:var(--green);font-size:0.85rem;font-weight:600;text-transform:uppercase;letter-spacing:2px;margin-bottom:1rem">Founder & CEO</p>
          <p style="color:var(--text2);font-size:0.9rem;line-height:1.8">Visionary technologist and entrepreneur committed to empowering enterprises through intelligent innovation. Leading LatenTech to illuminate the future of business technology.</p>
        </div>
      </div>
    </section>
    <section>
      <div class="section-center reveal">
        <div class="section-label">Our Values</div>
        <h2 class="section-title">The Principles That Guide Us</h2>
      </div>
      <div class="grid-4" style="margin-top:3rem">
        ${[['💡','Innovation','We challenge convention and pioneer solutions that redefine industry standards.'],
           ['🏆','Excellence','Mediocrity is never an option. We pursue perfection in every line of logic and every strategic decision.'],
           ['🤝','Integrity','Transparency, honesty, and ethical practice form the foundation of every relationship we build.'],
           ['🌍','Impact','We measure success not by deliverables, but by the transformative impact we create for our clients.']
        ].map(([icon,title,desc])=>`
          <div class="glass-card value-card reveal"><div class="value-icon">${icon}</div><h3>${title}</h3><p>${desc}</p></div>
        `).join('')}
      </div>
    </section>

    <section class="quote-section"><p class="quote-text reveal">"Progress belongs to those who engineer possibility."</p></section>
    <section class="cta-section">
      <div class="cta-content reveal">
        <h2>Want to Be Part of<br/><span class="gradient-text">Our Story?</span></h2>
        <p>Partner with us and write the next chapter of enterprise innovation together.</p>
        <a href="#consultation" data-nav="consultation" class="btn-primary">Start a Conversation →</a>
      </div>
    </section>
  </div>`;
}
