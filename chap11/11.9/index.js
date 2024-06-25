let dragleItem = document.querySelector("#dragme");

let dragSpace = document.querySelectorAll(".box")


dragleItem.addEventListener("dragstart", (e) => {
  e.style.transparent = "0.5";
})

dragleItem.addEventListener("dragend", (e) => {
  e.style.removeProperty("transparent");
})


dragSpace.forEach(box => {
  box.addEventListener("dragenter", (e) => {
      e.target.classList.add('red');
  });
  box.addEventListener("dragover", (e) => {
      e.preventDefault();
  });
  box.addEventListener("dragleave", (e) => {
      //console.log("leave");
      e.target.classList.remove('red');
  });
  box.addEventListener("drop", (e) => {
      e.preventDefault();
      console.log("dropped");
      e.target.appendChild(dragme);
  });
});
function dragStart(e) {
  console.log("Started");
}