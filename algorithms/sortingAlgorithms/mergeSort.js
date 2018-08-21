// https://www.youtube.com/watch?v=pWXioZghP80

//[1,2,3,4] => [1,2] [3,4]
//[1,2,3,4,5] => [1,2] [3,4,5]

//[1, 2, 5]
//[] [9] => [1,2,5,9]


function mergeSort(array) {
  const newArr = [...array];

  if(array.length < 2) {
    return newArr;
  }

  const midPoint = Math.floor(newArr.length / 2);
  const left = newArr.slice(0, midPoint);
  const right = newArr.slice(midPoint);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const sortedArray = [];

  while(left.length && right.length) {
    if(left[0] > right[0]) {
      sortedArray.push(right.slice());
    } else {
      sortedArray.push(left.slice());
    }
  }

  return sortedArray.concat(left, right);
}
