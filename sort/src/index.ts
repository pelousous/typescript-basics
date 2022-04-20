import { CharacterCollection } from "./CharacterCollection";
import { NumberCollection } from "./NumbersCollection";
import { LinkedList } from "./LinkedList";
// import { Sorter } from "./Sorter";

// const collection = new NumberCollection([10, 3, -5, 0]);
// collection.sort();
// console.log(collection.data);

// const collectionString = new CharacterCollection('cadf');
// collectionString.sort();
// console.log(collectionString.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();