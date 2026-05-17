export function renderHome() {
  return `
  <div class="page active" id="page-home">
    <section class="hero" style="padding-top: 10rem;">
      <div class="hero-bg"></div>
      <div class="hero-grid"></div>
      
      <div class="hero-container" style="display:grid; grid-template-columns: 1fr 1fr; gap:4rem; align-items:center; max-width: 1200px; margin: 0 auto; position:relative; z-index:2; width: 100%;">
        <div class="hero-text" style="text-align:left;">
          <div class="hero-badge"><span class="dot"></span> Next-Generation Enterprise Technology</div>
          <h1 style="text-align:left; margin-left:0; font-size: clamp(2.5rem, 6vw, 4.5rem);">Engineering<br/><span class="gradient-text">Tomorrow's Enterprise</span></h1>
          <p style="text-align:left; margin-left:0; margin-right:auto; max-width: 500px;">Where vision meets execution, transformation begins. We architect intelligent solutions that redefine what's possible for ambitious enterprises worldwide.</p>
          <div class="hero-buttons" style="justify-content:flex-start;">
            <a href="#consultation" data-nav="consultation" class="btn-primary">Begin Your Transformation →</a>
            <a href="#solutions" data-nav="solutions" class="btn-secondary">Explore Solutions</a>
          </div>
        </div>
        
        <div class="hero-image-wrapper reveal" style="display:flex; justify-content:center;">
          <img src="/hero_illustration.png" alt="Enterprise Technology" style="width: 100%; max-width: 500px; height: auto; border-radius: 20px; filter: drop-shadow(0 30px 60px rgba(5,150,105,0.15)); animation: floatImg 8s ease-in-out infinite;" />
        </div>
      </div>
      
      <style>
        @keyframes floatImg {
          0% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
          100% { transform: translateY(0px) rotate(-1deg); }
        }
        @media (max-width: 960px) {
          .hero-container { grid-template-columns: 1fr !important; text-align: center !important; }
          .hero-text { margin: 0 auto; text-align: center !important; }
          .hero-text h1, .hero-text p { text-align: center !important; margin-left: auto !important; margin-right: auto !important; }
          .hero-buttons { justify-content: center !important; }
          .hero-image-wrapper { margin-top: 2rem; }
        }
      </style>
    </section>

    <div class="marquee">
      <div class="marquee-track">
        ${Array(2).fill(['Enterprise Software','AI Systems','Process Automation','Digital Products','Workflow Platforms','Productivity Ecosystems','Industry Solutions','SaaS Platforms'].map(t=>`<span class="marquee-item">${t}</span>`).join('')).join('')}
      </div>
    </div>



    <section class="quote-section">
      <p class="quote-text reveal">"Innovation is not about predicting the future. It is about building it."</p>
    </section>

    <section>
      <div class="section-center reveal">
        <div class="section-label">Why LatenTech</div>
        <h2 class="section-title">The Enterprise Technology<br/>Partner of Choice</h2>
        <p class="section-subtitle">We don't just deliver technology — we engineer strategic advantage. Every solution is purpose-built for measurable business transformation.</p>
      </div>
      <div class="grid-3" style="margin-top:3rem">
        ${[['🎯','Strategic Precision','Every solution begins with deep business understanding, ensuring technology serves your strategic objectives with surgical precision.'],
           ['⚡','Intelligent Execution','From concept to deployment, our methodology ensures flawless execution at enterprise scale, on time, every time.'],
           ['🚀','Scalable Innovation','Solutions architected to grow with your ambition — from startup to enterprise, local to global, today to tomorrow.']
        ].map(([icon,title,desc])=>`
          <div class="glass-card reveal">
            <div style="font-size:2rem;margin-bottom:1rem">${icon}</div>
            <h3 style="font-family:var(--display);font-size:1.15rem;font-weight:700;margin-bottom:0.8rem">${title}</h3>
            <p style="font-size:0.9rem;color:var(--text2);line-height:1.7">${desc}</p>
          </div>
        `).join('')}
      </div>
    </section>

    <section>
      <div class="section-center reveal">
        <div class="section-label">Core Capabilities</div>
        <h2 class="section-title">Solutions Engineered<br/>for Enterprise Scale</h2>
      </div>
      <div class="grid-4" style="margin-top:3rem">
        ${[['🏗️','Custom Enterprise Software','Purpose-built digital architectures that transform operational complexity into competitive advantage.'],
          ['🤖','AI-Powered Systems','Intelligent systems that learn, adapt, and optimize — turning data into decisive business intelligence.'],
          ['⚙️','Process Automation','Eliminate friction, reduce costs, and accelerate throughput with intelligent workflow automation.'],
          ['🌐','Digital Transformation','End-to-end transformation platforms that modernize every facet of enterprise operations.'],
          ['📱','Custom Digital Products','Beautiful, powerful digital products designed for impact — from concept to market dominance.'],
          ['📊','Productivity Ecosystems','Unified platforms that amplify team performance and drive organizational excellence.'],
          ['🏭','Industry Solutions','Domain-specific intelligence tailored to the unique challenges of your industry vertical.'],
          ['☁️','Scalable SaaS Platforms','Cloud-native platforms built for millions of users and billions of transactions.']
        ].map(([icon,title,desc])=>`
          <div class="capability-card reveal">
            <div class="capability-icon">${icon}</div>
            <h3>${title}</h3>
            <p>${desc}</p>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="quote-section">
      <p class="quote-text reveal">"The businesses that adapt fastest define tomorrow."</p>
    </section>

    <section>
      <div class="section-center reveal">
        <div class="section-label">Industry Solutions</div>
        <h2 class="section-title">Transforming Industries<br/>Through Intelligence</h2>
      </div>
      <div class="grid-4" style="margin-top:3rem">
        ${[['🏥','Healthcare','Intelligent patient ecosystems and clinical optimization.'],
          ['🏦','Finance','Secure financial systems with predictive intelligence.'],
          ['🏭','Manufacturing','Smart factory solutions driving Industry 4.0.'],
          ['🛒','Retail','AI-driven personalization and omnichannel experiences.'],
          ['🚚','Logistics','Supply chain visibility and predictive optimization.'],
          ['🎓','Education','Next-gen learning platforms and management.'],
          ['🏢','Real Estate','Property intelligence and portfolio management.'],
          ['⚡','Energy','Smart grid and sustainable energy solutions.']
        ].map(([icon,title,desc])=>`
          <div class="industry-card reveal">
            <div class="industry-icon">${icon}</div>
            <h3>${title}</h3>
            <p>${desc}</p>
          </div>
        `).join('')}
      </div>
    </section>



    <section class="cta-section">
      <div class="cta-content reveal">
        <h2>Ready to Engineer<br/><span class="gradient-text">Your Future?</span></h2>
        <p>Every great enterprise begins with one bold decision. Let's build something extraordinary together.</p>
        <a href="#consultation" data-nav="consultation" class="btn-primary">Schedule Strategic Consultation →</a>
      </div>
    </section>
  </div>`;
}
