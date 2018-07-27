// How would you compare two objects in JavaScript?

// First thing that came to mind is using built in JS method: JSON.stringify
//but they do not work for the following:

x = {a: 1, b: 2}
y = {b: 2, a: 1}

JSON.stringify(x) === JSON.stringify(y)
//false

//Correct way:

//Get all the properties of each object in an array and compare their length and
//if the length is not same, then we know that the objects are not equal.

function checkForObjectEquality(obj1, obj2) {
  //Use for-in loop construct to get all properties of obj1 and obj2
  const obj1Props = getProps(obj1);
  const obj2Props = getProps(obj2);

  //check for properties length
  if(obj1Props.length !== obj2Props.length) {
    return false;
  }

  //check for property values
  for(const prop of obj1Props) {
    if(obj1[prop] !== obj2[prop]) {
      return false;
    }
  }

  return true;
}

function getProps(obj) {
  const objProps = [];

  for(const key in obj) {
    objProps.push(key);
  }

  return objProps
}

x = {a: 1, b: 2}
y = {b: 2, a: NaN}

checkForObjectEquality(x, y);

//some edge cases includes property values being nested like contained objects.
//And one of the property value being the NaN value, then comparing NaN and NaN
//will yield true, thus making the objects not equal.

//Ultimate solution would be using the Underscore or Lo-Dash which have
//implementations named _.isEqual which handle deep object comparisons well.
