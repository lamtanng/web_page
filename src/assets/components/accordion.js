class Accordion extends HTMLLIElement {
  constructor() {
    super();
    this.question = this.getAttribute("question");
    this.answer = this.getAttribute("answer");
  }
  connectedCallback() {
    this.innerHTML = `
        <div
          class="toggle flex items-start justify-between md:gap-4 gap-10 px-6 py-4 hover:bg-secondary md:px-10 md:py-8"
        >
          <div
            class="flex cursor-pointer flex-col items-start justify-between"
          >
            <p class="caption-semibold text-base text-primary">
              ${this.question}
            </p>
            <div class="is-active-FAQ conten max-h-0 overflow-hidden">
              <p class="mt-2 text-secondary">
                ${this.answer}
              </p>
            </div>
          </div>
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 cursor-pointer"
              id="faq-toggle-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          </div>
        </div>
    `;
  }
}

customElements.define("my-accordion", Accordion, { extends: "li" });
