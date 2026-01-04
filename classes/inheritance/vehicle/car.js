import { Vehicle  } from "./vehicle.js";


export function Car(type, brand) {

    Vehicle.call(this, type)

}


Car.prototype = Object.create(Vehicle.prototype)


Car.prototype.info = () => {

    console.log(`This is ${this.brand, this.type}`);
    
}