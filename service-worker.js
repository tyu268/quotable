"use strict";var precacheConfig=[["/quotable/index.html","0279bb89e566a852c04dcd344293982c"],["/quotable/static/css/main.63ca5ab2.css","7f788adff9fcaa4c0eb72394142e19a9"],["/quotable/static/js/main.ec31cf9a.js","99501030c381697dcf61424af03c0426"],["/quotable/static/media/adams.29824e45.jpg","29824e4538bd915675d7ef4037b9df9c"],["/quotable/static/media/annenberg.984d98d5.jpg","984d98d5e6e86855ada9ecd8ad4094bf"],["/quotable/static/media/camera_button.26c29fb3.png","26c29fb35efc1576470378e18c65ddf8"],["/quotable/static/media/camerascreen.f62ee277.png","f62ee277168b901f125c42ee44cd4053"],["/quotable/static/media/emojiscreen.465f87ce.png","465f87ce0f127f90a8e029363d4867c3"],["/quotable/static/media/explorescreen.f020a516.png","f020a5164877555de11c891b2cc6f5ce"],["/quotable/static/media/gate.3f6ec31f.jpg","3f6ec31fb2d45f92d521f5378c8ee264"],["/quotable/static/media/hall.f9b00837.jpg","f9b00837fc897488f6c54cad9d3a3b87"],["/quotable/static/media/home.15fc7065.png","15fc706547378b7dae2c2f4ee5a0bab4"],["/quotable/static/media/housing.b9f1152c.jpg","b9f1152c5c1399cd3e8ec4759fa345cf"],["/quotable/static/media/housing2.e7f3ac5e.jpg","e7f3ac5e19ec12c8b09e462efb3b0d58"],["/quotable/static/media/image-placeholder.891f8e8f.png","891f8e8fbd27b5f036faf2ec7d47b1c0"],["/quotable/static/media/logo.a60c9f75.png","a60c9f759358d554efbcf05c2da6ff41"],["/quotable/static/media/manny.bf2db861.jpg","bf2db8613db82706bf2b52914c0a0527"],["/quotable/static/media/matthews.8d7d3f25.jpeg","8d7d3f25f5cd475b1f3783e54bfe91b8"],["/quotable/static/media/profilescreen.07e3347c.png","07e3347cfa67606f4e38356710c19ead"],["/quotable/static/media/quotescreen.01205167.png","012051670a53f2052a7a95de7c6b40d6"],["/quotable/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/quotable/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/quotable/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/quotable/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"],["/quotable/static/media/square.ab0e0af5.jpg","ab0e0af5d8013ff9681d6a8231626eef"],["/quotable/static/media/starrynight.cfe6e256.png","cfe6e2560ecb30c5c0e61e0d5d1c9ff4"],["/quotable/static/media/students.768f4702.jpg","768f4702406786dcb93a85b4cd98e86f"],["/quotable/static/media/tiger.2d5c3852.png","2d5c38521530fe08e4232621f28f7b95"],["/quotable/static/media/timescreen.fa060960.png","fa060960310351ada66d0da00beb5631"],["/quotable/static/media/visualization.97bcd34b.jpg","97bcd34badc12dde2f08887b9577c614"],["/quotable/static/media/yard.2042c05a.jpg","2042c05a53bdadb2572267073518d3b0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var n="/quotable/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});