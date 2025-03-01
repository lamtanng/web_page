class MyCourse extends HTMLElement {
  constructor() {
    super();
    this.type = this.getAttribute("type") || "undefined";
    this.title = this.getAttribute("title") || "undefined";
    this.author = this.getAttribute("author") || "undefined";
    this.price = this.getAttribute("price") || "0";
    this.avtImg = this.getAttribute("avtImg") || "./assets/images/no-avt.png";
    this.courseImg =
      this.getAttribute("courseImg") || "./assets/images/no-image.png";
    this.courseDetailsUrl =
      this.getAttribute("courseDetailsUrl") || "course-details.html";
  }
  connectedCallback() {
    this.innerHTML = `
        <div class="course lg:p-5 px-3 py-4 bg-secondary ">
                  <a href="${this.courseDetailsUrl}" class="">
                    <img
                      src="${this.courseImg}"
                      alt="React Course"
                      class="group-hover:scale-105 transition-all duration-200 ease-in-out"
                    />
                  </a>
                  <div
                    class="mt-6 flex flex-col items-start justify-between gap-2"
                  >
                  <div class="flex flex-row-reverse gap-2 lg:flex-col justify-between items-center lg:items-start w-full">
                    <span class="typo-regular text-sm lg:text-base uppercase text-secondary"
                      >${this.type}</span
                    >
                    <a href="#" class="caption-semibold text-xl line-clamp-1 lg:line-clamp-2 lg:text-2xl text-primary">
                      ${this.title}
                    </a>
                  </div>
                    <div class="flex w-full items-center justify-between">
                      <div class="flex items-center justify-between gap-3">
                        <div
                          class="aspect-square w-8 overflow-hidden rounded-full"
                        >
                          <img
                            src="${this.avtImg}"
                            alt="Avatar"
                            class="h-full w-full object-cover object-top"
                          />
                        </div>
                        <span class="typo-regular capitalize text-secondary"
                          >${this.author}</span
                        >
                      </div>
                      <div class="caption-semibold">${this.price} đ</div>
                    </div>
                  </div>
                </div>
        `;
  }
}

customElements.define("my-course", MyCourse);
