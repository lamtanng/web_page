import lecturerList from "../data/lectures.js";

let sliderElements = ``;

const renderLecturerList = () => {
  lecturerList.map((lecturer) => {
    sliderElements += `
      <my-lecturer
        type="${lecturer.type}"
        name="${lecturer.name}"
        position="${lecturer.position}"
        details="${lecturer.details}"
        src="${lecturer.src}"
        ref="${lecturer.ref}"
        class="swiper-slide"
      ></my-lecturer>
      `;
  });

  document.getElementById("lecturer-slider").innerHTML = sliderElements;
};

renderLecturerList();
