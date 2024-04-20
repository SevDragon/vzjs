function hi() {
  console.log("hello text");
}

document.getElementById("two").onclick = function () {
    console.log("Auch! Stop!");
};

function reveal(el) {
  console.log(el);
  console.log(el.parentElement);
}
