// Write a function `hasAllVowels(str)` that takes in a string and returns true if
// the string contains every vowel (a, e, i, o, u) and false otherwise.
//
// Examples:
//
// hasAllVowels('have you gone biking?'); // => true
// hasAllVowels('get out of the way, silly'); // => true
// hasAllVowels('bootcamp prep'); // => false
// hasAllVowels('hello world'); // => false

function hasAllVowels(str) {
  const vowels = [..."aeiou"];
  const vowelsFound = [];

  for(let i = 0; i < str.length; i++) {
    const currentChar = str[i];

    if(vowels.indexOf(currentChar) !== -1 && vowelsFound.indexOf(currentChar) === -1) {
      vowelsFound.push(currentChar);
    }
  }

  return vowelsFound.length === 5;
}
