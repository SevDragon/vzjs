let container = document.querySelector(".container");

let NameArray = [
  "Chanti",
  "John",
  "Maxime",
  "Bobbi",
  "Jair",
  "Vitaly",
  "Garik",
];

function build() {
  let list = document.querySelector(".friens_list");
  NameArray.forEach((el, index) => {
    list.innerHTML += `<table><tr class="box" data-row="${
      index + 1
    }" data-name="${el}" onclick="getData(this)"><td class="table-name">${el}</td><td class="table-row">${
      index + 1
    }</td></tr></table>`;
    
  });
  container.querySelector(".this_friend").innerHTML = `Name: ${NameArray[0]}, Row: 1`;
}

build();

function getData(el) {
  let getName = el.getAttribute("data-name");
  let getInxex = el.getAttribute("data-row");
  container.querySelector(
    ".this_friend"
  ).innerHTML = `Name: ${getName}, Row: ${getInxex}`;
}
