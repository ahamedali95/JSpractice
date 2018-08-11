//A prime number is an interger greater than 1 that is divisible by itself and 1.

const isPrime = (num) => {
  if(num < 2) return false;

  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }

  return true;
}
