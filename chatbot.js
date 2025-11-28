// chatbot.js - small rule-based assistant
document.addEventListener('DOMContentLoaded', ()=>{
  const chatBtn = document.getElementById('chatBtn');
  if(chatBtn) chatBtn.addEventListener('click', openChat);
  // create widget
  const widget = document.createElement('div'); widget.id='chatWidget';
  widget.innerHTML = `<div id="chatHeader">CarFinder Assistant <button id="closeChat" style="float:right;background:transparent;border:none;color:white;cursor:pointer">✖</button></div><div id="chatBody"><div class="msg bot">Hi! I can help you find cars. Try: "suggest SUVs under 10 lakh"</div></div><div id="chatInputRow"><input id="chatInput" placeholder="Ask me..." /><button id="sendChat" class="btn primary">Send</button></div>`;
  document.body.appendChild(widget);
  document.getElementById('closeChat').addEventListener('click', ()=>{ widget.style.display='none'; });
  document.getElementById('sendChat').addEventListener('click', ()=>processChat());
  document.getElementById('chatInput').addEventListener('keydown', (e)=>{ if(e.key==='Enter') processChat(); });

  window.openChat = function(){ widget.style.display='block'; }
  function append(msg, who='bot'){ const b=document.getElementById('chatBody'); const el = document.createElement('div'); el.className='msg '+who; el.style.margin='8px 0'; el.innerText=msg; b.appendChild(el); b.scrollTop = b.scrollHeight; }

  function processChat(){
    const v = document.getElementById('chatInput').value.trim();
    if(!v) return;
    append(v,'user');
    document.getElementById('chatInput').value='';
    // simple parsing
    const q = v.toLowerCase();
    if(q.includes('suv') || q.includes('suvs')){
      const under = q.match(/under\s*(\d+)/);
      let limit = under ? parseFloat(under[1]) : 12;
      const matches = cars.filter(c=>c.body.toLowerCase().includes('suv') && c.price<=limit).slice(0,6);
      if(matches.length===0) append('No SUVs found under that limit. Try a higher budget.');
      else append('Here are some SUVs: ' + matches.map(m=>`${m.brand} ${m.model} (${m.price}L)`).join('; '));
    } else if(q.includes('recommend') || q.includes('suggest')){
      const matches = cars.slice(0,6);
      append('I recommend: ' + matches.map(m=>`${m.brand} ${m.model} (${m.price}L)`).join('; '));
    } else if(q.includes('how') || q.includes('help')){
      append('You can ask: "suggest SUVs under 10", "show hatchbacks", or open Find to answer 7 questions.');
    } else {
      append('Sorry — I did not understand. Try: "suggest SUVs under 10" or "recommend 5 seater petrol"');
    }
  }
});
