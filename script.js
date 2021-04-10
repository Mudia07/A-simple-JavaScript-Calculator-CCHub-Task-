//Create a variable for each of the buttons created in the html document//
var addition = document.getElementById('addition');
var subtraction = document.getElementById('subtraction');
var multiplication = document.getElementById('multiplication');
var division = document.getElementById('division');
var clear = document.getElementById('clear');

var operationButtons = document.getElementsByClassName('operation');

var result = document.getElementById('result');
var inputValue1 = document.getElementById('value-1');
var inputValue2 = document.getElementById('value-2');
var num1, num2;

//Add an event listener and a function that processes the numbers typed into the calculator display
