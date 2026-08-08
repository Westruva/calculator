# Calculator

A simple JavaScript calculator built with HTML, CSS, and JavaScript.

## Files

- `index.html` — the calculator markup and button layout
- `style.css` — basic styles for the calculator UI
- `script.js` — calculator logic, event handling, and display updates

## How it works

This calculator uses event delegation and three main pieces of state:

- `firstNumber` — the first operand, built as a string
- `secondNumber` — the second operand, also built as a string
- `operation` — the current operator name (`"add"`, `"subtract"`, `"multiply"`, or `"divide"`)

### Event bubbling and delegation

Instead of attaching a click listener to every button, the code adds one listener to the parent element `#buttons-container`.
When a button inside that container is clicked, the event bubbles up to the parent, and the listener uses `event.target.closest('button')` to find the clicked button.

This means:

- one listener handles all button presses
- new buttons added to the container will automatically work
- the code stays simpler and easier to maintain

### Button flow

When a button is clicked:

1. The click event bubbles to `#buttons-container`
2. The listener finds the clicked `<button>` element
3. The button text is read with `button.textContent.trim()`
4. `updateCalculatorVariables(value)` is called with that button label

### `updateCalculatorVariables(value)`

This function decides what the button press means:

- `clear`
  - resets `firstNumber`, `secondNumber`, and `operation`
  - updates the display to `0`
- `=`
  - if `firstNumber`, `operation`, and `secondNumber` are all present, it computes the result
  - stores the result back in `firstNumber`
  - clears `secondNumber` and `operation`
  - updates the display
- operator buttons (`+`, `-`, `x`, `÷`)
  - converts the symbol into an internal operation name with `getOperatorName`
  - if there is already a second number, it computes the previous expression first
  - stores the operator for the next operand
- digit and decimal buttons
  - appended to `firstNumber` if no operator is selected yet
  - appended to `secondNumber` if an operator has already been selected
  - the display is updated as the user types

### Supporting helper functions

- `add(a, b)` — returns `a + b`
- `subtract(a, b)` — returns `a - b`
- `multiply(a, b)` — returns `a * b`
- `divide(a, b)` — returns `a / b` and throws an error if `b` is `0`
- `operate()` — chooses the correct math helper based on `operation` and converts the operand strings to numbers
- `updateDisplay(value)` — writes `value` into the `#display` element
- `getOperatorName(symbol)` — maps button text to the internal operator name
- `appendValue(current, value)` — appends a new digit or decimal point to the active number while preventing multiple decimals

### Example usage

If a user clicks `1`, `2`, `+`, `3`, `=`:

- `firstNumber` becomes `"12"`
- `operation` becomes `"add"`
- `secondNumber` becomes `"3"`
- `operate()` calculates `12 + 3`
- result `15` is displayed

## Notes

- The code stores numbers as strings during typing so it can build multi-digit values, then converts them to numbers only when computing.
- The calculator supports decimal numbers, but it prevents adding more than one `.` to the same number.
- The layout and logic are separated: `index.html` provides the buttons and display, `style.css` styles them, and `script.js implements behavior.

## Run locally

1. Open `index.html` in a browser
2. Click the buttons to use the calculator

That is the full flow of the calculator app. Feel free to extend it with keyboard support, percentage, or negative number handling.