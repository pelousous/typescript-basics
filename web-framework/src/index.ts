import { url, User } from "./models/User";

const user = new User({ name: "lara", age: 30 });

user.save();

user.events.on("change", () => {
  console.log("change!!!");
});

user.events.trigger("change");

//user.fetch();

// setTimeout(() => {
//   console.log(user);
// });
