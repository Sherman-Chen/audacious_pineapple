self.addEventListener('install', function(event) {
  console.log('SW Installed');
  event.waitUntil(
    caches.open('static').then(function(cache) {
      cache.addAll([
        '/',
        '/index.html',
        '/index.js',
        '/styles.css',
        'https://meyerweb.com/eric/tools/css/reset/reset.css',
        'https://bootswatch.com/4/flatly/bootstrap.min.css'
      ]);
    })
  );
});

self.addEventListener('activate', function() {
  console.log('SW Activated');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(res) {
      if (res) {
        return res;
      } else {
        return fetch(event.request);
      }
    })
  );
});
