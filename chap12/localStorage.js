let message = "Hello storage!";
localStorage.setItem("example", message);
if (localStorage.getItem("example")) {
  document.getElementById("stored").innerHTML = localStorage.getItem("example");
}



window.localStorage.clear();