self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("chess-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json"
      ]);
    })
  );
});