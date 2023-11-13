let spread = ["a", "s", "b"];

let message = ["f", "g", ...spread, "h"];

console.log(message);
console.log();

let spreadFunc = function (...funcSpread) {
  //array
  console.log(funcSpread);
  //string
  console.log(...funcSpread);
};

spreadFunc(...message);

spreadFunc("a", "f");

function addTwoNumbers(x, y) {
  return x + y;
}

let resulttArr = []

for(let i = 0; i < 10; i++) {
    let result = addTwoNumbers(i, i*2)
    resulttArr.push(result)
    
}

console.log(resulttArr);


//IIFE func

(function () {
  console.log("IIFE!");
})()


//Recursive functions

function getRecursive(nr) {
  console.log(nr);
  if (nr > 0) {
    getRecursive(--nr)
  }
}

getRecursive(3)

function logRecursive(nr) {
  console.log("Started function:", nr);
  if (nr > 0) {
    logRecursive(nr -1)
  } else {
    console.log("done with recursion");
  }
  console.log("Ended function:", nr);
}

logRecursive(3)


//callback funcS

function funcForCall(calback) {
  calback()
  console.log("function");
}

function callBackForFunc() {
  console.log("callback");
}


funcForCall(callBackForFunc)


let youGotThis = function() {
  console.log("You're doing really well, keep coding!");
}

setTimeout(youGotThis, 1000)

