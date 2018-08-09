// Write a function `reverseStr(str)` that takes in a string as a parameter and
// returns the string but with the characters in reverse.
//
// Examples:
//
// reverseStr('bootcamp'); //=> 'pmactoob'
// reverseStr('App Academy'); //=> 'ymedacA ppA'

const reverseStr = (str) => {
  let newStr = "";

  for(let i = str.length - 1; i > 0; i--) {
    newStr += str[i];
  }

  return newStr;
}
