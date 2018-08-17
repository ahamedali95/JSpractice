// Write a function vowelShift(sentence) that takes in a sentence string.
// The function should return a new sentence, where every vowel is replaced
// with the next vowel in the alphabet.
//
// var vowels = ['a', 'e', 'i', 'o', 'u'];
//
// Examples:
//
// vowelShift('bootcamp'); // => 'buutcemp'
// vowelShift('hello world'); // => 'hillu wurld'
// vowelShift('on the hunt'); // => 'un thi hant'

//Iterate throuth the string
//check to see whether there exists a vowel
  //If not exists, then Concanate the char to the counter;
  //If exists, then find out the index where that vowel exist in the vowels collections
    //If it is the last index, then set the index to zero find the element that exists in that index in the collection
    //Otherwise, add one to the index and find the element that exists in that index in the collection
    //Concanate the char to the counter;

function vowelShift(sentence, vowels) {
  let nonVowelStr = "";

  for(let i = 0; i < sentence.length; i++) {
    const currentChar = sentence[i];
    const position = vowels.indexOf(currentChar);

    if(position !== -1) {
      nonVowelStr += vowels[(position + 1) % vowels.length];
    } else {
      nonVowelStr += currentChar;
    }
  }

  return nonVowelStr;
}
