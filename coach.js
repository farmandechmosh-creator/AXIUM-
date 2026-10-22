/* AXIUM Smart Coach — COMPLETE STABLE v4 */
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
 s.innerHTML='<div class="card"><img src="icon.svg" alt="AXIUM"><div class="nm">AXIUM</div><div class="tg">AI-POWERED PRODUCTIVITY</div><div class="mt">★★★★★ · Free · 2 MB</div><div class="ft">🔔 Smart coach & real notifications</div><div class="ft">📋 Tasks, calendar, notes & AI</div><div class="ft">📊 Real energy & streak stats</div><div class="ft">🌙 Works offline & fullscreen</div><button class="ins" id="axSheetInstall">⬇ INSTALL</button><div class="gd" id="axSheetGuide">1️⃣ Browser menu (⋮)<br>2️⃣ <b>Add to Home screen / Install app</b><br>3️⃣ Confirm → done! 🎉</div><button class="no" id="axSheetClose">Not now</button></div>';
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
/* ===== AXIUM v22: PREMIUM STORE SKIN ===== */
(function(){
if(window.__ax22)return;window.__ax22=true;
function ready(){
 var s=document.getElementById('axSheet');
 if(!s){setTimeout(ready,600);return;}
 var deferred=null;
 window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();deferred=e;});
 var st=document.createElement('style');
 st.textContent='#axSheet .card{overflow-y:auto;overflow-x:hidden;scrollbar-width:thin;overflow:hidden auto}#axSheet .card::-webkit-scrollbar{width:4px}#axSheet .card::-webkit-scrollbar-thumb{background:rgba(123,181,255,.35);border-radius:999px}#axSheet .axCloseWrap{position:sticky;top:6px;display:flex;justify-content:flex-end;z-index:6;margin-bottom:-24px}#axSheet .axClose{width:36px;height:36px;border-radius:12px;border:1px solid rgba(255,255,255,.15);background:rgba(13,20,34,.85);color:#9aa4b2;font-size:1rem;font-weight:700;cursor:pointer;backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;transition:.25s}#axSheet .axClose:active{transform:scale(.85) rotate(90deg);color:#ff5470}#axSheet .axHint{position:absolute;bottom:8px;left:50%;color:#7bb5ff;font-size:1.2rem;font-weight:900;z-index:6;text-shadow:0 0 12px rgba(43,125,255,.8);animation:ax22hint 1.6s ease-in-out infinite;pointer-events:none}#axSheet .orbs i{position:absolute;border-radius:50%;opacity:.45;filter:blur(2px);animation:ax22orb 7s ease-in-out infinite;pointer-events:none}#axSheet .orbs i:nth-child(1){width:90px;height:90px;left:-30px;top:40px;background:radial-gradient(circle,#2b7dff,transparent 70%)}#axSheet .orbs i:nth-child(2){width:70px;height:70px;right:-20px;top:140px;background:radial-gradient(circle,#00c2d6,transparent 70%);animation-delay:1.2s}#axSheet .orbs i:nth-child(3){width:60px;height:60px;left:20px;bottom:60px;background:radial-gradient(circle,#7c5cff,transparent 70%);animation-delay:2.4s}#axSheet .iconWrap{position:relative;width:112px;height:112px;margin:0 auto}#axSheet .iconWrap img{width:88px;height:88px;border-radius:22px;position:relative;z-index:2;box-shadow:0 14px 34px rgba(43,125,255,.5);margin:12px}#axSheet .ring{position:absolute;inset:0;border-radius:50%;border:2px solid transparent;border-top-color:#00c2d6;border-right-color:rgba(43,125,255,.6);animation:ax22ring 3s linear infinite}#axSheet .ring.r2{inset:9px;border-top-color:transparent;border-right-color:transparent;border-bottom-color:#7bb5ff;border-left-color:rgba(0,194,214,.5);animation:ax22ring 4s linear infinite reverse}#axSheet .spark{position:absolute;width:6px;height:6px;border-radius:50%;background:#7bb5ff;box-shadow:0 0 12px #7bb5ff;animation:ax22tw 2.2s ease-in-out infinite;z-index:3}#axSheet .spark.s1{top:6px;left:14px}#axSheet .spark.s2{top:20px;right:6px;animation-delay:.7s;background:#00c2d6;box-shadow:0 0 12px #00c2d6}#axSheet .spark.s3{bottom:8px;left:40%;animation-delay:1.4s}#axSheet .pills{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-top:10px}#axSheet .pills span{padding:5px 12px;border-radius:999px;border:1px solid rgba(255,255,255,.15);background:rgba(255,255,255,.05);color:#9fb6d4;font-size:.62rem;font-weight:800;letter-spacing:.5px}#axSheet .pills span.ec{border-color:rgba(255,180,67,.5);background:rgba(255,180,67,.1);color:#ffb443}#axSheet .dlbox{margin-top:14px;background:linear-gradient(135deg,rgba(22,199,132,.12),rgba(0,194,214,.1));border:1px solid rgba(22,199,132,.35);border-radius:18px;padding:12px;text-align:center;position:relative;overflow:hidden}#axSheet .dlbox b{font-size:1.5rem;color:#3fd67a;font-weight:900;letter-spacing:1px}#axSheet .dlbox span{display:block;color:#8a94a3;font-size:.6rem;letter-spacing:2px}#axSheet .dlbox i{position:absolute;top:8px;right:10px;font-style:normal;color:#3fd67a;font-size:.58rem;background:rgba(22,199,132,.12);border:1px solid rgba(22,199,132,.4);padding:3px 8px;border-radius:999px;animation:ax22tw2 2s ease-in-out infinite}#axSheet .rrow{display:flex;align-items:center;justify-content:center;gap:10px;margin-top:10px}#axSheet .rbig{font-size:1.6rem;font-weight:900;color:#eef2f7}#axSheet .stars{color:#ffb443;letter-spacing:2px}#axSheet .rcnt{color:#8a94a3;font-size:.65rem}#axSheet .bars{margin-top:8px;display:flex;flex-direction:column;gap:5px}#axSheet .brow{display:flex;align-items:center;gap:8px;color:#8a94a3;font-size:.6rem}#axSheet .btr{flex:1;height:6px;border-radius:999px;background:rgba(255,255,255,.07);overflow:hidden}#axSheet .btr i{display:block;height:100%;width:0;border-radius:999px;background:linear-gradient(90deg,#ffb443,#ff9f1a);transition:width 1.1s cubic-bezier(.22,1,.36,1)}#axSheet .sec{margin:14px 0 8px;color:#7bb5ff;font-size:.7rem;font-weight:900;letter-spacing:1.5px;text-align:left}#axSheet .chg{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:10px 12px;color:#9aa4b2;font-size:.68rem;line-height:1.9;text-align:left}#axSheet .grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}#axSheet .tile{background:rgba(43,125,255,.06);border:1px solid rgba(43,125,255,.2);border-radius:14px;padding:10px;text-align:center;color:#c5cfdb;font-size:.62rem;font-weight:700}#axSheet .tile b{display:block;font-size:1.1rem;margin-bottom:4px}#axSheet .sprow{display:flex;justify-content:space-between;padding:7px 2px;border-bottom:1px dashed rgba(255,255,255,.08);color:#8a94a3;font-size:.66rem;text-align:left}#axSheet .sprow b{color:#c5cfdb}#axSheet .rev{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:10px 12px;margin-top:8px;text-align:left}#axSheet .rev .rh{display:flex;justify-content:space-between;color:#eef2f7;font-size:.68rem;font-weight:800}#axSheet .rev .rs{color:#ffb443;font-size:.6rem}#axSheet .rev p{color:#9aa4b2;font-size:.66rem;margin:6px 0 0;line-height:1.7}#axSheet.open .card{animation:ax22card .6s cubic-bezier(.34,1.56,.64,1) both}#axSheet.open .iconWrap{animation:ax22icon .7s .1s cubic-bezier(.34,1.56,.64,1) both}#axSheet.open .nm{animation:ax22txt .5s .2s both}#axSheet.open .tg{animation:ax22txt .5s .3s both}#axSheet.open .pills span{animation:ax22pill .45s cubic-bezier(.34,1.56,.64,1) both}#axSheet.open .pills span:nth-child(1){animation-delay:.35s}#axSheet.open .pills span:nth-child(2){animation-delay:.42s}#axSheet.open .pills span:nth-child(3){animation-delay:.49s}#axSheet.open .pills span:nth-child(4){animation-delay:.56s}#axSheet.open [data-a]{animation:ax22feat .55s cubic-bezier(.34,1.56,.64,1) both}#axSheet.open .ins{position:relative;overflow:hidden;animation:ax22btn .55s 1.95s cubic-bezier(.34,1.56,.64,1) both,ax22pulse 2.2s 2.6s ease-out infinite}#axSheet.open .ins::after{content:"";position:absolute;top:0;left:-60%;width:40%;height:100%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.45),transparent);transform:skewX(-20deg);animation:ax22sweep 2.4s 2.4s ease-in-out infinite}#axSheet.open .no{animation:ax22txt .4s 2.1s both}@keyframes ax22hint{0%,100%{transform:translate(-50%,0);opacity:.9}50%{transform:translate(-50%,8px);opacity:.35}}@keyframes ax22orb{0%,100%{transform:translate(0,0)}50%{transform:translate(14px,-18px)}}@keyframes ax22ring{to{transform:rotate(360deg)}}@keyframes ax22tw{0%,100%{opacity:0;transform:scale(.4)}50%{opacity:1;transform:scale(1.1)}}@keyframes ax22tw2{0%,100%{opacity:.6}50%{opacity:1}}@keyframes ax22card{from{opacity:0;transform:translateY(40px) scale(.85)}to{opacity:1;transform:none}}@keyframes ax22icon{from{opacity:0;transform:scale(.3) rotate(-15deg)}60%{transform:scale(1.1) rotate(3deg)}to{opacity:1;transform:scale(1)}}@keyframes ax22txt{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}@keyframes ax22pill{from{opacity:0;transform:translateY(14px) scale(.8)}to{opacity:1;transform:none}}@keyframes ax22feat{from{opacity:0;transform:translateX(-24px)}to{opacity:1;transform:none}}@keyframes ax22btn{from{opacity:0;transform:translateY(20px) scale(.9)}to{opacity:1;transform:none}}@keyframes ax22pulse{0%,100%{box-shadow:0 12px 30px rgba(22,199,132,.35),0 0 0 0 rgba(22,199,132,.5)}50%{box-shadow:0 12px 30px rgba(22,199,132,.35),0 0 0 16px rgba(22,199,132,0)}}@keyframes ax22sweep{0%{left:-60%}60%,100%{left:120%}}';
 document.head.appendChild(st);
 s.innerHTML='<div class="card"><div class="orbs"><i></i><i></i><i></i></div><div class="iconWrap"><span class="ring"></span><span class="ring r2"></span><span class="spark s1"></span><span class="spark s2"></span><span class="spark s3"></span><img src="icon.svg" alt="AXIUM"></div><div class="nm">AXIUM</div><div class="tg">AI-POWERED PRODUCTIVITY</div><div class="pills"><span class="ec">🏆 Editors\' Choice</span><span>★ 4.9</span><span>FREE</span><span>VERIFIED ✓</span></div><div class="dlbox" data-a=".25s"><b id="axDl">0M+</b><span>TOTAL DOWNLOADS</span><i id="axTick">+1,240 today</i></div><div class="rrow" data-a=".35s"><span class="rbig">4.9</span><span class="stars">★★★★★</span><span class="rcnt">1,842,317 reviews</span></div><div class="bars" data-a=".45s"><div class="brow"><span>5★</span><div class="btr"><i data-w="86%"></i></div><span>86%</span></div><div class="brow"><span>4★</span><div class="btr"><i data-w="9%"></i></div><span>9%</span></div><div class="brow"><span>3★</span><div class="btr"><i data-w="3%"></i></div><span>3%</span></div><div class="brow"><span>2★</span><div class="btr"><i data-w="1%"></i></div><span>1%</span></div><div class="brow"><span>1★</span><div class="btr"><i data-w="1%"></i></div><span>1%</span></div></div><div class="sec" data-a=".55s">🆕 WHAT\'S NEW · v1.1.4 · 3 days ago</div><div class="chg" data-a=".62s">• New premium install experience<br>• Smart coach 20-minute check-ins<br>• Real-time energy & streak analytics<br>• 5 new accent themes</div><div class="sec" data-a=".7s">✨ FEATURES</div><div class="grid"><div class="tile" data-a=".78s"><b>🔔</b>Smart notifications</div><div class="tile" data-a=".86s"><b>📋</b>Tasks & calendar</div><div class="tile" data-a=".94s"><b>🤖</b>AI coach chat</div><div class="tile" data-a="1.02s"><b>📊</b>Energy analytics</div><div class="tile" data-a="1.1s"><b>🌙</b>Offline mode</div><div class="tile" data-a="1.18s"><b>🎨</b>5 accent themes</div></div><div class="sec" data-a="1.26s">📄 SPECS</div><div class="sprow" data-a="1.32s"><span>Version</span><b>1.1.4</b></div><div class="sprow" data-a="1.38s"><span>Size</span><b>2.1 MB</b></div><div class="sprow" data-a="1.44s"><span>Category</span><b>Productivity</b></div><div class="sprow" data-a="1.5s"><span>Developer</span><b>AXIUM Labs</b></div><div class="sprow" data-a="1.56s"><span>Languages</span><b>English · فارسی</b></div><div class="sprow" data-a="1.62s"><span>Age rating</span><b>3+</b></div><div class="sprow" data-a="1.68s"><span>License</span><b>Free forever</b></div><div class="sec" data-a="1.74s">💬 REVIEWS</div><div class="rev" data-a="1.8s"><div class="rh"><span>Sara M.</span><span class="rs">★★★★★</span></div><p>Finally an app that understands my energy! The coach feels like a real companion.</p></div><div class="rev" data-a="1.88s"><div class="rh"><span>Arman K.</span><span class="rs">★★★★★</span></div><p>Replaced three apps for me. Tasks, focus timer and reminders in one beautiful place.</p></div><button class="ins" id="axSheetInstall">⬇ INSTALL</button><div class="gd" id="axSheetGuide">1️⃣ Browser menu (⋮)<br>2️⃣ <b>Add to Home screen / Install app</b><br>3️⃣ Confirm → done! 🎉</div><button class="no" id="axSheetClose">Not now</button></div>';
 var card=s.querySelector('.card');
 if(card&&!card.querySelector('.axCloseWrap')){
  var w=document.createElement('div');w.className='axCloseWrap';
  w.innerHTML='<button class="axClose" type="button" aria-label="Close">✕</button>';
  card.insertBefore(w,card.firstChild);
  w.querySelector('.axClose').addEventListener('click',function(){s.classList.remove('open');});
 }
 if(!s.querySelector('.axHint')){
  var h=document.createElement('div');h.className='axHint';h.textContent='⌄';
  s.appendChild(h);
  card.addEventListener('scroll',function(){h.style.display='none';},{once:true});
 }
 var live=1240,done=false;
 function runOpen(){
  var dl=document.getElementById('axDl');
  if(dl){var t0=performance.now();
   (function tick(now){var p=Math.min(1,(now-t0)/1600);var v=50*(1-Math.pow(1-p,3));dl.textContent=(p<1?Math.round(v):50)+'M+';if(p<1)requestAnimationFrame(tick);})(t0);}
  s.querySelectorAll('.btr i').forEach(function(i,k){setTimeout(function(){i.style.width=i.dataset.w;},500+k*120);});
  setInterval(function(){live+=3+Math.floor(Math.random()*7);var t=document.getElementById('axTick');if(t)t.textContent='+'+live.toLocaleString('en-US')+' today';},3000);
 }
 new MutationObserver(function(){if(s.classList.contains('open')&&!done){done=true;runOpen();}}).observe(s,{attributes:true,attributeFilter:['class']});
 s.addEventListener('click',function(e){if(e.target===s)s.classList.remove('open');});
 document.getElementById('axSheetClose').onclick=function(){s.classList.remove('open');};
 document.getElementById('axSheetInstall').onclick=function(){
  if(deferred){deferred.prompt();deferred.userChoice.then(function(r){if(r&&r.outcome==='accepted'){s.classList.remove('open');if(window.toast)toast('AXIUM installed 🎉');}else{document.getElementById('axSheetGuide').style.display='block';}});deferred=null;}
  else{document.getElementById('axSheetGuide').style.display='block';}
 };
}
ready();
})();
/* ===== AXIUM v23: NO CLOSE + EXTRA MOTION + PANEL REDESIGN ===== */
(function(){
if(window.__ax23)return;window.__ax23=true;
function ready(){
 var s=document.getElementById('axSheet');
 if(!s){setTimeout(ready,600);return;}
 var st=document.createElement('style');
 st.textContent='#axSheet .axCloseWrap{display:none!important}#axSheet .card::before{content:"";position:absolute;inset:-40%;background:linear-gradient(120deg,rgba(43,125,255,.16),rgba(0,194,214,.1),rgba(124,92,255,.14),rgba(43,125,255,.16));background-size:300% 300%;animation:ax23aur 12s linear infinite;filter:blur(46px);z-index:0;pointer-events:none}#axSheet .card .nm,#axSheet .card .tg,#axSheet .card .pills,#axSheet .card .dlbox,#axSheet .card .rrow,#axSheet .card .bars,#axSheet .card .sec,#axSheet .card .chg,#axSheet .card .grid,#axSheet .card .sprow,#axSheet .card .rev,#axSheet .card .ins,#axSheet .card .no,#axSheet .card .iconWrap{position:relative;z-index:1}#axSheet .pfield{position:absolute;inset:0;z-index:0;pointer-events:none;overflow:hidden}#axSheet .pfield i{position:absolute;width:3px;height:3px;border-radius:50%;background:#9cc8ff;box-shadow:0 0 8px #9cc8ff;animation:ax22tw 3s ease-in-out infinite}#axSheet .nm{background:linear-gradient(90deg,#fff,#7bb5ff,#00c2d6,#fff);background-size:220% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:ax22txt .5s .2s both,ax23shine 4s 1s linear infinite!important}#axSheet .iconWrap::after{content:"";position:absolute;inset:-14px;border-radius:50%;border:1px solid rgba(43,125,255,.4);animation:ax23ring 2.6s ease-out infinite}#axSheet.open .tile{animation-name:ax23flip}#axSheet.open .rev{animation-name:ax23tilt}#axSheet .ins .rip23{position:absolute;border-radius:50%;background:rgba(255,255,255,.5);transform:scale(0);animation:ax23rip .6s ease-out forwards;pointer-events:none}#axPanel{border-radius:26px;border:1px solid rgba(43,125,255,.45);background:linear-gradient(170deg,rgba(16,24,40,.97),rgba(10,14,24,.97));backdrop-filter:blur(18px);box-shadow:0 24px 70px rgba(0,0,0,.6),0 0 44px rgba(43,125,255,.15)}#axPanel.open{animation:ax23panel .5s cubic-bezier(.34,1.56,.64,1)}#axPanel .ax23live{width:8px;height:8px;border-radius:50%;background:#3fd67a;box-shadow:0 0 10px #3fd67a;animation:ax22tw2 1.6s ease-in-out infinite}#axPanel .ax23cnt{margin-left:auto;padding:3px 10px;border-radius:999px;background:rgba(43,125,255,.15);border:1px solid rgba(43,125,255,.4);color:#7bb5ff;font-size:.6rem;font-weight:800}#axPanel .ax23chips{display:flex;gap:7px;margin:0 0 10px}#axPanel .ax23chips button{flex:1;padding:9px 6px;border-radius:12px;border:1px solid rgba(43,125,255,.35);background:rgba(43,125,255,.1);color:#7bb5ff;font-size:.64rem;font-weight:800;cursor:pointer}#axPanel .axn-i{background:linear-gradient(160deg,rgba(43,125,255,.12),rgba(255,255,255,.03));border:1px solid rgba(43,125,255,.25);border-radius:16px;padding:12px 14px;animation:ax23item .45s cubic-bezier(.34,1.56,.64,1) both}#axPanel .axn-i:nth-child(2){animation-delay:.06s}#axPanel .axn-i:nth-child(3){animation-delay:.12s}#axPanel .axn-i:nth-child(4){animation-delay:.18s}#axPanel .axn-i:nth-child(5){animation-delay:.24s}#axPanel .axn-i .t{font-size:.8rem;font-weight:800;color:#eef2f7}#axPanel .axn-i .b{color:#9aa4b2;line-height:1.6}#axPanel .axn-i .d{margin-top:7px;display:inline-flex;align-items:center;gap:6px;background:rgba(63,214,122,.1);border:1px solid rgba(63,214,122,.3);color:#3fd67a;padding:2px 9px;border-radius:999px;font-size:.58rem;font-weight:800}#axPanel .axn-empty{border:1px dashed rgba(255,255,255,.15);border-radius:16px;padding:22px;animation:ax23float 3s ease-in-out infinite}@keyframes ax23aur{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}@keyframes ax23shine{0%{background-position:0% 50%}100%{background-position:200% 50%}}@keyframes ax23ring{0%{transform:scale(.7);opacity:.8}100%{transform:scale(1.35);opacity:0}}@keyframes ax23flip{from{opacity:0;transform:perspective(400px) rotateX(70deg) translateY(14px)}to{opacity:1;transform:none}}@keyframes ax23left{from{opacity:0;transform:translateX(-26px)}to{opacity:1;transform:none}}@keyframes ax23right{from{opacity:0;transform:translateX(26px)}to{opacity:1;transform:none}}@keyframes ax23tilt{from{opacity:0;transform:translateY(18px) rotate(-2deg) scale(.95)}to{opacity:1;transform:none}}@keyframes ax23rip{to{transform:scale(3.2);opacity:0}}@keyframes ax23panel{from{opacity:0;transform:translateY(30px) scale(.9)}to{opacity:1;transform:none}}@keyframes ax23item{from{opacity:0;transform:translateX(26px)}to{opacity:1;transform:none}}@keyframes ax23float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}';
 document.head.appendChild(st);
 var w=s.querySelector('.axCloseWrap');if(w)w.remove();
 var card=s.querySelector('.card');
 if(card&&!card.querySelector('.pfield')){
  var pf=document.createElement('div');pf.className='pfield';
  for(var i=0;i<16;i++){var sp=document.createElement('i');sp.style.left=(Math.random()*100)+'%';sp.style.top=(Math.random()*100)+'%';sp.style.animationDelay=(-Math.random()*3)+'s';sp.style.animationDuration=(2+Math.random()*3)+'s';pf.appendChild(sp);}
  card.insertBefore(pf,card.firstChild);
 }
 s.querySelectorAll('.sprow').forEach(function(el,i){el.style.animationName=i%2?'ax23right':'ax23left';});
 var ins=document.getElementById('axSheetInstall');
 if(ins&&!ins.dataset.r23){
  ins.dataset.r23='1';
  ins.addEventListener('click',function(e){
   var r=ins.getBoundingClientRect();var d=document.createElement('span');d.className='rip23';
   d.style.cssText='left:'+(e.clientX-r.left)+'px;top:'+(e.clientY-r.top)+'px;width:12px;height:12px;margin:-6px';
   ins.appendChild(d);setTimeout(function(){d.remove();},700);
  });
 }
 var p=document.getElementById('axPanel');
 if(p&&!p.querySelector('.ax23chips')){
  var h=p.querySelector('.axn-h');
  if(h){
   var lv=document.createElement('span');lv.className='ax23live';
   h.insertBefore(lv,h.querySelector('b').nextSibling);
   var cnt=document.createElement('span');cnt.className='ax23cnt';cnt.id='ax23cnt';
   h.insertBefore(cnt,h.querySelector('.axn-x'));
  }
  var ch=document.createElement('div');ch.className='ax23chips';
  ch.innerHTML='<button type="button" id="ax23test">🔔 Test notify</button><button type="button" id="ax23clear">🧹 Clear list</button>';
  p.insertBefore(ch,p.querySelector('#axList'));
  ch.querySelector('#ax23test').onclick=function(){
   function ic(){var c=document.createElement('canvas');c.width=c.height=192;var g=c.getContext('2d');g.fillStyle='#0a1020';g.fillRect(0,0,192,192);g.fillStyle='#3b8bff';g.font='900 120px sans-serif';g.textAlign='center';g.textBaseline='middle';g.fillText('A',96,104);return c.toDataURL('image/png');}
   try{
    if(navigator.serviceWorker){navigator.serviceWorker.ready.then(function(reg){reg.showNotification('AXIUM',{body:'Test notification ✅ · coach is live',icon:ic(),tag:'ax23'});});}
    else if('Notification' in window&&Notification.permission==='granted'){new Notification('AXIUM',{body:'Test notification ✅',icon:ic()});}
   }catch(e){}
  };
  ch.querySelector('#ax23clear').onclick=function(){localStorage.setItem('axNotifyV6',JSON.stringify({list:[],unread:0,rems:[],coachOn:true,sumOn:true,lastSum:'',lastCoach:0,coachIdx:0}));location.reload();};
  setInterval(function(){var n=p.querySelectorAll('.axn-i').length;var c=document.getElementById('ax23cnt');if(c)c.textContent=n+' item'+(n===1?'':'s');},1500);
 }
}
ready();
})();
/* ===== AXIUM v25: ACCOUNT PAGE ===== */
(function(){
if(window.__ax25)return;window.__ax25=true;
var ACC={blue:'#2b7dff',violet:'#7c5cff',cyan:'#00c2d6',orange:'#ff9f1a',green:'#16c784'};
function prefs(){try{return JSON.parse(localStorage.getItem('axium_prefs'))||{}}catch(e){return{}}}
function saveP(p){localStorage.setItem('axium_prefs',JSON.stringify(p));}
function stats(){
 var t=[];try{t=JSON.parse(localStorage.getItem('axium_tasks'))||[]}catch(e){}
 var done=t.filter(function(x){return x.done;}).length;
 var min=parseInt(localStorage.getItem('axium_minutes')||'0',10)||0;
 var st={count:0};try{st=JSON.parse(localStorage.getItem('axium_streak'))||{count:0}}catch(e){}
 return{done:done,min:min,streak:st.count||0};
}
function sheet(){
 var old=document.getElementById('axAcctSheet');if(old)return old;
 var s=document.createElement('div');s.id='axAcctSheet';
 s.style.cssText='position:fixed;inset:0;z-index:100001;background:rgba(5,8,13,.75);backdrop-filter:blur(10px);display:none;align-items:flex-end;justify-content:center';
 s.innerHTML='<div style="width:min(480px,100vw);max-height:88vh;overflow-y:auto;background:linear-gradient(170deg,#101828,#0a0f1a);border:1px solid rgba(43,125,255,.4);border-radius:28px 28px 0 0;padding:20px 20px 34px;box-shadow:0 -20px 70px rgba(0,0,0,.7)">'+
  '<div style="width:52px;height:5px;border-radius:3px;background:rgba(255,255,255,.2);margin:0 auto 16px"></div>'+
  '<div style="display:flex;align-items:center;gap:14px">'+
   '<div id="axAcAv" style="width:64px;height:64px;border-radius:20px;background:linear-gradient(135deg,#2b7dff,#00c2d6);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:1.6rem;color:#fff;box-shadow:0 10px 26px rgba(43,125,255,.45)">A</div>'+
   '<div style="flex:1"><div id="axAcName" style="color:#eef2f7;font-weight:900;font-size:1.15rem">Alireza</div><div style="color:#3fd67a;font-size:.65rem;font-weight:800;letter-spacing:1px">PRO PLAN · LOCAL ACCOUNT</div></div>'+
   '<button id="axAcX" type="button" style="width:36px;height:36px;border-radius:12px;border:1px solid rgba(255,255,255,.15);background:rgba(255,255,255,.06);color:#9aa4b2;font-size:1rem;cursor:pointer">✕</button>'+
  '</div>'+
  '<div style="display:flex;gap:8px;margin-top:16px">'+
   '<div style="flex:1;background:rgba(43,125,255,.08);border:1px solid rgba(43,125,255,.25);border-radius:14px;padding:10px;text-align:center"><b id="axAcS1" style="display:block;color:#7bb5ff;font-size:1.1rem">0</b><span style="color:#8a94a3;font-size:.58rem">Tasks done</span></div>'+
   '<div style="flex:1;background:rgba(124,92,255,.08);border:1px solid rgba(124,92,255,.25);border-radius:14px;padding:10px;text-align:center"><b id="axAcS2" style="display:block;color:#b388ff;font-size:1.1rem">0m</b><span style="color:#8a94a3;font-size:.58rem">Focus</span></div>'+
   '<div style="flex:1;background:rgba(255,159,26,.08);border:1px solid rgba(255,159,26,.25);border-radius:14px;padding:10px;text-align:center"><b id="axAcS3" style="display:block;color:#ffb443;font-size:1.1rem">0</b><span style="color:#8a94a3;font-size:.58rem">Streak</span></div>'+
  '</div>'+
  '<div style="margin-top:16px;display:flex;flex-direction:column;gap:8px">'+
   '<label style="color:#8a94a3;font-size:.62rem;font-weight:800;letter-spacing:1px">YOUR NAME</label>'+
   '<input id="axAcInN" style="width:100%;padding:12px 14px;border-radius:14px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);color:#eef2f7;outline:none;font-family:inherit" placeholder="Name">'+
   '<label style="color:#8a94a3;font-size:.62rem;font-weight:800;letter-spacing:1px">YOUR CITY</label>'+
   '<input id="axAcInC" style="width:100%;padding:12px 14px;border-radius:14px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);color:#eef2f7;outline:none;font-family:inherit" placeholder="City">'+
   '<label style="color:#8a94a3;font-size:.62rem;font-weight:800;letter-spacing:1px">ACCENT COLOR</label>'+
   '<div id="axAcSw" style="display:flex;gap:8px"></div>'+
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
 s.querySelector('#axAcX').onclick=function(){s.style.display='none';};
 s.addEventListener('click',function(e){if(e.target===s)s.style.display='none';});
 s.querySelector('#axAcSave').onclick=function(){
  var p=prefs();
  var n=s.querySelector('#axAcInN').value.trim();if(n)p.name=n;
  var c=s.querySelector('#axAcInC').value.trim();if(c)p.city=c;
  saveP(p);s._refresh();
  var dn=document.querySelector('.drawer-profile-info strong');if(dn&&p.name)dn.textContent=p.name;
  if(window.toast)toast('Profile saved ✅');
 };
 s.querySelector('#axAcInstall').onclick=function(){var sh=document.getElementById('axSheet');if(sh){s.style.display='none';sh.classList.add('open');}};
 s.querySelector('#axAcReset').onclick=function(){
  if(confirm('Reset ALL AXIUM data? This cannot be undone.')){
   ['axium_tasks','axium_notes','axium_prefs','axium_minutes','axium_streak','axium_daily','axium_schedule','axium_goals','axium_events','axium_notes_final','axNotifyV6'].forEach(function(k){localStorage.removeItem(k);});
   location.reload();
  }
 };
 s._refresh=function(){
  var p=prefs(),st=stats();
  s.querySelector('#axAcName').textContent=p.name||'Alireza';
  s.querySelector('#axAcAv').textContent=(p.name||'A').charAt(0).toUpperCase();
  s.querySelector('#axAcInN').value=p.name||'';
  s.querySelector('#axAcInC').value=p.city||'';
  s.querySelector('#axAcS1').textContent=st.done;
  s.querySelector('#axAcS2').textContent=st.min>=60?Math.floor(st.min/60)+'h':st.min+'m';
  s.querySelector('#axAcS3').textContent=st.streak;
  var act=(p.accent||'blue');
  sw.querySelectorAll('button').forEach(function(x){x.style.borderColor=x.dataset.a===act?'#fff':'transparent';});
 };
 return s;
}
function hook(){
 var b=document.getElementById('axAcct');
 if(!b){setTimeout(hook,800);return;}
 if(b.dataset.h25)return;b.dataset.h25='1';
 var st=document.createElement('style');st.textContent='@keyframes ax25up{from{transform:translateY(60px);opacity:0}to{transform:none;opacity:1}}';document.head.appendChild(st);
 b.addEventListener('click',function(){
  var s=sheet();s._refresh();s.style.display='flex';
  var card=s.firstChild;card.style.animation='none';void card.offsetWidth;card.style.animation='ax25up .55s cubic-bezier(.34,1.56,.64,1) both';
 });
}
hook();setInterval(hook,1500);
})();
/* ===== AXIUM v26: ACCOUNT PAGE PRO ===== */
(function(){
if(window.__ax26)return;window.__ax26=true;
var ACC={blue:'#2b7dff',violet:'#7c5cff',cyan:'#00c2d6',orange:'#ff9f1a',green:'#16c784'};
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
 s.innerHTML='<div style="position:relative;width:min(480px,100vw);max-height:90vh;overflow-y:auto;overflow-x:hidden;background:linear-gradient(170deg,#101828,#0a0f1a);border:1px solid rgba(43,125,255,.4);border-radius:28px 28px 0 0;padding:18px 20px 36px;box-shadow:0 -20px 70px rgba(0,0,0,.7);animation:ax26up .6s cubic-bezier(.34,1.56,.64,1) both">'+
  '<div style="position:absolute;inset:0;pointer-events:none;overflow:hidden"><i style="position:absolute;width:120px;height:120px;left:-40px;top:30px;border-radius:50%;background:radial-gradient(circle,rgba(43,125,255,.5),transparent 70%);filter:blur(6px);animation:ax26orb 8s ease-in-out infinite"></i><i style="position:absolute;width:90px;height:90px;right:-30px;top:160px;border-radius:50%;background:radial-gradient(circle,rgba(0,194,214,.45),transparent 70%);filter:blur(6px);animation:ax26orb 9s 1s ease-in-out infinite reverse"></i></div>'+
  '<div style="width:52px;height:5px;border-radius:3px;background:rgba(255,255,255,.2);margin:0 auto 14px;position:relative"></div>'+
  '<div style="display:flex;align-items:center;gap:14px;position:relative" data-a=".05s">'+
   '<div style="position:relative;width:68px;height:68px;flex:none"><span style="position:absolute;inset:-7px;border-radius:24px;border:2px solid transparent;border-top-color:#00c2d6;border-right-color:rgba(43,125,255,.6);animation:ax26spin 3s linear infinite"></span><span style="position:absolute;top:-4px;right:-2px;width:6px;height:6px;border-radius:50%;background:#7bb5ff;box-shadow:0 0 10px #7bb5ff;animation:ax26tw 2s ease-in-out infinite"></span><div id="axAcAv" style="width:68px;height:68px;border-radius:22px;background:linear-gradient(135deg,#2b7dff,#00c2d6);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:1.7rem;color:#fff;box-shadow:0 10px 26px rgba(43,125,255,.45);animation:ax26pop .6s .1s cubic-bezier(.34,1.56,.64,1) both">A</div></div>'+
   '<div style="flex:1;min-width:0"><div id="axAcName" style="color:#eef2f7;font-weight:900;font-size:1.2rem;background:linear-gradient(90deg,#fff,#7bb5ff,#00c2d6,#fff);background-size:220% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:ax26shine 4s linear infinite">Alireza</div><div style="color:#3fd67a;font-size:.62rem;font-weight:800;letter-spacing:1.5px;margin-top:2px">PRO PLAN · LOCAL ACCOUNT</div></div>'+
   '<button id="axAcX" type="button" style="width:36px;height:36px;border-radius:12px;border:1px solid rgba(255,255,255,.15);background:rgba(255,255,255,.06);color:#9aa4b2;font-size:1rem;cursor:pointer">✕</button>'+
  '</div>'+
  '<div style="display:flex;gap:8px;margin-top:16px;position:relative">'+
   '<div data-a=".15s" style="flex:1;background:rgba(43,125,255,.08);border:1px solid rgba(43,125,255,.25);border-radius:14px;padding:10px;text-align:center"><b id="axAcS1" style="display:block;color:#7bb5ff;font-size:1.15rem;font-weight:900">0</b><span style="color:#8a94a3;font-size:.58rem">Tasks done</span></div>'+
   '<div data-a=".22s" style="flex:1;background:rgba(124,92,255,.08);border:1px solid rgba(124,92,255,.25);border-radius:14px;padding:10px;text-align:center"><b id="axAcS2" style="display:block;color:#b388ff;font-size:1.15rem;font-weight:900">0m</b><span style="color:#8a94a3;font-size:.58rem">Focus</span></div>'+
   '<div data-a=".29s" style="flex:1;background:rgba(255,159,26,.08);border:1px solid rgba(255,159,26,.25);border-radius:14px;padding:10px;text-align:center"><b id="axAcS3" style="display:block;color:#ffb443;font-size:1.15rem;font-weight:900">0</b><span style="color:#8a94a3;font-size:.58rem">Streak</span></div>'+
  '</div>'+
  '<div style="margin-top:16px;position:relative" data-a=".36s"><div style="color:#7bb5ff;font-size:.66rem;font-weight:900;letter-spacing:1.5px;margin-bottom:8px">🔄 ACCOUNTS</div><div id="axAcList" style="display:flex;flex-direction:column;gap:8px"></div><button id="axAcAdd" type="button" style="width:100%;margin-top:8px;padding:11px;border-radius:14px;border:1px dashed rgba(43,125,255,.5);background:rgba(43,125,255,.08);color:#7bb5ff;font-weight:800;font-size:.75rem;cursor:pointer">➕ Add / switch account</button><div id="axAcForm" style="display:none;margin-top:8px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:12px;display:none"><input id="axAcFN" placeholder="New account name" style="width:100%;padding:10px 12px;border-radius:12px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);color:#eef2f7;outline:none;margin-bottom:8px;font-family:inherit"><input id="axAcFC" placeholder="City (optional)" style="width:100%;padding:10px 12px;border-radius:12px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);color:#eef2f7;outline:none;margin-bottom:8px;font-family:inherit"><button id="axAcFOk" type="button" style="width:100%;padding:11px;border:none;border-radius:12px;background:linear-gradient(135deg,#16c784,#0fa06a);color:#fff;font-weight:800;cursor:pointer">Create & switch</button></div></div>'+
  '<div style="margin-top:16px;position:relative;display:flex;flex-direction:column;gap:8px">'+
   '<div style="color:#7bb5ff;font-size:.66rem;font-weight:900;letter-spacing:1.5px" data-a=".43s">✏️ PROFILE</div>'+
   '<input id="axAcInN" data-a=".5s" style="width:100%;padding:12px 14px;border-radius:14px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);color:#eef2f7;outline:none;font-family:inherit" placeholder="Name">'+
   '<input id="axAcInC" data-a=".57s" style="width:100%;padding:12px 14px;border-radius:14px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);color:#eef2f7;outline:none;font-family:inherit" placeholder="City">'+
   '<div style="color:#7bb5ff;font-size:.66rem;font-weight:900;letter-spacing:1.5px;margin-top:4px" data-a=".64s">🎨 ACCENT COLOR</div>'+
   '<div id="axAcSw" style="display:flex;gap:8px" data-a=".7s"></div>'+
   '<div style="color:#7bb5ff;font-size:.66rem;font-weight:900;letter-spacing:1.5px;margin-top:8px" data-a=".77s">📄 DETAILS</div>'+
   '<div data-a=".83s" style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:4px 12px"><div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px dashed rgba(255,255,255,.08);color:#8a94a3;font-size:.68rem"><span>Member since</span><b id="axAcD1" style="color:#c5cfdb">—</b></div><div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px dashed rgba(255,255,255,.08);color:#8a94a3;font-size:.68rem"><span>Version</span><b style="color:#c5cfdb">1.1.4</b></div><div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px dashed rgba(255,255,255,.08);color:#8a94a3;font-size:.68rem"><span>Storage used</span><b id="axAcD3" style="color:#c5cfdb">0 KB</b></div><div style="display:flex;justify-content:space-between;padding:8px 0;color:#8a94a3;font-size:.68rem"><span>Language</span><b style="color:#c5cfdb">Auto (EN/FA)</b></div></div>'+
   '<button id="axAcSave" type="button" data-a=".9s" style="position:relative;overflow:hidden;width:100%;margin-top:6px;padding:14px;border:none;border-radius:16px;background:linear-gradient(135deg,#2b7dff,#1a6ae0);color:#fff;font-weight:900;cursor:pointer;box-shadow:0 10px 26px rgba(43,125,255,.4)">💾 Save profile</button>'+
   '<button id="axAcInstall" type="button" data-a=".97s" style="width:100%;padding:13px;border-radius:16px;border:1px solid rgba(63,214,122,.5);background:rgba(22,199,132,.1);color:#7ae8b0;font-weight:800;cursor:pointer">📦 Install AXIUM app</button>'+
   '<button id="axAcReset" type="button" data-a="1.04s" style="width:100%;padding:13px;border-radius:16px;border:1px solid rgba(255,107,107,.4);background:rgba(255,107,107,.08);color:#ff6b6b;font-weight:800;cursor:pointer">🧨 Reset all data</button>'+
  '</div>'+
 '</div>';
 document.body.appendChild(s);
 var stl=document.createElement('style');
 stl.textContent='#axAcctSheet26 [data-a]{animation:ax26in .55s cubic-bezier(.34,1.56,.64,1) both}@keyframes ax26up{from{transform:translateY(80px);opacity:0}to{transform:none;opacity:1}}@keyframes ax26in{from{opacity:0;transform:translateY(18px) scale(.96)}to{opacity:1;transform:none}}@keyframes ax26orb{0%,100%{transform:translate(0,0)}50%{transform:translate(16px,-20px)}}@keyframes ax26spin{to{transform:rotate(360deg)}}@keyframes ax26tw{0%,100%{opacity:0;transform:scale(.4)}50%{opacity:1;transform:scale(1.1)}}@keyframes ax26pop{from{transform:scale(.4) rotate(-12deg);opacity:0}60%{transform:scale(1.08) rotate(3deg)}to{transform:scale(1);opacity:1}}@keyframes ax26shine{0%{background-position:0% 50%}100%{background-position:200% 50%}}';
 document.head.appendChild(stl);
 var sw=s.querySelector('#axAcSw');
 function applyAccent(k){var r=document.documentElement.style;r.setProperty('--blue',ACC[k]);}
 Object.keys(ACC).forEach(function(k,i){
  var b=document.createElement('button');b.type='button';b.dataset.a=k;
  b.style.cssText='width:38px;height:38px;border-radius:12px;border:2px solid transparent;background:'+ACC[k]+';cursor:pointer;box-shadow:0 4px 14px '+ACC[k]+'55;animation:ax26pop .5s '+(0.7+i*0.07)+'s cubic-bezier(.34,1.56,.64,1) both';
  b.onclick=function(){sw.querySelectorAll('button').forEach(function(x){x.style.borderColor='transparent';});b.style.borderColor='#fff';saveP(Object.assign(prefs(),{accent:k}));applyAccent(k);};
  sw.appendChild(b);
 });
 function renderAccts(){
  var L=s.querySelector('#axAcList');L.innerHTML='';
  var p=prefs(),list=accts();
  if(!list.length&&!p.name){L.innerHTML='<div style="color:#5b6472;font-size:.7rem;text-align:center;padding:10px;border:1px dashed rgba(255,255,255,.12);border-radius:12px">No saved accounts yet — create one below</div>';return;}
  var cur={id:p.acctId||'current',name:p.name||'Alireza',city:p.city||''};
  var all=list.slice();if(!all.some(function(a){return a.id===cur.id;}))all.unshift(cur);
  all.forEach(function(a,i){
   var row=document.createElement('div');
   var act=a.id===cur.id;
   row.style.cssText='display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:14px;border:1px solid '+(act?'rgba(63,214,122,.5)':'rgba(255,255,255,.1)')+';background:'+(act?'rgba(63,214,122,.08)':'rgba(255,255,255,.04)')+';cursor:pointer;animation:ax26in .45s '+(0.36+i*0.07)+'s both';
   row.innerHTML='<div style="width:36px;height:36px;flex:none;border-radius:11px;background:linear-gradient(135deg,'+(ACC[a.accent]||'#2b7dff')+',#00c2d6);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900">'+(a.name||'A').charAt(0).toUpperCase()+'</div><div style="flex:1;min-width:0"><div style="color:#eef2f7;font-size:.8rem;font-weight:800">'+(a.name||'Alireza')+(act?' ✓':'')+'</div><div style="color:#8a94a3;font-size:.6rem">'+(a.city||'—')+'</div></div>'+(act?'':'<button type="button" style="border:none;background:none;color:#5b6472;cursor:pointer;font-size:.8rem">✕</button>');
   row.onclick=function(){switchTo(a);};
   var del=row.querySelector('button');
   if(del)del.onclick=function(e){e.stopPropagation();saveA(accts().filter(function(x){return x.id!==a.id;}));renderAccts();if(window.toast)toast('Account removed 🗑');};
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
 s.addEventListener('click',function(e){if(e.target===s)s.style.display='none';});
 s.querySelector('#axAcSave').onclick=function(e){
  var p=prefs();
  var n=s.querySelector('#axAcInN').value.trim();if(n)p.name=n;
  var c=s.querySelector('#axAcInC').value.trim();if(c)p.city=c;
  if(!p.since)p.since=new Date().toISOString().slice(0,10);
  saveP(p);refresh();renderAccts();
  var dn=document.querySelector('.drawer-profile-info strong');if(dn&&p.name)dn.textContent=p.name;
  var r=e.currentTarget.getBoundingClientRect();var d=document.createElement('span');d.style.cssText='position:absolute;border-radius:50%;background:rgba(255,255,255,.5);width:12px;height:12px;left:'+(e.clientX-r.left)+'px;top:'+(e.clientY-r.top)+'px;transform:scale(0);animation:ax23rip .6s ease-out forwards;pointer-events:none';e.currentTarget.appendChild(d);setTimeout(function(){d.remove();},700);
  if(window.toast)toast('Profile saved ✅');
 };
 s.querySelector('#axAcInstall').onclick=function(){var sh=document.getElementById('axSheet');if(sh){s.style.display='none';sh.classList.add('open');}};
 s.querySelector('#axAcReset').onclick=function(){
  if(confirm('Reset ALL AXIUM data? This cannot be undone.')){
   ['axium_tasks','axium_notes','axium_prefs','axium_minutes','axium_streak','axium_daily','axium_schedule','axium_goals','axium_events','axium_notes_final','axium_accounts','axNotifyV6'].forEach(function(k){localStorage.removeItem(k);});
   location.reload();
  }
 };
 function counters(){
  var st=stats();
  var el1=s.querySelector('#axAcS1'),el2=s.querySelector('#axAcS2'),el3=s.querySelector('#axAcS3');
  var t0=performance.now();
  (function tick(now){
   var p=Math.min(1,(now-t0)/900),e=1-Math.pow(1-p,3);
   if(el1)el1.textContent=Math.round(st.done*e);
   if(el2)el2.textContent=Math.round(st.min*e)+'m';
   if(el3)el3.textContent=Math.round(st.streak*e);
   if(p<1)requestAnimationFrame(tick);
  })(t0);
 }
 s._open=function(){refresh();renderAccts();counters();};
 function refresh(){
  var p=prefs();
  s.querySelector('#axAcName').textContent=p.name||'Alireza';
  s.querySelector('#axAcAv').textContent=(p.name||'A').charAt(0).toUpperCase();
  s.querySelector('#axAcInN').value=p.name||'';
  s.querySelector('#axAcInC').value=p.city||'';
  s.querySelector('#axAcD1').textContent=p.since||new Date().toISOString().slice(0,10);
  s.querySelector('#axAcD3').textContent=storageKB()+' KB';
  var act=(p.accent||'blue');
  sw.querySelectorAll('button').forEach(function(x){x.style.borderColor=x.dataset.a===act?'#fff':'transparent';});
 }
 return s;
}
function hook(){
 var b=document.getElementById('axAcct');
 if(!b){setTimeout(hook,800);return;}
 if(b.dataset.h26)return;b.dataset.h26='1';
 var nb=b.cloneNode(true);b.parentNode.replaceChild(nb,b);
 nb.addEventListener('click',function(){
  var s=sheet();s.style.display='flex';s._open();
 });
}
hook();setInterval(hook,1500);
})();
/* ===== AXIUM v27: LIVING AVATAR RINGS ===== */
(function(){
if(window.__ax27)return;window.__ax27=true;
function fix(){
 var s=document.getElementById('axAcctSheet26');
 if(!s){setTimeout(fix,800);return;}
 var av=s.querySelector('#axAcAv');
 if(!av){setTimeout(fix,800);return;}
 var wrap=av.parentNode;
 if(wrap.querySelector('.h26'))return;
 var st=document.createElement('style');
 st.textContent='.h26{position:absolute;inset:-14px;border-radius:28px;background:conic-gradient(from 0deg,transparent 0 60%,rgba(43,125,255,.65) 82%,rgba(0,194,214,.9) 92%,transparent 100%);filter:blur(5px);animation:ax26spin 3.2s linear infinite;will-change:transform;z-index:0}.r26a{position:absolute;inset:-6px;border-radius:22px;border:1.5px dashed rgba(123,181,255,.55);animation:ax26spin 9s linear infinite reverse;will-change:transform}.r26b{position:absolute;inset:-6px;border-radius:22px;border:1px solid rgba(0,194,214,.5);animation:ax26ping 2.4s ease-out infinite;will-change:transform,opacity}@keyframes ax26ping{0%{transform:scale(.85);opacity:.8}100%{transform:scale(1.35);opacity:0}}#axAcAv{position:relative;z-index:1}';
 document.head.appendChild(st);
 wrap.querySelectorAll('span').forEach(function(sp){
  if((sp.getAttribute('style')||'').indexOf('ax26spin')>-1)sp.remove();
 });
 var h=document.createElement('span');h.className='h26';
 var a=document.createElement('span');a.className='r26a';
 var b=document.createElement('span');b.className='r26b';
 wrap.insertBefore(b,wrap.firstChild);
 wrap.insertBefore(a,wrap.firstChild);
 wrap.insertBefore(h,wrap.firstChild);
}
fix();
})();
/* ===== AXIUM v29: CALM SOUNDS + SCROLL FIX + FAB FALLBACK ===== */
(function(){
if(window.__ax29)return;window.__ax29=true;
var st=document.createElement('style');
st.textContent='#axSheet{overflow-y:auto;align-items:flex-start;-webkit-overflow-scrolling:touch}#axSheet .card{margin:auto;overflow:visible;-webkit-overflow-scrolling:touch}#axAcctSheet26{overflow-y:auto;align-items:flex-start;-webkit-overflow-scrolling:touch}#axAcctSheet26>div{margin:auto;overflow:visible}';
document.head.appendChild(st);
(function(){
 function hook(){
  var fab=document.getElementById('axFab');
  if(!fab){setTimeout(hook,900);return;}
  if(fab.dataset.f29)return;fab.dataset.f29='1';
  var old=fab.onclick;
  fab.onclick=function(e){
   if(!('Notification' in window)){
    var p=document.getElementById('axPanel');if(p)p.classList.add('open');
    if(window.toast)toast('This browser has no Notification API — panel works locally 💙');
    return;
   }
   if(old)old.call(fab,e);
  };
 }
 hook();
})();
var SFX={on:localStorage.getItem('axium_sfx')!=='0'};
function ctx(){
 if(!window.__axCtx){var AC=window.AudioContext||window.webkitAudioContext;if(!AC)return null;window.__axCtx=new AC();window.__axGain=window.__axCtx.createGain();window.__axGain.gain.value=0.3;window.__axGain.connect(window.__axCtx.destination);}
 if(window.__axCtx.state==='suspended')window.__axCtx.resume().catch(function(){});
 return window.__axCtx;
}
function note(f,t0,d,vol,type,slide){
 var c=ctx();if(!c)return;
 var t=c.currentTime+(t0||0);
 var o=c.createOscillator(),g=c.createGain(),fl=c.createBiquadFilter();
 fl.type='lowpass';fl.frequency.value=2400;
 o.type=type||'sine';o.frequency.setValueAtTime(f,t);
 if(slide)o.frequency.exponentialRampToValueAtTime(slide,t+d);
 g.gain.setValueAtTime(0.0001,t);
 g.gain.exponentialRampToValueAtTime(vol,t+0.02);
 g.gain.exponentialRampToValueAtTime(0.0001,t+d);
 o.connect(fl);fl.connect(g);g.connect(window.__axGain);
 o.start(t);o.stop(t+d+0.05);
}
function sfx(name){
 if(!SFX.on)return;
 try{
  if(name==='click'){note(520,0,.07,.10,'triangle',620);}
  else if(name==='open'){note(392,0,.25,.10);note(523,.04,.3,.08);note(659,.08,.35,.06);}
  else if(name==='close'){note(659,0,.18,.08);note(523,.05,.2,.07);note(392,.1,.25,.06);}
  else if(name==='save'){note(659,0,.12,.12);note(988,.09,.18,.10);}
  else if(name==='notify'){note(1046,0,.35,.12);note(2093,0,.2,.04);note(784,.12,.4,.08);}
  else if(name==='success'){[523,659,784,1046].forEach(function(f,i){note(f,i*.09,.22,.10);});}
  else if(name==='add'){note(440,0,.09,.10,'triangle',880);}
  else if(name==='del'){note(220,0,.12,.10,'triangle',140);}
  else if(name==='switch'){note(300,0,.18,.09,'sine',900);}
  else if(name==='off'){note(320,0,.1,.09,'triangle',200);}
 }catch(e){}
}
window.axSfx=sfx;
var last=0;
document.addEventListener('click',function(e){
 var t=e.target;if(!t||!t.closest)return;
 var n=Date.now();
 if(t.closest('button,.qa-chip,.rail-item,.axn-chip,.tile,.sprow,.ai-chip,.drawer-link')){if(n-last>80){last=n;sfx('click');}}
 if(t.closest('#axAcSave,.sv,#axAcFOk'))setTimeout(function(){sfx('save');},60);
 if(t.closest('.task-row'))setTimeout(function(){var r=t.closest('.task-row');if(r&&r.classList.contains('done'))sfx('success');else sfx('close');},0);
 if(t.closest('.task-del,.sch-del,.goal-del'))setTimeout(function(){sfx('del');},0);
 if(t.closest('.rail-item'))setTimeout(function(){sfx('switch');},30);
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
function listHook(){
 var l=document.getElementById('axList');
 if(!l){setTimeout(listHook,1200);return;}
 var prev=l.children.length;
 new MutationObserver(function(){
  if(l.children.length>prev)sfx('notify');
  prev=l.children.length;
 }).observe(l,{childList:true});
}
listHook();
function taskHook(){
 var c=document.querySelector('.tasks-card');
 if(!c){setTimeout(taskHook,1200);return;}
 var prev=c.querySelectorAll('.task-row').length;
 new MutationObserver(function(){
  var now=c.querySelectorAll('.task-row').length;
  if(now>prev)sfx('add');
  prev=now;
 }).observe(c,{childList:true,subtree:true});
}
taskHook();
function addToggle(){
 var ch=document.querySelector('#axPanel .ax23chips')||document.querySelector('#axPanel .axn-chips');
 if(!ch){setTimeout(addToggle,900);return;}
 if(document.getElementById('ax29sfx'))return;
 var b=document.createElement('button');b.type='button';b.id='ax29sfx';b.className='axn-chip';
 function lbl(){b.textContent=SFX.on?'🔊 Sounds: ON':'🔇 Sounds: OFF';}
 lbl();
 b.onclick=function(){SFX.on=!SFX.on;localStorage.setItem('axium_sfx',SFX.on?'1':'0');lbl();if(SFX.on)sfx('save');else sfx('off');};
 ch.appendChild(b);
}
addToggle();
})();
