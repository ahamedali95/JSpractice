// Write a function elementCount(array) that returns a object. Each key
// corresponds to an element in the array and the value corresponds to how many
// times that element appears in the array.
//
// Example:
// elementCount(["a", "a", "b", "b"]); //=> { "a" : 2, "b" : 2 }
// elementCount(['c', 'a', 'c', 'a', 'b']); // => { "c": 2, "a": 2, "b": 1 }

const elementCount = (array) => {
  const obj = {};

  array.forEach(ele => {
    //if key exists in the object, then increment by one
    //Otherwise, add the key and map to value 1.
    if(obj[ele]) {
      obj[ele] += 1;
    } else {
      obj[ele] = 1;
    }
  });

  return obj;
}
