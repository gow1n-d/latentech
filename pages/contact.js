export function renderContact() {
  return `
  <div class="page active" id="page-contact">
    <section class="hero" style="min-height:60vh">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <div class="hero-badge"><span class="dot"></span> Get in Touch</div>
        <h1>Let's Engineer<br/><span class="gradient-text">Your Future Together</span></h1>
        <p>Whether you have a question, a challenge, or a vision — we're ready to listen and build with you.</p>
      </div>
    </section>
    <section>
      <div class="grid-2" style="gap:4rem;align-items:start">
        <div class="reveal">
          <div class="section-label">Contact Form</div>
          <h2 class="section-title" style="font-size:1.8rem">Send Us a Message</h2>
          <form id="contactForm" style="margin-top:2rem">
            <input type="hidden" name="access_key" value="ffa1d6ed-8d85-4488-b38e-cdbcbef145f4"/>
            <input type="hidden" name="subject" value="New Contact Form Submission - LaternTech"/>
            <input type="hidden" name="from_name" value="LaternTech Website"/>
            <div class="grid-2">
              <div class="form-group"><label>Full Name</label><input type="text" name="name" placeholder="Your name" required/></div>
              <div class="form-group"><label>Email Address</label><input type="email" name="email" placeholder="you@company.com" required/></div>
            </div>
            <div class="grid-2">
              <div class="form-group"><label>Company</label><input type="text" name="company" placeholder="Your company"/></div>
              <div class="form-group"><label>Industry</label><input type="text" name="industry" placeholder="Your industry"/></div>
            </div>
            <div class="form-group"><label>Message</label><textarea name="message" placeholder="Tell us about your project or challenge..." required></textarea></div>
            <button type="submit" class="btn-primary" style="width:100%;justify-content:center">Send Message →</button>
          </form>
        </div>
        <div class="reveal">
          <div class="section-label">Direct Contact</div>
          <h2 class="section-title" style="font-size:1.8rem">Reach Us Directly</h2>
          <div style="margin-top:2rem">
            <div class="glass-card" style="margin-bottom:1.5rem">
              <h4 style="font-size:0.95rem;font-weight:600;margin-bottom:0.5rem">📧 Email</h4>
              <p style="color:var(--green)">laterntech@gmail.com</p>
            </div>
            <div class="glass-card" style="margin-bottom:1.5rem">
              <h4 style="font-size:0.95rem;font-weight:600;margin-bottom:0.5rem">📞 Phone</h4>
              <p style="color:var(--green)">+91 9629088585</p>
            </div>
            <div class="glass-card" style="margin-bottom:1.5rem">
              <h4 style="font-size:0.95rem;font-weight:600;margin-bottom:0.5rem">💼 LinkedIn</h4>
              <p><a href="https://www.linkedin.com/in/laterntech-undefined-4121a840a" onclick="window.location.href=this.href; return false;" style="color:var(--green); text-decoration:none;">Connect with LaternTech</a></p>
            </div>
            <div class="glass-card" style="margin-bottom:1.5rem">
              <h4 style="font-size:0.95rem;font-weight:600;margin-bottom:0.5rem">🐦 Twitter / X</h4>
              <p><a href="https://x.com/laterntech76944" onclick="window.location.href=this.href; return false;" style="color:var(--green); text-decoration:none;">Follow @laterntech76944</a></p>
            </div>
            <div class="glass-card">
              <h4 style="font-size:0.95rem;font-weight:600;margin-bottom:0.5rem">⏰ Business Hours</h4>
              <p style="color:var(--text2)">24/7 Global Support · Enterprise clients receive dedicated account management</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>`;
}
