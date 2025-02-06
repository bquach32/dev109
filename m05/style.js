let number = prompt ("What is 1 multiplied by 5?");

var table = 5;             // Unit of table
var operator = 'Multiplication'; // Type of calculation
var i = 1;                 // Set counter to 1
var msg = '<h2>Multiplication Table</h2>';              // Message

if (operator === 'addition') {
  // Do addition
  while (i < 10) {
    msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
    i++;
  }
} else {
  // Do multiplication
  while (i < 10) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
