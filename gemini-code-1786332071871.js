const CACHE_NAME = 'yoanns-bakery-v2';
const FILES_TO_CACHE = [
  './index.html',
  './manifest.json',
  './logo.jpg',
  './recettes.html',
  './pain_sans_gluten.html',
  './prix-de-revient.html',
  './commandes-demain.html'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
