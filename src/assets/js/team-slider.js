var memberList = [
  {
    name: "Jenny Wilson",
    position: "CEO & FOUNDER",
    src: "./assets/images/member-Cooper.png",
  },
  {
    name: "Jenny Wilson",
    position: "CEO & FOUNDER",
    src: "./assets/images/member-Cooper.png",
  },
  {
    name: "Michael Davis",
    position: "SENIOR DESIGNER",
    src: "./assets/images/member-Cooper.png",
  },
  {
    name: "Sarah Johnson",
    position: "MARKETING MANAGER",
    src: "./assets/images/member-Cooper.png",
  },
  {
    name: "David Lee",
    position: "LEAD DEVELOPER",
    src: "./assets/images/member-Cooper.png",
  },
  {
    name: "Emily Chen",
    position: "CONTENT STRATEGIST",
    src: "./assets/images/member-Cooper.png",
  },
  {
    name: "John Patel",
    position: "PROJECT MANAGER",
    src: "./assets/images/member-Cooper.png",
  },
  {
    name: "Jessica Rodriguez",
    position: "UX DESIGNER",
    src: "./assets/images/member-Cooper.png",
  },
  {
    name: "Tom Nguyen",
    position: "DIGITAL MARKETER",
    src: "./assets/images/member-Cooper.png",
  },
  {
    name: "Sophia Gonzalez",
    position: "COMMUNITY MANAGER",
    src: "./assets/images/member-Cooper.png",
  },
];

let sliderElements = ``;

const renderTeamMembers = () => {
  memberList.map((member) => {
    sliderElements += `
        <my-member
          name="${member.name}"
          position="${member.position}"
          src="${member.src}"
          class="swiper-slide"
        ></my-member>
        `;
  });

  document.getElementById("team-member-slider").innerHTML = sliderElements;
};

renderTeamMembers();
