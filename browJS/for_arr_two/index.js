let usersName = [];
let usersYear = [];

function getInput(placeholder, type) {
  let input = document.createElement("input");
  input.placeholder = placeholder;

  input.type = type;

  return input;
}

function getAddBtn(text) {
  let btn = document.createElement("button");
  btn.textContent = text;
  return btn;
}

function getBox() {
  let div = document.createElement("div");
  return div;
}

function getTable() {
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");

  let tbody = document.createElement("tbody");

  let nameTD = document.createElement("td");
  nameTD.textContent = "Имя пользоватеья";

  let yearTD = document.createElement("td");
  yearTD.textContent = "Год рождения";

  let ageTD = document.createElement("td");
  ageTD.textContent = "Возраст";

  let removeTD = document.createElement("td");
  removeTD.textContent = "Удалить";

  tr.append(nameTD, yearTD, ageTD, removeTD);

  thead.append(tr);

  table.append(thead);
  table.append(tbody);

  document.body.append(table);

  return tbody;
}

function getUserTr(userName, userYear, index) {
  let age = getAge(userYear);

  let tr = document.createElement("tr");
  let nameTD = document.createElement("td");
  let yearTD = document.createElement("td");
  let ageTD = document.createElement("td");
  let removeTD = document.createElement("td");

  let removeBtn = document.createElement("button");
  removeBtn.textContent = "Удалить";

  removeBtn.onclick = function () {
    usersName.splice(index, 1);
    usersYear.splice(index, 1);
    render(usersName, usersYear);
  };

  nameTD.textContent = userName;
  yearTD.textContent = userYear;
  ageTD.textContent = age;
  removeTD.append(removeBtn);

  tr.append(nameTD, yearTD, ageTD, removeTD);
  return tr;
}

function getAge(year) {
  return 2023 - year;
}

let box = getBox();
let addBtn = getAddBtn("Добавить пользователя");

let userNameInp = getInput("Имя", "text");
let userYearInp = getInput("Го рождения", "number");

box.append(userNameInp, userYearInp, addBtn);

document.body.append(box);

let usersTable = getTable();

addBtn.onclick = function () {
  let nameValue = userNameInp.value;
  let yearValue = Number(userYearInp.value);

  usersName.push(nameValue);
  usersYear.push(yearValue);

  render(usersName, usersYear);

  userNameInp.value = "";
  userYearInp.value = "";
};

function render(nameArr, yearArr) {
  usersTable.innerHTML = "";
  for (let i = 0; i < nameArr.length; i++) {
    let newUserTr = getUserTr(nameArr[i], yearArr[i], i);
    usersTable.append(newUserTr);
  }
}
