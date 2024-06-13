import courseList from "../data/courses.js";

let sliderElements = ``;

const renderTeamMembers = () => {
  memberList.map((member) => {
    sliderElements += `
          <my-course
            type="${course.type}"
            title="${course.title}"
            author="${course.author}"
            price="${course.price}"
            avtImg="./assets/images/avt.jpg"
            courseImg="./assets/images/course-react.png"
            class="group max-h-[454px] bg-secondary transition-all duration-200 ease-in-out hover:drop-shadow-xl"
        ></my-course>
          `;
  });

  document.getElementById("team-member-slider").innerHTML = sliderElements;
};

renderTeamMembers();
