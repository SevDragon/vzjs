/* data for card obj */

let card = {
  title: "Название",
  img: "https://images.unsplash.com/photo-1501820488136-72669149e0d4?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  desc: "Описание карточки",
};

/* data for card obj end */

/* card */

let cardElement = document.createElement("div");

let cardImg = document.createElement("img");

let cardTitle = document.createElement("h2");

let cardDesc = document.createElement("p");

let cardRemoveBtn = document.createElement("button");

let cardImportantBtn = document.createElement("button");

/* card end */

/* card class add */

cardElement.classList.add("card");
cardImg.classList.add("card__img");
cardTitle.classList.add("card__title");
cardDesc.classList.add("card__desc");
cardRemoveBtn.classList.add("card__remove");
cardImportantBtn.classList.add("card__favorite");

/* card class add end */

/* card text */

cardTitle.textContent = card.title;
cardImg.src = card.img;
cardDesc.textContent = card.desc;

cardRemoveBtn.textContent = "Удалить";

cardImportantBtn.textContent = "Важное";

cardElement.append(
  cardImg,
  cardTitle,
  cardDesc,
  cardRemoveBtn,
  cardImportantBtn
);

document.body.append(cardElement);
