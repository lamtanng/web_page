class MyInput extends HTMLElement {
  constructor() {
    super();
    this.my_id = this.getAttribute("my_id") || "";
    this.placeholder = this.getAttribute("placeholder") || "";
    this.autocomplete = this.getAttribute("autocomplete") || "";
    this.title = this.getAttribute("title") || "";
    this.type = this.getAttribute("type") || "text";
    this.required = this.hasAttribute("required");
  }

  connectedCallback() {
    this.innerHTML = `
            <label
                for="${this.my_id}"
                class="typo-semibold text-base text-primary cursor-pointer"
                >${this.title}</label
            >
            <input
                type="${this.type}"
                name="${this.my_id}"
                id="${this.my_id}"
                placeholder="${this.placeholder}"
                autocomplete="${this.autocomplete}"
                ${this.required ? "required" : ""}
                class="
                    typo-semibold mt-1 block w-full rounded-md px-3.5 pb-3 pt-4 
                    text-base leading-none text-primary outline-none ring-1 ring-inset ring-gray-300 
                    placeholder:font-normal placeholder:text-tertiary focus:shadow-sm focus:ring-1 
                    focus:ring-inset focus:ring-main transition duration-200 ease-in-out"
            />
        `;
  }
}

customElements.define("my-input", MyInput);
