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
  str = str.toLowerCase()
  let emptyArr= []
  let stArr = str.split(" ")
  stArr.forEach(words => {
    /* let UpperStr = words[0].toUpperCase() + words.slice(1) */
    let UpperStr = words.slice(0, 1).toUpperCase() + words.slice(1)
    emptyArr.push(UpperStr)
  })
  return emptyArr.join(" ")
}



console.log(strForCap(stringForCap));

console.log();

let strSl = "Create a substring"
let subString = strSl.slice(5)
let subString2 = strSl.slice(0, 3)

console.log(strSl, subString, subString2);

console.log(`${strSl}, slice(5) ${subString}, slice(0, 3) ${subString2}`);