// https://www.youtube.com/watch?v=6Gv8vg0kcHc

function bubbleSort(array) {
  let isSorted = false;
  let lastUnsorted = array.length - 1;

  while(!isSorted) {
    isSorted = true;

    for(let i = 0; i < lastUnsorted; i++) {
      const currentNum = array[i];
      const nextNum = array[i+1];

      if(currentNum > nextNum) {
        swap(array, index, index + 1);
        isSorted = false;
      }
    }
    lastUnsorted--;
  }
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// To calculate the complexity of the bubble sort algorithm, it is useful to
// determine how many comparisons each loop performs. For each element in the array,
// bubble sort does n - 1 comparisons. In big O notation, bubble sort performs O(n) comparisons.
// Because the array contains n elements, it has an O(n) number of elements. In other words,
// bubble sort performs O(n) operations on an O(n) number of elements, leading to a
// total running time of O(n^2).
