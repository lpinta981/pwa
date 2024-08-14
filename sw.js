self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('mi-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/manifest.json',
                'https://i.postimg.cc/Gpk4qZx4/LOGO-MANA-SAKILLA-3.png'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
