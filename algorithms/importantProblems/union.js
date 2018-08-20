// Union of two sorted arrays
// Given two sorted arrays, find their union.

//example:
//arr1 = [1,2,3,4]
//arr2 = [1,2,3]
//union(arr1, arr2) => [1,2,3,4]

function union(arr1, arr2) {
  const newArr = arr1.concat(arr2)
  const unionSet = [];

  for(let i = 0; i < newArr.length; i++) {
    if(unionSet.indexOf(newArr[i]) === -1) unionSet.push(newArr[i]);
  }

  return unionSet;
}
