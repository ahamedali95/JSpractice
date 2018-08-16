/*******************************************************************************
Write a function `myFind(arr, cb)` that accepts an array and a callback. It should
return the first element of the array where the callback returns true when passed
each element. The function should return undefined if the callback does not return
true for any element.

Example:

function isUpper(str) {
  return str.toUpperCase() === str;
}

myFind(['bootcamp', 'PREP', 'IS', 'fun'], isUpper) => 'PREP'
myFind(['hello', 'world'], isUpper) => undefined


function isEven(n) {
  return n % 2 === 0;
}

myFind([11, 7, 10, 20], isEven) => 10
myFind([3, 5, 9], isEven) => undefined
*******************************************************************************/

function myFind(arr, cb) {
  // your code here...
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = myFind;
