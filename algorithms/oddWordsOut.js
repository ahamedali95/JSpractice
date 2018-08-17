// Write a function oddWordsOut(sentence) that takes in a sentence string and returns
// the sentence where words with an odd number of characters are removed.
//
// Examples:
//
// oddWordsOut('go to the store and buy milk'); // => 'go to milk'
// oddWordsOut('what is the answer'); // => 'what is answer'

function oddWordsOut(sentence) {
  return sentence.split(" ").filter(word => {
    return word.length % 2 === 0;
  }).join(" ");
}
