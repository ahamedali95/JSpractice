/*******************************************************************************
Write a function primeFactors(n) that takes in a number, `n`. The function should
return an array containing all factors of `n` that are prime. A factor is a number
that divides another.

Examples:

primeFactors(10) => [ 2, 5 ]
primeFactors(24) => [ 2, 3 ]
primeFactors(30) => [ 2, 3, 5 ]
primeFactors(11) => [11]
*******************************************************************************/

function primeFactors(n) {
  const primeFactors = [];
  let i = 0;

  while(i <= n) {
    if(n % i === 0 && isPrime(i)) primeFactors.push(i)
    i++;
  }

  return primeFactors;
}

function isPrime(num) {
  if(num < 2) return false;

  for(let i = 2; i < num; i++) {
    if(num % i === 0) return false;
  }

  return true;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = primeFactors;
