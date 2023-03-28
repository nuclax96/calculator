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
//multipleOperationInd is there when more than 1 operations are being performed
const displayOperation = (multipleOperationInd = 0) => {
  if (multipleOperationInd == 1) {
    console.log("This", result);
    operand1El.textContent = result;
  } else if (multipleOperationInd == 0 && currentOperand == 1) {
    operand1El.textContent = operand1;
  }
  if (operator) {
    operatorEl.textContent = operator;
  }
  if (currentOperand == 2) {
    operand2El.textContent = operand2;
  }
};
//displayInput
//Display Screen-2 results
const displayResult = (ip) => {
  if (!ip) {
    screenResultEl.textContent = 0;
    return;
  }
  console.log(ip);
  screenResultEl.textContent = ip;
};

const handleMultipleOperation = (op) => {
  let multipleOperationInd = 1;
  operand1 = result;
  operand2 = "";
  operator = op.textContent;
  displayOperation(multipleOperationInd);
  result = "";
  currentOperand = 2;
  displayResult(result);
};

//Assign Operator
const assignOperator = (op) => {
  if (op.textContent === "=") {
    calculate();
    displayResult(result);
    return;
  }
  if (result !== "") {
    handleMultipleOperation(op);
    return;
  }
  operator = op.textContent;
  displayOperation();
  currentOperand = 2;
};

//Assign Operand

const assignOperand = (input) => {
  if (currentOperand === 1) {
    operand1 = operand1 + input.textContent;
    operation = operation + input.textContent;
    displayOperation();
    displayResult(operand1);
  }
  if (currentOperand == 2) {
    operand2 = operand2 + input.textContent;
    operation = operation + input.textContent;
    displayOperation();
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
  operand1El.textContent = "";
  operand2El.textContent = "";
  operatorEl.textContent = "";
  displayResult(0);
};

//Basic Mathematical Functions
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

// Delete a digit
const deleteDigit = () => {
  if (currentOperand == 1) {
    let modifiedStr = screenResultEl.textContent.slice(
      0,
      screenResultEl.textContent.length - 1
    );
    displayResult(modifiedStr);
    operand1 = modifiedStr;
    displayOperation();
  } else {
    console.log(screenResultEl.textContent);
    let modifiedStr = screenResultEl.textContent.slice(
      0,
      screenResultEl.textContent.length - 1
    );
    displayResult(modifiedStr);
    operand2 = modifiedStr;
    displayOperation();
  }
  return;
};

//Check Input - if digit or operation

const handleInput = (currInput) => {
  const currentElement = currInput.target;
  const clickedElementClass = Array.from(currentElement.classList);
  if (clickedElementClass.includes("delete")) {
    deleteDigit();
    return;
  }
  if (clickedElementClass.includes("clear")) {
    clearScreen();
    return;
  }
  if (currentElement.dataset.value == "operator") {
    assignOperator(currentElement);
  } else {
    assignOperand(currentElement);
  }
};

// Key Press
const keyPressHandler = (e) => {
  //This is to make sure no events are fired upon clikcing the space between the keys.
  if (e.target.classList[0] === "keypad") {
    return;
  }
  handleInput(e);
};

// Event Listeners
keysBtn.addEventListener("click", keyPressHandler);
