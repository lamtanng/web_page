// import { openHeader, closeHeader } from "../js/toggle.js";

class MyHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
             <header
          class="fixed top-0 z-50 flex h-header w-full items-center justify-between bg-primary  px-5 pb-2 pt-4 lg:px-padding-page md:px-padding-page-tablet"
        >
          <a href="index.html">
            <img src="./assets/icons/logo-goto.svg" alt="Logo" class="w-44 scale-x-110"/>
          </a>

          <ul
            class="button-semibold hidden text-primary md:flex md:items-center md:justify-between md:gap-6"
            id="header-menu"
            role="list"
          >
            <li>
              <a
                href="index.html"
                class="transition-all duration-300 ease-in-out hover:text-main"
                >Home</a
              >
            </li>
            <li>
              <a
                href="courses.html"
                class="transition-all duration-300 ease-in-out hover:text-main"
                >Course</a
              >
            </li>
            <li class="ml-4 mb-[2px]">
              <a href="registered.html" class="cus-button-primary">Registered</a>
            </li>
            <li
              class="absolute right-5 top-5 scale-110 cursor-pointer font-semibold md:hidden"
              
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
                id="header-menu-close-icon"
                onClick="closeHeader()"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </li>
          </ul>

          <div class="cursor-pointer md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
              id="header-menu-toggle-icon"
              
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </header>
        `;
  }
}

// let headerMenu = document.getElementById("header-menu");
// let headerToggleOpen = document.getElementById("header-menu-toggle-icon");
// let headerToggleClose = document.getElementById("header-menu-close-icon");

// console.log(!!document.getElementById("header-menu-toggle-icon"));
// headerToggleOpen &&
//   headerToggleOpen.addEventListener("click", (e) => {
//     // if (headerMenu) {
//     // alert("clicked");
//     headerMenu.classList.remove("hidden");
//     headerMenu.classList.add("max-lg:header-menu__expanded"); //add 'max-lg' prefix to check breakpoint
//     // }
//   });

// headerToggleClose &&
//   headerToggleClose.addEventListener("click", (e) => {
//     // if (headerMenu) {
//     headerMenu.classList.remove("max-lg:header-menu__expanded");
//     headerMenu.classList.add("hidden");
//     // }
//   });

// const openHeader = () => {
//   alert("clicked");
//   // let headerMenu = document.getElementById("header-menu");
//   // headerMenu.classList.remove("hidden");
//   // headerMenu.classList.add("max-lg:header-menu__expanded");
// };

// const closeHeader = () => {
//   let headerMenu = document.getElementById("header-menu");
//   headerMenu.classList.remove("hidden");
//   headerMenu.classList.add("max-lg:header-menu__expanded");
// };

customElements.define("my-header", MyHeader);
