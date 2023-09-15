let nr1 = 0
let nr2 = 1
let temp

let fibonacciArray = []

while (fibonacciArray.length < 25) {
    fibonacciArray.push(nr1)
    temp = nr1 + nr2
    nr1 = nr2
    nr2 = temp
}

console.log(fibonacciArray);

let arrOfArrays = [];
for (let i = 0; i < 3; i++){ 
   arrOfArrays.push([]);
   for (let j = 0; j < 7; j++) { 
      arrOfArrays[i].push(j); 
   }
}

console.log(arrOfArrays);