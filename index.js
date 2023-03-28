// html elements
const screenResultEl = document.querySelector(".screen-2");
const operand1El = document.querySelector(".op1");
const operand2El = document.querySelector(".op2");
const operatorEl = document.querySelector(".opr");
const clearBtn = document.querySelector(".clear");
// Variables Decleration
let result = "";
let operation = "";
let operand1 = "",
  operand2 = "";
let operator;
let currentOperand = 1;
// Query Selectors

const screenOperationTextEl = document.querySelector(".screen-1-operation");

// Btn-selectors
const keysBtn = document.querySelector(".keypad");

// Display Functions
//Display operations on screen-1
const displayOperation = () => {
  operand1El.textContent = operation;
};
//displayInput
//Display Screen-2 results
const displayResult = (ip) => {
  screenResultEl.textContent = ip;
};

//Assign Operator
const assignOperator = (op) => {
  if (op.textContent === "=") {
    // operand1 = result;
    displayOperation();
    calculate();
    displayResult(result);
    return;
  }
  console.log(result !== "");
  if (result !== "") {
    console.log(result);
    operand1 = result;
    operand2 = "";
    console.log(operand1 + operator);
    operator = op.textContent;

    operation = operand1 + operator;
    operator = op.textContent;
    displayOperation();
    currentOperand = 2;

    result = "";
    displayResult(result);
    return;
  }
  operator = op.textContent;
  operation = operation + operator;
  console.log(operation);
  displayOperation();
  currentOperand = 2;
};

//Assign Operand

const assignOperand = (input) => {
  if (currentOperand === 1) {
    operand1 = operand1 + input.textContent;
    operation = operation + input.textContent;
    displayResult(operand1);
  }
  if (currentOperand == 2) {
    operand2 = operand2 + input.textContent;
    operation = operation + input.textContent;

    displayResult(operand2);
  }
};
// Delete a digit
const deleteDigit = () => {};

// Reset Screen
const clearScreen = () => {
  result = "";
  operation = "";
  operand1 = "";
  operand2 = "";
  operator = "";
  currentOperand = 1;
  displayOperation();
  displayResult(0);
};

// Mathematical Functions
const add = (operand1, operand2) => {
  let op1 = Number(operand1);
  let op2 = Number(operand2);

  return op1 + op2;
};

const subtract = (operand1, operand2) => {
  let op1 = Number(operand1);
  let op2 = Number(operand2);

  return op1 - op2;
};

const multiply = (operand1, operand2) => {
  let op1 = Number(operand1);
  let op2 = Number(operand2);

  return op1 * op2;
};

const divide = (operand1, operand2) => {
  let op1 = Number(operand1);
  let op2 = Number(operand2);

  return op1 / op2;
};
// Calculate - Perform Operation
const calculate = () => {
  switch (operator) {
    case "+":
      result = add(operand1, operand2);
      break;
    case "-":
      result = subtract(operand1, operand2);
      break;
    case "*":
      result = multiply(operand1, operand2);
      break;
    case "/":
      result = divide(operand1, operand2);
      break;
    default:
      console.log("Default");
  }
};

//Check Input - if digit or operation

const handleInput = (currInput) => {
  const inputType = currInput.target;
  const classes = Array.from(inputType.classList);
  console.log(classes);
  if (classes.includes("clear")) {
    console.log("Hello");
    clearScreen();
    return;
  }
  if (inputType.dataset.value == "operator") {
    assignOperator(inputType);
  } else {
    assignOperand(currInput.target);
  }
};

// Key Press

const keyPressHandler = (e) => {
  //   const input = e.target.textContent;
  // if (e.target.classList.includes('root'))
  // {
  //     console.log('Root');
  //     }
  if (e.target.classList[0] === "keypad") {
    return;
  }
  handleInput(e);
};

// Event Listeners

keysBtn.addEventListener("click", keyPressHandler);
// clearBtn.addEventListener("click", clearScreen);
