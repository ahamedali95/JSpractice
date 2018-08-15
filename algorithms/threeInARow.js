// Write a function `threeInARow(arr)` that takes in an array of numbers and returns
// true if the array contains 3 of the same number consecutively. The function should
// return false otherwise.
//
// Examples:
//
// threeInARow([4, 3, 7, 7, 7, 13, 8]); // => true;
// threeInARow([10, 9, 20, 33, 3, 3]); // => false;

const threeInARow = (arr) => {
  if(arr.length < 3) return false;

  for(let i = 0; i < arr.length - 2; i++) {
    const currentNum = arr[i];
    if(currentNum === arr[i+1] && currentNum === arr[i+2]) {
      return true;
    }
  }

  return false;
}
