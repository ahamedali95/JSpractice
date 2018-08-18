// Write a function oddOnesOut(array) that takes in an array of
// strings and returns a new array array containing only elements
// that appeared an even number of times in the input array.
//
// Examples:
//
// var arr1 = ['a', 'b', 'b', 'c', 'd', 'c', 'c', 'd']
// oddOnesOut(arr1); // => [ 'b', 'd' ]
//
// var arr2 = ['fish', 'fish', 'dog', 'cat', 'dog', 'dog']
// oddOnesOut(arr2); // => [ 'fish' ]

function oddOnesOut(array) {
  const tally = elementCount(array);
  const evensInArr = [];

  for(const key in tally) {
    if(tally[key] % 2 === 0) evensInArr.push(key);
  }

  return evensInArr;
}

function elementCount(array) {
  const tally = {};

  array.forEach(ele => {
    if(!tally[ele]) {
      tally[ele] = 1;
    } else {
      tally[ele] += 1;
    }
  });

  return tally;
}
