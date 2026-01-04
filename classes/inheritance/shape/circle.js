import { Shape } from "./shape.js";

export function Circle(radius) {

    Shape.call(this)

}


Circle.prototype = Object.create(Shape.prototype)


Circle.prototype.area = () => {

    return Math.PI * (this.radius * this.radius)

}