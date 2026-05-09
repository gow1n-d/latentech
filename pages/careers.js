export function renderCareers() {
  return `
  <div class="page active" id="page-careers">
    <section class="hero" style="min-height:65vh">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <div class="hero-badge"><span class="dot"></span> Join Our Team</div>
        <h1>Shape the Future<br/><span class="gradient-text">with LaternTech</span></h1>
        <p>We're building the most talented team in enterprise technology. If you're driven by innovation and fueled by ambition, you belong here.</p>
      </div>
    </section>
    <section class="quote-section"><p class="quote-text reveal">"The greatest innovation comes from the greatest minds working toward the greatest purpose."</p></section>
    <section>
      <div class="section-center reveal">
        <div class="section-label">Why Join Us</div>
        <h2 class="section-title">More Than a Career.<br/>A Mission.</h2>
      </div>
      <div class="grid-3" style="margin-top:3rem">
        ${[['🚀','Innovation First','Work on cutting-edge projects that push the boundaries of what technology can achieve for enterprises.'],
           ['🌍','Global Impact','Your work will transform businesses across 47 countries and impact millions of end users.'],
           ['📈','Growth Without Limits','Continuous learning, mentorship from industry veterans, and a clear path to leadership.']
        ].map(([icon,title,desc])=>`
          <div class="glass-card reveal" style="text-align:center"><div style="font-size:2.5rem;margin-bottom:1rem">${icon}</div><h3 style="font-size:1.1rem;font-weight:700;margin-bottom:0.8rem">${title}</h3><p style="font-size:0.9rem;color:var(--text-secondary)">${desc}</p></div>
        `).join('')}
      </div>
    </section>
    <section>
      <div class="section-center reveal">
        <div class="section-label">Benefits</div>
        <h2 class="section-title">We Take Care of Our People</h2>
      </div>
      <div class="grid-3" style="margin-top:3rem">
        ${[['🏥','Premium Healthcare','Comprehensive health, dental, and vision coverage for you and your family.'],
           ['🏠','Remote Flexibility','Work from anywhere with our hybrid-remote model designed for peak productivity.'],
           ['📚','Learning Budget','Annual learning stipend for courses, conferences, and certifications.'],
           ['📈','Equity & Ownership','Stock options that let you share in the company\'s success and growth.'],
           ['🧘','Wellness Programs','Mental health support, gym memberships, and wellness retreats.'],
           ['✈️','Global Opportunities','Travel and relocation opportunities across our international offices.']
        ].map(([icon,title,desc])=>`
          <div class="benefit-card reveal"><div class="benefit-icon">${icon}</div><h4>${title}</h4><p style="font-size:0.8rem;color:var(--text-secondary);margin-top:0.3rem">${desc}</p></div>
        `).join('')}
      </div>
    </section>
    <section>
      <div class="section-center reveal">
        <div class="section-label">Open Positions</div>
        <h2 class="section-title">Find Your Role</h2>
      </div>
      <div style="max-width:800px;margin:3rem auto">
        ${[['Senior AI Engineer','Engineering · Remote','Full-time'],
           ['Enterprise Solutions Architect','Architecture · New York','Full-time'],
           ['Senior Product Designer','Design · London','Full-time'],
           ['Strategic Solutions Consultant','Consulting · Singapore','Full-time'],
           ['DevOps & Infrastructure Lead','Engineering · Remote','Full-time'],
           ['Data Science Lead','Data & AI · Dubai','Full-time'],
           ['Senior Full-Stack Engineer','Engineering · Remote','Full-time']
        ].map(([title,location,type])=>`
          <div class="job-card reveal">
            <div><div class="job-title">${title}</div><div class="job-meta"><span>📍 ${location}</span><span>⏰ ${type}</span></div></div>
            <button class="job-apply">Apply Now</button>
          </div>
        `).join('')}
      </div>
    </section>
    <section class="cta-section">
      <div class="cta-content reveal">
        <h2>Don't See Your Role?<br/><span class="gradient-text">Reach Out Anyway.</span></h2>
        <p>We're always looking for exceptional talent. Send us your story.</p>
        <a href="#contact" data-nav="contact" class="btn-primary">Get in Touch →</a>
      </div>
    </section>
  </div>`;
}
