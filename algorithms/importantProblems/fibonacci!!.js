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


function fibonacci(num) {
  const sequence = [1,1];

  if(num < 1) return [];
  if(num === 1) return sequence.slice(1);
  if(num === 2) return sequence;

  for(let i = 0; i < num - 2; i++) {
    sequence.push(sequence[i] + sequence[i+1]);
  }

  return sequence;
}

function fibonacci(num) {
  const sequence = [1,1];
  let i = 0;

  if(num < 1) return [];
  if(num === 1) return sequence.slice(1);
  if(num === 2) return sequence;

  while(sequence.length < num) {
    sequence.push(sequence[i] + sequence[i+1])
    i++;
  }

  return sequence;
}

function fibonacci(num) {
  if(num < 1) return -1;
  if(num === 2 || num === 1) return 1;

  return fibonacci(num - 1) + fibonacci(num -2);
}
