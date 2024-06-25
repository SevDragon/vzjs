let output = document.getElementsByClassName("output")[0];

const inputs = document.querySelectorAll("input");

inputs.forEach((e) => {
  e.addEventListener("keydown", (e) => {
    if (!isNaN(e.key)) {
      output.textContent += e.key;
    }
  });
  e.addEventListener("keyup", (e) => {
    console.log(e.key);
  });
  e.addEventListener("paste", (e) => {
    console.log("pasted");
  });
});

console.log(output);

console.log(inputs);
