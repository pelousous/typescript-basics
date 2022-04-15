"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberCollection = void 0;
class NumberCollection {
    constructor(data) {
        this.data = data;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex] ? true : false;
    }
    swap(leftIndex, rightIndex) {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
    length() {
        return this.data.length;
    }
}
exports.NumberCollection = NumberCollection;
