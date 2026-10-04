// NovelPal's own files, kept for offline use (GitHub's API always goes to the network).
const CACHE = 'novelpal-a8acf9217d21'
const FILES = ["./","./index.html","./assets/index-CqCItzfT.js","./assets/index-MtEb_HC-.css","./assets/inter-cyrillic-ext-wght-normal-BOeWTOD4.woff2","./assets/inter-cyrillic-wght-normal-DqGufNeO.woff2","./assets/inter-greek-ext-wght-normal-DlzME5K_.woff2","./assets/inter-greek-wght-normal-CkhJZR-_.woff2","./assets/inter-latin-ext-wght-normal-DO1Apj_S.woff2","./assets/inter-latin-wght-normal-Dx4kXJAl.woff2","./assets/inter-vietnamese-wght-normal-CBcvBZtf.woff2","./assets/source-serif-4-cyrillic-ext-opsz-italic-Bl6DJqma.woff2","./assets/source-serif-4-cyrillic-ext-opsz-normal-DIwfbPUE.woff2","./assets/source-serif-4-cyrillic-opsz-italic-Dibx14aP.woff2","./assets/source-serif-4-cyrillic-opsz-normal-C0olyEE-.woff2","./assets/source-serif-4-greek-opsz-italic-CMW9dfKg.woff2","./assets/source-serif-4-greek-opsz-normal-DrHU7SY7.woff2","./assets/source-serif-4-latin-ext-opsz-italic-BhUEwDRF.woff2","./assets/source-serif-4-latin-ext-opsz-normal-HoL-AExg.woff2","./assets/source-serif-4-latin-opsz-italic-BOLXpvkj.woff2","./assets/source-serif-4-latin-opsz-normal-BpEBLj1O.woff2","./assets/source-serif-4-vietnamese-opsz-italic-C-k5pZlm.woff2","./assets/source-serif-4-vietnamese-opsz-normal-BOyYyU_V.woff2","./manifest.webmanifest","./icon-192.png","./icon-512.png"]
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FILES)))
  self.skipWaiting()
})
self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))))
  self.clients.claim()
})
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url)
  if (event.request.method !== 'GET' || url.origin !== self.location.origin) return
  event.respondWith(caches.match(event.request, { ignoreSearch: true }).then((hit) => hit || fetch(event.request)))
})
