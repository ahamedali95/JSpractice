// Write a function objectSelect(obj, cb) which takes as arguments an
// object and a callback, and returns a new object where all the key value
// pairs return true, when passed into the callback.
//
// Example:
//
// var obj = {
//   one: "one",
//   two: "something else",
//   three: "three",
//   four: "another thing."
// };
//
// function isEqual(a, b) {
//   return a === b;
// }
//
// var matchingPairs = objectSelect(obj, isEqual);
//
// matchingPairs; //=> { one: "one", three: "three" }

function objectSelect(obj, cb) {
  const newObj = {};

  for(const key in obj) {
    if(cb(key, obj[key])) {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}
