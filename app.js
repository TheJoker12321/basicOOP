import { BankAccount } from "./classes/ES6_Basic/bank/account.js";
import { Phone } from "./classes/ES6_Basic/phone/phone.js";
import { Rectangle } from "./classes/ES6_Basic/rectangle/rectangle.js";
import { Dog } from "./classes/inheritance/animal/dog.js";
import { Circle } from "./classes/inheritance/shape/circle.js";
import { Square } from "./classes/inheritance/shape/square.js";
import { Car } from "./classes/inheritance/vehicle/car.js";



// exe 1

const phone = new Phone('Samsung', 'S22')
phone.details()

// exe 2

const rectangle = new Rectangle(5, 4)
console.log(rectangle.area());

// exe 3

const balance = new BankAccount("Idan", 1000)
balance.deposit(500)
console.log(balance.balance);
balance.withdraw(200)
console.log(balance.balance);
balance.checkBalance()

// exe 4

const dog = new Dog('Rocky')
dog.speak()
dog.bark()

// exe 5

const vehicle = new Car('car' , 'BMW')
vehicle.describe()
vehicle.info()

// exe 6

const circle = new Circle(3)
console.log(circle.area());
const square = new Square(4)
console.log(square.area());

// exe 7

