// Write a function `factorial(n)`, that returns the factorial of the number `n`.
// For example, the factorial of 4 is `4 * 3 * 2 * 1 = 24`.
//
// Examples:
//
// factorial(1); // => 1
// factorial(4); // => 24
// factorial(5); // => 120
// factorial(10); // => 3628800

// const factorial = (n) => {
//   if(n < 0) return null;
//   if(n === 0) return 1;
//
//   return [...Array(n + 1).keys()].slice(2).reduce((accumulator, ele) => {
//     return accumulator *= ele;
//   }, 1);
// }

function factorial(n) {
  if(n < 0) return null;
  if(n === 1 || n === 0) return 1;

  return n * factorial(n - 1);
}
