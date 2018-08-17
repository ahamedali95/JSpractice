// Write a function `longestBigram(sentence)` that takes in a sentence string and returns
// the longest bigram in the sentence. A bigram is a pair of consecutive words.
// When returning the bigram, include the space between the words.
// Assume there will be no punctuation. In the case of a tie, return the earlier bigram.
//
// Examples:
//
// longestBigram('measure twice cut once'); // => 'measure twice'
// longestBigram("One must have a mind of winter"); // => 'must have'
// longestBigram("go home to eat"); // => 'go home'
// longestBigram("his last assessment is fun"); // => 'last assessment'

//

function longestBigram(sentence) {
  const words = sentence.split(" ");
  let longestBigram = "";
  let longestBigramLen = 0;

  for(let i = 0; i < words.length - 1; i++) {
    const word1 = words[i];
    const word2 = words[i+1];
    const currentBigramLen = (word1 + word2).length;

    if(currentBigramLen > longestBigramLen) {
      longestBigramLen = currentBigramLen;
      longestBigram = `${word1} ${word2}`;
    }
  }

  return longestBigram;
}
