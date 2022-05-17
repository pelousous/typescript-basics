import axios, { AxiosResponse } from "axios";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

export const url =
  "https://3000-pelousous-typescriptbasi-x7mye4qqefg.ws-eu44.gitpod.io/users";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  private data: UserProps;
  events: Eventing = new Eventing();
  sync: Sync<UserProps> = new Sync<UserProps>(url);
  attributes: Attributes<UserProps>;

  constructor(attributes: UserProps) {
    this.attributes = new Attributes<UserProps>(attributes);
  }

  // to implement the on method on events
  // to allow delegation we can do something like this:
  // on(eventName: string, callback: CallBack): void {
  //   this.events.on(eventName, callback);
  // }
  // but like this wevery time we need to update the
  // original fn with new parameter we nedd to
  // update every time we used it in the code
  // to avoid this we can use the accessors
  // and return the reference to the events fn
  // and call it like this
  /*
    user.on('change', () => {
      console.log('user was changed');
    });
  */
  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  // get(userProp: string) {
  //   return this.data[userProp];
  // }

  // set(userProps: UserProps) {
  //   Object.assign(this.data, userProps);
  // }

  // fetch(): void {
  //   axios
  //     .get(url + "/" + this.get("id"))
  //     .then((response: AxiosResponse) => this.set(response.data));
  // }

  // save(): void {
  //   if (this.get("id")) {
  //     axios.put(url + "/" + this.get("id"), this.data);
  //   } else {
  //     axios.post(url, this.data);
  //   }
  // }
}
