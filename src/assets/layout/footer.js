class MyFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="mx-padding-page-mobile md:m-padding-page-tablet lg:mx-padding-page">
          <div
            class="flex flex-col items-center justify-between gap-10 pt-20 text-center md:flex-row md:items-start md:text-left"
          >
            <div
              class="flex basis-2/4 flex-col items-center justify-between gap-3 md:items-start md:gap-5"
            >
              <a href="index.html" class="">
                <img
                  class="aspect-auto w-48"
                  src="./assets/icons/logo-goto.svg"
                  alt="Logo"
                  loading="lazy"
                />
              </a>
              <h4 class="caption-semibold text-2xl text-primary md:text-3xl">
                Wanna learn with us? <br />
                Get in touch
              </h4>
              <a href="registered.html" class="cus-button-primary max-sm:w-full">Registered</a>
            </div>

            <div
              class="flex basis-1/4 flex-col items-center justify-between gap-4 md:items-start"
            >
              <h4 class="caption-semibold text-lg text-primary">Navigation</h4>
              <div class="">
                <a href="index.html">
                  <p class="typo-semibold text-base text-secondary hover:text-primary">Home</p>
                </a>
                <a href="courses.html">
                  <p
                    class="typo-semibold mt-2 text-base text-secondary hover:text-primary md:mt-3"
                  >
                    Course
                  </p>
                </a>
              </div>
            </div>

            <div
              class="flex basis-1/4 flex-col items-center justify-between gap-3 md:items-start md:gap-4"
            >
              <h4 class="caption-semibold text-lg text-primary">Head Office</h4>
              <a href="#">
                <p class="typo-semibold text-base text-secondary">
                  168/6 Bui Thi Xuan Street, <br />Ward 3, Tan Binh District,
                  <br />Ho Chi Minh City, Vietnam
                </p>
              </a>
              <div class="flex items-center justify-between gap-4">
                <a href="#" >
                  <img src="./assets/icons/twitter.png" alt="twitter"  />
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
          <p class="py-12 text-center text-secondary lg:text-left">
            Copyright © 2023. All rights reserved.
          </p>
        </footer>
    `;
  }
}

customElements.define("my-footer", MyFooter);
