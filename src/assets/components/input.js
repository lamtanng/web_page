class MyInput extends HTMLElement {
  constructor() {
    super();
    this.my_id = this.getAttribute("my_id") || "";
    this.placeholder = this.getAttribute("placeholder") || "";
    this.autocomplete = this.getAttribute("autocomplete") || "";
    this.title = this.getAttribute("title") || "";
    this.type = this.getAttribute("type") || "text";
    this.required = this.hasAttribute("required");
    this.isTextArea = this.hasAttribute("isTextArea");
    this.rows = this.getAttribute("rows") || 4;
  }

  connectedCallback() {
    this.innerHTML = `
            <label
                for="${this.my_id}"
                class="typo-semibold text-base text-primary cursor-pointer"
                >${this.title}</label>
            <${this.isTextArea ? "textarea" : "input"}
                type="${this.type}"
                name="${this.my_id}"
                id="${this.my_id}"
                placeholder="${this.placeholder}"
                autocomplete="${this.autocomplete}"
                ${this.required ? "required" : ""}
                rows="${this.rows}"
                class="cus-input"
            />
        `;
  }
}

customElements.define("my-input", MyInput);
