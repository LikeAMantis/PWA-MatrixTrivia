const repository = "PWA-MatrixTrivia";
var version = 1;

importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.routing.registerRoute(
    ({ request }) => request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

workbox.precaching.precacheAndRoute([
    { url: `/${repository}/index.html`, revision: `${version}` },
    { url: `/${repository}/app/index.js`, revision: `4` },
    { url: `/${repository}/app/questions.js`, revision: `3` },
    { url: `/${repository}/app/styles.css`, revision: `2` },
]);

workbox.recipes.offlineFallback({ pageFallback: `/${repository}/index.html` });