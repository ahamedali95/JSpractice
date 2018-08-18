// Write a function alternateCase(str) that takes in a word and
// returns the word where the characters alternate between
// uppercase and lowercase.
//
// Examples:
//
// alternateCase('BOOTCAMPPREP'); // => 'BoOtCaMpPrEp'
// alternateCase('bOotCamPpREP'); // => 'BoOtCaMpPrEp'
// alternateCase('hello'); // => 'HeLlO'

function alternateCase(str) {
  return str.toLowerCase().split("").map((char, index) => {
    return index % 2 === 0 ? char.toUpperCase() : char;
  }).join("");
}
