class MyFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="mx-padding-page-mobile lg:mx-padding-page">
          <div class="flex flex-col text-center lg:text-left gap-10 lg:flex-row items-center lg:items-start justify-between pt-20">
            <div
              class="flex basis-2/4 flex-col items-center lg:items-start justify-between gap-3 lg:gap-4"
            >
              <a href="index.html" class="">
                <img
                  class="aspect-auto w-48"
                  src="./assets/icons/logo-goto.svg"
                  alt="Logo"
                  loading="lazy"
                />
              </a>
              <h4 class="caption-semibold text-2xl lg:text-3xl text-primary">
                Wanna learn with us? <br />
                Get in touch
              </h4>
              <a href="" class="cus-button-primary w-full">Registered</a>
            </div>

            <div
              class="flex basis-1/4 flex-col items-center lg:items-start justify-between gap-4"
            >
              <h4 class="caption-semibold text-lg text-primary">Navigation</h4>
              <div class="">
                <a href="#">
                  <p class="typo-semibold text-base text-secondary">Home</p>
                </a>
                <a href="#">
                  <p class="typo-semibold mt-2 lg:mt-3 text-base text-secondary">
                    Course
                  </p>
                </a>
              </div>
            </div>

            <div
              class="flex basis-1/4 flex-col items-center lg:items-start justify-between gap-3 lg:gap-4"
            >
              <h4 class="caption-semibold text-lg text-primary">Head Office</h4>
              <a href="#">
                <p class="typo-semibold text-base text-secondary">
                  168/6 Bui Thi Xuan Street, <br />Ward 3, Tan Binh District,
                  <br />Ho Chi Minh City, Vietnam
                </p>
              </a>
              <div class="flex items-center justify-between gap-4">
                <a href="#">
                  <img src="./assets/icons/twitter.png" alt="twitter" />
                </a>
                <a href="#">
                  <img src="./assets/icons/whatsapp.png" alt="whatsapp" />
                </a>
                <a href="#">
                  <img src="./assets/icons/facebook.png" alt="facebook" />
                </a>
              </div>
            </div>
          </div>
          <p class="py-12 text-secondary text-center lg:text-left">
            Copyright © 2023. All rights reserved.
          </p>
        </footer>    
    `;
  }
}

customElements.define("my-footer", MyFooter);
