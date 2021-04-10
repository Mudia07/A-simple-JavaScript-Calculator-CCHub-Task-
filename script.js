//Create a variable for each of the buttons created in the html document//
var addition = document.getElementById('addition')
var subtraction = document.getElementById('subtraction')
var multiplication = document.getElementById('multiplication')
var division = document.getElementById('division')
var clear = document.getElementById('clear')

var operationButtons = document.getElementsByClassName('operation')

var result = document.getElementById('result')
var inputValue1 = document.getElementById('value-1')
var inputValue2 = document.getElementById('value-2')
var num1, num2

//For each variable above,add an event listener and a function that processes the numbers typed into the calculator display//

var inputValue = document.getElementById('value')

addition.addEventListener('click', function () {
  window.onload = function () {
    var result = 0
    value.addEventListener('input', function () {
      result = inputValue.value
      return result
    })
    return result
  }
  if (!num1 && !num2) {
    num1 = parseInt(inputValue1.value)
    inputValue1.value = 0
    document.getElementById('result').innerHTML = num1
  } else {
    num2 = parseInt(inputValue1.value)
    inputValue1.value = 0
    document.getElementById('result').innerHTML = num1 + num2
  }
})

for (let i = 0; i < operationButtons.length; i++) {
  operationButtons[i].addEventListener('click', function () {})
}

subtraction.addEventListener('click', function () {
  if (!num1 && !num2) {
    num1 = parseInt(inputValue1.value)
    inputValue1.value = 0
    document.getElementById('result').innerHTML = num1
  } else {
    num2 = parseInt(inputValue1.value)
    inputValue1.value = 0
    document.getElementById('result').innerHTML = num1 - num2
  }
})

multiplication.addEventListener('click', function () {
  if (!num1 && !num2) {
    num1 = parseInt(inputValue1.value)
    inputValue1.value = 0
    document.getElementById('result').innerHTML = num1
  } else {
    num2 = parseInt(inputValue1.value)
    inputValue1.value = 0
    document.getElementById('result').innerHTML = num1 * num2
  }
})

division.addEventListener('click', function () {
  if (!num1 && !num2) {
    num1 = parseInt(inputValue1.value)
    inputValue1.value = 0
    document.getElementById('result').innerHTML = num1
  } else {
    num2 = parseInt(inputValue1.value)
    inputValue1.value = 0
    document.getElementById('result').innerHTML = num1 / num2
  }
})

clear.addEventListener('click', function () {
  num1 = 0
  num2 = 0
  document.getElementById('result').innerHTML = 0
})
