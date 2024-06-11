class MyFAQ extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <div class="cursor-pointer flex flex-col items-start justify-between">
            <p class="caption-semibold text-base text-primary">
                Add commonly asked questions here
            </p>
            <div class="is-active-FAQ conten max-h-0 overflow-hidden">
                <p class="mt-2 text-secondary"></p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam uto lectus molestie malesuada vitae vel purus.
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
      `;
  }
}

customElements.define("my-faq", MyFAQ);
