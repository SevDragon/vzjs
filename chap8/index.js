//decodeUri() и encodeUri()
let uri = "https://www.example.com/submit?name=maaike van putten";
let encoded_uri = encodeURI(uri);
console.log("Encoded:", encoded_uri);
let decoded_uri = decodeURI(encoded_uri);
console.log("Decoded:", decoded_uri);

//map

let arrForMap = [1, 2, 3, 4, 5];

let mapArr = arrForMap.map((m) => m + 1);

console.log(mapArr);

let strSl = "Create a substring";
let subString = strSl.slice(5);
let subString2 = strSl.slice(0, 3);

console.log(strSl, subString, subString2);

console.log(`${strSl}, slice(5) ${subString}, slice(0, 3) ${subString2}`);

let hi = "Hi buddy";
let new_hi = hi.replace("buddy", "Pascal");
console.log(new_hi);

let caps = "HI HOW ARE YOU?";
console.log(caps);
let fixed_caps = caps.toLowerCase();
let first_capital = fixed_caps
  .charAt(0)
  .toUpperCase()
  .concat(fixed_caps.slice(1));
console.log(first_capital);

console.log();

//not number
let x = 35;

console.log(isNaN(x));
console.log(!isNaN(x));

let strX = "hi";

console.log(isNaN(strX));

console.log();

let isIntX = 3

let isIntStr = "Int"

console.log(Number.isInteger(isIntX));
console.log(Number.isInteger(isIntStr));
console.log(Number.isInteger(2.5));

console.log();

let xFix = 1.23456

let newXFix = xFix.toFixed(2)

console.log(newXFix);
