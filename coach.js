/* AXIUM Coach — MINIMAL ROBUST */
(function(){
if(window.__axMini)return;window.__axMini=true;
function boot(){
  if(!document.body){setTimeout(boot,200);return;}
  if(document.getElementById('axFab'))return;
  var st=document.createElement('style');
  st.textContent='#axFab{position:fixed;right:16px;bottom:20px;z-index:99999;display:flex;align-items:center;gap:10px;padding:14px 20px;border-radius:999px;border:1px solid rgba(255,255,255,.25);background:linear-gradient(135deg,#2b7dff,#00c2d6);color:#fff;font-weight:800;font-size:.82rem;cursor:pointer;box-shadow:0 12px 32px rgba(43,125,255,.45)}#axPanel{position:fixed;right:14px;bottom:84px;z-index:99998;width:min(340px,calc(100vw - 28px));max-height:60vh;overflow-y:auto;background:rgba(13,20,34,.95);border:1px solid rgba(43,125,255,.35);border-radius:20px;padding:16px;display:none}#axPanel.open{display:block}#axToast{position:fixed;top:12px;left:50%;transform:translateX(-50%);z-index:99999;width:min(380px,calc(100vw - 20px));display:none;align-items:center;gap:12px;padding:14px;border-radius:18px;border:1px solid rgba(43,125,255,.45);background:rgba(15,22,38,.97);box-shadow:0 18px 44px rgba(0,0,0,.6);cursor:pointer}#axToast.show{display:flex}.axn-h{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;color:#eef2f7;font-weight:800;font-size:.9rem}.axn-x{background:rgba(255,255,255,.08);border:none;color:#9aa4b2;width:32px;height:32px;border-radius:10px;cursor:pointer}.axn-b{width:100%;margin-top:8px;padding:12px;border:none;border-radius:12px;background:linear-gradient(135deg,#2b7dff,#1a6ae0);color:#fff;font-weight:800;cursor:pointer}.axn-i{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:10px;margin-top:8px;color:#c5cfdb;font-size:.75rem;line-height:1.5}';
  document.head.appendChild(st);
  var wrap=document.createElement('div');
  wrap.innerHTML='<button id="axFab" type="button">🔔 <span id="axFabTxt">Enable smart alerts ✨</span></button><div id="axPanel"><div class="axn-h"><span>🧠 AXIUM SMART COACH</span><button class="axn-x" id="axX" type="button">✕</button></div><button class="axn-b" id="axCoach" type="button">⚡ Coach now</button><button class="axn-b" id="axTest" type="button">⏰ Test reminder (1 min)</button><div id="axList"></div></div><div id="axToast"><span id="axTIc" style="font-size:1.4rem">🧠</span><div><div id="axTT" style="color:#eef2f7;font-weight:800;font-size:.82rem"></div><div id="axTB" style="color:#9aa4b2;font-size:.72rem;margin-top:2px"></div></div></div>';
  document.body.appendChild(wrap);
  var fab=document.getElementById('axFab'),panel=document.getElementById('axPanel'),toastEl=document.getElementById('axToast'),list=document.getElementById('axList'),timer=null,items=[];
  function granted(){return ('Notification' in window)&&Notification.permission==='granted';}
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
  function label(){document.getElementById('axFabTxt').textContent=granted()?'Smart Coach · on':'Enable smart alerts ✨';}
  label();
  function sys(title,body){
    if(!granted())return;
    try{new Notification('AXIUM',{body:title+' · '+body,icon:axIconURL(),badge:axIconURL()});}catch(e){}
  }
  function show(icon,title,body){
    document.getElementById('axTIc').textContent=icon;
    document.getElementById('axTT').textContent=title;
    document.getElementById('axTB').textContent=body;
    toastEl.classList.add('show');
    clearTimeout(timer);timer=setTimeout(function(){toastEl.classList.remove('show');},5000);
    items.unshift(icon+' '+title+' — '+body);
    if(items.length>10)items.length=10;
    list.innerHTML=items.map(function(x){return '<div class="axn-i">'+x+'</div>';}).join('');
  }
  toastEl.onclick=function(){toastEl.classList.remove('show');};
  fab.onclick=function(){
    if(!granted()){
      if(!('Notification' in window)){show('⚠️','Not supported','This browser has no Notification API.');return;}
      var doneCb=false;
      function cb(p){if(doneCb)return;doneCb=true;label();if(p==='granted')show('🔔','Enabled','AXIUM can now notify you like a real app.');else show('🚫','Denied','Enable it later from browser settings.');}
      try{var pr=Notification.requestPermission(function(p){cb(p);});if(pr&&pr.then)pr.then(cb);}catch(e){cb(Notification.permission);}
      return;
    }
    panel.classList.toggle('open');
  };
  document.getElementById('axX').onclick=function(){panel.classList.remove('open');};
  document.getElementById('axCoach').onclick=function(){
    show('🧠','AXIUM here 👋','Hydration check! When was your last glass of water? 💧');
    sys('AXIUM here 👋','Hydration check! When was your last glass of water? 💧');
  };
  document.getElementById('axTest').onclick=function(){
    show('⏰','Reminder set','Test reminder in 1 minute.');
    setTimeout(function(){show('⏰','Test reminder','It works! Your coach is alive. 🎉');sys('Test reminder','It works! Your coach is alive. 🎉');},60000);
  };
  if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('sw.js').catch(function(){});});}
}
boot();
})();
