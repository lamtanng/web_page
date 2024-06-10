let headerMenu = document.getElementById("header-menu");
let headerToggleOpen = document.getElementById("header-menu-toggle-icon");
let headerToggleClose = document.getElementById("header-menu-close-icon");

headerToggleOpen.addEventListener("click", (e) => {
  if (headerToggleOpen.contains(e.target)) {
    headerMenu.classList.toggle("hidden");
    headerMenu.classList.add("max-lg:header-menu__expanded"); //add 'max-lg' prefix to check breakpoint
  }
});

headerToggleClose.addEventListener("click", (e) => {
  if (headerToggleClose.contains(e.target)) {
    headerMenu.classList.remove("max-lg:header-menu__expanded");
    headerMenu.classList.add("hidden");
  }
});
