function findUniqueNumbers(num1, num2) {
  //Convert the integer to string and apply spread operator to spread the values
  const collection1 = removeDuplicates([...num1.toString()]);
  const collection2 = removeDuplicates([...num2.toString()]);

  //Following filter functions find the symmetric difference of the collections
  //i.e., [1,2,3,5] && [5,10] => [1,2,3,10]
  const result = collection1
  .filter(ele => collection2.indexOf(ele) === -1)
  .concat(collection2.filter(ele => collection1.indexOf(ele) === -1))
  .join("");

  return parseInt(result);
}

//The following function removes all the duplicates from a collection
//i.e., [8,1,2,3,3] => [8,1,2]
function removeDuplicates(arr) {
  //The callback function returns only the numbers that are not in the
  //subsequence. That is only the non-repeated numbers.
  return arr.filter((ele, idx, collection) => {
    return getElementsExcludingCurrent(collection, idx).indexOf(ele) === -1;
  });
}

//The following function gets all elements in the array excluding the current number
//i.e., getElementsExcludingCurrent([8,1,2,3,3], 4) => [8,1,2,3] + [] => [8,1,2,3]
function getElementsExcludingCurrent(arr, i) {
  return arr.slice(0, i).concat(arr.slice(i + 1));
}

uniqueness([8,1,2,3,3,8])
