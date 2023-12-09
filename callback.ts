function calculate(
  a: number,
  b: number,
  operation: (x: number, y: number) => number
): number {
  return operation(a, b);
}

const additional = (x: number, y: number) => x + y;
const substraction = (x: number, y: number) => x - y;

const result1 = calculate(5, 8, additional);
const result2 = calculate(15, 10, substraction);

console.log(result1, result2);
