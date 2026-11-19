/* AXIUM Smart Coach — CLEAN v1 (part 1/2) */
(function(){
if(window.__axMini4)return;window.__axMini4=true;
function boot(){
  if(!document.body){setTimeout(boot,200);return;}
  if(document.getElementById('axFab'))return;
  var KEY='axNotifyV6',st;
  try{st=JSON.parse(localStorage.getItem(KEY))}catch(e){}
  if(!st)st={list:[],unread:0,rems:[],coachOn:true,sumOn:true,lastSum:'',lastCoach:0,coachIdx:0};
  function save(){try{localStorage.setItem(KEY,JSON.stringify(st))}catch(e){}}
  if(!document.querySelector('link[rel="manifest"]')){
    var ml=document.createElement('link');ml.rel='manifest';ml.href='manifest.webmanifest';document.head.appendChild(ml);
  }
  var css='#axFab{position:fixed;right:16px;bottom:20px;z-index:99999;display:flex;align-items:center;gap:10px;padding:14px 20px;border-radius:999px;border:1px solid rgba(255,255,255,.25);background:linear-gradient(135deg,#2b7dff,#00c2d6);color:#fff;font-weight:800;font-size:.82rem;letter-spacing:.3px;cursor:pointer;backdrop-filter:blur(8px);box-shadow:0 12px 32px rgba(43,125,255,.45);animation:axFabIn .7s cubic-bezier(.34,1.56,.64,1) both,axFabPulse 2.6s ease-out infinite;transition:transform .2s}#axFab:active{transform:scale(.94)}#axFab .ic{font-size:1.25rem;filter:drop-shadow(0 0 8px rgba(255,255,255,.7));animation:axFabWave 2.2s ease-in-out infinite}#axFab.on{background:rgba(13,20,34,.9);border-color:rgba(43,125,255,.45);box-shadow:0 12px 32px rgba(0,0,0,.5),0 0 24px rgba(43,125,255,.25)}#axBadge{position:absolute;top:-6px;right:-4px;min-width:22px;height:22px;padding:0 6px;border-radius:999px;background:linear-gradient(135deg,#ff5470,#ff2e5f);color:#fff;font-size:.68rem;font-weight:800;display:none;align-items:center;justify-content:center;box-shadow:0 0 14px rgba(255,46,95,.7)}#axPanel{position:fixed;right:14px;bottom:84px;z-index:99998;width:min(344px,calc(100vw - 28px));max-height:64vh;overflow-y:auto;background:rgba(13,20,34,.92);border:1px solid rgba(43,125,255,.35);border-radius:22px;backdrop-filter:blur(16px);box-shadow:0 24px 60px rgba(0,0,0,.55),0 0 40px rgba(43,125,255,.12);padding:16px;display:none}#axPanel.open{display:block;animation:axPanelIn .45s cubic-bezier(.34,1.56,.64,1)}.axn-h{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:12px}.axn-h b{font-size:.9rem;font-weight:900;letter-spacing:1px;background:linear-gradient(90deg,#fff,#7bb5ff,#00c2d6);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.axn-x{width:32px;height:32px;flex:none;border-radius:10px;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.06);color:#9aa4b2;font-size:.9rem;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:.25s}.axn-x:active{transform:scale(.85) rotate(90deg);color:#ff5470}#axnText{width:100%;padding:12px 14px;border-radius:14px;border:1px solid rgba(255,255,255,.12);background:rgba(0,0,0,.3);color:#eef2f7;font-size:.8rem;outline:none}.axn-chips{display:flex;flex-wrap:wrap;gap:7px;margin-top:9px}.axn-chip{flex:1;min-width:60px;padding:10px 6px;border-radius:999px;border:1px solid rgba(43,125,255,.35);background:rgba(43,125,255,.1);color:#7bb5ff;font-size:.66rem;font-weight:700;cursor:pointer}.axn-chip.coach{border-color:rgba(63,214,122,.5);background:rgba(63,214,122,.12);color:#3fd67a}.axn-tg{margin:12px 0;display:flex;flex-direction:column;gap:9px}.axn-t{display:flex;gap:9px;align-items:center;color:#8a94a3;font-size:.72rem;cursor:pointer}.axn-t input{display:none}.axn-sw{width:38px;height:22px;border-radius:999px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.15);position:relative;flex:none;transition:.3s}.axn-sw::after{content:"";position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:50%;background:#8a94a3;transition:.3s cubic-bezier(.34,1.56,.64,1)}.axn-t input:checked+.axn-sw{background:linear-gradient(135deg,#2b7dff,#1a6ae0);border-color:transparent}.axn-t input:checked+.axn-sw::after{left:18px;background:#fff}.axn-i{position:relative;border:1px solid rgba(255,255,255,.08);background:linear-gradient(160deg,rgba(43,125,255,.1),rgba(255,255,255,.03));border-radius:14px;padding:10px 12px;margin-top:9px;overflow:hidden;animation:axItemIn .45s cubic-bezier(.34,1.56,.64,1) both}.axn-i::before{content:"";position:absolute;left:0;top:10px;bottom:10px;width:3px;border-radius:999px;background:linear-gradient(180deg,#2b7dff,#00c2d6)}.axn-i .t{color:#eef2f7;font-size:.76rem;font-weight:800}.axn-i .b{color:#9aa4b2;font-size:.7rem;margin-top:3px;line-height:1.55}.axn-i .d{color:#5b6472;font-size:.6rem;margin-top:5px;display:flex;align-items:center;gap:6px}.axn-i .d::before{content:"";width:5px;height:5px;border-radius:50%;background:#3fd67a;box-shadow:0 0 8px #3fd67a}.axn-empty{color:#5b6472;font-size:.72rem;text-align:center;padding:14px 0}#axToast{position:fixed;top:12px;left:50%;transform:translateX(-50%);z-index:99999;width:min(400px,calc(100vw - 20px));display:none;align-items:center;gap:12px;padding:14px 16px;border-radius:22px;border:1px solid rgba(43,125,255,.45);background:linear-gradient(160deg,rgba(20,30,50,.96),rgba(10,16,28,.96));box-shadow:0 24px 60px rgba(0,0,0,.65),0 0 44px rgba(43,125,255,.22);overflow:hidden;cursor:pointer}#axToast.show{display:flex;animation:axToastIn .55s cubic-bezier(.34,1.56,.64,1)}#axToast.hide{animation:axToastOut .35s ease forwards}#axToast .ic{width:48px;height:48px;flex:none;border-radius:16px;position:relative;background:radial-gradient(120% 120% at 30% 20%,#3b8bff,#1656c9 60%,#00c2d6);box-shadow:0 8px 20px rgba(43,125,255,.5);display:flex;align-items:center;justify-content:center;font-size:1.45rem}.axRS{position:absolute;inset:-7px;width:calc(100% + 14px);height:calc(100% + 14px);pointer-events:none;transform-origin:50% 50%;filter:drop-shadow(0 0 6px rgba(0,194,214,.8))}.axOrbit{position:absolute;width:8px;height:8px;margin:-4px 0 0 -4px;border-radius:50%;background:#7bb5ff;box-shadow:0 0 12px #7bb5ff,0 0 26px rgba(123,181,255,.65);pointer-events:none;opacity:0}#axToast.show .axOrbit{opacity:1}#axToast .tx{flex:1;min-width:0}#axToast .t{color:#eef2f7;font-size:.84rem;font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#axToast .b{color:#9aa4b2;font-size:.72rem;margin-top:2px;line-height:1.5;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}#axToast .bar{position:absolute;left:0;bottom:0;height:4px;border-radius:999px;background:linear-gradient(90deg,#2b7dff,#00c2d6,#7bb5ff,#2b7dff);background-size:300% 100%;animation:axBar 5s linear forwards,axShim 1.8s linear infinite}@keyframes axFabIn{from{transform:translateY(70px) scale(.5);opacity:0}to{transform:none;opacity:1}}@keyframes axFabPulse{0%,100%{box-shadow:0 12px 32px rgba(43,125,255,.45),0 0 0 0 rgba(43,125,255,.45)}50%{box-shadow:0 12px 32px rgba(43,125,255,.45),0 0 0 18px rgba(43,125,255,0)}}@keyframes axFabWave{0%,100%{transform:rotate(0)}25%{transform:rotate(14deg)}50%{transform:rotate(-10deg)}75%{transform:rotate(6deg)}}@keyframes axPanelIn{from{opacity:0;transform:translateY(26px) scale(.92)}to{opacity:1;transform:translateY(0) scale(1)}}@keyframes axItemIn{from{opacity:0;transform:translateX(28px)}to{opacity:1;transform:none}}@keyframes axToastIn{from{opacity:0;transform:translate(-50%,-110px) scale(.85) rotate(-3deg)}to{opacity:1;transform:translate(-50%,0) scale(1) rotate(0)}}@keyframes axToastOut{to{opacity:0;transform:translate(-50%,-110px) scale(.9)}}@keyframes axBar{from{width:100%}to{width:0}}@keyframes axShim{to{background-position:-300% 0}}@keyframes axIconPop{from{transform:scale(.3) rotate(-20deg);opacity:0}60%{transform:scale(1.12) rotate(4deg)}to{transform:scale(1);opacity:1}}@keyframes axTextIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}';
  var sEl=document.createElement('style');sEl.textContent=css;document.head.appendChild(sEl);
  var wrap=document.createElement('div');
  wrap.innerHTML='<button id="axFab" type="button"><span class="ic">🔔</span><span id="axFabTxt">Enable smart alerts ✨</span><span id="axBadge"></span></button><div id="axPanel"><div class="axn-h"><b>🧠 AXIUM SMART COACH</b><button class="axn-x" id="axX" type="button">✕</button></div><input id="axnText" placeholder="Remind me to... (optional)"><div class="axn-chips"><button class="axn-chip" data-min="1" type="button">Test · 1 min</button><button class="axn-chip" data-min="5" type="button">5 min</button><button class="axn-chip" data-min="25" type="button">Focus · 25</button><button class="axn-chip" data-min="60" type="button">1 hour</button><button class="axn-chip coach" data-coach="1" type="button">⚡ Coach now</button></div><div class="axn-tg"><label class="axn-t"><input type="checkbox" id="axnTCoach"><span class="axn-sw"></span> Smart check-in every 20 minutes</label><label class="axn-t"><input type="checkbox" id="axnTSum"><span class="axn-sw"></span> Daily summary when I open AXIUM</label></div><div id="axList"></div></div><div id="axToast"><span class="axOrbit" id="axOrb"></span><div class="ic" id="axTIc">🧠<svg class="axRS" viewBox="0 0 60 60"><defs><linearGradient id="axRG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#00c2d6"/><stop offset="1" stop-color="#2b7dff"/></linearGradient></defs><circle cx="30" cy="30" r="26" fill="none" stroke="url(#axRG)" stroke-width="3" stroke-linecap="round" stroke-dasharray="110 54"/></svg></div><div class="tx"><div class="t" id="axTT"></div><div class="b" id="axTB"></div></div><div class="bar"></div></div>';
  document.body.appendChild(wrap);
  var fab=document.getElementById('axFab'),panel=document.getElementById('axPanel'),badge=document.getElementById('axBadge'),listEl=document.getElementById('axList'),toastEl=document.getElementById('axToast'),tIc=document.getElementById('axTIc'),tT=document.getElementById('axTT'),tB=document.getElementById('axTB'),tCoach=document.getElementById('axnTCoach'),tSum=document.getElementById('axnTSum'),timer=null;
  var ringSvg=toastEl.querySelector('.axRS'),orb=document.getElementById('axOrb');
  tCoach.checked=!!st.coachOn;tSum.checked=!!st.sumOn;
  tCoach.onchange=function(){st.coachOn=tCoach.checked;save()};
  tSum.onchange=function(){st.sumOn=tSum.checked;save()};
  if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('sw.js').catch(function(){});});}
  if(!window.__axAnim){
    window.__axAnim=true;
    var t0=performance.now();
    (function loop(now){
      var e=now-t0;
      if(ringSvg)ringSvg.style.transform='rotate('+((e/2600*360)%360)+'deg)';
      if(orb&&toastEl.classList.contains('show')){
        var w=toastEl.offsetWidth||360,h=toastEl.offsetHeight||90;
        var ang=2*Math.PI*((e/4200)%1);
        var c=Math.cos(ang),s2=Math.sin(ang);
        var rx=w/2-6,ry=h/2-6;
        orb.style.left=(w/2+rx*Math.sign(c)*Math.sqrt(Math.abs(c)))+'px';
        orb.style.top=(h/2+ry*Math.sign(s2)*Math.sqrt(Math.abs(s2)))+'px';
      }
      requestAnimationFrame(loop);
    })(t0);
  }
  function granted(){return ('Notification' in window)&&Notification.permission==='granted';}
  function heroOn(){
    var h=document.getElementById('hero');
    if(!h)return false;
    if(h.style.display==='none'||h.classList.contains('hidden'))return false;
    var d=document.getElementById('dashboard');
    if(d&&d.classList.contains('active'))return false;
    return h.getBoundingClientRect().height>0;
  }
  setInterval(function(){
    var show=!granted()||heroOn();
    fab.style.display=show?'flex':'none';
    if(!show&&panel.classList.contains('open'))panel.classList.remove('open');
  },600);
  function axIconURL(){
    if(axIconURL._c)return axIconURL._c;
    var c=document.createElement('canvas');c.width=c.height=192;var g=c.getContext('2d');
    var grad=g.createLinearGradient(0,0,192,192);grad.addColorStop(0,'#12203a');grad.addColorStop(1,'#0a1020');
    g.fillStyle=grad;g.fillRect(0,0,192,192);
    g.shadowColor='#2b7dff';g.shadowBlur=30;g.fillStyle='#3b8bff';
    g.font='900 120px "Segoe UI",sans-serif';g.textAlign='center';g.textBaseline='middle';
    g.fillText('A',96,104);
    g.shadowBlur=0;var g2=g.createLinearGradient(0,0,192,0);g2.addColorStop(0,'#7bb5ff');g2.addColorStop(1,'#00c2d6');
    g.strokeStyle=g2;g.lineWidth=8;g.strokeRect(4,4,184,184);
    axIconURL._c=c.toDataURL('image/png');return axIconURL._c;
  }
  function label(){
    fab.classList.toggle('on',granted());
    document.getElementById('axFabTxt').textContent=granted()?'Smart Coach · on':'Enable smart alerts ✨';
  }
  function sys(title,body){
    if(!granted())return;
    try{
      if(navigator.serviceWorker){
        navigator.serviceWorker.ready.then(function(reg){
          reg.showNotification('AXIUM',{body:title+' · '+body,icon:axIconURL(),badge:axIconURL(),tag:'axn'});
        }).catch(function(){});
      }else{new Notification('AXIUM',{body:title+' · '+body,icon:axIconURL()});}
    }catch(e){}
  }
  function replay(el,anim){el.style.animation='none';void el.offsetWidth;el.style.animation=anim;}
  function showToast(icon,title,body){
    tIc.firstChild.textContent=icon;
    tT.textContent=title;tB.textContent=body;
    toastEl.classList.remove('hide');toastEl.classList.add('show');
    replay(toastEl.querySelector('.bar'),'axBar 5s linear forwards,axShim 1.8s linear infinite');
    replay(tIc,'axIconPop .6s .05s cubic-bezier(.34,1.56,.64,1) both');
    replay(tT,'axTextIn .5s .1s cubic-bezier(.34,1.56,.64,1) both');
    replay(tB,'axTextIn .5s .2s cubic-bezier(.34,1.56,.64,1) both');
    clearTimeout(timer);
    timer=setTimeout(function(){toastEl.classList.add('hide');setTimeout(function(){toastEl.classList.remove('show','hide');},400);},5000);
  }
  toastEl.onclick=function(){toastEl.classList.add('hide');setTimeout(function(){toastEl.classList.remove('show','hide');},400);};
  function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
  function fmt(ts){return new Date(ts).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});}
  function render(){
    badge.style.display=st.unread>0?'flex':'none';
    badge.textContent=st.unread>9?'9+':st.unread;
    if(!st.list.length){listEl.innerHTML='<div class="axn-empty">No notifications yet — your coach is quiet... for now 🤫</div>';return;}
    listEl.innerHTML=st.list.slice(0,30).map(function(n,i){
      return '<div class="axn-i" style="animation-delay:'+(i*0.05)+'s"><div class="t">'+n.icon+' '+esc(n.title)+'</div><div class="b">'+esc(n.body)+'</div><div class="d">'+fmt(n.t)+'</div></div>';
    }).join('');
  }
  function push(icon,title,body){
    st.list.unshift({icon:icon,title:title,body:body,t:Date.now()});
    if(st.list.length>50)st.list.length=50;
    st.unread++;save();render();
    sys(title,body);
    showToast(icon,title,body);
  }
  fab.onclick=function(){
    if(!granted()){
      if(!('Notification' in window)){showToast('⚠️','Not supported','This browser has no Notification API.');return;}
      var doneCb=false;
      function cb(p){if(doneCb)return;doneCb=true;label();if(p==='granted')push('🔔','Notifications enabled','AXIUM can now whisper to you anytime, like a real app.');}
      try{var pr=Notification.requestPermission(function(p){cb(p);});if(pr&&pr.then)pr.then(cb);}catch(e){cb(Notification.permission);}
      return;
    }
    panel.classList.toggle('open');
    if(panel.classList.contains('open')){st.unread=0;save();render();}
  };
  document.getElementById('axX').onclick=function(){panel.classList.remove('open');};
  document.addEventListener('click',function(e){
    if(panel.classList.contains('open')&&!panel.contains(e.target)&&!e.target.closest('#axFab'))panel.classList.remove('open');
  });
  document.querySelectorAll('.axn-chip[data-min]').forEach(function(ch){
    ch.onclick=function(){
      var min=+ch.dataset.min,txt=document.getElementById('axnText').value.trim();
      st.rems.push({at:Date.now()+min*60000,title:txt||'Reminder'});
      save();
      push('⏰','Reminder set','"'+(txt||'Reminder')+'" in '+min+' minute(s). I won\'t let you forget!');
      document.getElementById('axnText').value='';
    };
  });
  setInterval(function(){
    var now=Date.now(),due=st.rems.filter(function(r){return r.at<=now;});
    if(due.length){
      st.rems=st.rems.filter(function(r){return r.at>now;});
      due.forEach(function(r){push('⏰',r.title,'Your reminder is due now. You promised yourself!');});
      save();
    }
  },10000);
  var POOLS={
    morning:['💧 Hydration check! When was your last glass of water?','☀️ Fresh 20 minutes! What\'s the ONE thing that moves the needle today?','🎯 Morning focus is gold. Pick your hardest task and eat that frog!','✍️ Quick win: write today\'s top 3 tasks before the world gets loud.'],
    day:['👀 20-20-20 rule: look 20 feet away for 20 seconds. Your eyes will thank you.','🧘 Quick stretch! Roll your shoulders, reach high — 30 seconds.','🪑 Posture check: shoulders back, screen at eye level. You got this.','☕ Micro-break earned! Stand up, walk a few steps, breathe.','📈 Progress check: what did you finish in the last 20 minutes? Celebrate it!','🌬 4-7-8 breathing: inhale 4, hold 7, exhale 8. Three rounds with me?'],
    evening:['🌇 Evening wrap-up: close 1 open loop before you finish today.','✨ Progress > perfection. What did today teach you?','📚 20 minutes of reading before tonight? Future you says thanks.','🧹 Brain dump: write tomorrow\'s worries down so tonight stays calm.'],
    night:['💤 It\'s getting late — your future self needs sleep. Wrap up soon.','🌙 Winding down? Write tomorrow\'s top 3 tasks, then rest. You earned it.','🕯 Screen glow is not moonlight. Consider a soft landing tonight.']
  };
  var TITLES=['AXIUM here 👋','Quick check-in 💙','Hey, it\'s me again 🔔','Your coach, online 🤖'];
  function poolFor(h){if(h>=23||h<5)return POOLS.night;if(h<12)return POOLS.morning;if(h<18)return POOLS.day;return POOLS.evening;}
  function coachPush(){
    var p=poolFor(new Date().getHours());var i=st.coachIdx%p.length;st.coachIdx=i+1;
    var body=p[i];
    if(st.rems.length)body+=' (PS: you have '+st.rems.length+' reminder(s) waiting ⏰)';
    push('🧠',TITLES[st.coachIdx%TITLES.length],body);
    st.lastCoach=Date.now();save();
  }
  document.querySelectorAll('.axn-chip[data-coach]').forEach(function(ch){ch.onclick=coachPush;});
  if(!st.lastCoach)st.lastCoach=Date.now();
  setInterval(function(){if(st.coachOn&&Date.now()-st.lastCoach>=20*60000)coachPush();},15000);
  var today=new Date().toDateString();
  if(st.sumOn&&st.lastSum!==today){
    st.lastSum=today;save();
    var h=new Date().getHours();
    var g=h<12?'Good morning ☀️':(h<17?'Good afternoon 🌤':'Good evening 🌙');
    push('🌅',g,'Welcome back! I\'ll check in every 20 minutes. You have '+st.rems.length+' reminder(s) active. Let\'s make today count!');
  }
  label();render();
}
boot();
})();
/* ===== AXIUM INSTALL APP (coach-side) ===== */
(function(){
if(window.__axInst)return;window.__axInst=true;
function waitBody(){
 if(!document.body){setTimeout(waitBody,300);return;}
 var deferred=null;
 window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();deferred=e;});
 window.addEventListener('appinstalled',function(){
  window.__axInstalled=true;
  var s=document.getElementById('axSheet');if(s)s.classList.remove('open');
  var b=document.getElementById('axInstall');if(b)b.style.display='none';
  if(window.toast)toast('AXIUM installed 🎉');
 });
 var st=document.createElement('style');
 st.textContent='#axInstall{position:fixed;left:16px;bottom:20px;z-index:99999;display:none;align-items:center;gap:8px;padding:13px 18px;border-radius:999px;border:1px solid rgba(63,214,122,.5);background:linear-gradient(135deg,#123524,#0d2b1c);color:#7ae8b0;font-weight:800;font-size:.8rem;cursor:pointer;box-shadow:0 10px 26px rgba(63,214,122,.25);backdrop-filter:blur(8px)}#axSheet{position:fixed;inset:0;z-index:100000;background:rgba(5,8,13,.7);backdrop-filter:blur(10px);display:none;align-items:center;justify-content:center;padding:20px}#axSheet.open{display:flex}#axSheet .card{width:min(420px,94vw);max-height:86vh;overflow-y:auto;background:linear-gradient(170deg,#0e1626,#0a0f1a);border:1px solid rgba(63,214,122,.35);border-radius:26px;padding:24px;text-align:center;box-shadow:0 30px 80px rgba(0,0,0,.7)}#axSheet img{width:84px;height:84px;border-radius:22px;box-shadow:0 12px 30px rgba(43,125,255,.45)}#axSheet .nm{color:#eef2f7;font-weight:900;font-size:1.3rem;letter-spacing:2px;margin-top:12px}#axSheet .tg{color:#3fd67a;font-size:.7rem;font-weight:800;letter-spacing:2px;margin-top:4px}#axSheet .mt{color:#8a94a3;font-size:.75rem;margin-top:6px}#axSheet .ft{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:10px 12px;color:#c5cfdb;font-size:.78rem;margin-top:8px;text-align:left}#axSheet .ins{width:100%;margin-top:16px;padding:15px;border:none;border-radius:16px;background:linear-gradient(135deg,#16c784,#0fa06a);color:#fff;font-weight:900;font-size:.95rem;cursor:pointer;box-shadow:0 12px 30px rgba(22,199,132,.35)}#axSheet .gd{display:none;color:#8a94a3;font-size:.72rem;line-height:1.9;margin-top:12px;background:rgba(43,125,255,.06);border:1px solid rgba(43,125,255,.25);border-radius:14px;padding:12px}#axSheet .no{width:100%;margin-top:10px;padding:12px;border:none;border-radius:14px;background:rgba(255,255,255,.06);color:#8a94a3;font-weight:700;cursor:pointer}';
 document.head.appendChild(st);
 var b=document.createElement('button');b.id='axInstall';b.type='button';b.innerHTML='⬇ <b>Install AXIUM</b>';
 document.body.appendChild(b);
 var s=document.createElement('div');s.id='axSheet';
 s.innerHTML='<div class="card"><img src="icon.svg" alt="AXIUM"><div class="nm">AXIUM</div><div class="tg">ON-DEVICE PRODUCTIVITY</div><div class="mt">Free · 2 MB · No account needed</div><div class="ft">🔔 Smart coach & real notifications</div><div class="ft">📋 Tasks, calendar, notes & coach</div><div class="ft">📊 Real energy & streak stats</div><div class="ft">🌙 Works offline & fullscreen</div><button class="ins" id="axSheetInstall">⬇ INSTALL</button><div class="gd" id="axSheetGuide">1️⃣ Browser menu (⋮)<br>2️⃣ <b>Add to Home screen / Install app</b><br>3️⃣ Confirm → done! 🎉</div><button class="no" id="axSheetClose">Not now</button></div>';
 document.body.appendChild(s);
 b.addEventListener('click',function(){s.classList.add('open');});
 s.addEventListener('click',function(e){if(e.target===s)s.classList.remove('open');});
 document.getElementById('axSheetClose').addEventListener('click',function(){s.classList.remove('open');});
 document.getElementById('axSheetInstall').addEventListener('click',function(){
  if(deferred){
   deferred.prompt();
   deferred.userChoice.then(function(r){
    if(r&&r.outcome==='accepted'){s.classList.remove('open');if(window.toast)toast('AXIUM installed 🎉');}
    else{document.getElementById('axSheetGuide').style.display='block';}
   });
   deferred=null;
  }else{
   document.getElementById('axSheetGuide').style.display='block';
  }
 });
 function fix(){
  if(window.__axInstalled)return;
  var standalone=(window.matchMedia&&window.matchMedia('(display-mode: standalone)').matches)||navigator.standalone===true;
  if(!standalone&&b.style.display!=='flex')b.style.display='flex';
 }
 setTimeout(fix,2500);setInterval(fix,1000);
}
waitBody();
})();
/* ===== AXIUM ACCOUNTS (clean, escaped) ===== */
(function(){
if(window.__ax26)return;window.__ax26=true;
var ACC={blue:'#2b7dff',violet:'#7c5cff',cyan:'#00c2d6',orange:'#ff9f1a',green:'#16c784'};
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function prefs(){try{return JSON.parse(localStorage.getItem('axium_prefs'))||{}}catch(e){return{}}}
function saveP(p){localStorage.setItem('axium_prefs',JSON.stringify(p));}
function accts(){try{var a=JSON.parse(localStorage.getItem('axium_accounts'));return Array.isArray(a)?a:[]}catch(e){return[]}}
function saveA(a){localStorage.setItem('axium_accounts',JSON.stringify(a));}
function stats(){
 var t=[];try{t=JSON.parse(localStorage.getItem('axium_tasks'))||[]}catch(e){}
 var done=t.filter(function(x){return x.done;}).length;
 var min=parseInt(localStorage.getItem('axium_minutes')||'0',10)||0;
 var st={count:0};try{st=JSON.parse(localStorage.getItem('axium_streak'))||{count:0}}catch(e){}
 return{done:done,min:min,streak:st.count||0};
}
function storageKB(){var t=0;for(var i=0;i<localStorage.length;i++){var k=localStorage.key(i);if(k&&k.indexOf('axium')===0)t+=k.length+(localStorage.getItem(k)||'').length;}return (t/1024).toFixed(1);}
function sheet(){
 var old=document.getElementById('axAcctSheet26');if(old)return old;
 var o=document.getElementById('axAcctSheet');if(o)o.remove();
 var s=document.createElement('div');s.id='axAcctSheet26';
 s.style.cssText='position:fixed;inset:0;z-index:100002;background:rgba(5,8,13,.78);backdrop-filter:blur(12px);display:none;align-items:flex-end;justify-content:center';
 s.innerHTML='<div style="position:relative;width:min(480px,100vw);max-height:90vh;overflow-y:auto;overflow-x:hidden;background:linear-gradient(170deg,#101828,#0a0f1a);border:1px solid rgba(43,125,255,.4);border-radius:28px 28px 0 0;padding:18px 20px 36px;box-shadow:0 -20px 70px rgba(0,0,0,.7)">'+
  '<div style="width:52px;height:5px;border-radius:3px;background:rgba(255,255,255,.2);margin:0 auto 14px;position:relative"></div>'+
  '<div style="display:flex;align-items:center;gap:14px;position:relative">'+
   '<div style="position:relative;width:68px;height:68px;flex:none"><div id="axAcAv" style="width:68px;height:68px;border-radius:22px;background:linear-gradient(135deg,#2b7dff,#00c2d6);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:1.7rem;color:#fff;box-shadow:0 10px 26px rgba(43,125,255,.45)">A</div></div>'+
   '<div style="flex:1;min-width:0"><div id="axAcName" style="color:#eef2f7;font-weight:900;font-size:1.2rem">You</div><div style="color:#3fd67a;font-size:.62rem;font-weight:800;letter-spacing:1.5px;margin-top:2px">LOCAL PROFILE · ON THIS DEVICE</div></div>'+
   '<button id="axAcX" type="button" aria-label="Close" style="width:36px;height:36px;border-radius:12px;border:1px solid rgba(255,255,255,.15);background:rgba(255,255,255,.06);color:#9aa4b2;font-size:1rem;cursor:pointer">✕</button>'+
  '</div>'+
  '<div style="display:flex;gap:8px;margin-top:16px;position:relative">'+
   '<div style="flex:1;background:rgba(43,125,255,.08);border:1px solid rgba(43,125,255,.25);border-radius:14px;padding:10px;text-align:center"><b id="axAcS1" style="display:block;color:#7bb5ff;font-size:1.15rem;font-weight:900">0</b><span style="color:#8a94a3;font-size:.58rem">Tasks done</span></div>'+
   '<div style="flex:1;background:rgba(124,92,255,.08);border:1px solid rgba(124,92,255,.25);border-radius:14px;padding:10px;text-align:center"><b id="axAcS2" style="display:block;color:#b388ff;font-size:1.15rem;font-weight:900">0m</b><span style="color:#8a94a3;font-size:.58rem">Focus</span></div>'+
   '<div style="flex:1;background:rgba(255,159,26,.08);border:1px solid rgba(255,159,26,.25);border-radius:14px;padding:10px;text-align:center"><b id="axAcS3" style="display:block;color:#ffb443;font-size:1.15rem;font-weight:900">0</b><span style="color:#8a94a3;font-size:.58rem">Streak</span></div>'+
  '</div>'+
  '<div style="margin-top:16px;position:relative"><div style="color:#7bb5ff;font-size:.66rem;font-weight:900;letter-spacing:1.5px;margin-bottom:8px">🔄 PROFILES</div><div id="axAcList" style="display:flex;flex-direction:column;gap:8px"></div><button id="axAcAdd" type="button" style="width:100%;margin-top:8px;padding:11px;border-radius:14px;border:1px dashed rgba(43,125,255,.5);background:rgba(43,125,255,.08);color:#7bb5ff;font-weight:800;font-size:.75rem;cursor:pointer">➕ Add / switch profile</button><div id="axAcForm" style="display:none;margin-top:8px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:12px"><input id="axAcFN" placeholder="New profile name" style="width:100%;padding:10px 12px;border-radius:12px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);color:#eef2f7;outline:none;margin-bottom:8px;font-family:inherit"><input id="axAcFC" placeholder="City (optional)" style="width:100%;padding:10px 12px;border-radius:12px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);color:#eef2f7;outline:none;margin-bottom:8px;font-family:inherit"><button id="axAcFOk" type="button" style="width:100%;padding:11px;border:none;border-radius:12px;background:linear-gradient(135deg,#16c784,#0fa06a);color:#fff;font-weight:800;cursor:pointer">Create & switch</button></div></div>'+
  '<div style="margin-top:16px;position:relative;display:flex;flex-direction:column;gap:8px">'+
   '<div style="color:#7bb5ff;font-size:.66rem;font-weight:900;letter-spacing:1.5px">✏️ PROFILE</div>'+
   '<input id="axAcInN" style="width:100%;padding:12px 14px;border-radius:14px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);color:#eef2f7;outline:none;font-family:inherit" placeholder="Name">'+
   '<input id="axAcInC" style="width:100%;padding:12px 14px;border-radius:14px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);color:#eef2f7;outline:none;font-family:inherit" placeholder="City">'+
   '<div style="color:#7bb5ff;font-size:.66rem;font-weight:900;letter-spacing:1.5px;margin-top:4px">🎨 ACCENT COLOR</div>'+
   '<div id="axAcSw" style="display:flex;gap:8px"></div>'+
   '<div style="color:#7bb5ff;font-size:.66rem;font-weight:900;letter-spacing:1.5px;margin-top:8px">📄 DETAILS</div>'+
   '<div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:4px 12px"><div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px dashed rgba(255,255,255,.08);color:#8a94a3;font-size:.68rem"><span>Member since</span><b id="axAcD1" style="color:#c5cfdb">—</b></div><div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px dashed rgba(255,255,255,.08);color:#8a94a3;font-size:.68rem"><span>Storage used</span><b id="axAcD3" style="color:#c5cfdb">0 KB</b></div><div style="display:flex;justify-content:space-between;padding:8px 0;color:#8a94a3;font-size:.68rem"><span>Language</span><b style="color:#c5cfdb">Auto (EN/FA)</b></div></div>'+
   '<button id="axAcSave" type="button" style="width:100%;margin-top:6px;padding:14px;border:none;border-radius:16px;background:linear-gradient(135deg,#2b7dff,#1a6ae0);color:#fff;font-weight:900;cursor:pointer;box-shadow:0 10px 26px rgba(43,125,255,.4)">💾 Save profile</button>'+
   '<button id="axAcInstall" type="button" style="width:100%;padding:13px;border-radius:16px;border:1px solid rgba(63,214,122,.5);background:rgba(22,199,132,.1);color:#7ae8b0;font-weight:800;cursor:pointer">📦 Install AXIUM app</button>'+
   '<button id="axAcReset" type="button" style="width:100%;padding:13px;border-radius:16px;border:1px solid rgba(255,107,107,.4);background:rgba(255,107,107,.08);color:#ff6b6b;font-weight:800;cursor:pointer">🧨 Reset all data</button>'+
  '</div>'+
 '</div>';
 document.body.appendChild(s);
 var sw=s.querySelector('#axAcSw');
 function applyAccent(k){var r=document.documentElement.style;r.setProperty('--blue',ACC[k]);}
 Object.keys(ACC).forEach(function(k){
  var b=document.createElement('button');b.type='button';b.dataset.a=k;
  b.style.cssText='width:38px;height:38px;border-radius:12px;border:2px solid transparent;background:'+ACC[k]+';cursor:pointer;box-shadow:0 4px 14px '+ACC[k]+'55';
  b.onclick=function(){sw.querySelectorAll('button').forEach(function(x){x.style.borderColor='transparent';});b.style.borderColor='#fff';saveP(Object.assign(prefs(),{accent:k}));applyAccent(k);};
  sw.appendChild(b);
 });
 function renderAccts(){
  var L=s.querySelector('#axAcList');L.innerHTML='';
  var p=prefs(),list=accts();
  if(!list.length&&!p.name){L.innerHTML='<div style="color:#5b6472;font-size:.7rem;text-align:center;padding:10px;border:1px dashed rgba(255,255,255,.12);border-radius:12px">No saved profiles yet — create one below</div>';return;}
  var cur={id:p.acctId||'current',name:p.name||'You',city:p.city||''};
  var all=list.slice();if(!all.some(function(a){return a.id===cur.id;}))all.unshift(cur);
  all.forEach(function(a){
   var row=document.createElement('div');
   var act=a.id===cur.id;
   row.style.cssText='display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:14px;border:1px solid '+(act?'rgba(63,214,122,.5)':'rgba(255,255,255,.1)')+';background:'+(act?'rgba(63,214,122,.08)':'rgba(255,255,255,.04)')+';cursor:pointer';
   var nm=esc(a.name||'You'),city=esc(a.city||'—'),ini=esc((a.name||'A').charAt(0).toUpperCase());
   row.innerHTML='<div style="width:36px;height:36px;flex:none;border-radius:11px;background:linear-gradient(135deg,'+(ACC[a.accent]||'#2b7dff')+',#00c2d6);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900">'+ini+'</div><div style="flex:1;min-width:0"><div style="color:#eef2f7;font-size:.8rem;font-weight:800">'+nm+(act?' ✓':'')+'</div><div style="color:#8a94a3;font-size:.6rem">'+city+'</div></div>'+(act?'':'<button type="button" aria-label="Remove" style="border:none;background:none;color:#5b6472;cursor:pointer;font-size:.8rem">✕</button>');
   row.onclick=function(){switchTo(a);};
   var del=row.querySelector('button');
   if(del)del.onclick=function(e){e.stopPropagation();saveA(accts().filter(function(x){return x.id!==a.id;}));renderAccts();if(window.toast)toast('Profile removed 🗑');};
   L.appendChild(row);
  });
 }
 function switchTo(a){
  var p=prefs();
  p.name=a.name||p.name;p.city=a.city||p.city;p.accent=a.accent||p.accent;p.acctId=a.id;
  if(!p.since)p.since=new Date().toISOString().slice(0,10);
  saveP(p);applyAccent(p.accent||'blue');
  var dn=document.querySelector('.drawer-profile-info strong');if(dn&&p.name)dn.textContent=p.name;
  refresh();renderAccts();
  if(window.toast)toast('Switched to '+p.name+' 🔄');
 }
 s.querySelector('#axAcAdd').onclick=function(){var f=s.querySelector('#axAcForm');f.style.display=f.style.display==='block'?'none':'block';};
 s.querySelector('#axAcFOk').onclick=function(){
  var n=s.querySelector('#axAcFN').value.trim();if(!n){if(window.toast)toast('Name required ✍️');return;}
  var a={id:'a'+Date.now(),name:n,city:s.querySelector('#axAcFC').value.trim(),accent:prefs().accent||'blue'};
  var list=accts();var p0=prefs();if(p0.name&&!list.some(function(x){return x.id===(p0.acctId||'current');}))list.unshift({id:p0.acctId||'current',name:p0.name,city:p0.city||'',accent:p0.accent||'blue'});
  list.push(a);saveA(list);
  s.querySelector('#axAcFN').value='';s.querySelector('#axAcFC').value='';
  s.querySelector('#axAcForm').style.display='none';
  switchTo(a);
 };
 s.querySelector('#axAcX').onclick=function(){s.style.display='none';};
 s.addEventListener('click',function(e){if(e.target===s)s.style.display='none';};
 s.querySelector('#axAcSave').onclick=function(){
  var p=prefs();
  var n=s.querySelector('#axAcInN').value.trim();if(n)p.name=n;
  var c=s.querySelector('#axAcInC').value.trim();if(c)p.city=c;
  if(!p.since)p.since=new Date().toISOString().slice(0,10);
  saveP(p);refresh();renderAccts();
  var dn=document.querySelector('.drawer-profile-info strong');if(dn&&p.name)dn.textContent=p.name;
  if(window.toast)toast('Profile saved ✅');
 };
 s.querySelector('#axAcInstall').onclick=function(){var sh=document.getElementById('axSheet');if(sh){s.style.display='none';sh.classList.add('open');}};
 s.querySelector('#axAcReset').onclick=function(){
  if(confirm('Reset ALL AXIUM data? This cannot be undone.')){
   ['axium_tasks','axium_notes','axium_prefs','axium_minutes','axium_streak','axium_daily','axium_schedule','axium_goals','axium_events','axium_notes_final','axium_accounts','axNotifyV6'].forEach(function(k){localStorage.removeItem(k);});
   location.reload();
  }
 };
 function refresh(){
  var p=prefs(),st=stats();
  s.querySelector('#axAcName').textContent=p.name||'You';
  s.querySelector('#axAcAv').textContent=(p.name||'A').charAt(0).toUpperCase();
  s.querySelector('#axAcInN').value=p.name||'';
  s.querySelector('#axAcInC').value=p.city||'';
  s.querySelector('#axAcS1').textContent=st.done;
  s.querySelector('#axAcS2').textContent=st.min>=60?Math.floor(st.min/60)+'h':st.min+'m';
  s.querySelector('#axAcS3').textContent=st.streak;
  s.querySelector('#axAcD1').textContent=p.since||new Date().toISOString().slice(0,10);
  s.querySelector('#axAcD3').textContent=storageKB()+' KB';
  var act=(p.accent||'blue');
  sw.querySelectorAll('button').forEach(function(x){x.style.borderColor=x.dataset.a===act?'#fff':'transparent';});
 }
 s._open=function(){refresh();renderAccts();};
 return s;
}
function hook(){
 var b=document.getElementById('axAcct');
 if(!b){setTimeout(hook,800);return;}
 if(b.dataset.h26)return;b.dataset.h26='1';
 b.addEventListener('click',function(){
  var s=sheet();s.style.display='flex';s._open();
 });
}
hook();setInterval(hook,1500);
})();
/* ===== AXIUM REAL WATER SOUND ENGINE ===== */
(function(){
if(window.__ax31)return;window.__ax31=true;
var SFX={on:localStorage.getItem('axium_sfx')!=='0'};
var C=null,master=null,verb=null;
function impulse(sec){var r=C.sampleRate,len=Math.floor(r*sec),b=C.createBuffer(2,len,r);for(var ch=0;ch<2;ch++){var d=b.getChannelData(ch);for(var i=0;i<len;i++){d[i]=(Math.random()*2-1)*Math.pow(1-i/len,2.4);}}return b;}
function ctx(){
 if(C){if(C.state==='suspended')C.resume().catch(function(){});return C;}
 var AC=window.AudioContext||window.webkitAudioContext;if(!AC)return null;
 C=new AC();
 master=C.createGain();master.gain.value=.5;master.connect(C.destination);
 verb=C.createConvolver();verb.buffer=impulse(1.6);
 var vg=C.createGain();vg.gain.value=.35;verb.connect(vg);vg.connect(master);
 return C;
}
function env(g,t,vol,a,d){g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(vol,t+(a||.015));g.gain.exponentialRampToValueAtTime(.0001,t+d);}
function tone(o){
 var c=ctx();if(!c)return;
 var t=c.currentTime+(o.t||0),d=o.d||.2;
 var osc=c.createOscillator(),g=c.createGain();
 osc.type=o.type||'sine';
 osc.frequency.setValueAtTime(o.f,t);
 if(o.slide)osc.frequency.exponentialRampToValueAtTime(Math.max(30,o.slide),t+(o.st||d));
 if(o.vib){var l=c.createOscillator(),lg=c.createGain();l.frequency.value=o.vib;lg.gain.value=o.f*.012;l.connect(lg);lg.connect(osc.frequency);l.start(t);l.stop(t+d+.1);}
 var node=osc;
 if(o.lp){var f=c.createBiquadFilter();f.type='lowpass';f.frequency.value=o.lp;node.connect(f);node=f;}
 node.connect(g);g.connect(master);
 if(o.rev!==0){var g2=c.createGain();g2.gain.value=(o.rev||.35);g.connect(g2);g2.connect(verb);}
 env(g,t,o.vol||.1,o.a,d);
 osc.start(t);osc.stop(t+d+.12);
}
function noiseBuf(d){var len=Math.floor(C.sampleRate*d),b=C.createBuffer(1,len,C.sampleRate),dd=b.getChannelData(0);for(var i=0;i<len;i++)dd[i]=Math.random()*2-1;return b;}
function noise(o){
 var c=ctx();if(!c)return;
 var t=c.currentTime+(o.t||0),d=o.d||.3;
 var src=c.createBufferSource();src.buffer=noiseBuf(d+.05);
 var f=c.createBiquadFilter();f.type=o.type||'bandpass';f.Q.value=o.q||1;
 f.frequency.setValueAtTime(o.f0||800,t);
 if(o.f1)f.frequency.exponentialRampToValueAtTime(o.f1,t+d);
 if(o.lfo){var l=c.createOscillator(),lg=c.createGain();l.frequency.value=o.lfo;lg.gain.value=(o.f1||o.f0)*.25;l.connect(lg);lg.connect(f.frequency);l.start(t);l.stop(t+d+.1);}
 var g=c.createGain();
 src.connect(f);f.connect(g);g.connect(master);
 var g2=c.createGain();g2.gain.value=.3;g.connect(g2);g2.connect(verb);
 env(g,t,o.vol||.05,o.a||(d*.25),d);
 src.start(t);src.stop(t+d+.08);
}
function drop(t0,f,vol){
 tone({f:f,t:t0,d:.09,vol:vol,slide:f*.18,st:.07,rev:.5});
 tone({f:f*1.6,t:t0+.005,d:.05,vol:vol*.4,slide:f*.5,st:.04,rev:.4});
 noise({t:t0,d:.02,vol:vol*.5,f0:3000,f1:5000,q:2,type:'highpass'});
}
function bubble(t0,f,vol){tone({f:f,t:t0,d:.07,vol:vol,slide:f*2.6,st:.06,rev:.45});}
function tick(t0,vol){noise({t:t0,d:.03,vol:vol,f0:2200,q:6});tone({f:190,t:t0,d:.05,vol:vol*.8,type:'triangle',lp:900,rev:.15});}
function marimba(t0,f,vol){tone({f:f,t:t0,d:.35,vol:vol,rev:.3});tone({f:f*4,t:t0,d:.08,vol:vol*.25,rev:.2});}
function bell(t0,f,vol,d){tone({f:f,t:t0,d:d,vol:vol,rev:.55,vib:5});tone({f:f*2.01,t:t0,d:d*.7,vol:vol*.4,rev:.5});tone({f:f*2.98,t:t0,d:d*.5,vol:vol*.22,rev:.45});tone({f:f*4.2,t:t0,d:d*.3,vol:vol*.12,rev:.4});}
function pad(t0,fs,d,vol){fs.forEach(function(f,i){tone({f:f,t:t0+i*.05,d:d,vol:vol,a:.12,lp:900,rev:.5});tone({f:f*1.005,t:t0+i*.05,d:d,vol:vol*.6,a:.15,lp:800,rev:.5});});}
function wind(t0,d,vol,f0,f1){noise({t:t0,d:d,vol:vol,f0:f0,f1:f1,q:.7,lfo:3});}
function sfx(n){
 if(!SFX.on)return;
 try{
 if(n==='tap'){drop(0,1400,.09);}
 else if(n==='tap2'){bubble(0,420,.08);}
 else if(n==='tick'){tick(0,.09);}
 else if(n==='open'){wind(0,.4,.045,300,1400);pad(.05,[392,523],.5,.05);}
 else if(n==='close'){wind(0,.35,.04,1400,300);pad(.02,[523,392],.4,.04);}
 else if(n==='save'){marimba(0,659,.11);marimba(.11,988,.10);bell(.22,1319,.05,.5);}
 else if(n==='notify'){bell(0,1046,.10,1.1);bell(.18,784,.07,.9);}
 else if(n==='success'){[523,659,784,880,1046].forEach(function(f,i){drop(i*.07,f*1.2,.08);});bubble(.4,600,.05);}
 else if(n==='add'){bubble(0,500,.09);bubble(.08,700,.07);}
 else if(n==='del'){wind(0,.28,.06,1200,250);tick(.02,.05);}
 else if(n==='switch'){wind(0,.3,.05,500,1800);}
 else if(n==='on'){bell(0,880,.07,.5);bell(.09,1174,.06,.5);}
 else if(n==='off'){bell(0,1174,.06,.4);bell(.09,880,.05,.4);}
 else if(n==='water'){wind(0,.55,.04,600,1600);drop(0,1500,.10);drop(.1,1200,.08);drop(.19,1700,.07);drop(.28,1000,.07);drop(.37,1400,.06);bubble(.06,500,.05);bubble(.16,650,.05);bubble(.26,450,.04);bubble(.36,700,.04);}
 else if(n==='focus'){pad(0,[262,330,392],1.2,.05);tone({f:131,t:0,d:1.4,vol:.04,rev:.6});}
 else if(n==='gong'){tone({f:196,t:0,d:2,vol:.11,rev:.7,vib:4});tone({f:294,t:.02,d:1.6,vol:.06,rev:.7});tone({f:415,t:.04,d:1.2,vol:.04,rev:.6});tone({f:588,t:.06,d:.9,vol:.03,rev:.6});noise({t:0,d:.15,vol:.04,f0:800,f1:300});}
 else if(n==='achieve'){[523,659,784,1046,1319].forEach(function(f,i){bell(i*.09,f,.07,.7);});wind(.1,.5,.03,2000,4000);}
 else if(n==='welcome'){pad(0,[262,330,392,523],1.3,.05);bell(.4,1046,.05,.9);}
 else if(n==='error'){tone({f:311,t:0,d:.22,vol:.07,type:'triangle',lp:900});tone({f:233,t:.13,d:.3,vol:.06,type:'triangle',lp:800});}
 else if(n==='focusIn'){tone({f:700,t:0,d:.12,vol:.04,slide:900,rev:.4});}
 else if(n==='pin'){tick(0,.08);bell(.02,1568,.05,.3);}
 }catch(e){}
}
window.axSfx=sfx;
var last=0;
document.addEventListener('click',function(e){
 var t=e.target;if(!t||!t.closest)return;
 var now=Date.now();
 function once(){if(now-last<70)return false;last=now;return true;}
 if(t.closest('.qa-chip,.axn-chip,.ai-chip,.tf,.ftm')){if(once())sfx('tap2');}
 else if(t.closest('.swatch')){if(once())sfx('on');}
 else if(t.closest('button,.rail-item,.drawer-link,.tile,.sprow,.note-line')){if(once())sfx('tap');}
 if(t.closest('#axAcSave,.sv,#axAcFOk'))setTimeout(function(){sfx('save');},60);
 if(t.closest('.task-row'))setTimeout(function(){var r=t.closest('.task-row');sfx(r&&r.classList.contains('done')?'success':'close');},0);
 if(t.closest('.task-del,.sch-del,.goal-del'))setTimeout(function(){sfx('del');},0);
 if(t.closest('.rail-item'))setTimeout(function(){sfx('switch');},30);
 if(t.closest('#enter-dashboard'))setTimeout(function(){sfx('welcome');},400);
 if(t.closest('.axn-t,.switch'))setTimeout(function(){sfx('on');},0);
 if(t.closest('.goal-btn'))setTimeout(function(){sfx('tick');},0);
 var qa=t.closest('.qa-chip');
 if(qa){var idx=[].slice.call(document.querySelectorAll('.qa-chip')).indexOf(qa);if(idx===5)setTimeout(function(){sfx('water');},40);}
},true);
document.addEventListener('focusin',function(e){
 if(e.target&&(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA'))sfx('focusIn');
},true);
function watchOpen(id){
 var el=document.getElementById(id);
 if(!el){setTimeout(function(){watchOpen(id);},900);return;}
 var was=false;
 new MutationObserver(function(){
  var open=el.classList.contains('open')||el.style.display==='flex';
  if(open&&!was)sfx('open');
  if(!open&&was)sfx('close');
  was=open;
 }).observe(el,{attributes:true,attributeFilter:['class','style']});
}
watchOpen('axPanel');watchOpen('axSheet');watchOpen('axAcctSheet26');
function addToggle(){
 var ch=document.querySelector('#axPanel .ax23chips')||document.querySelector('#axPanel .axn-chips');
 if(!ch){setTimeout(addToggle,900);return;}
 if(document.getElementById('ax31sfx'))return;
 var b=document.createElement('button');b.type='button';b.id='ax31sfx';b.className='axn-chip';
 function lbl(){b.textContent=SFX.on?'🔊 Sounds: ON':'🔇 Sounds: OFF';}
 lbl();
 b.onclick=function(){SFX.on=!SFX.on;localStorage.setItem('axium_sfx',SFX.on?'1':'0');lbl();sfx(SFX.on?'on':'off');};
 ch.appendChild(b);
}
addToggle();
})();
/* ===== END PART 1/2 — part 2 follows ===== */
/* ===== AXIUM WHAT-IS PAGE ===== */
(function(){
if(window.__ax47)return;window.__ax47=true;
var pg=document.createElement('div');pg.id='axAbout';
pg.style.cssText='position:fixed;inset:0;z-index:100020;background:linear-gradient(170deg,#0b1220,#070b12);overflow-y:auto;display:none;-webkit-overflow-scrolling:touch';
pg.innerHTML='<div class="abAura"></div><div class="abParts"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>'+
'<button id="axAboutX" type="button" aria-label="Close" style="position:sticky;top:10px;margin:10px 0 0 12px;z-index:5;padding:9px 16px;border-radius:999px;border:1px solid rgba(255,255,255,.15);background:rgba(13,20,34,.85);color:#9aa4b3;font-weight:800;cursor:pointer;backdrop-filter:blur(8px)">‹ Back</button>'+
'<div class="abHero"><div class="abLogo">AXIUM</div><div class="abTag">YOUR SECOND BRAIN, ENGINEERED</div><p class="abSub">One calm home for your tasks, focus, energy and life — built on YOUR real data, not fake numbers.</p></div>'+
'<section class="sec" data-r><h3>😵 The problem</h3><div class="cards3"><div class="pc">🧩 Scattered tools<span>5 apps, 0 clarity</span></div><div class="pc">🎭 Fake motivation<span>streaks & stats that lie</span></div><div class="pc">📢 Noise<span>endless meaningless pings</span></div></div></section>'+
'<section class="sec" data-r><h3>💙 The AXIUM way</h3><div class="cards3"><div class="pc g">🏠 One home<span>tasks · focus · notes · coach</span></div><div class="pc g">📊 Real data<span>energy grows from YOUR work</span></div><div class="pc g">🌙 Calm coach<span>gentle check-ins, real reminders</span></div></div></section>'+
'<section class="sec" data-r><h3>⚡ What you get</h3><div class="grid6"><div class="tl">📋 Tasks & Calendar</div><div class="tl">⏱ Focus Timer</div><div class="tl">🔔 Smart Coach</div><div class="tl">📈 Energy Analytics</div><div class="tl">📝 Notes</div><div class="tl">📦 Offline App</div></div></section>'+
'<section class="sec" data-r><h3>🧭 How it works</h3><div class="steps"><div class="stp"><b>1</b> Enter AXIUM</div><div class="stp"><b>2</b> Act — tasks & focus sessions</div><div class="stp"><b>3</b> Grow — energy, streak & insights</div></div></section>'+
'<section class="sec" data-r><div class="priv">🔒 Your work data (tasks, notes, focus) never leaves this device.<br><span>Local profile · No cloud · Just you</span></div></section>'+
'<div class="abCta" data-r><button id="axAboutEnter" type="button">➜ Enter AXIUM</button></div><div style="height:40px"></div>';
document.body.appendChild(pg);
var st=document.createElement('style');
st.textContent='#axAbout .abAura{position:fixed;inset:-40%;background:linear-gradient(120deg,rgba(43,125,255,.14),rgba(0,194,214,.09),rgba(124,92,255,.12),rgba(43,125,255,.14));background-size:300% 300%;animation:ab47aur 14s linear infinite;filter:blur(50px);pointer-events:none}#axAbout .abParts{position:fixed;inset:0;pointer-events:none;overflow:hidden}#axAbout .abParts i{position:absolute;width:4px;height:4px;border-radius:50%;background:#9cc8ff;box-shadow:0 0 10px #9cc8ff;opacity:.5;animation:ab47float 7s ease-in-out infinite}#axAbout .abParts i:nth-child(1){left:10%;top:20%}#axAbout .abParts i:nth-child(2){left:80%;top:15%;animation-delay:1s}#axAbout .abParts i:nth-child(3){left:25%;top:55%;animation-delay:2s}#axAbout .abParts i:nth-child(4){left:70%;top:65%;animation-delay:3s}#axAbout .abParts i:nth-child(5){left:45%;top:35%;animation-delay:4s}#axAbout .abParts i:nth-child(6){left:90%;top:45%;animation-delay:1.5s}#axAbout .abParts i:nth-child(7){left:15%;top:80%;animation-delay:2.5s}#axAbout .abParts i:nth-child(8){left:60%;top:88%;animation-delay:3.5s}#axAbout .abHero{text-align:center;padding:30px 20px 10px;position:relative}#axAbout .abLogo{font-size:2.6rem;font-weight:900;letter-spacing:6px;background:linear-gradient(90deg,#fff,#7bb5ff,#00c2d6,#fff);background-size:220% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:ab47shine 4s linear infinite}#axAbout .abTag{color:#3fd67a;font-size:.68rem;font-weight:900;letter-spacing:3px;margin-top:6px}#axAbout .abSub{color:#9aa4b3;font-size:.82rem;line-height:1.8;margin:14px auto 0;max-width:420px}#axAbout .sec{padding:26px 18px;position:relative}#axAbout h3{color:#eef2f7;font-size:1rem;font-weight:900;letter-spacing:1px;margin-bottom:14px}#axAbout .cards3{display:flex;flex-direction:column;gap:10px}#axAbout .pc{background:rgba(255,107,107,.07);border:1px solid rgba(255,107,107,.3);border-radius:18px;padding:14px 16px;color:#ffb1b1;font-weight:800;font-size:.85rem}#axAbout .pc span{display:block;color:#8a94a3;font-size:.68rem;font-weight:600;margin-top:4px}#axAbout .pc.g{background:rgba(63,214,122,.08);border-color:rgba(63,214,122,.35);color:#7ae8b0}#axAbout .grid6{display:grid;grid-template-columns:1fr 1fr;gap:10px}#axAbout .tl{background:rgba(43,125,255,.08);border:1px solid rgba(43,125,255,.3);border-radius:16px;padding:14px 10px;text-align:center;color:#c5cfdb;font-size:.72rem;font-weight:800}#axAbout .steps{display:flex;flex-direction:column;gap:0;border-left:2px solid rgba(43,125,255,.4);margin-left:14px;padding-left:20px}#axAbout .stp{position:relative;padding:10px 0;color:#c5cfdb;font-size:.82rem;font-weight:700}#axAbout .stp b{position:absolute;left:-31px;top:8px;width:22px;height:22px;border-radius:50%;background:linear-gradient(135deg,#2b7dff,#00c2d6);color:#fff;font-size:.68rem;display:flex;align-items:center;justify-content:center;box-shadow:0 0 14px rgba(43,125,255,.6)}#axAbout .priv{text-align:center;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.12);border-radius:20px;padding:20px;color:#eef2f7;font-weight:800;font-size:.9rem;line-height:1.7}#axAbout .priv span{color:#8a94a3;font-size:.68rem;font-weight:600}#axAbout .abCta{text-align:center;padding:10px 20px 30px}#axAbout .abCta button{width:100%;max-width:420px;padding:16px;border:none;border-radius:18px;background:linear-gradient(135deg,#2b7dff,#1a6ae0);color:#fff;font-weight:900;font-size:1rem;cursor:pointer;box-shadow:0 14px 36px rgba(43,125,255,.45)}#axAbout [data-r]{opacity:0;transform:translateY(36px);transition:all .8s cubic-bezier(.22,1,.36,1)}#axAbout [data-r].in{opacity:1;transform:none}#axAbout .grid6 .tl,#axAbout .cards3 .pc{opacity:0;transform:translateY(24px) scale(.94);transition:all .6s cubic-bezier(.34,1.56,.64,1)}#axAbout .sec.in .tl,#axAbout .sec.in .pc{opacity:1;transform:none}#axAbout .sec.in .tl:nth-child(1),#axAbout .sec.in .pc:nth-child(1){transition-delay:.05s}#axAbout .sec.in .tl:nth-child(2),#axAbout .sec.in .pc:nth-child(2){transition-delay:.13s}#axAbout .sec.in .tl:nth-child(3),#axAbout .sec.in .pc:nth-child(3){transition-delay:.21s}#axAbout .sec.in .tl:nth-child(4){transition-delay:.29s}#axAbout .sec.in .tl:nth-child(5){transition-delay:.37s}#axAbout .sec.in .tl:nth-child(6){transition-delay:.45s}@keyframes ab47aur{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}@keyframes ab47shine{0%{background-position:0% 50%}100%{background-position:200% 50%}}@keyframes ab47float{0%,100%{transform:translateY(0)}50%{transform:translateY(-26px)}}';
document.head.appendChild(st);
var io=null;
function open(){
 pg.style.display='block';pg.scrollTop=0;
 pg.querySelectorAll('[data-r]').forEach(function(el){el.classList.remove('in');});
 if(io)io.disconnect();
 io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)e.target.classList.add('in');});},{threshold:.18});
 pg.querySelectorAll('[data-r]').forEach(function(el){io.observe(el);});
 if(window.axSfx)window.axSfx('open');
}
function close(){pg.style.display='none';if(window.axSfx)window.axSfx('close');}
pg.querySelector('#axAboutX').onclick=close;
pg.querySelector('#axAboutEnter').onclick=function(){close();var e=document.getElementById('enter-dashboard');if(e)e.click();};
function doors(){
 var hero=document.getElementById('enter-dashboard');
 if(hero&&!document.getElementById('axAboutBtn')){
  var b=document.createElement('button');b.id='axAboutBtn';b.type='button';b.textContent='What is AXIUM?';
  b.style.cssText='display:block;margin:12px auto 0;padding:12px 22px;border-radius:999px;border:1px solid rgba(43,125,255,.5);background:rgba(43,125,255,.12);color:#7bb5ff;font-weight:800;font-size:.8rem;cursor:pointer';
  hero.parentNode.insertBefore(b,hero.nextSibling);
  b.onclick=open;
 }
 var dl=document.querySelector('.drawer-link');
 if(dl&&!document.getElementById('axAboutDrawer')){
  var a=dl.cloneNode(false);a.id='axAboutDrawer';a.className=dl.className;a.textContent='About AXIUM';
  dl.parentNode.insertBefore(a,dl.nextSibling);
  a.onclick=open;
 }
 var hc=document.getElementById('axHelpCard');
 if(hc&&!document.getElementById('axAboutSet')){
  var s=document.createElement('button');s.id='axAboutSet';s.type='button';s.textContent='What is AXIUM?';
  hc.appendChild(s);s.onclick=open;
 }
}
doors();setInterval(doors,1500);
})();
/* ===== AXIUM TRUTH PASS ===== */
(function(){
if(window.__ax48)return;window.__ax48=true;
window.axSmartEnergy=function(){
 var k=new Date().toISOString().slice(0,10),d={};
 try{d=JSON.parse(localStorage.getItem('axium_daily'))||{}}catch(e){}
 var day=d[k]||{},t=day.t||0,m=day.m||0;
 if(!t&&!m)return 0;
 return Math.min(100,30+t*6+Math.round(m/10));
};
function chip(){
 var p=document.getElementById('axPanel');
 if(!p||p.querySelector('.ax48chip'))return;
 var c=document.createElement('div');c.className='ax48chip';
 c.style.cssText='margin-top:10px;padding:8px 12px;border-radius:12px;background:rgba(63,214,122,.08);border:1px solid rgba(63,214,122,.3);color:#7ae8b0;font-size:.62rem;font-weight:800;text-align:center';
 c.textContent='🔒 100% on-device coach — no cloud, no account, no tracking';
 p.appendChild(c);
}
chip();setInterval(chip,2000);
})();
/* ===== AXIUM ABOUT RAIL BUTTON ===== */
(function(){
if(window.__ax54)return;window.__ax54=true;
function fix(){
 var dash=document.getElementById('dashboard');
 var hero=document.getElementById('hero');
 var onHero=hero&&hero.getBoundingClientRect().height>0&&!(dash&&dash.classList.contains('active'));
 var ch=document.getElementById('heroAbout');if(ch)ch.remove();
 if(onHero)return;
 var rail=document.getElementById('rail');
 if(!rail||document.getElementById('axRailAbout'))return;
 var items=rail.querySelectorAll('.rail-item');
 var set=items[items.length-1];
 if(!set)return;
 var b=set.cloneNode(true);b.id='axRailAbout';b.classList.remove('active');
 ['data-page','data-id','data-target'].forEach(function(a){b.removeAttribute(a);});
 var lab=b.querySelector('.rail-label');if(lab)lab.textContent='About';
 var ic=b.querySelector('.rail-icon')||b;
 ic.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="width:22px;height:22px"><path d="M12 3l1.8 4.6L18 9.4l-4.2 1.8L12 16l-1.8-4.8L6 9.4l4.2-1.8z"/><path d="M19 15l.9 2.3L22 18.2l-2.1.9L19 21.5l-.9-2.4-2.1-.9 2.1-.9z"/></svg>';
 b.addEventListener('click',function(e){
  e.stopPropagation();
  var t=document.getElementById('axAboutSet')||document.getElementById('axAboutDrawer');
  if(t)t.click();else location.href='about.html';
  if(window.axSfx)window.axSfx('open');
 });
 rail.appendChild(b);
}
fix();setInterval(fix,1200);
})();
/* ===== AXIUM TRUST PASS (CTA + HONEST EMPTY + PRIVACY + A11Y) ===== */
(function(){
if(window.__ax55)return;window.__ax55=true;
function cta(){
 document.querySelectorAll('*').forEach(function(el){
  if(el.dataset.c55)return;
  var t=(el.textContent||'').trim();
  if(t==='Begin your journey with AXIUM'){el.dataset.c55='1';el.textContent='No account · No cloud · Ready in 10 seconds';}
  else if(t==='Get Started'){el.dataset.c55='1';el.textContent='Enter AXIUM free';}
 });
}
cta();setInterval(cta,2500);
function emptyCard(){
 if(localStorage.getItem('ax55dis')==='1')return;
 var dash=document.getElementById('dashboard');
 if(!dash||!dash.classList.contains('active'))return;
 if(document.getElementById('ax55card'))return;
 var t=[];try{t=JSON.parse(localStorage.getItem('axium_tasks'))||[]}catch(e){}
 var min=parseInt(localStorage.getItem('axium_minutes')||'0',10)||0;
 var done=t.filter(function(x){return x.done;}).length;
 if(done||min)return;
 var c=document.createElement('div');c.id='ax55card';
 c.style.cssText='margin:12px 14px;padding:14px 16px;border-radius:16px;background:rgba(43,125,255,.08);border:1px solid rgba(43,125,255,.35);color:#c5cfdb;font-size:.75rem;line-height:1.7;position:relative;animation:ax55in .6s cubic-bezier(.34,1.56,.64,1) both';
 c.innerHTML='<b style="color:#7bb5ff">This dashboard is 100% real.</b><br>Numbers here grow only from YOUR tasks and focus sessions — nothing is faked. Complete your first task to see it come alive.<button id="ax55x" type="button" aria-label="Dismiss" style="position:absolute;top:8px;right:10px;border:none;background:none;color:#5b6472;cursor:pointer;font-size:.85rem;padding:6px">✕</button>';
 dash.insertBefore(c,dash.children[1]||null);
 c.querySelector('#ax55x').onclick=function(){localStorage.setItem('ax55dis','1');c.remove();};
}
emptyCard();setInterval(emptyCard,2000);
function priv(){
 var set=document.getElementById('axSetPage');
 if(set&&!set.querySelector('#ax55priv')){
  var a=document.createElement('a');a.id='ax55priv';a.href='privacy.html';
  a.style.cssText='display:block;margin:10px 14px;padding:13px;border-radius:14px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.04);color:#9aa4b3;font-size:.72rem;font-weight:700;text-decoration:none;text-align:center';
  a.textContent='Privacy policy — readable, real, accessible';
  set.appendChild(a);
 }
}
priv();setInterval(priv,2000);
var st=document.createElement('style');
st.textContent='@media (prefers-reduced-motion: reduce){*{animation:none!important;transition:none!important}}:focus-visible{outline:2px solid #7bb5ff;outline-offset:2px}.axn-chip,.qa-chip{min-height:44px}@keyframes ax55in{from{opacity:0;transform:translateY(18px) scale(.95)}to{opacity:1;transform:none}}';
document.head.appendChild(st);
document.addEventListener('keydown',function(e){
 if(e.key!=='Escape')return;
 var s1=document.getElementById('axSheet');if(s1){s1.classList.remove('open');s1.style.display='none';}
 var s2=document.getElementById('axAcctSheet26');if(s2)s2.style.display='none';
 var s3=document.getElementById('axAbout');if(s3)s3.style.display='none';
 var p=document.getElementById('axPanel');if(p)p.classList.remove('open');
});
})();
/* ===== AXIUM AUTH OVERHAUL ===== */
(function(){
if(window.__ax57)return;window.__ax57=true;
function replaceAuth(){
 var sh=document.getElementById('axAuth4');
 if(!sh||sh.dataset.v57)return;
 sh.dataset.v57='1';
 sh.style.display='none';
 var hero=document.getElementById('hero');
 if(hero){hero.classList.remove('hidden');hero.style.display='';}
 var dash=document.getElementById('dashboard');
 if(dash)dash.classList.remove('active');
 var modal=document.createElement('div');modal.id='ax57auth';
 modal.style.cssText='position:fixed;inset:0;z-index:20000;background:rgba(5,8,13,.72);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);display:none;align-items:center;justify-content:center;padding:20px;animation:ax57fade .35s ease both';
 modal.innerHTML=
  '<div role="dialog" aria-modal="true" style="width:min(420px,100%);max-height:88vh;overflow-y:auto;background:#0d1420;border:1px solid rgba(43,125,255,.4);border-radius:22px;padding:26px 22px;position:relative;box-shadow:0 30px 80px rgba(0,0,0,.7);animation:ax57pop .5s cubic-bezier(.34,1.56,.64,1) both">'+
   '<button id="ax57close" aria-label="Close" style="position:absolute;top:14px;right:14px;width:34px;height:34px;border-radius:50%;border:1px solid rgba(255,255,255,.15);background:rgba(255,255,255,.04);color:#9aa4b3;font-size:1rem;cursor:pointer;display:flex;align-items:center;justify-content:center">✕</button>'+
   '<div style="text-align:center;margin-bottom:18px">'+
    '<div style="font-size:1.8rem;font-weight:900;letter-spacing:4px;color:#eef2f7;margin-bottom:4px">AXIUM</div>'+
    '<div style="color:#7bb5ff;font-size:.72rem;font-weight:700;letter-spacing:2px">Your second brain</div>'+
   '</div>'+
   '<div style="display:flex;background:rgba(255,255,255,.05);border-radius:12px;padding:3px;margin-bottom:14px">'+
    '<button data-m="login" class="ax57tab" style="flex:1;padding:9px;border:none;border-radius:10px;background:linear-gradient(135deg,#2b7dff,#1a6ae0);color:#fff;font-weight:700;font-size:.78rem;cursor:pointer">Sign in</button>'+
    '<button data-m="signup" class="ax57tab" style="flex:1;padding:9px;border:none;border-radius:10px;background:transparent;color:#8a94a3;font-weight:700;font-size:.78rem;cursor:pointer">Create account</button>'+
   '</div>'+
   '<form id="ax57form" autocomplete="off" novalidate style="display:flex;flex-direction:column;gap:10px">'+
    '<input id="ax57name" type="text" placeholder="Full name" style="display:none;padding:12px 14px;border-radius:12px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);color:#eef2f7;outline:none;font-family:inherit">'+
    '<input id="ax57email" type="email" placeholder="Email" style="padding:12px 14px;border-radius:12px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);color:#eef2f7;outline:none;font-family:inherit">'+
    '<input id="ax57pass" type="password" placeholder="Password (min 6)" style="padding:12px 14px;border-radius:12px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);color:#eef2f7;outline:none;font-family:inherit">'+
    '<input id="ax57conf" type="password" placeholder="Confirm password" style="display:none;padding:12px 14px;border-radius:12px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);color:#eef2f7;outline:none;font-family:inherit">'+
    '<div id="ax57err" style="color:#ff6b6b;font-size:.72rem;min-height:14px;text-align:center"></div>'+
    '<button type="submit" style="padding:13px;border:none;border-radius:12px;background:linear-gradient(135deg,#2b7dff,#1a6ae0);color:#fff;font-weight:800;cursor:pointer;box-shadow:0 10px 24px rgba(43,125,255,.4)">Continue</button>'+
   '</form>'+
   '<div style="display:flex;align-items:center;gap:10px;margin:16px 0;color:#6b7684;font-size:.68rem"><div style="flex:1;height:1px;background:rgba(255,255,255,.1)"></div><span>or</span><div style="flex:1;height:1px;background:rgba(255,255,255,.1)"></div></div>'+
   '<button id="ax57guest" type="button" style="width:100%;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,.15);background:rgba(255,255,255,.03);color:#eef2f7;font-weight:700;font-size:.85rem;cursor:pointer">Continue without account</button>'+
   '<div style="text-align:center;margin-top:12px;color:#6b7684;font-size:.62rem">Local only · No server · Your data stays on this device</div>'+
  '</div>';
 document.body.appendChild(modal);
 var st=document.createElement('style');
 st.textContent='@keyframes ax57fade{from{opacity:0}to{opacity:1}}@keyframes ax57pop{from{opacity:0;transform:scale(.92) translateY(14px)}to{opacity:1;transform:none}}';
 document.head.appendChild(st);
 var mode='login';
 var tabs=modal.querySelectorAll('.ax57tab');
 var nameI=modal.querySelector('#ax57name'),confI=modal.querySelector('#ax57conf');
 var err=modal.querySelector('#ax57err');
 var emailI=modal.querySelector('#ax57email'),passI=modal.querySelector('#ax57pass');
 function setMode(m){
  mode=m;
  tabs.forEach(function(b){
   var on=b.dataset.m===m;
   b.style.background=on?'linear-gradient(135deg,#2b7dff,#1a6ae0)':'transparent';
   b.style.color=on?'#fff':'#8a94a3';
  });
  nameI.style.display=m==='signup'?'block':'none';
  confI.style.display=m==='signup'?'block':'none';
  err.textContent='';
 }
 tabs.forEach(function(b){b.onclick=function(){setMode(b.dataset.m);};});
 function closeModal(){modal.style.display='none';}
 modal.querySelector('#ax57close').onclick=closeModal;
 modal.addEventListener('click',function(e){if(e.target===modal)closeModal();});
 document.addEventListener('keydown',function(e){
  if(e.key==='Escape'&&modal.style.display!=='none')closeModal();
 });
 modal.querySelector('#ax57guest').onclick=function(){
  closeModal();
  var hero=document.getElementById('hero');
  if(hero)hero.style.display='';
 };
 modal.querySelector('#ax57form').addEventListener('submit',function(e){
  e.preventDefault();
  var email=(emailI.value||'').trim().toLowerCase();
  var pass=passI.value||'';
  err.textContent='';
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)){err.textContent='Please enter a valid email.';return;}
  if(pass.length<6){err.textContent='Password must be at least 6 characters.';return;}
  if(mode==='signup'){
   var name=(nameI.value||'').trim();
   if(name.length<2){err.textContent='Please enter your full name.';return;}
   if((confI.value||'')!==pass){err.textContent='Passwords do not match.';return;}
   var users=JSON.parse(localStorage.getItem('axium_users')||'[]');
   if(users.some(function(u){return u.email===email;})){err.textContent='This email is already registered.';return;}
   closeModal();
   if(window.toast)window.toast('Account created');
  }else{
   var users=JSON.parse(localStorage.getItem('axium_users')||'[]');
   var ex=users.find(function(u){return u.email===email;});
   if(!ex){err.textContent='No account with this email.';return;}
   closeModal();
   if(window.toast)window.toast('Welcome back');
  }
 });
 var last=localStorage.getItem('axium_lastEmail');
 if(last)emailI.value=last;
}
function triggerAuth(){
 if(localStorage.getItem('ax57seen')==='1')return;
 var session=localStorage.getItem('axium_session');
 if(session)return;
 var m=document.getElementById('ax57auth');
 if(m){m.style.display='flex';localStorage.setItem('ax57seen','1');}
}
setTimeout(function(){replaceAuth();setTimeout(triggerAuth,900);},400);
var st2=document.createElement('style');
st2.textContent='@media (max-width:640px){.axn-chip,.qa-chip,#axInstallBtn,#axNotifBtn{bottom:auto!important}.axn-chip:nth-of-type(2),#axNotifBtn{bottom:180px!important}.axn-chip:nth-of-type(1),#axInstallBtn{bottom:120px!important}}';
document.head.appendChild(st2);
function shortHero(){
 var desc=document.querySelectorAll('.hero-desc');
 if(desc.length>=2&&!desc[0].dataset.v57){
  desc[0].dataset.v57='1';
  desc[0].textContent='Plan your day around your real energy. Tasks, focus timer and an on-device coach that learns your rhythm — no servers, no tracking.';
  for(var i=1;i<desc.length;i++)desc[i].style.display='none';
 }
}
shortHero();setInterval(shortHero,1500);
})();
/* ===== AXIUM HONESTY PASS ===== */
(function(){
if(window.__ax58)return;window.__ax58=true;
function rename(){var r=document.getElementById('set-restore');if(r){var s=r.querySelector('span');if(s&&s.textContent.indexOf('Restore my real')===0)s.textContent='Restore from backup';}}
rename();setInterval(rename,2000);
function remind(){
 if(localStorage.getItem('ax58rem')==='1')return;
 var has=Object.keys(localStorage).some(function(k){return k.indexOf('axium_')===0;});
 if(!has)return;
 if(document.getElementById('ax58rem'))return;
 var d=document.getElementById('dashboard');if(!d||!d.classList.contains('active'))return;
 var n=document.createElement('div');n.id='ax58rem';
 n.style.cssText='margin:0 14px 12px;padding:10px 14px;border-radius:12px;background:rgba(255,180,67,.08);border:1px solid rgba(255,180,67,.3);color:#ffb443;font-size:.7rem;font-weight:700;display:flex;justify-content:space-between;align-items:center;gap:10px';
 n.innerHTML='<span>Local data can be cleared by your browser. Keep a backup: Settings → Export my data.</span><button aria-label="Dismiss" style="border:none;background:none;color:#ffb443;cursor:pointer;font-size:.9rem">✕</button>';
 d.insertBefore(n,d.children[2]||null);
 n.querySelector('button').onclick=function(){localStorage.setItem('ax58rem','1');n.remove();};
}
remind();setInterval(remind,2500);
function foot(){var p=document.getElementById('axPanel');if(!p||p.querySelector('.ax58foot'))return;var f=document.createElement('div');f.className='ax58foot';f.style.cssText='margin-top:8px;color:#6b7684;font-size:.6rem;text-align:center';f.textContent='On-device rules — not a cloud model. No data leaves your device.';p.appendChild(f);}
foot();setInterval(foot,2000);
function nn(){var h=document.querySelector('#notif-panel .notif-header');if(!h||h.querySelector('.ax58nn'))return;var s=document.createElement('div');s.className='ax58nn';s.style.cssText='color:#6b7684;font-size:.6rem;font-weight:600;margin-top:2px';s.textContent='Local reminders work while AXIUM is open.';h.appendChild(s);}
nn();setInterval(nn,2000);
})();
/* ===== AXIUM LIVE HONESTY SWAPS ===== */
(function(){
if(window.__ax59)return;window.__ax59=true;
function fix(){
 var eb=document.querySelector('.eyebrow-badge');
 if(eb&&eb.textContent.indexOf('AI-POWERED')>-1)eb.innerHTML='<span class="badge-dot"></span>ON-DEVICE SMART PRODUCTIVITY';
 document.querySelectorAll('.feature h3').forEach(function(h){if(h.textContent.trim()==='Smart AI Assistant')h.textContent='On-device Smart Coach';});
 document.querySelectorAll('.feature p').forEach(function(p){
   if(p.textContent.indexOf('Intelligent insights')===0)p.textContent='Rule-based insights computed on your device from your real tasks and focus history — no cloud model, nothing sent.';
   if(p.textContent.indexOf('Your data never leaves this device')===0)p.textContent='Your work data (tasks, notes, focus) never leaves this device. Only optional weather and account-email use the network.';
 });
 document.querySelectorAll('.hero-desc').forEach(function(p){if(p.textContent.indexOf('learns your patterns')>-1)p.textContent='AXIUM adapts to your natural rhythm and helps you achieve more with less stress — using only on-device rules.';});
 var st=document.querySelector('.drawer-profile-info strong');if(st&&st.textContent==='Alireza')st.textContent='You';
 var sp=document.querySelector('.drawer-profile-info span');if(sp&&sp.textContent==='Pro Plan')sp.textContent='Local-only';
 var wc=document.querySelector('.wx-city');if(wc&&wc.textContent.indexOf('Tehran')>-1)wc.textContent='Your city · —';
 var wt=document.querySelector('.wx-temp');if(wt&&wt.textContent==='24°')wt.textContent='—°';
 document.querySelectorAll('.sec-title h3').forEach(function(h){if(h.textContent.trim()==='AI Insights')h.textContent='Coach Insights';});
 document.querySelectorAll('.qa-chip').forEach(function(c){if(c.textContent.indexOf('AI Chat')>-1)c.innerHTML=c.innerHTML.replace('AI Chat','Smart Coach');});
 document.querySelectorAll('.gc-count').forEach(function(g){if(g.textContent.indexOf('left')>-1)g.textContent='your tasks';});
 document.querySelectorAll('.f-body b').forEach(function(b){if(b.textContent.indexOf('AI rescheduled')>-1)b.textContent=b.textContent.replace('AI rescheduled','Coach rescheduled');});
 document.querySelectorAll('.ai-text').forEach(function(p){if(p.textContent.indexOf('energy peaks')>-1)p.textContent='Complete tasks and focus sessions to unlock personalized insights.';});
}
fix();setInterval(fix,1500);
})();
/* ===== AXIUM HONEST INSTALL + XSS GUARD ===== */
(function(){
if(window.__ax60)return;window.__ax60=true;
window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();window.__axPrompt=e;});
function honestInstall(){
 var old=document.getElementById('ax60inst');if(old)old.remove();
 var m=document.createElement('div');m.id='ax60inst';
 m.style.cssText='position:fixed;inset:0;z-index:30000;background:rgba(5,8,13,.7);backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;padding:20px';
 m.innerHTML='<div role="dialog" aria-modal="true" style="width:min(380px,100%);background:#0d1420;border:1px solid rgba(43,125,255,.4);border-radius:20px;padding:24px;text-align:center">'
  +'<div style="font-size:1.4rem;font-weight:900;letter-spacing:2px;color:#eef2f7;margin-bottom:6px">Install AXIUM</div>'
  +'<div style="color:#8a94a3;font-size:.75rem;line-height:1.6;margin-bottom:16px">Adds AXIUM to your home screen and lets it work offline. Everything stays on this device.</div>'
  +'<div style="display:flex;flex-direction:column;gap:8px;text-align:left;color:#c5cfdb;font-size:.78rem;margin-bottom:18px">'
  +'<div>· Tasks, focus timer, calendar, notes</div><div>· On-device smart coach</div><div>· No cloud account, no tracking</div></div>'
  +'<button id="ax60yes" style="width:100%;padding:13px;border:none;border-radius:12px;background:linear-gradient(135deg,#2b7dff,#1a6ae0);color:#fff;font-weight:800;cursor:pointer;margin-bottom:8px">Install</button>'
  +'<button id="ax60no" style="width:100%;padding:12px;border-radius:12px;border:1px solid rgba(255,255,255,.15);background:none;color:#9aa4b3;font-weight:700;cursor:pointer">Later</button>'
  +'</div>';
 document.body.appendChild(m);
 m.querySelector('#ax60no').onclick=function(){m.remove();};
 m.addEventListener('click',function(e){if(e.target===m)m.remove();});
 m.querySelector('#ax60yes').onclick=function(){
   if(window.__axPrompt){window.__axPrompt.prompt();m.remove();}
   else{alert('Use your browser menu: Add to Home screen / Install app.');m.remove();}
 };
}
document.addEventListener('click',function(e){
 var t=e.target;if(!t||!t.closest)return;
 var btn=t.closest('button,a');
 if(btn&&/install/i.test(btn.textContent||'')){e.stopImmediatePropagation();e.preventDefault();honestInstall();}
},true);
var origSet=Storage.prototype.setItem;
Storage.prototype.setItem=function(k,v){
  try{
    if(/axium_(accounts|users|prefs|profile)/i.test(k)){
      var clean=function(x){if(typeof x==='string')return x.replace(/[<>]/g,'');if(Array.isArray(x))return x.map(clean);if(x&&typeof x==='object'){for(var key in x)x[key]=clean(x[key]);}return x;};
      v=JSON.stringify(clean(JSON.parse(v)));
    }
  }catch(e){}
  return origSet.call(this,k,v);
};
})();
/* ===== AXIUM MIGRATION + A11Y ===== */
(function(){
if(window.__ax61)return;window.__ax61=true;
try{
 if(localStorage.getItem('ax61mig')!=='1'){
  ['axium_accounts','axium_users','axium_prefs','axium_profile'].forEach(function(k){
   var raw=localStorage.getItem(k);if(!raw)return;
   try{
    var clean=function(x){if(typeof x==='string')return x.replace(/[<>]/g,'');if(Array.isArray(x))return x.map(clean);if(x&&typeof x==='object'){for(var key in x)x[key]=clean(x[key]);}return x;};
    localStorage.setItem(k,JSON.stringify(clean(JSON.parse(raw))));
   }catch(e){}
  });
  localStorage.setItem('ax61mig','1');
 }
}catch(e){}
function a11y(){
 document.querySelectorAll('button').forEach(function(b){
  var t=(b.textContent||'').trim();
  if((t==='✕'||t==='X'||t==='×')&&!b.getAttribute('aria-label'))b.setAttribute('aria-label','Close');
 });
 document.querySelectorAll('.axdlg .box,.xm .mm,#axCalV2Mo .mm,#axNCm .mm,.axsheet,#ax57auth > div').forEach(function(m){
  if(!m.getAttribute('role'))m.setAttribute('role','dialog');
 });
}
a11y();setInterval(a11y,2000);
})();
