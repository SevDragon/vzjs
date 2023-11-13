function getOpeBtn() {
  let openBtn = document.createElement("button");
  openBtn.classList.add("open-btn");
  openBtn.textContent = "открыть меню";

  openBtn.onclick = function () {
    if(menu.classList.contains("open")  == true) {
        openBtn.textContent = "открыть меню";
        menu.classList.remove("open")
    } else {
    openBtn.textContent = "закрыть меню";
    menu.classList.add("open");
    }
    
    
  };

  return openBtn;
}

let menuArr = ["главная", "о нас", "услуги", "контакты", "вход"];

let menuHrefArr = [
  "https://ya.ru/",
  "https://ya.ru/",
  "https://ya.ru/",
  "https://ya.ru/",
  "https://ya.ru/",
];

function getMenu(itemsArr, hrefArr) {
  let menuList = document.createElement("ul");
  menuList.classList.add("menu");

  for (let i = 0; i < itemsArr.length; i++) {
    let item = document.createElement("li");
    item.classList.add("menu__item");

    let link = document.createElement("a");
    link.classList.add("menu__link");
    link.textContent = itemsArr[i];
    link.href = hrefArr[i];

    item.append(link);
    menuList.append(item);
  }

  return menuList;
}

let menu = getMenu(menuArr, menuHrefArr);

document.body.append(getOpeBtn(), menu);
