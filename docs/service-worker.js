importScripts("/precache-manifest.e3e0cece7f6d7292473d0433dca6016b.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

if (workbox) {
    console.log(`Workbox is loaded`);

    //workbox.precaching.precacheAndRoute(self.__precacheManifest);
    self.__precacheManifest = [].concat(self.__precacheManifest || []);
    workbox.precaching.suppressWarnings();
    workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

    // install new service worker when ok, then reload page
    self.addEventListener("message", msg=> {
        if(msg.data.action == 'skipWaiting') {
            self.skipWaiting();
        }
    });

} 
else {
    console.log(`Workbox didn't load`);
}
