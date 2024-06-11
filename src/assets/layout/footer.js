class MyFooter extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
              <footer class="mx-52">
          <div class=" pt-20 flex items-start justify-between">
            <div class="basis-2/4 flex flex-col justify-between items-start gap-4">
              <a href="#">
                <img class="w-44 aspect-auto" src="./assets/icons/logo-goto.svg" alt="Logo" loading="lazy">
              </a>
              <h4 class="caption-semibold text-primary text-3xl">Wanna learn with us? <br> Get in touch</h4>
              <a href="" class="cus-button-primary">Registered</a>
            </div>

            <div class="basis-1/4 gap-4 flex flex-col justify-between items-start">
              <h4 class="caption-semibold text-lg text-primary">Navigation</h4>
              <div class="">
                <a href="#">
                  <p class="typo-semibold text-base text-secondary ">Home</p>
                </a>
                <a href="#">
                  <p class="typo-semibold text-base text-secondary mt-3">Course</p>
                </a>
              </div>
            </div>

            <div class="basis-1/4 gap-4 flex flex-col justify-between items-start">
              <h4 class="caption-semibold text-lg text-primary">Head Office</h4>
              <a href="#">
                <p class="text-secondary typo-semibold text-base">168/6 Bui Thi Xuan Street, 
                  <br>Ward 3, Tan Binh District,
                  <br>Ho Chi Minh City, Vietnam</p>
              </a>
                <div class="flex justify-between items-center gap-4">
                  <a href="#">
                    <img src="./assets/images/twitter.png" alt="twitter">
                  </a>
                  <a href="#">
                    <img src="./assets/images/whatsapp.png" alt="whatsapp">
                  </a>
                  <a href="#">
                    <img src="./assets/images/facebook.png" alt="facebook">
                  </a>
                    
                </div>  
            </div>
          </div>
          <p class="pt-12 pb-20 text-secondary ">Copyright © 2023. All rights reserved.</p>
        </footer>
        `;
    }
  }
  
  customElements.define("my-footer", MyFooter);
  