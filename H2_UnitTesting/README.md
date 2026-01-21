# H2 Unit Testing – mylib

Course: **AT00BY10-3012 Ohjelmistojen ylläpito ja testaus**  
Assignment: **H2 Unit Testing**  
Date: **21.1.2026**  
Author: **Kaisa Juhola**

---

## Description

This project demonstrates basic **unit testing in JavaScript** using **Mocha** and **Chai (expect style)**.

The project consists of:

* A small math library (mylib.js) implementing basic arithmetic operations
* A simple main program (main.js) that demonstrates how the library works
* Unit tests (mylib.expect.test.js) that verify the correctness of the library functions

The main program and the unit tests are **independent**: tests can be run without executing the main program.

## Project Structure

```
.
├── src/
│   └── mylib.js             # Math library
├── test/
│   └── mylib.expect.test.js # Unit tests (Mocha + Chai)
├── README.md                :red_circle: You are here
├── main.js                  # Demo program
├── package-lock.json
└── package.json
```

## mylib.js – Math Library

The library provides the following functions:

* add(a, b) – Adds two numbers
* substract(a, b) – Subtracts two numbers
* multiply(a, b) – Multiplies two numbers
* divide(a, b) – Divides two numbers
* modulus(a, b) – Calculates the modulus
* isEven(n) – Checks if a number is even

### Error Handling

* All functions throw an error if the inputs are not numbers
* divide() and modulus() throw an error when the divisor is 0

## main.js – Demo Program

The main.js file demonstrates the usage of all functions in mylib.js.

Features:

* Calls each arithmetic function
* Shows examples of valid input and error cases (division by zero / input is not number)
    * Uses try/catch blocks to handle and display errors

## Unit Tests

Unit tests are written using:

* **Mocha**
* **Chai (expect style)** for assertions

Each function in mylib.js has at least one corresponding unit test.

### Test Suite Hooks

The test suite also includes:

* before() – runs once before all tests start
* after() – runs once after all tests have finished

## Usage

### Initialization

npm init -y

### Dependencies Installation

npm install

### To run the demo

npm run demo

### Run the unit tests

npm test

---

**Math is fun – especially when it is tested!**
