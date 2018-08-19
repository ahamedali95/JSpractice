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

// const countRepeats = (string) => {
//   let count = 0;
//   const letters = [];
//
//   for(let i = 0; i < string.length; i++) {
//     const char1 = string[i];
//     for(let j = i + 1; j < string.length; j++) {
//       const char2 = string[j];
//       if(char1 === char2 && letters.indexOf(char1) === -1) {
//         letters.push(char1);
//       }
//     }
//   }
//
//   return letters.length;
// }

function countRepeats(string) {
  const tally = {};
  const repeatCount = 0;

  for(let i = 0; i < string.length; i++) {
    const currentChar = string[i];

    if(currentChar in tally) {
      tally[currentChar] = 1;
    } else {
      tally[currentChar]++;
    }
  }

  for(const ele in tally) {
    if(tally[ele] > 1) repeatCount++;
  }

  return repeatCount;
}
