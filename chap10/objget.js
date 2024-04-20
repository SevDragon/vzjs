console.log(document.body.children.greeting);

let textInner = document.body.children.greeting;

let textHtml = document.body.children.greeting_two;

textInner.innerText = "Bye!";

textHtml.innerHTML = "<b>Hello</b>";

let idItem = document.getElementById("one");

idItem.innerText = "Hi One!";

console.log(idItem);

let idS = ["one", "two", "three"];

let idtext;

//a[i]

function getIDadnChangeText(a) {
  for (let i = 0; i < a.length; i++) {
    idtext = document.getElementById(`${a[i]}`);

    console.log(a[i], idtext);
    idtext.innerText = `Hi ${a[i][0].toUpperCase() + a[i].slice(1)}`;
  }

  return idtext;
}

getIDadnChangeText(idS);

let tagHtmlItem = document.getElementsByTagName("div").item(1);

console.log(tagHtmlItem);

let classHtmlItem = document.getElementsByClassName("example");

console.log(classHtmlItem[0]);

console.log(document.querySelector("div"));

const elementSelectorAll = document.querySelectorAll(".myEle");

console.log(elementSelectorAll);

elementSelectorAll.forEach((e) => {
  console.log(e);
});
