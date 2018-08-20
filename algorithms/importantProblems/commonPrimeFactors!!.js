// Write a function `commonPrimeFactors` that takes in two numbers as arguments
// and returns an array of all prime factors that are common between the
// two numbers. A factor is a number that divides another number without
// resulting in a remainder.
//
// Examples:
//
// commonPrimeFactors(12, 50); // => [ 2 ]
// commonPrimeFactors(6, 24); // => [ 2, 3 ]
// commonPrimeFactors(11,22); // => [ 11 ]
// commonPrimeFactors(45, 60); // => [ 3, 5 ]

function commonPrimeFactors(num1, num2) {
  return [...Array(Math.min(num1, num2) + 1).keys()].slice(1).filter(ele => {
    return num1 % ele === 0 && num2 % ele === 0 && isPrime(ele);
  });
}

function isPrime(num) {
  if(num < 2) return false;

  for(let i = 2; i < num; i++) {
    if(num % i === 0) return false;
  }

  return true;
}
