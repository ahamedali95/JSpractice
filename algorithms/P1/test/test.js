/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***********************/

var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var evenRange = tryRequire('../problems/1_even_range.js');
var reverseString = tryRequire('../problems/2_reverse_string.js');
var intersect = tryRequire('../problems/3_intersect.js');
var fuzzBizz = tryRequire('../problems/4_fuzz_bizz.js');
var arrayRange = tryRequire('../problems/5_array_range.js');



describe('evenRange()', function () {
  it('should return an array of even numbers between "start" and "end"', function () {
    assert.deepEqual(evenRange(13, 20), [ 14, 16, 18, 20 ]);
    assert.deepEqual(evenRange(4, 11), [ 4, 6, 8, 10 ]);
  });

  it('should return empty array if "start" > "end"', function () {
    assert.equal(evenRange(8, 5).length, 0);
  });
});

describe('reverseString()', function () {
  it('should return the hyphenated string reversed', function () {
    assert.equal(reverseString("Go-to-the-store"), "store-the-to-Go");
    assert.equal(reverseString("Jump,-jump-for-joy"), "joy-for-jump-Jump,");
  });
});

describe('intersect()', function () {
  it('should return an array containing the common elements between arr1 and arr2', function () {
    var result1 = intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']);
    var answer1 = [ 'b', 'd' ];
    assert.deepEqual(result1.sort(), answer1);

    var result2 = intersect(['a', 'b', 'c'], ['x', 'y', 'z']);
    var answer2 = []
    assert.deepEqual(result2, answer2);
  });
});

describe('fuzzBizz()', function () {
  it('should return an array of numbers divisible by 2 or 7, but not divisible by both', function () {
    var result1 = fuzzBizz(17);
    var answer1 =  [ 2, 4, 6, 7, 8, 10, 12, 16 ]
    assert.deepEqual(result1, answer1);

    var result2 = fuzzBizz(30);
    var answer2 = [ 2, 4, 6, 7, 8, 10, 12, 16, 18, 20, 21, 22, 24, 26 ]
    assert.deepEqual(result2, answer2);
  });
});

describe('arrayRange()', function () {
  it('should return an array of numbers from `min` to `max`, at `step` intervals', function () {
    var result1 = arrayRange(0, 12, 2);
    var answer1 = [ 0, 2, 4, 6, 8, 10, 12 ];
    assert.deepEqual(result1, answer1);

    var result2 = arrayRange(2, 5, 1);
    var answer2 = [ 2, 3, 4, 5 ];
    assert.deepEqual(result2, answer2);
  });

  it('should return an empty array if there are no numbers in the given range', function () {
    var result1 = arrayRange(100, 20, 3);
    var answer1 = [];
    assert.deepEqual(result1, answer1);
  });
});
