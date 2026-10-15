(function(){var s=document.createElement('script');s.src='coach.js';document.body.appendChild(s);})();
/* ===================================================
   AXIUM — script.js (complete, single file)
   =================================================== */

/* ---------- 1) Welcome loader ---------- */
(function(){
  const f=document.getElementById('loader-fill'), p=document.getElementById('loader-percent'), w=document.getElementById('welcome-screen');
  let pr=0;
  const t=setInterval(()=>{
    pr+=2+Math.random();
    if(pr>=100){ pr=100; clearInterval(t); p.textContent='100%'; f.style.width='100%'; setTimeout(()=>w.classList.add('hidden'),400); }
    else { p.textContent=Math.floor(pr)+'%'; f.style.width=pr+'%'; }
  },30);
})();

/* ---------- 2) Helpers ---------- */
function toast(msg){
  let t=document.getElementById('toast');
  if(!t){ t=document.createElement('div'); t.id='toast';
    t.style.cssText='position:fixed;left:50%;bottom:90px;transform:translateX(-50%) translateY(20px);background:rgba(20,26,38,0.95);color:#eef2f7;border:1px solid rgba(43,125,255,0.4);padding:12px 22px;border-radius:30px;font-size:0.85rem;font-weight:700;box-shadow:0 10px 30px rgba(0,0,0,0.5);opacity:0;pointer-events:none;transition:all .35s;z-index:9000;backdrop-filter:blur(10px);';
    document.body.appendChild(t);
  }
  t.textContent=msg;
  requestAnimationFrame(()=>{ t.style.opacity='1'; t.style.transform='translateX(-50%) translateY(0)'; });
  clearTimeout(t._h); t._h=setTimeout(()=>{ t.style.opacity='0'; t.style.transform='translateX(-50%) translateY(20px)'; },2200);
}
function press(el){ el.style.transform='scale(0.9)'; setTimeout(()=>{ el.style.transform=''; },150); }
function goTo(sel){ const el=document.querySelector(sel); if(el) el.scrollIntoView({behavior:'smooth', block:'center'}); }
function setCell(id,percent){ const el=document.getElementById(id); if(el) el.style.width=percent+'%'; }
function animateCounter(id,end,suffix=''){ const el=document.getElementById(id); if(!el)return; let c=0; const s=end/40; const iv=setInterval(()=>{ c+=s; if(c>=end){c=end;clearInterval(iv);} el.textContent=Math.floor(c)+suffix; },30); }
function startClock(){ const c=document.getElementById('live-clock'); if(!c)return; const tick=()=>{ c.textContent=new Date().toLocaleTimeString('en-GB'); }; tick(); setInterval(tick,1000); }
function typeGreeting(){
  const el=document.getElementById('type-text'); if(!el)return;
  const full='Good afternoon, '; let i=0;
  const t=setInterval(()=>{
    el.innerHTML=full.slice(0,i)+'<span class="name-glow">Alireza</span>'.slice(0, Math.max(0, i-full.length));
    i++; if(i>full.length+7){ clearInterval(t); el.innerHTML=full+'<span class="name-glow">Alireza</span>'; }
  },60);
}
function initReveal(){
  if(!('IntersectionObserver' in window)){ document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in')); return; }
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('in');
        if(e.target.classList.contains('week-chart')) animateCounter('wc-avg',60,'%');
        io.unobserve(e.target);
      }
    });
  },{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
}

/* ---------- 3) Enter dashboard ---------- */
const enterBtn=document.getElementById('enter-dashboard'), hero=document.getElementById('hero'),
      dashBg=document.getElementById('dashboard-bg'), dashboard=document.getElementById('dashboard'),
      flash=document.getElementById('flash');
enterBtn.addEventListener('click',()=>{
  enterBtn.classList.add('activated');
  document.getElementById('glow-border').classList.add('hidden');
  document.getElementById('orbit-container').classList.add('hidden');
  document.querySelectorAll('.corner-accent').forEach(c=>c.classList.add('hidden'));
  setTimeout(()=>{ flash.classList.add('on'); },350);
  setTimeout(()=>{
    hero.classList.add('hidden');
    dashBg.style.transition='opacity 0.5s'; dashBg.style.opacity='0';
    flash.classList.remove('on');
    setTimeout(()=>{
      dashBg.style.display='none'; hero.style.display='none';
      window.scrollTo({top:0, behavior:'auto'});
      dashboard.classList.add('active');
      startLiving();
    },450);
  },750);
});
function startLiving(){
  startClock(); typeGreeting(); initReveal();
  setTimeout(()=>{ animateCounter('energy-score',92,'%'); },900);
  setTimeout(()=>{ setCell('cf1',80); setCell('cf2',60); setCell('cf3',90); },1200);
  setTimeout(()=>{ animateCounter('cube-score',86); },2200);
  setTimeout(()=>{ animateCounter('stat-tasks',12); animateCounter('stat-focus',4,'h'); animateCounter('stat-streak',12); },1200);
  setTimeout(()=>{ const f=document.getElementById('focus-fill'); if(f) f.style.strokeDashoffset='66'; },3000);
}

/* ---------- 4) Robot AI icon ---------- */
(function(){
  let ai=document.querySelector('.ic-ai');
  if(!ai){ const c=document.querySelectorAll('.feature .icon-circle'); if(c.length) ai=c[0]; }
  if(ai){ ai.innerHTML='<svg viewBox="0 0 48 48" fill="none"><line x1="24" y1="8" x2="24" y2="13" stroke="#2b7dff" stroke-width="2"/><circle cx="24" cy="7" r="2.2" fill="#00c2d6"/><rect x="12" y="13" width="24" height="18" rx="6" stroke="#2b7dff" stroke-width="2" fill="rgba(43,125,255,0.12)"/><circle cx="19" cy="22" r="2.4" fill="#9cc8ff"/><circle cx="29" cy="22" r="2.4" fill="#9cc8ff"/><path d="M19 26.5 q5 3.5 10 0" stroke="#9cc8ff" stroke-width="2" stroke-linecap="round" fill="none"/><line x1="9" y1="20" x2="12" y2="20" stroke="#2b7dff" stroke-width="2"/><line x1="36" y1="20" x2="39" y2="20" stroke="#2b7dff" stroke-width="2"/></svg>'; }
})();

/* ---------- 5) Tasks: count + create ---------- */
function refreshTaskCount(){
  const rows=[...document.querySelectorAll('.tasks-card .task-row')];
  const left=rows.filter(r=>!r.classList.contains('done')).length;
  const gc=document.querySelector('.gc-count'); if(gc) gc.textContent=left+' left';
}
function makeTaskRow(name){
  const row=document.createElement('div'); row.className='task-row';
  row.innerHTML='<div class="task-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg></div><span class="task-text"></span><span class="task-time">now</span>';
  row.querySelector('.task-text').textContent=name;
  row.addEventListener('click',()=>{ row.classList.toggle('done'); refreshTaskCount(); });
  return row;
}
function addInputRow(container, placeholder, onCommit, btnClass){
  const wrap=document.createElement('div'); wrap.className='task-add';
  wrap.innerHTML='<input class="task-input" placeholder="'+placeholder+'"><button class="'+btnClass+'">Add</button>';
  container.appendChild(wrap);
  const inp=wrap.querySelector('input'); setTimeout(()=>inp.focus(),50);
  const commit=()=>{ const v=inp.value.trim(); if(!v){ toast('Type a name first ✍️'); return; } onCommit(v); wrap.remove(); };
  wrap.querySelector('button').addEventListener('click',commit);
  inp.addEventListener('keydown',e=>{ if(e.key==='Enter')commit(); });
}
document.querySelectorAll('.tasks-card .task-row').forEach(r=>{
  r.addEventListener('click',()=>{ r.classList.toggle('done'); refreshTaskCount(); });
});

/* ---------- 6) Focus timer ---------- */
let focusSec=1500, focusInt=null;
const focusTimeEl=document.querySelector('.focus-time');
const focusBtnEl=document.getElementById('focus-play');
function fmtFocus(s){ const m=Math.floor(s/60), ss=s%60; return (m<10?'0':'')+m+':'+(ss<10?'0':'')+ss; }
function stopFocus(){ clearInterval(focusInt); focusInt=null; if(focusBtnEl)focusBtnEl.textContent='▶ Start'; toast('Focus paused ⏸'); }
function startFocus(){
  if(focusInt)return;
  if(focusBtnEl)focusBtnEl.textContent='❚❚ Pause';
  toast('Focus started ▶ 25:00');
  focusInt=setInterval(()=>{
    focusSec--;
    if(focusSec<=0){ focusSec=1500; clearInterval(focusInt); focusInt=null; if(focusBtnEl)focusBtnEl.textContent='▶ Start'; toast('Focus session complete 🎉'); }
    if(focusTimeEl)focusTimeEl.textContent=fmtFocus(focusSec);
    const ring=document.getElementById('focus-fill'); if(ring)ring.style.strokeDashoffset=264*(1-focusSec/1500);
  },1000);
}
if(focusBtnEl) focusBtnEl.addEventListener('click',()=>{ press(focusBtnEl); if(focusInt)stopFocus(); else startFocus(); });

/* ---------- 7) Chat sheet ---------- */
let chatSheet=null; let ri=0;
const replies=['Got it! I suggest tackling "AXIUM design" first — your focus peaks now.','Nice! Want me to block 25 min for it?','Your energy dips after 4 PM; I moved low-effort tasks there.','Done! I updated your schedule.'];
function openChat(){
  if(!chatSheet){
    chatSheet=document.createElement('div'); chatSheet.className='chat-sheet';
    chatSheet.innerHTML='<div class="chat-head"><span>🤖 AXIUM Coach</span><button class="chat-close">✕</button></div><div class="chat-msgs"></div><div class="chat-input-row"><input class="task-input" placeholder="Message AXIUM..."><button class="task-add-btn">Send</button></div>';
    document.body.appendChild(chatSheet);
    const msgs=chatSheet.querySelector('.chat-msgs');
    const push=(txt,who)=>{ const m=document.createElement('div'); m.className='msg '+who; m.textContent=txt; msgs.appendChild(m); msgs.scrollTop=msgs.scrollHeight; };
    push('Hi! How can I help you today?','ai');
    chatSheet.querySelector('.chat-close').addEventListener('click',()=>chatSheet.classList.remove('open'));
    const send=()=>{ const inp=chatSheet.querySelector('.chat-input-row input'); const v=inp.value.trim(); if(!v)return; push(v,'me'); inp.value=''; setTimeout(()=>push(replies[ri++%replies.length],'ai'),600); };
    chatSheet.querySelector('.task-add-btn').addEventListener('click',send);
    chatSheet.querySelector('.chat-input-row input').addEventListener('keydown',e=>{ if(e.key==='Enter')send(); });
  }
  chatSheet.classList.add('open');
}

/* ---------- 8) State: water & sounds ---------- */
let water=0, soundsOn=false;

/* ---------- 9) Quick chips: REAL actions ---------- */
document.querySelectorAll('.qa-chip').forEach((chip,i)=>{
  chip.addEventListener('click',()=>{
    press(chip);
    if(i===0){
      const card=document.querySelector('.tasks-card');
      if(card){ addInputRow(card,'Task name...',(v)=>{ card.insertBefore(makeTaskRow(v), card.querySelector('.task-add')); refreshTaskCount(); toast('Task added ✅'); },'task-add-btn'); }
    }
    else if(i===1){ goTo('.focus-card'); startFocus(); }
    else if(i===2){
      const nr=document.querySelector('.note-row');
      if(nr){ addInputRow(nr,'Note...',(v)=>{ const n=document.createElement('div'); n.className='note-line'; n.innerHTML='<span class="note-dot"></span><span></span>'; n.lastChild.textContent=v; nr.appendChild(n); toast('Note added 📝'); },'note-add-btn'); }
    }
    else if(i===3){ openChat(); }
    else if(i===4){ soundsOn=!soundsOn; document.body.classList.toggle('sounds-on',soundsOn); chip.innerHTML= soundsOn?'🎧 Sounds ON':'🎧 Focus Sounds'; toast(soundsOn?'Focus sounds ON 🎧':'Focus sounds OFF 🔇'); }
    else if(i===5){ water++; chip.innerHTML='🥤 Water × '+water; toast('Water logged 💧 ('+water+')'); }
  });
});

/* ---------- 10) Rail: active + jump ---------- */
const railTargets=[null,'.tasks-card','.schedule','.ai-insights',null];
document.querySelectorAll('.rail-item').forEach((item,i)=>{
  item.addEventListener('click',()=>{
    press(item);
    document.querySelectorAll('.rail-item').forEach(x=>x.classList.remove('active'));
    item.classList.add('active');
    if(i===4){ const mb=document.getElementById('menu-btn'); if(mb)mb.click(); }
    else if(railTargets[i]){ goTo(railTargets[i]); }
    else { window.scrollTo({top:0,behavior:'smooth'}); }
  });
});

/* ---------- 11) AI chips ---------- */
document.querySelectorAll('.ai-chip').forEach((c,i)=>{
  c.addEventListener('click',()=>{ press(c); if(i===0){ goTo('.tasks-card'); toast('Suggestions applied ✨'); } else { goTo('.week-chart'); toast('Showing your patterns 📈'); } });
});

/* ---------- 12) Cells jump ---------- */
const cellTargets=['.tasks-card','.focus-card','.week-chart'];
document.querySelectorAll('.cell').forEach((cell,i)=>{
  cell.addEventListener('click',()=>{ press(cell); goTo(cellTargets[i]); });
});

/* ---------- 13) Drawer + Notifications ---------- */
const mb=document.getElementById('menu-btn'), dr=document.getElementById('drawer'), dov=document.getElementById('drawer-overlay');
if(mb&&dr&&dov){
  mb.addEventListener('click',()=>{ dr.classList.add('open'); dov.classList.add('open'); });
  dov.addEventListener('click',()=>{ dr.classList.remove('open'); dov.classList.remove('open'); });
}
const nb=document.getElementById('notif-btn'), np=document.getElementById('notif-panel'), nc=document.getElementById('notif-close');
if(nb&&np&&nc){
  nb.addEventListener('click',()=>np.classList.toggle('open'));
  nc.addEventListener('click',()=>np.classList.remove('open'));
}
document.querySelectorAll('.notif-item').forEach(item=>{
  item.addEventListener('click',()=>{
    if(item.classList.contains('read'))return;
    item.classList.add('read');
    const b=document.querySelector('.notif-badge');
    if(b){ let n=parseInt(b.textContent)||0; n=Math.max(0,n-1); if(n===0)b.style.display='none'; else b.textContent=n; }
    toast('Notification read ✔');
  });
});

/* ---------- 14) Cube 3D tilt ---------- */
const cube=document.getElementById('cube-card');
if(cube){
  cube.addEventListener('mousemove',e=>{
    const r=cube.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-0.5, y=(e.clientY-r.top)/r.height-0.5;
    cube.style.transform=`rotateY(${x*14}deg) rotateX(${-y*14}deg)`;
  });
  cube.addEventListener('mouseleave',()=>{ cube.style.transform='rotateY(0deg) rotateX(0deg)'; });
}

/* ---------- 15) Load confirmation ---------- */
window.addEventListener('load',()=> setTimeout(()=>toast('AXIUM ready ✅'),600) );
