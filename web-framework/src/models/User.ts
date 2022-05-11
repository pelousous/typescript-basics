import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

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

  constructor(data: UserProps) {
    this.data = data;
  }

  get(userProp: string) {
    return this.data[userProp];
  }

  set(userProps: UserProps) {
    Object.assign(this.data, userProps);
  }

  fetch(): void {
    axios
      .get(url + "/" + this.get("id"))
      .then((response: AxiosResponse) => this.set(response.data));
  }

  save(): void {
    if (this.get("id")) {
      axios.put(url + "/" + this.get("id"), this.data);
    } else {
      axios.post(url, this.data);
    }
  }
}
