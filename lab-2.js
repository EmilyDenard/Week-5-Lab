"use strict";

function smallestNums(num1, num2, num3) {
  if (num1 < num2 && num1 < num3) {
    alert(num1 + " is the smallest");
  } else if (num2 < num1 && num2 < num3) {
    alert(num2 + " is the smallest");
  } else if (num3 < num1 && num3 < num2) {
    alert(num3 + " is the smallest");
  }
}
smallestNums(6, 2, 4);

function negativeOrPositiveOrZero(number) {
  if (number > 0) {
    alert("positive");
  } else if (number === 0) {
    alert("Zero");
  } else if (number < 0) {
    alert("Negative");
  }
}
let userInput = prompt("Pick a Number");
userInput = Number(userInput);
negativeOrPositiveOrZero(userInput);

function votingage(age) {
  if (age >= 18) {
    alert("You can vote");
  } else {
    alert("You need to be 18 to vote");
  }
}
