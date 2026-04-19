// ============ CAROUSEL FUNCTIONALITY ============
let currentSlideIndex = 1;

function nextSlide() {
  showSlide(currentSlideIndex += 1);
}

function prevSlide() {
  showSlide(currentSlideIndex -= 1);
}

function currentSlide(n) {
  showSlide(currentSlideIndex = n);
}

function showSlide(n) {
  let slides = document.getElementsByClassName("carousel-slide");
  let indicators = document.getElementsByClassName("indicator");
  
  if (n > slides.length) {
    currentSlideIndex = 1;
  }
  if (n < 1) {
    currentSlideIndex = slides.length;
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  for (let i = 0; i < indicators.length; i++) {
    indicators[i].classList.remove("active");
  }
  
  slides[currentSlideIndex - 1].classList.add("active");
  indicators[currentSlideIndex - 1].classList.add("active");
}

// Auto-advance carousel
setInterval(() => {
  nextSlide();
}, 5000);

// ============ SCROLL TO SECTION ============
function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// ============ HAMBURGER MENU ============
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}

// ============ PROPERTY DATA ============
const properties = {
  1: {
    title: "Luxury Villa",
    price: "₹1.2 Cr",
    location: "Bangalore, India",
    bedrooms: "4 BHK",
    bathrooms: "3 Bathrooms",
    area: "3000 sq ft",
    year: "Built: 2023",
    description: "Stunning luxury villa with premium finishes, private garden, and smart home automation. Perfect for families seeking comfort and elegance.",
    images: [
      "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop"
    ],
    amenities: ["Smart Home", "Private Garden", "Swimming Pool", "Gym", "Cinema Hall", "Guest House"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6180722395535!2d77.6298!3d12.9352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1729f1e4c9e1%3A0xb3f6c5e4d9e1a2e3!2sBangalore!5e0!3m2!1sen!2sin!4v1234567890"
  },
  2: {
    title: "Modern Flat",
    price: "₹75 Lakh",
    location: "Chennai, India",
    bedrooms: "2 BHK",
    bathrooms: "2 Bathrooms",
    area: "1200 sq ft",
    year: "Built: 2024",
    description: "Modern apartment with city view, state-of-the-art kitchen, and spacious balcony. Located in prime area with excellent connectivity.",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f7cbb8f0c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop"
    ],
    amenities: ["Parking", "Security", "Gym", "Community Hall", "High-Speed Internet"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6180722395535!2d80.2707!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f6f0c6c6f0c7%3A0xb3f6c5e4d9e1a2e3!2sChennai!5e0!3m2!1sen!2sin!4v1234567890"
  },
  3: {
    title: "Beach House",
    price: "₹2 Cr",
    location: "Goa, India",
    bedrooms: "5 BHK",
    bathrooms: "4 Bathrooms",
    area: "5000 sq ft",
    year: "Built: 2022",
    description: "Spectacular beachfront property with direct beach access, private jetty, and panoramic ocean views. Perfect for luxury living and investment.",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1583608694915-064fee7a7024?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1511576661531-b34c7c5aab4d?w=600&h=400&fit=crop"
    ],
    amenities: ["Beach Access", "Private Jetty", "Helipad", "Wine Cellar", "Spa", "Observation Deck"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.6180722395535!2d73.8279!3d15.4909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba6e1e1e1e1f%3A0xb3f6c5e4d9e1a2e3!2sGoa!5e0!3m2!1sen!2sin!4v1234567890"
  },
  4: {
    title: "Luxury Penthouse",
    price: "₹3.5 Cr",
    location: "Mumbai, India",
    bedrooms: "3 BHK",
    bathrooms: "3 Bathrooms",
    area: "2500 sq ft",
    year: "Built: 2023",
    description: "Exclusive penthouse with 360-degree city view, private sky lounge, and world-class amenities. Premium address in Mumbai.",
    images: [
      "https://images.unsplash.com/photo-1480074568708-e7b720bb3f3f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1512314889357-e0c47778de39?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop"
    ],
    amenities: ["Sky Lounge", "Concierge", "Private Elevator", "Wine Bar", "Home Cinema"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5!2d72.8479!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x9b9b9b9b9b9b!2sMumbai!5e0!3m2!1sen!2sin!4v1234567890"
  },
  5: {
    title: "Villa Complex",
    price: "₹95 Lakh",
    location: "Pune, India",
    bedrooms: "3 BHK",
    bathrooms: "2 Bathrooms",
    area: "1800 sq ft",
    year: "Built: 2023",
    description: "Gated villa community with excellent security, maintenance services, and recreational facilities. Ideal for families.",
    images: [
      "https://images.unsplash.com/photo-1496442097846-7ae963ef14b5?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop"
    ],
    amenities: ["Gated Security", "Community Garden", "Tennis Court", "Swimming Pool", "Jogging Track"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1!2d73.8479!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b63aceef0c69%3A0x9b9b9b9b9b9b!2sPune!5e0!3m2!1sen!2sin!4v1234567890"
  },
  6: {
    title: "Eco-Friendly Home",
    price: "₹1.5 Cr",
    location: "Hyderabad, India",
    bedrooms: "4 BHK",
    bathrooms: "3 Bathrooms",
    area: "2200 sq ft",
    year: "Built: 2023",
    description: "Sustainable architecture with solar panels, rainwater harvesting, and energy-efficient systems. Modern eco-living at its best.",
    images: [
      "https://images.unsplash.com/photo-1516594915910-c51f1db30deb?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1512314889357-e0c47778de39?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop"
    ],
    amenities: ["Solar Power", "Rainwater Harvesting", "Organic Garden", "Green Roof", "Zero-Waste System"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0!2d78.4744!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b6b0b0b0b1%3A0x9b9b9b9b9b9b!2sHyderabad!5e0!3m2!1sen!2sin!4v1234567890"
  }
};

// ============ RESTAURANT DATA ============
const restaurants = {
  1: {
    name: "Elegance Fine Dining",
    rating: "4.8",
    cuisine: "French, Continental",
    location: "Bangalore, India",
    description: "Award-winning fine dining restaurant with exquisite French cuisine and impeccable service. Perfect for special occasions.",
    images: [
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1504674900961-9f5815edf4a7?w=400&h=300&fit=crop"
    ],
    reviews: [
      { name: "John Doe", text: "Absolutely phenomenal experience! The food was exquisite.", rating: 5 },
      { name: "Sarah Khan", text: "Best fine dining in Bangalore. Highly recommended!", rating: 5 },
      { name: "Rajesh Nair", text: "Elegant ambiance and world-class service.", rating: 5 }
    ],
    facilities: ["Valet Parking", "Private Dining", "Wine Cellar", "Chef's Table", "Michelin Star"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6180722395535!2d77.6298!3d12.9352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1729f1e4c9e1%3A0xb3f6c5e4d9e1a2e3!2sBangalore!5e0!3m2!1sen!2sin!4v1234567890",
    phone: "+91-80-2345-6789"
  },
  2: {
    name: "La Bella Italia",
    rating: "4.6",
    cuisine: "Italian, Pasta",
    location: "Mumbai, India",
    description: "Authentic Italian restaurant with homemade pasta and traditional recipes straight from Italy.",
    images: [
      "https://images.unsplash.com/photo-1567655366169-8269849e9a12?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1555939594-58d7cb561049?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
    ],
    reviews: [
      { name: "Maria Rossi", text: "Authentic Italian taste! Feels like dining in Rome.", rating: 5 },
      { name: "Priya Singh", text: "Amazing pasta and pizza. Very fresh ingredients.", rating: 5 },
      { name: "Marco Lodi", text: "Best Italian outside Italy. Bravo!", rating: 5 }
    ],
    facilities: ["Wood-fired Oven", "Outdoor Seating", "Wine Selection", "Family Friendly", "Takeaway"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5!2d72.8479!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x9b9b9b9b9b9b!2sMumbai!5e0!3m2!1sen!2sin!4v1234567890",
    phone: "+91-22-1234-5678"
  },
  3: {
    name: "Orient Express",
    rating: "4.7",
    cuisine: "Asian Fusion, Japanese",
    location: "Delhi, India",
    description: "Premium asian fusion restaurant with fresh sushi, sashimi, and authentic Japanese techniques.",
    images: [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1553621042-f06b0ecae76d?w=400&h=300&fit=crop"
    ],
    reviews: [
      { name: "Akira Yamamoto", text: "Authentic Japanese preparation. Simply divine!", rating: 5 },
      { name: "Neha Sharma", text: "Best sushi in Delhi. Chef is incredibly skilled.", rating: 5 },
      { name: "Deepak Kumar", text: "Unique flavors and excellent presentation.", rating: 5 }
    ],
    facilities: ["Sushi Bar", "Tepanyaki Grill", "Bar Counter", "Private Rooms", "Sake Selection"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6180722395535!2d77.1025!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b6b0b0b0b1%3A0x9b9b9b9b9b9b!2sDelhi!5e0!3m2!1sen!2sin!4v1234567890",
    phone: "+91-11-3456-7890"
  },
  4: {
    name: "Skyline Lounge",
    rating: "4.5",
    cuisine: "Cocktails, Casual",
    location: "Bangalore, India",
    description: "Rooftop lounge with panoramic city views, craft cocktails, and vibrant nightlife atmosphere.",
    images: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1542849403-6f2dd92df0f0?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1448160521204-c33d5a00a5a3?w=400&h=300&fit=crop"
    ],
    reviews: [
      { name: "Alex Turner", text: "Best rooftop bar in the city! Amazing cocktails.", rating: 5 },
      { name: "Sneha Gupta", text: "Perfect for sunset drinks. Great ambiance!", rating: 4 },
      { name: "Rahul Bhat", text: "Skilled bartenders and excellent music.", rating: 5 }
    ],
    facilities: ["Rooftop Bar", "DJ Nights", "Cocktail Bar", "Lounge Seating", "Private Events"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6180722395535!2d77.6298!3d12.9352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1729f1e4c9e1%3A0xb3f6c5e4d9e1a2e3!2sBangalore!5e0!3m2!1sen!2sin!4v1234567890",
    phone: "+91-80-2345-6789"
  },
  5: {
    name: "Maharaja Palace",
    rating: "4.9",
    cuisine: "Indian, Mughlai",
    location: "Chennai, India",
    description: "Authentic Indian cuisine with royal Mughlai preparations and traditional recipes passed down for generations.",
    images: [
      "https://images.unsplash.com/photo-1585518419759-1b4fad5aaf4f?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1556867297522-411cf82efdb2?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1505253149230-18f556406b5e?w=400&h=300&fit=crop"
    ],
    reviews: [
      { name: "Fatima Khan", text: "Authentic Mughlai taste. Just like home cooking!", rating: 5 },
      { name: "Arjun Kumar", text: "Best Indian restaurant. Great flavors!", rating: 5 },
      { name: "Pooja Sharma", text: "Royal dining experience. Highly recommended!", rating: 5 }
    ],
    facilities: ["Tandoor", "Private Dining", "Bulk Catering", "Vegetarian Options", "Halal Certified"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6180722395535!2d80.2707!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f6f0c6c6f0c7%3A0xb3f6c5e4d9e1a2e3!2sChennai!5e0!3m2!1sen!2sin!4v1234567890",
    phone: "+91-44-2345-6789"
  },
  6: {
    name: "The Corner Cafe",
    rating: "4.4",
    cuisine: "Cafe, Casual",
    location: "Pune, India",
    description: "Cozy cafe with artisan coffee, fresh pastries, and relaxed ambiance. Perfect for work or casual meetups.",
    images: [
      "https://images.unsplash.com/photo-1537457519924-2d3726e93e26?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1495474472916-b85d387c4cb1?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop"
    ],
    reviews: [
      { name: "Emma Wilson", text: "The best cappuccino in Pune! Cozy atmosphere.", rating: 5 },
      { name: "Kavya Desai", text: "Pastries are fresh and delicious. Love this place!", rating: 4 },
      { name: "Nikhil Joshi", text: "Perfect for working and meeting friends.", rating: 4 }
    ],
    facilities: ["Free WiFi", "Outdoor Seating", "Pastries", "Espresso Bar", "Meeting Rooms"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1!2d73.8479!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b63aceef0c69%3A0x9b9b9b9b9b9b!2sPune!5e0!3m2!1sen!2sin!4v1234567890",
    phone: "+91-20-1234-5678"
  }
};

// Gallery image index
let currentPropertyImageIndex = 0;
let currentRestaurantImageIndex = 0;
let currentGalleryImageIndex = 0;
let currentRestaurant = 1;

// ============ PROPERTY MODAL ============
function openPropertyModal(propertyId) {
  const property = properties[propertyId];
  currentPropertyImageIndex = 0;
  
  document.getElementById("modalPropertyTitle").innerText = property.title;
  document.getElementById("modalPropertyPrice").innerText = property.price;
  document.getElementById("modalPropertyDescription").innerText = property.description;
  document.getElementById("modalBedrooms").innerText = property.bedrooms;
  document.getElementById("modalBathrooms").innerText = property.bathrooms;
  document.getElementById("modalArea").innerText = property.area;
  document.getElementById("modalYear").innerText = property.year;
  
  // Set image
  document.getElementById("modalPropertyImage").src = property.images[0];
  
  // Set amenities
  const amenitiesList = document.getElementById("amenitiesList");
  amenitiesList.innerHTML = property.amenities.map(a => `<li>${a}</li>`).join("");
  
  // Set map
  document.getElementById("propertyMap").src = property.mapUrl;
  
  // Show modal
  document.getElementById("propertyModal").style.display = "flex";
}

function closePropertyModal() {
  document.getElementById("propertyModal").style.display = "none";
}

function prevPropertyImage() {
  const property = properties[Object.keys(properties)[Object.values(properties).indexOf(
    properties[Object.keys(properties).find(k => properties[k].title === document.getElementById("modalPropertyTitle").innerText)]
  )]];
  
  const images = document.getElementById("modalPropertyImage").src.includes("1200") ? 
    properties[Object.keys(properties).find(k => properties[k].title === document.getElementById("modalPropertyTitle").innerText)].images :
    properties[Object.keys(properties).find(k => properties[k].title === document.getElementById("modalPropertyTitle").innerText)].images;
  
  currentPropertyImageIndex = (currentPropertyImageIndex - 1 + images.length) % images.length;
  document.getElementById("modalPropertyImage").src = images[currentPropertyImageIndex];
}

function nextPropertyImage() {
  const propertyId = Object.keys(properties).find(k => 
    properties[k].title === document.getElementById("modalPropertyTitle").innerText
  );
  const images = properties[propertyId].images;
  currentPropertyImageIndex = (currentPropertyImageIndex + 1) % images.length;
  document.getElementById("modalPropertyImage").src = images[currentPropertyImageIndex];
}

function openPropertyForm() {
  document.getElementById("propertyModal").style.display = "none";
  document.getElementById("registrationModal").style.display = "flex";
}

function closeRegistrationModal() {
  document.getElementById("registrationModal").style.display = "none";
}

function submitPropertyForm(event) {
  event.preventDefault();
  alert("Thank you for your interest! We will contact you soon with more details.");
  event.target.reset();
  closeRegistrationModal();
}

function shareProperty() {
  const title = document.getElementById("modalPropertyTitle").innerText;
  const text = `Check out this amazing property: ${title}`;
  
  if (navigator.share) {
    navigator.share({
      title: 'EstateBite Property',
      text: text,
      url: window.location.href
    });
  } else {
    alert(`Share: ${text}`);
  }
}

// ============ RESTAURANT MODAL ============
function openRestaurantModal(restaurantId) {
  const restaurant = restaurants[restaurantId];
  currentRestaurantImageIndex = 0;
  currentRestaurant = restaurantId;
  
  document.getElementById("modalRestaurantName").innerText = restaurant.name;
  document.getElementById("modalRating").innerText = `⭐ ${restaurant.rating}`;
  document.getElementById("modalCuisine").innerText = restaurant.cuisine;
  document.getElementById("modalLocation").innerText = restaurant.location;
  document.getElementById("modalRestaurantDescription").innerText = restaurant.description;
  
  // Set image
  document.getElementById("modalRestaurantImage").src = restaurant.images[0];
  
  // Set facilities
  const facilitiesList = document.getElementById("facilitiesList");
  facilitiesList.innerHTML = restaurant.facilities.map(f => `<li>${f}</li>`).join("");
  
  // Set reviews
  const reviewsDiv = document.getElementById("restaurantReviews");
  reviewsDiv.innerHTML = restaurant.reviews.map(r => `
    <div style="margin-bottom: 1rem; padding: 1rem; background: white; border-radius: 5px; border-left: 4px solid #667eea;">
      <strong>${r.name}</strong> <span style="color: #f8a106;">${'⭐'.repeat(r.rating)}</span>
      <p>${r.text}</p>
    </div>
  `).join("");
  
  // Set map
  document.getElementById("restaurantMap").src = restaurant.mapUrl;
  
  // Show modal
  document.getElementById("restaurantModal").style.display = "flex";
}

function closeRestaurantModal() {
  document.getElementById("restaurantModal").style.display = "none";
}

function prevRestaurantImage() {
  const restaurant = restaurants[currentRestaurant];
  currentRestaurantImageIndex = (currentRestaurantImageIndex - 1 + restaurant.images.length) % restaurant.images.length;
  document.getElementById("modalRestaurantImage").src = restaurant.images[currentRestaurantImageIndex];
}

function nextRestaurantImage() {
  const restaurant = restaurants[currentRestaurant];
  currentRestaurantImageIndex = (currentRestaurantImageIndex + 1) % restaurant.images.length;
  document.getElementById("modalRestaurantImage").src = restaurant.images[currentRestaurantImageIndex];
}

// ============ RESTAURANT BOOKING ============
function openRestaurantBooking(restaurantId) {
  currentRestaurant = restaurantId;
  document.getElementById("restaurantModal").style.display = "none";
  document.getElementById("bookingModal").style.display = "flex";
}

function closeBookingModal() {
  document.getElementById("bookingModal").style.display = "none";
}

function submitRestaurantBooking(event) {
  event.preventDefault();
  alert("Booking confirmed! You will receive a confirmation email shortly. Thank you for choosing our restaurant!");
  event.target.reset();
  closeBookingModal();
  
  // Show payment modal or redirect to payment
  setTimeout(() => {
    window.location.href = "https://rzp.io/i/w2CEwbJ"; // Demo Razorpay link
  }, 1000);
}

// ============ GALLERY MODAL ============
let currentGalleryRestaurant = 1;

function openGallery(restaurantId) {
  currentGalleryRestaurant = restaurantId;
  currentGalleryImageIndex = 0;
  const restaurant = restaurants[restaurantId];
  document.getElementById("galleryImage").src = restaurant.images[0];
  document.getElementById("galleryCounter").innerText = `1 / ${restaurant.images.length}`;
  document.getElementById("galleryModal").style.display = "flex";
}

function closeGalleryModal() {
  document.getElementById("galleryModal").style.display = "none";
}

function prevGalleryImage() {
  const restaurant = restaurants[currentGalleryRestaurant];
  currentGalleryImageIndex = (currentGalleryImageIndex - 1 + restaurant.images.length) % restaurant.images.length;
  document.getElementById("galleryImage").src = restaurant.images[currentGalleryImageIndex];
  document.getElementById("galleryCounter").innerText = `${currentGalleryImageIndex + 1} / ${restaurant.images.length}`;
}

function nextGalleryImage() {
  const restaurant = restaurants[currentGalleryRestaurant];
  currentGalleryImageIndex = (currentGalleryImageIndex + 1) % restaurant.images.length;
  document.getElementById("galleryImage").src = restaurant.images[currentGalleryImageIndex];
  document.getElementById("galleryCounter").innerText = `${currentGalleryImageIndex + 1} / ${restaurant.images.length}`;
}

// ============ CONTACT & CALL FUNCTIONS ============
function callNow(type) {
  if (type === 'property') {
    window.location.href = "tel:+971503567945";
    alert("Opening phone app to call: +971-50-356-7945");
  } else if (type === 'restaurant') {
    const phone = restaurants[currentRestaurant]?.phone || "+971-503567945";
    window.location.href = `tel:${phone}`;
    alert(`Opening phone app to call: ${phone}`);
  } else {
    alert("Calling EstateBite: +971-50-356-7945");
    window.location.href = "tel:+971503567945";
  }
}

function openWhatsApp() {
  const phoneNumber = "919715207988"; // +91 97152 07988 without + and spaces
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  window.open(whatsappUrl, '_blank');
}

function submitContactForm(event) {
  event.preventDefault();
  alert("Thank you for contacting us! We will get back to you within 24 hours.");
  event.target.reset();
}

// ============ ENQUIRY MODAL FUNCTIONS ============
function showEnquiryModal() {
  const modal = document.getElementById('enquiryModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeEnquiryModal() {
  const modal = document.getElementById('enquiryModal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto'; // Restore scrolling
}

function submitEnquiry(event) {
  event.preventDefault();
  alert("Thank you for your enquiry! Our property experts will contact you within 24 hours with the best property options.");
  closeEnquiryModal();
  event.target.reset();
}

// Show enquiry modal on page load (after 3 seconds)
window.addEventListener('load', function() {
  setTimeout(function() {
    // Check if user hasn't seen the modal in this session
    if (!sessionStorage.getItem('enquiryShown')) {
      showEnquiryModal();
      sessionStorage.setItem('enquiryShown', 'true');
    }
  }, 3000); // 3 seconds delay
});

// ============ CLOSE MODALS ON OUTSIDE CLICK ============
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = "none";
  }
  if (event.target.classList.contains('enquiry-modal')) {
    closeEnquiryModal();
  }
}

// ============ SMOOTH SCROLL FOR NAVIGATION ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '#home') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
