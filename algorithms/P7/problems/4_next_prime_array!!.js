/*******************************************************************************
Write a function nextPrimeArray(array) that takes in an array of numbers.
The function should return a new array where each prime number is replaced
with the prime number that come next sequentially. For example the prime number
that comes after 5 is 7.

Examples:

nextPrimeArray([-4, 2, 5, 4, 11]) => [ -4, 3, 7, 4, 13 ]
nextPrimeArray([9, 13, 5, 6]) => [ 9, 17, 7, 6 ]
nextPrimeArray([]) => []
*******************************************************************************/

function nextPrimeArray(array) {
  return array.map(num => {
    return isPrime(num) ? nextPrime(num) : num;
  });
}

function nextPrime(num) {
  let i = num + 1;

  while(true) {
    if(isPrime(i)) return i;
    i++
  }
}

function isPrime(num) {
  if(num < 2) return false;

  for(let i = 2; i < num; i++) {
    if(num % i === 0) return false;
  }

  return true;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = nextPrimeArray;
