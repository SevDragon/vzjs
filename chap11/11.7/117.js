let inputFirst = document.querySelector("input[name='first']");
let inputLast = document.querySelector("input[name='last']");

let output = document.querySelector(".output");

console.log(inputFirst, inputLast);


inputFirst.addEventListener("change", (e) => {
  console.log("change");
  updater(inputFirst.value);
});
inputFirst.addEventListener("blur", (e) => {
  console.log("blur");
});
inputFirst.addEventListener("focus", (e) => {
  console.log("focus");
});
inputLast.addEventListener("change", (e) => {
  console.log("change", e);
  updater(inputLast.value);
});
inputLast.addEventListener("blur", (e) => {
  console.log("blur", e);
});
inputLast.addEventListener("focus", (e) => {
  console.log("focus", e);
});
function updater(str) {
  output.textContent = str;
}