//Methods

let favoriteFruits = ["grapefruit", "orange", "lemon"]
favoriteFruits.push("tangerine")


let lengthOfFavoriteFruits = favoriteFruits.push("lime")

console.log("push", favoriteFruits);


//splice

let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];

arrOfShapes.splice(2, 0, "square", "trapezoid")

console.log("splice", arrOfShapes);

//concat

let arr5 = [1, 2, 3]
let arr6 = [4, 5, 6]

let arr7 = arr5.concat(arr6)

console.log("concat", arr7);

let arr8 = arr7.concat(7, 8, 9); 
console.log("concat", arr8);

//pop 

arr8.pop()

console.log("pop", arr8);

//shift 
arr8.shift()
console.log("shift", arr8);


arr8.splice(1, 3);

console.log(arr8);

console.log();

let someValue1 = [1, 2, 3]
let someValue2 = [4, 5, 6]
let someValue3 = [7, 8, 9]

let arrOfArrays = [someValue1, someValue2, someValue3]

let arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays]

console.log(arrOfArraysOfArrays);