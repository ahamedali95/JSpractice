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

##  Comparison Operators

### Equality Operators 

**Loose equality operator (==)** - returns true if the values are equal. It will also return true if it can perform a type conversion.

**Strict equality operator (===)** - returns true if the values are equal without performing data type conversion. THIS IS LOGICAL AND ACCURATE!

**Loose inequality operator(!=)** - returns true if two values are not equal after performing type conversions.

**Strict inequality operator(!==)** - returns true if the values are not equal without performing type conversions.

### Relational Operators

```>, <, >=, <=```
