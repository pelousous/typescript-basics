import { UserProps } from "./User";

export class Attributes<T> {
  private data: T;

  constructor(data: T) {
    this.data = data;
  }
  // instead of using th return union
  // that oblige to write type guards when we want to use it
  // we can create a type from the keys of the interface
  // and use the return type inside of the object
  // to determine the type returned T[K]
  get = <K extends keyof T> (userProp: K): T[K] => {
    return this.data[userProp];
  }
  // get(userProp: string): string | number {
  //   return this.data[userProp];
  // }

  set(userProps: T): void {
    Object.assign(this.data, userProps);
  }
}
