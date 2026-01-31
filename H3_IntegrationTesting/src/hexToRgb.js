// hexToRgb.js
// 31.1.2026
// Converts hex color strings to RGB format
// Author: Kaisa Juhola

/**
 * Converts hex to rgb.
 *
 * @param {string} hex - Hex color string (e.g., "#RRGGBB" or "RRGGBB").
 * @returns {object} RGB representation with r, g, b properties.
 * @throws {Error} If the input is not a valid hex color string.
 */

function hexToRgb(hex) {

  // Validate input type (must be string)
  if (typeof hex !== "string") {
    throw new Error("Invalid hex color string");
  } 
  // Remove leading '#' if present
  if (hex.startsWith("#")) {
    hex = hex.slice(1);
  }
  // Validate hex string length
  if (hex.length !== 6) {
    throw new Error("Invalid hex color string");
  }
  // Validate hex string characters
  if (!/^[0-9A-Fa-f]{6}$/.test(hex)) {
    throw new Error("Invalid hex color string");
  }

  // Parse r, g, b components
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return { r, g, b };
}

/**
 * HexToRgb utility functions.
 *
 * @module hexToRgb
 * @property {function(string): object} hexToRgb - Converts hex color string to RGB object.
 */

module.exports = { hexToRgb };
