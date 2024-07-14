let ulStart = document.querySelector(".ul-start");

let stars = document.querySelectorAll(".li-star");

let output = document.querySelector(".output");

stars.forEach((star, index) => {
    console.log(star);
  star.value = index + 1;
  star.addEventListener("click", (e) => {
    output.innerHTML = `You Rated this ${e.target.value} stars`;
    stars.forEach((star, index) => {
      if (index < e.target.value) {
        star.classList.add("yellow");
      } else {
        star.classList.remove("yellow");
      }
    });
  });
});

/* stars.forEach((star, index) => {
  star.starValue = index + 1;
  star.addEventListener("click", starRate);
});
function starRate(e) {
  output.innerHTML = `You Rated this ${e.target.starValue} stars`;
  stars.forEach((star, index) => {
    if (index < e.target.starValue) {
      star.classList.add("orange");
    } else {
      star.classList.remove("orange");
    }
  });
} */
