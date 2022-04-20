"use strict";
// import { NumberCollection } from "./NumbersCollection";
exports.__esModule = true;
exports.Sorter = void 0;
// interface Sortable {
//   length(): number;
//   swap(leftIndex: number, rightIndex: number): void;
//   compare(leftIndex: number, rightIndex: number): boolean;
// }
// ts doesn't  know what length, compare and swap are
// but we know that we never will use sorter alone
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var collLength = this.length();
        for (var i = 0; i < collLength; i++) {
            for (var j = 0; j < collLength - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
