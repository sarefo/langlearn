// Auto-versioning: any change to this file triggers cache update
const CACHE_NAME = 'langlearn-cache';
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

// Activate event - refresh cache on service worker update
self.addEventListener('activate', event => {
  console.log('[SW] Activating new version...');
  event.waitUntil(
    // Clear all caches and rebuild fresh
    caches.keys()
      .then(cacheNames => {
        console.log('[SW] Clearing all caches for fresh update');
        return Promise.all(cacheNames.map(name => caches.delete(name)));
      })
      .then(() => {
        // Rebuild cache with fresh content
        console.log('[SW] Rebuilding cache with fresh content');
        return caches.open(CACHE_NAME);
      })
      .then(cache => {
        return cache.addAll(STATIC_CACHE_URLS);
      })
      .then(() => self.clients.claim())
      .then(() => {
        console.log('[SW] ✅ Fresh cache ready with updated content');
      })
  );
});

// Fetch event - cache first with background update
self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Background update: Always try to fetch fresh version
        const fetchPromise = fetch(event.request)
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
          })
          .catch(() => {
            // Network failed, but that's ok - we have cache
            console.log('[SW] Background update failed for:', event.request.url);
          });

        // Return cached version immediately (fast), update in background
        if (cachedResponse) {
          console.log('[SW] Serving from cache:', event.request.url);
          // Trigger background update but don't wait for it
          fetchPromise;
          return cachedResponse;
        }

        // No cached version, wait for network
        console.log('[SW] No cache, fetching from network:', event.request.url);
        return fetchPromise;
      })
      .catch(() => {
        // If both cache and network fail, return a basic offline page
        if (event.request.destination === 'document') {
          return caches.match('./index.html');
        }
      })
  );
});