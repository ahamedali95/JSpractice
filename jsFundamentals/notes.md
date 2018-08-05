# JAVASCRIPT

JavaScript is a programming language of the web. Along with HTML, CSS, it is used to create virtually all the web pages and apps we interact with on daily basis. It is an interpreted language which means that it does have to be compiled to machine-readable code. So that means the browser will parse and run exactly the code the user writes. And it has data types, so that at the runtime, the JS engine checks for whether the "types" are okay. So we call JavaScript a dynamically typed language. One thing that makes JS stand out is that JS is a prototype based object oriented language.

- programming language of the web
- created all the web pages
- interpreted language
- dynamic
- prototype based object oriented language

## Imperative vs Declarative

Imperative programming is a programming paradigm where you have to describe the number of steps needed in order for you solve a problem.

Declarative programming is a programming paradigm where your only express what you wanted to do, rather than listing out commands to in order to solve a problem.

Imperative - telling the program how you want to do something
Declarative - telling the program what you want to do.

## Data Types - representing pieces of information

### Primitive Data Types
1. String
2. Boolean
3. Number
4. Undefined
5. Null
6. Symbols

### Complex Data Types  

1. Object

**What is the difference between undefined and null?**

undefined means a variable has been declared but has not yet been assigned a value.

null means a variable has been declared and it is assigned to null representing that the value does not exist.

**What is the only value in JavaScript that is not equal to itself?**

NaN

Describing interactions between different data types in JS.

```js
2 + "Hello" //"2Hello"
2 + "!" + "Hello" //2!Hello
3 + 0.99 //3.99
1 + 3 + "4" + 4 + 5 //"4445"
```

**What is a variable?**

Variable is a container in which we can store values for later retrieval.

**Difference between var, let and const**

var variables can be redeclared and reassigned
let variables can not redeclared, but they cannot be reassigned
const variables can neither be redeclared nor reassigned

In terms of scoping, var variable are not block-scoped.
##  Comparison Operators

### Equality Operators

**Loose equality operator (==)** - returns true if the values are equal. It will also return true if it can perform a type conversion.

**Strict equality operator (===)** - returns true if the values are equal without performing data type conversion. THIS IS LOGICAL AND ACCURATE!

**Loose inequality operator(!=)** - returns true if two values are not equal after performing type conversions.

**Strict inequality operator(!==)** - returns true if the values are not equal without performing type conversions.

### Relational Operators

```js
>, <, >=, <=
```

## Truthy vs Falsey

Truthiness and falsiness indicate what happens when a value is converted to a boolean. If upon conversion, the value is true, we say that it is a truthy value. If not, then the value is falsey.

### Falsey values in JavaScript
1. null
2. undefined
3. false
4. 0
5. NaN
6. An empty string

## Execution Context

Execution context is defined as an environment where the JS code is executed. By environment, I mean the value of this, variables, objects and functions JS code has access to, constitutes its environment.

### Global Execution Context

Every execution context forms its own scope so that means global Execution Context forms a global scope. So when the JS files first loads in the browser, all the global code are executed inside the global execution context. In the global scope, the value of this refers to the window object if the program is not running in the strict mode.  

### Functional execution context

Just how the global execution context forms its own scope, the functional execution context forms its own scope which is the function scope. It is defined as a context by the execution of code inside a function. Functional execution context has access all the code in the global execution context.

## What happens when the JS engine executes a JS file?

It goes through two phases: compilation phase and execution phase

### Compilation Phase

Compilation Phase is a phase where the JS engine steps through our code line-by-line

1. When it comes to variable declaration, it allocates a space in the memory and make the identifier to point to the address in the memory.

2. When it comes to function declaration, it does three things:
   - It allocates a location in the memory and make the identifier to point to the address in the memory.
   - It creates a new execution context with a new scope.
   - It adds a reference to the parent scope(outer scope) to the newly created function scope chain, making variables and functions declared in the outer environment available in the new function's scope.

### Execution phase

This time it runs through our code line-by-line but this time it executes the code, assigning values to variables and invoking functions.

One of the engine's task is the process of matching identifiers to the corresponding values stored in memory. This is known as identifier resolution.

## Scope Chaining

So every JS variable and function have an identifier so that it can refer to later. To identify an identifier, the JS engine will look through the current scope to look to see whether that identifier is declared and then it will start looking through its parent scope and its parent scope until it finds that identifier or reaches the global scope. This way of traversing to look for the identifier is called scope chaining.

## Lexical Scoping

Lexical scoping: Variables declared outside of a function are global variables and are visible everywhere in a JavaScript program. Variables declared inside a function have function scope and are visible only to code that appears inside that function.

The scope of variables  is defined by their position in source code.

//LEXICAL SCOPE

```js
var scope = "I am global";
function whatismyscope(){
   var scope = "I am just a local";
   function func() {return scope;}
   return func;
}

whatismyscope()();

//prints "I am a just a local"
```
In this example, the func() is defined in the scope of whatismyscope(). The JS engine will resolve variable scope by looking at the current scope which is the function scope held by the function func(). It is not declared in the scope of func() so it moves up to the outer scope which is the scope of whatismyscope() and here it makes a stop since it finds a identifier match. So scope will be resolved to the value of "I am just a local".

## Closure

**How are closures created?**

A closure is an inner function which has access to the variables of its outer function with the help of lexical scoping.

**What is lexical scoping?**

Lexical scoping is when variables which are defined in the global scope are visible throughout the JS program, whereas variables declared inside a function is only visible to the code inside of that function.

In closure, the inner function has three scopes: it has access to its own scope; it has access to the variables defined in the outer scope and it has access to the variables which are defined globally.

In addition to having access to the outer function's variables, it can also access the outer function's parameters.

Example:

```js
function greeting(firstName) {
  const x = "Hi, my name is ";

  return function(lastName) {
    return x + " " + firstName + " " + lastName;
  }
}

const greet = greeting("Michael");
greet("Jackson");
```

**One key feature of closure is that it still holds reference to the variable of the outer function even after the inner function is returned.**

One of the use cases of closure is having a global counter:

Consider this following example:

```js
const updateClickCount = (function() {
  var counter = 0;

  return function() {
    ++counter;
    document.getElementById("spnCount").innerHTML = counter;
  }
})();

<button onclick="updateClickCount()">click me</button>
<div> you have clicked
  <span id="spnCount"> 0 </span> times!
</div>
```
## Object Oriented Programming

**How do we create an object in JavaScript using a constructor function?**

```js
function Car() {

}

Car()
//returns undefined

new Car()
//returns an empty object
```

Sample constructor function:

```js
function User(name, email) {
  this.name = name;
  this.email = email;
  this.getInfo = function() {
    return this.name + " - " + this.email;
  }
}

new User("ahamed", "ahamed@usa.com");
// returns { name: "ahamed", email: "ahamed@usa.com", getInfo: function() {} }

//We refer to the object in side the constructor method using the keyword this.
```

**Why do we need prototype functions?**

If we have a constructor method which adds one of the property value being a function like the example above, every time an object gets created, a new function is declared and the browser allocates memory for it. Imagine, we are creating a million objects,  oh no!

It can be checked by the following:
```js
const user1 = new User("ahamed", "ahamed@usa.com");
const user2 = new User("aanaz", "anaz@usa.com");

user1.getInfo === user2.getInfo;
//returns false
```
So JavaScript offers something called Prototype.

## Prototype

A prototype is a JS object which allows us to store properties and methods so that out JS objects can inherit from it.

**How do you create a prototype function?**

```js
function User(name, email) {
  this.name = name;
  this.email = email;
}

User.prototype.getInfo = function() {
  return this.name + " - " + this.email;
}

const user1 = new User("ahamed", "ahamed@usa.com");
user1.getInfo();
//prints "ahamed - ahamed@usa.com"
```

With the help of prototype object, we have avoided the possibility of declaring new functions for every object that is created using the constructor.

## Class

Class is a ES6 feature introduced to JavaScript to encase both the functionality and attributes produced from a constructor in one spot.

For example,

```js
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getInfo() {
    return this.name + " - " + this.email;
  }
}

const user1 = new User("ahamed", "ahamed@usa.com");
user1.getInfo();
//prints "ahamed - ahamed@usa.com"
```

**What is the difference between create and new when creating new objects?**

## Keyword ```this```

### Method call

General rule of thumb:

**If ```this``` is referenced inside a method, then ```this``` refers to the object which received the method call. Otherwise, ```this``` is global.**

For example,

```js
let person = {
  greet: function() {
    return this;
  }
}

person.greet()
//returns person { }

person == person.greet();
//returns true
```

Lets makes this little complicated,

```js
let person = {
  greet: function() {
    return this;
  }
}

person.greet()
//returns person { }

const func = person.greet;
func();
//return window object

func() == person.greet();
//return true;

person == person.greet();
//returns true
```

### Functions within Functions

Note: **A method in JavaScript is a property of an object which points to a function.**

```js
let person = {
  greet: function greeting() {
    return function otherFunc() {
      return this;
    }
  }
}

```

In this above example, if we say person.greet, this will return the function greeting but not otherFunc because no property on an object points to otherFunc(), otherFunc is not a method and as this is reference in our non-method, this is global or the window.

### This and Callbacks

```js
const callback = function(ele) {
  console.log(this);
  return ele % 2 !== 0;
}

const result = [1,2,3].filter(callback);
console.log(result);
//prints
//window
//window
//window
//[1,3]
```

In this example, an array is an object and a method is called on this object. And this method takes in a callback function and this callback function is not called as a property on an object. So whenever the callback function is invoked, it will print out the global object.

### Prototypical Inheritance

Prototypical inheritance is a way for us to implement inheritance using the **prototype property**.

#### What is the prototype property?

The prototype property is a property of a JS object allows us to add methods and properties so that newly created JS objects can able inherit from it.

Every browser has a **_proto_** property that allows for us to see what are the methods of an object.

#### How do you access the prototype property of an object?

```js
[]._proto_
//returns all the methods we can call on this object
```

#### Creating Arrays in JS

We used to create arrays literally, meaning we used the square bracket notation like this: ```[1,2,3]``` but there is another way to create arrays in JS which is using the Array constructor method. **Remember, arrays are objects in JS so that means it must have a constructor method**. It can be created as such: ```new Array(1,2,3)```. We saw that every object must have a prototype property so that means the Array constructor(methods are objects in JS) must also have a prototype property. To modify the properties of this prototype object, we can write something of this nature:

```js
Array.prototype.uniq = function() {
  let newArr = [];

  this.forEach(ele => {
    if(newArr.indexOf(ele) === -1) {
      newArr.push(ele);
    }
  });

  return newArr;
}
```

**What?!** We just modified the prototype property of the Array object to include a method called ```uniq``` which can be used on an instance of an array and get an array with unique elements.

### Prototype chain

Prototype chain is this idea that a newly created instance will have a reference to its parent - the constructor. So that new instance will have all properties and methods from its parent. It's parent being the constructor and its prototype - Object.prototype

Basically, a newly created JS object will have a reference to the prototype object of the constructor function which helped to created this object. So our newly created object can inherit all the properties and methods defined inside this prototype object. During function resolution, when the JS engine first sees the method call on an object, it will start looking at the current object to find the method. If it is not found, then it will start moving up the prototype chain and look at the constructor functions's prototype object. It will start moving up until it finds the method or until reaches the Object.prototype which is the global object.

**Demonstration of JS inheritance and prototype chaining:**

```js
function User(name, email) {
  this.name = name;
  this.email = email;
}

User.prototype.sayHello = function() {
  return "My name is " + this.name;
}

const ahamed = new User("ahamed", "ahamed@usa.com");
// ahamed.__proto__ == User.prototype

function Student(name, email, studentId) {
  this.name = name;
  this.email = email;
  this.studentId = studentId;
  this.constructor = Student
}

Student.prototype = new User()
const abbas = new Student("ahamed", "ahamed@usa.com", 8)
abbas.sayHello()
//returns "My name is Ahamed"
```

Here, we have a User model and Student model. A student is indeed a user so it must posses all properties and methods of the User model. To inherit all the properties and methods from the User model, we have to say ```Student.prototype = new User()```. Indeed, any object that uses the Student () constructor will inherit all the Student.prototype properties and methods and all the properties and methods from the User’s prototype, which is User.prototype. This is the principal manner in which inheritance is implemented in JavaScript and the integral role the prototype chain has in the process.

### Apply, Call, Bind

In JS, we have seen that the value of ```this``` changes depending upon where it is used.

JS allows us to set explicit value for ```this```. That is where methods - ```apply``` and ```call``` plays a huge role.

For example,

```js
function greet() {
  return "My name is " + this.name;
}

greet();
//returns "My name is undefined"

const ahamed = { name: "ahamed" };

greet.apply(ahamed);
//returns "My name is Ahamed"
```

In the above example, we are invoking a function called ```greet``` and the return value for ```this``` is undefined since ```this``` refers to the window object. Then, we are using ```apply``` method on the greet function(all functions in JS are objects so it can have methods) and passed in the object ```ahamed```. Here, we are setting explicit value for ```this,``` so it gets the value of ```this``` from the object that is passed.

#### Apply vs Call

The difference between apply and call is that ```Apply``` takes two arguments - object & array where the arguments for the function is grouped in an array format whereas ```Call``` takes multiple arguments - object, and arguments... where the arguments are given using comma separated values.

For example,

```js
function greet(consumer1, consumer2) {
  return this.message + ", " + consumer1 + " and " + consumer2;
}

const message = { message: "Good morning" };

greet.apply(message, ["ahamed", "abbas"]);
//returns "Good morning, ahamed and abbas"
greet.call(message, "ahamed", "abbas");
//returns "Good morning, ahamed and abbas"
```

#### Bind

In ```apply``` and ```call,``` we set an explicit value for ```this``` and immediately invoked the function. Bind works very similar to these two methods but the difference is that it allows us to execute the function at a later time. We can do so like the following:

```js
function greet() {
  return "My name is " + this.name;
}

const ahamed = { name: "ahamed" };

const func = greet.bind(ahamed);
func();
//returns "My name is ahamed"
```

Moreover, **the bind() method creates a new function instance whose this value is bound to the value that was passed into bind().**

This place a big role in when this is referenced inside the function where we want the value of ```this``` to equal the object this function resides in.

For example,

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
//prints fruit {}
```

### Functional Programming

**What are functions in JS considered to be first-class citizens**?

Functions are *first-class* citizens in JS they can treated as data. It has four abilities:
- They can be stored in a data structure
- They can be passed as an argument to a function
- They can be the return value of a function
- They can be assigned to a variable

**What is the difference between passed by value vs passed by reference?**

In **pass by value**, function is called by directly passing the value of the variable as the argument. Changing the argument inside the function doesn’t affect the variable passed from outside the function. In JS, all primitive data types are passed by value.

In **Pass by Reference**, Function is called by directly passing the reference/address of the variable as the argument. Changing the argument inside the function affect the variable passed from outside the function.

### What is functional programming?

Functional Programming is a programming paradigm that allows us to build software by composing pure functions, avoiding shared state, mutable data and side-effects. Functional Programming is declarative - a programming paradigm where your only express what you wanted to do, rather than listing out commands to in order to solve a problem.

Function programming concerns with:

- Pure Function(Immutability & Side effects)
- Function Composition
- Shared State

**What is a pure function?**

A pure function is a function that
- returns the same output for the same input.
- does not modify the variables defined in the outer scope.
- does not affect the variable passed by reference.

#### Immutability

Since functional programming concerns with immutability - data cannot be changed, we have to make copies of data within the function.

For example,
```js
const obj = {
  num: 2
};

function multiplyByTwo(obj) {
  const newObj = Object.assign({}, obj)
  //or {...obj}
  newObj.num = newObj.num * 2;
  return newObj;
}

multiplyByTwo(obj);
//returns {num: 4}
obj
//returns {num: 2}
```

Similarly, we want to copy an array inside an function using the ```spread``` operator like this:

```js
const arr = [1,2,3];

function addAnElement(arr) {
  return newArr.concat(100);
}

addAnElement(arr);
//returns [1,2,3,100]
arr
//returns [1,2,3]
```

Other functions that do not mutate data are: ```map```, ```filter``` and ```reduce```

#### Higher Order Functions

A higher order function is a function that takes a function as an argument or returns a function as a return value, or both. Higher order functions help us to write declarative programs.

**Why are higher order functions useful?**
Higher order function plays a huge role in functional programming since functional programming concerns with immutability. Higher order function like map, filter, and reduce does not modify the calling array. It also help us to write declarative programs.

### Synchronous vs Asynchronous Execution  

In Synchronous programs, let say we have two lines of code(L1 followed by L2), L2 cannot start executing until L2 finish executing. For example, lets say you are in a long queue to buy a train ticket, you cannot buy the train ticket until every person before you finishes buying their ticket. Similarly, people behind you cannot buy train tickets until you have finished buying the train ticket.

In Asynchronous programs, let say we have two lines of code(L1 followed by L2), line L2 schedules some task to be run in the future, but L1 starts executing before that task completes. For example, let say you are cooking a toast and then you set a timer for it to be ready. Then you move on to clean the kitchen. After the toast has finished, you take the toast and serve it to people.

#### Asynchronous Execution and Callbacks

The ```setTimeout``` function is a great example to schedule a task in the future.

```js
function scheduler() {
  console.log("I am the scheduler");

  setTimeout(function() {
    console.log("ring! ring! ring!")
  }, 2000);

  console.log("not awake!")
}

scheduler();
//prints
// "I am the scheduler"
// "not awake!"
// "ring! ring! ring!"
```

In the example above, the setTimeout function schedules a task to be performed in the future(2 seconds after executing the function). The setTimeout function takes a callback function which will be called once the task is completed.

**What is AJAX?**

AJAX, also known as Asynchronous JavaScript and XML, uses a combination of
- A browser built-in XMLHttpRequest object (to request data from a web server)
- JavaScript and HTML DOM (to display or use the data)

AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.

### Promises

### DOM

The DOM, also known as the Document Object Model represents the *current view* of the browser and can be manipulated without reloading a page, whereas the HTML is text in a file first used to display the page. Any change we make on the DOM affect the DOM only, not the HTML by doing so, we can change the appearance of the website in the browser.

## Selectors

| Selector name                   | Return shape   | Return type    | Live? | Reference             | forEach? |
| ------------------------------- | -------------- | -------------- | ----- | --------------------- | -------- |
| `node.getElementById()`         | Single element | Element        | N/A   | https://goo.gl/8cHGoy | N/A      |
| `node.getElementsByClassName()` | Collection     | HTMLCollection | Yes   | https://goo.gl/qcAhcp | No       |
| `node.getElementsByTagName()`   | Collection     | HTMLCollection | Yes   | https://goo.gl/QHozSh | No       |
| `node.querySelector()`          | Single element | Element        | N/A   | https://goo.gl/6Pqbcc | N/A      |
| `node.querySelectorAll()`       | Collection     | NodeList       | Node  | https://goo.gl/vTfXza | Yes      |
