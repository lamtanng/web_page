let faqList = document.querySelectorAll("#faq");
console.log(":faqList", faqList);

faqList.forEach((faq) => {
  faq.addEventListener("click", () => {
    let question = faq.firstElementChild.firstElementChild;
    let answer = question.lastElementChild;
    let icon = faq.firstElementChild.lastElementChild;

    answer.style.maxHeight
      ? ((answer.style.maxHeight = null),
        icon.classList.remove("cus-rotate-180"))
      : ((answer.style.maxHeight = answer.scrollHeight + "px"),
        icon.classList.add("cus-rotate-180"));
  });
});
