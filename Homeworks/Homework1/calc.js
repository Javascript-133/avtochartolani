let num1 = parseFloat(prompt("enter number 1: "));
let num2 = parseFloat(prompt("enter number 2: "));
let action = prompt("do plus, minus, multiply or divide?");
let result;
if (action == "plus") {
    result = num1 + num2;
} else if (action == "minus") {
    result = num1 - num2;
} else if (action == "multiply") {
    result = num1 * num2;
} else if (action == "divide") {
    result = num1 / num2;
} else {
    console.log("error: invalid action");
}
console.log(`from the two numbers ${num1} and ${num2} that you entered, and requested '${action}' operation, the result is: ${result}`);

