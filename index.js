// html elements
const screenResultEl = document.querySelector(".screen-result");
const operand1El = document.querySelector(".op1");
const operand2El = document.querySelector(".op2");
const operatorEl = document.querySelector(".opr");
const clearBtn = document.querySelector(".clear");
// Variables Decleration
let count = 0;
let result = "";
let operation = "";
let operand1 = "",
  operand2 = "";
let operator;
let currentOperand = 1;
// Query Selectors
const screenOperationText = document.querySelector(".screen-operation");

// Btn-selectors
const keysBtn = document.querySelector(".keypad");

// Display Functions

const displayOperation = () => {
  if (!operand1 && operator == "=") {
    operand1El.textContent = "0 =";
    console.log("Empty");
    return;
  }
  if (operation.includes("Delete")) {
    return;
  }
  operand1El.textContent = operation;
};
//displayInput

const displayResult = (ip) => {
  screenResultEl.textContent = ip;
};

//Assign Operator
const assignOperator = (op) => {
  if (op.textContent === "=") {
    operator = op.textContent;

    // operand1 = result;
    displayOperation();
    calculate();
    displayResult(result);
    return;
  }
  if (result !== "") {
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
const deleteDigit = () => {
  if (currentOperand === 1) {
    console.log(operand1);
    operand1 = operand1.slice(0, operand1.length - 1);
    console.log(operand1);
    displayResult(operand1);
  } else {
    operand2 = operand2.slice(0, operand2.length - 1);
    displayResult(operand2);
  }
};

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

// Calculate - Perform Operation
const calculate = () => {
  let op1 = Number(operand1);
  let op2 = Number(operand2);
  console.log(operator);
  switch (operator) {
    case "+":
      result = Number(operand1) + Number(operand2);
      break;
    case "-":
      result = Number(operand1) - Number(operand2);
      break;
    case "*":
      result = Number(operand1) * Number(operand2);
      break;
    case "/":
      result = Number(operand1) / Number(operand2);
      break;
    default:
      console.log("Default");
  }
};

//Check Input - if digit or operation

const handleInput = (currInput) => {
  const inputType = currInput.target;
  const classes = Array.from(inputType.classList);
  if (classes.includes("delete")) {
    deleteDigit();
  }
  if (classes.includes("clear")) {
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

const keyPress = (e) => {
  const input = e.target.textContent;
  if (e.target.classList[0] === "keypad") {
    return;
  }
  handleInput(e);
};

// Event Listeners

keysBtn.addEventListener("click", keyPress);
// clearBtn.addEventListener("click", clearScreen);
