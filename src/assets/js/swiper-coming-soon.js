const swiper_coming_soon = new Swiper(".swiper-commingsoon", {
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
      spaceBetween: 85,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 200,
    },
    1200: {
      slidesPerView: 1,
      spaceBetween: 200,
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
