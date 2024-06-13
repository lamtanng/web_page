const swiper_evaluation = new Swiper(".swiper-evaluation-st", {
  direction: "horizontal",
  loop: false,
  grabCursor: true,
  speed: 500,
  preventClicks: true,
  noSwiping: true,
  freeMode: false,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 600,
    },
    1200: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".slider-next-btn",
    prevEl: ".slider-prev-btn",
    disabledClass: "is-disable-btn",
  },
  // autoplay: {
  //   delay: 3000,
  //   pauseOnMouseEnter: true,
  // },
});
