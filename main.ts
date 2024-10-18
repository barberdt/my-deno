import { add } from "@methods/add";
import { sub } from "@methods/sub";

const a = parseInt(Deno.args[0]);
const b = parseInt(Deno.args[1]);

if (isNaN(a) || isNaN(b)) {
  console.error("Two numerical arguments are required");
  Deno.exit(1);
}

console.log(`Add ${a} + ${b} =`, add(a, b));
console.log(`Sub ${a} - ${b} =`, sub(a, b));
