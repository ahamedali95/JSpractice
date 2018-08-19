/*# Given an array of numbers, return an array of all the products
remaining when each element is removed from the array.
# You may wish to write a helper method: array_product.

# products_except_me([2, 3, 4]) => [12, 8, 6], where:
#   12 because you take out 2, leaving 3 * 4
#   8, because you take out 3, leaving 2 * 4
#   6, because you take out 4, leaving 2 * 3

# products_except_me([1, 2, 3, 5]) => [30, 15, 10, 6], where:
#   30 because you take out 1, leaving 2 * 3 * 5
#   15, because you take out 2, leaving 1 * 3 * 5
#   10, because you take out 3, leaving 1 * 2 * 5
#   6, because you take out 5, leaving 1 * 2 * 3
*/

function productsExceptMe(array) {
  return array.map((ele, index) => {
    return findProduct(array.slice(0, index)) * findProduct(array.slice(index + 1));
  });
}

function findProduct(array) {
  return array.reduce((accumulator, ele) => {
    return accumulator *= ele;
  }, 1);
}
