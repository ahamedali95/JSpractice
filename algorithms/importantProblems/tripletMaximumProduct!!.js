// Given an integer array, find a maximum product of a triplet in array.
//
// Examples:
//
// Input:  [10, 3, 5, 6, 20]
// Output: 1200
// Multiplication of 10, 6 and 20
//
// Input:  [-10, -3, -5, -6, -20]
// Output: -90
//
// Input:  [1, -4, 3, -6, 7, 0]
// Output: 168

function tripletMaximumProduct(array) {
  if(array.length < 3) return -1;

  let maximumProduct = null;

  for(let i = 0; i < array.length - 2; i++) {
    for(let j = i + 1; j < array.length; j++) {
      for(let k = j + 1; k < array.length; k++) {
        const currentProduct = array[i] * array[j] * array[k]
        if(currentProduct > maximumProduct || !maximumProduct) maximumProduct = currentProduct;
      }
    }
  }

  return maximumProduct;
}
