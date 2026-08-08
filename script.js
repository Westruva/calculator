function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

//MY VARIABLES
let firstNumber = '';
let secondNumber = '';
let operation = '';

function operate() {
    // takes two numbers and an operator and calls one of the above functions on the numbers based on the operator.
    switch (operation) {
        case "add":
            return add(Number(firstNumber), Number(secondNumber));
        case "subtract":
            return subtract(Number(firstNumber), Number(secondNumber));
        case "multiply":
            return multiply(Number(firstNumber), Number(secondNumber));
        case "divide":
            return divide(Number(firstNumber), Number(secondNumber));
        default:
            throw new Error("Invalid operation");
    }
}

function updateDisplay(value) {
    const display = document.querySelector('#display');
    display.textContent = value;
}

function getOperatorName(symbol) {
    switch (symbol) {
        case '+':
            return 'add';
        case '-':
            return 'subtract';
        case 'x':
            return 'multiply';
        case '÷':
            return 'divide';
        default:
            return '';
    }
}

function appendValue(current, value) {
    if (value === '.' && current.includes('.')) {
        return current;
    }
    return current + value;
}

function updateCalculatorVariables(value) {
    if (value === 'clear') {
        firstNumber = '';
        secondNumber = '';
        operation = '';
        updateDisplay('0');
        return;
    }

    if (value === '=') {
        if (firstNumber !== '' && operation !== '' && secondNumber !== '') {
            const result = operate();
            firstNumber = String(result);
            secondNumber = '';
            operation = '';
            updateDisplay(result);
        }
        return;
    }

    const operatorName = getOperatorName(value);
    if (operatorName !== '') {
        if (firstNumber === '') {
            return;
        }
        if (secondNumber !== '') {
            const result = operate();
            firstNumber = String(result);
            secondNumber = '';
            updateDisplay(result);
        }
        operation = operatorName;
        return;
    }

    if (operation === '') {
        firstNumber = appendValue(firstNumber, value);
        updateDisplay(firstNumber);
    } else {
        secondNumber = appendValue(secondNumber, value);
        updateDisplay(secondNumber);
    }
}

// button event listeners
const container = document.querySelector('#buttons-container');

container.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;

    const value = button.textContent.trim();
    updateCalculatorVariables(value);
    console.log('Button pressed:', value);
});

