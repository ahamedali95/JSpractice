// Given a string check if it is Pangram or not. A pangram is a sentence containing
// every letter in the English Alphabet.
//
// Examples : The quick brown fox jumps over the lazy dog ” is a Pangram
// [Contains all the characters from ‘a’ to ‘z’]
// “The quick brown fox jumps over the dog” is not a Pangram
//[Doesn’t contains all the characters from ‘a’ to ‘z’, as ‘l’, ‘z’, ‘y’ are missing]

// function isPangram(str) {
//   const alphabets = [..."abcdefghijklmnopqrstuvwxyz"];
//   const newStr = str.toLowerCase().split(" ").join("");
//
//   for(let i = 0; i < alphabets.length; i++) {
//     if(newStr.indexOf(alphabets[i]) === -1) return false;
//   }
//
//   return true;
// }

// function isPangram(str) {
//   const newStr = str.toLowerCase().split(" ").join("");
//   const tally = {};
//
//   for(let i = 0; i < newStr.length; i++) {
//     if(!(newStr[i] in tally)) tally[newStr[i]] = 1;
//   }
//
//   return Object.keys(tally).length === 26;
// }

function isPangram(str) {
  const uniqueCharacters = [...new Set([...str.split(" ").join("")])];

  return uniqueCharacters.length === 26 ? null : findMissingCharacters(uniqueCharacters);
}

function findMissingCharacters(arr) {
  const alphabets = [..."abcdefghijklmnopqrstuvwxyz"];

  return alphabets.filter(alphabet => arr.indexOf(alphabet) === -1).sort();
}
