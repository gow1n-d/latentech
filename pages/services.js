export function renderServices() {
  const services = [
    ['🤖', 'AI Solutions', 'Intelligent AI-powered systems that learn, adapt, and drive smarter business decisions at scale.'],
    ['🧠', 'AI Agent Development', 'Autonomous AI agents that handle complex workflows, customer interactions, and decision-making processes.'],
    ['⚙️', 'Business Automation', 'Streamline operations, eliminate manual tasks, and accelerate throughput with intelligent automation.'],
    ['🌐', 'Web Development', 'High-performance, responsive web applications built with cutting-edge frameworks and best practices.'],
    ['📱', 'Mobile App Development', 'Native and cross-platform mobile applications designed for seamless user experiences across all devices.'],
    ['💻', 'Custom Software Development', 'Purpose-built software solutions engineered to solve your unique business challenges.'],
    ['☁️', 'SaaS Product Development', 'Scalable cloud-native SaaS platforms built for millions of users and rapid growth.'],
    ['🎨', 'UI/UX Design', 'Beautiful, intuitive interfaces crafted through research-driven design that users love.'],
    ['🔮', 'Cloud Solutions', 'Enterprise cloud architecture, migration, and optimization for maximum performance and cost efficiency.'],
    ['🔗', 'API Development', 'Robust, secure, and well-documented APIs that power seamless integrations and data flow.'],
    ['🗄️', 'Database Management', 'Optimized database design, administration, and scaling for high-availability data systems.'],
    ['🔒', 'Authentication & Security', 'Enterprise-grade security solutions including SSO, MFA, encryption, and compliance frameworks.'],
    ['👁️', 'Computer Vision Solutions', 'Advanced image and video analysis powered by deep learning for automated visual intelligence.'],
    ['📄', 'OCR & Document Processing', 'Intelligent document extraction, classification, and processing that eliminates manual data entry.'],
    ['🏢', 'ERP/CRM Development', 'Comprehensive enterprise resource planning and customer relationship management systems.'],
    ['💰', 'Billing & Management Software', 'Automated billing, invoicing, and business management platforms tailored to your workflow.'],
    ['🚀', 'Startup MVP Development', 'Rapid MVP development to validate your idea and get to market fast with a polished product.'],
    ['📋', 'Technical Consulting', 'Expert guidance on architecture, technology stack, scalability, and digital strategy.'],
    ['✨', 'Digital Transformation', 'End-to-end modernization of your business processes, systems, and customer experiences.'],
  ];

  return `
  <div class="page active" id="page-services">
    <section class="hero" style="min-height:65vh">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <div class="hero-badge"><span class="dot"></span> What We Do</div>
        <h1>Our <span class="gradient-text">Services</span></h1>
        <p>From AI-powered intelligence to full-stack development — we deliver end-to-end technology solutions that illuminate your path to success.</p>
      </div>
    </section>

    <section>
      <div class="section-center reveal">
        <div class="section-label">Our Expertise</div>
        <h2 class="section-title">Comprehensive Technology<br/>Solutions Suite</h2>
        <p class="section-subtitle">Every service is engineered with precision, powered by innovation, and designed to transform your business.</p>
      </div>
      <div class="grid-4" style="margin-top:3rem">
        ${services.map(([icon, title, desc]) => `
          <div class="capability-card reveal">
            <div class="capability-icon">${icon}</div>
            <h3>${title}</h3>
            <p>${desc}</p>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="quote-section">
      <p class="quote-text reveal">"We don't just build technology. We light the way."</p>
    </section>

    <section class="cta-section">
      <div class="cta-content reveal">
        <h2>Need a Custom<br/><span class="gradient-text">Solution?</span></h2>
        <p>Tell us your challenge and we'll illuminate the path to your perfect technology solution.</p>
        <a href="#consultation" data-nav="consultation" class="btn-primary">Book a Consultation →</a>
      </div>
    </section>
  </div>`;
}
