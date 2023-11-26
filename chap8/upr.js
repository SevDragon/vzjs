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

for (let i = 0; i < dupArr.length; i++) {
  if (dupArr.indexOf(dupArr[i]) == i) {
    newForArr.push(dupArr[i]);
  } else {
    console.log(dupArr[i]);
  }
}

console.log(newForArr);

console.log();

let arrForMap = [1, 2, 3, 4, 5];

let mapArr = arrForMap.map((x) => x * 2);

console.log(mapArr);

console.log();


