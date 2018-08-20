// Write a function `tripletSum(array, sum)` that takes in an array of numbers (array)
// and a number (sum). The function should return an array containing unique
// triplets of numbers from the array that equal `sum` when added together.
// Assume that the input array contains no repeated numbers.
//
// Example:
//
// var arr1 = [1, 3, 5, 2, 4];
// tripletSum(arr1, 8); // => [ [ 1, 3, 4 ], [ 1, 5, 2 ] ]

function tripletSum(arr, sum) {
  const tripletCollection = []

  for(let i = 0; i < arr.length - 2; i++) { 
    for(let j = i + 1; j < arr.length; j++) {
      for(let k = j + 1; k < arr.length; k++) {
        const num1 = arr[i];
        const num2 = arr[j];
        const num3 = arr[k];
        console.log([num1, num2, num3])

        if(num1 + num2 + num3 === sum) tripletCollection.push([num1, num2, num3]);
      }
    }
  }

  return tripletCollection;
}
