var a = Number(prompt("Enter First number"));
var operator = prompt("Choose an operator. +, -, *, or /");
var b = Number(prompt("Enter Second number"));

function add(a, b) {
  return (a + b);
}

function subtract(a, b) {
  return (a - b);
}

function multiply(a, b) {
  return (a * b);
}

function divide(a, b) {
  return (a / b);
}

/*function doCalculations(){
      // 1. prompt for number one. 2. Prompt for mathmatical operator. 3. Prompt for number two. 4. Look at the operator with "if" statements and call appropriate math function above. 5. console.log result

  } */

if (operator === "+") {
  add(a, b);
  alert(a + "+" + b + " = " + add(a, b));
}

else if (operator === "-") {
  subtract(a, b);
  alert(a + " - " + b + " = " + subtract(a, b));
} 

else if (operator === "*") {
  multiply(a, b);
  alert(a + " * " + b + " = " + multiply(a, b));
} 

else if (operator === "/") {
  divide(a, b);
  alert(a + " / " + b + " = " + divide(a, b));
} 

else {
  alert(" Operator didn't work. Try again. ");
}


