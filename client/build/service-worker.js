"use strict";var precacheConfig=[["/lauranmontoya.com/index.html","20c4f6a30624953cbb0314793b7c3993"],["/lauranmontoya.com/static/css/main.7ccd2b1e.css","806f667022a1bb3574fa5b089a898221"],["/lauranmontoya.com/static/js/main.ce4cb9cd.js","60889ab71c8d5468ff492b65382ab972"],["/lauranmontoya.com/static/media/AIFF.c011feed.png","c011feeda7f0e3d595c8658ec4c4a978"],["/lauranmontoya.com/static/media/LXAI.9a282edb.jpg","9a282edb6fee4cca6978492f381bf3a6"],["/lauranmontoya.com/static/media/Montserrat-Regular.91696e09.otf","91696e0984cfab74ff344325e5015da5"],["/lauranmontoya.com/static/media/Roboto-Bold.c0f1e4a4.woff2","c0f1e4a4fdfb8048c72e86aadb2a247d"],["/lauranmontoya.com/static/media/Roboto-Bold.eed9aab5.woff","eed9aab5449cc9c8430d7d258108f602"],["/lauranmontoya.com/static/media/Roboto-Light.3c37aa69.woff2","3c37aa69cd77e6a53a067170fa8fe2e9"],["/lauranmontoya.com/static/media/Roboto-Light.ea36cd9a.woff","ea36cd9a0e9eee97012a67b8a4570d7b"],["/lauranmontoya.com/static/media/Roboto-Medium.1561b424.woff2","1561b424aaef2f704bbd89155b3ce514"],["/lauranmontoya.com/static/media/Roboto-Medium.cf4d60bc.woff","cf4d60bc0b1d4b2314085919a00e1724"],["/lauranmontoya.com/static/media/Roboto-Regular.3cf6adf6.woff","3cf6adf61054c328b1b0ddcd8f9ce24d"],["/lauranmontoya.com/static/media/Roboto-Regular.5136cbe6.woff2","5136cbe62a63604402f2fedb97f246f8"],["/lauranmontoya.com/static/media/Roboto-Thin.1f35e6a1.woff2","1f35e6a11d27d2e10d28946d42332dc5"],["/lauranmontoya.com/static/media/Roboto-Thin.44b78f14.woff","44b78f142603eb69f593ed4002ed7a4a"],["/lauranmontoya.com/static/media/accelai.dfd8a656.png","dfd8a656646f218cb811b89d2a02f27a"],["/lauranmontoya.com/static/media/blue-apron.87f36b46.png","87f36b466449508f17816529350c01f9"],["/lauranmontoya.com/static/media/coding.a4eb5f27.png","a4eb5f270b4610dd48b43684e5c195a6"],["/lauranmontoya.com/static/media/cycle.ab8670b8.jpeg","ab8670b804eed4b56b8dbe0bf8ee3fc7"],["/lauranmontoya.com/static/media/diamond.36f915f2.png","36f915f25328d7f0ed02f212bd6e51ed"],["/lauranmontoya.com/static/media/digital.bc445da7.png","bc445da70f400701f298fd4a739a9f75"],["/lauranmontoya.com/static/media/ethics-ai.d95323b5.png","d95323b536f353513d8cc10a1673307f"],["/lauranmontoya.com/static/media/facebook.892b3f33.png","892b3f33789a99517849e9373b4761b6"],["/lauranmontoya.com/static/media/futuristic.07508d14.png","07508d1443f4211c30370d5954edf983"],["/lauranmontoya.com/static/media/github.b6ec19ce.png","b6ec19ceacb23390aa66d2f101d0ddf6"],["/lauranmontoya.com/static/media/hologram.e9fb45f6.png","e9fb45f66669e37d46b820983e853260"],["/lauranmontoya.com/static/media/javascript.6a4c201c.png","6a4c201cef84c174d0d93923f26b168c"],["/lauranmontoya.com/static/media/linkedin.589922e1.png","589922e187ab719d0afa9c4c2993019b"],["/lauranmontoya.com/static/media/lnm-headshot.3649b7b9.jpg","3649b7b90c45c9062bc1fa002c282fdb"],["/lauranmontoya.com/static/media/medium.1765dd73.png","1765dd735c778ed177846440805b9dfd"],["/lauranmontoya.com/static/media/microphone.251ecbf2.png","251ecbf2d775ca74ead7aac41ee0ced9"],["/lauranmontoya.com/static/media/nest.e7f2a35f.jpeg","e7f2a35fdb89d3f1fcfec2b5e2e592a7"],["/lauranmontoya.com/static/media/python.6dd7bc34.png","6dd7bc34be27074a7e889b7dba23247e"],["/lauranmontoya.com/static/media/twitter.11aaddbc.png","11aaddbcfc7f2aa467c309af3392c2d1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(a,e){var t=new URL(a);return"/"===t.pathname.slice(-1)&&(t.pathname+=e),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(a,e,t,n){var c=new URL(a);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(e)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(a,e){if(0===a.length)return!0;var t=new URL(e).pathname;return a.some(function(a){return t.match(a)})},stripIgnoredUrlParameters=function(a,t){var e=new URL(a);return e.hash="",e.search=e.search.slice(1).split("&").map(function(a){return a.split("=")}).filter(function(e){return t.every(function(a){return!a.test(e[0])})}).map(function(a){return a.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(a){var e=a[0],t=a[1],n=new URL(e,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(a){return a.keys().then(function(a){return a.map(function(a){return a.url})}).then(function(a){return new Set(a)})}self.addEventListener("install",function(a){a.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(e){if(!t.has(e)){var a=new Request(e,{credentials:"same-origin"});return fetch(a).then(function(a){if(!a.ok)throw new Error("Request for "+e+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return n.put(e,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(a){var t=new Set(urlsToCacheKeys.values());a.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),a=urlsToCacheKeys.has(t));var c="/lauranmontoya.com/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(c,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(a){return a.match(urlsToCacheKeys.get(t)).then(function(a){if(a)return a;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});