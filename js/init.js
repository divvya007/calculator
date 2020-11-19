let operand1 = null,
  operation = null,
  operand2 = null;

console.log(operand1, operation, operand2);

function enterOperand(number) {
  if (operand1 === null) {
    operand1 = number;
  } else {
    operand2 = number;
  }

  updateDisplay(number);

  console.log(operand1, operation, operand2);
}

function enterOperation(op) {
  operation = op;
  console.log(operand1, operation, operand2);
}

function updateDisplay(displayValue) {
  let displayNum = displayValue;
  if (displayNum === undefined) {
    displayNum = 0;
  }

  document.getElementById("demo").innerHTML = displayNum;
}

document.getElementById("showEqual").addEventListener("click", function () {
  let result;

  if (operation === "+") {
    result = operand1 + operand2;
  } else if (operation === "-") {
    result = operand1 - operand2;
  } else if (operation === "*") {
    result = operand1 * operand2;
  } else if (operation === "/") {
    result = operand1 / operand2;
  }

  updateDisplay(result);
  cleanMemory();
});

function cleanMemory() {
  operand1 = null;
  operation = null;
  operand2 = null;
}

document.getElementById("showInput9").addEventListener("click", function () {
  enterOperand(9);
});
document.getElementById("showInput8").addEventListener("click", function () {
  enterOperand(8);
});
document.getElementById("showInput7").addEventListener("click", function () {
  enterOperand(7);
});
document.getElementById("showInput6").addEventListener("click", function () {
  enterOperand(6);
});
document.getElementById("showInput5").addEventListener("click", function () {
  enterOperand(5);
});
document.getElementById("showInput4").addEventListener("click", function () {
  enterOperand(4);
});
document.getElementById("showInput3").addEventListener("click", function () {
  enterOperand(3);
});
document.getElementById("showInput2").addEventListener("click", function () {
  enterOperand(2);
});
document.getElementById("showInput").addEventListener("click", function () {
  enterOperand(1);
});
document.getElementById("showInput0").addEventListener("click", function () {
  enterOperand(0);
});

document.getElementById("showPlus").addEventListener("click", function () {
  enterOperation("+");
});
document.getElementById("showSub").addEventListener("click", function () {
  enterOperation("-");
});
document.getElementById("showMul").addEventListener("click", function () {
  enterOperation("*");
});
document.getElementById("showDiv").addEventListener("click", function () {
  enterOperation("/");
});

document.getElementById("clearInput").addEventListener("click", function () {
  cleanMemory();
  updateDisplay(0);
});
