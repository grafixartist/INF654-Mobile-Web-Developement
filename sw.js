self.addEventListener("install", function (event) {
    //fires when the browser installs the app
    //here we're just logging the event and the contents of the object
    //passed to the event. The purpose of this event is to give the
    //service worker a place to setup the local environment after the installation completes.
    console.log('SW: Event fired: ${event.type}');
});

self.addEventListener("activate", function (event) {
    //fires after the service worker complets its installation.
    // It's a place for the service worker to clean up from previous service worker versions.
    console.log('SW: Event fired: ${event.type}');
});
