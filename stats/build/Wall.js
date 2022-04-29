"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wall = void 0;
class Wall {
    constructor(color, shape) {
        this.color = color;
        this.shape = shape;
    }
    area() {
        return this.shape.area();
    }
}
exports.Wall = Wall;
