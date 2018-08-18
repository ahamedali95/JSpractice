// Write a function isUniqueAnagram(word1, word2) that
// takes in two strings. The function should return true
// if the strings are anagrams of each other, false otherwise.
// Anagrams are strings that contain the same characters,
// but not necessarily in the same order. Assume there
// will be no repeated characters in each input string.
//
// Examples:
//
// isUniqueAnagram('iceman', 'cinema'); // => true
// isUniqueAnagram('abcd', 'adcb'); // => true
// isUniqueAnagram('abcd', 'adxb'); // => false
// isUniqueAnagram('abcd', 'abcdx'); // => false

function isUniqueAnagram(word1, word2) {
  if(word1.length !== word2.length) return false;

  for(let i = 0; i < word1.length; i++) {
    const currentChar = word1[i];

    if(word2.indexOf(currentChar) === -1) return false;
  }

  return true;
}

// WHAT IF THERE IS REPEATED CHARACTERS IN EACH INPUT STRING?
// For example:
// isUniqueAnagram('iceeman', 'cinemap')
