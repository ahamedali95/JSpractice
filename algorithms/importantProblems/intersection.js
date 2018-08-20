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
  const intersectionSet = [];

  for(let i = 0; i < arr1.length; i++) {
    const currentEle = arr1[i];

    if(arr2.indexOf(currentEle) !== -1 && intersectionSet.indexOf(currentEle) === -1) intersectionSet.push(currentEle);
  }

  return intersectionSet;
}
