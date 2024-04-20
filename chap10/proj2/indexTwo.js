// items html
const addFriend = document.querySelector("#addFriend");
const addNew = document.querySelector("#addNew");
const output = document.querySelector("#output");

// functions

let myFriendArrDefault = ["Chanti", "John", "Maxime", "Bobbi", "Jair"];

function buildTr(name, index) {
  const tr = document.createElement("tr");
  tr.classList.add("box");
  tr.dataset.index = index;
  tr.innerHTML = `<td>${name}</td><td>${index + 1}</td>`;
  tr.onclick = function () {
    const countEl = tr.querySelector("td:last-child");
    countEl.textContent += countEl.textContent + 1;
  };
  return tr;
}

addNew.addEventListener("click", () => {
  let newFriend = addFriend.value;
  myFriendArrDefault.push(newFriend);
  output.appendChild(buildTr(newFriend, myFriendArrDefault.length - 1));
});

function build() {
  myFriendArrDefault.forEach((name, index) => {
    output.appendChild(buildTr(name, index));
  });
}
build();

