var lecturerType = {
  1: "Teacher",
  2: "Mentor",
};

class MyLecturer extends HTMLElement {
  constructor() {
    super();
    this.src = this.getAttribute("src") || "./assets/images/no-avt.png";
    this.position = this.getAttribute("position") || "undefined";
    this.name = this.getAttribute("name") || "undefined";
    this.details = this.getAttribute("details") || "";
    this.ref = this.getAttribute("ref") || "";
    this.type = this.getAttribute("type") || "";
  }
  connectedCallback() {
    this.innerHTML = `
          <div class="flex-1/4 flex flex-col items-start justify-between gap-4">
            <div
                class="relative cursor-pointer transition-all duration-200 ease-in-out hover:scale-105 hover:drop-shadow-sm"
            >
                <img src="${this.src}" alt="${this.name}" onerror="this.src='./assets/images/no-avt.png'"
                    class="w-full aspect-square object-cover object-top"/>
                <div class="${this.type == 1 ? "cus-tag__lecturer" : "cus-tag__mentor"}">${lecturerType[this.type]}</div>
            </div>
            <div class="flex flex-col items-start justify-between gap-3">
                <div class="w-full text-start">
                    <span class="typo-regular text-base/4 uppercase text-secondary">${this.position}</span>
                    <p class="typo-semibold mt-1 cursor-pointer text-2xl capitalize text-primary">${this.name}</p>
                </div>
                <p class="typo-regular text-base text-secondary line-clamp-4">${this.details}</p>
                <a href="${this.ref}" target="_blank" class="text-regular text-secondary underline hover:text-main"
                >${this.ref}</a>
            </div>
        </div>      
        `;
  }
}

customElements.define("my-lecturer", MyLecturer);
