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
    facilities: [
      { icon: 'fa-swimming-pool', label: 'Swimming Pool' },
      { icon: 'fa-dumbbell', label: 'Gymnasium' },
      { icon: 'fa-shield-alt', label: '24/7 Security' },
      { icon: 'fa-car', label: 'Ample Parking' },
      { icon: 'fa-tree', label: 'Garden / Green Spaces' },
      { icon: 'fa-child', label: 'Children\'s Play Area' },
      { icon: 'fa-bolt', label: 'Power Backup' },
      { icon: 'fa-tint', label: 'Rainwater Harvesting' },
      { icon: 'fa-video', label: 'CCTV Surveillance' },
      { icon: 'fa-elevator', label: 'High-Speed Elevators' },
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
    facilities: [
      { icon: 'fa-water', label: 'Private Beach Access' },
      { icon: 'fa-spa', label: 'Spa & Wellness Center' },
      { icon: 'fa-swimming-pool', label: 'Infinity Pool' },
      { icon: 'fa-utensils', label: 'Multi-Cuisine Restaurant' },
      { icon: 'fa-glass-martini', label: 'Beachfront Bar' },
      { icon: 'fa-dumbbell', label: 'Fitness Center' },
      { icon: 'fa-wifi', label: 'High-Speed WiFi' },
      { icon: 'fa-concierge-bell', label: '24/7 Room Service' },
      { icon: 'fa-car', label: 'Valet Parking' },
      { icon: 'fa-ship', label: 'Water Sports' },
      { icon: 'fa-child', label: 'Kids Club' },
      { icon: 'fa-music', label: 'Live Entertainment' },
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
    facilities: [
      { icon: 'fa-swimming-pool', label: 'Private Swimming Pool' },
      { icon: 'fa-tree', label: 'Lush Garden & Landscapes' },
      { icon: 'fa-car', label: 'Car Parking (3+ Cars)' },
      { icon: 'fa-solar-panel', label: 'Solar Power Backup' },
      { icon: 'fa-tint', label: 'Borewell + Metro Water' },
      { icon: 'fa-shield-alt', label: 'Gated Community Security' },
      { icon: 'fa-wind', label: 'Spacious Balconies' },
      { icon: 'fa-utensils', label: 'Modular Kitchen' },
      { icon: 'fa-couch', label: 'Servant Quarters' },
      { icon: 'fa-bus', label: 'Near Bus & Metro' },
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
  const facilitiesHtml = data.facilities ? `
    <h3 style="margin:25px 0 12px;color:var(--dark-color);"><i class="fas fa-concierge-bell" style="color:var(--primary-color);margin-right:8px;"></i>Amenities & Facilities</h3>
    <div class="detail-facilities" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px;margin-bottom:20px;">
      ${data.facilities.map(f => `
        <div class="facility-item" style="display:flex;align-items:center;gap:10px;background:#f8f9fa;padding:12px 15px;border-radius:10px;border-left:3px solid var(--primary-color);">
          <i class="fas ${f.icon}" style="color:var(--primary-color);width:20px;text-align:center;"></i>
          <span style="font-size:13px;color:#444;font-weight:500;">${f.label}</span>
        </div>
      `).join('')}
    </div>
  ` : '';
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
      ${facilitiesHtml}
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
    if (card.classList.contains('hidden')) {
      return;
    }
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'grid';
    } else {
      card.style.display = 'none';
    }
  });
}

// ==================== FORM SUBMISSION WITH SUPABASE + EMAIL FALLBACK ====================
const COMPANY_EMAIL = 'tsconsultancy26@gmail.com';

function formToObject(form) {
  const data = {};
  form.querySelectorAll('input, select, textarea').forEach(el => {
    if (el.name) data[el.name] = el.value;
  });
  return data;
}

function showDbToast(message, type = 'success') {
  const existing = document.querySelector('.db-toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'db-toast';
  toast.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i> ${message}`;
  toast.style.cssText = `
    position: fixed;
    top: 100px;
    right: 30px;
    background: ${type === 'success' ? '#27ae60' : '#e74c3c'};
    color: #fff;
    padding: 15px 25px;
    border-radius: 10px;
    z-index: 9999;
    font-weight: 600;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    animation: slideInRight 0.4s ease;
    display: flex;
    align-items: center;
    gap: 10px;
    max-width: 350px;
  `;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'slideOutRight 0.4s ease forwards';
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

function submitToFormSubmit(formData, subject) {
  const iframe = document.createElement('iframe');
  iframe.name = 'formsubmit-frame-' + Date.now();
  iframe.style.display = 'none';
  document.body.appendChild(iframe);

  const form = document.createElement('form');
  form.action = 'https://formsubmit.co/' + COMPANY_EMAIL;
  form.method = 'POST';
  form.target = iframe.name;

  for (let [key, value] of Object.entries(formData)) {
    if (key.startsWith('_')) continue;
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = value;
    form.appendChild(input);
  }

  [
    { name: '_subject', value: subject },
    { name: '_template', value: 'table' },
    { name: '_captcha', value: 'false' }
  ].forEach(c => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = c.name;
    input.value = c.value;
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();

  setTimeout(() => {
    if (form.parentNode) document.body.removeChild(form);
    if (iframe.parentNode) document.body.removeChild(iframe);
  }, 8000);
}

async function handleFormSubmit(event, subject, closeCallback) {
  event.preventDefault();
  const form = event.target;
  const data = formToObject(form);
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn ? btn.innerHTML : '';

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  }

  let dbSuccess = false;

  if (window.tsDB && window.tsDB.isDbConfigured()) {
    let dbResult;
    if (subject.includes('Enquiry')) {
      dbResult = await window.tsDB.insertEnquiry(data);
    } else if (subject.includes('Booking')) {
      dbResult = await window.tsDB.insertBooking(data);
    } else {
      dbResult = await window.tsDB.insertContact(data);
    }
    dbSuccess = dbResult.success;
    if (!dbSuccess) {
      console.warn('[Form] DB insert failed:', dbResult.error);
    }
  }

  submitToFormSubmit(data, subject);

  if (dbSuccess) {
    showDbToast('Submitted successfully! We will contact you soon.');
  } else {
    showDbToast('Form submitted via email. Database not connected yet.', 'warning');
  }

  form.reset();
  if (typeof closeCallback === 'function') closeCallback();

  if (btn) {
    btn.disabled = false;
    btn.innerHTML = originalText;
  }
}

async function handleNewsletterSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.querySelector('input[type="email"]').value;
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn ? btn.innerHTML : '';

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
  }

  let dbSuccess = false;

  if (window.tsDB && window.tsDB.isDbConfigured()) {
    const dbResult = await window.tsDB.insertNewsletter(email);
    dbSuccess = dbResult.success;
  }

  submitToFormSubmit({ email: email }, 'Newsletter Subscription');

  if (dbSuccess) {
    showDbToast('Subscribed successfully!');
  } else {
    showDbToast('Subscribed via email. Database not connected yet.', 'warning');
  }

  form.reset();

  if (btn) {
    btn.disabled = false;
    btn.innerHTML = originalText;
  }
}

const toastStyles = document.createElement('style');
toastStyles.textContent = `
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(100px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes slideOutRight {
    from { opacity: 1; transform: translateX(0); }
    to { opacity: 0; transform: translateX(100px); }
  }
`;
document.head.appendChild(toastStyles);

// ==================== UTILITY FUNCTIONS ====================
function openWhatsApp() {
  const phoneNumber = '+971503567945';
  const message = encodeURIComponent('Hello! I am interested in your properties and services.');
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

// ==================== BLOG DATA ====================
const blogData = {
  1: {
    title: 'Top 10 Luxury Properties in Dubai 2024',
    date: 'Mar 15, 2024',
    image: 'https://images.unsplash.com/photo-1554224311-beee415c15e7?w=800&h=400&fit=crop',
    author: 'Admin',
    content: 'Dubai continues to be a global hub for luxury real estate. From the iconic Burj Khalifa residences to the exclusive Palm Jumeirah villas, the market offers unparalleled opportunities. In this comprehensive guide, we explore the top 10 luxury properties that define opulence in 2024. Each property features world-class amenities, breathtaking views, and exceptional investment potential. Whether you seek a waterfront apartment or a desert oasis villa, Dubai\'s property market has something for every discerning buyer.',
    highlights: [
      { icon: 'fa-building', text: 'Burj Khalifa Penthouses' },
      { icon: 'fa-water', text: 'Palm Jumeirah Villas' },
      { icon: 'fa-anchor', text: 'Dubai Marina Waterfront' }
    ]
  },
  2: {
    title: 'Resort Living: Benefits & Lifestyle Guide',
    date: 'Mar 12, 2024',
    image: 'https://images.unsplash.com/photo-1495564151525-2a7f81d2ccff?w=800&h=400&fit=crop',
    author: 'Admin',
    content: 'Resort living offers a unique blend of luxury, convenience, and community. Imagine waking up to pristine beaches, world-class spas, and gourmet dining just steps from your door. In the UAE and India, resort communities are redefining residential living. From private beach access to championship golf courses, resort properties provide an unmatched lifestyle. Our guide covers the key benefits, investment potential, and what to look for when choosing your resort home.',
    highlights: [
      { icon: 'fa-spa', text: 'Wellness & Spa Access' },
      { icon: 'fa-utensils', text: 'Fine Dining On-Site' },
      { icon: 'fa-users', text: 'Vibrant Community' }
    ]
  },
  3: {
    title: 'Real Estate Investment Trends 2024',
    date: 'Mar 10, 2024',
    image: 'https://images.unsplash.com/photo-1560491676-04071c5f467b?w=800&h=400&fit=crop',
    author: 'Admin',
    content: 'The real estate landscape in 2024 is shaped by emerging trends in sustainability, smart technology, and changing buyer preferences. Dubai and India remain hotspots for international investors seeking high ROI. Key trends include eco-friendly developments, integrated smart home systems, and mixed-use communities. Our market analysis reveals prime locations poised for growth, helping investors make informed decisions in a dynamic market.',
    highlights: [
      { icon: 'fa-leaf', text: 'Sustainable Developments' },
      { icon: 'fa-microchip', text: 'Smart Home Integration' },
      { icon: 'fa-chart-line', text: 'High ROI Locations' }
    ]
  },
  4: {
    title: 'Coastal Living: Your Dream Home Guide',
    date: 'Mar 8, 2024',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop',
    author: 'Admin',
    content: 'There is something magical about living by the sea. Coastal properties offer not just stunning views but a lifestyle centered around nature, relaxation, and recreation. From Kovalam\'s serene beaches to Dubai\'s vibrant coastline, our guide explores the best coastal living options. Learn about property types, price ranges, and the unique advantages of seaside homes for both personal enjoyment and investment.',
    highlights: [
      { icon: 'fa-sun', text: 'Beachfront Access' },
      { icon: 'fa-ship', text: 'Water Sports' },
      { icon: 'fa-umbrella-beach', text: 'Resort Lifestyle' }
    ]
  },
  5: {
    title: 'Smart Home Features in Luxury Properties',
    date: 'Mar 5, 2024',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop',
    author: 'Admin',
    content: 'Modern luxury homes are embracing cutting-edge technology to enhance comfort, security, and energy efficiency. Smart home features now include AI-powered climate control, biometric access systems, automated lighting, and integrated home theaters. In Dubai and India\'s premium developments, these technologies come standard. Discover how smart home innovations are transforming the way we live and adding significant value to properties.',
    highlights: [
      { icon: 'fa-fingerprint', text: 'Biometric Security' },
      { icon: 'fa-temperature-high', text: 'Climate Control' },
      { icon: 'fa-lightbulb', text: 'Automated Lighting' }
    ]
  },
  6: {
    title: 'Legal Documentation Guide for Property',
    date: 'Mar 1, 2024',
    image: 'https://images.unsplash.com/photo-1493536671697-6d302319b41e?w=800&h=400&fit=crop',
    author: 'Admin',
    content: 'Navigating property documentation can be complex, especially for international buyers. This comprehensive guide covers the essential legal requirements for property transactions in both the UAE and India. From title deeds and NOCs to RERA registration and tax implications, we break down every document you need. Understanding these requirements ensures a smooth, secure transaction and protects your investment for years to come.',
    highlights: [
      { icon: 'fa-file-signature', text: 'Title Deeds' },
      { icon: 'fa-gavel', text: 'RERA Compliance' },
      { icon: 'fa-shield-alt', text: 'Buyer Protection' }
    ]
  }
};

// ==================== BLOG MODAL ====================
function openBlogModal(id) {
  const data = blogData[id];
  if (!data) return;
  
  const highlightsHtml = data.highlights.map(h => `
    <div class="blog-highlight-item">
      <i class="fas ${h.icon}"></i>
      <span>${h.text}</span>
    </div>
  `).join('');

  const modalBody = document.getElementById('detailModalBody');
  const modal = document.getElementById('detailModal');
  
  modalBody.innerHTML = `
    <div class="detail-hero">
      <img src="${data.image}" alt="${data.title}">
      <div class="detail-hero-overlay">
        <h2>${data.title}</h2>
        <p><i class="fas fa-calendar"></i> ${data.date} &nbsp;|&nbsp; <i class="fas fa-user"></i> ${data.author}</p>
      </div>
    </div>
    <div class="detail-body">
      <p style="color:#666;line-height:1.8;margin-bottom:20px;font-size:15px;">${data.content}</p>
      <h3 style="margin:20px 0 12px;color:var(--dark-color);"><i class="fas fa-star" style="color:var(--primary-color);margin-right:8px;"></i>Key Highlights</h3>
      <div class="detail-specs">${highlightsHtml}</div>
      <div class="detail-actions">
        <button class="btn btn-primary" onclick="openEnquiryModal()"><i class="fas fa-phone"></i> Enquire Now</button>
        <button class="btn btn-secondary" onclick="closeDetailModal()"><i class="fas fa-times"></i> Close</button>
      </div>
    </div>
  `;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
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
