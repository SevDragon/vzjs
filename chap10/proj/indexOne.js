let toggleAcc = document.querySelectorAll(".title");
let text = document.querySelectorAll(".myText");

function visible() {
  //console.log(text);
  toggleAcc.forEach((e, i) => {
    e.onclick = function () {
      //this.nextElementSibling.classList.toggle("active")

      text[i].classList.toggle("active");

      //console.log(e, i);
    };
  });
}
visible();
