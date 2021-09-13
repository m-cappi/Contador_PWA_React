/** @format */

//console.log('registrado')
const CACHE_ELEMENTS = [
    "./",
    "https://unpkg.com/react@17/umd/react.production.min.js",
    "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js",
    "https://unpkg.com/@babel/standalone/babel.min.js",
    "./style.css",
    "./components/Contador.js",
    "./index.js",
];

const CACHE_NAME = "v4_cache_contador_react";

//const self = this

self.addEventListener("install", (event) => {
    //console.log(event)
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            cache
                .addAll(CACHE_ELEMENTS)
                .then(() => {
                    self.skipWaiting();
                })
                .catch(console.log);
        }) //promise
    );
});

self.addEventListener("activate", (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches
            .keys()
            .then((cacheNames) => {
                //console.log(cacheNames);
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        return (
                            cacheWhitelist.indexOf(cacheName) === -1 &&
                            caches.delete(cacheName)
                        );
                    })
                );
            })
            .then(() => {
                self.clients.claim();
            })
    );
});

self.addEventListener("fetch", (event) => {
    //console.log(event)
    //console.log(event.request)
    event.respondWith(
        caches.match(event.request).then((res) => {
            //console.log(res);
            return (res ? res : fetch(event.request))
            // if (res){
            //     return res
            // }
            // return fetch(event.request)
        })
    );
});
