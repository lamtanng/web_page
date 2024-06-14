let toggleCSSObject = window.getComputedStyle(
  document.getElementById("faq-toggle-icon"),
);
let faqList = document.querySelectorAll("#faq");
let faqArrow = document.querySelectorAll("#faq");

faqList.forEach((faq) => {
  faq.addEventListener("click", () => {
    let question = faq.firstElementChild;
    let answer = question.lastElementChild;
    let icon = faq.lastElementChild;
    
    answer.style.maxHeight
      ? (answer.style.maxHeight = null,
        icon.classList.remove("cus-rotate-180")
      )
      : (answer.style.maxHeight = answer.scrollHeight + "px",
        icon.classList.add("cus-rotate-180")
      );
  });
});
