// Write a function luckySevens(max) that returns an array of all numbers up
// to max (inclusive) that are divisible by 7.
//
// Examples:
//
// luckySevens(25); // => [ 7, 14, 21 ]
// luckySevens(42); // => [ 7, 14, 21, 28, 35, 42 ]

const luckySevens = (max) => {
  [...Array(max).keys()].slice(1).filter(ele => {
    return ele % 7 === 0;
  });
}
