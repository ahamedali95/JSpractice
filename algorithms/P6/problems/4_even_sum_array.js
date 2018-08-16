/*******************************************************************************
Write a function evenSumArray(array) that takes in an array of numbers and returns
a new array where each num is replaced with the sum of all even numbers less than
or equal to that num.

Examples:

evenSumArray([6, 7, 5]) => [ 12, 12, 6 ]
evenSumArray([2, 8, 3, 5]) => [ 2, 20, 2, 6 ]
*******************************************************************************/

function evenSumArray(array) {
  return array.map(ele => {
    return evenSum(ele);
  });
}

function evenSum(num) {
  return [...Array(num + 1).keys()].slice(2).reduce((accumulator, num) => {
    return num % 2 === 0 ? accumulator += num : accumulator;
  }, 0);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = evenSumArray;
