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

let startStep = 0;
let step = 5;

do {
  console.log(startStep);
  startStep += step;
} while (startStep <= 20);

let myWork = [];

for (let i = 1; i <= 7; i++) {
  let status = i % 3 ? true : false;
  let lesson = {
    lessons: `lesson ${i}`,
    status,
  };

  myWork.push(lesson);
}

console.log(myWork);

/* myWork.forEach((i, n) => {
  console.log(`${n}: les: ${i.lessons}, stat: ${i.status}`);
}) */

let myTable = [];

let columTable = 5;

let rowTable = 5;

let counterTable = 0;

for (let i = 0; i < rowTable; i++) {
  let tempTable = [];
  for (let j = 0; j < columTable; j++) {
    counterTable++;
    tempTable.push(counterTable);
  }
  myTable.push(tempTable);
}
console.table(myTable);

//array and for

let ArrayGrid = [];

let gridCount = 64;

let counter = 0;

let globalRow

for (let i = 0; i < gridCount + 1; i++) {
  if (counter % 8 == 0) {
    if (globalRow != undefined) {
      ArrayGrid.push(globalRow);
    }
    globalRow = [];
  }
  counter++;
  let temp = counter;

  globalRow.push(temp);
}

console.table(ArrayGrid);


let arrForOfEmpty = []
let count = 0
while (arrForOfEmpty.length < 5) {

  arrForOfEmpty.push(count)
  count++

}

for (let i = 0; i < arrForOfEmpty.length; i++) {
  console.log(arrForOfEmpty[i]);
}

for (const iterator of arrForOfEmpty) {
  console.log(iterator);
}

console.log(arrForOfEmpty);

console.log();


let output = ""; 
let skipThis = 7; 
for (let i = 0; i < 10; i++) { 
  if (i === skipThis) { 
    continue;
    /* break  */
  } 
  output += i; 
} 
console.log(output);