/* const ele1 = document.querySelectorAll(".output");
console.dir(ele1);

const eleContent = document.querySelector(".content");

eleContent.textContent = "garik";

eleContent.classList.add("red");

eleContent.setAttribute("id", "tester");

eleContent.style.backgroundColor = "red"; */

/* console.log(document.URL);
eleContent.textContent = document.URL;
 */

let outputDiv = document.querySelector(".output");

let mainList = document.querySelector("ul");

mainList.setAttribute("id", "mainList");

const allDiv = document.querySelectorAll("div");
/* 
for (let x = 0; x < allDiv.length; x++) {
    console.log(allDiv[x].tagName);
    allDiv[x].id = "id-" + (x + 1)
    if ( x % 2) {
        allDiv[x].style.color = "red"
    } else {
        allDiv[x].style.color = "blue"
    }
} */

allDiv.forEach((i, x) => {
  console.log("i", i, "x", x);
  console.log(allDiv[x].tagName);
    allDiv[x].id = "id-" + (x + 1) 
    if (x  % 2) {
        allDiv[x].style.color = "red"
    } else {
        allDiv[x].style.color = "green"
    }
});
