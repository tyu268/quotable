"use strict";var precacheConfig=[["/quotable/index.html","4a5c8a012c8d6eee939f7ab6ed8eeec8"],["/quotable/static/css/main.75bbebec.css","0b48e710a9ed3d74d777e7314eea3880"],["/quotable/static/js/main.fa874b5a.js","f7eaff0333bcc1ab6dfcbcabd4953a55"],["/quotable/static/media/adams.29824e45.jpg","29824e4538bd915675d7ef4037b9df9c"],["/quotable/static/media/annenberg.984d98d5.jpg","984d98d5e6e86855ada9ecd8ad4094bf"],["/quotable/static/media/camera_button.26c29fb3.png","26c29fb35efc1576470378e18c65ddf8"],["/quotable/static/media/camerascreen.9d59ebe7.png","9d59ebe7fb847248049bab37d9be7aae"],["/quotable/static/media/emojidisplay.62a82f94.png","62a82f94d03ff3bbdc24b07e34f6cc21"],["/quotable/static/media/emojiscreen.81639b64.png","81639b64ac7eb9d5cc6bc8ece477db97"],["/quotable/static/media/explorescreen.a44bcb40.png","a44bcb409ef634a8012a417a1bb417c1"],["/quotable/static/media/gate.3f6ec31f.jpg","3f6ec31fb2d45f92d521f5378c8ee264"],["/quotable/static/media/hall.f9b00837.jpg","f9b00837fc897488f6c54cad9d3a3b87"],["/quotable/static/media/home.15fc7065.png","15fc706547378b7dae2c2f4ee5a0bab4"],["/quotable/static/media/housing.b9f1152c.jpg","b9f1152c5c1399cd3e8ec4759fa345cf"],["/quotable/static/media/housing2.e7f3ac5e.jpg","e7f3ac5e19ec12c8b09e462efb3b0d58"],["/quotable/static/media/image-placeholder.891f8e8f.png","891f8e8fbd27b5f036faf2ec7d47b1c0"],["/quotable/static/media/logo.a60c9f75.png","a60c9f759358d554efbcf05c2da6ff41"],["/quotable/static/media/manny.bf2db861.jpg","bf2db8613db82706bf2b52914c0a0527"],["/quotable/static/media/matthews.8d7d3f25.jpeg","8d7d3f25f5cd475b1f3783e54bfe91b8"],["/quotable/static/media/profilescreen.aeca9a9c.png","aeca9a9c0098c7882d74300b577c77ca"],["/quotable/static/media/quotescreen.ef2a2924.png","ef2a2924043271c870efadc60d0f3798"],["/quotable/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/quotable/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/quotable/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/quotable/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"],["/quotable/static/media/square.ab0e0af5.jpg","ab0e0af5d8013ff9681d6a8231626eef"],["/quotable/static/media/starrynight.cfe6e256.png","cfe6e2560ecb30c5c0e61e0d5d1c9ff4"],["/quotable/static/media/students.768f4702.jpg","768f4702406786dcb93a85b4cd98e86f"],["/quotable/static/media/tiger.2d5c3852.png","2d5c38521530fe08e4232621f28f7b95"],["/quotable/static/media/timescreen.40852660.png","408526602cde72fcce086446c01adb61"],["/quotable/static/media/visualization.97bcd34b.jpg","97bcd34badc12dde2f08887b9577c614"],["/quotable/static/media/yard.2042c05a.jpg","2042c05a53bdadb2572267073518d3b0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/quotable/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});