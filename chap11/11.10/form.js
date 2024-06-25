const form = document.querySelector("form");
const email = document.querySelector("#email");
form.addEventListener("submit", (e) => {
  let error = false;
  if (checker(form.first.value)) {
    console.log("First Name needed");
    error = true;
  }
  if (checker(form.last.value)) {
    console.log("Last Name needed");
    error = true;
  }
  if (form.age.value < 19) {
    console.log("You must be 19 or over");
    error = true;
  }
  if (error) {
    e.preventDefault();
    console.log("please review the form");
  }
});
function checker(val) {
  console.log(val.length);
  if (val.length < 6) {
    return true;
  }
  return false;
}
