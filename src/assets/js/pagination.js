import courseList from "../data/courses.js";

let currentPage = 1;
let modelPerPage = 9;
let totalPage = 0;
let currentCourseList = [];

const renderCourseList = () => {
  currentCourseList = courseList.slice(
    (currentPage - 1) * modelPerPage, //get first course index
    currentPage * modelPerPage, //get last course index
  );
  console.log(currentCourseList);

  let courseElements = ``;
  currentCourseList.map((course) => {
    courseElements += `
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

  renderPageNumbers();
  document.getElementById("course-list").innerHTML = courseElements;
};

const renderPageNumbers = () => {
  let prevBtn = document.getElementById("prev-button");
  let nextBtn = document.getElementById("next-button");
  let pageNumbers = document.getElementById("page-numbers");

  totalPage = Math.ceil(courseList.length / modelPerPage);
  pageNumbers.innerHTML = ``;

  for (let i = 1; i <= totalPage; i++) {
    let numberBtn = document.createElement("button");
    numberBtn.innerHTML = i;
    numberBtn.setAttribute("onClick", `handlePagination(${i})`);
    numberBtn.classList.add("cus-btn-pagination");
    if (i === currentPage) {
      numberBtn.classList.add("is-active-pagination");
    }
    pageNumbers.appendChild(numberBtn);
  }

  currentPage === 1
    ? (prevBtn.setAttribute("disabled", true),
      prevBtn.classList.add("is-disable-btn"))
    : (prevBtn.removeAttribute("disabled"),
      prevBtn.classList.remove("is-disable-btn"));

  currentPage === totalPage
    ? (nextBtn.setAttribute("disabled", true),
      nextBtn.classList.add("is-disable-btn"))
    : (nextBtn.removeAttribute("disabled"),
      nextBtn.classList.remove("is-disable-btn"));

  prevBtn.setAttribute("onClick", `handlePagination(${currentPage - 1})`);
  nextBtn.setAttribute("onClick", `handlePagination(${currentPage + 1})`);
};

const handlePagination = (pageNumber) => {
  currentPage = pageNumber;
  renderCourseList();
};

renderCourseList();
