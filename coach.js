/* AXIUM Smart Coach — MINIMAL SAFE v5 */
(function(){
if(window.__axMini5)return;window.__axMini5=true;
function boot(){
 if(!document.body){setTimeout(boot,200);return;}
 if(document.getElementById('axFab'))return;
 var KEY='axNotifyV7',st;
 try{st=JSON.parse(localStorage.getItem(KEY))}catch(e){}
 if(!st)st={list:[],unread:0,rems:[],coachOn:true};
 function save(){try{localStorage.setItem(KEY,JSON.stringify(st))}catch(e){}}
 if(!document.querySelector('link[rel="manifest"]')){
  var ml=document.createElement('link');ml.rel='manifest';ml.href='manifest.webmanifest';document.head.appendChild(ml);
 }
 var css='#axFab{position:fixed;right:16px;bottom:20px;z-index:99999;display:flex;align-items:center;gap:10px;padding:14px 20px;border-radius:999px;border:1px solid rgba(255,255,255,.25);background:linear-gradient(135deg,#2b7dff,#00c2d6);color:#fff;font-weight:800;font-size:.82rem;cursor:pointer;box-shadow:0 12px 32px rgba(43,125,255,.45)}#axFab .ic{font-size:1.25rem}#axFab.on{background:rgba(13,20,34,.9)}#axBadge{position:absolute;top:-6px;right:-4px;min-width:22px;height:22px;padding:0 6px;border-radius:999px;background:#ff2e5f;color:#fff;font-size:.68rem;font-weight:800;display:none;align-items:center;justify-content:center}#axPanel{position:fixed;right:14px;bottom:84px;z-index:99998;width:min(344px,calc(100vw - 28px));max-height:64vh;overflow-y:auto;background:rgba(13,20,34,.95);border:1px solid rgba(43,125,255,.35);border-radius:22px;padding:16px;display:none}#axPanel.open{display:block}.axn-h{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}.axn-h b{color:#eef2f7;font-weight:900}.axn-x{width:32px;height:32px;border-radius:10px;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.06);color:#9aa4b2;cursor:pointer}.axn-i{border:1px solid rgba(255,255,255,.08);background:rgba(43,125,255,.08);border-radius:14px;padding:10px 12px;margin-top:9px;color:#c5cfdb;font-size:.75rem}#axInstall{position:fixed;left:16px;bottom:20px;z-index:99999;display:none;align-items:center;gap:8px;padding:13px 18px;border-radius:999px;border:1px solid rgba(63,214,122,.5);background:linear-gradient(135deg,#123524,#0d2b1c);color:#7ae8b0;font-weight:800;font-size:.8rem;cursor:pointer;box-shadow:0 10px 26px rgba(63,214,122,.25)}#axSheet{position:fixed;inset:0;z-index:100000;background:rgba(5,8,13,.85);display:none;align-items:center;justify-content:center;padding:20px}#axSheet.open{display:flex}#axSheet .card{width:min(420px,94vw);max-height:86vh;overflow-y:auto;background:linear-gradient(170deg,#0e1626,#0a0f1a);border:1px solid rgba(63,214,122,.35);border-radius:26px;padding:24px;text-align:center;position:relative}#axSheet .axClose{position:sticky;top:6px;float:right;width:36px;height:36px;border-radius:12px;border:1px solid rgba(255,255,255,.15);background:rgba(13,20,34,.85);color:#9aa4b2;font-size:1rem;cursor:pointer;z-index:5}#axSheet img{width:84px;height:84px;border-radius:22px;margin:12px 0}#axSheet .nm{color:#eef2f7;font-weight:900;font-size:1.3rem;letter-spacing:2px}#axSheet .tg{color:#3fd67a;font-size:.7rem;font-weight:800;letter-spacing:2px;margin-top:4px}#axSheet .dlbox{margin-top:14px;background:rgba(22,199,132,.1);border:1px solid rgba(22,199,132,.35);border-radius:18px;padding:12px}#axSheet .dlbox b{font-size:1.5rem;color:#3fd67a;font-weight:900}#axSheet .dlbox span{display:block;color:#8a94a3;font-size:.6rem}#axSheet .ft{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:10px 12px;color:#c5cfdb;font-size:.78rem;margin-top:8px;text-align:left}#axSheet .ins{width:100%;margin-top:16px;padding:15px;border:none;border-radius:16px;background:linear-gradient(135deg,#16c784,#0fa06a);color:#fff;font-weight:900;font-size:.95rem;cursor:pointer}#axSheet .gd{display:none;color:#8a94a3;font-size:.72rem;line-height:1.9;margin-top:12px;background:rgba(43,125,255,.06);border:1px solid rgba(43,125,255,.25);border-radius:14px;padding:12px}#axSheet .no{width:100%;margin-top:10px;padding:12px;border:none;border-radius:14px;background:rgba(255,255,255,.06);color:#8a94a3;font-weight:700;cursor:pointer}';
 var sEl=document.createElement('style');sEl.textContent=css;document.head.appendChild(sEl);
 var wrap=document.createElement('div');
 wrap.innerHTML='<button id="axFab" type="button"><span class="ic">🔔</span><span id="axFabTxt">Enable smart alerts</span><span id="axBadge"></span></button><div id="axPanel"><div class="axn-h"><b>🧠 AXIUM COACH</b><button class="axn-x" id="axX" type="button">✕</button></div><div id="axList"></div></div><button id="axInstall" type="button">⬇ Install AXIUM</button><div id="axSheet"><div class="card"><button class="axClose" type="button">✕</button><img src="icon.svg" alt="AXIUM"><div class="nm">AXIUM</div><div class="tg">AI-POWERED PRODUCTIVITY</div><div class="dlbox"><b>50M+</b><span>TOTAL DOWNLOADS</span></div><div class="ft">🔔 Smart coach & notifications</div><div class="ft">📋 Tasks, calendar, notes</div><div class="ft">📊 Energy & streak stats</div><div class="ft">🌙 Works offline</div><button class="ins" id="axSheetInstall">⬇ INSTALL</button><div class="gd" id="axSheetGuide">1️⃣ Browser menu (⋮)<br>2️⃣ Add to Home screen<br>3️⃣ Confirm</div><button class="no" id="axSheetClose">Not now</button></div></div>';
 document.body.appendChild(wrap);
 var fab=document.getElementById('axFab'),panel=document.getElementById('axPanel'),badge=document.getElementById('axBadge'),listEl=document.getElementById('axList'),installBtn=document.getElementById('axInstall'),sheet=document.getElementById('axSheet');
 var deferred=null;
 window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();deferred=e;});
 window.addEventListener('appinstalled',function(){window.__axInstalled=true;sheet.classList.remove('open');installBtn.style.display='none';});
 function granted(){return ('Notification' in window)&&Notification.permission==='granted';}
 function axIconURL(){
  if(axIconURL._c)return axIconURL._c;
  var c=document.createElement('canvas');c.width=c.height=192;var g=c.getContext('2d');
  var grad=g.createLinearGradient(0,0,192,192);grad.addColorStop(0,'#12203a');grad.addColorStop(1,'#0a1020');
  g.fillStyle=grad;g.fillRect(0,0,192,192);
  g.fillStyle='#3b8bff';g.font='900 120px sans-serif';g.textAlign='center';g.textBaseline='middle';
  g.fillText('A',96,104);
  axIconURL._c=c.toDataURL('image/png');return axIconURL._c;
 }
 function label(){
  fab.classList.toggle('on',granted());
  document.getElementById('axFabTxt').textContent=granted()?'Smart Coach · on':'Enable smart alerts';
 }
 function sys(title,body){
  if(!granted())return;
  try{
   if(navigator.serviceWorker){navigator.serviceWorker.ready.then(function(reg){reg.showNotification('AXIUM',{body:title+' · '+body,icon:axIconURL(),tag:'axn'});}).catch(function(){});}
   else{new Notification('AXIUM',{body:title+' · '+body,icon:axIconURL()});}
  }catch(e){}
 }
 function render(){
  badge.style.display=st.unread>0?'flex':'none';
  badge.textContent=st.unread>9?'9+':st.unread;
  if(!st.list.length){listEl.innerHTML='<div class="axn-i">No notifications yet 🤫</div>';return;}
  listEl.innerHTML=st.list.slice(0,20).map(function(n){return '<div class="axn-i">'+n.icon+' <b>'+n.title+'</b><br>'+n.body+'</div>';}).join('');
 }
 function push(icon,title,body){
  st.list.unshift({icon:icon,title:title,body:body,t:Date.now()});
  if(st.list.length>50)st.list.length=50;
  st.unread++;save();render();sys(title,body);
 }
 function heroOn(){
  var h=document.getElementById('hero');if(!h)return false;
  if(h.style.display==='none'||h.classList.contains('hidden'))return false;
  var d=document.getElementById('dashboard');if(d&&d.classList.contains('active'))return false;
  return h.getBoundingClientRect().height>0;
 }
 setInterval(function(){
  var show=!granted()||heroOn();
  fab.style.display=show?'flex':'none';
  if(!show&&panel.classList.contains('open'))panel.classList.remove('open');
  if(!window.__axInstalled&&!heroOn()&&granted())installBtn.style.display='none';
  else if(!window.__axInstalled&&!standalone())installBtn.style.display='flex';
 },600);
 function standalone(){return (window.matchMedia&&window.matchMedia('(display-mode: standalone)').matches)||navigator.standalone===true;}
 fab.onclick=function(){
  if(!granted()){
   if(!('Notification' in window))return;
   Notification.requestPermission(function(p){label();if(p==='granted')push('🔔','Enabled','AXIUM can now notify you.');});
   return;
  }
  panel.classList.toggle('open');
  if(panel.classList.contains('open')){st.unread=0;save();render();}
 };
 document.getElementById('axX').onclick=function(){panel.classList.remove('open');};
 document.addEventListener('click',function(e){
  if(panel.classList.contains('open')&&!panel.contains(e.target)&&!e.target.closest('#axFab'))panel.classList.remove('open');
 });
 installBtn.onclick=function(){sheet.classList.add('open');};
 sheet.onclick=function(e){if(e.target===sheet)sheet.classList.remove('open');};
 document.getElementById('axSheetClose').onclick=function(){sheet.classList.remove('open');};
 document.querySelector('.axClose').onclick=function(){sheet.classList.remove('open');};
 document.getElementById('axSheetInstall').onclick=function(){
  if(deferred){
   deferred.prompt();
   deferred.userChoice.then(function(r){
    if(r&&r.outcome==='accepted'){sheet.classList.remove('open');installBtn.style.display='none';}
    else{document.getElementById('axSheetGuide').style.display='block';}
   });
   deferred=null;
  }else{
   document.getElementById('axSheetGuide').style.display='block';
  }
 };
 var POOLS=['💧 Hydration check!','🎯 Focus time!','🧘 Quick stretch!','📈 Progress check!','☕ Micro-break earned!','🌬 Breathe with me?'];
 var TITLES=['AXIUM here 👋','Quick check-in 💙','Hey, it\'s me again 🔔'];
 var coachIdx=0,lastCoach=Date.now();
 setInterval(function(){
  if(!st.coachOn)return;
  if(Date.now()-lastCoach>=20*60000){
   push('🧠',TITLES[coachIdx%TITLES.length],POOLS[coachIdx%POOLS.length]);
   coachIdx++;lastCoach=Date.now();
  }
 },15000);
 label();render();
}
boot();
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
