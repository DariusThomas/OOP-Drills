let person1 = {
    name: 'Eldora',
    sayHello: function () {
        console.log('Hello! My name is ' + this.name + '.')
    }
}

let person2 = {
    name: 'Chester',
    sayHello: function () {
        console.log('Hello! My name is ' + this.name + '.')
    }
}

let person3 = {
    name: 'Jim',
    sayHello: function () {
        console.log('Hello! My name is ' + this.name + '.')
    }
}

let person4 = {
    name: 'Cathie',
    sayHello: function () {
        console.log('Hello! My name is ' + this.name + '.')
    }
}

let person5 = {
    name: 'May',
    sayHello: function () {
        console.log('Hello! My name is ' + this.name + '.')
    }
}

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();

function Person(name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age
}

Person.prototype.greet = function () {
    console.log('Hey! My name is ' + this.name + '. I am ' + this.age + ' years old and and live in ' + this.city)
}

let p1 = new Person('Eldora', 'Oklahoma City', 31)
let p2 = new Person('Chester', 'Albuquerque', 25)
let p3 = new Person('Jim', 'Newark', 27)
let p4 = new Person('Cathie', 'Rochester', 28)
let p5 = new Person('May', 'Portland', 24)

p1.greet()
p2.greet()
p3.greet()
p4.greet()
p5.greet()



class Individual {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age
    }
    greetings() {
        console.log('Hey! My name is ' + this.name + '. I am ' + this.age + ' years old and and live in ' + this.city)
    }
}

let individual1 = new Individual('Eldora', 'Oklahoma City', 31);
let individual2 = new Individual('Chester', 'Albuquerque', 25);
let individual3 = new Individual('Jim', 'Newark', 27);
let individual4 = new Individual('Cathie', 'Rochester', 28);
let individual5 = new Individual('May', 'Portland', 24);

individual1.greetings();
individual2.greetings();
individual3.greetings();
individual4.greetings();
individual5.greetings();

class Vehicle {
    constructor(manufacturer, numOfWheels) {
        this.manufacturer = manufacturer;
        this.numOfWheels = numOfWheels
    }

    aboutVehicle() {
        console.log(`This is a ${this.constructor.name } made by ${this.manufacturer}. It has ${this.numOfWheels} wheels.`)
    }
}

class Truck extends Vehicle {
    constructor(manufacturer, numOfWheels, numOfDoors) {
        super(manufacturer, numOfWheels);
        this.numOfDoors = numOfDoors;
        this.truckBed = true;
    }
    aboutVehicle() {
        console.log(`This is a ${this.constructor.name} made by ${this.manufacturer}. It has ${this.numOfWheels} wheels, ${this.numOfDoors} number of doors, and Truck bed: ${this.truckBed} `)
    }
}

class Sedan extends Vehicle {
    constructor(manufacturer, numOfWheels, size, mpg) {
        super(manufacturer, numOfWheels);
        this.truckBed = false
        this.size = size;
        this.mpg = mpg
    }
    aboutVehicle() {
        console.log(`This is a ${this.constructor.name} made by ${this.manufacturer}. It's size is ${this.size} with ${this.mpg} mpg. It has ${this.numOfWheels} wheels, and Truck bed: ${this.truckBed} `)
    }
}

class Motorcycles extends Vehicle {
    constructor(manufacturer, numOfWheels, numOfDoors, steering) {
        super(manufacturer, numOfWheels);
        this.numOfDoors = numOfDoors;
        this.steering = steering;
    }
    aboutVehicle() {
        console.log(`This is a ${this.constructor.name} made by ${this.manufacturer}. It has ${this.numOfWheels} wheels. ${this.numOfDoors} number of doors and ${this.steering} type steering`)
    }
}