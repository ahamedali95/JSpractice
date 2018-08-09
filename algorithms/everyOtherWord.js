// Write a function everyOtherWord(sentence) that takes in a sentence and returns
// an array containing every other word in that sentence.
//
// Examples:
//
// everyOtherWord('hello how are you doing on this lovely day?'); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]
// everyOtherWord('the weather is wonderful'); // => [ 'the', 'is' ]

const everyOtherWord = ((sentence) => {
  const words = sentence.split(" ");

  return words.filter((ele, i) => {
    if(i % 2 === 0) {
      return ele;
    }
  })
});
