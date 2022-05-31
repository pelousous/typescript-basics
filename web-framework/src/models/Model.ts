import { AxiosPromise, AxiosResponse } from "axios";
export const url =
  "https://3000-pelousous-typescriptbasi-x7mye4qqefg.ws-eu46.gitpod.io/users/";

interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K];
  getAll(): T;
  set(value: T): void;
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private sync: Sync<T>,
    private events: Events
  ) {}

  // we can do this passthrough methods only
  // if we declare in the contructor like we do in this class
  // and not with the old methods
  // the order of operations is different
  // with the old synthax this assignment
  // is executed after the initialization in the constructor -> NOT GOOD
  on = this.events.on;

  trigger = this.events.trigger;

  get = this.attributes.get;

  // get on() {
  //   return this.events.on;
  // }

  // get trigger() {
  //   return this.events.trigger;
  // }

  // get get() {
  //   return this.attributes.get;
  // }

  set(update: T): void {
    this.attributes.set(update);

    this.events.trigger("change");
  }

  fetch(): void {
    const id = this.get("id");

    if (typeof id === "number") {
      this.sync.fetch(id).then((response: AxiosResponse) => {
        this.set(response.data);
      });
    }
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse) => {
        this.events.trigger("save");
      })
      .catch((err) => {
        this.events.trigger("error");
      });
  }
}
