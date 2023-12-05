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
    pagination: {
      el: ".video-slider-pagination",
      clickable: true,
    },
  });
}

if (document.querySelector(".slider-awards")) {
  new Swiper(".slider-awards", {
    modules: [Pagination],
    wrapperClass: "slider-awards-wrap",
    slideClass: "slider-awards-slide",
    slidesPerView: "auto",
    spaceBetween: 20,
    speed: 900,
    pagination: {
      el: ".slider-awards-pagination",
      clickable: true,
    },
   //  breakpoints: {
   //    320: {
   //      slidesPerView: 1,
   //      spaceBetween: 0,
   //    },
   //    576: {
   //      slidesPerView: 1,
   //      spaceBetween: 0,
   //    },
      // 768: {
      //   slidesPerView: 2,
      //   spaceBetween: 20,
      // },
      // 992: {
      //   slidesPerView: 3,
      //   spaceBetween: 20,
      // },
      // 1024: {
      //   slidesPerView: 3.4,
      // },
      // 1280: {
      //    slidesPerView: 4,
      //  },
   //  },
  });
}
