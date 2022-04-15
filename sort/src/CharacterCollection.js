"use strict";
exports.__esModule = true;
exports.CharacterCollection = void 0;
var CharacterCollection = /** @class */ (function () {
    function CharacterCollection(data) {
        this.data = data;
    }
    CharacterCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex].localeCompare(this.data[rightIndex]) > 0 ? true : false;
    };
    CharacterCollection.prototype.swap = function (leftIndex, rightIndex) {
        var leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    };
    CharacterCollection.prototype.length = function () {
        return this.data.length;
    };
    return CharacterCollection;
}());
exports.CharacterCollection = CharacterCollection;
