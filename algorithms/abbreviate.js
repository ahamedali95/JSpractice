// Write a function `abbreviate(sentence)` that takes in a sentence string and
// returns a new sentence where words longer than 4 characters have their vowels
// removed. Assume the sentence has all lowercase characters.
// Feel free to use the array below in your solution:
//
// var vowels = ['a', 'e', 'i', 'o', 'u'];
//
// Examples:
//
// abbreviate('bootcamp prep is fun'); // => 'btcmp prep is fun'
// abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
// abbreviate('hello world'); // => 'hll wrld'
// abbreviate('how are you'); // => 'how are you'

const abbreviate = (sentence) => {
  return sentence.split(" ").map(ele => {
    if(ele.length > 4) {
      return ele.replace(/[aeiou]/ig,'')
    } else {
      return ele;
    }
  }).join(" ");
}
