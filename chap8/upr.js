let stringURL = "How's%20it%20going%3F";

let decorStringURL = decodeURIComponent(stringURL);

console.log(decorStringURL);

let newStringURL = "How's it going?";

let encorStringURL = encodeURIComponent(newStringURL);

console.log(encorStringURL);

console.log();

let dupArr = [
  "Laurence",
  "Mike",
  "Larry",
  "Kim",
  "Joanne",
  "Laurence",
  "Mike",
  "Laurence",
  "Mike",
  "Laurence",
  "Mike",
];

let noDupArr = dupArr.filter((element, index, array) => {
  return array.indexOf(element) == index;
  //return dupArr.indexOf(element) == index
});

console.log(noDupArr);

let newForArr = [];

console.log();

for (let i = 0; i < dupArr.length; i++) {
  if (dupArr.indexOf(dupArr[i]) == i) {
    newForArr.push(dupArr[i]);
  } else {
    console.log(dupArr[i]);
  }
}

console.log();

console.log(newForArr);

console.log();

let arrForMap = [1, 2, 3, 4, 5];

let mapArr = arrForMap.map((x) => x * 2);

console.log(mapArr);

console.log();

let stringForCap = "thIs will be capiTalized for each word";

function strForCap(str) {
  str = str.toLowerCase();
  let emptyArr = [];
  let stArr = str.split(" ");
  stArr.forEach((words) => {
    /* let UpperStr = words[0].toUpperCase() + words.slice(1) */
    let UpperStr = words.slice(0, 1).toUpperCase() + words.slice(1);
    emptyArr.push(UpperStr);
  });
  return emptyArr.join(" ");
}

console.log(strForCap(stringForCap));

console.log();

let stroke = "I love JavaScript";

stroke = stroke.toLowerCase();

console.log(stroke);

let strokeArr = ["a", "e", "i", "o", "u"];

for (let i = 0; i < strokeArr.length; i++) {
  console.log(strokeArr[i]);

  stroke = stroke.replaceAll(strokeArr[i], i);
}

console.log(stroke);

let xNUm = "43";

console.log(isNaN(xNUm));

console.log();

let PI = Math.PI;

console.log(PI);

let numberCF = 5.7;

let ceilNum = Math.ceil(numberCF);
let floorNum = Math.ceil(numberCF);

console.log(ceilNum, floorNum);

console.log();

console.log(Math.floor(Math.random() * 10) + 1);

function randomMinMax(min, max) {
  for (let i = min; i < max; i++) {
    console.log(Math.floor(Math.random() * max) + 1);
  }
}

randomMinMax(1, 10);

console.log();

function ranNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let x = 0; x < 10; x++) {
  console.log(ranNum(1, 10));
}
