let num1 = parseFloat(prompt("enter number 1: "));
let num2 = parseFloat(prompt("enter number 2: "));
let action = prompt("do +, -, * or / ?");
let result;
if (action == "+") {
    result = num1 + num2;
} else if (action == "-") {
    result = num1 - num2;
} else if (action == "*") {
    result = num1 * num2;
} else if (action == "/") {
    result = num1 / num2;
} else {
    console.log("error: invalid action");
}
console.log(`from the two numbers ${num1} and ${num2} that you entered, and requested '${action}' operation, the result is: ${result}`);

