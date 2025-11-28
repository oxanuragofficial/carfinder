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
