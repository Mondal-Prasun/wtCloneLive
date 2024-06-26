'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "86902577c40314f5bc4d81411a913296",
".git/config": "75fc210f9d768df916e22a980f5d659c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3a9479c5a685776174d10ef81ba85835",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9e990512c4ac04420161ba8bb2969cc9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d96f969f3e69bfeba3a4089c929773dd",
".git/logs/refs/heads/main": "0ca04f4708f962da30b933ff10758606",
".git/logs/refs/remotes/origin/main": "be23ff7943620d683c2c31b6f1dff1a6",
".git/objects/03/cb71c04cae5b0a0e466a46052c6cb2aa56baf1": "c0da7ee8f2e6687eddda0ac902b8a71c",
".git/objects/05/e5a92207d5401747bb7974910ffc12f1c48392": "4619b725d76e02a8c55f1d96ef7002a6",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/0f/c9c080c53dbc162176b23698420a5f6d6a67ac": "93a0a566198a482a6b17bec1cec193e5",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/18/f99b201d35afca64d1ef56c9dfc7dc39dcbb47": "adf886adb33557af531aa3856a1975ef",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/53e84c97863273f3b611c83a731aba562356bc": "b2a9104983b0046eefd36991bec58a03",
".git/objects/24/e5c6e2b7ae280b7d2c437bd952804d39484207": "15d827be60551abadda8f3ed243e83d4",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/96ebc92ff4f43001166e21a99a565a7cdaf164": "5d07774ec38195fcbee6157b2b881199",
".git/objects/29/8fafb0951f17a7527972f7ce04ba20e036be69": "1fd7b3ff4d465de8a3dbb9cae8634490",
".git/objects/31/3d973e1b1e31a1205b12d5bfcd5efb2acdb529": "8384320cb86b95ea7ca371d4deb53c0e",
".git/objects/34/d4c0f897cc521459ed780eb86c69fa908a9258": "2c52cba29b5af5c407e0527fc462c9d5",
".git/objects/39/3fff1986015795512a403a3165d92774ca6902": "f408049294e169c6ee7c5f1019a4d499",
".git/objects/3b/002e9ad22ba1ef35d31b17fea63ea73c464a27": "fc412c33b617eb9f55aa9be8f09d1652",
".git/objects/40/dcb8bf4502b0e11288696b0a40c562d69f0234": "ca8ec436315ca52fb362e9d392734f71",
".git/objects/42/373741a624d76ccf10eacc4e3e4a09e0c6b916": "303d8de6a622fa8328e46186921188bd",
".git/objects/44/56911584798b20e94bd011943a1ff2dc87ed39": "d1d24d7d97522b20f76ccab0768c02c0",
".git/objects/45/1cf2814e7b4dc07d150a52d3f12980d1f3eef7": "e6b9b88f8a5cd49d01cbba31548c8902",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/52/981df898657f18d0baca9299c9cab6cfd72f2c": "070a811f07589794686c09563a52aa25",
".git/objects/54/1e838ac838c55c79059b88742460c18c5d58dc": "6380cd5fb08ffd8c579cb97d659d87fe",
".git/objects/57/b1a6f3be6889bae51b85c7843bf4bfcd3a082e": "7562b6aea10ce15891784865c0a57f55",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5d/66ca9873063a26211b45a2e99e15fdaf885aae": "b43f6f6bd8ca438823a764453dfc59f1",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/64/5fd3c85b9e687def08f95494844f3bd71d69a9": "6089cfa4ba3d5e12f921d18967544054",
".git/objects/64/d2968bf6b52138b0e8ccfeb8f4f2c006daa792": "6201ea0108e11587e98b88e3b6402310",
".git/objects/68/84bab5b77945ad89e1a68a036a16a6f1c991cb": "8125f0839d5e09a6b65a7e059bdb0e32",
".git/objects/68/fa152fbf4b109aac548db78b724f711ff632c7": "cb46e93b4417b16fa478c3fad88719a0",
".git/objects/6d/cd4b72df1833e0d10256ff12ba9b202e7aa9bb": "919ebf31190285fcec599068f23f5643",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/73/0b516aec8339259684ed6211ca98dd6cb00b19": "30f7df3218264a45135c6e1f0f3358c8",
".git/objects/77/3e9f8d5c424c259420520d2792fb832b606a74": "e63d7e20782f4299f4436ab4983135eb",
".git/objects/7c/f282e5a1c34435b615346516d5e98fdf0e50ab": "7238a554f3a93a8bb3d44c4c019cf10e",
".git/objects/81/4c08853ffed29f7b75c9dbfada62116c06941d": "c85ce94beb3cba08a3ff592d3d1c40ca",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/2429f1b824a2c8bdc8ff1480da34b4bbbf2e27": "88813336ba40ecd86067390451c1cb01",
".git/objects/8d/da8e181ec76c0b910ee96e0fdb18a22a88f2b9": "05988164d6e925e899d4101aa35d4ca1",
".git/objects/93/a8cbfe69864d4627a8f81edec055440166e034": "5f0167d30da29bafc13a3cb1606c795c",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9b/b35578148fb3820f6888372ca7458fa4e8c1f7": "944338345ac12d673621513bde74c27b",
".git/objects/9c/74331a6c548a671947a27e0608a61d2659fa80": "8d2944d7b572e607d51267501028595e",
".git/objects/a1/9f97e0c82820626ed9870cfc8029b5a8c42983": "3446aa406cbc985d67eb1da3561809dd",
".git/objects/a3/335e54d52cc7f18c251e2386140a1dd39957bd": "6f243d08de21fab81e554ccfabe57537",
".git/objects/a8/5c684153ea48fe64c2e1c6634004fa1daefc86": "cee6db4f07a1553381e057711c7749ad",
".git/objects/aa/a7e62f37f184bc6e32db59632198932ffc71a5": "fa4062ba45b952854fcce8a994782944",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/3297296a1774e5565cff350018f731daad2e98": "7bc2e8a364893c5616d1315dd5c38989",
".git/objects/b6/fa297cb82fa005527b4fdb967d7bc6bf60ce59": "bae5ebdf1f3043488e532a2f1fb1099b",
".git/objects/b8/9c6c2dc017b8423b78d8695d6efb16b2772827": "e0f0c413af57a0661b6d2e77f1ffbb16",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/7d77ff105e9801553e71cf55fabe4c559d3153": "7ff600fab769f40d5576cd07e98515b0",
".git/objects/c8/dd396bba4079d026c8705a068624fe1a802a9f": "b434fe0b551814bbd5a9d5eff732fb16",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cc/301daa728ac409c3b7e420de95f23d88c9d5de": "ad3d34dcf646cbea04de544db4d24311",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/32da7434f93a023c86cab1e14a95128202448f": "a27dfa9bf9e237db84db33454a45456e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/471f28c42ebde48f8b9eb479166c8b708b3016": "80e8feabffa7e00344e4445ebc42d633",
".git/objects/d6/7f92c300ed37674761e2b92ddc1a9c8af72c70": "916e4085d86a1106a5aca63e93b1477d",
".git/objects/d7/6e7c04059681e276ae66e5fbe9ec8feba0d815": "9e07ba50282b43571facd85dc1f41352",
".git/objects/d7/c8ac8ba4c9867a6ca7382536caa6ea23343a8d": "f14700ad5310ecbda832da366a6135ba",
".git/objects/e3/7057c24b21425b96d2544a0e844d31891acc6e": "f3f6ed55a3c2e2845ba3a11b7c26f71e",
".git/objects/e7/8dc2dc88f1567a8c015893c5be3f2362172b0b": "054688008e4b78ecc704f2a1809ad89f",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e9/7dedd5bdeea03798621d1a23547d5928a01427": "328e92a878e3d47f81226b014836eabe",
".git/objects/eb/c34e24f4a8b9fdfe409e3b8149f3524388c6e7": "8011686bb39a7fb029948bd5ab7c4b72",
".git/objects/f1/1a8561801ec66b3f764bd5a3b646b25f1a8daa": "80ce662bf2729ec54b887618d7312349",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/ae9a7f7aa370d805a2ca5c78011d11429586fe": "381372d1e760fc5cdecde752ee2a65bf",
".git/objects/fb/a13da96b156ac01285ebae630327f5a50a93e8": "808bd8c6e66ee3bea54ec3cdfdc45143",
".git/objects/fc/35616801ad34d3a3b7aee395e95d9f1dfb91e6": "59c728c3d65ad07f7a8e1051a1ef80e5",
".git/ORIG_HEAD": "d6bdffccae91b22499b52bec33c330bd",
".git/refs/heads/main": "d6bdffccae91b22499b52bec33c330bd",
".git/refs/remotes/origin/main": "d6bdffccae91b22499b52bec33c330bd",
"assets/AssetManifest.bin": "4de879451d9a3d458c8d62a1de92895a",
"assets/AssetManifest.bin.json": "aaa2e5bb1910ab67b1a42532d75faee4",
"assets/AssetManifest.json": "4c4d77bc3f5bc7378d4fe6e6d29acbaa",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a1350fe10d218e571525750631275f72",
"assets/lib/assets/login.json": "d0cd4aec847a918d1302eb7d177136aa",
"assets/NOTICES": "7a00446c7ff639a5a141eb0f02737093",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5b995aad61bdda97fa3f541fb5908c05",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "c2d285fb293146f61c24b18a043d5a5c",
"icons/icon-192.png": "26dd196e984f5668562ee0cbe7806bf3",
"icons/icon-512.png": "9dce27e17614d87e0f7f420882cd746d",
"icons/icon-maskable-192.png": "aba7b06e52bc01766a6897ebd2e2295a",
"icons/icon-maskable-512.png": "5c548b662c00986678d1e7053ceca852",
"index.html": "ea3d98ed4825326e9968aacacc252520",
"/": "ea3d98ed4825326e9968aacacc252520",
"main.dart.js": "601376c063f1cdf4e59f22f1771b056d",
"manifest.json": "6cfb1d27673c376d444ce659e6a26975",
"README.md": "512aa93c6886b90f01a1ee9192d41de0",
"version.json": "e5d9f8d433d51c469c2817fb4e0b9d8d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
