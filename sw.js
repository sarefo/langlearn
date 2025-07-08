const CACHE_NAME = 'langlearn-v1';
const STATIC_CACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './favicon.svg',
  // CSS files
  './css/main.css',
  './css/base.css',
  './css/buttons.css',
  './css/dark-mode.css',
  './css/dashboard.css',
  './css/exercise.css',
  './css/help-dialog.css',
  './css/options.css',
  './css/responsive.css',
  './css/result.css',
  './css/tense-selector.css',
  './css/variables.css',
  // JavaScript files
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
  './data/exercises/subjuntivo.js'
];

// Install event - cache static resources
self.addEventListener('install', event => {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_CACHE_URLS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - cleanup old caches
self.addEventListener('activate', event => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Return cached version if available
        if (cachedResponse) {
          console.log('[SW] Serving from cache:', event.request.url);
          return cachedResponse;
        }

        // Otherwise fetch from network
        console.log('[SW] Fetching from network:', event.request.url);
        return fetch(event.request)
          .then(response => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response for caching
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          });
      })
      .catch(() => {
        // If both cache and network fail, return a basic offline page
        if (event.request.destination === 'document') {
          return caches.match('./index.html');
        }
      })
  );
});