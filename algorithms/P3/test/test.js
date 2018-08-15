/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***********************/

var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var isElement = tryRequire('../problems/1_is_element.js');
var minMaxProduct = tryRequire('../problems/2_min_max_product.js');
var phraseFinder = tryRequire('../problems/3_phrase_finder.js');
var multiples = tryRequire('../problems/4_multiples.js');
var valueReplace = tryRequire('../problems/5_value_replace.js');


describe('isElement()', function () {
  it('should return a boolean indicating if the element is found inside the array', function () {
    assert.equal(isElement([1,2,3,4,5], 5), true);
    assert.equal(isElement(["a", "b", "c"], "a"), true);
    assert.equal(isElement(["a", "b", "c"], "d"), false);
  });
});


describe('minMaxProduct()', function () {
  it('should return the product of the min and max value of the array.', function () {
    assert.equal(minMaxProduct([6, 3, 7, 2]), 14);
    assert.equal(minMaxProduct([0, 1, -5, 3, 6]), -30);
  });
});


describe('phraseFinder()', function () {
  it('should return a boolean indicating if the phrase can be formed by a pair of the given words', function () {
    assert.equal(phraseFinder(['world', 'prep', 'hello', 'bootcamp'], 'bootcamp prep'), true);
    assert.equal(phraseFinder(['world', 'prep', 'hello', 'bootcamp'], 'bootcamp prep'), true);
    assert.equal(phraseFinder(['world', 'prep', 'hello', 'bootcamp'], 'hello world'), true);
    assert.equal(phraseFinder(['world', 'prep', 'hello', 'bootcamp'], 'hello prep'), true);
    assert.equal(phraseFinder(['world', 'prep', 'hello', 'bootcamp'], 'hello goodbye'), false);
  });
});


describe('multiples()', function () {
  it('should return an array of positive numbers less than `max` that are divisible by `num`', function () {
    assert.deepEqual(multiples(10, 2), [ 2, 4, 6, 8 ]);
    assert.deepEqual(multiples(15, 3), [ 3, 6, 9, 12 ]);
  });
});


describe('valueReplace()', function () {
  it('should return a new array where elements of the original array are replaced with their corresponding values in the object', function () {
    var actual1 = valueReplace(['a', 'b', 'c', 'd'], {a: 1, b: 2, d: 4});
    var expected1 =  [ 1, 2, 'c', 4 ];
    assert.deepEqual(actual1, expected1);

    var actual2 = valueReplace(['danny', 'kurstie', 'tommy'], {kurstie: 'operations', danny: 'placements'});
    var expected2 = [ 'placements', 'operations', 'tommy' ];
    assert.deepEqual(actual2, expected2);
  });
});
