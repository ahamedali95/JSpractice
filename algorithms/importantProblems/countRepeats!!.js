// Write a function countRepeats(string) that takes in a string and returns the
// number of letters that appear more than once in the string. You may assume
// the string contains only lowercase letters. Count the number of letters that
// repeat, not the number of times they repeat in the string.
//
// Examples:
//
// countRepeats('alvin'); //=> 0
// countRepeats('aaaalvin'); //=> 1
// countRepeats('pops'); //=> 1
// countRepeats('mississippi'); //=> 3
// countRepeats('hellobootcampprep'); //=> 4


function countRepeats(str) {
  const tally = {};
  let count = 0;

  for(let i = 0; i < str.length; i++) {
    const char = str[i];

    if(char in tally) {
      tally[char]++;
    } else {
      tally[char] = 1;
    }
  }

  for(const key in tally) {
    if(tally[key] > 1) count++;
  }

  return count;
}
