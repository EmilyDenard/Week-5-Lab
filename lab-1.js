"use strict";

function calculateTemp(c) {
  let f = (c * 9) / 5 + 32;
  alert(c + " degrees in c Converted to f is " + f);
}
let userInput = prompt("What is the temp in c?");
// calculateTemp(userInput);

function determineAgeGroup(age) {
  if (age < 18) {
    alert("Minor");
  } else if (age >= 18 && age < 60) {
    alert("Adult");
  } else {
    alert("Senior");
  }
}
userInput = prompt("What is your age?");
// determineAgeGroup(userInput);

function mathTime(num1, num2, operator) {
  if (operator === "addition") {
    alert(Number(num1) + Number(num2));
  } else if (operator === "subtraction") {
    alert(num1 - num2);
  } else if (operator === "Multiplication") {
    alert(num1 * num2);
  } else if (operator === "division") {
    alert(num1 / num2);
  }
}
let number1 = prompt("What is the first number?");
let number2 = prompt("What is the second number?");
let operation = prompt(
  "Which operation will be preformed? eg. addition, subtraction, multiplication, division"
);

mathTime(number1, number2, operation);
