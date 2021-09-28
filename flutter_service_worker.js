'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "ba0b18de8c49f3f6ee4bcf1b0d6d44a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "aa63209a1cd6f5a543850ba52c3da58b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d6ebe974cec917933ad0d91efca5fbe4",
".git/logs/refs/heads/master": "d6ebe974cec917933ad0d91efca5fbe4",
".git/logs/refs/remotes/origin/master": "c1faa652a4e8ac7d52fe53bbb700b9e1",
".git/objects/02/2835618160b964a3aefbc5ae590b192cf8c621": "401c89996e58659d1a528a960b9144ac",
".git/objects/06/4a6e370623c71bf90033fbf2ff0b5df9869f58": "08c15f6dfa27555adfe0e0a569cd3c10",
".git/objects/0a/9f1039debce1fbd0a548f006941de89ded1a8d": "f0bd678c5badccbdd41680db390b7778",
".git/objects/0c/ece65539bba3351f889e8b2b3e6c16886e7f51": "6da83af30d241c39205c22d1f168d743",
".git/objects/1b/8e2ca512aa0b6529ec3d39da8417b2b6712665": "6442e059a5689b6da75098727adfa776",
".git/objects/28/6f2ae1a2b53cdb83e19b9440e5450438da5c97": "dbfc0b7466aa9484634d20d83231aec6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/ff09ca920ee0ec1e30be8ad45c0df9e66ea5ed": "b85be2155c02bcf94d9584e491a6b17d",
".git/objects/46/46715304dc8d6d8cb36af73c9c7ef86b9ed264": "0ec287d8e4b50555e01287dc01be319e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4f/c0a08f228678893bdde674aa4b6c9580250a88": "50a814370bbe9696a4c913b52d630d46",
".git/objects/54/796d3b13e8acc50a53cd8f5855ab88f646316d": "ec6c80c9d4d688b571fedb4cf779176c",
".git/objects/54/ee60438aeaca712ed2cc8614278ef996386648": "680c22ea7aad6d63d023f06cb514cc6d",
".git/objects/5c/81277e7a09b3927756961ab0f5697ecdd5236e": "99f460f2a2543d54e2d31e96521aee4c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/2c0acf86b0b92de039d5445041a9a0f31e534e": "734ccd072d18edb16b3dd413c952bc99",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/a90d85b59f2b20db616b56fe81022f27aff0d3": "3651130c8f3a60e03102e8d0fcfe9071",
".git/objects/92/e3b4779d572b6e55f6d42e4853a1030f482e37": "e76177b05c6cd7d9a7aa2848a06bd7a0",
".git/objects/93/43fb17a979059830bb7ce19c33b1ab77d6fd31": "663885b1c5235bc12688722651e8d033",
".git/objects/99/781092c771a94353e7ef2f3f80491a1f42c9f9": "9e46f842b5d8598402adeaf71910824a",
".git/objects/9c/b41c0332b976abe630732ed0d0fa679981b4a0": "8cda1a6c649543aaf1e3856e4b2a2974",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/505c0d60421e8cd39ef4f06344eacc8b6fad27": "664f266c45b8b6bf698e423105b8ee5d",
".git/objects/b1/e7d832c4c860122069bb1a359c57eaa5f44526": "ddb07f07d8561cf8f524e5a34cb9d977",
".git/objects/b5/241ef045df6aaaa87e6042f0e85c27d12eafd7": "fb144b2018819531af1f536998e1fdcf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/7b22379ddbda774ac49b8f09b279f6618b93b9": "f7257c7550ae61092ae309fb7afe6ed5",
".git/objects/bd/c35ef5e5f60d30abc9f9de16a132299e40c000": "b2822db2c30cb5b8472b09c47e0a7cb8",
".git/objects/c9/ee91ace48b02758b081fc2b9e76f15285a660f": "399fb8be74965262efa5447ee79db1cd",
".git/objects/d1/5d7c18bad62a393fa78ae4dc6c38948de43abd": "7a7d1d8eb701f3b48aa3eeede4d7ebbd",
".git/objects/d3/bd85d9430491b3849500d44b5f227f8e8add36": "c967bcde940e55f826d9a92d7c767530",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/23b844f43149c2967aa9354eb43e9de3c93788": "98513f775283b15de6f5426d132eabdd",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/refs/heads/master": "a8b78c74d28913a67c8b148a3cc4cda5",
".git/refs/remotes/origin/master": "a8b78c74d28913a67c8b148a3cc4cda5",
"assets/AssetManifest.json": "a8c13435e047a49a7bcad6a1852ecb9e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/1st.jpg": "9ac33b801e96e31cb61aaaa57aca9957",
"assets/images/amcimage.png": "961f9bfd9486027808a40b3efb959523",
"assets/images/fbLogo.png": "edaea7697c400510eb8c5f1bf1276d31",
"assets/images/instaLogo.png": "924f2c2872b53513dc3de4471ad85a8a",
"assets/images/kvimage.png": "c3faceadbf14a35d03bb191d4e680223",
"assets/images/lapronImage.png": "bdb0c303d39aacebb88d9d744287b994",
"assets/images/liLogo.png": "3a3be17bb402938c1a84bb2d4cded270",
"assets/images/logo.png": "dfcef12ef62e37a07656d812715cf90a",
"assets/images/profile.jpg": "08e9738b2799eeac9aef698a0e509591",
"assets/images/profile2.jpg": "310fb8adc481984c469cd562a4fa7abc",
"assets/images/profile2r.jpg": "23d1a3757e3554cf8f5fa77e694aa084",
"assets/images/profilenew.jpg": "da60f6b6bd6c31b21b367615a9d0e597",
"assets/images/send.png": "2b17d3e7fd9a61e91de81c35cae131f7",
"assets/images/tLogo.png": "c0431ed4991d5f324e7178c26933f46e",
"assets/images/yoga.jpg": "9a1637fd412a6cd2228645c2ff2b64d4",
"assets/NOTICES": "1c0c70ddfec8c8925e1d3a9ce7ba7896",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bd0757ed369177cb4bca9194c6a57356",
"/": "bd0757ed369177cb4bca9194c6a57356",
"main.dart.js": "92a2dbd74e8922b11a2f816114d444d7",
"manifest.json": "8cdde40dfcbfdef7c26350e68bcedc7f",
"version.json": "68fbdc11b00bf7cb15c0a56f02416ce2"
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
