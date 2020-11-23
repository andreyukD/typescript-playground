import { User } from "./models/User";

const user = new User({ name: "brand new name rew", age: 493 });
// user.fetch();

// user.set({ name: "brand new name", age: 493 });
user.save();

// import axios from "axios";

// axios.post("http://localhost:3000/users", {
//   name: "myname",
//   age: 20,
// });

// import { User } from "./Models/User";

// const user = new User({});

// user.set({ name: "Dima" });

// // console.log(user.get("name"));
// // console.log(user.get("age"));

// user.on("change", () => {
//   console.log("change 1");
// });
// user.on("change", () => {
//   console.log("change 2");
// });
// user.on("save", () => {
//   console.log("save 1");
// });

// user.trigger("change");
// user.trigger("save");
