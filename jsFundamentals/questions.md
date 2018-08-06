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

30. What is prototypical inheritance?
Follow up: what is the prototype property? Give an example of prototypical inheritance.
31. Walk me through how prototypical inheritance is implemented in JS arrays:

```js
Array.prototype
```
32. How do you access the prototype property of an object in the browser?
33. Write any two methods that will be returned by the following code:

```js
[].__proto__
```
34. Why do we use prototypical inheritance?
Hint: Think in terms of the browser memory.
35. Modify the JS Array's prototype property to include a method called ```uniq```. This method takes an array and returns only the unique elements in the array. Please feel free to use your browser console.
36. What is prototype chaining?
37. What is the expected output of running the following program:

```js
function User(name, email) {
  this.name = name;
  this.email = email;
}

User.prototype.sayHello = function() {
  return "My name is " + this.name;
}

const daniel = new User("Daniel", "daniel123@usa.com");
//__proto__ holds the reference to the prototype property of the constructor function which helped to create out object.
daniel.__proto__ == User.prototype;
daniel.sayHello();

function Student(name, email, studentId) {
  this.name = name;
  this.email = email;
  this.studentId = studentId;
  this.constructor = Student
}

Student.prototype = new User();
const ahamed = new Student("ahamed", "ahamed@usa.com", 8)
ahamed.sayHello();
```

38. What is the expected output of running the following program:

```JS
function sayMyName() {
  return "My name is " + this.name;
}

sayMyName();

const joe = {
  name: "Joe",
  sayMyName: sayMyName
};

joe.sayMyName();
```

39. What is the difference between ```apply``` and ```call```.
Follow up: Give an example
40. What is the expected output of running the following code:

```js
const fruit = {
  name: "Jackfruit",
  getFruitName: function() {
    (function whatIsIt() {
       console.log(this);
    }).bind(this)();
  }
}

// person.sayHello();
fruit.getFruitName();
```
Follow up: Rewrite the ```whatIsIt``` function without using ```bind``` but still bounding the value of ```this``` to the value that is passed in.

41. REPEATED QUESTION: Why do functions considered as *first-class* citizens in JavaScript?
42. What is the difference between pass by value and pass by reference?
Follow up: What data types are passed by value? What are not?
43. What is functional programming?
Follow up: What is a pure function in JS? What is immutability? What are some ways we can enforce immutability in arrays and objects?
44. What is a higher-order function?
Follow up: Why is it used?
45. What is the DOM?
46. What is the difference between pessimistic rendering and optimistic rending?
47. Why do we use event delegation?
48. What is the difference between bubbling and capturing?
49. What is the expected output of the following code:


```html
<ul id="list">
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

```js
document.addEventListener("DOMContentLoaded", function() {
  const listItems = document.querySelectorAll("li");

  for(var i = 0; i < listItems.length; i++) {
  	listItems[i].addEventListener("click", function() {
  		console.log(i + 1);
  	});
  }
});
```

![javascript closure inside loops simple practical example stack overflow](https://user-images.githubusercontent.com/24445922/43697116-cb311650-990f-11e8-8795-32bf3af74b47.png)

50. What is the difference between synchronous and asynchronous execution?
51. What is the expected output of running the following code:


```js
function scheduler() {
  console.log("I am the scheduler");

  setTimeout(function() {
    console.log("ring! ring! ring!")
  }, 2000);

  console.log("not awake!")
}

scheduler();
```

```js
function scheduler() {
  console.log("I am the scheduler");

  setTimeout(function() {
    console.log("ring! ring! ring!")
  }, 0);

  console.log("not awake!")
}

scheduler();
```

```js
for(let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 2000);
}
```

52. What is AJAX?
53. What is a promise?
54. What is the difference between XMLHttpRequest and Fetch?




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
