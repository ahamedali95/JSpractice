
function updateClickCount() {
  var counter=0;

  return function() {
    ++counter;
    document.getElementById("spnCount").innerHTML=counter;
  }
}

const a = updateClickCount();
a();
