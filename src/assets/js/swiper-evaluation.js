const swiper_evaluation = new Swiper(".swiper-st-evaluation", {
  direction: "horizontal",
  initialSlide: 0,
  loop: false,
  grabCursor: true,
  speed: 700,
  preventClicks: true,
  noSwiping: true,
  freeMode: false,
  setWrapperSize: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      width: 302,
      autoHeight: true,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
      direction: "horizontal",
      width: 380,
    },
    1200: {
      slidesPerView: 1,
      spaceBetween: 30,
      width: 340,
    },
  },
  navigation: {
    nextEl: ".slider-next-btn",
    prevEl: ".slider-prev-btn",
    disabledClass: "is-disable-btn",
  },
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },
});
