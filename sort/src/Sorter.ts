import { NumberCollection } from "./NumbersCollection";

interface Sortable {
  length(): number;
  swap(leftIndex: number, rightIndex: number): void;
  compare(leftIndex: number, rightIndex: number): boolean;
}

export class Sorter {
  collection: Sortable;

  constructor(collection: Sortable) {
    this.collection = collection;
  }

  sort(): void {
      const collLength = this.collection.length();

      for (let i = 0; i < collLength; i++) {
        for (let j = 0; j < collLength - i - 1; j++) {
           if(this.collection.compare(j, j + 1)) {
             this.collection.swap(j, j + 1);
          }
        }
      }
  }
}