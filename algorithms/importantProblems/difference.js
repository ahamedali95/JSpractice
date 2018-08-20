// Difference of two sorted arrays
// Given two sorted arrays, find their difference.

//example:
//arr1 = [1,2,3,4]
//arr2 = [1,2,3]
//difference(arr1, arr2) => [4]

//arr1 = [1,3,3]
//arr2 = [1,3]
//difference(arr1, arr2) => []

function difference(arr1, arr2) {
  return arr1.filter(ele => {
    if(arr2.indexOf(ele) === -1) return ele;
  });
}
