let displayPanel = document.getElementById("calculator-display");
const calculatorKeyPad = document.getElementById("calculator-keypad");
const calculatorOperator = document.getElementById("calculator-operator");
const calculatorEqual = document.getElementById("calculator-operator-equal");
const calculatorClear = document.getElementById("calculator-keypad-clear")

let numbers = "";
let operatorSym = "";

calculatorKeyPad.addEventListener("click", (event) => {
  if (event.target.classList.contains("calculator-keypad-num")) {
    const keyPadValue = event.target.textContent;
    console.log(keyPadValue);
    displayPanel.innerHTML += keyPadValue;
    numbers += keyPadValue;
    console.log(numbers);
  }
});

calculatorOperator.addEventListener("click", (event) => {
  if (event.target.classList.contains("calculator-operator-sym")) {
    const operatorValue = event.target.textContent;
    console.log(operatorValue);
    displayPanel.innerHTML += operatorValue;
    numbers += operatorValue;
    console.log(numbers);
  }
});

calculatorEqual.addEventListener("click", () => {
  const expression = numbers;
  const result = eval(expression);
  console.log("Result:", result);
  console.log("Equal button clicked");
  let calculatorDisplayAnswer = document.getElementById(
    "calculator-display-answer"
  );
  calculatorDisplayAnswer.textContent = result;
});

calculatorClear.addEventListener("click", () => {
    displayPanel.innerHTML = "";
    numbers = "";
});
