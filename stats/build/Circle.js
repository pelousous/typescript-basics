"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
class Circle {
    constructor(ray) {
        this.pi = 3.14;
        this.ray = ray;
    }
    area() {
        return this.ray * this.ray * this.pi;
    }
}
exports.Circle = Circle;
