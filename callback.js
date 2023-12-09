function calculate(a, b, operation) {
    return operation(a, b);
}
var additional = function (x, y) { return x + y; };
var substraction = function (x, y) { return x - y; };
var result1 = calculate(5, 8, additional);
var result2 = calculate(15, 10, substraction);
console.log(result1, result2);
