import { url, User } from "./models/User";

const user = User.buildUser({ id: 1, name: "babbo", age: 50 });

user.on("change", () => {
  console.log("save triggered");
  console.log(user);
});

//user.fetch();
