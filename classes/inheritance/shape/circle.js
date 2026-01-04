import { Shape } from "./shape.js";

export function Circle(radius) {

    this.radius = radius
    Shape.call(this)

}


Circle.prototype = Object.create(Shape.prototype)


Circle.prototype.area = function() {

    return Math.PI * (this.radius * this.radius)

}