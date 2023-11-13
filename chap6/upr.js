function plus(x, a) {
  let d = x + a;
  console.log("d", d);
}

plus(1, 2);

console.log();

//return
let epmtArr = [];

function retunrNum(a, b) {
  return a + b;
}

for (let i = 0; i < 10; i++) {
  let num1 = i * i;
  let num2 = i * 5;
  let result = retunrNum(num1, num2);
  epmtArr.push(result);
}

console.log(epmtArr);

//IIFE
console.log();

let iffeNum = 1000;

(function () {
  let iifeNum = 500;
  console.log(iifeNum);
})();

let result = (function () {
  let name = "Laurence";
  return name;
})();

console.log(result);

(function (a) {
  console.log(`Return param iife:${a}`);
})("Garik");

//recursive

function recursiveFib(n) {
  console.log(n);
  if (n == 0) {
    return 1;
  } else {
    return n * recursiveFib(n - 1);
  }
}

console.log(recursiveFib(5));

console.log();

//func in func

let startNum = 10;

function countdown(n) {
  console.log(n);
  if (n < 1) {
    return n;
  }
  return countdown(n - 1);
}

countdown(startNum);

console.log();

function countdownTwo(n) {
  console.log(n);
  if (n > 0) {
    n = n - 1;
    /* n-- */
    return countdownTwo(n);
  }
  return;
}

countdownTwo(startNum);


console.log();

//projects

function projectRecurs(n) {
  console.log(n);
  //console.log(n);
  if (n < 10) {
    n++
    return projectRecurs(n);
  }
  return n
}

projectRecurs(0)

//project two
console.log();

let oneFunc = () => {
  console.log("one");
}


let twoFunc = () => {
  console.log("two");
}

let threeFunc = () => {
  console.log("three");
  oneFunc()
  twoFunc()
}

let fourfunc = () => {
  console.log("four");
  setTimeout(oneFunc, 0)
  threeFunc()
}

fourfunc()