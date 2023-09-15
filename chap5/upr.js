let startCount = 5;

let randomNumber = Math.floor(Math.random() * startCount + 1);

let gues = false;

/* while (!gues) {
  let promntGues = Number(prompt("1-5"));
  if (promntGues > randomNumber) {
    console.log("big");
  } else if (promntGues < randomNumber) {
    console.log("little");
  } else {
    console.log("good");
    gues = true;
  }
} */

/* let number;
do {
  number = prompt("Please enter a number between 0 and 100: ");
  console.log(number);
} while (!(number >= 0 && number < 100)); */


let startStep = 0
let step = 5


do {
    console.log(startStep);
    startStep += step
   
} while(startStep <= 20)


let myWork = []


for (let i = 1; i <= 7; i++) {
  let status = i % 3 ? true : false
   let lesson = {
    lessons: `lesson ${i}`,
    status,
   }

  myWork.push(lesson)
}

console.log(myWork);

/* myWork.forEach((i, n) => {
  console.log(`${n}: les: ${i.lessons}, stat: ${i.status}`);
}) */
