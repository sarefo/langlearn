// Service Worker Kill Switch - Unregisters itself and clears all caches
console.log('[SW] Kill switch activated');

self.addEventListener('install', event => {
  console.log('[SW] Kill switch installing');
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
  console.log('[SW] Kill switch activating');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      console.log('[SW] Clearing caches:', cacheNames);
      return Promise.all(
        cacheNames.filter(name => name.startsWith('langlearn'))
          .map(name => caches.delete(name))
      );
    }).then(() => {
      console.log('[SW] Caches cleared');
      return self.clients.claim();
    }).then(() => {
      return self.clients.matchAll();
    }).then(clients => {
      clients.forEach(client => {
        client.postMessage({ type: 'CLEAR_AND_RELOAD' });
      });
    })
  );
});

// Pass all requests through to network
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});