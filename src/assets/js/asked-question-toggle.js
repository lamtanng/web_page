let toggleCSSObject = window.getComputedStyle(
  document.getElementById("faq-toggle-icon"),
);
var faqList = document.querySelectorAll("#faq");

faqList.forEach((faq) => {
  faq.addEventListener("click", () => {
    let question = faq.firstElementChild;
    let answer = question.lastElementChild;
    answer.style.maxHeight
      ? (answer.style.maxHeight = null)
      : (answer.style.maxHeight = answer.scrollHeight + "px");
  });
});
