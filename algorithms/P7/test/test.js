var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var primeFactors = tryRequire('../problems/1_prime_factors.js');
var bigramArray = tryRequire('../problems/2_bigram_array.js');
var bestWinStreak = tryRequire('../problems/3_best_win_streak.js');
var nextPrimeArray = tryRequire('../problems/4_next_prime_array.js');


describe("primeFactors()", function() {
  it ('should return an array containing all factors of `n` that are prime', function () {
    assert.deepEqual(primeFactors(10), [ 2, 5 ]);
    assert.deepEqual(primeFactors(24), [ 2, 3 ]);
    assert.deepEqual(primeFactors(30), [ 2, 3, 5 ]);
    assert.deepEqual(primeFactors(11), [11]);
  });
});


describe("bigramArray()", function() {
  it ('should return an array of containing all bigrams in the sentence.', function () {
    assert.deepEqual(bigramArray('today is a great day'), [ 'today is', 'is a', 'a great', 'great day' ]);
    assert.deepEqual(bigramArray('bigrams are very useful'), [ 'bigrams are', 'are very', 'very useful' ]);
  });
});


describe("bestWinStreak()", function() {
  it ('should return a number representing the longest consecutive streak of wins.', function () {
    assert.equal(bestWinStreak('WWLWWWLWW'), 3);
    assert.equal(bestWinStreak('WWLLWWWWW'), 5);
    assert.equal(bestWinStreak('WWWW'), 4);
    assert.equal(bestWinStreak('LLL'), 0);
  });
});


describe("nextPrimeArray()", function() {
  it ('should return a new array where each prime number is replaced with the prime number that come next sequentially.', function () {
    assert.deepEqual(nextPrimeArray([-4, 2, 5, 4, 11]), [ -4, 3, 7, 4, 13 ]);
    assert.deepEqual(nextPrimeArray([9, 13, 5, 6]), [ 9, 17, 7, 6 ]);
    assert.deepEqual(nextPrimeArray([]), []);
  });
});
