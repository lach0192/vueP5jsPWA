importScripts("/vueP5jsPWA/precache-manifest.7846c8b59638d201b8113e1a7aff09c1.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/* eslint-disable */
if (workbox) {
  console.log(`Workbox is loaded`)

  // workbox.precaching.precacheAndRoute(self.__precacheManifest);
  self.__precacheManifest = [].concat(self.__precacheManifest || [])
  workbox.precaching.suppressWarnings()
  workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

  // install new service worker when ok, then reload page
  self.addEventListener('message', msg => {
    if (msg.data.action == 'skipWaiting') {
      self.skipWaiting()
    }
  })
} else {
  console.log(`Workbox didn't load`)
}

