window.onload = function () {
  document.getElementById("magic").addEventListener("click", changeColor);
};

function changeColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  document.getElementById(
    "square"
  ).style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  document.getElementById(
    "magic"
  ).style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  console.log(document.getElementById("magic").style.backgroundColor);
  console.log(document.getElementById("square").style.backgroundColor);
}

document
  .getElementById("square")
  .addEventListener("click", function textContent(el) {
    //console.dir(el.target.textContent);
    console.log(this.textContent);
  });

function addRandomNumber() {
  let el = document.createElement("h1");
  el.innerHTML = Math.floor(Math.random() * 100);
  document.body.appendChild(el);
}
