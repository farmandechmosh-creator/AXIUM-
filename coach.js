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
