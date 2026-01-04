import { Vehicle  } from "./vehicle.js";


export function Car(type, brand) {

    this.brand = brand
    Vehicle.call(this, type)
    
}


Car.prototype = Object.create(Vehicle.prototype)


Car.prototype.info = function() {

    console.log(`This is ${this.brand} ${this.type}`);
    
}