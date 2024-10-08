const userTask = document.querySelector(".main input");
const addBtn = document.querySelector(".main button");
const output = document.querySelector(".output");
const tasks = JSON.parse(localStorage.getItem("tasklist")) || [];

if (tasks.length > 0) {
  tasks.forEach((task) => {
    genItem(task.val, task.checked);
  });
}
function genItem(val, complete) {
  const li = document.createElement("li");
  const temp = document.createTextNode(val);
  li.appendChild(temp);
  output.append(li);
  userTask.value = "";
  if (complete) {
    li.classList.add("ready");
  }
  li.addEventListener("click", (e) => {
    li.classList.toggle("ready");
    buildTasks();
  });
  return val;
}
function saveTasks() {
  localStorage.setItem("tasklist", JSON.stringify(tasks));
}
function buildTasks() {
  tasks.length = 0;
  const curList = output.querySelectorAll("li");
  curList.forEach((el) => {
    const tempTask = {
      val: el.textContent,
      checked: false,
    };
    if (el.classList.contains("ready")) {
      tempTask.checked = true;
    }
    tasks.push(tempTask);
  });
  saveTasks();
}

function createListItem() {
  const val = userTask.value;
  if (val.length > 0) {
    const myObj = {
      val: genItem(val, false),
      checked: false,
    };
    tasks.push(myObj);
    saveTasks();
  }
}

addBtn.addEventListener("click", createListItem);
