// Given a string check if it is Pangram or not. A pangram is a sentence containing
// every letter in the English Alphabet.
//
// Examples : The quick brown fox jumps over the lazy dog ” is a Pangram
// [Contains all the characters from ‘a’ to ‘z’]
// “The quick brown fox jumps over the dog” is not a Pangram
//[Doesn’t contains all the characters from ‘a’ to ‘z’, as ‘l’, ‘z’, ‘y’ are missing]

function isPangram(str) {
  const alphabets = [..."abcdefghijklmnopqrstuvwxyz"];
  const newStr = str.toLowerCase().split(" ").join("");

  for(let i = 0; i < alphabets.length; i++) {
    if(newStr.indexOf(alphabets[i]) === -1) return false;
  }

  return true;
}
