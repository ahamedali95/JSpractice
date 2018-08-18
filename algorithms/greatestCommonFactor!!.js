// Write a function greatestCommonFactor(num1, num2) that returns the greatest
// common factor between num1 and num2. This means that the function should return
// the largest number that divides both num1 and num2.
//
// Examples:
//
// greatestCommonFactor(6, 10); // => 2
// greatestCommonFactor(10, 15); // => 5
// greatestCommonFactor(4, 7); // => 1
// greatestCommonFactor(4, 8); // => 4
// greatestCommonFactor(45, 30); // => 15


function greatestCommonFactor(num1, num2) {
  let i = 1;
  let gcf = null;

  while(i <= num1 && i <= num2) {
    if(num1 % i === 0 && num2 % i === 0) gcf = i;
    i++;
  }

  return gcf;
}
