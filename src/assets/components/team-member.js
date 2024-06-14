class MyMember extends HTMLElement {
    constructor() {
      super();
      this.src = this.getAttribute("src");
      this.position = this.getAttribute("position") || "undefined";
      this.name = this.getAttribute("name") || "undefined";
    }
    connectedCallback() {
      this.innerHTML = `
            <div class="relative h-80">
                <div
                    class="absolute bottom-0 left-0 aspect-square w-full bg-secondary">
                </div>
                <img
                    src="${this.src}"
                    alt="${this.name}"
                    onerror="this.onerror=null;this.src='./assets/images/no-avt.png';"
                    class="absolute bottom-0 left-0 hover:scale-105 transition-all duration-300 ease-in-out"/>
                <div
                    class="absolute bottom-5 left-0 min-w-48 max-w-48 overflow-hidden bg-white px-3 pb-1 pt-2"
                >
                    <p class="typo-semibold line-clamp-2 text-wrap text-xl text-primary">${this.name}</p>
                    <span class="">${this.position}</span>
                </div>
            </div>    
          `;
    }
  }
  
  customElements.define("my-member", MyMember);
  