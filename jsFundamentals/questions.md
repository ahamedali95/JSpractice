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
Follow up: Is the above example a closure?
16. What is the difference between for in and for of loop constructs?
17. What is hoisting?
18. What are some ways that we can create objects in JavaScript?
19. What is the strict mode in JavaScript?
  Follow up: What is the value of this when running a JS file without strict mode?
20. What is the expected output of the following code?

```js
function Car() {

}

Car()

new Car()
```
Follow up: What is the name of this special function in JavaScript? What is its purpose?
21. What is the difference between function declaration and function expression?
Follow up: Give an example.
22. What is an IIFE?
23. Why do functions considered as *first-class* citizens in JavaScript?
24. What is a prototype in JavaScript?
Follow up: How do you create a prototype method in JavaScript?
25. What are some ES6 features you like to use?
26. What is the difference between the keywords new and create in terms of instantiating new objects?
27. What is ```this``` in JavaScript?
28. What is a method in JavaScript?
29. What is the expected output of the following code?

```js
let person = {
  greet: function() {
    return this;
  }
}

person.greet();
person.greet() == person;
```
```js
let person = {
  greet: function() {
    return this;
  }
}

const func = person.greet;
func() == person.greet();
```

```js
let person = {
  greet: function greeting() {
    return function notMyFunc() {
      return this;
    }
  }
}

person.greet()();
```

```js
const callback = function(ele) {
  console.log(this);
  return ele % 2 !== 0;
}

const result = [1,2,3].filter(callback);
console.log(result);
```

```js
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};

myObject.func();
```



**********************************************************
Basic
1. What is the difference between var and let?
2. What is the DOM
3. What is a primitive datatype?
4. What are the six primitive data types?
    1. String, number, boolean, null, undefined, symbol
5. What is the difference between null and undefined?
6.  What is the difference between == and === ?
Intermediate
7. What is a closure and when would you want to use it?
8. Describe bubbling and capturing
9. Describe Hoisting.
10. What is the difference between bind and call/apply?
11. How is this used in functions?
Advanced
12. How do you use __proto__?
13. Describe prototypical inheritance.
14. What is a higher order function?
    1. A function that take functions as an argument or returns them.
15. Describe declarative programming
16. Describe imperative programming
17. What is a promise?
18. How are promises used?
19. Why is event delegation useful?
20. Describe what happens when you enter a website into your address bar.
