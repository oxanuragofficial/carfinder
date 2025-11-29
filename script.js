/* script.js - global */
window.addEventListener('load', ()=>{
  setTimeout(()=>{
    const ld = document.getElementById('loader');
    if(ld) ld.style.display='none';
    // GSAP entrance for hero if present
    try{ if(window.gsap){ gsap.from('.hero .hero-content',{y:40,opacity:0,duration:0.9,ease:'power3.out'}); } }catch(e){}
  },900);

  // theme restored
  const pref = localStorage.getItem('cf_theme') || 'light';
  setTheme(pref);
  const btn = document.getElementById('themeToggle');
  if(btn) btn.addEventListener('click', ()=>{
    const current = document.body.classList.contains('theme-dark') ? 'dark' : 'light';
    const next = current==='dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('cf_theme', next);
  });
});

function setTheme(mode){
  if(mode==='dark'){ document.body.classList.remove('theme-light'); document.body.classList.add('theme-dark'); const b=document.getElementById('themeToggle'); if(b) b.innerText='Light'; }
  else { document.body.classList.remove('theme-dark'); document.body.classList.add('theme-light'); const b=document.getElementById('themeToggle'); if(b) b.innerText='Dark'; }
}

function createEl(html){
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstChild;
}
// ===== MOBILE MENU FUNCTIONALITY =====
function initMobileMenu() {
  // Create mobile menu button if it doesn't exist
  const existingMobileBtn = document.querySelector('.mobile-menu-btn');
  if (!existingMobileBtn) {
    const nav = document.querySelector('.nav');
    const navRight = document.querySelector('.nav-right');
    
    if (nav && navRight) {
      const mobileBtn = document.createElement('button');
      mobileBtn.className = 'mobile-menu-btn';
      mobileBtn.innerHTML = '☰';
      mobileBtn.setAttribute('aria-label', 'Toggle menu');
      
      // Insert button before nav-right
      nav.insertBefore(mobileBtn, navRight);
      
      // Add click event
      mobileBtn.addEventListener('click', function() {
        navRight.classList.toggle('active');
        mobileBtn.innerHTML = navRight.classList.contains('active') ? '✕' : '☰';
      });
      
      // Close menu when clicking on links
      const navLinks = navRight.querySelectorAll('a');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          navRight.classList.remove('active');
          mobileBtn.innerHTML = '☰';
        });
      });
      
      // Close menu when clicking outside
      document.addEventListener('click', function(event) {
        if (!nav.contains(event.target)) {
          navRight.classList.remove('active');
          mobileBtn.innerHTML = '☰';
        }
      });
    }
  }
}

// Initialize mobile menu when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMobileMenu);
} else {
  initMobileMenu();
}