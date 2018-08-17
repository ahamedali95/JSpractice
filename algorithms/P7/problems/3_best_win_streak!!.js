/*******************************************************************************
Write a function bestWinStreak that takes in a string of W's (wins) and L's (losses).
The function should return a number representing the longest consecutive streak
of wins. You may assume the only characters in the string are 'W' and 'L'.

Examples:

bestWinStreak('WWLWWWLWW') => 3
bestWinStreak('WWLLWWWWW') => 5
bestWinStreak('WWWW') => 4
bestWinStreak('LLL') => 0
*******************************************************************************/

function bestWinStreak(str) {
  let longestStreak = 0;
  let currentStreak = 0;

  for(let i = 0; i < str.length; i++) {
    const currentChar = str[i];

    if(currentChar === "W") {
      currentStreak++;
    } else {
      currentStreak = 0;
    }

    if(currentStreak > longestStreak) {
      longestStreak = currentStreak;
    }
  }

  return longestStreak;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = bestWinStreak;
