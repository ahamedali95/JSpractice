/*******************************************************************************
Write a function mysticNumbers(max) that returns an array of numbers less than `max`.
Each number should be either divisible by 4 or 6, BUT NOT BOTH. The numbers
should be in reverse-sequential order.

Examples:

mysticNumbers(25) => [ 20, 18, 16, 8, 6, 4 ]
mysticNumbers(14) => [ 8, 6, 4 ]
*******************************************************************************/

function mysticNumbers(max) {
  return [...Array(max).keys()].slice(1).filter(ele => {
    return (ele % 4 === 0 || ele % 6 === 0) && !(ele % 4 === 0 && ele % 6 === 0);
  }).reverse();
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = mysticNumbers;
