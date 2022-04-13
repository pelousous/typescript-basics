import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  name: String;
  claim: string;
  location: {
    lng: number;
    lat: number;
  };
  color: string =  'blue';

  constructor() {
    this.name = faker.company.companyName();
    this.claim = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent() {
    return `The company name is ${this.name}`;
  }
}