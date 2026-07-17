self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("atlas-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "explore.html",
        "icon_1784303433207.png"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
