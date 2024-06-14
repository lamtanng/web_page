import memberList from "../data/members.js";

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
