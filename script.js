// This script handles the functionality of a simple calculator
// It allows users to input numbers and operators, perform calculations, and clear the display.
let displayPanel = document.getElementById("calculator-display");
const calculatorKeyPad = document.getElementById("calculator-keypad");
const calculatorOperator = document.getElementById("calculator-operator");
const calculatorEqual = document.getElementById("calculator-operator-equal");
const calculatorClear = document.getElementById("calculator-keypad-clear");
let calculatorDisplayAnswer = document.getElementById(
  "calculator-display-answer"
);

let numbers = ""; // Where the numbers and operators are being stored on the console

// Event listener for the calculator buttons
calculatorKeyPad.addEventListener("click", (event) => {
  if (event.target.classList.contains("calculator-keypad-num")) {
    const keyPadValue = event.target.textContent;
    console.log(keyPadValue);
    displayPanel.innerHTML += keyPadValue;
    numbers += keyPadValue;
    console.log(numbers);
  }
});


// Event listener for the operator buttons
calculatorOperator.addEventListener("click", (event) => {
  if (event.target.classList.contains("calculator-operator-sym")) {
    const operatorValue = event.target.textContent;
    console.log(operatorValue);
    displayPanel.innerHTML += operatorValue;
    numbers += operatorValue;
    console.log(numbers);
  }
});


// Event listener for the equal button (calculation operation)
calculatorEqual.addEventListener("click", () => {
  const expression = numbers;
  const result = eval(expression);
  console.log("Result:", result);
  console.log("Equal button clicked");
  calculatorDisplayAnswer.textContent = result;
  displayPanel.innerHTML = expression + " = " + result;
});


// Event listener for the clear button (clear the display and reset)
calculatorClear.addEventListener("click", () => {
  calculatorDisplayAnswer.textContent = "";
  displayPanel.innerHTML = "";
  numbers = "";
});
