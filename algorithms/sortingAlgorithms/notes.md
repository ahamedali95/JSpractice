# Time Complexity

### What is time complexity?

It is a way for us show to how the runtime of the increases as the size of the input
increases.

```js
function linearSearch(array, target) {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === target) return i;
  }

  return -1;
}
```

In the above example, the time complexity is linear time because the iteration
will run until it reaches the end of the array. So that means the runtime will
increase as the size of the input grows.

### Other units of time complexity

1. Constant time
2. Quadratic time

### What is Big O notation?

It is a way for us to express the time complexity in a mathematical way.

1. Linear time - ```O(n)```
2. Constant time - ```O(1)```
3. Quadratic time - ```O(n^2)```

### Steps to take in determining time complexity

1. find the fastest growing term
2. take out the coefficient

Examples:

```
T = an + b = O(n)
T = an^2 + dn + e = O(n^2)
```

### Quadratic time complexity

First we'll consider loops where the number of iterations of the inner loop is independent of the value of the outer loop's index. For example:

```js
 for (i = 0; i < N; i++) {
     for (j = 0; j < M; j++) {
         sequence of statements
      }
  }
```

The outer loop executes N times. Every time the outer loop executes, the inner loop executes M times. As a result, the statements in the inner loop execute a total of N * M times. Thus, the total complexity for the two loops is O(N2).
