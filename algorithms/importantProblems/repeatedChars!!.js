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

function repeatedChars(str) {
  const chars = [];
  let count = 0;

  for(let i = 0; i < str.length - 1; i++) {
    const currentChar = str[i];
    const nextChar = str[i+1];

    if(currentChar === nextChar) {
      count++;
    } else {
      cout = 0;
    }

    if(count === 1) chars.push(currentChar);
  }

  return count;
}

function repeatedChars(str) {
  const chars = [];

  for(let i = 0; i < str.length - 1; i++) {
    const currentChar = str[i];
    const nextChar = str[i+1];
    const previousChar = str[i-1];

    if(currentChar === nextChar && currentChar !== previousChar) chars.push(currentChar);
  }

  return chars;
}
