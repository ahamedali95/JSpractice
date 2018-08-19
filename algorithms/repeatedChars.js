// repeatedChars
//
// Write a function `repeatedChars(word) `which takes a string
// and returns an array of all the characters in word that
// appear in a streak (i.e. more than once consecutively).
// This should be case-sensitive.
//
// Examples:
// repeatedChars("aaabaa") => ["a", "a"]
// repeatedChars("mississippi") => ["s", "s", "p"]
// repeatedChars("SSassSS") => ["S", "s", "S"]

function repeatedChars(word) {
  const streaks = [];

  for(let i = 0; i < word.length - 1; i++) {
    if(word[i] === word[i+1] && word[i] !== word[i-1]) {
      streaks.push(word[i]);
    }
  }

  return streaks;
}
