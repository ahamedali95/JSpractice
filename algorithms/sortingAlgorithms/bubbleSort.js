function bubbleSort(array) {
  let isSorted = false;
  let lastUnsorted = array.length - 1;

  while(!isSorted) {
    isSorted = true;

    for(let i = 0; i < ; i++) {
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
