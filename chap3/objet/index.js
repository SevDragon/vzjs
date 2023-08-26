let dog = {
  dogName: "JavaScript",
  weight: "2.4",
  color: "brown",
  breed: "chihuahua",
  age: 3,
  burglarBiter: true,
};

let dogColor1 = dog["color"];

let dogColor2 = dog.color;

console.log(dogColor1, dogColor2);

let variable = "breed";
dog[variable] = "dachshund";
console.log(dog["breed"]);

console.log("---------");
//Объекты внутри объектов
let company = {
  companyName: "Healthy Candy",
  activity: "food manufaturing",
  address: {
    street: "2an street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida",
  },
  yearOfEstablishment: 2021,
};

console.log(company.address.zipcode, company["address"]["number"]);

//Массивы внутри объектов

let companyObjArray = {
  companyName: "Healthy Candy",
  activity: [
    "food maufacturing",
    "improving kid's health",
    "manufacturing toys",
  ],
  address: {
    street: "2an street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida",
  },
  yearOfEstablishment: 2021,
};

console.log(companyObjArray.activity[1]);

let objectInArray = [
  {
    street: "2an street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida",
  },
  {
    street: "1st West avenue",
    number: "5",
    zipcode: "75001",
    city: "Addison",
    state: "Texas",
  },
];

console.log(objectInArray[0].city);

let objectInArrayInObject = {
  companyName: "Healthy Candy",
  activities: [
    "food manufacturing",
    "improving kids' health",
    "manufacturing toys",
  ],
  address: [
    {
      street: "2nd street",
      number: "123",
      zipcode: "33116",
      city: "Miami",
      state: "Florida",
    },
    {
      street: "1st West avenue",
      number: "5",
      zipcode: "75001",
      city: "Addison",
      state: "Texas",
    },
  ],
  yearOfEstablishment: 2021,
};

console.log(objectInArrayInObject.address[0].state);