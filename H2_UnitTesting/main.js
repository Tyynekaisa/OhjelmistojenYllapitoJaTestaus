// AT00BY10-3012 Ohjelmistojen ylläpito ja testaus
// H2 Unit Testing
// main.js
// 21.1.2026
// A simple program to demonstrate the mylib.js functions
// Author: Kaisa Juhola

const {add, substract, multiply, divide, modulus, isEven} = require("./src/mylib");

function main() {
  console.log("*******************");
  console.log("Let's do some math!");
  console.log("*******************\n");

  console.log("Adding two numbers:");
  console.log(`2 + 3 = ${add(2, 3)}\n`);

  console.log("Substracting two numbers:");
  console.log(`5 - 3 = ${substract(5, 3)}\n`);
  console.log("What if we substract a string?");
  try {
    console.log(`5 - 'b' = ${substract(5, 'b')}`);
  } catch (error) {
    console.log(`Error: ${error.message}\n`);
  }

  console.log("Multiplying two numbers:");
  console.log(`4 * 3 = ${multiply(4, 3)}\n`);

  console.log("Dividing two numbers:");
  console.log(`10 / 2 = ${divide(10, 2)}\n`);
  console.log("Can we divide by zero?");
  try {
    console.log(`10 / 0 = ${divide(10, 0)}`);
    } catch (error) {
    console.log(`Error: ${error.message}\n`);
  }

  console.log("Modulus of two numbers:");
  console.log(`10 % 3 = ${modulus(10, 3)}\n`);

  console.log("Checking if a number is even:");
  console.log(`Is 4 even? ${isEven(4)}`);
  console.log(`Is 5 even? ${isEven(5)}\n`);

  console.log("************************");
  console.log("That's all! Math is fun!");
  console.log("************************");

}

main();