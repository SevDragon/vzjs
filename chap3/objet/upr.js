let myCar = {
  model: "x5",
  make: "bmw",
  motor: "electro",
  color: "blue",
  forSale: false,
};

//let color = "color"
//myCar[color] = "black"
console.log(myCar);
let propColor = "color";

myCar[propColor] = "red";

console.log(myCar);

console.log();

let people = {
  friend: [],
};

let friend1 = {
  id: 1,
  firstName: "friend1",
  lastName: "frined1 lastname",
};

let friend2 = {
  id: 2,
  firstName: "friend2",
  lastName: "frined2 lastname",
};
let friend3 = {
  id: 3,
  firstName: "friend3",
  lastName: "frined3 lastname",
};

people.friend.push(friend1, friend2, friend3)

console.log(people);

console.log();

const theList = ['Laurence', 'Svekis', true, 35, null, undefined, 
{test: 'one', score: 55}, ['one', 'two']];

theList.splice(1)

theList.shift()

theList.unshift("FIRST")

theList.push('Svekis', "MIDDLE", "Hello Wrold", "LAST")


console.log(theList);
