// Nanakim Korean Fashion JS - Smooth Animations
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^=\"#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Intersection Observer for Fade Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in, .fade-in-up').forEach(el => {
    observer.observe(el);
  });

  // Model Card Hover Effects
  document.querySelectorAll('.model-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.02)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
    });
  });

  // Collection Item Hover
  document.querySelectorAll('.collection-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.querySelector('img').style.transform = 'scale(1.05)';
    });
    item.addEventListener('mouseleave', () => {
      item.querySelector('img').style.transform = 'scale(1)';
    });
  });

  // Navbar Scroll Effect
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(255,255,255,0.98)';
      navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
    } else {
      navbar.style.background = 'rgba(255,255,255,0.95)';
      navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)';
    }
  });

  // Contact Form
  document.querySelector('.contact-form').addEventListener('submit', e => {
    e.preventDefault();
    const btn = e.target.querySelector('.btn');
    btn.innerHTML = 'Sent! <i class="fas fa-check"></i>';
    btn.style.background = '#FFB6C1';
    setTimeout(() => {
      e.target.reset();
      btn.innerHTML = 'Send Message';
      btn.style.background = '';
    }, 2000);
  });

  // Hero Scroll Indicator
  window.addEventListener('scroll', () => {
    const scrollIndicator = document.querySelector('.hero-scroll');
    if (scrollIndicator) {
      scrollIndicator.style.opacity = window.scrollY > 100 ? 0 : 1;
    }
  });
});
