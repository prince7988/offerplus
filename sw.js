self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('offerplus').then((cache) => cache.addAll([
      'https://offerspuls.blogspot.com',
      
      
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
