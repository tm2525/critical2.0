/* Cardiac Critical Care Suite — offline cache. Bump CACHE on each deploy (deploy.sh does this). */
const CACHE = 'ccc-20261024223927';
const ASSETS = ['./', './index.html', './flashcards.html', './manifest.json', './apple-touch-icon.png', './icon-192.png', './icon-512.png'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
/* network-first for pages (so an update shows as soon as you are online), cache fallback when offline */
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).then((r) => { const copy = r.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)); return r; })
    .catch(() => caches.match(e.request).then((m) => m || caches.match('./index.html'))));
});
