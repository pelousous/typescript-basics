import { Collection } from "./models/Collection";

const collection = new Collection(
  "https://3000-pelousous-typescriptbasi-x7mye4qqefg.ws-eu47.gitpod.io/users"
);

collection.on("change", function () {
  console.log(collection.models);
});

collection.fetch();
