// Variables to store the user-selected color and size
var dotColor = "#0000ff";
var mybutton = document.querySelector("button");
var dotSize = 8;
var clearScreen = false;

// Handle color input change
document.getElementById("color").addEventListener("input", function(event) {
  dotColor = event.target.value;  
});

// Handle size input change
document.getElementById("size").addEventListener("input", function(event) {
  dotSize = event.target.value; 
});

// Handle the Clear Screen button click event
mybutton.addEventListener("click", function(event) {
  var element = document.getElementsByClassName("dot");
  for (var index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
  }
  clearScreen = true; 
});

addEventListener("click", function(event) {
  if (clearScreen) {
    clearScreen = false;  
    return; 
  }
  
  if (event.target.closest('.clicks')) {
      return;
  }
  
  // Create the dot element
  var dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = (event.pageX - (dotSize / 2)) + "px";
  dot.style.top = (event.pageY - (dotSize / 2)) + "px";
  dot.style.background = dotColor;
  dot.style.height = dotSize + "px";
  dot.style.width = dotSize + "px";
  document.body.appendChild(dot);
});
