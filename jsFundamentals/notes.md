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
