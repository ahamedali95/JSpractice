// Write a function favoriteWord(favoriteLetter, sentence) that takes in a single letter
// and a sentence string. The function should return the word in the sentence that contains
// `favoriteLetter` the most. If there are ties, return the word that appears first
// in the sentence.
//
// Examples
//
// favoriteWord('p', 'sinful caesar sipped his snifter') // => 'sipped'
// favoriteWord('a', 'sinful caesar sipped his snifter') //=> 'caesar'
// favoriteWord('s', 'sinful caesar sipped his snifter') //=> 'sinful'
// favoriteWord('x', 'sinful caesar sipped his snifter') //=> ''

function favoriteWord(favoriteLetter, sentence) {
  const words = sentence.split(" ");
  let word = "";
  let count = 0;

  for(let i = 0; i < words.length; i++) {
    const result = countFavoriteLetter(favoriteLetter, words[i]);
    if(result > count) {
      word = words[i];
      count = result;
    }
  }

  return word;
}

function countFavoriteLetter(letter, word) {
  return word.split("").reduce((accumulator, char) => {
    return char === letter ? accumulator++ : accumulator;
  }, 0);
}
