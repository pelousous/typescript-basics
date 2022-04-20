"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.CharacterCollection = void 0;
var Sorter_1 = require("./Sorter");
var CharacterCollection = /** @class */ (function (_super) {
    __extends(CharacterCollection, _super);
    function CharacterCollection(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    CharacterCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex].localeCompare(this.data[rightIndex]) > 0 ? true : false;
    };
    CharacterCollection.prototype.swap = function (leftIndex, rightIndex) {
        var stringArray = this.data.split("");
        var leftHand = stringArray[leftIndex];
        stringArray[leftIndex] = stringArray[rightIndex];
        stringArray[rightIndex] = leftHand;
        this.data = stringArray.join("");
    };
    CharacterCollection.prototype.length = function () {
        return this.data.length;
    };
    return CharacterCollection;
}(Sorter_1.Sorter));
exports.CharacterCollection = CharacterCollection;
