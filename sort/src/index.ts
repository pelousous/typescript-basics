import { CharacterCollection } from "./CharacterCollection";
import { NumberCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const collection = new NumberCollection([10, 3, -5, 0]);
const sorter = new Sorter(collection);
sorter.sort();
console.log(collection.data);

const collectionString = new CharacterCollection('cadf');
const sorterString = new Sorter(collectionString);
sorterString.sort();
console.log(collectionString.data);