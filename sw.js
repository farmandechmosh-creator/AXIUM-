self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('notificationclick', function(e){
  e.notification.close();
  e.waitUntil(self.clients.matchAll({type:'window', includeUncontrolled:true}).then(function(list){
    for(var i=0;i<list.length;i++){ if(list[i].focus){ list[i].focus(); return; } }
    if(self.clients.openWindow) return self.clients.openWindow('./');
  }));
});
