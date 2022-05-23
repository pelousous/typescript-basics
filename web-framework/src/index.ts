import { url, User } from "./models/User";

const user = new User({ name: "babbo", age: 50 });

user.on("save", () => {
  console.log("save triggered");
  console.log(user);
});

user.save();
