// Variables to store the user-selected color and size
var dotColor = "#0000ff";
var mybutton = document.querySelector("button");
var dotSize = 8;

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
  var elements = document.getElementsByClassName("dot");
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
});

// Handle the mouse click event to create dots
addEventListener("click", function(event) {
  // Do not draw dots after clearing the screen
  if (event.target.closest('.clicks') || event.target === mybutton) {
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
