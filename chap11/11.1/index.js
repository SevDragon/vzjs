let button = document.querySelector(".change-color");
let title = document.querySelector(".title");

/* function changeColor() {
  title.classList.toggle("title-white");
  if (title.classList.contains("title-white")) {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "white";
  }
} */

let darkMode = false;

//console.log("mode" ,!darkMode);
button.onclick = () => {
    console.log("start" ,darkMode);
  //console.log(darkMode);
  if (!darkMode) {
    document.body.style.backgroundColor = "black";
    title.classList.toggle("title-white");
    darkMode = true;
  } else {
    document.body.style.backgroundColor = "white";
    title.classList.toggle("title-white");
    darkMode = false;
  }
  console.log("end" ,darkMode);
};
