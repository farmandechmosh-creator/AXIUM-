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
/* ===== AXIUM v31: REAL WATER SOUND ENGINE ===== */
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
 if(t.closest('#ft-start'))setTimeout(function(){var b=document.getElementById('ft-start');sfx(b&&b.textContent.indexOf('❚')>-1?'focus':'close');},0);
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
function listHook(){var l=document.getElementById('axList');if(!l){setTimeout(listHook,1200);return;}var prev=l.children.length;new MutationObserver(function(){if(l.children.length>prev)sfx('notify');prev=l.children.length;}).observe(l,{childList:true});}
listHook();
function taskHook(){var c=document.querySelector('.tasks-card');if(!c){setTimeout(taskHook,1200);return;}var prev=c.querySelectorAll('.task-row').length;new MutationObserver(function(){var now=c.querySelectorAll('.task-row').length;if(now>prev)sfx('add');prev=now;}).observe(c,{childList:true,subtree:true});}
taskHook();
new MutationObserver(function(ms){ms.forEach(function(m){if(m.target.classList&&m.target.classList.contains('celebrate'))sfx('achieve');});}).observe(document.body,{attributes:true,subtree:true,attributeFilter:['class']});
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
/* ===== AXIUM v36: ANIME SHADOW NARRATOR ===== */
(function(){
if(window.__ax36)return;window.__ax36=true;
var DONE=localStorage.getItem('axium_tour_done')==='1';
var FIG='<svg viewBox="0 0 160 220"><defs><linearGradient id="axDG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a3444"/><stop offset=".6" stop-color="#141b26"/><stop offset="1" stop-color="#0a0f16"/></linearGradient></defs><g fill="url(#axDG)"><path d="M80 6 L88 20 L98 10 L100 26 L112 20 L108 34 L118 32 L104 44 L56 44 L44 32 L54 34 L50 20 L62 26 L64 10 L74 20 Z"/><path d="M62 40 C62 30 98 30 98 40 L98 52 C98 62 88 68 80 68 C72 68 62 62 62 52 Z"/><path d="M72 66 L88 66 L90 76 L70 76 Z"/><path d="M52 78 C64 72 96 72 108 78 L104 104 C102 120 92 130 80 134 C68 130 58 120 56 104 Z"/><path d="M108 80 C120 88 124 102 120 114 C116 122 108 124 104 118 L100 106 C104 98 104 88 100 82 Z"/><path d="M64 132 C58 158 58 188 62 214 L74 214 C70 188 72 160 78 136 Z"/><path d="M96 132 C102 158 102 188 98 214 L86 214 C90 188 88 160 82 136 Z"/></g><g id="axArmP" style="transform-box:view-box;transform-origin:56px 82px;transition:transform .55s cubic-bezier(.34,1.56,.64,1)"><g style="animation:axArmTalk 3s ease-in-out infinite"><g fill="url(#axDG)"><path d="M56 76 C42 74 28 70 18 64 L14 72 C24 80 40 86 54 88 Z"/><path d="M18 64 L6 58 L4 64 L14 72 Z"/></g></g></g><g stroke="#7bb5ff" stroke-width="2.2" fill="none" opacity=".55" stroke-linecap="round"><path d="M104 44 L116 32 L106 34 L110 20 L98 26"/><path d="M108 80 C120 88 124 102 120 114"/><path d="M104 104 C102 120 92 130 80 134"/></g><g stroke="#00c2d6" stroke-width="1.8" fill="none" opacity=".6" stroke-linecap="round"><path d="M56 76 C42 74 28 70 18 64 L14 72"/></g></svg>';
var st=document.createElement('style');
st.textContent='#axBuddy{position:fixed;right:-4px;bottom:44px;z-index:100009;height:38vh;width:calc(38vh * .72);display:none;pointer-events:none;transition:transform .4s}#axBuddy.flip{transform:scaleX(-1)}#axBuddy .fig{position:absolute;inset:0;filter:drop-shadow(0 0 22px rgba(43,125,255,.35)) drop-shadow(0 10px 30px rgba(0,0,0,.6));transform-origin:50% 100%}#axBuddy .fig svg{width:100%;height:100%}#axBuddy .halo{position:absolute;inset:-8% -4%;border-radius:50%;background:radial-gradient(circle at 50% 60%,rgba(43,125,255,.22),transparent 70%);filter:blur(10px);animation:axHCore 3.4s ease-in-out infinite}#axBuddy.mat .fig{animation:axHMat .9s cubic-bezier(.34,1.56,.64,1) both,axHBreath 3.4s 1s ease-in-out infinite}#axBuddy.hop .fig{animation:axHHop .5s cubic-bezier(.34,1.56,.64,1)}#axBuddy.flex .fig{animation:axHFlex 1.1s cubic-bezier(.34,1.56,.64,1)}#axBuddy.idle .fig{animation:axHBreath 3.4s ease-in-out infinite}#axBub{position:fixed;left:12px;right:12px;bottom:12px;z-index:100011;background:rgba(10,14,22,.93);border:1px solid rgba(43,125,255,.5);border-radius:18px;padding:12px 14px;display:none;box-shadow:0 20px 50px rgba(0,0,0,.65),0 0 30px rgba(43,125,255,.18);backdrop-filter:blur(10px);animation:axBubIn2 .5s cubic-bezier(.34,1.56,.64,1) both}#axBub .bh{display:flex;align-items:center;gap:8px;margin-bottom:6px}#axBub .bh span{padding:3px 9px;border-radius:999px;background:rgba(43,125,255,.18);border:1px solid rgba(43,125,255,.45);color:#7bb5ff;font-size:.58rem;font-weight:900}#axBub .bh b{color:#eef2f7;font-size:.8rem;font-weight:900;letter-spacing:.5px}#axBub .tx{color:#cfd8e4;font-size:.78rem;line-height:1.7;min-height:40px}#axBub .tx b{color:#7bb5ff}#axBub .dots{display:flex;gap:4px;margin-top:8px}#axBub .dots i{width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.15)}#axBub .dots i.on{background:#2b7dff;box-shadow:0 0 8px #2b7dff}#axBub .btns{display:flex;gap:8px;margin-top:10px}#axBub .btns button{flex:1;padding:10px;border-radius:12px;border:none;font-weight:800;font-size:.72rem;cursor:pointer}#axBub .go{background:linear-gradient(135deg,#2b7dff,#1a6ae0);color:#fff}#axBub .no{background:rgba(255,255,255,.07);color:#8a94a3}#axSpot{position:fixed;z-index:100008;border-radius:20px;box-shadow:0 0 0 9999px rgba(4,6,10,.74),0 0 0 2px rgba(43,125,255,.9),0 0 44px rgba(43,125,255,.5);pointer-events:none;display:none;transition:all .5s cubic-bezier(.34,1.56,.64,1)}#axHelpCard{background:linear-gradient(160deg,rgba(43,125,255,.14),rgba(0,194,214,.06));border:1px solid rgba(43,125,255,.4);border-radius:20px;padding:16px;margin-bottom:14px;display:flex;gap:12px;align-items:center}#axHelpCard .av{width:64px;height:88px;flex:none;filter:drop-shadow(0 6px 16px rgba(43,125,255,.4))}#axHelpCard .av svg{width:100%;height:100%}#axHelpCard b{color:#eef2f7;display:block;font-size:.85rem}#axHelpCard span{color:#8a94a3;font-size:.68rem;line-height:1.6;display:block;margin:4px 0 8px}#axHelpCard button{padding:8px 12px;border-radius:10px;border:1px solid rgba(43,125,255,.4);background:rgba(43,125,255,.12);color:#7bb5ff;font-size:.64rem;font-weight:800;cursor:pointer;margin-right:6px}@keyframes axHBreath{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.02)}}@keyframes axHCore{0%,100%{opacity:.7;transform:scale(1)}50%{opacity:1;transform:scale(1.06)}}@keyframes axHMat{0%{opacity:0;transform:scale(.3) translateY(60px);filter:blur(14px)}60%{opacity:1;filter:blur(0)}80%{transform:scale(1.06) translateY(-8px)}100%{transform:scale(1)}}@keyframes axHHop{0%{transform:scaleY(1)}30%{transform:scaleY(.86) scaleX(1.1)}60%{transform:scaleY(1.1) scaleX(.96) translateY(-12px)}100%{transform:scaleY(1)}}@keyframes axHFlex{0%{transform:scale(1)}35%{transform:scale(1.12)}55%{transform:scale(1.04)}75%{transform:scale(1.1)}100%{transform:scale(1)}}@keyframes axArmTalk{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}@keyframes axBubIn2{from{opacity:0;transform:translateY(24px) scale(.92)}to{opacity:1;transform:none}}@keyframes axPartFly{to{transform:translate(var(--dx),var(--dy));opacity:0}}@keyframes axGhost{to{opacity:0;transform:scale(.8)}}.axGhost{position:fixed;z-index:100005;pointer-events:none;opacity:.35;filter:blur(2px);animation:axGhost .6s ease-out forwards}';
document.head.appendChild(st);
var buddy=document.createElement('div');buddy.id='axBuddy';
buddy.innerHTML='<span class="halo"></span><div class="fig">'+FIG+'</div>';
document.body.appendChild(buddy);
var arm=buddy.querySelector('#axArmP');
var bub=document.createElement('div');bub.id='axBub';
bub.innerHTML='<div class="bh"><span id="axBubStep">1/8</span><b id="axBubTitle"></b></div><div class="tx"></div><div class="dots"></div><div class="btns"></div>';
document.body.appendChild(bub);
var spot=document.createElement('div');spot.id='axSpot';document.body.appendChild(spot);
var tx=bub.querySelector('.tx'),btns=bub.querySelector('.btns'),dots=bub.querySelector('.dots'),stepEl=bub.querySelector('#axBubStep'),titleEl=bub.querySelector('#axBubTitle'),typeT=null,shown=false;
function showBuddy(){
 if(shown){buddy.style.display='block';return;}
 shown=true;buddy.classList.add('mat');buddy.style.display='block';
 if(window.axSfx)window.axSfx('gong');
 setTimeout(function(){buddy.classList.remove('mat');buddy.classList.add('idle');},1400);
}
function hop(){buddy.classList.remove('idle');buddy.classList.add('hop');burst();setTimeout(function(){buddy.classList.remove('hop');buddy.classList.add('idle');},520);}
function burst(){
 var br=buddy.getBoundingClientRect();
 for(var i=0;i<10;i++){var s=document.createElement('i');var a=Math.random()*Math.PI*2,d=50+Math.random()*60;
  s.style.cssText='position:fixed;z-index:100012;left:'+(br.left+br.width/2)+'px;top:'+(br.top+br.height/2)+'px;width:6px;height:6px;border-radius:50%;background:#9cc8ff;box-shadow:0 0 12px #9cc8ff;pointer-events:none;--dx:'+(Math.cos(a)*d)+'px;--dy:'+(Math.sin(a)*d-30)+'px;animation:axPartFly .7s ease-out forwards';
  document.body.appendChild(s);setTimeout(function(el){return function(){el.remove();};}(s),800);}
}
function pointAt(el){
 var br=buddy.getBoundingClientRect(),rr=el.getBoundingClientRect();
 var sx=br.left+br.width*0.35,sy=br.top+br.height*0.36;
 var cx=rr.left+rr.width/2,cy=rr.top+rr.height/2;
 var dx=cx-sx,dy=cy-sy;
 var flip=dx>br.width*0.5;
 buddy.classList.toggle('flip',flip);
 var dxf=flip?-dx:dx;
 var rot=Math.atan2(dy,dxf)*180/Math.PI;
 if(rot>70)rot=70;if(rot<-70)rot=-70;
 if(arm)arm.style.transform='rotate('+rot+'deg)';
}
function spotTo(el){
 var r=el.getBoundingClientRect(),p=8;
 spot.style.display='block';
 spot.style.left=(r.left-p)+'px';spot.style.top=(r.top-p)+'px';
 spot.style.width=(r.width+p*2)+'px';spot.style.height=(r.height+p*2)+'px';
}
function say(txt,title,buttons){
 showBuddy();bub.style.display='block';
 if(title)titleEl.textContent=title;
 tx.innerHTML='';btns.innerHTML='';
 var i=0;clearInterval(typeT);
 typeT=setInterval(function(){i++;tx.innerHTML=txt.slice(0,i);if(i>=txt.length)clearInterval(typeT);},16);
 (buttons||[]).forEach(function(b){var el=document.createElement('button');el.className=b.k||'go';el.textContent=b.t;el.onclick=function(){if(window.axSfx)window.axSfx('tap2');b.f();};btns.appendChild(el);});
}
function setDots(n){dots.innerHTML='';for(var i=0;i<STEPS.length;i++){var d=document.createElement('i');if(i<=n)d.className='on';dots.appendChild(d);}}
function hide(){bub.style.display='none';buddy.style.display='none';spot.style.display='none';}
var STEPS=[
 {s:'#greet-banner',t:'Live Pulse',x:'This is your <b>live pulse</b> — real clock, your name, and Energy that grows only with YOUR real work!'},
 {s:'#cube-card',t:'Growth Cube',x:'The <b>Growth Cube</b> — weekly analytics built from your tasks & focus minutes. Nothing fake here.'},
 {s:'.tasks-card',t:'Tasks',x:'<b>Tasks</b> live here: tap a row to complete it, "+ Add" to create. Everything saves automatically.'},
 {s:'.focus-card',t:'Focus Timer',x:'<b>Focus Timer</b> — 25 / 5 / 50 modes. Finishing a session feeds your energy & streak 🔥'},
 {s:'.qa-row',t:'Quick Actions',x:'<b>Quick actions</b>: new task, focus, note, AI chat, sounds and water — one tap each.'},
 {s:'#rail',t:'Navigation',x:'Your <b>navigation rail</b>: Home, Tasks, Calendar, Notes, AI and Settings.'},
 {s:'#axFab',t:'Smart Coach',x:'Your <b>Smart Coach</b> capsule — real notifications & a check-in every 20 minutes.'},
 {s:'#axInstall',t:'Install App',x:'And this green button installs AXIUM as a <b>real app</b> — offline & fullscreen!'}
];
var si=0;
function step(){
 if(si>=STEPS.length){finish();return;}
 var el=document.querySelector(STEPS[si].s);
 if(!el){si++;step();return;}
 el.scrollIntoView({behavior:'smooth',block:'center'});
 setTimeout(function(){spotTo(el);pointAt(el);},380);
 hop();
 stepEl.textContent=(si+1)+'/'+STEPS.length;
 setDots(si);
 say(STEPS[si].x,STEPS[si].t,[{t:'Next ➜',f:function(){si++;step();}},{t:'Skip',k:'no',f:finish}]);
}
function finish(){
 spot.style.display='none';
 buddy.classList.remove('idle');buddy.classList.add('flex');burst();burst();
 setTimeout(function(){buddy.classList.remove('flex');buddy.classList.add('idle');},1200);
 say('That\'s everything! 💙 I live in <b>⚙️ Settings</b> — I\'ll be there to help you anytime. Taking you there now...','Guardian',[{t:'OK ✨',f:flyToSettings}]);
 setTimeout(flyToSettings,4200);
}
var flew=false;
function flyToSettings(){
 if(flew)return;flew=true;
 localStorage.setItem('axium_tour_done','1');DONE=true;
 bub.style.display='none';spot.style.display='none';
 var rail=null;
 document.querySelectorAll('.rail-item').forEach(function(r){if(/set/i.test((r.querySelector('.rail-label')||{}).textContent||''))rail=r;});
 var target=rail||document.getElementById('axFab');
 var r=target.getBoundingClientRect();
 for(var g=1;g<=3;g++){(function(g){setTimeout(function(){var gh=buddy.cloneNode(true);gh.className='axGhost';gh.style.right=buddy.style.right||'-4px';gh.style.bottom=buddy.style.bottom||'44px';document.body.appendChild(gh);setTimeout(function(){gh.remove();},700);},g*90);})(g);}
 buddy.style.transition='right .9s cubic-bezier(.5,0,.2,1),bottom .9s cubic-bezier(.5,0,.2,1),opacity .5s .6s';
 buddy.style.right=(window.innerWidth-r.left-r.width/2)+'px';
 buddy.style.bottom=(window.innerHeight-r.top+10)+'px';
 buddy.style.opacity='0';
 setTimeout(function(){
  if(rail)rail.click();
  setTimeout(function(){
   buddy.style.transition='';buddy.style.opacity='';buddy.style.right='';buddy.style.bottom='';buddy.style.display='none';shown=false;
   ensureHelpCard();
  },700);
 },1000);
}
function ensureHelpCard(){
 var pg=document.getElementById('axSetPage');
 if(!pg){setTimeout(ensureHelpCard,800);return;}
 if(pg.querySelector('#axHelpCard'))return;
 var c=document.createElement('div');c.id='axHelpCard';
 c.innerHTML='<div class="av">'+FIG+'</div><div style="flex:1"><b> AXIUM Guardian</b><span>Your shadow narrator. Replay the tour or ask for tips anytime.</span><button id="axHelpReplay" type="button">🎬 Replay tour</button><button id="axHelpTips" type="button">💡 Tips</button></div>';
 pg.insertBefore(c,pg.firstChild);
 c.querySelector('#axHelpReplay').onclick=function(){si=0;flew=false;shown=false;pg.classList.remove('open');setTimeout(function(){say('Welcome back! Let\'s walk through AXIUM again ✨','Guardian',[{t:'Let\'s go',f:function(){waitDash(step);}}]);},300);};
 c.querySelector('#axHelpTips').onclick=function(){say('💡 <b>Tips:</b> Finish focus sessions to grow Energy · Open AXIUM daily to keep your Streak 🔥 · Use Quick chips for speed · Install the app for offline mode!','Guardian',[{t:'Got it',f:hide}]);};
}
function waitDash(cb){
 var d=document.getElementById('dashboard');
 if(d&&d.classList.contains('active')){cb();return;}
 var iv=setInterval(function(){if(d&&d.classList.contains('active')){clearInterval(iv);setTimeout(cb,600);}},500);
}
if(!DONE){
 setTimeout(function(){
  say('Hi! I\'m <b>AXIUM</b> — your shadow guide 🌑 Built from your own data. Want me to show you everything?','Guardian',[
   {t:'Let\'s go ✨',f:function(){si=0;waitDash(step);}},
   {t:'Later',k:'no',f:function(){localStorage.setItem('axium_tour_done','1');hide();}}
  ]);
 },1600);
}else{ensureHelpCard();}
})();
/* ===== AXIUM v37: BALD ANIME-STYLE SHADE ===== */
(function(){
if(window.__ax37)return;window.__ax37=true;
function groom(svg){
 if(!svg||svg.dataset.g37)return;svg.dataset.g37='1';
 var g0=svg.querySelector('g[fill]');
 if(g0){var hair=g0.querySelector('path');if(hair&&(hair.getAttribute('d')||'').indexOf('M80 6')===0)hair.remove();}
 svg.querySelectorAll('path').forEach(function(p){
  var d=p.getAttribute('d')||'';
  if(d.indexOf('M62 40')===0)p.setAttribute('d','M64 40 C64 26 96 26 96 40 L96 52 C96 62 88 68 80 68 C72 68 64 62 64 52 Z');
 });
 var rimB=svg.querySelector('g[stroke="#7bb5ff"]');
 var sh=document.createElementNS('http://www.w3.org/2000/svg','path');
 sh.setAttribute('d','M80 44 C96 44 108 50 108 50 L104 78 C102 96 92 108 80 114 L80 44 Z');
 sh.setAttribute('fill','rgba(4,7,11,.5)');
 var hl=document.createElementNS('http://www.w3.org/2000/svg','path');
 hl.setAttribute('d','M64 40 C64 26 96 26 96 40 M52 78 C64 72 80 72 80 72');
 hl.setAttribute('stroke','rgba(143,193,255,.5)');hl.setAttribute('stroke-width','2');hl.setAttribute('fill','none');hl.setAttribute('stroke-linecap','round');
 if(rimB){svg.insertBefore(sh,rimB);svg.insertBefore(hl,rimB);}else{svg.appendChild(sh);svg.appendChild(hl);}
 var arm=svg.querySelector('#axArmP');
 var cg=null;svg.querySelectorAll('g').forEach(function(g){if((g.getAttribute('stroke')||'')==='#00c2d6')cg=g;});
 if(arm&&cg){var target=arm.firstChild;while(cg.firstChild){target.appendChild(cg.firstChild);}cg.remove();}
}
function loop(){
 document.querySelectorAll('#axBuddy .fig svg, #axHelpCard .av svg').forEach(function(s){groom(s);});
}
loop();setInterval(loop,1500);
})();
/* ===== AXIUM v38: FULL ANIME CEL-SHADE REDRAW ===== */
(function(){
if(window.__ax38)return;window.__ax38=true;
var BASE='#273142',SHAD='#10161e',HIGH='#3e5070',LINE='#05080d';
var ARM_IN='<path d="M52 56 C38 52 24 48 14 42 L10 50 C20 58 36 64 50 66 Z" fill="'+BASE+'" stroke="'+LINE+'" stroke-width="2.5"/><path d="M14 42 L2 36 L0 42 L10 50 Z" fill="'+BASE+'" stroke="'+LINE+'" stroke-width="2.5"/><path d="M50 62 C36 60 22 54 12 48 L10 50 C20 58 36 64 50 66 Z" fill="'+SHAD+'"/><path d="M52 56 C38 52 24 48 14 42" stroke="#00c2d6" stroke-width="2.5" fill="none" stroke-linecap="round"/>';
var BODY='<defs><linearGradient id="axAu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="rgba(43,125,255,.28)"/><stop offset="1" stop-color="rgba(0,194,214,0)"/></linearGradient></defs><ellipse cx="80" cy="120" rx="52" ry="86" fill="url(#axAu)" opacity=".5"/><g stroke="'+LINE+'" stroke-width="2.5" fill="'+BASE+'"><path d="M64 40 C64 24 96 24 96 40 L96 52 C96 62 88 68 80 68 C72 68 64 62 64 52 Z"/><path d="M72 66 L88 66 L90 76 L70 76 Z"/><path d="M48 56 C60 46 100 46 112 56 L106 86 C104 104 94 116 80 122 C66 116 56 104 54 86 Z"/><path d="M112 58 C124 66 128 82 124 94 C120 102 112 104 108 98 L104 86 C108 78 108 66 104 60 Z"/><path d="M64 118 C58 146 58 180 62 210 L74 210 C70 180 72 150 78 122 Z"/><path d="M96 118 C102 146 102 180 98 210 L86 210 C90 180 88 150 82 122 Z"/></g><g fill="'+SHAD+'"><path d="M80 26 C92 26 96 34 96 40 L96 52 C96 60 90 66 80 68 Z"/><path d="M80 48 C96 48 108 54 112 56 L106 86 C104 104 94 116 80 122 Z"/><path d="M108 62 C118 70 122 82 119 92 L114 96 L110 86 C113 78 112 68 108 62 Z"/><path d="M88 122 C94 148 94 180 91 208 L98 210 C102 180 102 146 96 118 Z"/></g><g fill="'+HIGH+'" opacity=".85"><path d="M54 60 C58 52 66 48 74 47 L70 60 C66 74 66 92 70 106 L64 100 C58 90 54 74 54 60 Z"/><path d="M66 32 C68 27 74 25 78 25 L76 30 C72 31 68 33 66 36 Z"/></g><g stroke="#0d1319" stroke-width="1.6" fill="none" stroke-linecap="round"><path d="M80 62 V112"/><path d="M68 74 H92"/><path d="M70 86 H90"/><path d="M72 98 H88"/><path d="M60 62 C70 70 76 70 80 66"/><path d="M100 62 C90 70 84 70 80 66"/></g><circle cx="80" cy="80" r="10" fill="rgba(0,194,214,.22)"/><circle class="coreS" cx="80" cy="80" r="5.5" fill="#9ff3ff"/><g stroke="#7bb5ff" stroke-width="3" fill="none" opacity=".8" stroke-linecap="round" style="filter:drop-shadow(0 0 6px rgba(123,181,255,.8))"><path d="M64 40 C64 26 72 24 78 24"/><path d="M48 56 C56 50 64 48 70 47"/><path d="M54 86 C56 100 62 112 72 118"/></g><g id="axArmSlot"></g>';
var ANIM='<svg viewBox="0 0 160 220">'+BODY+'</svg>';
var ANIM_FULL='<svg viewBox="0 0 160 220">'+BODY.replace('<g id="axArmSlot"></g>','<g id="axArmP" style="transform-box:view-box;transform-origin:52px 60px"><g>'+ARM_IN+'</g></g>')+'</svg>';
var st=document.createElement('style');
st.textContent='#axBuddy .coreS{animation:axHCore 1.8s ease-in-out infinite;transform-origin:center;transform-box:fill-box}';
document.head.appendChild(st);
function applyBuddy(){
 var fig=document.querySelector('#axBuddy .fig');
 if(!fig)return;
 var svg=fig.querySelector('svg');
 if(!svg||svg.dataset.a38)return;
 svg.dataset.a38='1';
 var oldArm=svg.querySelector('#axArmP');
 fig.innerHTML=ANIM;
 var ns=fig.querySelector('svg');ns.dataset.a38='1';
 if(oldArm){
  var inner=oldArm.querySelector('g');
  if(inner)inner.innerHTML=ARM_IN;
  var slot=ns.querySelector('#axArmSlot');
  if(slot){slot.parentNode.insertBefore(oldArm,slot);slot.remove();}
  else ns.appendChild(oldArm);
 }
}
function applyCard(){
 document.querySelectorAll('#axHelpCard .av').forEach(function(av){
  if(av.dataset.a38)return;av.dataset.a38='1';av.innerHTML=ANIM_FULL;
 });
}
function loop(){applyBuddy();applyCard();}
loop();setInterval(loop,1200);
})();
/* ===== AXIUM v39: LIVING LINE-ART SKETCH ===== */
(function(){
if(window.__ax39)return;window.__ax39=true;
var BODY='<defs><linearGradient id="axLG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8fc1ff"/><stop offset=".5" stop-color="#4a95ff"/><stop offset="1" stop-color="#00c2d6"/></linearGradient></defs><g class="ln"><path d="M120 28 C104 28 96 42 96 56 C96 72 106 84 120 84 C134 84 144 72 144 56 C144 42 136 28 120 28 Z"/><path d="M112 84 L110 98"/><path d="M128 84 L130 98"/><path d="M130 98 C152 102 162 116 164 136 L164 212"/><path d="M110 98 C100 100 92 106 88 116"/><path d="M88 116 C84 140 86 176 92 212"/></g><g id="axArmSlot"></g>';
var ARMIN='<path d="M88 116 C72 114 62 106 56 96 C52 88 50 82 50 76"/><path d="M50 76 C44 74 38 72 32 72"/><path d="M50 72 C46 64 44 58 44 50"/><path d="M54 70 C52 62 52 54 54 46"/><path d="M58 70 C58 62 60 54 64 48"/><path d="M50 76 C52 72 56 70 60 70"/>';
var ANIM='<svg viewBox="0 0 200 220">'+BODY+'</svg>';
var ANIM_FULL='<svg viewBox="0 0 200 220">'+BODY.replace('<g id="axArmSlot"></g>','<g style="transform-box:view-box;transform-origin:88px 116px"><g>'+ARMIN+'</g></g>')+'</svg>';
var st=document.createElement('style');
st.textContent='#axBuddy{width:calc(38vh * .9)}#axBuddy .fig path,#axHelpCard .av path{fill:none;stroke:url(#axLG);stroke-width:5;stroke-linecap:round;stroke-linejoin:round;filter:drop-shadow(0 0 7px rgba(123,181,255,.7))}';
document.head.appendChild(st);
function drawIn(svg){
 var ps=svg.querySelectorAll('path');
 ps.forEach(function(p,i){
  try{
   var L=p.getTotalLength();
   p.style.strokeDasharray=L;
   p.style.strokeDashoffset=L;
   p.style.transition='stroke-dashoffset .7s '+(i*0.12)+'s cubic-bezier(.4,0,.2,1)';
   requestAnimationFrame(function(){requestAnimationFrame(function(){p.style.strokeDashoffset='0';});});
  }catch(e){}
 });
}
function mark(el){el.dataset.a38='1';el.dataset.g37='1';el.dataset.a39='1';}
function applyBuddy(){
 var fig=document.querySelector('#axBuddy .fig');if(!fig)return;
 var svg=fig.querySelector('svg');if(!svg||svg.dataset.a39)return;
 var oldArm=svg.querySelector('#axArmP');
 fig.innerHTML=ANIM;
 var ns=fig.querySelector('svg');mark(ns);
 if(oldArm){
  oldArm.style.transformOrigin='88px 116px';
  var inner=oldArm.querySelector('g');if(inner)inner.innerHTML=ARMIN;
  var slot=ns.querySelector('#axArmSlot');
  if(slot){slot.parentNode.insertBefore(oldArm,slot);slot.remove();}else ns.appendChild(oldArm);
 }
 drawIn(ns);
}
function applyCard(){
 document.querySelectorAll('#axHelpCard .av').forEach(function(av){
  if(av.dataset.a39)return;mark(av);av.innerHTML=ANIM_FULL;
  var s=av.querySelector('svg');if(s)mark(s);
 });
}
function loop(){applyBuddy();applyCard();}
loop();setInterval(loop,1200);
})();
/* ===== AXIUM v40: MUSCULAR 3/4 ANIME GUARDIAN ===== */
(function(){
if(window.__ax40)return;window.__ax40=true;
var B='#273142',S='#10161e',H='#3e5070',D='#1a222e',L='#0d1319';
function f(d,c){return '<path d="'+d+'" style="fill:'+c+'"/>';}
function s(d,c,w){return '<path d="'+d+'" style="fill:none;stroke:'+c+';stroke-width:'+(w||2.5)+';stroke-linecap:round"/>';}
var BODY='<g>'+
 f('M146 100 C158 108 162 122 158 134 C154 142 146 144 142 138 L138 126 C142 118 142 108 138 102 Z',S)+
 f('M128 164 C136 190 136 214 132 236 L116 236 C120 214 118 190 112 168 Z',D)+
 f('M96 164 C88 190 88 214 92 236 L108 236 C104 214 106 190 112 168 Z',B)+
 f('M76 94 C96 84 132 84 152 94 L148 128 C144 150 130 162 112 166 C96 162 82 150 78 128 Z',B)+
 f('M114 86 C132 86 146 90 152 94 L148 128 C144 150 130 162 112 166 Z',S)+
 f('M78 100 C84 92 94 88 102 87 L98 100 C94 114 94 132 98 146 L92 140 C84 128 78 114 78 100 Z',H)+
 s('M82 106 C94 116 106 118 112 114',L,1.8)+s('M142 106 C130 116 118 118 112 114',L,1.8)+
 s('M112 118 V160',L,1.8)+s('M100 128 H124',L,1.6)+s('M102 140 H122',L,1.6)+s('M104 150 H120',L,1.6)+
 f('M152 94 C162 98 166 108 162 116 C158 122 150 122 146 116 L144 100 Z',S)+
 f('M76 94 C66 98 62 108 66 116 C70 122 78 122 82 116 L84 100 Z',B)+
 f('M106 74 L102 92 L130 92 L126 72 Z',B)+
 f('M118 74 L130 92 L122 92 Z',S)+
 f('M116 20 C102 20 94 30 94 42 L94 50 C94 56 96 60 100 64 L106 72 L116 76 C128 76 136 68 138 56 L138 38 C138 28 128 20 116 20 Z',B)+
 f('M116 20 C128 20 138 28 138 38 L138 56 C136 68 128 76 116 76 Z',S)+
 s('M100 62 L108 70 L118 72','#0a0f16',2)+
 s('M94 42 C94 30 102 20 116 20','#7bb5ff',2.5)+
 s('M76 94 C66 98 62 108 66 116','#7bb5ff',2.5)+
 s('M78 128 C82 148 94 160 108 165','#7bb5ff',2.5)+
 '</g><g id="axArmSlot"></g>';
var ARMIN=
 f('M84 98 C72 104 64 112 62 122 C60 130 64 136 70 136 L78 130 C76 122 80 112 88 106 Z',B)+
 f('M62 122 C60 130 64 136 70 136 L74 132 C68 130 64 126 64 120 Z',S)+
 f('M66 132 C58 120 54 108 54 98 L64 94 C66 106 70 118 76 128 Z',B)+
 f('M50 92 C48 84 52 78 58 78 C64 78 68 84 66 92 Z',B)+
 f('M52 80 L48 66 L52 64 L56 78 Z',B)+
 f('M58 78 L56 62 L60 62 L62 78 Z',B)+
 f('M64 78 L66 64 L70 66 L68 80 Z',B)+
 f('M50 88 L40 84 L42 80 L52 84 Z',B)+
 s('M50 92 C48 84 52 78 58 78','#00c2d6',2);
var ANIM='<svg viewBox="0 0 220 240">'+BODY+'</svg>';
var ANIM_FULL='<svg viewBox="0 0 220 240">'+BODY.replace('<g id="axArmSlot"></g>','<g style="transform-box:view-box;transform-origin:84px 104px"><g>'+ARMIN+'</g></g>')+'</svg>';
var st=document.createElement('style');
st.textContent='#axBuddy{width:calc(46vh * .92);height:46vh}#axBuddy .fig path,#axHelpCard .av path{stroke-width:0}';
document.head.appendChild(st);
function mark(el){el.dataset.a38='1';el.dataset.g37='1';el.dataset.a39='1';el.dataset.a40='1';}
function applyBuddy(){
 var fig=document.querySelector('#axBuddy .fig');if(!fig)return;
 var svg=fig.querySelector('svg');if(!svg||svg.dataset.a40)return;
 var oldArm=svg.querySelector('#axArmP');
 fig.innerHTML=ANIM;
 var ns=fig.querySelector('svg');mark(ns);
 if(oldArm){
  oldArm.style.transformOrigin='84px 104px';
  var inner=oldArm.querySelector('g');if(inner)inner.innerHTML=ARMIN;
  var slot=ns.querySelector('#axArmSlot');
  if(slot){slot.parentNode.insertBefore(oldArm,slot);slot.remove();}else ns.appendChild(oldArm);
 }
}
function applyCard(){
 document.querySelectorAll('#axHelpCard .av').forEach(function(av){
  if(av.dataset.a40)return;mark(av);av.innerHTML=ANIM_FULL;
  var s2=av.querySelector('svg');if(s2)mark(s2);
 });
}
function loop(){applyBuddy();applyCard();}
loop();setInterval(loop,1200);
})();
/* ===== AXIUM v41: TRUE PROFILE ANIME SILHOUETTE ===== */
(function(){
if(window.__ax41)return;window.__ax41=true;
var B='#273142',S='#10161e',H='#3e5070';
function f(d,c){return '<path d="'+d+'" style="fill:'+c+'"/>';}
function s(d,c,w){return '<path d="'+d+'" style="fill:none;stroke:'+c+';stroke-width:'+(w||2.5)+';stroke-linecap:round"/>';}
var CONTOUR='M96 16 C106 18 114 26 116 40 C117 46 112 48 110 50 L104 52 L88 50 L85 44 C86 40 88 36 89 32 C90 26 92 20 96 16 Z M92 64 L94 52 L104 52 L110 50 L112 50 L116 62 L134 74 L146 88 C148 96 146 106 140 116 L144 132 C142 142 138 150 136 158 L140 182 C140 192 138 200 136 208 C134 218 132 228 130 236 L106 236 C108 226 110 216 110 206 C108 198 106 190 106 182 C104 174 102 166 100 158 C98 150 96 144 95 138 L94 132 C92 126 90 120 88 116 L86 108 C84 102 84 96 84 92 L88 80 L92 64 Z';
var BODY='<g>'+
 f(CONTOUR,B)+
 f('M116 26 C118 40 112 48 110 50 L116 62 L134 74 L146 88 L140 116 L144 132 L136 158 L140 182 L136 208 L130 236 L118 236 C124 200 124 160 118 120 C116 90 112 60 108 40 Z',S)+
 f('M96 16 C92 20 90 26 89 32 C88 36 86 40 85 44 L88 50 L94 52 L92 64 L88 80 L86 108 L88 116 C90 120 92 126 94 132 L95 138 C96 144 98 150 100 158 L102 150 C99 140 97 130 96 122 C95 112 94 100 95 88 C96 74 98 60 100 48 C101 36 100 24 96 16 Z',H)+
 s('M88 108 C96 114 104 114 110 110','#0d1319',1.8)+
 s('M95 124 h8','#0d1319',1.6)+s('M94 134 h8','#0d1319',1.6)+s('M95 144 h8','#0d1319',1.6)+
 s('M84 92 C90 98 96 98 100 94','#0d1319',1.8)+
 s('M116 62 C124 68 130 72 134 74','#0d1319',1.6)+
 s('M136 200 C132 208 130 214 130 220','#0d1319',1.6)+
 s('M91 22 C89 32 85 44 88 50','#7bb5ff',2.5)+
 s('M86 108 C90 120 94 130 95 138','#7bb5ff',2.5)+
 s('M100 158 C104 170 106 176 106 182','#7bb5ff',2.5)+
 '</g><g id="axArmSlot"></g>';
var ARMIN=
 f('M88 92 C78 98 70 106 66 114 C64 120 68 126 74 126 L80 120 C78 112 82 104 90 100 Z',B)+
 f('M66 114 C64 120 68 126 74 126 L77 122 C71 121 68 118 68 114 Z',S)+
 f('M70 122 C62 112 56 102 54 92 L64 88 C66 98 72 108 78 116 Z',B)+
 f('M52 88 C48 82 50 74 56 72 C62 70 66 76 64 84 Z',B)+
 f('M54 72 L48 60 L52 58 L58 70 Z',B)+
 f('M60 70 L58 56 L62 56 L64 70 Z',B)+
 f('M64 72 L66 58 L70 60 L68 74 Z',B)+
 f('M50 84 L40 80 L42 76 L52 80 Z',B)+
 s('M52 88 C48 82 50 74 56 72','#00c2d6',2);
var ANIM='<svg viewBox="0 0 200 240">'+BODY+'</svg>';
var ANIM_FULL='<svg viewBox="0 0 200 240">'+BODY.replace('<g id="axArmSlot"></g>','<g style="transform-box:view-box;transform-origin:88px 96px"><g>'+ARMIN+'</g></g>')+'</svg>';
var st=document.createElement('style');
st.textContent='#axBuddy{width:calc(48vh * .83);height:48vh}';
document.head.appendChild(st);
function mark(el){el.dataset.a38='1';el.dataset.g37='1';el.dataset.a39='1';el.dataset.a40='1';el.dataset.a41='1';}
function applyBuddy(){
 var fig=document.querySelector('#axBuddy .fig');if(!fig)return;
 var svg=fig.querySelector('svg');if(!svg||svg.dataset.a41)return;
 var oldArm=svg.querySelector('#axArmP');
 fig.innerHTML=ANIM;
 var ns=fig.querySelector('svg');mark(ns);
 if(oldArm){
  oldArm.style.transformOrigin='88px 96px';
  var inner=oldArm.querySelector('g');if(inner)inner.innerHTML=ARMIN;
  var slot=ns.querySelector('#axArmSlot');
  if(slot){slot.parentNode.insertBefore(oldArm,slot);slot.remove();}else ns.appendChild(oldArm);
 }
}
function applyCard(){
 document.querySelectorAll('#axHelpCard .av').forEach(function(av){
  if(av.dataset.a41)return;mark(av);av.innerHTML=ANIM_FULL;
  var s2=av.querySelector('svg');if(s2)mark(s2);
 });
}
function loop(){applyBuddy();applyCard();}
loop();setInterval(loop,1200);
})();
/* ===== AXIUM v42: AI CHARACTER IMAGE NARRATOR ===== */
(function(){
if(window.__ax42)return;window.__ax42=true;
var st=document.createElement('style');
st.textContent='#axBuddy{width:calc(48vh * .75);height:48vh}#axBuddy .fig img{width:100%;height:100%;object-fit:contain;object-position:bottom center;filter:drop-shadow(0 0 26px rgba(43,125,255,.5)) drop-shadow(0 14px 34px rgba(0,0,0,.65));transition:transform .5s cubic-bezier(.34,1.56,.64,1);transform-origin:50% 100%}#axBuddy.talking .fig img{animation:axTalk .5s ease-in-out infinite}#axHelpCard .av img{width:100%;height:100%;object-fit:contain}@keyframes axTalk{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-4px) rotate(-1.2deg)}}';
document.head.appendChild(st);
function markAv(el){el.dataset.a38='1';el.dataset.a39='1';el.dataset.a40='1';el.dataset.a41='1';el.dataset.a42='1';}
function setImg(){
 var fig=document.querySelector('#axBuddy .fig');
 if(fig&&!fig.querySelector('img')&&!fig.querySelector('svg')){
  fig.innerHTML='<img src="character.png" alt="AXIUM Guardian">';
 }
 document.querySelectorAll('#axHelpCard .av').forEach(function(av){
  if(av.dataset.a42)return;markAv(av);
  av.innerHTML='<img src="character.png" alt="">';
 });
 var spot=document.getElementById('axSpot');
 if(spot&&!spot.dataset.g42){
  spot.dataset.g42='1';
  new MutationObserver(function(){
   var img=document.querySelector('#axBuddy .fig img');if(!img)return;
   var r=spot.getBoundingClientRect();if(!r.width)return;
   var b=document.getElementById('axBuddy').getBoundingClientRect();
   var cx=r.left+r.width/2,bx=b.left+b.width/2;
   var dx=cx-bx;
   var flip=dx>0;
   var rot=Math.max(-10,Math.min(10,dx/40));
   img.style.transform='scaleX('+(flip?-1:1)+') rotate('+(flip?rot:-rot)+'deg)';
  }).observe(spot,{attributes:true,attributeFilter:['style']});
 }
 var tx=document.querySelector('#axBub .tx');
 if(tx&&!tx.dataset.t42){
  tx.dataset.t42='1';var to=null;
  new MutationObserver(function(){
   var buddy=document.getElementById('axBuddy');if(!buddy)return;
   buddy.classList.add('talking');
   clearTimeout(to);to=setTimeout(function(){buddy.classList.remove('talking');},900);
  }).observe(tx,{childList:true,characterData:true,subtree:true});
 }
 var buddy=document.getElementById('axBuddy');
 if(buddy&&!buddy.dataset.e42){
  buddy.dataset.e42='1';var was=false;
  new MutationObserver(function(){
   var show=buddy.style.display==='block';
   if(show&&!was){
    var r=buddy.getBoundingClientRect();
    for(var i=0;i<14;i++){
     var s2=document.createElement('i');var a=Math.random()*Math.PI*2,d=60+Math.random()*70;
     s2.style.cssText='position:fixed;z-index:100012;left:'+(r.left+r.width/2)+'px;top:'+(r.top+r.height/2)+'px;width:6px;height:6px;border-radius:50%;background:#9cc8ff;box-shadow:0 0 12px #9cc8ff;pointer-events:none;--dx:'+(Math.cos(a)*d)+'px;--dy:'+(Math.sin(a)*d-40)+'px;animation:axPartFly .8s ease-out forwards';
     document.body.appendChild(s2);setTimeout(function(el){return function(){el.remove();};}(s2),900);
    }
   }
   was=show;
  }).observe(buddy,{attributes:true,attributeFilter:['style']});
 }
}
setImg();setInterval(setImg,1500);
})();
/* ===== AXIUM v43: HANDSOME NEON ROBOT NARRATOR ===== */
(function(){
if(window.__ax43)return;window.__ax43=true;
var D='url(#axRB)',A='url(#axRA)';
function f(d,c){return '<path d="'+d+'" fill="'+c+'"/>';}
function s(d,c,w){return '<path d="'+d+'" fill="none" stroke="'+c+'" stroke-width="'+(w||2)+'" stroke-linecap="round"/>';}
var DEFS='<defs><linearGradient id="axRB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a3444"/><stop offset="1" stop-color="#0d131c"/></linearGradient><linearGradient id="axRA" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2b7dff"/><stop offset="1" stop-color="#00c2d6"/></linearGradient></defs>';
var BODY=DEFS+'<g>'+
 s('M100 14 V6','#7bb5ff',2.5)+
 '<circle cx="100" cy="5" r="3.5" fill="#00c2d6" class="glowC"/>'+
 '<rect x="76" y="14" width="48" height="34" rx="12" fill="'+D+'"/>'+
 '<rect x="72" y="26" width="6" height="12" rx="3" fill="'+A+'"/>'+
 '<rect x="122" y="26" width="6" height="12" rx="3" fill="'+A+'"/>'+
 '<rect x="82" y="24" width="36" height="14" rx="7" fill="#06202a"/>'+
 '<rect x="84" y="26" width="32" height="10" rx="5" fill="'+A+'" opacity=".85" class="glowC"/>'+
 '<circle cx="92" cy="31" r="2.6" fill="#eaffff"/><circle cx="108" cy="31" r="2.6" fill="#eaffff"/>'+
 '<rect x="92" y="48" width="16" height="8" rx="3" fill="#141b26"/>'+
 '<circle cx="64" cy="64" r="14" fill="'+D+'"/><circle cx="136" cy="64" r="14" fill="'+D+'"/>'+
 s('M52 60 C56 52 72 52 76 60','#00c2d6',2)+s('M124 60 C128 52 144 52 148 60','#00c2d6',2)+
 f('M70 58 C84 52 116 52 130 58 L126 92 C124 104 112 112 100 114 C88 112 76 104 74 92 Z',D)+
 f('M84 62 C92 58 108 58 116 62 L114 78 C108 84 92 84 86 78 Z',A)+
 '<circle cx="100" cy="76" r="9" fill="#06202a"/><circle cx="100" cy="76" r="6" fill="'+A+'" class="glowC"/><circle cx="100" cy="76" r="2.4" fill="#eaffff"/>'+
 '<rect x="88" y="96" width="24" height="18" rx="6" fill="#141b26"/>'+
 s('M92 102 H108','#0d1319',1.6)+s('M92 108 H108','#0d1319',1.6)+
 '<rect x="84" y="114" width="32" height="12" rx="6" fill="'+D+'"/>'+
 f('M88 126 C84 150 84 180 88 208 L98 208 C96 180 96 152 100 128 Z',D)+
 f('M112 126 C116 150 116 180 112 208 L102 208 C104 180 104 152 100 128 Z',D)+
 '<rect x="80" y="208" width="22" height="10" rx="5" fill="'+A+'"/><rect x="98" y="208" width="22" height="10" rx="5" fill="'+A+'"/>'+
 f('M136 66 C150 74 154 90 148 102 C144 110 134 112 130 106 L126 96 C132 90 132 78 128 70 Z',D)+
 s('M88 132 V200','#00c2d6',1.6)+s('M112 132 V200','#00c2d6',1.6)+
 s('M74 92 C76 104 88 112 100 114','#7bb5ff',2)+
 '</g><g id="axArmSlot"></g>';
var ARMIN=
 f('M64 62 C50 66 40 74 36 84 C34 92 38 98 44 98 L52 94 C50 86 54 76 62 70 Z',D)+
 f('M40 94 C34 84 32 74 34 66 L44 64 C44 74 48 84 52 90 Z',D)+
 f('M30 62 C28 54 32 48 38 48 C44 48 48 54 46 62 Z',D)+
 f('M32 48 L28 36 L32 34 L36 46 Z',D)+
 f('M38 46 L36 32 L40 32 L42 46 Z',D)+
 f('M44 48 L46 34 L50 36 L48 50 Z',D)+
 f('M28 58 L18 54 L20 50 L30 54 Z',D)+
 s('M30 62 C28 54 32 48 38 48','#00c2d6',2);
var ANIM='<svg viewBox="0 0 200 240">'+BODY+'</svg>';
var ANIM_FULL='<svg viewBox="0 0 200 240">'+BODY.replace('<g id="axArmSlot"></g>','<g style="transform-box:view-box;transform-origin:64px 66px"><g>'+ARMIN+'</g></g>')+'</svg>';
var st=document.createElement('style');
st.textContent='#axBuddy{width:calc(46vh * .83);height:46vh}#axBuddy .glowC,#axHelpCard .glowC{filter:drop-shadow(0 0 8px rgba(0,194,214,.95))}#axHelpCard .av svg{width:100%;height:100%}';
document.head.appendChild(st);
function mark(el){el.dataset.a38='1';el.dataset.g37='1';el.dataset.a39='1';el.dataset.a40='1';el.dataset.a41='1';el.dataset.a42='1';el.dataset.a43='1';}
function applyBuddy(){
 var fig=document.querySelector('#axBuddy .fig');if(!fig)return;
 var svg=fig.querySelector('svg');if(!svg||svg.dataset.a43)return;
 var oldArm=svg.querySelector('#axArmP');
 fig.innerHTML=ANIM;
 var ns=fig.querySelector('svg');mark(ns);
 if(oldArm){
  oldArm.style.transformOrigin='64px 66px';
  var inner=oldArm.querySelector('g');if(inner)inner.innerHTML=ARMIN;
  var slot=ns.querySelector('#axArmSlot');
  if(slot){slot.parentNode.insertBefore(oldArm,slot);slot.remove();}else ns.appendChild(oldArm);
 }
}
function applyCard(){
 document.querySelectorAll('#axHelpCard .av').forEach(function(av){
  if(av.dataset.a43)return;mark(av);av.innerHTML=ANIM_FULL;
  var s2=av.querySelector('svg');if(s2)mark(s2);
 });
}
function loop(){applyBuddy();applyCard();}
loop();setInterval(loop,1200);
})();
/* ===== AXIUM v44: ROBOT FIX + LIVING DETAILS ===== */
(function(){
if(window.__ax44)return;window.__ax44=true;
var st=document.createElement('style');
st.textContent='#axBuddy .glowC,#axHelpCard .glowC{animation:axGlow 2s ease-in-out infinite}#axBuddy .spinRing{animation:axSpin 3s linear infinite;transform-origin:100px 76px;transform-box:view-box}#axBuddy .scan{animation:axScan 2.2s ease-in-out infinite}#axBuddy .eyeB{animation:axBlink 4s infinite;transform-box:fill-box;transform-origin:center}@keyframes axGlow{0%,100%{opacity:1}50%{opacity:.5}}@keyframes axSpin{to{transform:rotate(360deg)}}@keyframes axScan{0%,100%{transform:translateX(0);opacity:.7}50%{transform:translateX(26px);opacity:.25}}@keyframes axBlink{0%,92%,100%{transform:scaleY(1)}96%{transform:scaleY(.15)}}';
document.head.appendChild(st);
function fixSvg(svg){
 if(!svg||svg.dataset.f44)return;svg.dataset.f44='1';
 svg.querySelectorAll('path').forEach(function(p){
  var f=p.getAttribute('fill'),s=p.getAttribute('stroke'),w=p.getAttribute('stroke-width');
  if(f){p.style.fill=f;p.removeAttribute('fill');}
  if(s){p.style.stroke=s;p.style.strokeWidth=(w||2);p.style.strokeLinecap='round';p.removeAttribute('stroke');p.removeAttribute('stroke-width');}
  if(!f&&!s)p.style.fill='none';
 });
 if(!svg.dataset.x44){
  svg.dataset.x44='1';
  var NS='http://www.w3.org/2000/svg';
  var ring=document.createElementNS(NS,'circle');
  ring.setAttribute('cx','100');ring.setAttribute('cy','76');ring.setAttribute('r','13');
  ring.setAttribute('class','spinRing');
  ring.style.cssText='fill:none;stroke:#00c2d6;stroke-width:1.6;stroke-dasharray:22 40;opacity:.8';
  svg.appendChild(ring);
  var scan=document.createElementNS(NS,'rect');
  scan.setAttribute('x','84');scan.setAttribute('y','26');scan.setAttribute('width','6');scan.setAttribute('height','10');scan.setAttribute('rx','3');
  scan.setAttribute('class','scan');
  scan.style.cssText='fill:rgba(255,255,255,.55)';
  svg.appendChild(scan);
  svg.querySelectorAll('circle').forEach(function(c){
   if(c.getAttribute('r')==='2.6')c.setAttribute('class','eyeB');
  });
 }
}
function loop(){
 document.querySelectorAll('#axBuddy .fig svg, #axHelpCard .av svg').forEach(fixSvg);
}
loop();setInterval(loop,1200);
})();
/* ===== AXIUM v45: SIMPLE LIVING ROBOT ===== */
(function(){
if(window.__ax45)return;window.__ax45=true;
var ROB='<svg viewBox="0 0 200 240">'+
'<rect x="98" y="6" width="4" height="10" rx="2" style="fill:#7bb5ff"/>'+
'<circle cx="100" cy="5" r="4" class="rAnt" style="fill:#00c2d6"/>'+
'<rect x="76" y="14" width="48" height="34" rx="12" style="fill:#1b2432;stroke:#2b7dff;stroke-width:1.5"/>'+
'<rect x="82" y="24" width="36" height="14" rx="7" style="fill:#06202a"/>'+
'<rect x="84" y="26" width="32" height="10" rx="5" style="fill:#00c2d6;opacity:.85"/>'+
'<rect x="84" y="26" width="6" height="10" rx="3" class="rScan" style="fill:rgba(255,255,255,.55)"/>'+
'<circle cx="92" cy="31" r="2.6" class="rEye" style="fill:#eaffff"/>'+
'<circle cx="108" cy="31" r="2.6" class="rEye" style="fill:#eaffff"/>'+
'<rect x="70" y="26" width="6" height="12" rx="3" style="fill:#2b7dff"/>'+
'<rect x="124" y="26" width="6" height="12" rx="3" style="fill:#2b7dff"/>'+
'<rect x="92" y="48" width="16" height="10" rx="4" style="fill:#141b26"/>'+
'<circle cx="64" cy="64" r="13" style="fill:#22304a;stroke:#00c2d6;stroke-width:1.5"/>'+
'<circle cx="136" cy="64" r="13" style="fill:#22304a;stroke:#00c2d6;stroke-width:1.5"/>'+
'<rect x="72" y="56" width="56" height="56" rx="14" style="fill:#1b2432;stroke:#2b7dff;stroke-width:1.5"/>'+
'<rect x="80" y="62" width="40" height="14" rx="7" style="fill:#22304a"/>'+
'<circle cx="100" cy="84" r="9" style="fill:#06202a"/>'+
'<circle cx="100" cy="84" r="6" class="rCore" style="fill:#00c2d6"/>'+
'<circle cx="100" cy="84" r="2.4" style="fill:#eaffff"/>'+
'<rect x="84" y="98" width="32" height="10" rx="5" style="fill:#141b26"/>'+
'<rect x="76" y="112" width="48" height="10" rx="5" style="fill:#22304a"/>'+
'<g class="rArmL"><rect x="40" y="60" width="14" height="40" rx="7" transform="rotate(18 47 62)" style="fill:#1b2432;stroke:#2b7dff;stroke-width:1.2"/><circle cx="40" cy="52" r="8" style="fill:#22304a"/><circle cx="34" cy="44" r="3" style="fill:#22304a"/><circle cx="40" cy="41" r="3" style="fill:#22304a"/><circle cx="46" cy="43" r="3" style="fill:#22304a"/><circle cx="50" cy="48" r="3" style="fill:#22304a"/></g>'+
'<rect x="146" y="60" width="14" height="40" rx="7" transform="rotate(-14 153 62)" style="fill:#1b2432;stroke:#2b7dff;stroke-width:1.2"/>'+
'<circle cx="152" cy="102" r="7" style="fill:#22304a"/>'+
'<rect x="84" y="122" width="14" height="76" rx="7" style="fill:#1b2432;stroke:#2b7dff;stroke-width:1.2"/>'+
'<rect x="102" y="122" width="14" height="76" rx="7" style="fill:#1b2432;stroke:#2b7dff;stroke-width:1.2"/>'+
'<rect x="76" y="196" width="26" height="12" rx="6" style="fill:#2b7dff"/>'+
'<rect x="98" y="196" width="26" height="12" rx="6" style="fill:#2b7dff"/>'+
'</svg>';
var st=document.createElement('style');
st.textContent='#axBuddy{width:calc(46vh * .83);height:46vh}#axBuddy .rWrap,#axHelpCard .rWrap{width:100%;height:100%;transition:transform .5s cubic-bezier(.34,1.56,.64,1)}#axBuddy .rEye{animation:ax45blink 4s infinite;transform-box:fill-box;transform-origin:center}#axBuddy .rCore,#axBuddy .rAnt{animation:ax45glow 1.8s ease-in-out infinite}#axBuddy .rScan{animation:ax45scan 2.4s ease-in-out infinite}#axBuddy .rArmL{animation:ax45wave 2.6s ease-in-out infinite;transform-box:view-box;transform-origin:52px 66px}@keyframes ax45blink{0%,92%,100%{transform:scaleY(1)}96%{transform:scaleY(.15)}}@keyframes ax45glow{0%,100%{opacity:1}50%{opacity:.45}}@keyframes ax45scan{0%,100%{transform:translateX(0);opacity:.7}50%{transform:translateX(26px);opacity:.25}}@keyframes ax45wave{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-12deg)}}';
document.head.appendChild(st);
function mark(el){['a38','g37','a39','a40','a41','a42','a43','f44','x44','a45'].forEach(function(k){el.dataset[k]='1';});}
function wrapIt(){return '<div class="rWrap">'+ROB+'</div>';}
function applyBuddy(){
 var fig=document.querySelector('#axBuddy .fig');if(!fig)return;
 if(fig.querySelector('.rWrap'))return;
 var svg=fig.querySelector('svg');if(svg&&svg.dataset.a45)return;
 fig.innerHTML=wrapIt();
 mark(fig.querySelector('svg'));
 var spot=document.getElementById('axSpot');
 if(spot&&!spot.dataset.g45){
  spot.dataset.g45='1';
  new MutationObserver(function(){
   var w=fig.querySelector('.rWrap');if(!w)return;
   var r=spot.getBoundingClientRect();if(!r.width)return;
   var b=document.getElementById('axBuddy').getBoundingClientRect();
   var dx=(r.left+r.width/2)-(b.left+b.width/2);
   var flip=dx>0;
   var rot=Math.max(-10,Math.min(10,dx/40));
   w.style.transform='scaleX('+(flip?-1:1)+') rotate('+(flip?rot:-rot)+'deg)';
  }).observe(spot,{attributes:true,attributeFilter:['style']});
 }
}
function applyCard(){
 document.querySelectorAll('#axHelpCard .av').forEach(function(av){
  if(av.dataset.a45)return;mark(av);
  av.innerHTML=wrapIt();
  mark(av.querySelector('svg'));
 });
}
function loop(){applyBuddy();applyCard();}
loop();setInterval(loop,1200);
})();
/* ===== AXIUM v46: REMOVE CHARACTER ===== */
(function(){
if(window.__ax46)return;window.__ax46=true;
var st=document.createElement('style');
st.textContent='#axBuddy{display:none!important}.axGhost{display:none!important}body>i[style*="axPartFly"]{display:none!important}#axHelpCard .av{display:none!important}';
document.head.appendChild(st);
})();
/* ===== AXIUM v47: WHAT-IS-AXIUM STORY PAGE ===== */
(function(){
if(window.__ax47)return;window.__ax47=true;
var pg=document.createElement('div');pg.id='axAbout';
pg.style.cssText='position:fixed;inset:0;z-index:100020;background:linear-gradient(170deg,#0b1220,#070b12);overflow-y:auto;display:none;-webkit-overflow-scrolling:touch';
pg.innerHTML='<div class="abAura"></div><div class="abParts"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>'+
'<button id="axAboutX" type="button" style="position:sticky;top:10px;margin:10px 0 0 12px;z-index:5;padding:9px 16px;border-radius:999px;border:1px solid rgba(255,255,255,.15);background:rgba(13,20,34,.85);color:#9aa4b3;font-weight:800;cursor:pointer;backdrop-filter:blur(8px)">‹ Back</button>'+
'<div class="abHero"><div class="abLogo">AXIUM</div><div class="abTag">YOUR SECOND BRAIN, ENGINEERED</div><p class="abSub">One calm home for your tasks, focus, energy and life — built on YOUR real data, not fake numbers.</p></div>'+
'<section class="sec" data-r><h3>😵 The problem</h3><div class="cards3"><div class="pc">🧩 Scattered tools<span>5 apps, 0 clarity</span></div><div class="pc">🎭 Fake motivation<span>streaks & stats that lie</span></div><div class="pc">📢 Noise<span>endless meaningless pings</span></div></div></section>'+
'<section class="sec" data-r><h3>💙 The AXIUM way</h3><div class="cards3"><div class="pc g">🏠 One home<span>tasks · focus · notes · coach</span></div><div class="pc g">📊 Real data<span>energy grows from YOUR work</span></div><div class="pc g">🌙 Calm coach<span>gentle check-ins, real reminders</span></div></div></section>'+
'<section class="sec" data-r><h3>⚡ What you get</h3><div class="grid6"><div class="tl">📋 Tasks & Calendar</div><div class="tl">⏱ Focus Timer</div><div class="tl">🔔 Smart Coach</div><div class="tl">📈 Energy Analytics</div><div class="tl">📝 Notes & AI</div><div class="tl">📦 Offline App</div></div></section>'+
'<section class="sec" data-r><h3>🧭 How it works</h3><div class="steps"><div class="stp"><b>1</b> Enter AXIUM</div><div class="stp"><b>2</b> Act — tasks & focus sessions</div><div class="stp"><b>3</b> Grow — energy, streak & insights</div></div></section>'+
'<section class="sec" data-r><div class="priv">🔒 Your data never leaves this device.<br><span>No account · No cloud · Just you</span></div></section>'+
'<div class="abCta" data-r><button id="axAboutEnter" type="button">➜ Enter AXIUM</button></div><div style="height:40px"></div>';
document.body.appendChild(pg);
var st=document.createElement('style');
st.textContent='#axAbout .abAura{position:fixed;inset:-40%;background:linear-gradient(120deg,rgba(43,125,255,.14),rgba(0,194,214,.09),rgba(124,92,255,.12),rgba(43,125,255,.14));background-size:300% 300%;animation:ab47aur 14s linear infinite;filter:blur(50px);pointer-events:none}#axAbout .abParts{position:fixed;inset:0;pointer-events:none;overflow:hidden}#axAbout .abParts i{position:absolute;width:4px;height:4px;border-radius:50%;background:#9cc8ff;box-shadow:0 0 10px #9cc8ff;opacity:.5;animation:ab47float 7s ease-in-out infinite}#axAbout .abParts i:nth-child(1){left:10%;top:20%}#axAbout .abParts i:nth-child(2){left:80%;top:15%;animation-delay:1s}#axAbout .abParts i:nth-child(3){left:25%;top:55%;animation-delay:2s}#axAbout .abParts i:nth-child(4){left:70%;top:65%;animation-delay:3s}#axAbout .abParts i:nth-child(5){left:45%;top:35%;animation-delay:4s}#axAbout .abParts i:nth-child(6){left:90%;top:45%;animation-delay:1.5s}#axAbout .abParts i:nth-child(7){left:15%;top:80%;animation-delay:2.5s}#axAbout .abParts i:nth-child(8){left:60%;top:88%;animation-delay:3.5s}#axAbout .abHero{text-align:center;padding:30px 20px 10px;position:relative}#axAbout .abLogo{font-size:2.6rem;font-weight:900;letter-spacing:6px;background:linear-gradient(90deg,#fff,#7bb5ff,#00c2d6,#fff);background-size:220% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:ab47shine 4s linear infinite}#axAbout .abTag{color:#3fd67a;font-size:.68rem;font-weight:900;letter-spacing:3px;margin-top:6px}#axAbout .abSub{color:#9aa4b3;font-size:.82rem;line-height:1.8;margin:14px auto 0;max-width:420px}#axAbout .sec{padding:26px 18px;position:relative}#axAbout h3{color:#eef2f7;font-size:1rem;font-weight:900;letter-spacing:1px;margin-bottom:14px}#axAbout .cards3{display:flex;flex-direction:column;gap:10px}#axAbout .pc{background:rgba(255,107,107,.07);border:1px solid rgba(255,107,107,.3);border-radius:18px;padding:14px 16px;color:#ffb1b1;font-weight:800;font-size:.85rem}#axAbout .pc span{display:block;color:#8a94a3;font-size:.68rem;font-weight:600;margin-top:4px}#axAbout .pc.g{background:rgba(63,214,122,.08);border-color:rgba(63,214,122,.35);color:#7ae8b0}#axAbout .grid6{display:grid;grid-template-columns:1fr 1fr;gap:10px}#axAbout .tl{background:rgba(43,125,255,.08);border:1px solid rgba(43,125,255,.3);border-radius:16px;padding:14px 10px;text-align:center;color:#c5cfdb;font-size:.72rem;font-weight:800}#axAbout .steps{display:flex;flex-direction:column;gap:0;border-left:2px solid rgba(43,125,255,.4);margin-left:14px;padding-left:20px}#axAbout .stp{position:relative;padding:10px 0;color:#c5cfdb;font-size:.82rem;font-weight:700}#axAbout .stp b{position:absolute;left:-31px;top:8px;width:22px;height:22px;border-radius:50%;background:linear-gradient(135deg,#2b7dff,#00c2d6);color:#fff;font-size:.68rem;display:flex;align-items:center;justify-content:center;box-shadow:0 0 14px rgba(43,125,255,.6)}#axAbout .priv{text-align:center;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.12);border-radius:20px;padding:20px;color:#eef2f7;font-weight:800;font-size:.9rem;line-height:1.7}#axAbout .priv span{color:#8a94a3;font-size:.68rem;font-weight:600}#axAbout .abCta{text-align:center;padding:10px 20px 30px}#axAbout .abCta button{width:100%;max-width:420px;padding:16px;border:none;border-radius:18px;background:linear-gradient(135deg,#2b7dff,#1a6ae0);color:#fff;font-weight:900;font-size:1rem;cursor:pointer;box-shadow:0 14px 36px rgba(43,125,255,.45);animation:ab47pulse 2.4s ease-out infinite}#axAbout [data-r]{opacity:0;transform:translateY(36px);transition:all .8s cubic-bezier(.22,1,.36,1)}#axAbout [data-r].in{opacity:1;transform:none}#axAbout .grid6 .tl,#axAbout .cards3 .pc{opacity:0;transform:translateY(24px) scale(.94);transition:all .6s cubic-bezier(.34,1.56,.64,1)}#axAbout .sec.in .tl,#axAbout .sec.in .pc{opacity:1;transform:none}#axAbout .sec.in .tl:nth-child(1),#axAbout .sec.in .pc:nth-child(1){transition-delay:.05s}#axAbout .sec.in .tl:nth-child(2),#axAbout .sec.in .pc:nth-child(2){transition-delay:.13s}#axAbout .sec.in .tl:nth-child(3),#axAbout .sec.in .pc:nth-child(3){transition-delay:.21s}#axAbout .sec.in .tl:nth-child(4){transition-delay:.29s}#axAbout .sec.in .tl:nth-child(5){transition-delay:.37s}#axAbout .sec.in .tl:nth-child(6){transition-delay:.45s}@keyframes ab47aur{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}@keyframes ab47shine{0%{background-position:0% 50%}100%{background-position:200% 50%}}@keyframes ab47float{0%,100%{transform:translateY(0)}50%{transform:translateY(-26px)}}@keyframes ab47pulse{0%,100%{box-shadow:0 14px 36px rgba(43,125,255,.45),0 0 0 0 rgba(43,125,255,.4)}50%{box-shadow:0 14px 36px rgba(43,125,255,.45),0 0 0 16px rgba(43,125,255,0)}}';
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
  var b=document.createElement('button');b.id='axAboutBtn';b.type='button';b.textContent='✨ What is AXIUM?';
  b.style.cssText='display:block;margin:12px auto 0;padding:12px 22px;border-radius:999px;border:1px solid rgba(43,125,255,.5);background:rgba(43,125,255,.12);color:#7bb5ff;font-weight:800;font-size:.8rem;cursor:pointer';
  hero.parentNode.insertBefore(b,hero.nextSibling);
  b.onclick=open;
 }
 var dl=document.querySelector('.drawer-link');
 if(dl&&!document.getElementById('axAboutDrawer')){
  var a=dl.cloneNode(false);a.id='axAboutDrawer';a.className=dl.className;a.textContent='✨ About AXIUM';
  dl.parentNode.insertBefore(a,dl.nextSibling);
  a.onclick=open;
 }
 var hc=document.getElementById('axHelpCard');
 if(hc&&!document.getElementById('axAboutSet')){
  var s=document.createElement('button');s.id='axAboutSet';s.type='button';s.textContent='❓ What is AXIUM?';
  hc.appendChild(s);s.onclick=open;
 }
}
doors();setInterval(doors,1500);
})();
/* ===== AXIUM v48: TRUTH PASS (KPI FIX + SIM BADGE + ON-DEVICE LABEL) ===== */
(function(){
if(window.__ax48)return;window.__ax48=true;
window.axSmartEnergy=function(){
 var k=new Date().toISOString().slice(0,10),d={};
 try{d=JSON.parse(localStorage.getItem('axium_daily'))||{}}catch(e){}
 var day=d[k]||{},t=day.t||0,m=day.m||0;
 if(!t&&!m)return 0;
 return Math.min(100,30+t*6+Math.round(m/10));
};
function badge(){
 var on=localStorage.getItem('axium_sim')==='1';
 var el=document.getElementById('axSimBadge');
 if(on&&!el){
  el=document.createElement('div');el.id='axSimBadge';
  el.style.cssText='position:fixed;top:8px;left:50%;transform:translateX(-50%);z-index:100030;padding:7px 16px;border-radius:999px;background:rgba(255,180,67,.15);border:1px solid rgba(255,180,67,.6);color:#ffb443;font-size:.66rem;font-weight:900;letter-spacing:1px;backdrop-filter:blur(8px)';
  el.textContent='🧪 SIMULATED DATA — Settings → Restore real data';
  document.body.appendChild(el);
 }
 if(!on&&el)el.remove();
}
badge();setInterval(badge,2000);
function simHook(){
 document.querySelectorAll('button,div,a').forEach(function(el){
  if(el.dataset.s48)return;
  var txt=(el.textContent||'').trim();
  if(txt.indexOf('Simulate 30 days')===0||txt.indexOf('🧪 Simulate')>-1){
   el.dataset.s48='1';
   el.addEventListener('click',function(){setTimeout(function(){localStorage.setItem('axium_sim','1');badge();},80);});
  }
  if(txt.indexOf('Restore my real data')===0||txt.indexOf(' Restore')>-1){
   el.dataset.s48='1';
   el.addEventListener('click',function(){setTimeout(function(){localStorage.removeItem('axium_sim');badge();},80);});
  }
 });
}
simHook();setInterval(simHook,2000);
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
/* ===== AXIUM v49: SMART ABOUT CHIP ===== */
(function(){
if(window.__ax49)return;window.__ax49=true;
function tick(){
 var chip=document.getElementById('heroAbout');if(!chip)return;
 var pill=null;
 document.querySelectorAll('a,button').forEach(function(el){
  if(el.id!=='heroAbout'&&(el.textContent||'').indexOf('What is AXIUM?')>-1&&el.closest('#hero'))pill=el;
 });
 var hero=document.getElementById('hero');
 var dash=document.getElementById('dashboard');
 var onHero=hero&&hero.getBoundingClientRect().height>0&&!(dash&&dash.classList.contains('active'));
 if(onHero){
  chip.style.top='10px';chip.style.bottom='auto';
  var vis=false;
  if(pill){var r=pill.getBoundingClientRect();vis=r.top<window.innerHeight&&r.bottom>0;}
  chip.style.display=vis?'none':'block';
 }else{
  chip.style.display='block';
  chip.style.top='auto';chip.style.bottom='88px';
 }
}
tick();setInterval(tick,600);
})();
/* ===== AXIUM v50: ABOUT RAIL BUTTON + NO FLOAT CHIP ===== */
(function(){
if(window.__ax50)return;window.__ax50=true;
var st=document.createElement('style');
st.textContent='#axRailAbout{position:relative;animation:ax50pop .7s cubic-bezier(.34,1.56,.64,1) both,ax50pulse 3.2s 1.2s ease-out infinite}#axRailAbout .rail-icon{color:#7bb5ff}#axRailAbout::before{content:"";position:absolute;inset:-3px;border-radius:16px;border:1px solid rgba(43,125,255,.55);opacity:0;animation:ax50ring 3.2s 1.2s ease-out infinite;pointer-events:none}@keyframes ax50pop{from{opacity:0;transform:scale(.4) translateY(14px)}60%{transform:scale(1.08)}to{opacity:1;transform:none}}@keyframes ax50pulse{0%,100%{box-shadow:0 0 0 0 rgba(43,125,255,0)}50%{box-shadow:0 0 18px 2px rgba(43,125,255,.35)}}@keyframes ax50ring{0%{transform:scale(.8);opacity:.8}70%,100%{transform:scale(1.25);opacity:0}}';
document.head.appendChild(st);
function tick(){
 var dash=document.getElementById('dashboard');
 var hero=document.getElementById('hero');
 var onHero=hero&&hero.getBoundingClientRect().height>0&&!(dash&&dash.classList.contains('active'));
 if(!onHero){var ch=document.getElementById('heroAbout');if(ch)ch.remove();}
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
tick();setInterval(tick,1200);
})();
/* ===== AXIUM v51: ABOUT BUTTON MOTION OVERDRIVE ===== */
(function(){
if(window.__ax51)return;window.__ax51=true;
var st=document.createElement('style');
st.textContent='#axRailAbout{animation:ax51in .9s cubic-bezier(.34,1.56,.64,1) both,ax51float 3.4s 1s ease-in-out infinite,ax51glow 2.2s 1s ease-out infinite}#axRailAbout::before{animation:ax51ring 2.2s 1s ease-out infinite}#axRailAbout::after{content:"";position:absolute;top:0;left:-60%;width:45%;height:100%;background:linear-gradient(100deg,transparent,rgba(123,181,255,.4),transparent);transform:skewX(-20deg);animation:ax51sweep 2.8s 1.4s ease-in-out infinite;pointer-events:none}#axRailAbout .rail-icon svg{animation:ax51tw 1.8s ease-in-out infinite;filter:drop-shadow(0 0 6px rgba(123,181,255,.8))}@keyframes ax51in{0%{opacity:0;transform:scale(.15) rotate(-16deg)}55%{opacity:1;transform:scale(1.18) rotate(4deg)}75%{transform:scale(.94)}100%{opacity:1;transform:scale(1)}}@keyframes ax51float{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}@keyframes ax51glow{0%,100%{box-shadow:0 0 6px 0 rgba(43,125,255,.25)}50%{box-shadow:0 0 22px 4px rgba(43,125,255,.5)}}@keyframes ax51ring{0%{transform:scale(.75);opacity:.9}80%,100%{transform:scale(1.35);opacity:0}}@keyframes ax51sweep{0%{left:-60%}55%,100%{left:120%}}@keyframes ax51tw{0%,100%{transform:scale(1)}50%{transform:scale(1.18)}}@keyframes ax51rise{0%{opacity:0;transform:translate(0,0) scale(.6)}25%{opacity:1}100%{opacity:0;transform:translate(var(--rx),-46px) scale(.2)}}';
document.head.appendChild(st);
function spark(b,n,radial){
 for(var i=0;i<(n||1);i++){
  var r=b.getBoundingClientRect();
  var s=document.createElement('i');
  var x=r.left+r.width/2+(radial?(Math.random()-.5)*40:0);
  var y=r.top+r.height/2+(radial?(Math.random()-.5)*20:0);
  s.style.cssText='position:fixed;z-index:99990;left:'+x+'px;top:'+y+'px;width:5px;height:5px;border-radius:50%;background:#9cc8ff;box-shadow:0 0 10px #9cc8ff;pointer-events:none;--rx:'+((Math.random()-.5)*30)+'px;animation:ax51rise '+(radial?0.7:1.3)+'s ease-out forwards';
  document.body.appendChild(s);
  setTimeout(function(el){return function(){el.remove();};}(s),1500);
 }
}
function hook(){
 var b=document.getElementById('axRailAbout');
 if(!b||b.dataset.p51)return;
 b.dataset.p51='1';
 setInterval(function(){var bb=document.getElementById('axRailAbout');if(bb&&bb.getBoundingClientRect().width)spark(bb,1,false);},1600);
 b.addEventListener('click',function(){spark(b,10,true);});
}
hook();setInterval(hook,1200);
})();
/* ===== AXIUM v52: CLEAN ABOUT BUTTON ===== */
(function(){
if(window.__ax52)return;window.__ax52=true;
var st=document.createElement('style');
st.textContent='#axRailAbout::before{display:none!important}#axRailAbout>*:not(.rail-icon):not(.rail-label){display:none!important}';
document.head.appendChild(st);
function t(){var b=document.getElementById('axRailAbout');if(b)b.classList.remove('active');}
t();setInterval(t,1000);
})();
