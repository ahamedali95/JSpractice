// Write a function `uncompressString(str)` that takes in a "compressed" string and
// returns the "uncompressed" version of the string. In the input `str`, every
// letter is followed by a single digit number that specifies how many times that
// character is repeated. See the examples.
//
// HINT: Use the built-in `Number` function to turn the string representation of
// a number into a number
// Number('42'); // => 42;
//
// Examples:
//
// uncompressString('a2b4c1'); // => 'aabbbbc'
// uncompressString('b1o2t1'); // => 'boot'
// uncompressString('x3y1x2z4'); // => 'xxxyxxzzzz'

function uncompressString(str) {
  let uncompressedString = "";

  for(let i = 0; i < str.length - 1; i++) {
    const char = str[i];
    const times = str[i+1];

    uncompressString += char.repeat(Number(times));
  }

  return uncompressedString;
}
