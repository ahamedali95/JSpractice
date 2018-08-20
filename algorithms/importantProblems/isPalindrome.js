//BOB
//mmnmm
//RACEECAR


// function isPalindrome(string) {
//   for(let i = 0; i < Math.ceil(string.length / 2); i++) {
//     if(string[i] !== string[string.length - 1 - i]) return false;
//   }
//
//   return true;
// }

function isPalindrome(string) {
  if(string.length === 0) return true;
  if(string[0] !== string[string.length - 1]) return false;

  return isPalindrome(string.slice(1, string.length - 1));
}
