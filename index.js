var symbol
var button = document.querySelector("button")
var result = document.querySelector("#result")
var number1
var number2

button.addEventListener("click", function () {
    number1 = Number(document.getElementById("number1").value)
    number2 = Number(document.getElementById("number2").value)
    symbol = document.querySelector("select").value
    symbol = eval(symbol)
    calculate(symbol)
})

function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function calculate(operation) {
    result.textContent =  operation(number1, number2)    
}