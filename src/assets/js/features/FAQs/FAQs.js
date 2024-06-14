import faqList from "../../../data/faqs.js";

console.log(":my list", faqList);

let faqListEl = document.getElementById("faq-list");
let faqElements = ``;

faqElements = faqList.reduce((acc, faq) => {
  return (acc += `
        <li 
            class="cursor-pointer"
            id="faq" 
            is="my-accordion" 
            question="${faq.question}" 
            answer="${faq.answer}">
        </li>
    `);
}, ``);
faqListEl.innerHTML = "";
faqListEl.innerHTML = faqElements;
