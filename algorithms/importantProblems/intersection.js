// Intersection of two sorted arrays
// Given two sorted arrays, find their intersection.

//example:
//arr1 = [1,2,3,4]
//arr2 = [1,2,3]
//intersection(arr1, arr2) => [1,2,3]

//arr1 = [1,3,3]
//arr2 = [1,3]
//intersection(arr1, arr2) => [1,3]

function intersection(arr1, arr2) {
  const intersection = arr1.filter(ele => {
    if(arr2.indexOf(ele) !== -1) return ele;
  });

  return [...new Set(intersection)];
}
