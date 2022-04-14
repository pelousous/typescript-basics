"use strict";
exports.__esModule = true;
exports.NumberCollection = void 0;
var NumberCollection = /** @class */ (function () {
    function NumberCollection(data) {
        this.data = data;
    }
    NumberCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex] ? true : false;
    };
    NumberCollection.prototype.swap = function (leftIndex, rightIndex) {
        var leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    };
    NumberCollection.prototype.length = function () {
        return this.data.length;
    };
    return NumberCollection;
}());
exports.NumberCollection = NumberCollection;
