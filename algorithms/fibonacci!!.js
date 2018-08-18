// Write a function fibonacci(n) that takes in a number that
// represents the length of a sequence. The function should
// should return the first `n` numbers in the fibonacci sequence.
//
// The first two numbers of the fibonacci sequence are 1 and 1.
// The next number in the sequence can be found by adding the
// last two numbers in the sequence.
//
// Examples:
//
// fibonacci(0); // => []
// fibonacci(1); // => [ 1 ]
// fibonacci(2); // => [ 1, 1 ]
// fibonacci(3); // => [ 1, 1, 2 ]
// fibonacci(5); // => [ 1, 1, 2, 3, 5 ]
// fibonacci(10); // => [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]

//If n is less than equal to zero => return []
//Initial collection: [1,1];
//If n is 1, then return the first element of the initial collection
//If n is 2, then return the second element of the initial collection
//Otherwise,
    //Loop through the initial collection (Range: [0, n - 2))
    //choose elements exists at index i and index i + 1
    //Add them and push it to the array
//Return the collection

// function fibonacci(n) {
//   if(n < 1) return [];
//
//   const fibonacciSeq = [1, 1];
//
//   if(n === 1) return fibonacciSeq.slice(0, 1);
//   if(n === 2) return fibonacciSeq;
//
//   for(let i = 0; i < n - 2; i++) {
//     fibonacciSeq.push(fibonacciSeq[i] + fibonacciSeq[i+1]);
//   }
//
//   return fibonacciSeq;
// }



function fibonacci(n) {
  if(n < 1) return [];
  if(n === 1) return [1];
  if(n === 2) return [1, 1];

  const fibonacciSeq = [1, 1];
  const i = 0;

  while(fibonacciSeq.length < n) {
    fibonacciSeq.push(fibonacciSeq[i] + fibonacciSeq[i+1]);
    i++;
  }

  return fibonacciSeq;
}
