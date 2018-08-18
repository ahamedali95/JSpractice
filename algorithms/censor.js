// Write a function `censor(sentence, curseWords)` that censors the given sentence by
// replacing the vowels in curse words with "*". Assume no punctuation.
//
// Examples:
//
// var result1 = censor("Darn you Harold you son of a gun", ["darn", "gun"]);
// result1; //=> "D*rn you Harold you son of a g*n"
//
// var result2 = censor("Schnikeys I dont give a diddly squat", ["schnikeys", "diddly", "squat"]);
// result2; //=> "Schn*k*ys I dont give a d*ddly sq**t"

function censor(sentence, curseWords) {
  return sentence.split(" ").map(ele => {
    return curseWords.indexOf(ele.toLowerCase()) !== -1 ? nonCursive(ele) : ele;
  }).join(" ");
}

function nonCursive(word) {
  const vowels = [..."aeiouAEIOU"];

  return word.split("").map(char => {
    return vowels.indexOf(char) !== -1 ? "*" : char;
  }).join("");
}
