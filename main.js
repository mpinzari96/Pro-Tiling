// Pro Tiling — main.js

// Sticky header shadow
const header = document.querySelector('.site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// Mobile menu toggle
const hamburger = document.querySelector('.nav__hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
    hamburger.querySelectorAll('span')[0].style.transform = open ? 'rotate(45deg) translate(5px, 5px)' : '';
    hamburger.querySelectorAll('span')[1].style.opacity = open ? '0' : '1';
    hamburger.querySelectorAll('span')[2].style.transform = open ? 'rotate(-45deg) translate(5px, -5px)' : '';
  });
}

// FAQ accordion
document.querySelectorAll('.faq-item__question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

// Form validation
const forms = document.querySelectorAll('.lead-form form, .contact-form form');
forms.forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      if (!field.value.trim()) {
        valid = false;
        field.style.borderColor = '#e74c3c';
        field.addEventListener('input', () => field.style.borderColor = '', { once: true });
      }
    });
    if (valid) {
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Message Sent! We\'ll be in touch shortly.';
      btn.disabled = true;
      btn.style.background = '#4a9265';
      form.reset();
    }
  });
});

// Mark active nav link
const path = window.location.pathname.replace(/\/$/, '');
document.querySelectorAll('.nav__links a, .nav__dropdown-menu a').forEach(a => {
  const href = a.getAttribute('href').replace(/\/$/, '');
  if (href === path || (path === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});
