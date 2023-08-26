let uprArrayOne = ["Milk", "Bread", "Apples"];

console.log(uprArrayOne, uprArrayOne.length);

uprArrayOne[1] = "Banans";

console.log(uprArrayOne, uprArrayOne.length);

console.log("----------");
console.log();

let arrPokupki = ["milk", "bread", "apples"];

arrPokupki.splice(arrPokupki.indexOf("bread"), 1, "banans", "eggs");

console.log("splice:", arrPokupki);

arrPokupki.pop();

console.log("pop:", arrPokupki);

arrPokupki.sort();

console.log("sort:", arrPokupki);

console.log(arrPokupki.indexOf("milk"));

arrPokupki.splice(arrPokupki.indexOf("banans") + 1, 0, "carrot", "lettuce");
//arrPokupki.findIndex(e => e == "banans") + 1
console.log("splice 2:", arrPokupki, );

let newArrPokupki = ["juice", "pop"];

let concatArrPokupki = arrPokupki.concat(newArrPokupki, newArrPokupki);

console.log(concatArrPokupki);

console.log(concatArrPokupki.lastIndexOf("pop"));


console.log("----------");
console.log();

let arrOfArrayOF =  [1,2,3]

let newArrOfArrayOF = [arrOfArrayOF, arrOfArrayOF, arrOfArrayOF]


console.log(newArrOfArrayOF[1][1]);