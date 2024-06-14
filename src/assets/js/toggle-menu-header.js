let headerMenu = document.getElementById("header-menu");
let headerToggleOpen = document.getElementById("header-menu-toggle-icon");
let headerToggleClose = document.getElementById("header-menu-close-icon");

console.log(!!document.getElementById("header-menu-toggle-icon"));
headerToggleOpen &&
  headerToggleOpen.addEventListener("click", (e) => {
    headerMenu.classList.remove("hidden");
    headerMenu.classList.add("max-lg:header-menu__expanded"); //add 'max-lg' prefix to check breakpoint
  });

headerToggleClose &&
  headerToggleClose.addEventListener("click", (e) => {
    headerMenu.classList.remove("max-lg:header-menu__expanded");
    headerMenu.classList.add("hidden");
  });
