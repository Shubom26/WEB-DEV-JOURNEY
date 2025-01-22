/*
Faulty calculator using javascript

This faulty calculator does the following:

- takes two number from the user
- It performs wrong operations as follows:
    + instead of -
    * instead of +
    - instead of /
    / instead of **
it performs wrong operations 10% of the time
*/

let random = Math.random()
let a = Number(prompt("Enter the first number"));
let b = Number(prompt("Enter the second number"));
let c = prompt("Enter the operation");

let obj = {
    "+": "-",
    "-": "/",
    "/": "**",
    "*": "+",
};

let result = 0;
if (random < 0.1) {
    // perform correct operations
    if (c === "+") {
        result = a + b;
    } else if (c === "-") {
        result = a - b;
    } else if (c === "*") {
        result = a * b;
    } else if (c === "/") {
        result = a / b;
    } else {
        result = a ** b;
    }
} else {
    // perform wrong operations
    if (c === "+") {
        result = a - b;
    } else if (c === "-") {
        result = a / b;
    } else if (c === "*") {
        result = a + b;
    } else if (c === "/") {
        result = a ** b;
    }
}
alert(`${a} ${c} ${b} = ${result}`);
