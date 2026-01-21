// mylib.expect.test.js
// 21.1.2026
// Unit tests for mylib.js using Chai's expect style
// Author: Kaisa Juhola

const { expect } = require("chai");
const { add, substract, multiply, divide, modulus, isEven } = require("../src/mylib");

describe("mylib expect test suite", () => {

  // Before and after -hooks for setup and teardown
  before (() => {
    console.log("Starting mylib.js tests.");
  });

  after (() => {
    console.log("Finished mylib.js tests.");
  });

  // Test cases for each function
  // add()
  describe("add()", () => {
    it("should add two numbers correctly", () => {
      expect(add(2, 3)).to.equal(5);
    });

    it("should throw an error if inputs are not numbers", () => {
      expect(() => add(2, "a")).to.throw("Inputs must be numbers");
    });
  });

  // substract()
  describe("substract()", () => {
    it("should substract two numbers correctly", () => {
      expect(substract(5, 3)).to.equal(2);
    });

    it("should throw an error if inputs are not numbers", () => {
      expect(() => substract(5, "b")).to.throw("Inputs must be numbers");
    });
  });

  // multiply()
  describe("multiply()", () => {
    it("should multiply two numbers correctly", () => {
      expect(multiply(4, 3)).to.equal(12);
    });
    it("should throw an error if inputs are not numbers", () => {
      expect(() => multiply(4, "c")).to.throw("Inputs must be numbers");
    });
  });

  // divide()
  describe("divide()", () => {
    it("should divide two numbers correctly", () => {
      expect(divide(10, 2)).to.equal(5);
    });

    it("should throw an error if inputs are not numbers", () => {
      expect(() => divide(10, "d")).to.throw("Inputs must be numbers");
    });

    it("should throw an error when dividing by zero", () => {
      expect(() => divide(10, 0)).to.throw("Cannot divide by zero");
    });
  });

  // modulus()
  describe("modulus()", () => {
    it("should return the modulus of two numbers correctly", () => {
      expect(modulus(10, 3)).to.equal(1);
    });

    it("should throw an error if inputs are not numbers", () => {
      expect(() => modulus(10, "e")).to.throw("Inputs must be numbers");
    });
    it("should throw an error when modulus by zero", () => {
      expect(() => modulus(10, 0)).to.throw("Cannot divide by zero");
    });
  });

  // isEven()
  describe("isEven()", () => {
    it("should return true for even numbers", () => {
      expect(isEven(4)).to.be.true;
    });

    it("should return false for odd numbers", () => {
      expect(isEven(5)).to.be.false;
    });

    it("should throw an error if input is not a number", () => {
      expect(() => isEven("b")).to.throw("Input must be a number");
    });
  });
});