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
// word = "ABCCED", -> returns true,
// word = "SEE", -> returns true,
// word = "ABCB", -> returns false.

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
