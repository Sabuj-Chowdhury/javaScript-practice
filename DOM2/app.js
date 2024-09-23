console.log("app js file executing ....");

//getElementsByTag
const liList = document.getElementsByTagName("li");
console.log(liList);

// styling with JS
const sections = document.querySelectorAll("section");
for (const section of sections) {
  section.style.backgroundColor = "blue";
  section.style.color = "black";
  section.style.border = "2px solid black";
  section.style.margin = "20px";
  section.style.borderRadius = "10px";
}
// adding heading into the document(HTML)
const main = document.getElementById("main-content");

const heading = document.createElement("header");
// console.log(heading);
const h1 = document.createElement("h1");
h1.innerText = "This h1 added via JAVAScript";
heading.appendChild(h1);
main.appendChild(heading);

// getElementsById
const section_1 = document.getElementById("first-section");
console.log(section_1);
section_1.style.backgroundColor = "yellow";
//getElementsByClass
const lists = document.getElementsByClassName("list-item");
console.log(lists);
