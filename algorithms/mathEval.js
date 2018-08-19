
/*#### Math Eval ####
# Eval is a function that takes a string and executes it as code. This
# can be very complicated to implement, so you will only need to
# implement a small subset.
#
# Write a function math_eval that takes a string and evaluates single-digit
# numbers as well as the 4 basic arithmetic functions ( + - * / ). Do not worry about
# parentheses or order of operations. Just evaluate everything from left
# to right. You may also assume that you will be given syntactically
# correct statements with no spaces or extra characters.
#
# Constraint: You may not call eval or any similar function.
#
# Examples:
# math_eval('5') => 5
# math_eval('5+5') => 10
# math_eval('1+2*3') => 9
#
# Bonus: If you have extra time, support double-digit numbers.
# math_eval('10*2/5+16') => 20
*/

function mathEval(string) {
  if(string.length === 1 || string.length === 2) return Number(string[0]);

  const operations = [..."+-*/"];
  let result = 0;

  for(let i = 0; i < string.length; i++) {
    if(operations.indexOf(string[i]) !== -1) {
      const num1 = Number(string[i-1]);
      const num2 = Number(string[i+1]);
      const operation = string[i];
      result += evaluate(num1, num2, operation);
    }
  }

  return result;
}

function evaluate(num1, num2, operation) {
  switch(operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
}
