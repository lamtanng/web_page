class MySpecialValue extends HTMLElement {
  constructor() {
    super();
    this.title = this.getAttribute("title") || "undefined";
    this.description = this.getAttribute("description") || "undefined";
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="mb-7">
            <p class="caption-semibold mb-1 text-[18px] lg:text-2xl text-primary ">${this.title}</p>
            <span class="text-secondary text-justify block">${this.description}</span>
        </div>
    `;
  }
}

customElements.define("my-special-value", MySpecialValue);
