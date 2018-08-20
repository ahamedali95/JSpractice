/*#### Decode ####
# You are given an encoded string. The code is defined as follows:
# * Each character in the encoded string is followed by a single-digit number.
# * The number represents how many times the character appears in a row.
#
# Write a function that takes in an encoded string and returns the original.
#
# Example:
# encoded_string = "m1i1s2i1s2i1p2i1"
# decoded_string = decode(encoded_string)
# decoded_string # => "mississippi"
*/

function decode(string) {
  return string.split("").reduce((accumulator, ele, index) => {
    return index % 2 === 0 ? accumulator += ele.repeat(Number(string[index + 1])) : accumulator;
  }, "");
}
