// items html
const addFriend = document.querySelector("#addFriend");
const addNew = document.querySelector("#addNew");
const output = document.querySelector("#output");

// functions

let myFriendArrDefault = ["Chanti", "John", "Maxime", "Bobbi", "Jair"];

function buildTr(name, index) {
  //console.log(index);
  const tr = document.createElement("tr");
  const tdName = document.createElement("td");
  const tdIndex = document.createElement("td");
  tdName.classList.add("name");
  tdIndex.classList.add("index");
  tdName.textContent = name;
  tdIndex.textContent = index + 1;
  //console.log(tdIndex.textContent);
  tr.append(tdName, tdIndex);
  //tr.innerHTML = `${tdName}${tdIndex}`;

  tdName.onclick = function () {
    /* const countEl = tr.querySelector("td:last-child");
    countEl.textContent = +countEl.textContent + 1; */
    tdIndex.textContent = +tdIndex.textContent + 1;
  };
  output.append(tr)
}

function ShowList() {
  myFriendArrDefault.forEach((name, index) => {
    buildTr(name, index);
  });
}
ShowList();

addNew.addEventListener("click", () => {
  let newFriend = addFriend.value;
  myFriendArrDefault.push(newFriend);
  buildTr(newFriend, myFriendArrDefault.length -1) 

  /* output.appendChild(buildTr(newFriend, myFriendArrDefault.length - 1)); */
});
