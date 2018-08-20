// Union of two sorted arrays
// Given two sorted arrays, find their union.

//example:
//arr1 = [1,2,3,4]
//arr2 = [1,2,3]
//union(arr1, arr2) => [1,2,3,4]

function union(arr1, arr2) {
  return [...new Set(arr1.concat(arr2))];
}
