export function add(a: number, b: number): number {
  return a + b;
}

export function sub(a: number, b: number): number {
  return a - b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const a = parseInt(Deno.args[0]);
  const b = parseInt(Deno.args[1]);
  console.log(`Add ${a} + ${b} =`, add(a, b));
}
