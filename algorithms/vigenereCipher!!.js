// # Vigenere's Cipher is a tool for encrypting strings. We'll offset each character
// # according to a key sequence. For example, if we encrypt "bananasinpajamas" with the
// # key sequence [1, 2, 3], the result would be "ccqbpdtkqqcmbodt":
// #
// # Word:   b a n a n a s i n p a j a m a s
// # Keys:   1 2 3 1 2 3 1 2 3 1 2 3 1 2 3 1
// # Cipher: c c q b p d t k q q c m b o d t
// #
// # Note that offsets should wrap around the alphabet - offsetting 'z' by 1 should
// # produce 'a'
//
// # Write a method that takes a string and a key-sequence, returning
// # the encrypted word. Assume only lower-case letters are used.

//Counter to hold the encoded string.
//Generate a colection of english alphabets
//Iterate through the given string - for loop
//Look up the index of the current char in the alphabet collection
//Use the sequence and calculate the shift(sequence + index)
//Find the char that exist after calculating the shift
//Contanate the char to the counter.

const alphabets = [..."abcdefghijklmnopqrstuvwxyz"];

function vigenereCipher(word, keySequence, alphabets) {
  let encodedStr = "";

  for(let i = 0; i < word.length; i++) {
    const position = alphabets.indexOf(word.charAt(i));
    const shift = keySequence[i % keySequence.length] + position;
    encodedStr += alphabets[shift % alphabets.length];
  }

  return encodedStr;
}
