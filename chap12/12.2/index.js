let output = document.querySelector(".output");
let input = document.querySelector("input");
let button = document.querySelector("button");

let emailValidator = /([a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,6}$)/;

output.textContent = "Test email validation";

button.addEventListener("click", () => {
  //(input.value.match(emailValidator))
  let inputValue = input.value;
  if (emailValidator.test(inputValue)) {
    output.style.color = "green";
    output.textContent = "Valid Email";
  } else {
    output.style.color = "red";
    output.textContent = "Invalid Email";
  }
});

function showNames() {
  let lastOne = "";
  for (let i = 0; i < arguments.length; i++) {
    lastOne = arguments[i];
    //console.log(arguments[i]);
  }
  return lastOne;
}
//console.log("last", showNames("JavaScript", "Laurence", "Mike", "Larry"));

let val = 5;
val += adder(); // 15
val += adder(); // // 15 + 30 = 45
val += adder(); // // 45 + 90 = 135

console.log("val", val);
function adder() {
  let counter = val;
  console.log("counter = val", counter);
  for (let i = 0; i < val; i++) {
    counter++;
    console.log("counter", counter);
  }
  ;
  return counter;
}

