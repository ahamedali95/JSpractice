// Write a function `titleize(title, stopWords)` that takes in a string `title`
// and an array of strings `stopWords`. Return the `title` where every word that
// does not exist in the `stopWords` array is capitalized; all others lowercase.
//
// Hint: Decompose this problem into helper functions. Perhaps create these,
// - removePunctuation(word)
// - isStopWord(word, stopWords)
//
// var punctuation = [";", "!", ".", "?", ",", "-"];
//
// Examples:
//
// titleize("forest gump, the runner", ["the"])
// => "Forest Gump, the Runner"
//
// titleize("MASTER AND COMMANDER", ["and"])
// => "Master and Commander"
//
// titleize("i LOVE; lover of mine", ["love", "of"])
// => "I love; Lover of Mine"
//
// titleize("shall we dance?", ["dance"])
// => "Shall We dance?"

const titleize = (title, stopWords) => {
  return title.toLowerCase().split(" ").map(ele => {
    return stopWords.indexOf(ele.replace(/[;!.?,-]/g,"")) === -1 ? ele[0].toUpperCase() + ele.slice(1) : ele;
  }).join(" ");
}
