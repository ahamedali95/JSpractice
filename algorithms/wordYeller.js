// Write a function wordYeller(sentence) that takes in a sentence string as
// input. It should return the sentence where every word has an exclamation
// point behind it, except words that already have punctuation. Punctuation
// marks are ". , ! ? ; :"
//
// Example 1
// var sent = "Stop it now! Please, wont you stop?";
// var yelledWords = wordYeller(sent);
// yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true
//
// Example 2
// var words = "Go to the store and grab the following: milk, bread, run, and cake";
// wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"; => true

const wordYeller = (sentence) => {
  const puncMarks = ".,!?;:".split("");

  return sentence.split(" ").map(ele => {
    if(puncMarks.indexOf(ele[ele.length - 1]) === -1) {
      return ele + "!";
    } else {
      return ele;
    }
  }).join(" ");
}
