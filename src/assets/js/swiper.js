// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

alert("Hello from slider_swipper.ts");

// init Swiper:
const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Navigation],
  // Optional parameters
  direction: "vertical",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
