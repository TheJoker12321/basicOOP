import { Shape } from "./shape.js";

export function Square(size) {

    Shape.call(this)

}


Square.prototype = Object.create(Shape.prototype)


Square.prototype.area = () => {

    return this.size * this.size

}