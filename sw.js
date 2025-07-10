// Robust Service Worker - Network-first for HTML, cache-first for assets
const CACHE_NAME = 'langlearn-v1';
const STATIC_ASSETS = [
  // CSS files
  './css/main.css',
  './css/base.css',
  './css/buttons.css',
  './css/dashboard.css',
  './css/exercise.css',
  './css/options.css',
  './css/responsive.css',
  './css/result.css',
  './css/tense-selector.css',
  './css/variables.css',
  './css/help-dialog.css',
  './css/dark-mode.css',
  // JS files
  './js/app.js',
  './js/constants.js',
  './js/dom.js',
  './js/exercises.js',
  './js/game.js',
  './js/keyboard.js',
  './js/renderer.js',
  './js/state.js',
  './js/storage.js',
  './js/tenses.js',
  // Data files
  './data/explanations.js',
  './data/exercises/presente.js',
  './data/exercises/preterito.js',
  './data/exercises/imperfecto.js',
  './data/exercises/futuro.js',
  './data/exercises/condicional.js',
  './data/exercises/subjuntivo.js',
  // Other assets
  './favicon.svg',
  './manifest.json'
];

self.addEventListener('install', event => {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME && cacheName.startsWith('langlearn-')) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Only handle same-origin GET requests
  if (request.method !== 'GET' || url.origin !== location.origin) {
    return;
  }
  
  // Network-first for HTML pages (ensures updates work)
  if (request.destination === 'document' || url.pathname.endsWith('.html') || url.pathname.endsWith('/')) {
    event.respondWith(
      fetch(request)
        .then(response => {
          // Cache successful responses
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => cache.put(request, responseClone));
          }
          return response;
        })
        .catch(() => {
          // Network failed, try cache (offline fallback)
          return caches.match(request);
        })
    );
    return;
  }
  
  // Cache-first for static assets (favicon, manifest, etc.)
  if (request.destination === 'image' || url.pathname.endsWith('.svg') || url.pathname.endsWith('.ico') || url.pathname.endsWith('.png') || url.pathname.endsWith('manifest.json')) {
    event.respondWith(
      caches.match(request)
        .then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // Not in cache, fetch and cache
          return fetch(request)
            .then(response => {
              if (response.status === 200) {
                const responseClone = response.clone();
                caches.open(CACHE_NAME)
                  .then(cache => cache.put(request, responseClone));
              }
              return response;
            });
        })
    );
    return;
  }
  
  // Network-first for everything else (ensures updates, caches for offline)
  event.respondWith(
    fetch(request)
      .then(response => {
        // Cache successful responses
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => cache.put(request, responseClone));
        }
        return response;
      })
      .catch(() => {
        // Network failed, try cache (offline fallback)
        return caches.match(request)
          .then(cachedResponse => {
            return cachedResponse || new Response('Offline', { status: 503 });
          });
      })
  );
});