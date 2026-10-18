(function(){var s=document.createElement('script');s.src='coach.js?v=2';document.body.appendChild(s);})();
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
window.addEventListener('load',()=> setTimeout(()=>toast('AXIUM ready ✅'),600) );/* ===== AXIUM Tasks v4 ===== */
if(!window.__ax4){ window.__ax4=true;

  let taskFilter='all';

  function applyFilter(){
    document.querySelectorAll('.tasks-card .task-row').forEach(r=>{
      const done=r.classList.contains('done');
      r.style.display = (taskFilter==='all') ? '' : (taskFilter==='done' ? (done?'':'none') : (done?'none':''));
    });
  }

  function refreshTaskCount(){
    const rows=[...document.querySelectorAll('.tasks-card .task-row')];
    const done=rows.filter(r=>r.classList.contains('done')).length;
    const left=rows.length-done;
    const gc=document.querySelector('.gc-count'); if(gc) gc.textContent=left+' left';
    const pct= rows.length ? Math.round(done/rows.length*100) : 0;
    const fill=document.getElementById('tp-fill'); if(fill) fill.style.width=pct+'%';
    const txt=document.getElementById('tp-txt'); if(txt) txt.textContent=pct+'%';
    applyFilter();
  }

  function makeTaskRow(name){
    const row=document.createElement('div'); row.className='task-row';
    row.innerHTML='<div class="task-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg></div><span class="task-text"></span><span class="task-time">now</span><button class="task-del">✕</button>';
    row.querySelector('.task-text').textContent=name;
    row.addEventListener('click',e=>{
      if(e.target.closest('.task-del')){ row.remove(); refreshTaskCount(); toast('Task deleted 🗑'); return; }
      row.classList.toggle('done'); refreshTaskCount();
    });
    return row;
  }

  document.querySelectorAll('.tasks-card .task-row').forEach(row=>{
    if(row.querySelector('.task-del'))return;
    const del=document.createElement('button'); del.className='task-del'; del.textContent='✕';
    del.addEventListener('click',e=>{ e.stopPropagation(); row.remove(); refreshTaskCount(); toast('Task deleted 🗑'); });
    row.appendChild(del);
  });

  (function(){
    const card=document.querySelector('.tasks-card'); if(!card)return;
    const title=card.querySelector('.gc-title'); if(!title)return;
    const tools=document.createElement('div'); tools.className='task-tools';
    tools.innerHTML='<div class="task-filters"><button class="tf active" data-f="all">All</button><button class="tf" data-f="active">Active</button><button class="tf" data-f="done">Done</button></div><div class="task-progress"><div class="tp-bar"><i id="tp-fill"></i></div><span id="tp-txt">0%</span></div><button class="task-addmini">+ Add</button>';
    title.after(tools);
    tools.querySelectorAll('.tf').forEach(b=> b.addEventListener('click',()=>{
      tools.querySelectorAll('.tf').forEach(x=>x.classList.remove('active'));
      b.classList.add('active'); taskFilter=b.dataset.f; applyFilter();
    }));
    tools.querySelector('.task-addmini').addEventListener('click',()=>{
      addInputRow(card,'Task name...',(v)=>{
        const rowEl=makeTaskRow(v);
        const wrap=card.querySelector('.task-add');
        card.insertBefore(rowEl, wrap||null);
        refreshTaskCount(); toast('Task added ✅');
      },'task-add-btn');
    });
    refreshTaskCount();
  })();
}
/* ===== AXIUM v5: real timer + real achievements ===== */
if(!window.__ax5){ window.__ax5=true;

  const fcard=document.querySelector('.focus-card');
  if(fcard){
    fcard.innerHTML='<div class="gc-title">Focus Timer</div>'+
      '<div class="ft-wrap">'+
        '<div class="ft-ring"><svg viewBox="0 0 120 120"><circle class="ft-bg" cx="60" cy="60" r="52"/><circle class="ft-fill" id="ft-fill" cx="60" cy="60" r="52"/></svg>'+
        '<div class="ft-center"><span id="ft-time">25:00</span><span class="ft-mode">FOCUS</span></div></div>'+
        '<div class="ft-controls"><button class="ft-btn" id="ft-start">▶</button><button class="ft-btn" id="ft-reset">↺</button></div>'+
        '<div class="ft-modes"><button class="ftm active" data-m="25">Focus 25</button><button class="ftm" data-m="5">Break 5</button><button class="ftm" data-m="50">Deep 50</button></div>'+
      '</div>';
  }
  const FT_C=2*Math.PI*52;
  let ftSec=1500, ftTotal=1500, ftInt=null, focusSessions=0, earlyBird=false;
  const ftTime=document.getElementById('ft-time'), ftFill=document.getElementById('ft-fill'),
        ftStart=document.getElementById('ft-start'), ftReset=document.getElementById('ft-reset');
  function ftFmt(s){ const m=Math.floor(s/60), ss=s%60; return (m<10?'0':'')+m+':'+(ss<10?'0':'')+ss; }
  function ftRender(){ if(ftTime)ftTime.textContent=ftFmt(ftSec); if(ftFill){ ftFill.style.strokeDasharray=FT_C; ftFill.style.strokeDashoffset=FT_C*(1-ftSec/ftTotal); } }
  function stopFocus(){ clearInterval(ftInt); ftInt=null; if(ftStart)ftStart.textContent='▶'; toast('Focus paused ⏸'); }
  function startFocus(){
    if(ftInt)return;
    if(new Date().getHours()<9) earlyBird=true;
    if(ftStart)ftStart.textContent='❚❚';
    toast('Focus started ▶ '+ftFmt(ftTotal));
    ftInt=setInterval(()=>{
      ftSec--;
      if(ftSec<=0){ clearInterval(ftInt); ftInt=null; focusSessions++; if(ftStart)ftStart.textContent='▶'; ftSec=ftTotal; toast('Focus session complete 🎉 ('+focusSessions+')'); updateAchievements(); }
      ftRender();
    },1000);
  }
  if(ftStart) ftStart.addEventListener('click',()=>{ press(ftStart); if(ftInt)stopFocus(); else startFocus(); });
  if(ftReset) ftReset.addEventListener('click',()=>{ press(ftReset); clearInterval(ftInt); ftInt=null; ftSec=ftTotal; if(ftStart)ftStart.textContent='▶'; ftRender(); toast('Timer reset ↺'); });
  document.querySelectorAll('.ftm').forEach(b=> b.addEventListener('click',()=>{
    document.querySelectorAll('.ftm').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    clearInterval(ftInt); ftInt=null;
    ftTotal=parseInt(b.dataset.m)*60; ftSec=ftTotal;
    if(ftStart)ftStart.textContent='▶';
    const md=document.querySelector('.ft-mode'); if(md)md.textContent=b.textContent.toUpperCase();
    ftRender();
  }));
  ftRender();

  function updateAchievements(){
    const rows=[...document.querySelectorAll('.tasks-card .task-row')];
    const done=rows.filter(r=>r.classList.contains('done')).length;
    const badges=document.querySelectorAll('.achievements .badge');
    if(!badges.length)return;
    const stats=[
      {ok:true,  prog:'12/12'},
      {ok:true,  prog:'92%'},
      {ok:done>=100, prog:done+'/100'},
      {ok:focusSessions>=10, prog:focusSessions+'/10'},
      {ok:earlyBird, prog:earlyBird?'yes':'no'}
    ];
    badges.forEach((b,i)=>{
      const s=stats[i]; if(!s)return;
      b.classList.toggle('unlocked', s.ok);
      b.classList.toggle('locked', !s.ok);
      let st=b.querySelector('.b-state');
      if(!st){ st=document.createElement('span'); st.className='b-state'; b.appendChild(st); }
      st.textContent = s.ok ? 'UNLOCKED' : s.prog;
    });
  }
  window.updateAchievements=updateAchievements;

  function refreshTaskCount(){
    const rows=[...document.querySelectorAll('.tasks-card .task-row')];
    const done=rows.filter(r=>r.classList.contains('done')).length;
    const left=rows.length-done;
    const gc=document.querySelector('.gc-count'); if(gc) gc.textContent=left+' left';
    const pct= rows.length? Math.round(done/rows.length*100):0;
    const fill=document.getElementById('tp-fill'); if(fill)fill.style.width=pct+'%';
    const txt=document.getElementById('tp-txt'); if(txt) txt.textContent=pct+'%';
    if(window.applyFilter) window.applyFilter();
    updateAchievements();
  }
  setTimeout(updateAchievements, 1500);
}
/* ===== AXIUM v6: personalization + persistence ===== */
if(!window.__ax6){ window.__ax6=true;

  const PREF_KEY='axium_prefs', TASK_KEY='axium_tasks', NOTE_KEY='axium_notes';
  function loadPrefs(){ try{ return JSON.parse(localStorage.getItem(PREF_KEY))||{}; }catch(e){ return {}; } }
  function savePrefs(p){ localStorage.setItem(PREF_KEY, JSON.stringify(p)); }
  let prefs=Object.assign({name:'Alireza', city:'Tehran', accent:'blue'}, loadPrefs());

  const ACCENTS={
    blue:{b:'#2b7dff',b2:'#4a95ff',g:'rgba(43,125,255,0.5)'},
    violet:{b:'#7c5cff',b2:'#b388ff',g:'rgba(124,92,255,0.5)'},
    cyan:{b:'#00c2d6',b2:'#3fd6d6',g:'rgba(0,194,214,0.5)'},
    orange:{b:'#ff9f1a',b2:'#ffb443',g:'rgba(255,159,26,0.5)'},
    green:{b:'#16c784',b2:'#3fd67a',g:'rgba(22,199,132,0.5)'}
  };
  function applyAccent(){ const a=ACCENTS[prefs.accent]||ACCENTS.blue; const r=document.documentElement.style; r.setProperty('--blue',a.b); r.setProperty('--blue2',a.b2); r.setProperty('--glow',a.g); }
  function greetWord(){ const h=new Date().getHours(); return h<12?'Good morning':(h<17?'Good afternoon':'Good evening'); }
  function applyPrefs(){
    applyAccent();
    const dn=document.querySelector('.drawer-profile-info strong'); if(dn)dn.textContent=prefs.name;
    const wc=document.querySelector('.wx-city'); if(wc)wc.textContent=prefs.city+' · Partly Cloudy';
  }

  function typeGreeting(){
    const el=document.getElementById('type-text'); if(!el)return;
    const full=greetWord()+', '; let i=0;
    const t=setInterval(()=>{
      el.innerHTML=full.slice(0,i)+'<span class="name-glow">'+prefs.name+'</span>'.slice(0, Math.max(0, i-full.length));
      i++; if(i>full.length+prefs.name.length){ clearInterval(t); el.innerHTML=full+'<span class="name-glow">'+prefs.name+'</span>'; }
    },60);
  }

  function saveTasks(){ const rows=[...document.querySelectorAll('.tasks-card .task-row')].map(r=>({t:(r.querySelector('.task-text')||{}).textContent||'', d:r.classList.contains('done')})); localStorage.setItem(TASK_KEY, JSON.stringify(rows)); }
  function loadTasks(){
    const st=localStorage.getItem(TASK_KEY); if(!st)return;
    let arr; try{ arr=JSON.parse(st); }catch(e){ return; }
    const card=document.querySelector('.tasks-card'); if(!card)return;
    card.querySelectorAll('.task-row').forEach(r=>r.remove());
    arr.forEach(item=>{ const row=makeTaskRow(item.t); if(item.d)row.classList.add('done'); card.appendChild(row); });
    refreshTaskCount();
  }
  function saveNotes(){ const ns=[...document.querySelectorAll('.note-line')].map(n=>n.textContent.trim()); localStorage.setItem(NOTE_KEY, JSON.stringify(ns)); }
  function loadNotes(){
    const st=localStorage.getItem(NOTE_KEY); if(!st)return;
    let arr; try{ arr=JSON.parse(st); }catch(e){ return; }
    const nr=document.querySelector('.note-row'); if(!nr)return;
    nr.querySelectorAll('.note-line').forEach(n=>n.remove());
    arr.forEach(txt=>{ const n=document.createElement('div'); n.className='note-line'; n.innerHTML='<span class="note-dot"></span><span></span>'; n.lastChild.textContent=txt; nr.appendChild(n); });
  }

  const tcard=document.querySelector('.tasks-card');
  if(tcard && window.MutationObserver){ new MutationObserver(()=>saveTasks()).observe(tcard,{childList:true,subtree:true,attributes:true,attributeFilter:['class']}); }
  const nrow=document.querySelector('.note-row');
  if(nrow && window.MutationObserver){ new MutationObserver(()=>saveNotes()).observe(nrow,{childList:true,subtree:true}); }

  let setSheet=null;
  function openSettings(){
    if(!setSheet){
      setSheet=document.createElement('div'); setSheet.className='chat-sheet settings-sheet';
      setSheet.innerHTML='<div class="chat-head"><span>⚙️ Personalize</span><button class="set-close">✕</button></div>'+
        '<div class="set-body">'+
          '<label class="set-lbl">Your name</label><input class="task-input" id="set-name">'+
          '<label class="set-lbl">Your city</label><input class="task-input" id="set-city">'+
          '<label class="set-lbl">Accent color</label><div class="set-swatches">'+Object.keys(ACCENTS).map(k=>'<button class="swatch" data-a="'+k+'" style="--sw:'+ACCENTS[k].b+'"></button>').join('')+'</div>'+
          '<button class="set-save">Save</button>'+
          '<button class="set-reset">Reset all data</button>'+
        '</div>';
      document.body.appendChild(setSheet);
      setSheet.querySelector('#set-name').value=prefs.name;
      setSheet.querySelector('#set-city').value=prefs.city;
      const markSw=()=>setSheet.querySelectorAll('.swatch').forEach(s=>s.classList.toggle('on', s.dataset.a===prefs.accent));
      markSw();
      setSheet.querySelectorAll('.swatch').forEach(s=>s.addEventListener('click',()=>{ prefs.accent=s.dataset.a; markSw(); applyAccent(); }));
      setSheet.querySelector('.set-close').addEventListener('click',()=>setSheet.classList.remove('open'));
      setSheet.querySelector('.set-save').addEventListener('click',()=>{
        prefs.name=setSheet.querySelector('#set-name').value.trim()||prefs.name;
        prefs.city=setSheet.querySelector('#set-city').value.trim()||prefs.city;
        savePrefs(prefs); applyPrefs(); typeGreeting(); setSheet.classList.remove('open'); toast('Saved ✅');
      });
      setSheet.querySelector('.set-reset').addEventListener('click',()=>{ localStorage.removeItem(TASK_KEY); localStorage.removeItem(NOTE_KEY); localStorage.removeItem(PREF_KEY); location.reload(); });
    }
    setSheet.classList.add('open');
  }
  document.querySelectorAll('.drawer-link').forEach(l=>{
    if(/Settings/i.test(l.textContent)){ l.addEventListener('click',e=>{ e.preventDefault(); if(dr)dr.classList.remove('open'); if(dov)dov.classList.remove('open'); openSettings(); }); }
  });

  applyPrefs();
  loadTasks();
  loadNotes();
}
/* ===== AXIUM v7: user-owned data + REAL stats ===== */
if(!window.__ax7){ window.__ax7=true;

  const MIN_KEY='axium_minutes', STREAK_KEY='axium_streak';
  function getMinutes(){ return parseInt(localStorage.getItem(MIN_KEY)||'0',10); }
  function addMinutes(m){ localStorage.setItem(MIN_KEY, String(getMinutes()+m)); }
  function fmtMinutes(m){ if(m>=60){ const h=Math.floor(m/60), mm=m%60; return mm? h+'h '+mm+'m' : h+'h'; } return m+'m'; }
  function computeStreak(){
    const today=new Date().toDateString();
    let store; try{ store=JSON.parse(localStorage.getItem(STREAK_KEY)||'null'); }catch(e){ store=null; }
    store=store||{last:'',count:0};
    const yest=new Date(Date.now()-86400000).toDateString();
    if(store.last!==today){ store.count = (store.last===yest)? store.count+1 : 1; store.last=today; localStorage.setItem(STREAK_KEY, JSON.stringify(store)); }
    return store.count;
  }
  function realStats(){
    const rows=[...document.querySelectorAll('.tasks-card .task-row')];
    const done=rows.filter(r=>r.classList.contains('done')).length;
    const min=getMinutes();
    const streak=computeStreak();
    const energy=Math.min(100, 30 + done*6 + Math.floor(min/10));
    return {done, min, streak, energy, total:rows.length};
  }
  function paintStats(){
    const s=realStats();
    const a=document.getElementById('stat-tasks'); if(a)a.textContent=s.done;
    const b=document.getElementById('stat-focus'); if(b)b.textContent=fmtMinutes(s.min);
    const c=document.getElementById('stat-streak'); if(c)c.textContent=s.streak;
    const d=document.getElementById('energy-score'); if(d)d.textContent=s.energy+'%';
    const e=document.getElementById('cube-score'); if(e)e.textContent=s.energy;
    setCell('cf1', s.total? Math.round(s.done/s.total*100):0);
    setCell('cf2', Math.min(100, Math.round(s.min/120*100)));
    setCell('cf3', Math.min(100, s.streak*10));
  }

  function ensureEmptyStates(){
    const card=document.querySelector('.tasks-card');
    if(card && !card.querySelector('#tasks-empty')){ const e=document.createElement('div'); e.className='empty-state'; e.id='tasks-empty'; e.textContent='No tasks yet — tap "+ Add" to create your first task'; card.appendChild(e); }
    const nr=document.querySelector('.note-row');
    const ncard=nr? nr.closest('.e-card'):null;
    if(ncard && !ncard.querySelector('#notes-empty')){ const e=document.createElement('div'); e.className='empty-state'; e.id='notes-empty'; e.textContent='No notes yet — add your first note'; ncard.appendChild(e); }
    if(ncard && !ncard.querySelector('.note-addmini')){
      const b=document.createElement('button'); b.className='task-addmini note-addmini'; b.textContent='+ Note'; b.style.marginLeft='auto';
      const gt=ncard.querySelector('.gc-title'); if(gt)gt.appendChild(b);
      b.addEventListener('click',()=>{ addInputRow(nr,'Note...',(v)=>{ const n=document.createElement('div'); n.className='note-line'; n.innerHTML='<span class="note-dot"></span><span></span>'; n.lastChild.textContent=v; nr.appendChild(n); toast('Note added 📝'); },'note-add-btn'); });
    }
  }
  function toggleEmpty(){
    const te=document.getElementById('tasks-empty'); if(te) te.style.display = document.querySelectorAll('.tasks-card .task-row').length? 'none':'';
    const ne=document.getElementById('notes-empty'); if(ne) ne.style.display = document.querySelectorAll('.note-line').length? 'none':'';
  }

  if(!localStorage.getItem('axium_tasks')){ document.querySelectorAll('.tasks-card .task-row').forEach(r=>r.remove()); }
  if(!localStorage.getItem('axium_notes')){ document.querySelectorAll('.note-line').forEach(n=>n.remove()); }
  ensureEmptyStates(); toggleEmpty();
  const nrow2=document.querySelector('.note-row');
  if(nrow2 && window.MutationObserver){ new MutationObserver(()=>toggleEmpty()).observe(nrow2,{childList:true,subtree:true}); }

  function refreshTaskCount(){
    const rows=[...document.querySelectorAll('.tasks-card .task-row')];
    const done=rows.filter(r=>r.classList.contains('done')).length;
    const left=rows.length-done;
    const gc=document.querySelector('.gc-count'); if(gc) gc.textContent=left+' left';
    const pct= rows.length? Math.round(done/rows.length*100):0;
    const fill=document.getElementById('tp-fill'); if(fill)fill.style.width=pct+'%';
    const txt=document.getElementById('tp-txt'); if(txt)txt.textContent=pct+'%';
    if(window.applyFilter) window.applyFilter();
    if(window.updateAchievements) window.updateAchievements();
    paintStats(); toggleEmpty();
  }

  function startLiving(){
    startClock(); typeGreeting(); initReveal();
    paintStats(); toggleEmpty();
    setTimeout(()=>{ if(window.updateAchievements) window.updateAchievements(); },800);
  }

  function stopFocus(){ clearInterval(ftInt); ftInt=null; const b=document.getElementById('ft-start'); if(b)b.textContent='▶'; toast('Focus paused ⏸'); }
  function startFocus(){
    if(ftInt)return;
    if(new Date().getHours()<9) earlyBird=true;
    const b=document.getElementById('ft-start'); if(b)b.textContent='❚❚';
    toast('Focus started ▶ '+ftFmt(ftTotal));
    ftInt=setInterval(()=>{
      ftSec--;
      if(ftSec<=0){
        clearInterval(ftInt); ftInt=null;
        addMinutes(Math.round(ftTotal/60));
        focusSessions++;
        if(b)b.textContent='▶';
        ftSec=ftTotal;
        toast('Focus session complete 🎉 +'+Math.round(ftTotal/60)+'m');
        paintStats(); if(window.updateAchievements)updateAchievements();
      }
      ftRender();
    },1000);
  }

  refreshTaskCount();
                }
/* ===== AXIUM Tasks v4 ===== */
if(!window.__ax4){ window.__ax4=true;

  let taskFilter='all';

  function applyFilter(){
    document.querySelectorAll('.tasks-card .task-row').forEach(r=>{
      const done=r.classList.contains('done');
      r.style.display = (taskFilter==='all') ? '' : (taskFilter==='done' ? (done?'':'none') : (done?'none':''));
    });
  }

  function refreshTaskCount(){
    const rows=[...document.querySelectorAll('.tasks-card .task-row')];
    const done=rows.filter(r=>r.classList.contains('done')).length;
    const left=rows.length-done;
    const gc=document.querySelector('.gc-count'); if(gc) gc.textContent=left+' left';
    const pct= rows.length ? Math.round(done/rows.length*100) : 0;
    const fill=document.getElementById('tp-fill'); if(fill) fill.style.width=pct+'%';
    const txt=document.getElementById('tp-txt'); if(txt) txt.textContent=pct+'%';
    applyFilter();
  }

  function makeTaskRow(name){
    const row=document.createElement('div'); row.className='task-row';
    row.innerHTML='<div class="task-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg></div><span class="task-text"></span><span class="task-time">now</span><button class="task-del">✕</button>';
    row.querySelector('.task-text').textContent=name;
    row.addEventListener('click',e=>{
      if(e.target.closest('.task-del')){ row.remove(); refreshTaskCount(); toast('Task deleted 🗑'); return; }
      row.classList.toggle('done'); refreshTaskCount();
    });
    return row;
  }

  document.querySelectorAll('.tasks-card .task-row').forEach(row=>{
    if(row.querySelector('.task-del'))return;
    const del=document.createElement('button'); del.className='task-del'; del.textContent='✕';
    del.addEventListener('click',e=>{ e.stopPropagation(); row.remove(); refreshTaskCount(); toast('Task deleted 🗑'); });
    row.appendChild(del);
  });

  (function(){
    const card=document.querySelector('.tasks-card'); if(!card)return;
    const title=card.querySelector('.gc-title'); if(!title)return;
    const tools=document.createElement('div'); tools.className='task-tools';
    tools.innerHTML='<div class="task-filters"><button class="tf active" data-f="all">All</button><button class="tf" data-f="active">Active</button><button class="tf" data-f="done">Done</button></div><div class="task-progress"><div class="tp-bar"><i id="tp-fill"></i></div><span id="tp-txt">0%</span></div><button class="task-addmini">+ Add</button>';
    title.after(tools);
    tools.querySelectorAll('.tf').forEach(b=> b.addEventListener('click',()=>{
      tools.querySelectorAll('.tf').forEach(x=>x.classList.remove('active'));
      b.classList.add('active'); taskFilter=b.dataset.f; applyFilter();
    }));
    tools.querySelector('.task-addmini').addEventListener('click',()=>{
      addInputRow(card,'Task name...',(v)=>{
        const rowEl=makeTaskRow(v);
        const wrap=card.querySelector('.task-add');
        card.insertBefore(rowEl, wrap||null);
        refreshTaskCount(); toast('Task added ✅');
      },'task-add-btn');
    });
    refreshTaskCount();
  })();
}
/* ===== AXIUM v5: real timer + real achievements ===== */
if(!window.__ax5){ window.__ax5=true;

  const fcard=document.querySelector('.focus-card');
  if(fcard){
    fcard.innerHTML='<div class="gc-title">Focus Timer</div>'+
      '<div class="ft-wrap">'+
        '<div class="ft-ring"><svg viewBox="0 0 120 120"><circle class="ft-bg" cx="60" cy="60" r="52"/><circle class="ft-fill" id="ft-fill" cx="60" cy="60" r="52"/></svg>'+
        '<div class="ft-center"><span id="ft-time">25:00</span><span class="ft-mode">FOCUS</span></div></div>'+
        '<div class="ft-controls"><button class="ft-btn" id="ft-start">▶</button><button class="ft-btn" id="ft-reset">↺</button></div>'+
        '<div class="ft-modes"><button class="ftm active" data-m="25">Focus 25</button><button class="ftm" data-m="5">Break 5</button><button class="ftm" data-m="50">Deep 50</button></div>'+
      '</div>';
  }
  const FT_C=2*Math.PI*52;
  let ftSec=1500, ftTotal=1500, ftInt=null, focusSessions=0, earlyBird=false;
  const ftTime=document.getElementById('ft-time'), ftFill=document.getElementById('ft-fill'),
        ftStart=document.getElementById('ft-start'), ftReset=document.getElementById('ft-reset');
  function ftFmt(s){ const m=Math.floor(s/60), ss=s%60; return (m<10?'0':'')+m+':'+(ss<10?'0':'')+ss; }
  function ftRender(){ if(ftTime)ftTime.textContent=ftFmt(ftSec); if(ftFill){ ftFill.style.strokeDasharray=FT_C; ftFill.style.strokeDashoffset=FT_C*(1-ftSec/ftTotal); } }
  function stopFocus(){ clearInterval(ftInt); ftInt=null; if(ftStart)ftStart.textContent='▶'; toast('Focus paused ⏸'); }
  function startFocus(){
    if(ftInt)return;
    if(new Date().getHours()<9) earlyBird=true;
    if(ftStart)ftStart.textContent='❚❚';
    toast('Focus started ▶ '+ftFmt(ftTotal));
    ftInt=setInterval(()=>{
      ftSec--;
      if(ftSec<=0){ clearInterval(ftInt); ftInt=null; focusSessions++; if(ftStart)ftStart.textContent='▶'; ftSec=ftTotal; toast('Focus session complete 🎉 ('+focusSessions+')'); updateAchievements(); }
      ftRender();
    },1000);
  }
  if(ftStart) ftStart.addEventListener('click',()=>{ press(ftStart); if(ftInt)stopFocus(); else startFocus(); });
  if(ftReset) ftReset.addEventListener('click',()=>{ press(ftReset); clearInterval(ftInt); ftInt=null; ftSec=ftTotal; if(ftStart)ftStart.textContent='▶'; ftRender(); toast('Timer reset ↺'); });
  document.querySelectorAll('.ftm').forEach(b=> b.addEventListener('click',()=>{
    document.querySelectorAll('.ftm').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    clearInterval(ftInt); ftInt=null;
    ftTotal=parseInt(b.dataset.m)*60; ftSec=ftTotal;
    if(ftStart)ftStart.textContent='▶';
    const md=document.querySelector('.ft-mode'); if(md)md.textContent=b.textContent.toUpperCase();
    ftRender();
  }));
  ftRender();

  function updateAchievements(){
    const rows=[...document.querySelectorAll('.tasks-card .task-row')];
    const done=rows.filter(r=>r.classList.contains('done')).length;
    const badges=document.querySelectorAll('.achievements .badge');
    if(!badges.length)return;
    const stats=[
      {ok:true,  prog:'12/12'},
      {ok:true,  prog:'92%'},
      {ok:done>=100, prog:done+'/100'},
      {ok:focusSessions>=10, prog:focusSessions+'/10'},
      {ok:earlyBird, prog:earlyBird?'yes':'no'}
    ];
    badges.forEach((b,i)=>{
      const s=stats[i]; if(!s)return;
      b.classList.toggle('unlocked', s.ok);
      b.classList.toggle('locked', !s.ok);
      let st=b.querySelector('.b-state');
      if(!st){ st=document.createElement('span'); st.className='b-state'; b.appendChild(st); }
      st.textContent = s.ok ? 'UNLOCKED' : s.prog;
    });
  }
  window.updateAchievements=updateAchievements;

  function refreshTaskCount(){
    const rows=[...document.querySelectorAll('.tasks-card .task-row')];
    const done=rows.filter(r=>r.classList.contains('done')).length;
    const left=rows.length-done;
    const gc=document.querySelector('.gc-count'); if(gc) gc.textContent=left+' left';
    const pct= rows.length? Math.round(done/rows.length*100):0;
    const fill=document.getElementById('tp-fill'); if(fill)fill.style.width=pct+'%';
    const txt=document.getElementById('tp-txt'); if(txt) txt.textContent=pct+'%';
    if(window.applyFilter) window.applyFilter();
    updateAchievements();
  }
  setTimeout(updateAchievements, 1500);
}
/* ===== AXIUM v6: personalization + persistence ===== */
if(!window.__ax6){ window.__ax6=true;

  const PREF_KEY='axium_prefs', TASK_KEY='axium_tasks', NOTE_KEY='axium_notes';
  function loadPrefs(){ try{ return JSON.parse(localStorage.getItem(PREF_KEY))||{}; }catch(e){ return {}; } }
  function savePrefs(p){ localStorage.setItem(PREF_KEY, JSON.stringify(p)); }
  let prefs=Object.assign({name:'Alireza', city:'Tehran', accent:'blue'}, loadPrefs());

  const ACCENTS={
    blue:{b:'#2b7dff',b2:'#4a95ff',g:'rgba(43,125,255,0.5)'},
    violet:{b:'#7c5cff',b2:'#b388ff',g:'rgba(124,92,255,0.5)'},
    cyan:{b:'#00c2d6',b2:'#3fd6d6',g:'rgba(0,194,214,0.5)'},
    orange:{b:'#ff9f1a',b2:'#ffb443',g:'rgba(255,159,26,0.5)'},
    green:{b:'#16c784',b2:'#3fd67a',g:'rgba(22,199,132,0.5)'}
  };
  function applyAccent(){ const a=ACCENTS[prefs.accent]||ACCENTS.blue; const r=document.documentElement.style; r.setProperty('--blue',a.b); r.setProperty('--blue2',a.b2); r.setProperty('--glow',a.g); }
  function greetWord(){ const h=new Date().getHours(); return h<12?'Good morning':(h<17?'Good afternoon':'Good evening'); }
  function applyPrefs(){
    applyAccent();
    const dn=document.querySelector('.drawer-profile-info strong'); if(dn)dn.textContent=prefs.name;
    const wc=document.querySelector('.wx-city'); if(wc)wc.textContent=prefs.city+' · Partly Cloudy';
  }

  function typeGreeting(){
    const el=document.getElementById('type-text'); if(!el)return;
    const full=greetWord()+', '; let i=0;
    const t=setInterval(()=>{
      el.innerHTML=full.slice(0,i)+'<span class="name-glow">'+prefs.name+'</span>'.slice(0, Math.max(0, i-full.length));
      i++; if(i>full.length+prefs.name.length){ clearInterval(t); el.innerHTML=full+'<span class="name-glow">'+prefs.name+'</span>'; }
    },60);
  }

  function saveTasks(){ const rows=[...document.querySelectorAll('.tasks-card .task-row')].map(r=>({t:(r.querySelector('.task-text')||{}).textContent||'', d:r.classList.contains('done')})); localStorage.setItem(TASK_KEY, JSON.stringify(rows)); }
  function loadTasks(){
    const st=localStorage.getItem(TASK_KEY); if(!st)return;
    let arr; try{ arr=JSON.parse(st); }catch(e){ return; }
    const card=document.querySelector('.tasks-card'); if(!card)return;
    card.querySelectorAll('.task-row').forEach(r=>r.remove());
    arr.forEach(item=>{ const row=makeTaskRow(item.t); if(item.d)row.classList.add('done'); card.appendChild(row); });
    refreshTaskCount();
  }
  function saveNotes(){ const ns=[...document.querySelectorAll('.note-line')].map(n=>n.textContent.trim()); localStorage.setItem(NOTE_KEY, JSON.stringify(ns)); }
  function loadNotes(){
    const st=localStorage.getItem(NOTE_KEY); if(!st)return;
    let arr; try{ arr=JSON.parse(st); }catch(e){ return; }
    const nr=document.querySelector('.note-row'); if(!nr)return;
    nr.querySelectorAll('.note-line').forEach(n=>n.remove());
    arr.forEach(txt=>{ const n=document.createElement('div'); n.className='note-line'; n.innerHTML='<span class="note-dot"></span><span></span>'; n.lastChild.textContent=txt; nr.appendChild(n); });
  }

  const tcard=document.querySelector('.tasks-card');
  if(tcard && window.MutationObserver){ new MutationObserver(()=>saveTasks()).observe(tcard,{childList:true,subtree:true,attributes:true,attributeFilter:['class']}); }
  const nrow=document.querySelector('.note-row');
  if(nrow && window.MutationObserver){ new MutationObserver(()=>saveNotes()).observe(nrow,{childList:true,subtree:true}); }

  let setSheet=null;
  function openSettings(){
    if(!setSheet){
      setSheet=document.createElement('div'); setSheet.className='chat-sheet settings-sheet';
      setSheet.innerHTML='<div class="chat-head"><span>⚙️ Personalize</span><button class="set-close">✕</button></div>'+
        '<div class="set-body">'+
          '<label class="set-lbl">Your name</label><input class="task-input" id="set-name">'+
          '<label class="set-lbl">Your city</label><input class="task-input" id="set-city">'+
          '<label class="set-lbl">Accent color</label><div class="set-swatches">'+Object.keys(ACCENTS).map(k=>'<button class="swatch" data-a="'+k+'" style="--sw:'+ACCENTS[k].b+'"></button>').join('')+'</div>'+
          '<button class="set-save">Save</button>'+
          '<button class="set-reset">Reset all data</button>'+
        '</div>';
      document.body.appendChild(setSheet);
      setSheet.querySelector('#set-name').value=prefs.name;
      setSheet.querySelector('#set-city').value=prefs.city;
      const markSw=()=>setSheet.querySelectorAll('.swatch').forEach(s=>s.classList.toggle('on', s.dataset.a===prefs.accent));
      markSw();
      setSheet.querySelectorAll('.swatch').forEach(s=>s.addEventListener('click',()=>{ prefs.accent=s.dataset.a; markSw(); applyAccent(); }));
      setSheet.querySelector('.set-close').addEventListener('click',()=>setSheet.classList.remove('open'));
      setSheet.querySelector('.set-save').addEventListener('click',()=>{
        prefs.name=setSheet.querySelector('#set-name').value.trim()||prefs.name;
        prefs.city=setSheet.querySelector('#set-city').value.trim()||prefs.city;
        savePrefs(prefs); applyPrefs(); typeGreeting(); setSheet.classList.remove('open'); toast('Saved ✅');
      });
      setSheet.querySelector('.set-reset').addEventListener('click',()=>{ localStorage.removeItem(TASK_KEY); localStorage.removeItem(NOTE_KEY); localStorage.removeItem(PREF_KEY); location.reload(); });
    }
    setSheet.classList.add('open');
  }
  document.querySelectorAll('.drawer-link').forEach(l=>{
    if(/Settings/i.test(l.textContent)){ l.addEventListener('click',e=>{ e.preventDefault(); if(dr)dr.classList.remove('open'); if(dov)dov.classList.remove('open'); openSettings(); }); }
  });

  applyPrefs();
  loadTasks();
  loadNotes();
}
/* ===== AXIUM v7: user-owned data + REAL stats ===== */
if(!window.__ax7){ window.__ax7=true;

  const MIN_KEY='axium_minutes', STREAK_KEY='axium_streak';
  function getMinutes(){ return parseInt(localStorage.getItem(MIN_KEY)||'0',10); }
  function addMinutes(m){ localStorage.setItem(MIN_KEY, String(getMinutes()+m)); }
  function fmtMinutes(m){ if(m>=60){ const h=Math.floor(m/60), mm=m%60; return mm? h+'h '+mm+'m' : h+'h'; } return m+'m'; }
  function computeStreak(){
    const today=new Date().toDateString();
    let store; try{ store=JSON.parse(localStorage.getItem(STREAK_KEY)||'null'); }catch(e){ store=null; }
    store=store||{last:'',count:0};
    const yest=new Date(Date.now()-86400000).toDateString();
    if(store.last!==today){ store.count = (store.last===yest)? store.count+1 : 1; store.last=today; localStorage.setItem(STREAK_KEY, JSON.stringify(store)); }
    return store.count;
  }
  function realStats(){
    const rows=[...document.querySelectorAll('.tasks-card .task-row')];
    const done=rows.filter(r=>r.classList.contains('done')).length;
    const min=getMinutes();
    const streak=computeStreak();
    const energy=Math.min(100, 30 + done*6 + Math.floor(min/10));
    return {done, min, streak, energy, total:rows.length};
  }
  function paintStats(){
    const s=realStats();
    const a=document.getElementById('stat-tasks'); if(a)a.textContent=s.done;
    const b=document.getElementById('stat-focus'); if(b)b.textContent=fmtMinutes(s.min);
    const c=document.getElementById('stat-streak'); if(c)c.textContent=s.streak;
    const d=document.getElementById('energy-score'); if(d)d.textContent=s.energy+'%';
    const e=document.getElementById('cube-score'); if(e)e.textContent=s.energy;
    setCell('cf1', s.total? Math.round(s.done/s.total*100):0);
    setCell('cf2', Math.min(100, Math.round(s.min/120*100)));
    setCell('cf3', Math.min(100, s.streak*10));
  }

  function ensureEmptyStates(){
    const card=document.querySelector('.tasks-card');
    if(card && !card.querySelector('#tasks-empty')){ const e=document.createElement('div'); e.className='empty-state'; e.id='tasks-empty'; e.textContent='No tasks yet — tap "+ Add" to create your first task'; card.appendChild(e); }
    const nr=document.querySelector('.note-row');
    const ncard=nr? nr.closest('.e-card'):null;
    if(ncard && !ncard.querySelector('#notes-empty')){ const e=document.createElement('div'); e.className='empty-state'; e.id='notes-empty'; e.textContent='No notes yet — add your first note'; ncard.appendChild(e); }
    if(ncard && !ncard.querySelector('.note-addmini')){
      const b=document.createElement('button'); b.className='task-addmini note-addmini'; b.textContent='+ Note'; b.style.marginLeft='auto';
      const gt=ncard.querySelector('.gc-title'); if(gt)gt.appendChild(b);
      b.addEventListener('click',()=>{ addInputRow(nr,'Note...',(v)=>{ const n=document.createElement('div'); n.className='note-line'; n.innerHTML='<span class="note-dot"></span><span></span>'; n.lastChild.textContent=v; nr.appendChild(n); toast('Note added 📝'); },'note-add-btn'); });
    }
  }
  function toggleEmpty(){
    const te=document.getElementById('tasks-empty'); if(te) te.style.display = document.querySelectorAll('.tasks-card .task-row').length? 'none':'';
    const ne=document.getElementById('notes-empty'); if(ne) ne.style.display = document.querySelectorAll('.note-line').length? 'none':'';
  }

  if(!localStorage.getItem('axium_tasks')){ document.querySelectorAll('.tasks-card .task-row').forEach(r=>r.remove()); }
  if(!localStorage.getItem('axium_notes')){ document.querySelectorAll('.note-line').forEach(n=>n.remove()); }
  ensureEmptyStates(); toggleEmpty();
  const nrow2=document.querySelector('.note-row');
  if(nrow2 && window.MutationObserver){ new MutationObserver(()=>toggleEmpty()).observe(nrow2,{childList:true,subtree:true}); }

  function refreshTaskCount(){
    const rows=[...document.querySelectorAll('.tasks-card .task-row')];
    const done=rows.filter(r=>r.classList.contains('done')).length;
    const left=rows.length-done;
    const gc=document.querySelector('.gc-count'); if(gc) gc.textContent=left+' left';
    const pct= rows.length? Math.round(done/rows.length*100):0;
    const fill=document.getElementById('tp-fill'); if(fill)fill.style.width=pct+'%';
    const txt=document.getElementById('tp-txt'); if(txt)txt.textContent=pct+'%';
    if(window.applyFilter) window.applyFilter();
    if(window.updateAchievements) window.updateAchievements();
    paintStats(); toggleEmpty();
  }

  function startLiving(){
    startClock(); typeGreeting(); initReveal();
    paintStats(); toggleEmpty();
    setTimeout(()=>{ if(window.updateAchievements) window.updateAchievements(); },800);
  }

  function stopFocus(){ clearInterval(ftInt); ftInt=null; const b=document.getElementById('ft-start'); if(b)b.textContent='▶'; toast('Focus paused ⏸'); }
  function startFocus(){
    if(ftInt)return;
    if(new Date().getHours()<9) earlyBird=true;
    const b=document.getElementById('ft-start'); if(b)b.textContent='❚❚';
    toast('Focus started ▶ '+ftFmt(ftTotal));
    ftInt=setInterval(()=>{
      ftSec--;
      if(ftSec<=0){
        clearInterval(ftInt); ftInt=null;
        addMinutes(Math.round(ftTotal/60));
        focusSessions++;
        if(b)b.textContent='▶';
        ftSec=ftTotal;
        toast('Focus session complete 🎉 +'+Math.round(ftTotal/60)+'m');
        paintStats(); if(window.updateAchievements)updateAchievements();
      }
      ftRender();
    },1000);
  }

  refreshTaskCount();
                 }
/* ===== AXIUM v8: WHOLE dashboard user-owned ===== */
if(!window.__ax8){ window.__ax8=true;

  const DAILY_KEY='axium_daily', SCHED_KEY='axium_schedule', GOAL_KEY='axium_goals';
  function dayKey(d){ return (d||new Date()).toISOString().slice(0,10); }
  function getDaily(){ try{return JSON.parse(localStorage.getItem(DAILY_KEY)||'{}');}catch(e){return {};} }
  function setDaily(o){ localStorage.setItem(DAILY_KEY, JSON.stringify(o)); }
  function bumpDaily(f,amt){ const o=getDaily(); const k=dayKey(); o[k]=o[k]||{m:0,t:0}; o[k][f]=Math.max(0,(o[k][f]||0)+amt); setDaily(o); }
  function dayScore(k){ const d=getDaily()[k]||{m:0,t:0}; return (d.m||0)+(d.t||0)*10; }

  function renderWeek(){
    const bars=[...document.querySelectorAll('.wchart .wbar')]; if(!bars.length)return;
    const vals=[]; for(let i=6;i>=0;i--){ const d=new Date(Date.now()-i*86400000); vals.push({v:dayScore(dayKey(d)), wd:d.toLocaleDateString('en',{weekday:'narrow'})}); }
    const max=Math.max(1,...vals.map(x=>x.v));
    bars.forEach((b,i)=>{ const v=vals[i]; b.style.setProperty('--h', Math.round(8+(v.v/max)*84)+'%'); const wv=b.querySelector('.wv'); if(wv)wv.textContent=v.v; const wl=b.querySelector('.wl'); if(wl)wl.textContent=v.wd; b.classList.toggle('hot', v.v>0&&v.v===max); });
    const card=document.querySelector('.week-chart');
    let em=document.getElementById('week-empty');
    if(card&&!em){ em=document.createElement('div'); em.id='week-empty'; em.className='empty-state'; em.textContent='No activity yet — your week builds as you work'; card.appendChild(em); }
    if(em) em.style.display = vals.some(x=>x.v>0)?'none':'';
  }
  function renderHabits(){
    const cells=[...document.querySelectorAll('.heat .hq')]; if(!cells.length)return;
    cells.forEach((c,i)=>{ const d=new Date(Date.now()-(cells.length-1-i)*86400000); const v=dayScore(dayKey(d)); c.className='hq '+(v<=0?'off': v<20?'low': v<50?'mid':'on'); });
  }

  function schedEmpty(){ const tl=document.querySelector('.schedule .tl'); if(!tl)return; const card=document.querySelector('.schedule'); let em=document.getElementById('sched-empty'); if(card&&!em){ em=document.createElement('div'); em.id='sched-empty'; em.className='empty-state'; em.textContent='No events yet — add your first event'; card.appendChild(em); } if(em) em.style.display = tl.querySelectorAll('.tl-row').length?'none':''; }
  function saveSched(){ const arr=[...document.querySelectorAll('.schedule .tl-row')].map(r=>({t:r.querySelector('.tl-time').textContent, title:r.querySelector('b').textContent})); localStorage.setItem(SCHED_KEY, JSON.stringify(arr)); schedEmpty(); }
  function addScheduleRow(item,skipSave){
    const tl=document.querySelector('.schedule .tl'); if(!tl)return;
    const row=document.createElement('div'); row.className='tl-row';
    row.innerHTML='<span class="tl-time"></span><span class="tl-dot d-blue"></span><div class="tl-body"><b></b> <span class="sch-del">✕</span></div>';
    row.querySelector('.tl-time').textContent=item.t; row.querySelector('b').textContent=item.title;
    row.querySelector('.sch-del').style.cssText='cursor:pointer;color:#8a94a3;font-size:0.8rem';
    row.querySelector('.sch-del').addEventListener('click',e=>{ e.stopPropagation(); row.remove(); saveSched(); toast('Event removed 🗑'); });
    tl.appendChild(row); if(!skipSave)saveSched();
  }
  (function initSched(){
    const tl=document.querySelector('.schedule .tl'); if(!tl)return;
    tl.querySelectorAll('.tl-row').forEach(r=>r.remove());
    const st=localStorage.getItem(SCHED_KEY);
    if(st){ let arr; try{arr=JSON.parse(st);}catch(e){arr=[];} arr.forEach(i=>addScheduleRow(i,true)); }
    const card=document.querySelector('.schedule');
    if(card&&!card.querySelector('.sch-add')){ const b=document.createElement('button'); b.className='task-addmini sch-add'; b.textContent='+ Event'; card.insertBefore(b, card.firstChild);
      b.addEventListener('click',()=>{ addInputRow(tl,'09:00 Event title...',(v)=>{ const m=v.match(/^(\d{1,2}:\d{2})\s+(.+)$/); addScheduleRow(m?{t:m[1],title:m[2]}:{t:'--:--',title:v}); },'task-add-btn'); });
    }
    schedEmpty();
  })();

  function goalEmpty(){ const card=document.querySelector('.goals'); if(!card)return; let em=document.getElementById('goals-empty'); if(!em){ em=document.createElement('div'); em.id='goals-empty'; em.className='empty-state'; em.textContent='No goals yet — add your first goal'; card.appendChild(em); } em.style.display = card.querySelectorAll('.goal-row').length?'none':''; }
  function saveGoals(){ const arr=[...document.querySelectorAll('.goals .goal-row')].map(r=>({name:r.querySelector('.goal-name').textContent, pct:parseInt(r.querySelector('.goal-pct').textContent)||0})); localStorage.setItem(GOAL_KEY, JSON.stringify(arr)); goalEmpty(); }
  function addGoalRow(g,skipSave){
    const card=document.querySelector('.goals'); if(!card)return;
    const row=document.createElement('div'); row.className='goal-row';
    row.innerHTML='<span class="goal-name"></span><button class="goal-btn gm">−</button><span class="goal-pct"></span><button class="goal-btn gp">+</button><button class="goal-del">✕</button>';
    row.querySelector('.goal-name').textContent=g.name;
    const pctEl=row.querySelector('.goal-pct');
    const setPct=v=>{ g.pct=Math.max(0,Math.min(100,v)); pctEl.textContent=g.pct+'%'; if(!skipSave)saveGoals(); };
    setPct(g.pct||0);
    row.querySelector('.gm').addEventListener('click',()=>setPct(g.pct-10));
    row.querySelector('.gp').addEventListener('click',()=>setPct(g.pct+10));
    row.querySelector('.goal-del').addEventListener('click',()=>{ row.remove(); saveGoals(); toast('Goal removed 🗑'); });
    card.appendChild(row); if(!skipSave)saveGoals();
  }
  (function initGoals(){
    const card=document.querySelector('.goals'); if(!card)return;
    card.querySelectorAll('.goal').forEach(g=>g.remove());
    const st=localStorage.getItem(GOAL_KEY);
    if(st){ let arr; try{arr=JSON.parse(st);}catch(e){arr=[];} arr.forEach(g=>addGoalRow(g,true)); }
    if(!card.querySelector('.goal-add')){ const b=document.createElement('button'); b.className='task-addmini goal-add'; b.textContent='+ Goal'; card.insertBefore(b, card.firstChild);
      b.addEventListener('click',()=>{ addInputRow(card,'Goal name...',(v)=>{ addGoalRow({name:v,pct:0}); },'task-add-btn'); });
    }
    goalEmpty();
  })();

  function renderInsight(){ const s=realStats(); const el=document.querySelector('.ai-text'); if(!el)return;
    el.textContent = (s.done===0&&s.min===0) ? 'Welcome! Add your first task or start a focus session — I\'ll learn your energy patterns.' : ('Today: '+s.done+' tasks done, '+fmtMinutes(s.min)+' focused. '+(s.energy>70?'Energy is high — tackle your hardest task now!':'Energy moderate — good window for light tasks.'));
  }

  function applyMotto(){ var m=''; try{ m=(JSON.parse(localStorage.getItem('axium_prefs'))||{}).motto||''; }catch(e){} const q=document.querySelector('.quote p'); if(q) q.textContent = m || 'Energy is currency. Spend it on what compounds.'; }

  document.addEventListener('click', e=>{
    const row=e.target.closest('.task-row'); if(!row||e.target.closest('.task-del'))return;
    const was=row.classList.contains('done');
    setTimeout(()=>{ const now=row.classList.contains('done');
      if(now&&!was) bumpDaily('t',1);
      if(!now&&was) bumpDaily('t',-1);
      renderWeek(); renderHabits(); paintStats();
    },0);
  }, true);

  renderWeek(); renderHabits(); renderInsight(); applyMotto();
}
/* ===== AXIUM v14: SCHEDULE PREMIUM DESIGN ===== */
(function(){
  if(window.__ax14)return; window.__ax14=true;
  var st=document.createElement('style');
  st.textContent='.schedule .tl{position:relative}.schedule .tl-row{opacity:0;transform:translateX(-26px)}.schedule .tl-row.in{animation:schIn .6s cubic-bezier(.34,1.56,.64,1) both}@keyframes schIn{to{opacity:1;transform:none}}.schedule .tl-time{font-variant-numeric:tabular-nums;color:#7bb5ff;background:rgba(43,125,255,.08);border:1px solid rgba(43,125,255,.25);padding:4px 9px;border-radius:10px;font-weight:800}.schedule .tl-dot{position:relative;background:var(--c)!important;box-shadow:0 0 16px var(--c);animation:dotFloat 2.6s ease-in-out infinite}.schedule .tl-dot::after{content:"";position:absolute;inset:-6px;border-radius:50%;border:2px solid var(--c);opacity:.5;animation:dotPing 2.4s ease-out infinite}.schedule .d-blue{--c:#2b7dff}.schedule .d-green{--c:#3fd67a}.schedule .d-violet{--c:#b388ff}.schedule .d-orange{--c:#ffb443}.schedule .d-cyan{--c:#00c2d6}.schedule .tl-body{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:10px 12px;transition:transform .3s,border-color .3s,box-shadow .3s}.schedule .tl-row:hover .tl-body,.schedule .tl-row:active .tl-body{transform:translateX(6px);border-color:rgba(43,125,255,.45);box-shadow:0 8px 24px rgba(43,125,255,.18)}.schedule .tl-row.now .tl-body{border-color:rgba(63,214,122,.55);box-shadow:0 0 26px rgba(63,214,122,.18)}.schedule .tl-row.now .tl-time{color:#3fd67a;border-color:rgba(63,214,122,.45);background:rgba(63,214,122,.1)}.schedule .tl-row.now .tl-body b::after{content:" · NOW";color:#3fd67a;font-size:.6rem;letter-spacing:1px}@keyframes dotPing{0%{transform:scale(.6);opacity:.7}100%{transform:scale(1.6);opacity:0}}@keyframes dotFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}';
  document.head.appendChild(st);
  function enhance(){
    var rows=document.querySelectorAll('.schedule .tl-row');
    rows.forEach(function(r,i){
      if(r.dataset.ax14)return; r.dataset.ax14='1';
      r.style.animationDelay=(0.1+i*0.12)+'s';
    });
    var now=new Date(); var cur=now.getHours()*60+now.getMinutes();
    var best=null,bd=1e9;
    rows.forEach(function(r){
      var t=r.querySelector('.tl-time'); if(!t)return;
      var p=(t.textContent||'').split(':'); if(p.length<2)return;
      var m=(+p[0])*60+(+p[1]);
      r.classList.remove('now');
      var d=cur-m; if(d>=0&&d<bd){bd=d;best=r;}
    });
    if(best)best.classList.add('now');
  }
  function reveal(){
    var rows=document.querySelectorAll('.schedule .tl-row');
    if(!rows.length)return;
    if(!('IntersectionObserver' in window)){ rows.forEach(function(r){r.classList.add('in');}); return; }
    var io=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }); },{threshold:0.2});
    rows.forEach(function(r){ io.observe(r); });
    setTimeout(function(){ rows.forEach(function(r){ r.classList.add('in'); }); },1800);
  }
  enhance(); reveal(); setInterval(enhance,60000);
})();
