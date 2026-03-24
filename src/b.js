import { foo } from "./a";

export function bar() {
  console.log("bar");
}

export function barfoo() {
  bar();
  foo();
}
