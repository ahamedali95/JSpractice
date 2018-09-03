// An isogram is a word with only unique, non-repeating letters.
// Given two isograms of the same length, return an array with two numbers
// indicating matches: the first number is the number of letters matched in both
// words at the same position, and the second is the number of letters matched in
// both words but not in the same position.
//
// Examples:
//
// isogramMatcher("an", "at"); //=> [1, 0]
// isogramMatcher("or", "go"); //=> [0, 1]
// isogramMatcher("cat", "tap"); //=> [1, 1]
// isogramMatcher("home", "dome"); //=> [3, 0]
// isogramMatcher("ultrasonic", "ostracized"); //=> [3, 4]
// isogramMatcher("unpredictably", "hydromagnetic"); //=> [1, 8]

function isogramMatcher(word1, word2) {
  let countSamePositionLetters = 0;
  let countDifferentPositionLetters = 0;

  for(let i = 0; i < word1.length; i++) {
    const currentChar = word1[i];

    if(currentChar === word2[i]) {
      countSamePositionLetters++;
    } else if(word2.indexOf(currentChar) !== -1) {
      countDifferentPositionLetters++;
    }
  }

  return [countSamePositionLetters, countDifferentPositionLetters];
}
// 
// function isogramMatcher(word1, word2) {
//   return [matchLettersSamePosition(word1, word2), matchLettersDifferentPosition(word1, word2)];
// }
//
// function matchLettersSamePosition(word1, word2) {
//   return [...word1].reduce((accumulator, ele, index) => {
//     return ele === word2[index] ? ++accumulator : accumulator;
//   }, 0);
// }
//
// function matchLettersDifferentPosition(word1, word2) {
//   return [...word1].reduce((accumulator, ele, index) => {
//     return word2.indexOf(ele) !== -1 && ele !== word2[index] ? ++accumulator : accumulator;
//   }, 0);
// }
