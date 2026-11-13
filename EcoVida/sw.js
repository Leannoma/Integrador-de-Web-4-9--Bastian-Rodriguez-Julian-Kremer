self.addEventListener("install", (event) => {
event.waitUntil(
caches.open("ecovida-cache-v1").then((cache) => {
return cache.addAll([
"./index.html",
"./estilos.css",
"./imagenes/consejo1.webp",
"./imagenes/consejo2.webp"
]);
})
);
});

self.addEventListener("fetch", (event) => {
event.respondWith(
caches.match(event.request).then((response) => {
return response || fetch(event.request);
})
);
});