// Write a function removeNthLetter(word, n) that takes in
// a string and an index `n`. The function should return
// that word with the character at index `n` removed.
//
// Examples:
//
// removeNthLetter('bootcamp', 0); // => 'ootcamp'
// removeNthLetter('bootcamp', 6); // => 'bootcap'
// removeNthLetter('bootcamp', 4); // => 'bootamp'
// removeNthLetter('computer', 3); // => 'comuter'

function removeNthLetter(word, n) {
  return word.split("").filter((ele, index) => {
    return index === n ? "" : ele;
  }).join("");
}
