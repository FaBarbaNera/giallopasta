// Cache a specific list of resources
self.addEventListener('install', (event) => {
  console.log('Service Worker Installed');
  event.waitUntil(
    caches.open('giallopasta-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/menu.html',
        '/recensioni.html',
        '/contatti.html',
        '/style.css',
        '/app.js',
        '/images/logo1.png',
        '/images/screenshot1.jpg',
        '/images/screenshot2.jpg'
      ]);
    })
  );
});

// Intercetta le richieste di rete e prova a servire dalla cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Se c'è una risposta nella cache, restituiscila; altrimenti, fai una richiesta di rete
      return cachedResponse || fetch(event.request);
    })
  );
});
