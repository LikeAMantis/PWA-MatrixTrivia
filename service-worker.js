importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.routing.registerRoute(
    ({ request }) => request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// precacheAndRoute([
//     {url: 'app/index.html', revision: '1' },
//     {url: 'app/index.js', revision: '1' },
//     {url: 'app/questions.js', revision: '1' },
//     {url: 'app/styles.css', revision: '1' },
//   ]);