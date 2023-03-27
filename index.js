// Variables Decleration
let result = "";
let operand1 = "",
  operand2 = "";
let operator;
let currentOperand = 1;
// Query Selectors
const screenOperationText = document.querySelector(".screen-operation");

// Btn-selectors
const keysBtn = document.querySelector(".keypad");

// Functions
//Assign Operator
const assignOperator = (op) => {
  if (op.textContent === "=") {
    console.log("Equal to");
    calculate();
    return;
  }
  operator = op.textContent;
  currentOperand = 2;
  console.log(operator);
};

//Assign Operand

const assignOperand = (input) => {
  if (currentOperand === 1) {
    operand1 = operand1 + input.textContent;
    console.log("OP1", operand1);
  }
  if (currentOperand == 2) {
    operand2 = operand2 + input.textContent;
    console.log("OP2", operand2);
  }
};
// Delete a digit
const deleteDigit = () => {};

// Reset Screen
const eraseScreen = () => {};

// Calculate - Perform Operation
const calculate = () => {
  result = `${Number(operand1)} ${operator} ${Number(operand2)}`;

  let op1 = Number(operand1);
  let op2 = Number(operand2);
  switch (operator) {
    case "+":
      console.log("This time add operation");
      break;
    case "-":
      console.log("Subtraction this time");
      break;
    case "*":
      multiply(op1, op2);
      break;
    case "/":
      divide(op1, op2);
      break;
    default:
      console.log("Default");
  }
};

//Check Input - if digit or operation

const handleInput = (currInput) => {
  const inputType = currInput.target;
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
