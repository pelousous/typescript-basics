"use strict";
// import { NumberCollection } from "./NumbersCollection";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// interface Sortable {
//   length(): number;
//   swap(leftIndex: number, rightIndex: number): void;
//   compare(leftIndex: number, rightIndex: number): boolean;
// }
// ts doesn't  know what length, compare and swap are
// but we know that we never will use sorter alone
class Sorter {
    sort() {
        const collLength = this.length();
        for (let i = 0; i < collLength; i++) {
            for (let j = 0; j < collLength - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
