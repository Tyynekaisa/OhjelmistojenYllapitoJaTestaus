// rgbToHex.js
// 7.2.2026
// Converts rgb to hex
// Author: Kaisa Juhola

/**
 * Converts rgb to hex.
 *
 * @param {number} r - red value
 * @param {number} g - green value
 * @param {number} b - blue value
 * @returns {string} - hex color string
 * @throws {Error} If the input is not a valid r, g, b number.
 */

function rgbToHex(r, g, b) {

  // Validate input type. Must be number.
  // This also covers the case of undefined or null input.
  if (typeof r !== "number" || typeof g !== "number" || typeof b !== "number" ) {
    throw new Error("Invalid rgb number");
  }
  // Validate input number, must be integer.
  if (!Number.isInteger(r) || !Number.isInteger(g) || !Number.isInteger(b)) {
  throw new Error("Invalid rgb number");
  }
  // Validate rgb value, must be between 0-255
  if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
    throw new Error("Invalid rgb number");
  }


  // convert rgb numbers to hex string
  const hex = "#" + r.toString(16).padStart(2, "0") + g.toString(16).padStart(2, "0") + b.toString(16).padStart(2, "0");

  return hex.toUpperCase();
}

/**
 * RgbToHex utility functions.
 *
 * @module rgbToHex
 * @property {function(string): object} rgbToHex - Converts rgb numbers to hex-color string.
 */

module.exports = { rgbToHex };
