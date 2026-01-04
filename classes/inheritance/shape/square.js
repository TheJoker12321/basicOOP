import { Shape } from "./shape.js";

export function Square(size) {

    this.size = size
    Shape.call(this)

}


Square.prototype = Object.create(Shape.prototype)


Square.prototype.area = function() {

    return this.size * this.size

}