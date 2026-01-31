// hexToRgb.test.js
// 31.1.2026
// Unit tests for hexToRgb.js using Chai's expect style
// Author: Kaisa Juhola

const { expect } = require("chai");
const { hexToRgb } = require("../src/hexToRgb");

/**
 * Unit tests for hexToRgb.js
 *
 * @module test/hexToRgb
 */
describe("hexToRgb", () => {
  /**
   * Tests for the hexToRgb() function
   */
  describe("hexToRgb()", () => {
    /**
     * It should correctly convert hex to RGB.
     */
    it("should convert hex to RGB correctly", () => {
      expect(hexToRgb("#FF5733")).to.deep.equal({ r: 255, g: 87, b: 51 });
      expect(hexToRgb("33FF57")).to.deep.equal({ r: 51, g: 255, b: 87 });
    });
    /**
     * It should throw an error for invalid hex strings.
     */
    it("should throw an error for invalid hex strings", () => {
      expect(() => hexToRgb()).to.throw("Invalid hex color string");
      expect(() => hexToRgb("#FFF")).to.throw("Invalid hex color string");
      expect(() => hexToRgb("ZZZZZZ")).to.throw("Invalid hex color string");
      expect(() => hexToRgb("12345")).to.throw("Invalid hex color string");
      expect(() => hexToRgb("#FF57333")).to.throw("Invalid hex color string");
    });
  });
});
