// Write a function lcm(num1, num2) that returns the lowest number which is a
// multiple of both num1 and num2.
//
// Examples:
//
// lcm(2, 3); // => 6
// lcm(6, 10); // => 30
// lcm(24, 26); // => 312

const lcm = (num1, num2) => {
  for(let i = 1; i <= num1 * num2; i++) {
    if(i % num1 === 0 && i % num2 === 0) {
      return i;
    }
  }
}
