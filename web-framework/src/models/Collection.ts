import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";
import { User, UserProps } from "./User";

export class Collection {
  models: User[];
  events: Eventing = new Eventing();

  constructor(private url: string) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch() {
    axios.get(this.url).then((response: AxiosResponse) => {
      response.data.forEach((user: UserProps) => {
        this.models.push(User.buildUser(user));
      });
    });

    this.trigger("change");
  }
}
