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
  return [sameIndexMatch(word1, word2), sameLetterMatch(word1, word2)];
}

function sameIndexMatch(word1, word2) {
  return word1.split("").reduce((accumulator, char, index) => {
    return word2[index] === char ? ++accumulator : accumulator;
  }, 0);
}

function sameLetterMatch(word1, word2) {
  let letters = [];
  let count = 0;

  for(let i = 0; i < word1.length; i++) {
    const char1 = word1[i];

    for(let j = 0; j < word2.length; j++) {
      const char2 = word2[j];

      if(char1 === char2 && letters.indexOf(char1) === -1) {
        letters.push(char1);
        count++;
      }
    }
  }

  return count;
}
