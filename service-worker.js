var cacheName = 'pwaTeste+-v1.0';

self.addEventListener('install', event => {
    self.skipwaiting();

event.waitUntil(
    caches.open(cacheName)
        .then(cache => cache.addAll([

            './index.html',

        './assets/css/bootstrap.min.css',

        './assets/js/bootstrap.min.js',

        './assets/js/jquery.min.js',

        './assets/js/popper.min.js',

           
        './assets/AppIcons/android/mipmap-hdpi/ic_launcher.png',
        './assets/AppIcons/android/mipmap-mdpi/ic_launcher.png',
        './assets/AppIcons/android/mipmap-xhdpi/ic_launcher.png',
        './assets/AppIcons/android/mipmap-xxhdpi/ic_launcher.png',
        './assets/AppIcons/android/mipmap-xxxhdpi/ic_launcher.png',


            './assets/AppIcons/appstore.png',
            './assets/AppIcons/playstore.png',
            './assets/AppIcons/AssetsApp/AppIconSet/icon_16.png',
            './assets/AppIcons/AssetsApp/AppIconSet/icon_20.png',
            './assets/AppIcons/AssetsApp/AppIconSet/icon_29.png',
            './assets/AppIcons/AssetsApp/AppIconSet/icon_32.png',
            './assets/AppIcons/AssetsApp/AppIconSet/icon_40.png',
            './assets/AppIcons/AssetsApp/AppIconSet/icon_48.png',
            './assets/AppIcons/AssetsApp/AppIconSet/icon_50.png',
            './assets/AppIcons/AssetsApp/AppIconSet/icon_55.png',
            './assets/AppIcons/AssetsApp/AppIconSet/icon_57.png',
            './assets/AppIcons/AssetsApp/AppIconSet/icon_58.png',
            './assets/AppIcons/AssetsApp/AppIconSet/icon_60.png',
            './assets/AppIcons/AssetsApp/AppIconSet/icon_64.png',
            './assets/AppIcons/AssetsApp/AppIconSet/icon_66.png',
            './assets/AppIcons/AssetsApp/AppIconSet/icon_72.png',
            './assets/AppIcons/AssetsApp/AppIconSet/icon_76.png',
            './assets/AppIcons/AssetsApp/AppIconSet/icon_80.png',
            './assets/AppIcons/AssetsApp/AppIconSet/icon_87.png',
            './assets/AppIcons/AssetsApp/AppIconSet/icon_88.png',
            './assets/AppIcons/AssetsApp/AppIconSet/icon_92.png',
            './assets/AppIcons/AssetsApp/AppIconSet/icon_100.png',
            './assets/AppIcons/AssetsApp/AppIconSet/icon_102.png',
            './assets/AppIcons/AssetsApp/AppIconSet/icon_114.png',
            './assets/AppIcons/AssetsApp/AppIconSet/icon_120.png',
            './assets/AppIcons/AssetsApp/AppIconSet/icon_128.png',
            './assets/AppIcons/AssetsApp/AppIconSet/icon_144.png',
            './assets/AppIcons/AssetsApp/AppIconSet/icon_152.png',
            './assets/AppIcons/AssetsApp/AppIconSet/icon_167.png',
            './assets/AppIcons/AssetsApp/AppIconSet/icon_172.png',
            './assets/AppIcons/AssetsApp/AppIconSet/icon_180.png',
            './assets/AppIcons/AssetsApp/AppIconSet/icon_196.png',
            './assets/AppIcons/AssetsApp/AppIconSet/icon_216.png',
            './assets/AppIcons/AssetsApp/AppIconSet/icon_256.png',
            './assets/AppIcons/AssetsApp/AppIconSet/icon_512.png',


            './assets/img/testimonials/testimonial-1.jpg',
            './assets/img/testimonials/testimonial-2.jpg',
            './assets/img/testimonials/testimonial-3.jpg',
            './assets/img/testimonials/testimonial-4.jpg',
            './assets/img/testimonials/testimonial-5.jpg',
            './assets/img/trainers/01.jpg',
            './assets/img/trainers/02.jpg',
            './assets/img/trainers/03.jpg',
            './assets/img/trainers/trainer-1.jpg',
            './assets/img/trainers/trainer-2.jpg',
            './assets/img/trainers/trainer-3.jpg',
            './assets/img/about.jpg',
            './assets/img/course-1.jpg',
            './assets/img/course-3.jpg',
            './assets/img/course-details.jpg',
            './assets/img/cyber.png',
            './assets/img/farol.png',
            './assets/img/hero-bg.jpg',
            './assets/img/meioamb.jpg',
            './assets/img/petrogas.jpg',
            './assets/img/quimica.jpg',
            './assets/img/segtrab.jpeg'


        ]))
        );
      });
      
      self.addEventListener('message', function (event) {
        if (event.data.action === 'skipWaiting') {
          self.skipWaiting();
        }
      });
      
      self.addEventListener('fetch', function (event) {
        //Atualizacao internet
        event.respondWith(async function () {
          try {
            return await fetch(event.request);
          } catch (err) {
            return caches.match(event.request);
          }
        }());
      
        
      });