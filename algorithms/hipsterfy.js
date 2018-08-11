// Write a function `hipsterfy(sentence)` that takes takes a string containing
// several words as input. Remove the last vowel from each word. `'y'` is not a vowel.
//
// Examples:
//
// hipsterfy("proper"); // => "propr"
// hipsterfy("proper tonic panther"); // => "propr tonc panthr"
// hipsterfy("towel flicker banana"); // => "towl flickr banan"
// hipsterfy("runner anaconda"); // => "runnr anacond"
// hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"

const removeLastVowel = (word) => {
  const vowels = [..."aeiou"];
  const newWord = "";

  for(let i = letters.length - 1; i >= 0; i++) {
    if(vowels.indexOf(word[i]) === -1) {
      return word.slice(0, i) + word.slice(i + 1);
    }
  }

  return newWord;
}

const hipsterfy = (sentence) => {
  return sentence.split(" ").map(ele => {
    return removeLastVowel(ele);
  }).join(" ");
}
