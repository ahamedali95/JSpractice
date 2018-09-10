const matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

//0th array 0th ele
//1st array 0th ele
//2nd array 0th ele
//0th array 1th ele
//1st array 1th ele
//2nd array 1th ele
//0th array 2th ele
//1st array 2th ele
//2nd array 2th ele


rotate(matrix) => [
  [1,4,7],
  [2,5,8],
  [3,6,9]
]


function rotate(matrix) {
  const rotatedMatrix = [];
  let arr = [];
  let counter = 0;

  for(let i = 0; i < matrix.length * matrix.length; i++) {
    const innerArr = matrix[i % matrix[0].length];
    arr.push(innerArr[counter]);

    if(arr.length === matrix[0].length) {
      rotatedMatrix.push([...arr]);
      arr = [];
      counter++;
    }
  }

  return rotatedMatrix;
}



function rotate(matrix) {
  const rotatedMatrix = [...Array(matrix.length).keys()].map(ele => []);

  for(let i = 0; i < matrix.length; i++) {
    const innerArr = matrix[i];

    for(let j = 0; i < matrix.length; j++) {
      rotatedMatrix[i].push(innerArr[i]);
    }
  }

  return rotatedMatrix;
}
