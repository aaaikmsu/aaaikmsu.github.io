'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "adview.html": "cd483f16bd3bfaf894b5bce5c5096f19",
"version.json": "dc729e66f8de4ad4b534229fa6134efc",
"index.html": "4505a4da611d764e9d628e66803d293b",
"/": "4505a4da611d764e9d628e66803d293b",
"apple-touch-icon.png": "abfd154fc1d121c3ed498d55a25be455",
"main.dart.js": "f63f0d2147684830ae13ee4b12b4c571",
"favicon.png": "a1844019f479a18e8633086004c7becf",
"icons/Icon-192.png": "abfd154fc1d121c3ed498d55a25be455",
"icons/Icon-512.png": "88c1ae18061b874388cb6984c2f3da97",
"icons/219.png": "a1844019f479a18e8633086004c7becf",
"manifest.json": "47f2562f5f3eb69e8d03e4a9ef9dd573",
"credits.html": "723912b4301b95954df556b3d5731148",
"assets/AssetManifest.json": "4048d5327a83e04480964f3f052bb741",
"assets/NOTICES": "bc64b245b0d9b8f819afcbf0a5f074d4",
"assets/FontManifest.json": "c0c733f2f6e5d42904dbe1ead358f61c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/eva_icons_flutter/lib/fonts/evaicons.ttf": "b600c99b39c9837f405131463e91f61a",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/sinproject-nameless.png": "5e5010d235ab3ee2cfc66ebe0a228011",
"assets/assets/sounds/gameClear.mp3": "0a8f8021a779baa753eb55028b314674",
"assets/assets/sounds/incorrect.mp3": "128d7c3fda8719a1144ca02eae1ac636",
"assets/assets/sounds/correct.mp3": "327398cf406c26957d79628a73364758",
"assets/assets/sounds/main.mp3": "e48949cfa2e5002560ec3fcb7b573386",
"assets/assets/backgroundImage.png": "36b11b5e0237df23c518b6e5dedce0d6",
"assets/assets/logo.png": "a1844019f479a18e8633086004c7becf",
"assets/assets/animals/duck.jpg": "3ced9de9ad08a9fbf6da903bb2173ebb",
"assets/assets/animals/dog.jpg": "3f975d7042643fb1586f75406684fb99",
"assets/assets/animals/horse.jpg": "0d159f7a72b5f98f3374a8ba68db9f76",
"assets/assets/animals/rabbit.jpg": "24508c7f7922fda7d7900e0af1fbc6cb",
"assets/assets/animals/turtle.jpg": "3f7dfc467eef75a4b87c983fe67262b2",
"assets/assets/animals/rhinoceros.jpg": "31f3bfe6832b0e5e4ee47cfc40348ab1",
"assets/assets/animals/polar_bear.jpg": "9045cb9b193bcf810e1cb398985baff2",
"assets/assets/animals/deer.jpg": "20ae454e29ae991e75820dbbef769b30",
"assets/assets/animals/elephant.jpg": "201cd1a7bff00f7b63007cc09c0afc38",
"assets/assets/animals/lion.jpg": "52ff6bf8040c407d39f8765bc75f365b",
"assets/assets/animals/camel.jpg": "631441d094d8a55d7ef9f23587008f0a",
"assets/assets/animals/seagull.jpg": "855392d3daf736b9e3f6aff82df830dc",
"assets/assets/animals/flamingo.jpg": "e55aee8601ea428b7bba23b728bf2830",
"assets/assets/animals/zebra.jpg": "b5e362f4f1c561d5b9eaeff4f1e16c6b",
"assets/assets/animals/chicken.jpg": "2f54ba5ef8911a0b515eb2cd246e6158",
"assets/assets/animals/kangaroo.jpg": "e0df3750e5f943c72a3edf4be5c39519",
"assets/assets/animals/tiger.jpg": "1c38b1dbbb2bbc68453c90920ce327ad",
"assets/assets/animals/sheep.jpg": "04a42ab071de8e9e9db2dc7766024f17",
"assets/assets/animals/ostrich.jpg": "4d393d64aac43e5a29aff14cb07f4a89",
"assets/assets/animals/gorilla.jpg": "6d7cb3c18cff6d0b9189795595a96cf3",
"assets/assets/animals/cheetah.jpg": "0e0735b36fc0bd0701ce6dcc7bdef72d",
"assets/assets/animals/orca.jpg": "8ad64009160fac56ebe2575c66342fab",
"assets/assets/animals/donkey.jpg": "37f4f3e89ef18d40bdd55f65b2bbc9fc",
"assets/assets/animals/wolf.jpg": "df23f1f157d8f5bdf8c4e5a528772a58",
"assets/assets/animals/penguin.jpg": "cddde4ccb4fb060b129acddd68d42486",
"assets/assets/animals/squirrel.jpg": "5edf299ca01a5791c0dee48603ac0b05",
"assets/assets/animals/sloth.jpg": "0f5601197124a703d3ce6487a812a01a",
"assets/assets/animals/cat.jpg": "2585da9003b4e8ee0059e53558798606",
"assets/assets/animals/mole.jpg": "d7725763589ddff75f4f51f2132bf8bc",
"assets/assets/animals/hippopotamus.jpg": "d87dacf867aae8834a3385a0dd2fb33e",
"assets/assets/animals/monkey.jpg": "eb02a51bed5ac199dd5e12cdac2d03b3",
"assets/assets/animals/giant_panda.jpg": "107721a94e20764c91de98be2c9ebf6e",
"assets/assets/animals/seal.jpg": "b6842b63630f4d57472e882d2d5e9459",
"assets/assets/animals/giraffe.jpg": "3a6fdc22a784871a8916253f25ce78ad",
"assets/assets/animals/fox.jpg": "c9d320276015181b5684615ff6d4b672",
"assets/assets/animals/bongo.jpg": "94373af88e6097a94adba5767904d1b9",
"assets/assets/animals/otter.jpg": "1bcd6777a24257e8374ea6e90f4d675d",
"assets/assets/animals/koala.jpg": "d27a8fed90fd348d39e39294b1914bbf",
"assets/assets/animals/pig.jpg": "96d1808824080e9b7572d6487af52632",
"assets/assets/animals/llama.jpg": "95f4fd22e25768a69feb7c544cf8c08f",
"assets/assets/animals/walrus.jpg": "5265ff65ed2d08da0b2cafb90bc801f2",
"assets/assets/animals/kite.jpg": "3bfbcfce764944a5cb6502051c84bf67",
"assets/assets/animals/bear.jpg": "d445ec33ab0989e3dcb6a6af7d649432",
"assets/assets/animals/goat.jpg": "e79e9e723879a8915673f10e1a8ac20b",
"assets/assets/animals/crocodile.jpg": "9ce02b7fec3321a217ef29d9c2b72965",
"assets/assets/sinproject.png": "46da728a43b0616af5e3c6d56841cdd8",
"assets/assets/translations/ja.json": "9893a61835adeb283abc8bd25c428f75",
"assets/assets/translations/en.json": "c22e9df3b82e2e2e421ea2ac67ec6c1f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
