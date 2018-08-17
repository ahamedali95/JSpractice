// Write a function splitHalfArray(array) that takes in
// an array as an argument and returns two halves of that
// array split in the middle.
// If the array has an odd number of elements, then the middle
// element should be excluded.
//
// Example:
//
// splitHalfArray([1, 2, 3, 4, 5]); // => [ [ 1, 2 ], [ 4, 5 ] ]
// splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']);  // => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]


function splitHalfArray(array) {
  const halfLen = array.length / 2;

  if(array.length % 2 === 0) {
    return [array.slice(0, halfLen), array.slice(halfLen)];
  } else {
    return [array.slice(0, Math.floor(halfLen)), array.slice(Math.ceil(halfLen))];
  }
}
