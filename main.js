import './style.css';
import { renderHome } from './pages/home.js';
import { renderAbout } from './pages/about.js';
import { renderSolutions } from './pages/solutions.js';
import { renderServices } from './pages/services.js';
import { renderIndustries } from './pages/industries.js';
import { renderProducts } from './pages/products.js';
import { renderInnovation } from './pages/innovation.js';
import { renderContact } from './pages/contact.js';
import { renderConsultation } from './pages/consultation.js';

const pages = {
  home: renderHome,
  about: renderAbout,
  solutions: renderSolutions,
  services: renderServices,
  industries: renderIndustries,
  products: renderProducts,
  innovation: renderInnovation,
  contact: renderContact,
  consultation: renderConsultation,
};

const app = document.getElementById('app');
let currentPage = 'home';

function navigate(page) {
  if (!pages[page]) return;
  currentPage = page;
  // Fade out
  app.style.opacity = '0';
  app.style.transform = 'translateY(20px)';
  setTimeout(() => {
    app.innerHTML = pages[page]();
    window.scrollTo({ top: 0 });
    // Fade in
    requestAnimationFrame(() => {
      app.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      app.style.opacity = '1';
      app.style.transform = 'translateY(0)';
    });
    updateActiveNav(page);
    initRevealAnimations();
    initForms();
    animateCounters();
  }, 300);
}

function updateActiveNav(page) {
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.nav === page);
  });
}

document.addEventListener('click', (e) => {
  const link = e.target.closest('[data-nav]');
  if (link) {
    e.preventDefault();
    navigate(link.dataset.nav);
    document.getElementById('navLinks').classList.remove('open');
  }
});

document.getElementById('navToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

// Scroll reveal with stagger
function initRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter(e => e.isIntersecting);
    visible.forEach((entry, i) => {
      setTimeout(() => {
        entry.target.classList.add('visible');
        entry.target.style.transitionDelay = '0s';
      }, i * 100);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Floating particles
function createParticles() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  hero.querySelectorAll('.particle').forEach(p => p.remove());
  const colors = ['var(--green)', 'var(--gold)', 'var(--coral)'];
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 3 + 1;
    p.style.cssText = `
      width:${size}px;height:${size}px;
      left:${Math.random()*100}%;bottom:-5px;
      background:${colors[i % 3]};
      animation-duration:${Math.random()*12+8}s;
      animation-delay:${Math.random()*8}s;
    `;
    hero.appendChild(p);
  }
}

// Floating orbs
function createOrbs() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  hero.querySelectorAll('.orb').forEach(o => o.remove());
  const orbs = [
    { color: 'rgba(5,150,105,0.05)', size: 300, top: '20%', left: '10%' },
    { color: 'rgba(217,119,6,0.04)', size: 250, top: '60%', left: '75%' },
    { color: 'rgba(225,29,72,0.03)', size: 200, top: '40%', left: '50%' },
  ];
  orbs.forEach((o, i) => {
    const el = document.createElement('div');
    el.className = 'orb';
    el.style.cssText = `width:${o.size}px;height:${o.size}px;background:${o.color};top:${o.top};left:${o.left};animation-delay:${i*2}s`;
    hero.appendChild(el);
  });
}

// Animate stat counters
function animateCounters() {
  document.querySelectorAll('.stat-number').forEach(el => {
    const text = el.textContent;
    const match = text.match(/([\d.]+)/);
    if (!match) return;
    const target = parseFloat(match[1]);
    const prefix = text.slice(0, text.indexOf(match[1]));
    const suffix = text.slice(text.indexOf(match[1]) + match[1].length);
    let current = 0;
    const step = target / 60;
    const isDecimal = match[1].includes('.');
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = prefix + (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix;
    }, 25);
  });
}

// Form handlers
function initForms() {
  // Contact form — sends email via Web3Forms
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const origText = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;
      btn.style.opacity = '0.7';

      try {
        const formData = new FormData(contactForm);
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });
        const result = await response.json();

        if (result.success) {
          btn.textContent = '✓ Message Sent Successfully!';
          btn.style.background = 'var(--green)';
          btn.style.opacity = '1';
          contactForm.reset();
          setTimeout(() => { btn.textContent = origText; btn.style.background = ''; btn.disabled = false; }, 4000);
        } else {
          throw new Error(result.message || 'Failed to send');
        }
      } catch (err) {
        btn.textContent = '✗ Failed to send. Try again.';
        btn.style.background = 'var(--coral)';
        btn.style.opacity = '1';
        setTimeout(() => { btn.textContent = origText; btn.style.background = ''; btn.disabled = false; }, 3000);
      }
    });
  }

  // Consultation form — same handler
  const consultForm = document.getElementById('consultForm');
  if (consultForm) {
    consultForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = consultForm.querySelector('button[type="submit"]');
      const orig = btn.textContent;
      btn.textContent = '✓ Submitted Successfully!';
      btn.style.background = 'var(--green)';
      setTimeout(() => { btn.textContent = orig; btn.style.background = ''; }, 3000);
    });
  }
}

// Cursor glow effect
const glow = document.createElement('div');
glow.style.cssText = 'position:fixed;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(5,150,105,0.06),transparent 70%);pointer-events:none;z-index:0;transform:translate(-50%,-50%);transition:left 0.3s ease,top 0.3s ease';
document.body.appendChild(glow);
document.addEventListener('mousemove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

window.addEventListener('hashchange', () => {
  const page = window.location.hash.slice(1) || 'home';
  if (page !== currentPage) navigate(page);
});

const initPage = window.location.hash.slice(1) || 'home';
navigate(initPage);

// Chatbot toggle logic
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotClose = document.getElementById('chatbot-close');

if (chatbotToggle && chatbotWindow && chatbotClose) {
  chatbotToggle.addEventListener('click', () => {
    chatbotWindow.classList.toggle('hidden');
  });
  chatbotClose.addEventListener('click', () => {
    chatbotWindow.classList.add('hidden');
  });
}
