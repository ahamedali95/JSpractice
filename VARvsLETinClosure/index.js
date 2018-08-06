document.addEventListener("DOMContentLoaded", function() {
  const listItems = document.querySelectorAll("li");

  for(var i = 0; i < listItems.length; i++) {
  	listItems[i].addEventListener("click", function() {
  		console.log(i + 1);
  	});
  }
});
