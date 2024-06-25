let divBox = document.querySelectorAll(".box");
let divContainer = document.querySelector(".container");

divContainer.addEventListener(
  "click",
  (e) => {
    console.log("4");
  },
  false
);

divContainer.addEventListener(
  "click",
  (e) => {
    console.log("1");
  },
  true
);

/* divBox.forEach((ele) => {
  // console.log(ele);
  ele.addEventListener(
    "click",
    (e) => {
      console.log("3");
      console.log(e.target.textContent);
    },
    false
  );
  ele.addEventListener(
    "click",
    (e) => {
      console.log("2");
      console.log(e.target.textContent);
    },
    true
  );
}); */
