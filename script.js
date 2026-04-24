// ==================== DATA ====================
const propertyData = {
  'amrit-kalash': {
    title: 'Amrit Kalash Apartment - Maansarovar',
    location: 'Maansarovar, India',
    heroImage: 'assets/p1.png',
    images: Array.from({length: 12}, (_, i) => `assets/p${i+1}.png`),
    videos: [],
    document: 'documents/AMRIT KALASH APARTMENT BY MAANSAROVAR.pdf',
    specs: [
      { icon: 'fa-door-open', label: 'Type', value: '2/3 BHK Apartments' },
      { icon: 'fa-ruler', label: 'Size', value: '950 - 1400 sq.ft' },
      { icon: 'fa-building', label: 'Builder', value: 'Maansarovar Developers' },
      { icon: 'fa-map-marker-alt', label: 'Location', value: 'Prime location with excellent connectivity' },
    ],
    description: 'Amrit Kalash Apartment by Maansarovar is a premium residential project offering modern amenities, green spaces, top-notch security, and ample parking. Designed for luxurious living with excellent connectivity.'
  }
};

const resortData = {
  'kovalam-nemili': {
    title: 'Kovalam Nemili Resort',
    location: 'Kovalam, Nemili, India',
    heroImage: 'assets/resort/r21.jpeg',
    images: Array.from({length: 17}, (_, i) => `assets/resort/r${21+i}.jpeg`),
    videos: ['assets/resort/rv3.mp4'],
    specs: [
      { icon: 'fa-expand', label: 'Area', value: '6 Ground' },
      { icon: 'fa-tag', label: 'Price', value: '₹ 8 Crore' },
      { icon: 'fa-water', label: 'Type', value: 'Beachfront Resort' },
      { icon: 'fa-star', label: 'Rating', value: '4.9/5 Premium' },
    ],
    description: 'Sprawling 6-ground luxury beachfront resort in Kovalam Nemili offering premium amenities, fine dining, spa & pool, and breathtaking ocean views. An exclusive investment and lifestyle opportunity.'
  }
};

const landData = {
  'panayur-house': {
    title: 'Individual House - Panayur',
    location: 'Panayur, Chennai, India',
    heroImage: 'assets/resort/r1.jpeg',
    images: Array.from({length: 15}, (_, i) => `assets/resort/r${i+1}.jpeg`),
    videos: ['assets/resort/rv1.mp4', 'assets/resort/rv2.mp4'],
    specs: [
      { icon: 'fa-expand', label: 'Land', value: '4 Ground' },
      { icon: 'fa-door-open', label: 'House', value: '4 BHK' },
      { icon: 'fa-tag', label: 'Price', value: '₹ 6 Crore' },
      { icon: 'fa-map-marker-alt', label: 'Location', value: 'Panayur, Chennai' },
    ],
    description: 'Spacious individual house on 4 grounds of land in Panayur, Chennai. Features 4 BHK with resort-style amenities, lush surroundings, and excellent connectivity to the city.'
  }
};

// ==================== MODAL MANAGEMENT ====================
const enquiryModal = document.getElementById('enquiryModal');
const bookingModal = document.getElementById('bookingModal');
const detailModal = document.getElementById('detailModal');

function openEnquiryModal() {
  if(enquiryModal) {
    enquiryModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeEnquiryModal() {
  if(enquiryModal) {
    enquiryModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

function openBookingModal() {
  if(bookingModal) {
    bookingModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeBookingModal() {
  if(bookingModal) {
    bookingModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

function openDetailModal(type, id) {
  let data;
  if (type === 'property') data = propertyData[id];
  else if (type === 'resort') data = resortData[id];
  else if (type === 'land') data = landData[id];

  if (!data || !detailModal) return;

  const heroImg = data.heroImage || data.images[0];
  const imagesHtml = data.images.map(img => `<img src="${img}" alt="${data.title}" onclick="window.open('${img}','_blank')">`).join('');
  const videosHtml = data.videos.map(vid => `<video controls class="detail-video"><source src="${vid}" type="video/mp4"></video>`).join('');
  const specsHtml = data.specs.map(s => `
    <div class="detail-spec-item">
      <i class="fas ${s.icon}"></i>
      <strong>${s.label}:</strong> ${s.value}
    </div>
  `).join('');
  const docHtml = data.document ? `
    <a href="${data.document}" target="_blank" class="btn btn-secondary" style="flex:1;justify-content:center">
      <i class="fas fa-file-pdf"></i> View Brochure
    </a>
  ` : '';

  document.getElementById('detailModalBody').innerHTML = `
    <div class="detail-hero">
      <img src="${heroImg}" alt="${data.title}">
      <div class="detail-hero-overlay">
        <h2>${data.title}</h2>
        <p><i class="fas fa-map-marker-alt"></i> ${data.location}</p>
      </div>
    </div>
    <div class="detail-body">
      <p style="color:#666;line-height:1.7;margin-bottom:20px;">${data.description}</p>
      <div class="detail-specs">${specsHtml}</div>
      ${videosHtml}
      <h3 style="margin:20px 0 10px;color:var(--dark-color);">Gallery</h3>
      <div class="detail-gallery">${imagesHtml}</div>
      <div class="detail-actions">
        <button class="btn btn-primary" onclick="openEnquiryModal()"><i class="fas fa-phone"></i> Enquire Now</button>
        <button class="btn btn-secondary" onclick="openBookingModal()"><i class="fas fa-calendar"></i> Book Site Visit</button>
        ${docHtml}
      </div>
    </div>
  `;

  detailModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeDetailModal() {
  if(detailModal) {
    detailModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// Close modals on X or background click
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal')) {
    closeEnquiryModal();
    closeBookingModal();
    closeDetailModal();
  }
});

// ==================== HERO CAROUSEL ====================
let currentSlideIdx = 0;
const slides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.indicator');

function showSlide(n) {
  slides.forEach(slide => slide.classList.remove('active'));
  indicators.forEach(ind => ind.classList.remove('active'));

  if (n >= slides.length) currentSlideIdx = 0;
  if (n < 0) currentSlideIdx = slides.length - 1;

  slides[currentSlideIdx].classList.add('active');
  indicators[currentSlideIdx].classList.add('active');
}

function nextSlide() {
  currentSlideIdx++;
  showSlide(currentSlideIdx);
}

function prevSlide() {
  currentSlideIdx--;
  showSlide(currentSlideIdx);
}

function currentSlide(n) {
  currentSlideIdx = n;
  showSlide(currentSlideIdx);
}

// Auto-rotate every 6 seconds
setInterval(nextSlide, 6000);

// ==================== REVIEWS/BLOGS CAROUSEL ====================
function nextReview() {
  const track = document.querySelector('.reviews-track');
  if (track) track.scrollBy({ left: 350, behavior: 'smooth' });
}
function prevReview() {
  const track = document.querySelector('.reviews-track');
  if (track) track.scrollBy({ left: -350, behavior: 'smooth' });
}
function nextBlog() {
  const track = document.querySelector('.blogs-track');
  if (track) track.scrollBy({ left: 350, behavior: 'smooth' });
}
function prevBlog() {
  const track = document.querySelector('.blogs-track');
  if (track) track.scrollBy({ left: -350, behavior: 'smooth' });
}

// ==================== PROPERTY FILTERING ====================
function filterProperties(category) {
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  document.querySelectorAll('.property-item').forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'grid';
    } else {
      card.style.display = 'none';
    }
  });
}

// ==================== FORM SUBMISSION WITH EMAIL FALLBACK ====================
const COMPANY_EMAIL = 'info@tsconsultancy.com';

function formToObject(form) {
  const data = {};
  form.querySelectorAll('input, select, textarea').forEach(el => {
    if (el.name) data[el.name] = el.value;
  });
  return data;
}

function submitEnquiry(event) {
  event.preventDefault();
  const form = event.target;
  const data = formToObject(form);
  const body = Object.entries(data).map(([k,v]) => `${k}: ${v}`).join('\n');
  window.location.href = `mailto:${COMPANY_EMAIL}?subject=Property Enquiry&body=${encodeURIComponent(body)}`;
  closeEnquiryModal();
  form.reset();
}

function submitBooking(event) {
  event.preventDefault();
  const form = event.target;
  const data = formToObject(form);
  const body = Object.entries(data).map(([k,v]) => `${k}: ${v}`).join('\n');
  window.location.href = `mailto:${COMPANY_EMAIL}?subject=Site Visit Booking&body=${encodeURIComponent(body)}`;
  closeBookingModal();
  form.reset();
}

function submitContactForm(event) {
  event.preventDefault();
  const form = event.target;
  const data = formToObject(form);
  const body = Object.entries(data).map(([k,v]) => `${k}: ${v}`).join('\n');
  window.location.href = `mailto:${COMPANY_EMAIL}?subject=Contact Form Submission&body=${encodeURIComponent(body)}`;
  form.reset();
}

function subscribeNewsletter(event) {
  event.preventDefault();
  const email = event.target.querySelector('input[type="email"]').value;
  window.location.href = `mailto:${COMPANY_EMAIL}?subject=Newsletter Subscription&body=${encodeURIComponent('Email: ' + email)}`;
  event.target.reset();
}

// ==================== UTILITY FUNCTIONS ====================
function openWhatsApp() {
  const phoneNumber = '+971503567945';
  const message = encodeURIComponent('Hello! I am interested in your properties and services.');
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

function scrollToSection(selector) {
  const section = document.querySelector(selector);
  if (section) section.scrollIntoView({ behavior: 'smooth' });
}

// ==================== NAVBAR SCROLL EFFECT ====================
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ==================== HAMBURGER & MOBILE MENU ====================
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav');

if (hamburger && nav) {
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    nav.classList.toggle('show');
    hamburger.classList.toggle('active');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('show');
      hamburger.classList.remove('active');
    });
  });
}

// ==================== DROPDOWN MENU ====================
let dropdownOpen = false;
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const menu = toggle.nextElementSibling;
    if (menu) {
      dropdownOpen = !dropdownOpen;
      menu.style.opacity = dropdownOpen ? '1' : '0';
      menu.style.visibility = dropdownOpen ? 'visible' : 'hidden';
      menu.style.transform = dropdownOpen ? 'translateY(0)' : 'translateY(-10px)';
    }
  });
});

document.addEventListener('click', () => {
  dropdownOpen = false;
  document.querySelectorAll('.dropdown-menu').forEach(menu => {
    menu.style.opacity = '0';
    menu.style.visibility = 'hidden';
    menu.style.transform = 'translateY(-10px)';
  });
});

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

// ==================== LAZY LOADING ====================
const lazyImages = document.querySelectorAll('img[data-src]');
if ('IntersectionObserver' in window) {
  const imgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });
  lazyImages.forEach(img => imgObserver.observe(img));
}

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
  align-items: center;
  justify-content: center;
`;
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.style.display = 'flex';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==================== KEYBOARD SHORTCUTS ====================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeEnquiryModal();
    closeBookingModal();
    closeDetailModal();
  }
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  console.log('TS Consultancy website initialized');
});



// ==================== SHARE & HASH ROUTING ====================
function getBaseUrl() {
  return window.location.href.split('#')[0].replace(/\/+$/, '');
}

function shareItem(platform, title, hash) {
  const url = getBaseUrl() + '/' + hash;
  const text = encodeURIComponent(title + ' - TS Consultancy');
  if (platform === 'whatsapp') {
    window.open('https://wa.me/?text=' + text + '%0A' + encodeURIComponent(url), '_blank');
  } else if (platform === 'copy') {
    navigator.clipboard.writeText(url).then(() => showToast('Link copied to clipboard!'));
  } else if (platform === 'native' && navigator.share) {
    navigator.share({ title: title, text: title + ' - TS Consultancy', url: url });
  } else {
    window.open(url, '_blank');
  }
}

function showToast(message) {
  const existing = document.querySelector('.share-toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'share-toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

function openHashModal() {
  const hash = window.location.hash;
  if (!hash || hash.length < 2) return;
  const parts = hash.substring(1).split('/');
  if (parts.length >= 2) {
    const type = parts[0];
    const id = parts[1];
    if (['property','resort','land'].includes(type)) {
      setTimeout(() => openDetailModal(type, id), 300);
    }
  }
}

window.addEventListener('hashchange', openHashModal);
document.addEventListener('DOMContentLoaded', openHashModal);

// ==================== AUTO-ADD SHARE BARS ====================
function addShareBars() {
  const cards = document.querySelectorAll('.property-card, .resort-card, .land-card');
  cards.forEach(card => {
    if (card.querySelector('.share-bar')) return;
    const info = card.querySelector('.property-info, .resort-info, .land-info');
    if (!info) return;
    const titleEl = info.querySelector('h3');
    const title = titleEl ? titleEl.textContent.trim() : 'TS Consultancy Property';
    const onclick = card.getAttribute('onclick') || '';
    let type = 'property', id = '';
    const match = onclick.match(/openDetailModal\('([^']+)',\s*'([^']+)'\)/);
    if (match) { type = match[1]; id = match[2]; }
    else {
      const match2 = onclick.match(/open(Detail|Resort|Property)Modal\((\d+)\)/);
      if (match2) { type = 'property'; id = 'legacy-' + match2[2]; }
    }
    if (!id) return;
    const hash = '#' + type + '/' + id;
    const safeTitle = title.replace(/'/g, "\\'");
    const bar = document.createElement('div');
    bar.className = 'share-bar';
    bar.onclick = (e) => e.stopPropagation();
    bar.innerHTML = '<button class="share-btn" onclick="shareItem(\'whatsapp\',\'' + safeTitle + '\',\'' + hash + '\')" title="WhatsApp"><i class="fab fa-whatsapp"></i></button>' +
      '<button class="share-btn" onclick="shareItem(\'copy\',\'' + safeTitle + '\',\'' + hash + '\')" title="Copy Link"><i class="fas fa-link"></i></button>' +
      '<button class="share-btn" onclick="shareItem(\'native\',\'' + safeTitle + '\',\'' + hash + '\')" title="Share"><i class="fas fa-share-alt"></i></button>';
    info.appendChild(bar);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  addShareBars();
});
