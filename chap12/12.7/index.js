let mainDiv = document.querySelector(".main");
let input = document.querySelector("input");
let button = document.querySelector("button");
let output = document.querySelector(".output");
let clear = document.querySelector(".clear");

// let localTask = JSON.parse(localStorage.getItem("tasklist")) || [];

let localTask = localStorage.getItem("tasklist")
  ? JSON.parse(localStorage.getItem("tasklist"))
  : [];

// for each element in local storage
localTask.forEach((element) => {
  let valEle = element.val;
  let checkedEle = element.checked;
  createElementList(valEle, checkedEle);
});

// function to create list item
function createElementList(val, checked) {
  const li = document.createElement("li");
  const temp = document.createElement("p");
  temp.textContent = val;
  li.appendChild(temp);
  output.append(li);
  // input.value = "new task";
  if (checked) {
    li.classList.add("ready");
  }
  li.addEventListener("click", () => {
    li.classList.toggle("ready");
  });
  return val;
}

// save items to local storage
// from getItem("tasklist") to setItem("tasklist")
function saveTaskLocalItems() {
  localStorage.setItem("tasklist", JSON.stringify(localTask));
}

function createTasks() {
  localTask.length = 0;
  const currentList = list;
  currentList.forEach((element) => {
    const tempTask = {
      val: element.textContent,
      checked: false,
    };
    if (element.classList.contains("ready")) {
      tempTask.checked = true;
    }
    localTask.push(tempTask);
  });
  saveTaskLocalItems();
}

function createListItems() {
  const valueInput = input.value;
  if (valueInput.length > 0) {
    const myObject = {
      val: createElementList(valueInput, false),
      checked: false,
    };
    localTask.push(myObject);
    saveTaskLocalItems();
  }
}

button.addEventListener("click", createListItems);

clear.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});
