import courseContents from "../../../data/course-contents.js";

console.log(":my list", courseContents);

let faqListEl = document.getElementById("content-list");
let faqElements = ``;

faqElements = courseContents.reduce((acc, faq) => {
  return (acc += `
        <li 
            class="cursor-pointer md:w-1/2"
            id="faq" 
            is="my-accordion" 
            question="${faq.title}" 
            answer="${faq.description}">
        </li>
    `);
}, ``);
faqListEl.innerHTML = "";
faqListEl.innerHTML = faqElements;
