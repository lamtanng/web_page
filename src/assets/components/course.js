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
  }
  connectedCallback() {
    this.innerHTML = `
        <div class="course p-5 ">
                  <a href="#" class="">
                    <img
                      src="${this.courseImg}"
                      alt="React Course"
                      class="group-hover:scale-105 transition-all duration-200 ease-in-out"
                    />
                  </a>
                  <div
                    class="mt-6 flex flex-col items-start justify-between gap-2"
                  >
                    <span class="typo-regular uppercase text-secondary"
                      >${this.type}</span
                    >
                    <a href="#" class="caption-semibold text-2xl text-primary">
                      ${this.title}
                    </a>
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
