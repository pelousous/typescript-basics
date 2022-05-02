class ArrayOfNumbers {
  collection: number[];

  constructor(collection: number[]) {
    this.collection = collection;
  }

  get(index: number): number {
    return this.collection[index];
  }
}

class arrayOfStrings {
  collection: string[];

  constructor(collection: string[]) {
    this.collection = collection;
  }

  get(index: number): string {
    return this.collection[index];
  }
}

class arrayOfAnything<T> {
  collection: T[];

  constructor(collection: T[]) {
    this.collection = collection;
  }

  get(index: number): T {
    return this.collection[index];
  }
}

// type inference of generics in class
// we don't need to specifiy the type of el in array
// new arrayOfAnything<string>(['a','b','c','d']);
const arr = new arrayOfAnything(["a", "b", "c", "d"]);

// Example of generics with functions
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// type inference on function arguments
const strings = printAnything(["a", "b", "c", "d"]);

// Generic Constraints
class Bus {
  print(): void {
    console.log("I am a car");
  }
}

class House {
  print(): void {
    console.log("I am a house");
  }
}

// to use print inside a generics we have
// to put a contraint to tell TS that
// he can use this method
interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars<Bus>([new Bus(), new Bus()]);
printHousesOrCars<House>([new House(), new House()]);
