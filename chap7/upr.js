class FirstPerson {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  fullname() {
    return `name:${this.firstname}, last:${this.lastname}`;
  }
}

let firstFriend = new FirstPerson("garik", "gevorgyan");

let secondFriend = new FirstPerson("garik tow", "gevorgyan two");

console.log(
  `Hello ${
    firstFriend.firstname[0].toUpperCase() + firstFriend.firstname.slice(1)
  } and ${
    secondFriend.firstname[0].toUpperCase() + secondFriend.firstname.slice(1)
  }`
);

console.log();

console.log(firstFriend.fullname());

FirstPerson.prototype.includes = function () {
  return `Hi im ${
    this.firstname[0].toUpperCase() + firstFriend.firstname.slice(1)
  }`;
};

FirstPerson.prototype.loveColor = "Green";

console.log(
  `${firstFriend.includes()}, and my love color is ${firstFriend.loveColor}`
);

console.log();

//projects

//projects 1


class EmployeesOfTheCompany {
  constructor(firstname, lastname, countsWork) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.countsWork = countsWork;
  }
}

let firstWorker = new EmployeesOfTheCompany("garik", "gevorgyan", 20);
let secondWorker = new EmployeesOfTheCompany("artur", "petrosyan", 10);

let arrayWorkers = [];

arrayWorkers.push(firstWorker, secondWorker);

console.log(arrayWorkers);

EmployeesOfTheCompany.prototype.logAbout = function () {
  return `worker ${this.firstname} ${this.lastname}, working ${this.countsWork} years`;
};

firstWorker.logAbout();

arrayWorkers.forEach((a) => {
  console.log(a.logAbout());
});


//projects 2

class cartCount {
  #foodOne = 10
  #foodTwo = 15
  constructor(countOne, countTwo) {
    this.countOne = countOne
    this.countTwo = countTwo
  }

  allCount() {
    return (this.countOne * this.#foodOne) + (this.countTwo * this.#foodTwo);
  }

    get total() {
      return this.allCount()
    }

  
}


let firstCount = new cartCount(10, 5)

console.log(firstCount.allCount());