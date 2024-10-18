import { assertEquals } from "@std/assert";
import { add } from "@methods/add";
import { sub } from "@methods/sub";

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
});

Deno.test(function subTest() {
  assertEquals(sub(2, 3), -1);
});
