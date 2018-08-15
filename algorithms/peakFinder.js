// Write a function `peakFinder(array)` that takes in an array of numbers.
// It should return an array containing the indices of all the peaks. A
// peak is an element that is greater than both of its neighbors. If it is
// the first or last element, it is a peak if it is greater than its one
// neighbor. Assume the array has a length of at least 2.
//
// Hint: this can be solved using a single loop
//
// Examples:
//
// peakFinder([1, 2, 3, 2, 1]); //=> [2]
// peakFinder([2, 1, 2, 3, 4, 5]); //=> [0, 5]
// peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]); //=> [2, 6, 8]


const peakFinder = ((array) => {
  const a = [];

  array.forEach((num, index) => {
    if(index === 0 && num > array[index + 1]) {
      a.push(index);
    } else if(index === array.length - 1 && num > array[index - 1]) {
      a.push(index);
    } else if(num > array[index - 1] && num > array[index + 1]) {
      a.push(index);
    }
  });

  return a;
});
