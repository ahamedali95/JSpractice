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
  const tally = {};

  for(let i = 0; i < word1.length; i++) {
    const currentChar = word1[i];

    if(currentChar in tally) {
      tally[currentChar]++;
    } else {
      tally[currentChar] = 1;
    }
  }

  for(let i = 0; i < word2.length; i++) {
    const currentChar = word2[i];

    if(currentChar in tally) {
      tally[currentChar]--;
    } else {
      return false;
    }
  }

  for(const char in tally) {
    if(tally[char]) return false;
  }

  return true;
}
