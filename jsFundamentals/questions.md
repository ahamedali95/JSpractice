# Rapid-fire Round Questions:

1. What is JavaScript?
2. What is a variable?
3. What are the data types in JavaScript?
4. what is the difference between var, let and const?
5. What is the difference between == and === ?
   Follow up:
   what is the result of the following?
   - "5" == 5?
   - [] == true
   - null == null
   - null == undefined
   - undefined == undefined
   - [] == ""

6. What is the difference between undefined and null?
7. What is NaN?
   Follow-up: how do you check whether something is not a number?
8. What is the difference between truthy and falsey values in JavaScript?
9. How do you check for the equality of two objects?
10. How could you set a prefix before everything you log? for example, if you log('my message') it will log: "(app) my message"
11. How does JavaScript evaluates !!null?
12. What is an execution context in JavaScript?
13. What is lexical scope?
    Follow up: Provide an example
14. What is a closure?
    Follow up: How do you create a closure? Give me an example. Give a use case of a closure?
15. What is the expected output of the following code:

```js
const x = "I am global";

function foo() {
  console.log(x);
  const x = "I am local";
}

foo();
```

```js
const y = "My name is bar";

function second() {
  function first() {
    console.log(y);
  }

  const y = "My name is bar";

  first();
}

second();
```
16.
