/*******************************************************************************
Write a function isPalindrome(sentence) that returns true if the characters of the
sentence string form a palindrome, false otherwise. A palindrome is a word or
phrase that is that is the same forwards and backwards.

Examples:

isPalindrome('rats live on no evil star'); // => true
isPalindrome('stella won no wallets'); // => true
isPalindrome('racecar'); // => true
isPalindrome('hello world'); // => false
*******************************************************************************/

function isPalindrome(str) {
  const newStr = str.split(" ").join(""); //remove all spaces
  const midPoint = Math.floor(newStr.length / 2);

  for(let i = 0; i < midPoint; i++) {
    if(newStr[i] !== newStr[newStr.length - 1 - i]) return false;
  }

  return true;
}

function isPalindrome(str) {
  if(!str.length) return true;
  if(str[0] !== str[str.length - 1]) return false;

  return isPalindrome(str.slice(1, str.length - 1))
}
