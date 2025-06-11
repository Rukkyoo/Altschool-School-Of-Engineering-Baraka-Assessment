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

// Initialize history array to store calculation history
let historyArray = [];

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
const calculateResult = () => {
  let expression = numbers;
  let finalResult;
  if (expression.includes("^")) {
    // Replace ^ with ** for exponentiation operation
    expression = expression.replace(/\^/g, "**");
    const result = eval(expression); // Carries out the calculation of the string "numbers"
    console.log("Result:", result);
    console.log("Equal button clicked");
    calculatorDisplayAnswer.textContent = result;
    finalResult = numbers + " = " + result; // Use original numbers for display
    displayPanel.innerHTML = finalResult; // Displays the result
  } else if (expression.includes("%")) {
    // Replace % with /100 for percentage operation
    expression = expression.replace(/%/g, "/100");
    const result = eval(expression); // Carries out the calculation of the string  "numbers"
    console.log("Result:", result);
    console.log("Equal button clicked");
    calculatorDisplayAnswer.textContent = result;
    finalResult = numbers + " = " + result; // Use original numbers for display
    displayPanel.innerHTML = finalResult; // Displays the result
  } else {
    const result = eval(expression); // Carries out the calculation of the string  "numbers"
    console.log("Result:", result);
    console.log("Equal button clicked");
    calculatorDisplayAnswer.textContent = result;
    finalResult = numbers + " = " + result;
    console.log(finalResult);
    displayPanel.innerHTML = finalResult; // Displays the result
  }
  
  // Push to the history array
  historyArray.push(finalResult);
  console.log("History:", historyArray);
};

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

// Function to render history list
const renderHistoryList = () => {
  // Clear the existing list first
  historyTabList.innerHTML = "";
  
  // Create list items for each history entry
  historyArray.forEach((calculation) => {
    const li = document.createElement("li");
    li.textContent = calculation;
    historyTabList.appendChild(li);
  });
};

// Event listener for the history button (open the history tab)
const openHistoryTab = () => {
  isHistoryTabOpen = true;
  if (isHistoryTabOpen) {
    historyTab.style.display = "block"; // Show the history tab
    calculatorKeyPad.style.display = "none"; // Hide the calculator keypad
    calculatorOperator.style.display = "none"; // Hide the operator buttons
    historyBtn.classList.add("active"); // Add active class to the history button

    // Render the history list (this will clear and rebuild the list)
    renderHistoryList();
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

// Event listener to document for keydown event
document.addEventListener("keydown", (event) => {
  // Check if the pressed key is a number or an operator
  if (event.key >= 0 && event.key <= 9) {
    // If the pressed key is a number, append it to the displayPanel
    displayPanel.innerHTML += event.key;
    numbers += event.key;
  } else if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/" || event.key === "%") {
    // If the pressed key is an operator, append it to the displayPanel
    displayPanel.innerHTML += event.key;
    numbers += event.key;
  } else if (event.key === "=") {
    // If the pressed key is the equals sign, perform the calculation
    calculateResult();
  } else if (event.key === "Backspace") {
    // If the pressed key is the backspace key, remove the last character from the displayPanel
    numbers = numbers.slice(0, -1);
    displayPanel.innerHTML = numbers;
  } else if (event.key === "Escape") {
    // If the pressed key is the escape key, clear the displayPanel
    displayPanel.innerHTML = "";
    numbers = "";
  }
});