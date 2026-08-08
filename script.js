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

let firstNumber;
let secondNumber;
let operation;

function operate() {
    // takes two numbers and an operator as and calls one of the above functions on the numbers based on the operator.
    switch (operation) {
        case "add":
            return add(firstNumber, secondNumber);
        case "subtract":
            return subtract(firstNumber, secondNumber);
        case "multiply":
            return multiply(firstNumber, secondNumber);
        case "divide":
            return divide(firstNumber, secondNumber);
        default:
            throw new Error("Invalid operation");
    }
}

//function to handle button clicks and update the display
function handleButtonClick(value) {
    // Implementation for handling button clicks
    console.log("Button clicked:", value);
}

const container = document.querySelector('#buttons-container'); // or document.body

container.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) return;

  console.log('Button pressed:', button.textContent);
  handleButtonClick(button.textContent);
  updateDisplay(button.textContent);
  firstNumber = parseFloat(button.textContent); // Example of setting firstNumber, you may want to adjust this logic based on your calculator's state
  console.log(firstNumber);

});

function updateDisplay(value) {
    const display = document.querySelector('#display');
    display.textContent = value;
}

