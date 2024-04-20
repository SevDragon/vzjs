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

let isIntX = 3;

let isIntStr = "Int";

console.log(Number.isInteger(isIntX));
console.log(Number.isInteger(isIntStr));
console.log(Number.isInteger(2.5));

console.log();

let xFix = 1.23456;

let newXFix = xFix.toFixed(2);

console.log(newXFix);

console.log();

//date

let currentDateTime = new Date();

console.log(currentDateTime);

let now2 = Date.now();
console.log(now2);

let milliesDate = new Date(1000);
console.log(milliesDate);

let stringDate = new Date("Sat Jun 05 2021 12:40:12 GMT+0200");
console.log(stringDate);

let d = new Date();
console.log("Day of week:", d.getDay());
console.log("Day of month:", d.getDate());
console.log("Month:", d.getMonth() + 1);
console.log("Year:", d.getFullYear());
console.log(
  "Hours:",
  d.getHours(),
  "Minutes:",
  d.getMinutes(),
  "Seconds:",
  d.getSeconds()
);



let future = new Date(2025, 5, 15);
console.log(future);
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let day = future.getDate();
let month = future.getMonth();
let year = future.getFullYear();
let myDate = `${months[month-1]} ${day} ${year}`;
console.log(myDate);