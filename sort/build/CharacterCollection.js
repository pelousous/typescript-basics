"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharacterCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex].localeCompare(this.data[rightIndex]) > 0 ? true : false;
    }
    swap(leftIndex, rightIndex) {
        const stringArray = this.data.split("");
        const leftHand = stringArray[leftIndex];
        stringArray[leftIndex] = stringArray[rightIndex];
        stringArray[rightIndex] = leftHand;
        this.data = stringArray.join("");
    }
    length() {
        return this.data.length;
    }
}
exports.CharacterCollection = CharacterCollection;
