"use strict";var precacheConfig=[["/quotable/index.html","88f91d8b5f11db6bd83bdf20d5e4efa4"],["/quotable/static/css/main.705db3cd.css","c3b4906a33a029dd7acacc283477fa5a"],["/quotable/static/js/main.c91d025a.js","7282cfc770d2b57bd6778bbfead17a24"],["/quotable/static/media/adams.29824e45.jpg","29824e4538bd915675d7ef4037b9df9c"],["/quotable/static/media/annenberg.984d98d5.jpg","984d98d5e6e86855ada9ecd8ad4094bf"],["/quotable/static/media/arrow-down.7370d540.png","7370d54064844a644236f98ceabf7b04"],["/quotable/static/media/arrow-up.616bf368.png","616bf3687e9ec971ede21a9a4a81abe9"],["/quotable/static/media/camera_button.0d2cd857.png","0d2cd8574327f45eda44dc35c90f7579"],["/quotable/static/media/camerascreen.0f45e7d4.png","0f45e7d4a6c03465814c103a8ffc7a58"],["/quotable/static/media/checkmark.70947bdd.png","70947bdd31673ac78e7763e8b4743272"],["/quotable/static/media/emojidisplay.2d32e0b1.png","2d32e0b1b7af8d59367e4d1504929cb4"],["/quotable/static/media/emojiscreen.7f29c5d9.png","7f29c5d9f81d27f26d63465a08ea242a"],["/quotable/static/media/explorescreen.1c500912.png","1c5009122303e203ef732f5a11ebc9ad"],["/quotable/static/media/gate.3f6ec31f.jpg","3f6ec31fb2d45f92d521f5378c8ee264"],["/quotable/static/media/hall.b3cf9166.jpg","b3cf91664a93b8e4de56b5734e026a22"],["/quotable/static/media/home.19ed7c8b.png","19ed7c8b456956b57d48630777fa9198"],["/quotable/static/media/housing.3377e2ce.jpg","3377e2ce82b87d141e995fc6c0831e15"],["/quotable/static/media/housing2.bce1558a.jpg","bce1558a12579ae6be94c71b48fab458"],["/quotable/static/media/image-placeholder.891f8e8f.png","891f8e8fbd27b5f036faf2ec7d47b1c0"],["/quotable/static/media/logo.a60c9f75.png","a60c9f759358d554efbcf05c2da6ff41"],["/quotable/static/media/manny.bf2db861.jpg","bf2db8613db82706bf2b52914c0a0527"],["/quotable/static/media/matthews.17469092.jpeg","17469092f86d51f6a4ac325f2e55aeec"],["/quotable/static/media/profilescreen.fdd0c685.png","fdd0c685e4c94ce569a689b0f7a94b47"],["/quotable/static/media/quotescreen.45c43194.png","45c43194d4d4f827d91fb837268e692f"],["/quotable/static/media/square.262f58a9.jpg","262f58a99582a35d01af127e5b74a4da"],["/quotable/static/media/students.768f4702.jpg","768f4702406786dcb93a85b4cd98e86f"],["/quotable/static/media/tiger.7f575f01.png","7f575f01a0f12d56a47a8524a420aac3"],["/quotable/static/media/timescreen.b309ee6c.png","b309ee6ca34d0587501e56753dda4581"],["/quotable/static/media/visualization.97bcd34b.jpg","97bcd34badc12dde2f08887b9577c614"],["/quotable/static/media/yard.2042c05a.jpg","2042c05a53bdadb2572267073518d3b0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/quotable/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});