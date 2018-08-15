// Write a function `power(base, exp)` that takes in two numbers,
// a base and exponent. The function should return `base` raised to `exp` power.
// Solve this using a loop.
//
// For example, power(2, 5) is 2 raised to the 5th power,
// which is 2 * 2 * 2 * 2 * 2 = 32
//
// Examples:
//
// power(2, 5); // => 32
// power(2, 10); // => 1024
// power(9, 2); // => 81
// power(9, 3); // => 729
// power(11, 0); // => 1
// power(11, 1); // => 11

const findPower = (base, exp) {
  [...Array(exp).keys()].reduce((accumulator, num) => {
    return accumulator *= base;
  }, 1);
}

const power = (base, exp) => {
  if(exp < 0) return 1 / findPower(base, Math.abs(exp));

  if(exp === 0) return 1;

  return findPower(base, exp);
}
