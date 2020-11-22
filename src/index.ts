import { User } from "./Models/User";

const user = new User({ name: "John", age: 20 });
console.log(user.get("name"));
console.log(user.get("age"));
