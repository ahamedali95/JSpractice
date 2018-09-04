// Write a function `reverseHipsterfy(sentence)` that takes in a sentence and removes
// all vowels, except the last vowels of every word.
//
// Examples:
//
// reverseHipsterfy("proper"); // => 'prper' => reporp
// reverseHipsterfy("proper tonic panther"); // => 'prper tnic pnther'
// reverseHipsterfy("bootcamp prep"); // => 'btcamp prep'
// reverseHipsterfy("towel flicker banana"); // => 'twel flcker bnna'
// reverseHipsterfy("runner anaconda"); // => 'rnner ncnda'
// reverseHipsterfy("turtle cheeseburger fries"); // => 'trtle chsbrger fres'



function reverseHipsterfy(str) {
  return str.split(" ").map(ele => {
    return hipsterfy(ele);
  }).join(" ");
}

function hipsterfy(word) {
  let reversedWord = word.split("").reverse().join("");
  let isTheFirstTime = true;
  let newStr = "";
  const vowels = [..."aeiou"];

  for(let i = 0; i < reversedWord .length; i++) {
    const currentChar = reversedWord[i];

    if(isTheFirstTime && vowels.indexOf(currentChar) !== -1) {
      isTheFirstTime = false;
      newStr += currentChar;
    } else if(vowels.indexOf(currentChar) === -1){
      newStr += currentChar;
    }
  }

  return newStr.split("").reverse().join("");
}

//
// function reverseHipsterfy(sentence) {
//   return sentence.split(" ").map(word => {
//     return hipsterfy(word);
//   }).join(" ");
// }
//
// function hipsterfy(word) {
//   const vowels = [..."aeiou"];
//   let newWord = "";
//   let isTheFirstTime = true;
//
//   for(let i = word.length - 1; i >= 0; i--) {
//     const currentChar = word[i];
//     const isAvowel = vowels.indexOf(currentChar) !== -1;
//
//     if(isTheFirstTime && isAvowel) {
//       newWord += currentChar;
//       isTheFirstTime = false;
//     } else if(!isAvowel) {
//       newWord += currentChar;
//     }
//   }
//
//   return newWord.split("").reverse().join("");
// }
