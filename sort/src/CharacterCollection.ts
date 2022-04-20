import { Sorter } from "./Sorter";

export class CharacterCollection extends Sorter {
  data: string;

  constructor(data: string) {
    super();
    this.data = data;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].localeCompare(this.data[rightIndex]) > 0 ? true: false;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const stringArray = this.data.split("");
    const leftHand = stringArray[leftIndex];
    stringArray[leftIndex] = stringArray[rightIndex];
    stringArray[rightIndex] = leftHand;
    this.data = stringArray.join("");
  }

  length(): number {
    return this.data.length;
  }
}