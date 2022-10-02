// variables
const calculator = document.getElementById('calculator');
const results = document.getElementById('results');

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.getElementById('clear');



let firstoperand = "";
let secondoperand = "";

let operator = "";
let answer = "";

let clearResults = false;

// getting each of the button and setting a event listener
numberButtons.forEach((number) => {
    number.addEventListener('click', appendNumber);
})

operatorButtons.forEach((operator) => {
    operator.addEventListener('click', appendOperator);
})

clearButton.addEventListener('click', clearScreen);


// function to append number and display operand
function appendNumber(number) {
    if (operator === "") {
        if (clearResults) results.textContent = "";
        firstoperand = "";
        results.textContent += number.target.textContent;
        firstoperand += number.target.textContent;
        clearResults = false;
    } else {
        results.textContent += number.target.textContent;
        secondoperand += number.target.textContent;
    }
}

// function to append number and display operator
function appendOperator(symbol) {
    if(operator === "") {
        results.textContent += symbol.target.textContent;
        operator = symbol.target.textContent;

    } else if (symbol.target.textContent === "=") {
        answer = operate(operator, Number(firstoperand), Number(secondoperand));
        results.textContent = answer;
        firstoperand = answer;
        secondoperand = "";
        operator = "";
        clearResults = true;
    } else {
        answer = operate(operator, Number(firstoperand), Number(secondoperand));
        results.textContent = answer;
        firstoperand = answer;
        secondoperand = "";
        operator = symbol.target.textContent;
        if (symbol.target.textContent != "=") {
            results.textContent += symbol.target.textContent;
        }    
    } 
}

// function to clear screen
function clearScreen() {
    results.textContent = "";
    firstoperand = "";
    secondoperand = "";
    operator = "";
}


// basic math operator functions
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}


// function that operats based on user input
function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "×") {
        return multiply(a, b);
    } else if (operator === "÷") {
        return divide(a, b);
    }
}
