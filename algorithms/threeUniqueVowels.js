// Write a function threeUniqueVowels(string) that takes in a string and returns true
// if the string contains at least three different vowels.
// Vowels are a, e, i, o, u
//
// Examples:
//
// threeUniqueVowels('delicious'); // => true
// threeUniqueVowels('bootcamp prep'); // => true
// threeUniqueVowels('bootcamp'); // => false
// threeUniqueVowels('dog'); // => false
// threeUniqueVowels('go home'); // => false

function threeUniqueVowels(str) {
  const vowels = [..."aeiou"];
  const vowelsFound = [];

  for(let i = 0; i < str.length; i++) {
    const currentChar = str[i];

    if(vowels.indexOf(currentChar) !== -1 && vowelsFound.indexOf(currentChar) === -1) {
      vowelsFound.push(currentChar);
    }
  }

  return vowelsFound.length >= 3;
}
