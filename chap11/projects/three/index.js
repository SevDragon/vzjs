let holderDiv = document.querySelector(".holder");

let outputDiv = document.querySelector("#output");


holderDiv.addEventListener("mouseover", (e) => {
  e.target.classList.add("active");
});
holderDiv.addEventListener("mouseout", (e) => {
  e.target.classList.remove("active");
});
holderDiv.addEventListener("mousemove", coordin);
function coordin() {

  let outputXY = `<p class="outputXY">X:${event.clientX} | Y:${event.clientY}</p>`; 
  outputDiv.innerHTML = outputXY ;
}
