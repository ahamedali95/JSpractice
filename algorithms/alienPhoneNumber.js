/*#### Alien Phone Number ####
# There is a nearby alien planet whose numbers are formatted as
# "xxxx xxxx" where "x" is any numerical digit (0-9). Write a function
# that determines whether a given string is a valid alien phone number.
#
# constraint: You may not use RegExp.
#
# examples:
# alien_phone_number?('1234 5678') #=> true
# alien_phone_number?('ar32 t19i) #=> false
# alien_phone_number?('123 45678') #=> false
# alien_phone_number?('12345678') #=> false
# alien_phone_number?('1234 567') #=> false
# alien_phone_number?('12345 12345') #=> false
*/

function alienPhoneNumber(string) {
  if(string.length !== 9 || string[4] !== " ") return false;

  const nums = [...new Array(10).keys()].map(ele => ele.toString());;

  for(let i = 0; i < string.length; i++) {
    if(nums.indexOf(string[i]) === -1 && i !== 4) return false;
  }

  return true;
}
