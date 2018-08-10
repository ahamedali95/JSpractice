/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***********************/

var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var reverseOddRange = tryRequire('../problems/1_reverse_odd_range.js');
var isSquare = tryRequire('../problems/2_is_square.js');
var mysticNumbers = tryRequire('../problems/3_mystic_numbers.js');
var firstOrLast = tryRequire('../problems/4_first_or_last.js');
var fromMeToYou = tryRequire('../problems/5_from_me_to_you.js');


describe('reverseOddRange()', function () {
  it('should return an array of odd numbers between "start" and "end" in reverse order', function () {
    assert.deepEqual(reverseOddRange(10, 20), [ 19, 17, 15, 13, 11 ]);
    assert.deepEqual(reverseOddRange(3, 7), [ 7, 5, 3 ]);
  });

  it('should return an empty array if there are no numbers in the given range', function () {
    assert.deepEqual(reverseOddRange(9, 5), []);
  });
});


describe('isSquare()', function () {
  it('should return a boolean indicating whether or not a number is a perfect square', function () {
    assert.equal(isSquare(7), false);
    assert.equal(isSquare(15), false);
    assert.equal(isSquare(18), false);
    assert.equal(isSquare(25), true);
    assert.equal(isSquare(100), true);
  });
});


describe('mysticNumbers()', function () {
  it('should return an array of numbers less than max that are divisible by 4 or 6, but not both', function () {
    var result1 = mysticNumbers(25);
    var expected1 = [ 20, 18, 16, 8, 6, 4 ];
    assert.deepEqual(result1.sort(), expected1.sort());

    var result2 = mysticNumbers(14);
    var expected2 = [ 8, 6, 4 ];
    assert.deepEqual(result2.sort(), expected2.sort());
  });

  it('should return the array of numbers in reverse order', function () {
    var result1 = mysticNumbers(25);
    var expected1 = [ 20, 18, 16, 8, 6, 4 ];
    assert.deepEqual(result1, expected1);

    var result2 = mysticNumbers(14);
    var expected2 = [ 8, 6, 4 ];
    assert.deepEqual(result2, expected2);
  });
});


describe('firstOrLast()', function () {
  it('should return the first element if there are an even number of elements in the array', function () {
    assert.equal(firstOrLast(['a', 'b', 'c', 'd']), 'a');
    assert.equal(firstOrLast([1, 2]), 1);
  });

  it('should return the last element if there are an odd number of elements in the array', function () {
    assert.equal(firstOrLast(['Jenny', 'Mary', 'Mark']), 'Mark');
    assert.equal(firstOrLast([1, 2, 3]), 3);
  });
});


describe('fromMeToYou()', function () {
  it('should return the sentence where "me" is replaced with "you"', function () {
    assert.equal(fromMeToYou('that made me laugh'), 'that made you laugh');
    assert.equal(fromMeToYou('love me or hate me'), 'love you or hate you');
  });
});
