// =====================
// Typing Animation for Home Section
// =====================
const typingText = document.getElementById('typing-text');
const roles = [
  'AI/ML Enthusiast',
  'Python Developer',
  'Software Engineer',
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

// Cycles through the roles with typing and deleting effect
function type() {
  const currentRole = roles[roleIndex];
  if (isDeleting) {
    typingText.textContent = currentRole.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, 50);
    }
  } else {
    typingText.textContent = currentRole.substring(0, charIndex++);
    if (charIndex > currentRole.length) {
      isDeleting = true;
      setTimeout(type, 1200);
    } else {
      setTimeout(type, 100);
    }
  }
}
type();

// =====================
// Navbar Active Link Highlighting & Smooth Scroll
// =====================
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const sections = Array.from(document.querySelectorAll('section'));

// Highlights the nav link for the section currently in view
function setActiveNav() {
  let scrollPos = window.scrollY + 120;
  let current = sections[0].id;
  for (const section of sections) {
    if (section.offsetTop <= scrollPos) {
      current = section.id;
    }
  }
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}
window.addEventListener('scroll', setActiveNav);
window.addEventListener('load', setActiveNav);

// Smooth scrolls to section when nav link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth',
      });
    }
  });
});

// =====================
// Contact Form Success Message
// =====================
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    setTimeout(() => {
      document.getElementById('form-success').style.display = 'block';
      contactForm.reset();
    }, 1200);
  });
}

// =====================
// Fade-in Animation on Scroll (Intersection Observer)
// =====================
const fadeEls = document.querySelectorAll('section, .bg-surface');
// Add initial fade-init class to all elements
fadeEls.forEach(el => {
  el.classList.add('fade-init');
});
// Observer triggers fade-in when element enters viewport
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('fade-init');
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);
fadeEls.forEach(el => {
  observer.observe(el);
});

// =====================
// About Modal Tab Switching from Dropdown
// =====================
function aboutTabDropdown() {
  document.querySelectorAll('.dropdown-item[data-tab]').forEach(function(item) {
    item.addEventListener('click', function(e) {
      setTimeout(function() {
        var tabTrigger = new bootstrap.Tab(document.querySelector('[data-bs-target="#' + item.getAttribute('data-tab') + '"]'));
        tabTrigger.show();
      }, 300); // Wait for modal to open
    });
  });
}
document.addEventListener('DOMContentLoaded', aboutTabDropdown);

// =====================
// Enable Hover Effect on Mobile (Touch) for Cards and Buttons
// =====================
function enableTouchHover(selector) {
  document.querySelectorAll(selector).forEach(function(el) {
    el.addEventListener('touchstart', function() {
      el.classList.add('hover-active');
    });
    el.addEventListener('touchend', function() {
      el.classList.remove('hover-active');
    });
    el.addEventListener('touchcancel', function() {
      el.classList.remove('hover-active');
    });
  });
}
document.addEventListener('DOMContentLoaded', function() {
  enableTouchHover('.project-card');
  enableTouchHover('.card');
  enableTouchHover('.btn-primary');
  enableTouchHover('.btn-outline-primary');
});

// =====================
// Back to Top Button Logic
// =====================
const backToTopBtn = document.getElementById('backToTopBtn');
window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'flex';
  } else {
    backToTopBtn.style.display = 'none';
  }
});
backToTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// =====================
// Dynamic Certifications Rendering
// =====================
const certifications = [
  { title: 'Machine Learning Specialization', issuer: 'Coursera (Stanford and Deep Learning.AI)', year: 'July 2024' },
  { title: 'PCAP: Programming Essentials in Python', issuer: 'OpenEDG Python Institute', year: 'June 2024' },
  { title: 'Career Essentials in Generative AI', issuer: 'Linkedin(Microsoft)', year: 'May 2024' },
  { title: 'Mathematics for Machine Learning and Data Science', issuer: 'Coursera (Deep Learning.AI)', year: 'Nov. 2023' },
  { title: 'Artificial Intelligence', issuer: 'IIT Kanpur (Summer Training Program)', year: 'June 2023' },
  // Add more certificates here as needed
];

function renderCertifications() {
  const container = document.getElementById('certifications-list');
  if (!container) return;
  container.innerHTML = certifications.map(cert => `
    <div class="col-md-4">
      <div class="bg-surface rounded-4 shadow-lg p-4 text-center">
        <i class="bi bi-patch-check-fill text-primary fs-1 mb-2"></i>
        <h5 class="fw-semibold">${cert.title}</h5>
        <div class="small text-white">${cert.year}</div>
      </div>
    </div>
  `).join('');
}
document.addEventListener('DOMContentLoaded', renderCertifications);

// =====================
// Dynamic Achievements Rendering
// =====================
const achievements = [
  {
    icon: 'bi-trophy-fill',
    title: '68th Rank in TCS CodeVita',
    issuer: ' TCS CodeVita',
    year: 'Season 12',
    description: ''
  },
  {
    icon: 'bi-trophy-fill',
    title: 'Qualified GATE CSE',
    issuer: 'GATE',
    year: '2025',
    description: ''
  }
];

const learningItems = [
  { name: 'Docker', icon: 'simple-icons:docker' },
  { name: 'Kubernetes', icon: 'simple-icons:kubernetes' },
  { name: 'Cloud Computing', icon: 'simple-icons:googlecloud' },
  { name: 'CI/CD', icon: 'simple-icons:gitlab' }
];

const experiences = [
  {
    title: "AI/ML Intern",
    company: "Quest Digiflex Pvt. Ltd.",
    date: "Feb. 2025 - May 2025",
    description: "Worked on developing and implementing machine learning models for predictive analysis and data-driven insights."
  }
];

function renderAchievements() {
  const achievementsList = document.getElementById('achievements-list');
  if (achievementsList) {
    achievementsList.innerHTML = achievements.map(item => `
      <div class="col-md-6">
        <div class="achievement-item d-flex align-items-center bg-surface p-3 rounded-3">
          <i class="bi ${item.icon} text-primary fs-1 me-3"></i>
          <div>
            <h5 class="fw-semibold">${item.title}</h5>
            <div class="small text-white">${item.issuer} | ${item.year}</div>
            <p class="mt-2">${item.description}</p>
          </div>
        </div>
      </div>
    `).join('');
  }
}

function renderLearningItems() {
  const learningList = document.getElementById('learning-list');
  if (learningList) {
    learningList.innerHTML = learningItems.map(item => `
      <div class="col-6 col-md-3" data-aos="fade-up">
        <div class="card h-100 tilt-element">
          <div class="card-body text-center">
            <span class="iconify learning-icon" data-icon="${item.icon}"></span>
            <h5 class="card-title fs-6 fw-semibold mt-2">${item.name}</h5>
          </div>
        </div>
      </div>
    `).join('');
  }
}

function renderExperienceTimeline() {
  const timelineContainer = document.getElementById('experience-timeline');
  if (timelineContainer) {
    timelineContainer.innerHTML = experiences.map((exp, index) => `
      <div class="timeline-item ${index % 2 === 0 ? 'left' : 'right'}" data-aos="${index % 2 === 0 ? 'fade-right' : 'fade-left'}">
        <div class="timeline-content tilt-element">
          <span class="date">${exp.date}</span>
          <h5>${exp.title}</h5>
          <p class="company text-secondary">${exp.company}</p>
          <p>${exp.description}</p>
        </div>
      </div>
    `).join('');
  }
}

/**
 * Initializes all animations and dynamic content loading.
 */
function init() {
  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true
  });

  renderCertifications();
  renderAchievements();
  renderLearningItems();
  renderExperienceTimeline();
}

// Initialize all new features
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initCustomCursor();
  init3DTilt();
  initMagneticButtons();
  init();
});

// tsParticles Initialization
function initParticles() {
    tsParticles.load("tsparticles", {
        fpsLimit: 60,
        particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: "#38bdf8" },
            shape: { type: "circle" },
            opacity: { value: 0.3, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
            size: { value: 3, random: true, anim: { enable: false } },
            line_linked: { enable: true, distance: 150, color: "#818cf8", opacity: 0.2, width: 1 },
            move: { enable: true, speed: 1, direction: "none", random: false, straight: false, out_mode: "out", attract: { enable: false } }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
            modes: { grab: { distance: 140, line_opacity: 0.5 }, bubble: {}, repulse: {}, push: { particles_nb: 4 }, remove: {} }
        },
        retina_detect: true,
    });
}

// Custom Cursor Logic
function initCustomCursor() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let outlineX = 0, outlineY = 0;

    function animateCursor() {
        // Smoothly interpolate the dot and outline positions
        dotX += (mouseX - dotX) * 0.35;
        dotY += (mouseY - dotY) * 0.35;
        outlineX += (mouseX - outlineX) * 0.18;
        outlineY += (mouseY - outlineY) * 0.18;
        cursorDot.style.left = `${dotX}px`;
        cursorDot.style.top = `${dotY}px`;
        cursorOutline.style.left = `${outlineX}px`;
        cursorOutline.style.top = `${outlineY}px`;
        requestAnimationFrame(animateCursor);
    }

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    document.querySelectorAll('a, button, .project-card, .skill-card').forEach((el) => {
        el.addEventListener('mouseenter', () => cursorOutline.classList.add('cursor-link-hover'));
        el.addEventListener('mouseleave', () => cursorOutline.classList.remove('cursor-link-hover'));
    });

    animateCursor();
}

// 3D Tilt Effect for Cards
function init3DTilt() {
    document.querySelectorAll('.project-card, .skill-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const { width, height } = rect;
            const rotateX = (y / height - 0.5) * -15; // Max 15deg rotation
            const rotateY = (x / width - 0.5) * 15;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

// Magnetic Buttons Effect
function initMagneticButtons() {
    document.querySelectorAll('.social-icon').forEach(el => {
        el.addEventListener('mousemove', e => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            anime({ targets: el, translateX: x * 0.5, translateY: y * 0.5, duration: 50 });
        });
        el.addEventListener('mouseleave', () => {
            anime({ targets: el, translateX: 0, translateY: 0, duration: 300, easing: 'easeOutElastic(1, .8)' });
        });
    });
}