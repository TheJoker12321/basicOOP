export function Animal(name) {

    this.name = name

}


Animal.prototype.speak = function() {

    console.log(`${this.name} make a sound`);
    
}