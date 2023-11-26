function funcDog(dogName, weight, color, breed) {
  this.dogName = dogName;
  this.weight = weight;
  this.color = color;
  this.breed = breed;
}

let funcDogNewFunc = new funcDog("Jacky", 30, "brown", "labrador");

console.log(funcDogNewFunc);

for (let dog in funcDogNewFunc) {
  console.log(dog, funcDogNewFunc[dog]);
}

console.log("------");

class Dog {
  constructor(dogName, weight, color, breed) {
    this.dogName = dogName;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
  }
}

let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");

console.log(dog);
console.log(dog.dogName, "is a", dog.breed, "and weighs", dog.weight, "kg.");

console.log();

//methods class
class MethodPerson {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greet() {
    console.log("Hi there! I'm", this.firstName, "and this is methods");
  }
}

let MethodP = new MethodPerson("Garik", "Gevorgyan");

MethodP.greet();

//private methods

class PrivatePerson {
  #firstname;
  #lastname;
  constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
  }
  //firstname
  get firstname() {
    return this.#firstname;
  }

  set firstname(firstname) {
    this.#firstname = firstname;
  }
  //lastname
  get lastname() {
    return this.#lastname;
  }

  set lastname(lastname) {
    this.#lastname = lastname;
  }
}

let getAndSetPerson = new PrivatePerson("#garik", "#gevorgyan")

console.log(getAndSetPerson.firstname, getAndSetPerson.lastname);

//inheritance

console.log();

class Vehicle {
  constructor(color, currentSpeed, maxSpeed) {
    this.color = color;
    this.currentSpeed = currentSpeed;
    this.maxSpeed = maxSpeed; 
  }
  move() {
    console.log("moving at", this.currentSpeed); 
  }
  accelerate(amount) {
    this.currentSpeed += amount; 
  }
}

class Motorcycle extends Vehicle {
  constructor(color, currentSpeed, maxSpeed, fuel) { 
    super(color, currentSpeed, maxSpeed);
    this.fuel = fuel; 
  }
  doWheelie() {
    console.log("Driving on one wheel!"); 
  }
}

let motor = new Motorcycle("Black", 0, 250, "gasoline");

console.log(motor.color);
motor.accelerate(50); 
motor.move();



//prototype

