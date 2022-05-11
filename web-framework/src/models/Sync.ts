import axios, { AxiosPromise } from "axios";
import { User, UserProps } from "./User";

export const url =
  "https://3000-pelousous-typescriptbasi-x7mye4qqefg.ws-eu44.gitpod.io/users";

export class Sync {
  fetch(id: number): AxiosPromise {
    return axios.get(url + "/" + id);
  }

  save(data: UserProps): AxiosPromise {
    if (data.id) {
      return axios.put(url + "/" + data.id, data);
    } else {
      return axios.post(url, data);
    }
  }
}
