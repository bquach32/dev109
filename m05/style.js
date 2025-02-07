let number = prompt("What is 1 multiplied by 5?");

var table = 5;             
var operator = 'Multiplication'; 
var i = 1;                 
var msg = '<h2>Multiplication Table</h2>';           

if (operator === 'addition') {
  while (i <= 10) {
    msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
    i++;
  }
} else {
  while (i <= 10) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
}

var el = document.getElementById('blackboard');
if (el) {
  el.innerHTML = msg;  
} else {
  console.error("Element with id 'blackboard' not found.");
}

if (parseInt(number) === 5) {
  alert("Correct!");
} else {
  alert("Try again.");
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg + GetTableContent(table);


