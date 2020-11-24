// import { UserProps } from "./User";

export class Attributes<T> {
  constructor(private data: T) {}

  // <K extends keyof T> generic constraint limits the types that K could be, type of K can only be one of different keys of T
  // нужно для определения типа переменной

  // const attrs = new Attributes<UserProps>({
  //   id: 5,
  //   age: 20,
  //   name: "asd",
  // });

  // const name = attrs.get("name");
  // const age = attrs.get("age");
  // const id = attrs.get("id");

  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}
