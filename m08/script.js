var newitem = document.createElement('item');
if (newitem.trim() === "") {
    alert("Please enter an item.");
    return;

// Create a new element and store it in a variable.
var newEl = document.createElement('li');

// Create a text node and store it in a variable.
var newText = document.createTextNode('newitem');

// Attach the new text node to the new element.
newEl.appendChild(newText);

// Find the position where the new element should be added.
var position = document.getElementsByTagName('ul')[0];

  
// Insert the new element into its position.
position.appendChild(newEl);
  
document.getElementById('item').value = "";
