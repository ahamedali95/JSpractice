//Lexical scoping: Variables declared outside of a function are global variables and are visible everywhere in a JavaScript program. Variables declared inside a function have function scope and are visible only to code that appears inside that function.

//The scope of variables  is defined by their position in source code.

//LEXICAL SCOPE

var scope = "I am global";
function whatismyscope(){
   var scope = "I am just a local";
   function func() {return scope;}
   return func;
}

whatismyscope()();

//prints "I am a just a local"

//In this example, the func() is defined in the scope of whatismyscope(). The JS engine will resolve variable scope by looking at the current scope which is the function scope held by the function func(). It is not declared in the scope of func() so it moves up to the outer scope which is the scope of whatismyscope() and here it makes a stop since it finds a identifier match. So scope will be resolved to the value of "I am just a local".
