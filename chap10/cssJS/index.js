function toggleDisplay() {
  let pEl = document.querySelector("#magic");
  if (pEl.style.display === "none") {
    pEl.style.display = "block";
  } else {
    pEl.style.display = "none";
  }
}

function rainbowify() {
  let divs = document.getElementsByTagName("div");

  console.log(divs);
  for (let i = 0; i < divs.length; i++)
    divs[i].style.backgroundColor = divs[i].id;
}

function disappear() {
  let dis = document.getElementById("shape2");
  //add, remove
  if (dis) {
    dis.classList.toggle("hide");
  } else {
    dis.classList.toggle("hide");
  }
}

function change() {
  document.getElementById("shape2").classList.remove("blue");
}

function changeAttr() {
  let el = document.getElementById("shape");
  el.setAttribute("style", "background-color:red;border:1px solid black");
  el.setAttribute("id", "new");
  el.setAttribute("class", "circle");
}
