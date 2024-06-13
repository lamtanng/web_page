var lecturerList = [
  {
    type: 1,
    name: "Jenny Wilson",
    position: "CEO & FOUNDER",
    details: `For more than 7 years of experience in the profession, I
            always create high quality, innovative, sophisticated
            and suitable products for domestic and foreign customers.
            For more than 7 years of experience in the profession, I
            always create high quality, innovative, sophisticated
            and suitable products for domestic and foreign customers.
            For more than 7 years of experience in the profession, I
            always create high quality, innovative, sophisticated
            and suitable products for domestic and foreign customers.`,
    src: "./assets/images/Jenny-Wilson.png",
    ref: "https://jancooper.info/",
  },
  {
    type: 2,
    name: "Jenny Wilson",
    position: "CEO & FOUNDER",
    details: `I always create high quality, innovative, sophisticated and suitable products for domestic and foreign customers.`,
    src: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ref: "https://jancooper.info/",
  },
  {
    type: 1,
    name: "Michael Davis",
    position: "SENIOR DESIGNER",
    details:
      "With over 10 years of experience in the design industry, I have honed my skills in creating visually stunning and functional designs that captivate audiences.",
    src: "./assets/images/Michael-Davis.png",
    ref: "https://jancooper.info/",
  },
  {
    type: 1,
    name: "Sarah Johnson",
    position: "MARKETING MANAGER",
    details:
      "As a marketing expert with a keen eye for trends, I develop strategic campaigns that drive brand awareness and customer engagement.",
    src: "./assets/images/Sarah-Johnson.png",
    ref: "https://jancooper.info/",
  },
  {
    type: 1,
    name: "David Lee",
    position: "LEAD DEVELOPER",
    details:
      "With a passion for coding and a deep understanding of the latest technologies, I lead a team of skilled developers to bring innovative digital solutions to life.",
    src: "./assets/images/David-Lee.png",
    ref: "https://jancooper.info/",
  },
  {
    type: 1,
    name: "Emily Chen",
    position: "CONTENT STRATEGIST",
    details:
      "As a content strategist, I craft compelling narratives that engage audiences and drive meaningful connections between brands and their customers.",
    src: "./assets/images/Emily-Chen.png",
    ref: "https://jancooper.info/",
  },
  {
    type: 1,
    name: "John Patel",
    position: "PROJECT MANAGER",
    details:
      "With a keen eye for detail and a talent for keeping teams on track, I excel at managing complex projects and ensuring successful outcomes.",
    src: "./assets/images/John-Patel.png",
    ref: "https://jancooper.info/",
  },
  {
    type: 1,
    name: "Jessica Rodriguez",
    position: "UX DESIGNER",
    details:
      "As a user experience designer, I create intuitive and visually appealing digital interfaces that enhance the overall customer journey.",
    src: "./assets/images/Jessica-Rodriguez.png",
    ref: "https://jancooper.info/",
  },
  {
    type: 1,
    name: "Tom Nguyen",
    position: "DIGITAL MARKETER",
    details:
      "With a deep understanding of the latest digital marketing trends and strategies, I develop and execute campaigns that drive tangible results for our clients.",
    src: "./assets/images/Tom-Nguyen.png",
    ref: "https://jancooper.info/",
  },
  {
    type: 1,
    name: "Sophia Gonzalez",
    position: "COMMUNITY MANAGER",
    details:
      "As a community manager, I foster meaningful connections between brands and their audiences, creating engaging experiences that build loyalty and trust.",
    src: "./assets/images/Sophia-Gonzalez.png",
    ref: "https://jancooper.info/",
  },
];

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
