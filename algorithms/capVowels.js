// Write a function called capVowels(string) that takes in a string and returns
// the string where every vowel is capitalized. All other letters should be lowercased.
// Hint: Don't forget that strings are immutable!
//
// Examples:
//
// capVowels('hello world'); // => 'hEllO wOrld'
// capVowels('HELLO WORLD'); // => 'hEllO wOrld'
// capVowels('boOtCamP PreP'); // => 'bOOtcAmp prEp'

const capVowels = (string) => {
  const lowCasedStr = string.toLowerCase();
  const vowels = [..."aeiou"];
  let newStr = "";

  for(let i = 0; i < lowCasedStr.length; i++) {
    const char = lowCasedStr[i];
    if(vowels.indexOf(char) !== -1) {
      newStr += char.toUpperCase();
    } else {
      newStr += char;
    }
  }

  return newStr;
}
