export function renderSolutions() {
  const solutions = [
    ['01','🏗️','Custom Enterprise Software','Bespoke digital architectures engineered to solve your most complex operational challenges. We design systems that become your competitive moat — scalable, secure, and built exclusively for your business DNA.'],
    ['02','🤖','AI-Powered Intelligent Systems','Harness the full power of artificial intelligence with systems that learn, predict, and optimize. From natural language processing to computer vision, we build AI that delivers measurable business outcomes.'],
    ['03','⚙️','Business Process Automation','Transform manual workflows into intelligent automated ecosystems. Our automation solutions eliminate friction, reduce human error, and free your teams to focus on high-value strategic work.'],
    ['04','🔄','Workflow Transformation Platforms','Reimagine how work gets done across your organization. We build unified platforms that orchestrate complex business processes with elegant simplicity and enterprise-grade reliability.'],
    ['05','📱','Custom Digital Products','From ideation to market dominance — we craft digital products that users love and businesses depend on. Beautiful interfaces powered by intelligent architectures.'],
    ['06','📊','Enterprise Productivity Ecosystems','Unified productivity platforms that amplify team performance, streamline collaboration, and drive organizational excellence across every department and geography.'],
    ['07','🏭','Industry-Specific Smart Solutions','Domain expertise meets cutting-edge technology. We build solutions tailored to the unique regulatory, operational, and competitive demands of your specific industry.'],
    ['08','☁️','Scalable SaaS-Grade Platforms','Cloud-native platforms engineered for millions of users and billions of transactions. Built for today\'s demands and tomorrow\'s ambitions.']
  ];
  return `
  <div class="page active" id="page-solutions">
    <section class="hero" style="padding-top: 10rem; padding-bottom: 6rem;">
      <div class="hero-bg"></div>
      <div class="hero-container" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap:4rem; align-items:center; max-width: 1200px; margin: 0 auto; position:relative; z-index:2; width: 100%;">
        <div class="hero-text" style="text-align:left;">
          <div class="hero-badge"><span class="dot"></span> Our Solutions</div>
          <h1 style="text-align:left; margin-left:0; font-size: clamp(2.5rem, 5.5vw, 4rem);">Solutions Engineered for<br/><span class="gradient-text">Enterprise Scale</span></h1>
          <p style="text-align:left; margin-left:0; max-width: 500px;">Technology is powerful. Intelligent execution makes it unstoppable. Discover how our solutions transform ambitious enterprises into industry leaders.</p>
        </div>
        <div class="hero-image-wrapper reveal" style="display:flex; justify-content:center;">
          <img src="/solutions_tech.png" alt="Enterprise Solutions" style="width: 100%; max-width: 500px; height: auto; border-radius: 20px; filter: drop-shadow(0 30px 60px rgba(217,119,6,0.15));" />
        </div>
      </div>
    </section>
    <section class="quote-section"><p class="quote-text reveal">"Complex challenges create extraordinary innovation."</p></section>
    <section>
      <div class="grid-2" style="gap:2rem">
        ${solutions.map(([num,icon,title,desc])=>`
          <div class="capability-card solution-card reveal">
            <span class="solution-number">${num}</span>
            <div class="capability-icon">${icon}</div>
            <h3>${title}</h3>
            <p>${desc}</p>
          </div>
        `).join('')}
      </div>
    </section>
    <section class="quote-section"><p class="quote-text reveal">"Technology is powerful. Intelligent execution makes it unstoppable."</p></section>
    <section class="cta-section">
      <div class="cta-content reveal">
        <h2>Find the Right Solution<br/><span class="gradient-text">for Your Enterprise</span></h2>
        <p>Let our strategists map the perfect technology roadmap for your business objectives.</p>
        <a href="#consultation" data-nav="consultation" class="btn-primary">Discuss Your Requirements →</a>
      </div>
    </section>
  </div>`;
}
