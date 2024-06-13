const swiper_comming_soon = new Swiper(".swiper-commingsoon", {
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
      spaceBetween: 85,
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
  on: {
    click: function () {
      console.log("clicked");
      // swiper.slideTo(this.clickedIndex);
    },
  },
});
