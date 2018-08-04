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

Prototype chain is this idea that a newly created instance will have a reference to its parent - the constructor. So that the prototype property of this new instance will have all properties and methods coming from its parent. It's parent being the constructor and its prototype - Object.prototype
