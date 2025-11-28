/* wizard.js - enhanced */
// Full country list
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
  { q: "Choose your body type", key:'body', options: ["Hatchback","Sedan","SUV","MUV","Coupe","Convertible"] },
  { q: "Preferred fuel?", key:'fuel', options: ["Petrol","Diesel","CNG","Hybrid","Electric"] },
  { q: "Your Budget ?", key:'budget', options: ["Under 5 (Lakhs)","Under 10 (Lakhs)","Under 15 (Lakhs)","Under 20 (Lakhs)","under 50 (lakhs)","Under 1 CR"] },
  { q: "How many seats?", key:'seats', options: ["4","5","6","7+"] },
  { q: "Select your country", key:'country', dropdown: true, options: COUNTRIES },
  { q: "Where will you drive most?", key:'usage', options: ["City","Highway","Mixed","Offroad"] },
  { q: "Any special feature? (optional)", key:'feature', input:true }
];

let wIndex=0;
let ANSWERS = {};

function renderQuestion(i){
  const q = QUESTIONS[i];
  document.getElementById('progressText').innerText = `Question ${i+1} of ${QUESTIONS.length}`;
  document.getElementById('questionText').innerText = q.q;
  const box = document.getElementById('optionsBox');
  box.innerHTML='';
  if(q.options){
    q.options.forEach(opt=>{
      const d = document.createElement('div');
      d.className='option';
      d.tabIndex=0;
      d.innerText = opt;
      d.onclick = ()=>{ selectAnswer(q.key, opt); };
      box.appendChild(d);
    });
  }
  if(q.input){
    const inp = document.createElement('input');
    inp.className='input-text';
    inp.placeholder='Type here...';
    inp.value = ANSWERS[q.key]||'';
    box.appendChild(inp);
  }
  document.getElementById('prevBtn').disabled = i===0;
  document.getElementById('nextBtn').innerText = (i===QUESTIONS.length-1)?'Finish':'Next';
  // small entrance animation
  const card = document.getElementById('wizardCard');
  card.style.transform='translateY(12px)';
  card.style.opacity='0';
  setTimeout(()=>{ card.style.transform='translateY(0)'; card.style.opacity='1'; },80);
}

function selectAnswer(key, val){
  ANSWERS[key]=val;
  // quick pulse for selection
  const el = Array.from(document.querySelectorAll('.option')).find(x=>x.innerText===val);
  if(el){ el.style.background='linear-gradient(90deg,#7c3aed,#4f46e5)'; el.style.color='#fff'; setTimeout(()=>{ el.style.background=''; el.style.color=''; },600); }
  // auto-next small delay for UX
  setTimeout(()=>{ nextQuestion(); },350);
}

function nextQuestion(){
  const q = QUESTIONS[wIndex];
  if(q.input){
    const v = document.querySelector('#optionsBox input')?.value || '';
    ANSWERS[q.key] = v.trim();
  }
  if(wIndex < QUESTIONS.length-1){
    wIndex++;
    renderQuestion(wIndex);
  } else {
    // finished - store answers and navigate to browse
    localStorage.setItem('cf_answers', JSON.stringify(ANSWERS));
    // show loader
    const ld=document.getElementById('loader');
    if(ld) ld.style.display='flex';
    setTimeout(()=>{ window.location.href='browse.html'; },900);
  }
}

function prevQuestion(){
  if(wIndex>0){ wIndex--; renderQuestion(wIndex); }
}

document.addEventListener('DOMContentLoaded', ()=>{
  renderQuestion(0);
  try{ if(window.gsap) gsap.from('#wizardCard',{scale:0.98,opacity:0,duration:0.6}); }catch(e){}
  document.getElementById('nextBtn').addEventListener('click', nextQuestion);
  document.getElementById('prevBtn').addEventListener('click', prevQuestion);
});
