import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from "swiper";

if (document.querySelector(".video-slider")) {
  new Swiper(".video-slider", {
    modules: [Pagination, Autoplay, EffectFade],
    wrapperClass: "video-slider-wrap",
    slideClass: "video-slider-slide",
    slidesPerView: 1,
    speed: 1200,
    loop: true,

    effect: "fade",
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },

    // Pagination
    pagination: {
       el: '.video-slider-pagination',
       clickable: true,
    },

    // Scrollbar
    // //scrollbar: {
    // //  el: '.swiper-scrollbar',
    // //  draggable: true,
    // //},

    // Navigation
    // navigation: {
    //    prevEl: '.slider-default__button_prev',
    //    nextEl: '.slider-default__button_next',
    // },

    // Breakpoints
    /*
         breakpoints: {
            320: {
               slidesPerView: 1,
               spaceBetween: 0,
            },
            576: {
               slidesPerView: 1,
               spaceBetween: 0,
            },
            768: {
               slidesPerView: 2,
               spaceBetween: 20,
            },
            992: {
               slidesPerView: 3,
               spaceBetween: 20,
            },
         },
         */
  });
}
