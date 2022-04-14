import { NumberCollection } from "./NumbersCollection";

export class Sorter {
  collection: NumberCollection;

  constructor(collection: NumberCollection) {
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