let tabBtnList = document.querySelectorAll(".btn-tab-filter");

tabBtnList.forEach((tabBtn) => {
  tabBtn.addEventListener("click", () => {
    tabBtnList.forEach((tabBtn) => tabBtn.classList.remove("is-active-filter"));
    tabBtn.classList.add("is-active-filter");
  });
});
