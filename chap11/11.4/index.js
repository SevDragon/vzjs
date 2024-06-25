let divs = document.querySelectorAll("div");

/* let redDiv = document.querySelector(".red");

redDiv.style.backgroundColor = redDiv.textContent;

console.log(redDiv); */

console.log(divs);

divs.forEach((e, i) => {
  e.addEventListener("click", () => {
    e.style.backgroundColor = e.textContent;
  });
  console.log("e:", e, "i:", i);
});



/*   const divs = document.querySelectorAll("div");
  divs.forEach((el)=>{
      el.addEventListener("click",()=>{
          document.body.style.backgroundColor = el.textContent;
      });
  }); */
