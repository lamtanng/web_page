const swiper = new Swiper(".swiper", {
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
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
  },
  navigation: {
    nextEl: ".slider-next-btn",
    prevEl: ".slider-prev-btn",
    disabledClass: "is-disable-btn",
  },
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
  },
  on: {
    click: function () {
      this.slideTo(this.clickedIndex);
    },
  },
});
