// ==================== MODAL MANAGEMENT ====================
const enquiryModal = document.getElementById('enquiryModal');
const bookingModal = document.getElementById('bookingModal');

function openEnquiryModal() {
  enquiryModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeEnquiryModal() {
  enquiryModal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function openBookingModal() {
  bookingModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
  bookingModal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Close modal on X button click
document.querySelectorAll('.close-modal').forEach(btn => {
  btn.addEventListener('click', function() {
    this.closest('.modal').classList.remove('active');
    document.body.style.overflow = 'auto';
  });
});

// Close modal on background click
window.addEventListener('click', function(e) {
  if (e.target === enquiryModal) {
    closeEnquiryModal();
  }
  if (e.target === bookingModal) {
    closeBookingModal();
  }
});

// ==================== HERO CAROUSEL ====================
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.indicator');

function showSlide(n) {
  slides.forEach(slide => slide.classList.remove('active'));
  indicators.forEach(ind => ind.classList.remove('active'));
  
  if (n >= slides.length) currentSlide = 0;
  if (n < 0) currentSlide = slides.length - 1;
  
  slides[currentSlide].classList.add('active');
  indicators[currentSlide].classList.add('active');
}

function nextSlide() {
  currentSlide++;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  showSlide(currentSlide);
}

// Indicator click navigation
indicators.forEach((ind, i) => {
  ind.addEventListener('click', () => {
    currentSlide = i;
    showSlide(currentSlide);
  });
});

// Auto-rotate carousel every 6 seconds
setInterval(nextSlide, 6000);

// Initialize hero carousel
showSlide(currentSlide);

// ==================== REVIEWS CAROUSEL ====================
let reviewScrollPosition = 0;
const reviewsTrack = document.querySelector('.reviews-track');

function nextReview() {
  if (reviewsTrack) {
    reviewsTrack.scrollBy({ left: 350, behavior: 'smooth' });
  }
}

function prevReview() {
  if (reviewsTrack) {
    reviewsTrack.scrollBy({ left: -350, behavior: 'smooth' });
  }
}

// ==================== BLOGS CAROUSEL ====================
const blogsTrack = document.querySelector('.blogs-track');

function nextBlog() {
  if (blogsTrack) {
    blogsTrack.scrollBy({ left: 350, behavior: 'smooth' });
  }
}

function prevBlog() {
  if (blogsTrack) {
    blogsTrack.scrollBy({ left: -350, behavior: 'smooth' });
  }
}

// ==================== PROPERTY FILTERING ====================
const filterBtns = document.querySelectorAll('.filter-btn');
const propertyCards = document.querySelectorAll('.property-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    // Remove active class from all buttons
    filterBtns.forEach(b => b.classList.remove('active'));
    // Add active class to clicked button
    this.classList.add('active');
    
    const filterValue = this.getAttribute('data-filter');
    
    propertyCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      
      if (filterValue === 'all' || cardCategory === filterValue) {
        card.style.display = 'grid';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        }, 50);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.9)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  });
});

// ==================== FORM SUBMISSION ====================
async function submitEnquiry(event) {
  event.preventDefault();
  
  const formData = {
    name: document.querySelector('[name="name"]').value,
    email: document.querySelector('[name="email"]').value,
    phone: document.querySelector('[name="phone"]').value,
    service: document.querySelector('[name="service"]').value,
    budget: document.querySelector('[name="budget"]').value,
    message: document.querySelector('[name="message"]').value
  };
  
  try {
    // Replace with your FormSpree endpoint or backend URL
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      alert('Thank you! We will contact you shortly.');
      event.target.reset();
      closeEnquiryModal();
    } else {
      alert('There was an error. Please try again.');
    }
  } catch (error) {
    console.error('Submission error:', error);
    alert('Network error. Please check your connection and try again.');
  }
}

async function submitBooking(event) {
  event.preventDefault();
  
  const formData = {
    name: document.querySelector('[name="visitName"]').value,
    email: document.querySelector('[name="visitEmail"]').value,
    phone: document.querySelector('[name="visitPhone"]').value,
    date: document.querySelector('[name="preferredDate"]').value,
    time: document.querySelector('[name="preferredTime"]').value,
    location: document.querySelector('[name="propertyLocation"]').value
  };
  
  try {
    // Replace with your FormSpree endpoint or backend URL
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      alert('Booking confirmed! We will contact you shortly.');
      event.target.reset();
      closeBookingModal();
    } else {
      alert('There was an error. Please try again.');
    }
  } catch (error) {
    console.error('Booking error:', error);
    alert('Network error. Please check your connection and try again.');
  }
}

async function submitContactForm(event) {
  event.preventDefault();
  
  const formData = {
    name: event.target.querySelector('[name="contactName"]').value,
    email: event.target.querySelector('[name="contactEmail"]').value,
    phone: event.target.querySelector('[name="contactPhone"]').value,
    subject: event.target.querySelector('[name="contactSubject"]').value,
    message: event.target.querySelector('[name="contactMessage"]').value
  };
  
  try {
    // Replace with your FormSpree endpoint or backend URL
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      alert('Message sent successfully! We will get back to you soon.');
      event.target.reset();
    } else {
      alert('There was an error. Please try again.');
    }
  } catch (error) {
    console.error('Contact form error:', error);
    alert('Network error. Please check your connection and try again.');
  }
}

async function subscribeNewsletter(event) {
  event.preventDefault();
  
  const email = event.target.querySelector('input[type="email"]').value;
  
  try {
    // Replace with your FormSpree endpoint or backend URL
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: JSON.stringify({ email: email })
    });
    
    if (response.ok) {
      alert('Thank you for subscribing!');
      event.target.reset();
    } else {
      alert('Subscription failed. Please try again.');
    }
  } catch (error) {
    console.error('Newsletter error:', error);
  }
}

// ==================== UTILITY FUNCTIONS ====================
function openWhatsApp() {
  const phoneNumber = '+971503567945'; // TS Consultancy main number
  const message = encodeURIComponent('Hello! I am interested in your properties and services.');
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

function callNow() {
  // Get the phone number from the contact info
  window.location.href = 'tel:+971503567945';
}

function scrollToSection(selector) {
  const section = document.querySelector(selector);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}


// ==================== SMOOTH SCROLL FOR ANCHORS ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ==================== NAVIGATION ACTIVE STATE ====================
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ==================== HAMBURGER MENU ====================
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    hamburger.classList.toggle('active');
  });
  
  // Close menu when link is clicked
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.style.display = 'none';
      hamburger.classList.remove('active');
    });
  });
}

// ==================== LAZY LOADING IMAGES ====================
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove('lazy');
      observer.unobserve(img);
    }
  });
});

images.forEach(img => imageObserver.observe(img));

// ==================== ANIMATION ON SCROLL ====================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.property-card, .resort-card, .land-card, .review-card, .blog-card, .feature-item').forEach(el => {
  observer.observe(el);
});

// ==================== FORM VALIDATION ====================
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^[0-9+\-\s()]{10,}$/;
  return re.test(phone);
}

// Add validation to form inputs
document.querySelectorAll('input[type="email"]').forEach(input => {
  input.addEventListener('blur', function() {
    if (this.value && !validateEmail(this.value)) {
      this.style.borderColor = '#e74c3c';
    } else {
      this.style.borderColor = 'inherit';
    }
  });
});

document.querySelectorAll('input[type="tel"], input[name="phone"], input[name="visitPhone"], input[name="contactPhone"]').forEach(input => {
  input.addEventListener('blur', function() {
    if (this.value && !validatePhone(this.value)) {
      this.style.borderColor = '#e74c3c';
    } else {
      this.style.borderColor = 'inherit';
    }
  });
});

// ==================== MOBILE RESPONSIVE MENU ====================
function handleResize() {
  const width = window.innerWidth;
  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector('.hamburger');
  
  if (width > 768) {
    if (nav) nav.style.display = 'flex';
    if (hamburger) hamburger.style.display = 'none';
  } else {
    if (nav) nav.style.display = 'none';
    if (hamburger) hamburger.style.display = 'flex';
  }
}

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);

// ==================== COUNTER ANIMATION ====================
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// Trigger counter animation on scroll
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
      const counters = entry.target.querySelectorAll('[data-count]');
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        animateCounter(counter, target);
      });
      entry.target.classList.add('counted');
    }
  });
});

const seoItems = document.querySelector('.hero-seo-banner');
if (seoItems) statsObserver.observe(seoItems);

// ==================== DROPDOWN MENU ENHANCEMENT ====================
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const menu = toggle.nextElementSibling;
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  });
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-dropdown')) {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      menu.style.display = 'none';
    });
  }
});

// ==================== PROPERTY MODAL ====================
function openResortModal(resortName) {
  alert(`Viewing details for: ${resortName}\n\nFull details, availability, and booking options will be displayed here.`);
}

function openLandModal(landName) {
  alert(`Investment opportunity: ${landName}\n\nDetailed legal documents, ROI projections, and booking details will be displayed here.`);
}

function openBlogModal(blogTitle) {
  alert(`Reading: ${blogTitle}\n\nFull blog content will be displayed here.`);
}

// ==================== LIKE AND COMMENT HANDLERS ====================
document.querySelectorAll('.blog-card').forEach(card => {
  const likeBtn = card.querySelector('.like-btn');
  const commentBtn = card.querySelector('.comment-btn');
  
  if (likeBtn) {
    likeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      likeBtn.classList.toggle('liked');
      let likes = parseInt(likeBtn.textContent);
      likeBtn.innerHTML = likeBtn.classList.contains('liked') ? 
        `<i class="fas fa-heart"></i> ${likes + 1}` : 
        `<i class="far fa-heart"></i> ${likes}`;
    });
  }
  
  if (commentBtn) {
    commentBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      alert('Open comment section for this blog post.');
    });
  }
});

// ==================== SCROLL TO TOP BUTTON ====================
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
  position: fixed;
  bottom: 100px;
  right: 30px;
  background: var(--primary-color);
  color: var(--dark-color);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: none;
  z-index: 998;
  font-size: 18px;
  box-shadow: 0 5px 15px rgba(212, 165, 116, 0.3);
  transition: all 0.3s;
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.style.display = 'flex';
    scrollTopBtn.style.alignItems = 'center';
    scrollTopBtn.style.justifyContent = 'center';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

scrollTopBtn.addEventListener('hover', () => {
  scrollTopBtn.style.transform = 'translateY(-3px)';
});

// ==================== KEYBOARD SHORTCUTS ====================
document.addEventListener('keydown', (e) => {
  // Press ? for help
  if (e.key === '?') {
    alert('Keyboard Shortcuts:\nEsc - Close modals\nH - Go to home\nC - Contact us');
  }
  
  // Press Escape to close modals
  if (e.key === 'Escape') {
    closeEnquiryModal();
    closeBookingModal();
  }
  
  // Arrow keys for carousel
  if (e.key === 'ArrowRight') {
    nextSlide();
  }
  if (e.key === 'ArrowLeft') {
    prevSlide();
  }
});

// ==================== PAGE LOAD ANIMATIONS ====================
window.addEventListener('load', () => {
  document.body.style.animationDuration = '0.5s';
  
  // Add loading class before removing
  document.body.classList.add('loaded');
});

// ==================== PERFORMANCE OPTIMIZATION ====================
// Debounce function for resize events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const debouncedResize = debounce(handleResize, 250);
window.addEventListener('resize', debouncedResize);

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  console.log('Website initialized successfully');
});





