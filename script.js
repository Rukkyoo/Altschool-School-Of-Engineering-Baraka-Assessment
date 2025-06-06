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
let backSpaceBtn = document.getElementById("calculator-keypad-backspace");
let isHistoryTabOpen = false; // Variable to track if the history tab is open
let numbers = ""; // String where the numbers and operators are being stored on the console
const historyBtn = document.getElementById("calculator-keypad-history");
const historyTab = document.getElementById("calculator-keypad-history-modal");
let historyTabList = document.getElementById("calculator-keypad-history-list"); // List where the history of calculations will be displayed

// Event listener for the calculator buttons (To know which number is clicked)
calculatorKeyPad.addEventListener("click", (event) => {
  if (event.target.classList.contains("calculator-keypad-num")) {
    const keyPadValue = event.target.textContent;
    console.log(keyPadValue);
    displayPanel.innerHTML += keyPadValue;
    numbers += keyPadValue;
    console.log(numbers);
  }
});

// Event listener for the operator buttons (To know which operator button is clicked)
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
  let expression = numbers;
  let finalResult;
  if (expression.includes("^")) {
    // Replace ^ with ** for exponentiation operation
    expression = expression.replace(/\^/g, "**");
    const result = eval(expression); // Carries out the calculation of the string "numbers"
    console.log("Result:", result);
    console.log("Equal button clicked");
    calculatorDisplayAnswer.textContent = result;
    finalResult = expression + " = " + result;
    displayPanel.innerHTML = finalResult; // Displays the result
  } else if (expression.includes("%")) {
    // Replace % with /100 for percentage operation
    expression = expression.replace(/%/g, "/100");
    const result = eval(expression); // Carries out the calculation of the string  "numbers"
    console.log("Result:", result);
    console.log("Equal button clicked");
    calculatorDisplayAnswer.textContent = result;
    finalResult = expression + " = " + result;
    displayPanel.innerHTML = finalResult; // Displays the result
  } else {
    const result = eval(expression); // Carries out the calculation of the string  "numbers"
    console.log("Result:", result);
    console.log("Equal button clicked");
    calculatorDisplayAnswer.textContent = result;
    finalResult = expression + " = " + result;
    console.log(finalResult);
    displayPanel.innerHTML = finalResult; // Displays the result
  }
  // Using localstorage to save the calculation history
  localStorage.setItem("calculatorHistory", finalResult);
});

// Event listener for the clear button (clear the display and reset)
calculatorClear.addEventListener("click", () => {
  calculatorDisplayAnswer.textContent = ""; // Clear the answer display
  displayPanel.innerHTML = ""; // Clear the display panel
  numbers = ""; // Reset the numbers string
});

// Event listener for the backspace button (remove the last character)
backSpaceBtn.addEventListener("click", () => {
  if (numbers.length > 0) {
    numbers = numbers.slice(0, -1);
    displayPanel.innerHTML = numbers;
  }
});

// Event listener for the history button (open the history tab)
const openHistoryTab = () => {
  isHistoryTabOpen = true;
  if (isHistoryTabOpen) {
    historyTab.style.display = "block"; // Show the history tab
    calculatorKeyPad.style.display = "none"; // Hide the calculator keypad
    calculatorOperator.style.display = "none"; // Hide the operator buttons
    historyBtn.classList.add("active"); // Add active class to the history button

    // Get the existing history from localStorage
    const existingHistory = localStorage.getItem("calculatorHistory");

    // If there is existing history, append it to the history tab list
    if (existingHistory) {
      const historyItems = existingHistory.split("\n"); // Split the history into individual items
      historyItems.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        historyTabList.appendChild(li);
      });
    }
  }
};

// Event listener for the history button click (Close the history tab)
const closeHistoryTab = () => {
  isHistoryTabOpen = false;
  if (isHistoryTabOpen === false) {
    historyTab.style.display = "none"; // Hide the history tab
    calculatorKeyPad.style.display = "flex"; // Show the calculator keypad
    calculatorOperator.style.display = "flex"; // Show the operator buttons
    historyBtn.classList.remove("active"); // Remove active class from the history button
  }
};
