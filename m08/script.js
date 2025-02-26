// Add the function and the variable (Buu)
function addItem() {
  var newitem = document.getElementById('item').value;
// Make sure a valid item in the input field (Buu)
  if (newitem.trim() === "") {
    alert("Please enter an item.");
    return;
  }

  // Create a new element and store it in a variable.
  var newEl = document.createElement('li');
    
  // Changed "quinoa" to "newitem" (Buu)
  // Create a text node and store it in a variable.
  var newText = document.createTextNode(newitem); 

  // Attach the new text node to the new element.
  newEl.appendChild(newText);

  // Find the position where the new element should be added.
  var position = document.getElementsByTagName('ul')[0];

  // Insert the new element into its position.
  position.appendChild(newEl);

  // Clear the input field (Buu)
  document.getElementById('item').value = '';
}

  // Added by pressing "Enter" key from keyboard (Buu)
document.getElementById('item').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addItem();
  }
});
