export function Vehicle(type) {

    this.type = type

}

Vehicle.prototype.describe = function() {

    console.log(`This is a ${this.type}`);
    
}