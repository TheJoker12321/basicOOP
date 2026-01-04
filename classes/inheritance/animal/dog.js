import { Animal } from "./animal.js";


export function Dog(name) {

    Animal.call(this, name)

}

Dog.prototype = Object.create(Animal.prototype)


Dog.prototype.bark = function() {

    console.log(`${this.name} barks`);
    
}