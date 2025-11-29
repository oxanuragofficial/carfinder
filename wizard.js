/* wizard.js - Enhanced with search and auto-advance */
const COUNTRIES = [
  "India","United States","United Kingdom","Canada","Australia","Germany","France",
  "Italy","Spain","China","Japan","South Korea","Brazil","Russia","Mexico",
  "Argentina","South Africa","New Zealand","Indonesia","Malaysia","Singapore",
  "UAE","Saudi Arabia","Pakistan","Bangladesh","Sri Lanka","Nepal","Bhutan",
  "Thailand","Vietnam","Philippines","Egypt","Turkey","Iran","Iraq","Israel",
  "Sweden","Norway","Finland","Denmark","Poland","Netherlands","Belgium",
  "Portugal","Greece","Ukraine","Ireland","Switzerland","Austria","Czech Republic",
  "Hungary","Kenya","Nigeria","Colombia","Peru","Chile","Qatar","Kuwait",
  "Oman","Bahrain","Myanmar","Cambodia","Laos"
];

const QUESTIONS = [
  { 
    q: "What type of car body do you prefer?", 
    key:'body', 
    options: ["Hatchback - Compact & City-friendly", "Sedan - Comfortable & Spacious", "SUV - Versatile & Powerful", "MUV - Family & Practical", "Coupe - Sporty & Stylish", "Convertible - Open & Fun"] 
  },
  { 
    q: "Which fuel type suits your lifestyle?", 
    key:'fuel', 
    options: ["Petrol - Balanced Performance", "Diesel - Great Mileage", "CNG - Most Economical", "Hybrid - Best of Both Worlds", "Electric - Eco-Friendly & Modern"] 
  },
  { 
    q: "What's your budget range?", 
    key:'budget', 
    options: ["Under ₹5 Lakhs - Budget Smart", "₹5-10 Lakhs - Great Value", "₹10-20 Lakhs - Premium Choice", "₹20-50 Lakhs - Luxury Segment", "₹50 Lakhs - 1 Crore - Executive Class", "Above ₹1 Crore - Ultimate Luxury"] 
  },
  { 
    q: "How many seats do you need?", 
    key:'seats', 
    options: ["2 - Sporty & Compact", "4-5 - Perfect for Family", "6-7 - Large Family & Friends", "7+ - Maximum Capacity"] 
  },
  { 
    q: "Where are you located? (Helps find local availability)", 
    key:'country', 
    search: true, 
    options: COUNTRIES 
  },
  { 
    q: "What's your primary driving environment?", 
    key:'usage', 
    options: ["City Driving - Stop & Go Traffic", "Highway Cruising - Long Distance", "Mixed Use - City & Highway", "Off-road Adventures - Rough Terrain"] 
  },
  { 
    q: "What's your driving personality? 🚗", 
    key:'personality', 
    options: ["Adventure Seeker - Off-road & Explore", "Family First - Safety & Comfort", "Tech Enthusiast - Latest Features", "Performance Lover - Speed & Power", "Eco Warrior - Green & Efficient", "Luxury Hunter - Premium & Status"] 
  }
];
// Back button and page navigation fix
window.addEventListener('pageshow', function(event) {
  // Hide loader when page is shown (including back/forward navigation)
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.display = 'none';
  }
  
  // Reset wizard state if coming back via back button
  if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
    wIndex = 0;
    ANSWERS = {};
    renderQuestion(0);
  }
});

// Also hide loader on page load
document.addEventListener('DOMContentLoaded', function() {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.display = 'none';
  }
});
let wIndex = 0;
let ANSWERS = {};

function renderQuestion(i) {
  const q = QUESTIONS[i];
  document.getElementById('progressText').innerText = `Question ${i+1} of ${QUESTIONS.length}`;
  document.getElementById('questionText').innerText = q.q;
  const box = document.getElementById('optionsBox');
  box.innerHTML = '';
  function generatePersonalizedRecommendations() {
  // This enhances the scoring in browse.html with personalized logic
  const recommendations = {
    body: ANSWERS.body,
    fuel: ANSWERS.fuel,
    budget: ANSWERS.budget,
    personality: ANSWERS.personality,
    usage: ANSWERS.usage,
    timestamp: new Date().toISOString()
  };
  
  localStorage.setItem('cf_recommendations', JSON.stringify(recommendations));
}
  // Add search functionality for country question
  if (q.search) {
    const searchContainer = document.createElement('div');
    searchContainer.className = 'country-search-container';
    searchContainer.innerHTML = `
      <input type="text" class="country-search" placeholder="Search for your country..." />
      <div class="country-dropdown"></div>
    `;
    box.appendChild(searchContainer);
    
    const searchInput = searchContainer.querySelector('.country-search');
    const dropdown = searchContainer.querySelector('.country-dropdown');
    
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      const filteredCountries = COUNTRIES.filter(country => 
        country.toLowerCase().includes(searchTerm)
      );
      
      dropdown.innerHTML = filteredCountries.slice(0, 10).map(country => 
        `<div class="country-option">${country}</div>`
      ).join('');
      
      dropdown.style.display = filteredCountries.length ? 'block' : 'none';
      
      // Add click handlers for dropdown options
      dropdown.querySelectorAll('.country-option').forEach(option => {
        option.addEventListener('click', function() {
          searchInput.value = this.textContent;
          dropdown.style.display = 'none';
          selectAnswer(q.key, this.textContent);
        });
      });
    });
    
    searchInput.addEventListener('focus', function() {
      if (this.value) {
        dropdown.style.display = 'block';
      }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!searchContainer.contains(e.target)) {
        dropdown.style.display = 'none';
      }
    });
    
    // Set current value if exists
    if (ANSWERS[q.key]) {
      searchInput.value = ANSWERS[q.key];
    }
  } 
  // Regular options
  else if (q.options) {
    q.options.forEach(opt => {
      const d = document.createElement('div');
      d.className = 'option';
      if (ANSWERS[q.key] === opt) {
        d.classList.add('selected');
      }
      d.tabIndex = 0;
      d.innerText = opt;
      d.onclick = () => { selectAnswer(q.key, opt); };
      box.appendChild(d);
    });
  }
  
  document.getElementById('prevBtn').disabled = i === 0;
  document.getElementById('nextBtn').innerText = (i === QUESTIONS.length - 1) ? 'Find My Car!' : 'Next';
  
  // Entrance animation
  const card = document.getElementById('wizardCard');
  card.style.transform = 'translateY(12px)';
  card.style.opacity = '0';
  setTimeout(() => { 
    card.style.transform = 'translateY(0)'; 
    card.style.opacity = '1'; 
  }, 80);
}

function selectAnswer(key, val) {
  ANSWERS[key] = val;
  
  // Update UI to show selection
  const options = document.querySelectorAll('.option');
  options.forEach(option => {
    option.classList.remove('selected');
    if (option.innerText === val) {
      option.classList.add('selected');
    }
  });
  
  // Auto-advance after short delay for better UX
  setTimeout(() => { 
    nextQuestion(); 
  }, 600);
}

function nextQuestion() {
  const q = QUESTIONS[wIndex];
  
  // Validate current question has an answer
  if (!ANSWERS[q.key]) {
    // Add shake animation to indicate required field
    const card = document.getElementById('wizardCard');
    card.style.animation = 'shake 0.5s ease-in-out';
    setTimeout(() => { card.style.animation = ''; }, 500);
    return;
  }
  
  if (wIndex < QUESTIONS.length - 1) {
    wIndex++;
    renderQuestion(wIndex);
} else {
  // Finished - store answers and navigate to browse with recommendations
  localStorage.setItem('cf_answers', JSON.stringify(ANSWERS));
  
  // Generate personalized recommendations
  generatePersonalizedRecommendations();
  
  // Show loader briefly
  const ld = document.getElementById('loader');
  if (ld) {
    ld.style.display = 'flex';
    
    // Safety timeout to hide loader in case redirect fails
    setTimeout(() => {
      if (ld) {
        ld.style.display = 'none';
      }
    }, 3000); // Hide after 3 seconds max
  }
  
  // Redirect to browse page
  setTimeout(() => { 
    window.location.href = 'browse.html'; 
  }, 800);
}
}

function prevQuestion() {
  if (wIndex > 0) { 
    wIndex--; 
    renderQuestion(wIndex); 
  }
}

function generatePersonalizedRecommendations() {
  // This enhances the scoring in browse.html with personalized logic
  const recommendations = {
    body: ANSWERS.body,
    fuel: ANSWERS.fuel,
    budget: ANSWERS.budget,
    personality: ANSWERS.personality,
    usage: ANSWERS.usage,
    timestamp: new Date().toISOString()
  };
  
  localStorage.setItem('cf_recommendations', JSON.stringify(recommendations));
}

// Add shake animation for validation
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-8px); }
    75% { transform: translateX(8px); }
  }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', () => {
  renderQuestion(0);
  try { 
    if (window.gsap) {
      gsap.from('#wizardCard', { scale: 0.98, opacity: 0, duration: 0.8, ease: "power2.out" }); 
    }
  } catch(e) {}
  
  document.getElementById('nextBtn').addEventListener('click', nextQuestion);
  document.getElementById('prevBtn').addEventListener('click', prevQuestion);
  
  // Add keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      nextQuestion();
    } else if (e.key === 'ArrowLeft' && wIndex > 0) {
      prevQuestion();
    }
  });
});