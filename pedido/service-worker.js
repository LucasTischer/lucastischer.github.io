const HOST='https://lucastischer.github.io/pedido'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register(`${HOST}/service-worker.js`) 
    .then(function () { console.log('Service Worker Registered'); });
}

var cacheName = 'produtos';
var filesToCache = [
  `${HOST}/imagens/icons/edit-256x256.png`,
  `${HOST}/imagens/icons/edit-128x128.png`,
  `${HOST}/imagens/icons/edit-144x144.png`,
  `${HOST}/imagens/icons/edit-152x152.png`,
  `${HOST}/imagens/icons/edit-192x192.png`,
  `${HOST}/lib/bulma.css`,
  `${HOST}/app.css`,
  `${HOST}/app.js`,
  `${HOST}/index.html`,
  `${HOST}/store.js`,
  `${HOST}/produtos.js`,
  `${HOST}/service-worker.js`,
  `${HOST}/manifest.json`
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(cacheName).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
