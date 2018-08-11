// Write a function `longWordCount(string)` that takes in a string and returns the
// number of words longer than 7 characters.
//
// Examples:
//
// longWordCount(""); // => 0
// longWordCount("short words only"); // => 0
// longWordCount("one reallylong word"); // => 1
// longWordCount("two reallylong words inthisstring"); // => 2
// longWordCount("allwordword longwordword wordswordword"); // => 3
// longWordCount("seventy schfifty five"); // => 1

const longWordCount = (string) => {
  return string.split(" ").reduce((accumulator, word) => {
    return word.length > 7 ? accumulator += 1 : accumulator += 0;
  }, 0);
}
