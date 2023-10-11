let nr1 = 0;
let nr2 = 1;
let temp;

let fibonacciArray = [];

while (fibonacciArray.length < 25) {
  fibonacciArray.push(nr1);
  temp = nr1 + nr2;
  nr1 = nr2;
  nr2 = temp;
}

console.log(fibonacciArray);

let arrOfArrays = [];
for (let i = 0; i < 3; i++) {
  arrOfArrays.push([]);
  for (let j = 0; j <= 7; j++) {
    arrOfArrays[i].push(j);
  }
}

console.table(arrOfArrays);

//for of

let namesForOf = ["Chanti", "John", "Maxime", "Bobbi", "Jair"];

for (let name of namesForOf) {
  console.log(name);
}

console.log();

//for in

let car = {
  model: "Golf",
  make: "Volkswagen",
  year: 1999,
  color: "black",
};

for (let prop in car) {
  console.log(car[prop]);
}

//Цикл из объектов, преобразованных в массивы

let car2 = {
  model: "Golf",
  make: "Volkswagen",
  year: 1999,
  color: "black",
};

let arrKeys = Object.keys(car2);
let arrValue = Object.values(car2);

console.log("arrKeys:", arrKeys, "arrValues:", arrValue);

for (let index = 0; index < arrKeys.length; index++) {
  console.log(`${arrKeys[index]}: ${car2[arrKeys[index]]}`);
}

console.log();

let arrEntries = Object.entries(car2);

console.log(arrEntries);

console.log();

for (const [key, value] of Object.entries(car)) {
  console.log(`keys: ${key}, values: ${value}`);
}

console.log();

let cars3 = [
  {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
  },
  {
    model: "Picanto",
    make: "Kia",
    year: 2020,
    color: "red",
  },
  {
    model: "Peugeot",
    make: "208",
    year: 2021,
    color: "black",
  },
  {
    model: "Fiat",
    make: "Punto",
    year: 2020,
    color: "black",
  },
];

for (let i = 0; i < cars3.length; i++) {
  if (cars3[i].year >= 2020) {
    if (cars3[i].color === "black") {
      console.log("I have found my new car:", cars3[i]);
      break;
    }
  }
}

for (let car of cars3) {
  if (car.color !== "black") {
    continue;
  }
  if (car.year >= 2020) {
    console.log("we could get this one:", car);
  }
}
