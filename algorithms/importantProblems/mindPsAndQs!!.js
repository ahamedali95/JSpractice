// Write a function mindPsAndQs(str) that accepts a string of uppercase letters. The
// function should return the length of the longest consecutive streak of the letters
// 'P' and 'Q'.
//
// Examples:
//
// mindPsAndQs('BOOTCAMP'); // => 1
// mindPsAndQs('APCDQQPPC'); // => 4
// mindPsAndQs('PQPQ'); // => 4
// mindPsAndQs('PPPXQPPPQ'); // => 5

function mindPsAndQs(str) {
  let currentStreak = 0;
  let longestStreak = 0;

  for(let i = 0; i < str.length; i++) {
    const currentChar = str[i];

    if(currentChar === "P" || currentChar === "Q") {
      currentStreak++;
    } else {
      if(currentStreak > longestStreak) {
        longestStreak = currentStreak;
        currentStreak = 0;
      }
    }

    if(i === str.length - 1) {
      if(currentStreak > longestStreak) longestStreak = currentStreak;
    }
  }

  return longestStreak;
}
