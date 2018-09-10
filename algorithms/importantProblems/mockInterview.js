// Write a function `factorial(n)`, that returns the factorial of the number `n`.
// For example, the factorial of 4 is `4 * 3 * 2 * 1 = 24`.
//
// Examples:
//
// factorial(1); // => 1
// factorial(4); // => 24
// factorial(5); // => 120
// factorial(10); // => 3628800
function factorial(n){
  return Object.keys([...Array(5)]).slice(2).reduce((acc, el) => acc * el);
}

function factorial(n){
  if (n === 1 || n === 0) {
    return 1
  }

  return n * factorial(n-1);
}

 f(4)                 f(3)               f(2)            f(1)

4 * f(3)             3 * f(2)           2 * f(1)           1

4 * 6 = 24          3 * 2 = 6          2 * 1 = 2


// Write a function shiftChars(word, num) that takes in a
// lowercase string and a number.
// The function should return a string where every character
// of the word is shifted `num` times in the alphabet.
//
// Use this alphabet array to help:
//
// var alphabet = [
//   'a','b','c','d','e','f','g','h','i','j','k','l','m',
//   'n','o','p','q','r','s','t','u','v','w','x','y','z'
// ];
//
// Examples:
//
// shiftChars('able', 1); // => 'bcmf'
// shiftChars('apple', 2); //=> 'crrng'
// shiftChars('bootcamp', 3); //=> 'errwfdps'
// shiftChars('zebra', 5); //=> 'ejgwf'

function shiftChars(word, num) {
  const alphabet = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m',
    'n','o','p','q','r','s','t','u','v','w','x','y','z'
  ];
  // newStr = ""
  //
  // for(let i = 0; i < word.length; i++){
  //   let indexOfLetter = alphabet.indexOf(word[i]);
  //   let shift = (indexOfLetter + num) % 26;
  //   newStr += alphabet[shift]
  // }
  // return newStr

  return [...word].map(el => alphabet[(alphabet.indexOf(el) + num) % 26]).join("")
}



// Given a string check if it is Pangram or not. A pangram is a sentence containing
// every letter in the English Alphabet.
//
// Examples : "the quick brown fox jumps over the lazy dog” is a Pangram
// [Contains all the characters from ‘a’ to ‘z’]
// “the quick brown fox jumps over the dog” is not a Pangram
//[Doesn’t contains all the characters from ‘a’ to ‘z’, as 'a', ‘l’, ‘z’, ‘y’ are missing]
//If it not a pangram, then return the missing characters sorted.
// const alphabet = [
//   'a','b','c','d','e','f','g','h','i','j','k','l','m',
//   'n','o','p','q','r','s','t','u','v','w','x','y','z'
// ];

function pangram(string){
  const alphabet = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m',
    'n','o','p','q','r','s','t','u','v','w','x','y','z'
  ];
  const missingLets = []

  let array = string.split("");
  alphabet.forEach(letter => {
    if(!array.includes(letter)) {
      missingLets.push(letter)
    }
  });

  return (missingLets.length === 0 ? true : missingLets)
}

// function pangram(string) {
//   const uniqueChars = [...new Set([...string.split(" ").join("")])];
//
//   return uniqueChars.length === 26 : true ? findMissingLetters(uniqueChars);
// }
//
// function findMissingLetters(chars) {
//   const alphabet = [
//     'a','b','c','d','e','f','g','h','i','j','k','l','m',
//     'n','o','p','q','r','s','t','u','v','w','x','y','z'
//   ];
//
//   return alphabet.filter(char => chars.indexOf(char) === -1);
// }


// Given a 2D board and a word, find if the word exists in the grid.
//
// The word can be constructed from letters of sequentially adjacent cell,
//where "adjacent" cells are those horizontally or vertically neighboring.
//The same letter cell may not be used more than once.
// For example, given board =
//
// [
//   ["ABCE"],
//   ["SFCS"],
//   ["ADEE"]
// ]
//[ABCESFCSADEE]  = A: 0 B: 0 C: 0 < 0
// word = "ABCCED", -> returns true,
// word = "SEE", -> returns true,
// word = "ABCB", -> returns false.

function isWordExist(board, word){
  //Reduce takes a callback function and applies it against the accumulator
  //to reduce the targeted array from left to right to a single value.
  const oneDBoard = board.reduce((acc, arr) => {
    return acc = acc.concat(arr)
  }, []).join("");

  const obj = {}

  for (let i = 0; i < oneDBoard.length; i++){
    if(obj[oneDBoard[i]]) {obj[oneDBoard[i]] += 1}
    else{obj[oneDBoard[i]] = 1}
  }

  // a: 1, b: 1, c:1
  // abcb

  //iterate through word and then
  //if char exists in obj,
  //decrement by 1
  //else
  //false

  //iterate through object,
  //if any value < 0, then return false;

    // a: 0, b: -1, c: 0
  //abcb
  console.log(obj)
  for(let i = 0; i < word.length; i++){
    if(!(word[i] in obj)) {
      return false
    } else{
      obj[word[i]] -= 1
    }
  }
  console.log(obj)
  // a: 0, b: -1, c: 0
  //[0,-1,0]
  const vals = Object.values(obj)
  for(let i = 0; i < vals.length; i++){
    if(vals[i] < 0){
      return false
    }
  }
  return true
}
const matrix = [
  ["ABCE"],
  ["SFCS"],
  ["ADEE"]
];

const word = "ABCCED";
isWordExist(matrix, word)


const flattenArray = (arr) => {
  return arr.reduce(((accumulator, ele) => accumulator.concat(ele)), [])
}

const createTallyObject = (str) => {
  const tally = {};

  for(let i = 0; i < str.length; i++) {
    const currentChar = str[i];

    if(currentChar in tally) {
      tally[currentChar]++;
    } else {
      tally[currentChar] = 1;
    }
  }

  return tally;
}

const characterOccurenceCheck = ((obj, str) => {
  console.log(str)
  const tally = {...obj};

  for(let i = 0; i < str.length; i++) {
    const currentChar = str[i];

    if(!(currentChar in tally)) {
      return false;
    } else {
      tally[currentChar]--;
    }
  }

  return tally;
});

const isAnyValueLessThanZero = (obj) => {
  const tally = {...obj};

  for(const key in tally) {
    if(tally[key] < 0) return false;
  }

  return true;
}

const isWordExist = (arr, word) => {
  const flattenedArr = flattenArray(arr).join("");
  const tally = createTallyObject(flattenedArr);
  const result = characterOccurenceCheck(tally, word);

  return isAnyValueLessThanZero(result);
}


// Write a function fibonacci(n) should should return the nth number in the fibonacci sequence.

// [1,1,2,3]
// 1 2  3 4
//
// recrusive step: f(n - 1) + f(n - 2)
// base step: n is 2 or n is 1 => 1

function fibonacci(n) {
  if(n < 1) return -1;
  if(n === 2 || n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

function nthFib(n){ //4
  if(n <= 1) return 1
  var startArr = [1, 1]
  for(let i = 2; i < n; i++){
    startArr = [startArr[1], startArr[0] + startArr[1]]
  }
  return startArr[1]
}
let matrix = [
  00 01 02 03  04 05
  [1, 2, 3, 4, 5, 6],
  10 11  12 13 14 15
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6]
]

=> [
  00 10 20 30  40 50
  [1, 1, 1, 1, 1, 1],
  [2, 2, 2, 2, 2, 2],
  [3, 3, 3, 3, 3, 3],
  [4, 4, 4, 4, 4, 4],
  [5, 5, 5, 5, 5, 5],
  [6, 6, 6, 6, 6, 6]
]


const rotateMatrix = (matrix) => {
  const result = [];
  let index = 0;
  let arr = [];
  const matrixLength = matrix.length;

  for(let i = 0; i < matrixLength * matrixLength; i++) {
    const innerArr = matrix[i % matrixLength];
    arr.push(innerArr[index]);

    if(arr.length === matrixLength) {
      result.push([...arr]);
      arr = [];
      index++;
    }
  }

  return result;
}


let matrix = [
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6]
]

rotateMatrix(matrix)


const rotateMatrix2 = (matrix) => {
  const rotatedMatrix = [...Array(matrix.length).keys()].map(arr => []);
  //[[],[],[]]
  for(let i = 0; i < matrix.length; i++) {
    const innerArr = matrix[i];

    for(let j = 0; j < matrix.length; j++) {
      rotatedMatrix[j].push(innerArr[j]);
    }
  }

  return rotatedMatrix;
}

function rotateMatrixClockwise(matrix){

  let catcher = []

  for(i = 0; i < matrix.length; i++){ //i:[0,2)
    catcher.push([])
  }
  matrix.forEach((subArr, i, matrix) =>{
    //[1,2]
    for(let i = 0; i < subArr.length; i++){
      //2
      catcher[i].unshift(subArr[i])
    }
  })
  return catcher
}

// tribonacci works basically like a Fibonacci, but summing the last 3 (instead of 2)
//numbers of the sequence to generate the next
// tribonacci([1,1,1],10) => [1,1,1,3,5,9,17,31,57,105]
// tribonacci([3,2,1],10) => [3,2,1,6,9,16,31,56,103,190]

function tribonacci(signature, n) {
  const tribonacciSeq = signature;
  let i = 0;

  if(n === 1) return tribonacciSeq.slice(0, tribonacciSeq.length - 2);
  if(n === 2) return tribonacciSeq.slice(0, tribonacciSeq.length - 1);
  if(n === 3) return tribonacciSeq;

  while(tribonacciSeq.length < n) {
    tribonacciSeq.push(tribonacciSeq[i] + tribonacciSeq[i + 1] + tribonacciSeq[i + 2]);
  }

  return tribonacciSeq;
}

tribonacci([1,1,1],10)

function tribonacci(signature, n) {
  const tribonacciSeq = signature;

  if(n < 1) return -1;
  if(n === 1) return tribonacciSeq.slice(0, tribonacciSeq.length - 2);
  if(n === 2) return tribonacciSeq.slice(0, tribonacciSeq.length - 1);
  if(n === 3) return tribonacciSeq;

  for(let i = 0; i < n - 3; i++) {
    tribonacciSeq.push(tribonacciSeq[i] + tribonacciSeq[i + 1] + tribonacciSeq[i + 2]);
  }

  return tribonacciSeq;
}

tribonacci([1,1,1],10)
