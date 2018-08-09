/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***********************/

function tryRequire(modulePath) {
  try {
    var f = require(modulePath);
  }
  catch (err) {
    console.log(modulePath.slice(3), '-', err.name);
    var f = function() {};
  }
  return f;
}

module.exports = tryRequire;
