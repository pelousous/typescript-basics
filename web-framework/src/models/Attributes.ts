import { UserProps } from "./User";

export class Attributes<T> {
  data: T;

  constructor(data: T) {
    this.data = data;
  }
  get(userProp: string): string | number {
    return this.data[userProp];
  }

  set(userProps: T): void {
    Object.assign(this.data, userProps);
  }
}
