// Write a function shiftChars(word, num) that takes in a
// lowercase string and a number.
// The function should return a string where every character
// of the word is shifted `num` times in the alphabet.
//
// Use this alphabet array to help:
//
// var alphabet = [
//   'a','b','c','d','e','f','g','h','i','j','k','l','m',
//   'n','o','p','q','r','s','t','u','v','w','x','y','z'
// ];
//
// Examples:
//
// shiftChars('able', 1); // => 'bcmf'
// shiftChars('apple', 2); //=> 'crrng'
// shiftChars('bootcamp', 3); //=> 'errwfdps'
// shiftChars('zebra', 5); //=> 'ejgwf'


function shiftChars(word, num) {
  const alphabet = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m',
    'n','o','p','q','r','s','t','u','v','w','x','y','z'
  ];

  return word.split("").map(char => {
    const position = alphabet.indexOf(char);
    const shiftBy = position + num;
    return alphabets[shiftBy % 26];
  }).join("");
}
