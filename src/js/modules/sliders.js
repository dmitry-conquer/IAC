import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from "swiper";

const videoSlider = document.querySelector(".video-slider");
if (videoSlider) {
  const delay = Number(videoSlider.dataset.delay);

  new Swiper(".video-slider", {
    modules: [Pagination, Autoplay, EffectFade],
    wrapperClass: "video-slider-wrap",
    slideClass: "video-slider-slide",
    slidesPerView: 1,
    speed: 900,
    effect: "fade",
    autoplay: {
      delay: 13000,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    pagination: {
      el: ".video-slider-pagination",
      clickable: true,
    },
    on: {
      slideChange: function (swiper) {
        swiper.slides[swiper.activeIndex].firstElementChild.currentTime = 0;
      },
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
  });
}

if (document.querySelector(".auto-slider")) {
  new Swiper(".auto-slider", {
    modules: [Pagination, Navigation],
    wrapperClass: "auto-slider-wrapper",
    slideClass: "auto-slider-slide",

    spaceBetween: 12,
    speed: 1000,
    loop: true,
    pagination: {
      el: ".auto-slider-pagination",
      clickable: true,
    },
    navigation: {
      prevEl: ".auto-slider-prev",
      nextEl: ".auto-slider-next",
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
      },
      576: {
        slidesPerView: 1.7,
      },
      768: {
        slidesPerView: "auto",
      },
      992: {
        slidesPerView: "auto",
      },
    },

    on: {
      init: function (swiper) {
        const customFraction = document.querySelector(".custom-fraction");
        const current = customFraction.querySelector(".current");
        const total = customFraction.querySelector(".total");
        total.innerHTML = swiper.pagination.bullets.length;
        current.innerHTML = swiper.realIndex + 1;
      },
      slideChange: function (swiper) {
        const customFraction = document.querySelector(".custom-fraction");
        const current = customFraction.querySelector(".current");
        current.innerHTML = swiper.realIndex + 1;
      },
    },
  });
}
