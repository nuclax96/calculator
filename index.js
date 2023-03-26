// Variables Decleration

const inpurArr = [];

// Query Selectors
const screenOperationText = document.querySelector(".screen-operation");

// Btn-selectors
const keysBtn = document.querySelector(".keypad");

// Functions

// 1. Delete a digit
const deleteDigit = () => {};

// 2. Reset Screen
const eraseScreen = () => {};

// 3.Key Press

const keyPress = (e) => {
  const x = e.target;
  if (e.target.classList[0] === "keypad") {
    return;
  }
  console.log(e.target.textContent);
};

// Event Listeners

keysBtn.addEventListener("click", keyPress);
