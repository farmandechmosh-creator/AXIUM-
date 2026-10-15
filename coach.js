/* AXIUM Smart Coach — self-contained engine */
(function(){
if(window.__axCoachLoaded)return;window.__axCoachLoaded=true;
if(document.getElementById('axFab'))return;
var KEY='axNotifyV3',st;try{st=JSON.parse(localStorage.getItem(KEY))}catch(e){}
if(!st)st={list:[],unread:0,rems:[],coachOn:true,sumOn:true,lastSum:'',lastCoach:0,coachIdx:0};
function save(){try{localStorage.setItem(KEY,JSON.stringify(st))}catch(e){}}
var css='#axFab{position:fixed;right:16px;bottom:18px;z-index:9600;display:flex;align-items:center;gap:10px;padding:15px 22px;border-radius:999px;border:1px solid rgba(255,255,255,.25);background:linear-gradient(135deg,#2b7dff,#00c2d6);color:#fff;font-weight:800;font-size:.84rem;letter-spacing:.4px;cursor:pointer;backdrop-filter:blur(8px);animation:axFabIn .7s cubic-bezier(.34,1.56,.64,1) both,axFabPulse 2.6s ease-out infinite;transition:transform .2s}#axFab:active{transform:scale(.94)}#axFab .ic{font-size:1.3rem;filter:drop-shadow(0 0 8px rgba(255,255,255,.7));animation:axFabWave 2.2s ease-in-out infinite}#axFab.on{background:rgba(13,20,34,.88);border-color:rgba(43,125,255,.45);box-shadow:0 12px 32px rgba(0,0,0,.5),0 0 24px rgba(43,125,255,.25)}#axBellBadge{position:absolute;top:-6px;right:-4px;min-width:22px;height:22px;padding:0 6px;border-radius:999px;background:linear-gradient(135deg,#ff5470,#ff2e5f);color:#fff;font-size:.68rem;font-weight:800;display:none;align-items:center;justify-content:center;box-shadow:0 0 14px rgba(255,46,95,.7);animation:axBadgePop .35s cubic-bezier(.34,1.56,.64,1)}#axPanel{position:fixed;right:14px;bottom:86px;z-index:9500;width:min(344px,calc(100vw - 28px));max-height:64vh;overflow-y:auto;background:rgba(13,20,34,.9);border:1px solid rgba(43,125,255,.3);border-radius:22px;backdrop-filter:blur(16px);box-shadow:0 24px 60px rgba(0,0,0,.55),0 0 40px rgba(43,125,255,.1);padding:16px;display:none}#axPanel.open{display:block;animation:axPanelIn .45s cubic-bezier(.34,1.56,.64,1)}.axn-head{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:12px}.axn-head b{font-size:.92rem;font-weight:900;letter-spacing:1px;background:linear-gradient(90deg,#fff,#7bb5ff,#00c2d6);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.axn-mini{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);color:#8a94a3;font-size:.64rem;padding:6px 12px;border-radius:999px;cursor:pointer}.axn-perm{border:1px solid transparent;border-radius:16px;background:linear-gradient(rgba(13,20,34,.92),rgba(13,20,34,.92)) padding-box,linear-gradient(135deg,#2b7dff,#00c2d6) border-box;padding:12px;margin-bottom:12px;color:#bcd6ff;font-size:.72rem;line-height:1.7}.axn-btn{width:100%;margin-top:9px;padding:12px;border:none;border-radius:12px;background:linear-gradient(135deg,#2b7dff,#1a6ae0);color:#fff;font-weight:800;font-size:.78rem;cursor:pointer;box-shadow:0 8px 22px rgba(43,125,255,.4)}#axnText{width:100%;padding:12px 14px;border-radius:14px;border:1px solid rgba(255,255,255,.12);background:rgba(0,0,0,.3);color:#eef2f7;font-size:.8rem;outline:none}.axn-chips{display:flex;flex-wrap:wrap;gap:7px;margin-top:9px}.axn-chip{flex:1;min-width:64px;padding:10px 6px;border-radius:999px;border:1px solid rgba(43,125,255,.35);background:rgba(43,125,255,.1);color:#7bb5ff;font-size:.66rem;font-weight:700;cursor:pointer}.axn-chip.coach{border-color:rgba(63,214,122,.5);background:rgba(63,214,122,.12);color:#3fd67a}.axn-toggles{margin:12px 0;display:flex;flex-direction:column;gap:9px}.axn-toggle{display:flex;gap:9px;align-items:center;color:#8a94a3;font-size:.72rem;cursor:pointer}.axn-toggle input{display:none}.axn-sw{width:38px;height:22px;border-radius:999px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.15);position:relative;flex:none;transition:.3s}.axn-sw::after{content:"";position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:50%;background:#8a94a3;transition:.3s cubic-bezier(.34,1.56,.64,1)}.axn-toggle input:checked+.axn-sw{background:linear-gradient(135deg,#2b7dff,#1a6ae0);border-color:transparent}.axn-toggle input:checked+.axn-sw::after{left:18px;background:#fff}.axn-item{border:1px solid rgba(255,255,255,.08);background:linear-gradient(160deg,rgba(43,125,255,.1),rgba(255,255,255,.03));border-radius:16px;padding:11px 12px;margin-top:9px;animation:axItemIn .45s cubic-bezier(.34,1.56,.64,1) both}.axn-item .t{color:#eef2f7;font-size:.78rem;font-weight:800}.axn-item .b{color:#9aa4b2;font-size:.72rem;margin-top:4px;line-height:1.6}.axn-item .d{color:#5b6472;font-size:.62rem;margin-top:6px}.axn-empty{color:#5b6472;font-size:.72rem;text-align:center;padding:16px 0}#axClose{width:34px;height:34px;flex:none;border-radius:11px;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.06);color:#9aa4b2;font-size:.95rem;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:.25s}#axClose:active{transform:scale(.85) rotate(90deg);color:#ff5470}#axToast{position:fixed;top:10px;left:50%;transform:translateX(-50%);z-index:9999;width:min(400px,calc(100vw - 20px));display:none;align-items:center;gap:12px;padding:12px 14px;border-radius:18px;border:1px solid rgba(43,125,255,.4);background:rgba(13,20,34,.92);backdrop-filter:blur(16px);box-shadow:0 18px 44px rgba(0,0,0,.6);overflow:hidden;cursor:pointer}#axToast.show{display:flex;animation:axToastIn .5s cubic-bezier(.34,1.56,.64,1)}#axToast.hide{animation:axToastOut .35s ease forwards}#axToast .ic{width:42px;height:42px;flex:none;border-radius:14px;background:linear-gradient(135deg,#2b7dff,#00c2d6);display:flex;align-items:center;justify-content:center;font-size:1.3rem}#axToast .tx{flex:1;min-width:0}#axToast .t{color:#eef2f7;font-size:.8rem;font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#axToast .b{color:#9aa4b2;font-size:.72rem;margin-top:2px;line-height:1.5;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}#axToast .bar{position:absolute;left:0;bottom:0;height:3px;background:linear-gradient(90deg,#2b7dff,#00c2d6);animation:axToastBar 5s linear forwards}@keyframes axFabIn{from{transform:translateY(70px) scale(.5);opacity:0}to{transform:none;opacity:1}}@keyframes axFabPulse{0%{box-shadow:0 12px 32px rgba(43,125,255,.45),0 0 0 0 rgba(43,125,255,.45)}70%{box-shadow:0 12px 32px rgba(43,125,255,.45),0 0 0 20px rgba(43,125,255,0)}100%{box-shadow:0 12px 32px rgba(43,125,255,.45),0 0 0 0 rgba(43,125,255,0)}}@keyframes axFabWave{0%,100%{transform:rotate(0)}25%{transform:rotate(14deg)}50%{transform:rotate(-10deg)}75%{transform:rotate(6deg)}}@keyframes axPanelIn{from{opacity:0;transform:translateY(26px) scale(.92)}to{opacity:1;transform:translateY(0) scale(1)}}@keyframes axItemIn{from{opacity:0;transform:translateX(28px)}to{opacity:1;transform:none}}@keyframes axBadgePop{from{transform:scale(0)}to{transform:scale(1)}}@keyframes axToastIn{from{opacity:0;transform:translateY(-90px) scale(.9)}to{opacity:1;transform:none}}@keyframes axToastOut{to{opacity:0;transform:translateY(-90px) scale(.9)}}@keyframes axToastBar{from{width:100%}to{width:0}}';
var s=document.createElement('style');s.textContent=css;document.head.appendChild(s);
document.body.insertAdjacentHTML('beforeend','<button id="axFab"><span class="ic">🔔</span><span id="axFabTxt"></span><span id="axBellBadge"></span></button><div id="axPanel"><div class="axn-head"><b>🧠 AXIUM SMART COACH</b><button id="axnClear" class="axn-mini">Clear all</button><button id="axClose" type="button">✕</button></div><div id="axnPerm" class="axn-perm" style="display:none">Let AXIUM talk to you like a real companion — enable system notifications.<button id="axnPermBtn" class="axn-btn">Enable notifications</button></div><input id="axnText" placeholder="Remind me to... (optional)"><div class="axn-chips"><button class="axn-chip" data-min="1">Test · 1 min</button><button class="axn-chip" data-min="5">5 min</button><button class="axn-chip" data-min="25">Focus · 25</button><button class="axn-chip" data-min="60">1 hour</button><button class="axn-chip coach" data-coach="1">⚡ Coach now</button></div><div class="axn-toggles"><label class="axn-toggle"><input type="checkbox" id="axnTCoach"><span class="axn-sw"></span> Smart check-in every 20 minutes</label><label class="axn-toggle"><input type="checkbox" id="axnTSummary"><span class="axn-sw"></span> Daily summary when I open AXIUM</label></div><div id="axnList"></div></div><div id="axToast"><div class="ic" id="axToastIc">🧠</div><div class="tx"><div class="t" id="axToastT"></div><div class="b" id="axToastB"></div></div><div class="bar"></div></div>');
var fab=document.getElementById('axFab'),fabTxt=document.getElementById('axFabTxt'),panel=document.getElementById('axPanel'),badge=document.getElementById('axBellBadge'),listEl=document.getElementById('axnList'),permBox=document.getElementById('axnPerm'),permBtn=document.getElementById('axnPermBtn'),tCoach=document.getElementById('axnTCoach'),tSum=document.getElementById('axnTSummary'),toast=document.getElementById('axToast'),tT=document.getElementById('axToastT'),tB=document.getElementById('axToastB'),tI=document.getElementById('axToastIc'),timer=null;
tCoach.checked=!!st.coachOn;tSum.checked=!!st.sumOn;
tCoach.onchange=function(){st.coachOn=tCoach.checked;save()};
tSum.onchange=function(){st.sumOn=tSum.checked;save()};
if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('sw.js').catch(function(){})})}
function granted(){return ('Notification' in window)&&Notification.permission==='granted'}
function syncFab(){fab.classList.toggle('on',granted());fabTxt.textContent=granted()?'Smart Coach · on':'Enable smart alerts ✨';permBox.style.display=granted()?'none':'block'}
function sysNotify(title,body){if(!granted())return;function fb(){try{new Notification(title,{body:body})}catch(e){}}try{if(navigator.serviceWorker){navigator.serviceWorker.ready.then(function(reg){reg.showNotification(title,{body:body,tag:'axn'})}).catch(fb)}else fb()}catch(e){}}
function showToast(icon,title,body){tI.textContent=icon;tT.textContent=title;tB.textContent=body;toast.classList.remove('hide');toast.classList.add('show');var bar=toast.querySelector('.bar');bar.style.animation='none';void bar.offsetWidth;bar.style.animation='';clearTimeout(timer);timer=setTimeout(function(){toast.classList.add('hide');setTimeout(function(){toast.classList.remove('show','hide')},400)},5000)}
toast.onclick=function(){toast.classList.add('hide');setTimeout(function(){toast.classList.remove('show','hide')},400)};
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}
function fmt(ts){return new Date(ts).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}
function render(){badge.style.display=st.unread>0?'flex':'none';badge.textContent=st.unread>9?'9+':st.unread;if(!st.list.length){listEl.innerHTML='<div class="axn-empty">No notifications yet — your coach is quiet... for now 🤫</div>';return}listEl.innerHTML=st.list.slice(0,30).map(function(n,i){return '<div class="axn-item" style="animation-delay:'+(i*0.05)+'s"><div class="t">'+n.icon+' '+esc(n.title)+'</div><div class="b">'+esc(n.body)+'</div><div class="d">'+fmt(n.t)+'</div></div>'}).join('')}
function push(icon,title,body){st.list.unshift({icon:icon,title:title,body:body,t:Date.now()});if(st.list.length>50)st.list.length=50;st.unread++;save();render();sysNotify(title,body);showToast(icon,title,body)}
fab.onclick=function(){if(!granted()){Notification.requestPermission().then(function(p){syncFab();if(p==='granted')push('🔔','Notifications enabled','AXIUM can now whisper to you anytime, like a real app.')});return}panel.classList.toggle('open');if(panel.classList.contains('open')){st.unread=0;save();render()}};
permBtn.onclick=function(){fab.onclick()};
document.getElementById('axClose').onclick=function(){panel.classList.remove('open')};
document.getElementById('axnClear').onclick=function(){st.list=[];st.unread=0;save();render()};
document.addEventListener('click',function(e){if(panel.classList.contains('open')&&!panel.contains(e.target)&&!e.target.closest('#axFab'))panel.classList.remove('open')});
document.querySelectorAll('.axn-chip[data-min]').forEach(function(ch){ch.onclick=function(){var min=+ch.dataset.min,txt=document.getElementById('axnText').value.trim();st.rems.push({at:Date.now()+min*60000,title:txt||'Reminder'});save();push('⏰','Reminder set','"'+(txt||'Reminder')+'" in '+min+' minute(s). I won\'t let you forget!');document.getElementById('axnText').value=''}});
setInterval(function(){var now=Date.now(),due=st.rems.filter(function(r){return r.at<=now});if(due.length){st.rems=st.rems.filter(function(r){return r.at>now});due.forEach(function(r){push('⏰',r.title,'Your reminder is due now. You promised yourself!')});save()}},10000);
var POOLS={morning:['💧 Hydration check! When was your last glass of water?','☀️ Fresh 20 minutes! What\'s the ONE thing that moves the needle today?','🎯 Morning focus is gold. Pick your hardest task and eat that frog!','✍️ Quick win: write today\'s top 3 tasks before the world gets loud.'],day:['👀 20-20-20 rule: look 20 feet away for 20 seconds. Your eyes will thank you.','🧘 Quick stretch! Roll your shoulders, reach high — 30 seconds.','🪑 Posture check: shoulders back, screen at eye level. You got this.','☕ Micro-break earned! Stand up, walk a few steps, breathe.','📈 Progress check: what did you finish in the last 20 minutes? Celebrate it!','🌬 4-7-8 breathing: inhale 4, hold 7, exhale 8. Three rounds with me?'],evening:['🌇 Evening wrap-up: close 1 open loop before you finish today.','✨ Progress > perfection. What did today teach you?','📚 20 minutes of reading before tonight? Future you says thanks.','🧹 Brain dump: write tomorrow\'s worries down so tonight stays calm.'],night:['💤 It\'s getting late — your future self needs sleep. Wrap up soon.','🌙 Winding down? Write tomorrow\'s top 3 tasks, then rest. You earned it.','🕯 Screen glow is not moonlight. Consider a soft landing tonight.']};
var TITLES=['AXIUM here 👋','Quick check-in 💙','Hey, it\'s me again 🔔','Your coach, online 🤖'];
function poolFor(h){if(h>=23||h<5)return POOLS.night;if(h<12)return POOLS.morning;if(h<18)return POOLS.day;return POOLS.evening}
function coachPush(){var p=poolFor(new Date().getHours());var i=st.coachIdx%p.length;st.coachIdx=i+1;var body=p[i];if(st.rems.length)body+=' (PS: you have '+st.rems.length+' reminder(s) waiting ⏰)';push('🧠',TITLES[st.coachIdx%TITLES.length],body);st.lastCoach=Date.now();save()}
document.querySelectorAll('.axn-chip[data-coach]').forEach(function(ch){ch.onclick=coachPush});
if(!st.lastCoach)st.lastCoach=Date.now();
setInterval(function(){if(st.coachOn&&Date.now()-st.lastCoach>=20*60000)coachPush()},15000);
var today=new Date().toDateString();
if(st.sumOn&&st.lastSum!==today){st.lastSum=today;save();var h=new Date().getHours();var g=h<12?'Good morning ☀️':(h<17?'Good afternoon 🌤':'Good evening 🌙');push('🌅',g,'Welcome back! I\'ll check in every 20 minutes. You have '+st.rems.length+' reminder(s) active. Let\'s make today count!')}
syncFab();render();
})();
/* ===== AXIUM NOTIFY UPGRADE ===== */
(function(){
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
if(window.ServiceWorkerRegistration&&ServiceWorkerRegistration.prototype.showNotification){
  var orig=ServiceWorkerRegistration.prototype.showNotification;
  ServiceWorkerRegistration.prototype.showNotification=function(t,o){
    o=o||{};if(!o.icon){try{o.icon=axIconURL();o.badge=axIconURL()}catch(e){}}
    return orig.call(this,t,o);
  };
}
var css='#axToast{padding:14px 16px;border-radius:22px;background:linear-gradient(160deg,rgba(20,30,50,.96),rgba(10,16,28,.96));border:1px solid rgba(43,125,255,.45);box-shadow:0 24px 60px rgba(0,0,0,.65),0 0 44px rgba(43,125,255,.22),inset 0 1px 0 rgba(255,255,255,.08)}#axToast.show{animation:axToastIn2 .55s cubic-bezier(.34,1.56,.64,1)}#axToast.hide{animation:axToastOut2 .35s ease forwards}@keyframes axToastIn2{from{opacity:0;transform:translate(-50%,-110px) scale(.85) rotate(-3deg)}to{opacity:1;transform:translate(-50%,0) scale(1) rotate(0)}}@keyframes axToastOut2{to{opacity:0;transform:translate(-50%,-110px) scale(.9)}}#axToast .ic{width:48px;height:48px;border-radius:16px;position:relative;background:radial-gradient(120% 120% at 30% 20%,#3b8bff,#1656c9 60%,#00c2d6);box-shadow:0 8px 20px rgba(43,125,255,.5),0 0 18px rgba(0,194,214,.35);font-size:1.45rem}.axRing{position:absolute;inset:-5px;border-radius:18px;border:2px solid transparent;border-top-color:rgba(0,194,214,.95);border-right-color:rgba(43,125,255,.65);animation:axSpin 2.6s linear infinite;pointer-events:none}@keyframes axSpin{to{transform:rotate(360deg)}}.axSpark{position:absolute;width:6px;height:6px;border-radius:50%;background:#7bb5ff;box-shadow:0 0 10px #7bb5ff;opacity:0;pointer-events:none}.s1{top:8px;left:16px}.s2{bottom:10px;left:44px}#axToast.show .s1{animation:axFly 1.1s .15s ease-out both}#axToast.show .s2{animation:axFly 1.3s .45s ease-out both;background:#00c2d6;box-shadow:0 0 10px #00c2d6}@keyframes axFly{0%{opacity:0;transform:translate(0,0) scale(.4)}30%{opacity:1}100%{opacity:0;transform:translate(48px,-28px) scale(1.3)}}#axToast .t{font-size:.84rem;letter-spacing:.3px}#axToast .bar{height:4px;border-radius:999px;background:linear-gradient(90deg,#2b7dff,#00c2d6,#7bb5ff,#2b7dff);background-size:300% 100%;animation:axToastBar 5s linear forwards,axShimmer 1.8s linear infinite}@keyframes axShimmer{to{background-position:-300% 0}}@keyframes axIconPop{from{transform:scale(.3) rotate(-20deg);opacity:0}60%{transform:scale(1.12) rotate(4deg)}to{transform:scale(1);opacity:1}}@keyframes axTextIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}.axn-item{position:relative;overflow:hidden}.axn-item::before{content:"";position:absolute;left:0;top:12px;bottom:12px;width:3px;border-radius:999px;background:linear-gradient(180deg,#2b7dff,#00c2d6);box-shadow:0 0 10px rgba(43,125,255,.7)}.axn-item:first-child{box-shadow:0 0 26px rgba(43,125,255,.14),inset 0 1px 0 rgba(255,255,255,.06)}.axn-item .d{display:flex;align-items:center;gap:6px}.axn-item .d::before{content:"";width:5px;height:5px;border-radius:50%;background:#3fd67a;box-shadow:0 0 8px #3fd67a}';
var s=document.createElement('style');s.textContent=css;document.head.appendChild(s);
var toast=document.getElementById('axToast');
if(toast){
  if(!toast.querySelector('.axSpark'))toast.insertAdjacentHTML('afterbegin','<span class="axSpark s1"></span><span class="axSpark s2"></span>');
  var ic0=toast.querySelector('.ic');
  if(ic0&&!ic0.querySelector('.axRing'))ic0.insertAdjacentHTML('beforeend','<span class="axRing"></span>');
  new MutationObserver(function(){
    if(!toast.classList.contains('show'))return;
    var ic=toast.querySelector('.ic');
    if(ic){ic.style.animation='none';void ic.offsetWidth;ic.style.animation='axIconPop .6s .05s cubic-bezier(.34,1.56,.64,1) both';}
    toast.querySelectorAll('.t,.b').forEach(function(el,i){el.style.animation='none';void el.offsetWidth;el.style.animation='axTextIn .5s '+(0.1+i*0.1)+'s cubic-bezier(.34,1.56,.64,1) both';});
  }).observe(toast,{attributes:true,attributeFilter:['class']});
}
})();
/* ===== AXIUM PATCH 2 ===== */
(function(){
var fab=document.getElementById('axFab'),panel=document.getElementById('axPanel');
if(!fab)return;
if(!window.__axIconPatched){
  window.__axIconPatched=true;
  function axIconURL(){
    if(axIconURL._c)return axIconURL._c;
    var c=document.createElement('canvas');c.width=c.height=192;var g=c.getContext('2d');
    var grad=g.createLinearGradient(0,0,192,192);grad.addColorStop(0,'#12203a');grad.addColorStop(1,'#0a1020');
    g.fillStyle=grad;g.fillRect(0,0,192,192);
    g.shadowColor='#2b7dff';g.shadowBlur=30;g.fillStyle='#3b8bff';
    g.font='900 120px "Segoe UI",sans-serif';g.textAlign='center';g.textBaseline='middle';
    g.fillText('A',96,104);
    g.shadowBlur=0;var g2=g.createLinearGradient(0,0,192,0);g2.addColorStop(0,'#7bb5ff');g2.addColorStop(1,'#00c2d6);
    g.strokeStyle=g2;g.lineWidth=8;g.strokeRect(4,4,184,184);
    axIconURL._c=c.toDataURL('image/png');return axIconURL._c;
  }
  if(window.ServiceWorkerRegistration&&ServiceWorkerRegistration.prototype.showNotification){
    var orig=ServiceWorkerRegistration.prototype.showNotification;
    ServiceWorkerRegistration.prototype.showNotification=function(t,o){
      o=o||{};if(!o.icon){try{o.icon=axIconURL();o.badge=axIconURL()}catch(e){}}
      return orig.call(this,t,o);
    };
  }
}
if(!document.querySelector('style[data-axup]')){
  var s=document.createElement('style');s.setAttribute('data-axup','1');
  s.textContent='#axToast{padding:14px 16px;border-radius:22px;background:linear-gradient(160deg,rgba(20,30,50,.96),rgba(10,16,28,.96));border:1px solid rgba(43,125,255,.45);box-shadow:0 24px 60px rgba(0,0,0,.65),0 0 44px rgba(43,125,255,.22),inset 0 1px 0 rgba(255,255,255,.08)}#axToast.show{animation:axToastIn2 .55s cubic-bezier(.34,1.56,.64,1)}#axToast.hide{animation:axToastOut2 .35s ease forwards}@keyframes axToastIn2{from{opacity:0;transform:translate(-50%,-110px) scale(.85) rotate(-3deg)}to{opacity:1;transform:translate(-50%,0) scale(1) rotate(0)}}@keyframes axToastOut2{to{opacity:0;transform:translate(-50%,-110px) scale(.9)}}#axToast .ic{width:48px;height:48px;border-radius:16px;position:relative;background:radial-gradient(120% 120% at 30% 20%,#3b8bff,#1656c9 60%,#00c2d6);box-shadow:0 8px 20px rgba(43,125,255,.5),0 0 18px rgba(0,194,214,.35);font-size:1.45rem}.axRing{position:absolute;inset:-5px;border-radius:18px;border:2px solid transparent;border-top-color:rgba(0,194,214,.95);border-right-color:rgba(43,125,255,.65);animation:axSpin 2.6s linear infinite;pointer-events:none}@keyframes axSpin{to{transform:rotate(360deg)}}.axSpark{position:absolute;width:6px;height:6px;border-radius:50%;background:#7bb5ff;box-shadow:0 0 10px #7bb5ff;opacity:0;pointer-events:none}.s1{top:8px;left:16px}.s2{bottom:10px;left:44px}#axToast.show .s1{animation:axFly 1.1s .15s ease-out both}#axToast.show .s2{animation:axFly 1.3s .45s ease-out both;background:#00c2d6;box-shadow:0 0 10px #00c2d6}@keyframes axFly{0%{opacity:0;transform:translate(0,0) scale(.4)}30%{opacity:1}100%{opacity:0;transform:translate(48px,-28px) scale(1.3)}}#axToast .t{font-size:.84rem;letter-spacing:.3px}#axToast .bar{height:4px;border-radius:999px;background:linear-gradient(90deg,#2b7dff,#00c2d6,#7bb5ff,#2b7dff);background-size:300% 100%;animation:axToastBar 5s linear forwards,axShimmer 1.8s linear infinite}@keyframes axShimmer{to{background-position:-300% 0}}@keyframes axIconPop{from{transform:scale(.3) rotate(-20deg);opacity:0}60%{transform:scale(1.12) rotate(4deg)}to{transform:scale(1);opacity:1}}@keyframes axTextIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}.axn-item{position:relative;overflow:hidden}.axn-item::before{content:"";position:absolute;left:0;top:12px;bottom:12px;width:3px;border-radius:999px;background:linear-gradient(180deg,#2b7dff,#00c2d6);box-shadow:0 0 10px rgba(43,125,255,.7)}.axn-item:first-child{box-shadow:0 0 26px rgba(43,125,255,.14),inset 0 1px 0 rgba(255,255,255,.06)}.axn-item .d{display:flex;align-items:center;gap:6px}.axn-item .d::before{content:"";width:5px;height:5px;border-radius:50%;background:#3fd67a;box-shadow:0 0 8px #3fd67a}';
  document.head.appendChild(s);
}
var toast=document.getElementById('axToast');
if(toast){
  if(!toast.querySelector('.axSpark'))toast.insertAdjacentHTML('afterbegin','<span class="axSpark s1"></span><span class="axSpark s2"></span>');
  var ic0=toast.querySelector('.ic');
  if(ic0&&!ic0.querySelector('.axRing'))ic0.insertAdjacentHTML('beforeend','<span class="axRing"></span>');
  if(!window.__axToastAnim){
    window.__axToastAnim=true;
    new MutationObserver(function(){
      if(!toast.classList.contains('show'))return;
      var ic=toast.querySelector('.ic');
      if(ic){ic.style.animation='none';void ic.offsetWidth;ic.style.animation='axIconPop .6s .05s cubic-bezier(.34,1.56,.64,1) both';}
      toast.querySelectorAll('.t,.b').forEach(function(el,i){el.style.animation='none';void el.offsetWidth;el.style.animation='axTextIn .5s '+(0.1+i*0.1)+'s cubic-bezier(.34,1.56,.64,1) both';});
    }).observe(toast,{attributes:true,attributeFilter:['class']});
  }
}
function granted2(){return ('Notification' in window)&&Notification.permission==='granted'}
var heroEl=null;
function isHero(){
  if(heroEl&&heroEl.isConnected&&heroEl.offsetParent)return true;
  var leaves=document.querySelectorAll('div,span,p,h1,h2,h3,b');
  for(var i=0;i<leaves.length;i++){
    var el=leaves[i];
    if(el.childElementCount===0&&el.offsetParent){
      var t=(el.textContent||'').toUpperCase();
      if(t.indexOf('AI-POWERED')>-1||t.indexOf('GROW WITH AXIUM')>-1){heroEl=el;return true;}
    }
  }
  return false;
}
setInterval(function(){
  var show=!granted2()||isHero();
  fab.style.display=show?'flex':'none';
  if(!show&&panel)panel.classList.remove('open');
},700);
})();
/* ===== AXIUM PATCH 3: TITLE FIX ===== */
(function(){
if(window.__axTitlePatched)return;window.__axTitlePatched=true;
if(window.ServiceWorkerRegistration&&ServiceWorkerRegistration.prototype.showNotification){
  var orig=ServiceWorkerRegistration.prototype.showNotification;
  ServiceWorkerRegistration.prototype.showNotification=function(t,o){
    o=o||{};
    var nb=(t&&String(t)!=='AXIUM'?t+' · ':'')+(o.body||'');
    return orig.call(this,'AXIUM',{body:nb,icon:o.icon,badge:o.badge,tag:o.tag||'axn'});
  };
}
})();
/* ===== AXIUM PATCH 4: HERO VISIBILITY FIX ===== */
(function(){
if(window.__axHeroFix)return;window.__axHeroFix=true;
function ensureMarker(){
  var hero=document.getElementById('hero');
  if(!hero)return null;
  var mk=hero.querySelector('#axHeroMark');
  if(!mk){
    mk=document.createElement('span');
    mk.id='axHeroMark';
    mk.textContent='AI-POWERED';
    mk.style.cssText='position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;';
    hero.appendChild(mk);
  }
  return mk;
}
var mk=ensureMarker();
setInterval(function(){
  mk=ensureMarker();if(!mk)return;
  var d=document.getElementById('dashboard');
  var dashVis=false;
  if(d){
    var r=d.getBoundingClientRect();
    var cs=getComputedStyle(d);
    dashVis=r.height>0&&cs.display!=='none'&&cs.visibility!=='hidden'&&+cs.opacity>0.05;
  }
  mk.style.display=dashVis?'none':'block';
},400);
})();
/* ===== AXIUM PATCH 5: VISIBILITY COMMANDER ===== */
(function(){
if(window.__axVis5)return;window.__axVis5=true;
function dashVisible(){
  var d=document.getElementById('dashboard');
  if(!d)return false;
  var r=d.getBoundingClientRect();
  var cs=getComputedStyle(d);
  return r.height>0&&cs.display!=='none'&&cs.visibility!=='hidden'&&+cs.opacity>0.05;
}
function shouldShow(){
  var g=('Notification' in window)&&Notification.permission==='granted';
  if(!g)return true;
  return !dashVisible();
}
var fab=document.getElementById('axFab');
if(!fab)return;
function apply(){
  var want=shouldShow()?'flex':'none';
  if(fab.style.display!==want)fab.style.display=want;
}
new MutationObserver(function(){apply();}).observe(fab,{attributes:true,attributeFilter:['style']});
setInterval(apply,500);
apply();
})();
