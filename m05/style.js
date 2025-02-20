var userInput = prompt("Enter a number:");
 
if (userInput === null || userInput.trim() === "" || isNaN(userInput)) {
    alert("Invalid input. Using default value 0.");
    userInput = 0;
} else {
    userInput = parseInt(userInput); 
}
 
userInput = Number.isNaN(userInput) ? 0 : userInput;
 
var table = userInput;
var msg = '<h2>Multiplication Table</h2>';
 
function getTableContent(table) {
    let i = 1;
    let msg = '';
    while (i <= 10) {
        msg += `${i} × ${table} = ${i * table}<br />`;
        i++;
    }
    return msg;
}
 
var el = document.getElementById('blackboard');
if (el) {
    el.innerHTML = msg + getTableContent(table);
} else {
    console.error("Element with id 'blackboard' not found.");
}
 
