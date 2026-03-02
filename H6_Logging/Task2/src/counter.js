// counter.js
// 2.3.2026
// In-memory counter implementation
// Author: Kaisa Juhola

/**
 * Counter module.
 *
 * Holds integer state in memory and provides:
 * - read()
 * - increase()
 * - reset()
 */

let count = 0;

/**
 * Returns current counter value.
 *
 * @returns {number}
 */
function read() {
  return count;
}

/**
 * Increases counter by one.
 *
 * @returns {number} New value after increase
 */
function increase() {
  count += 1;
  return count;
}

/**
 * Resets counter to zero.
 *
 * @returns {number} Reset value (0)
 */
function reset() {
  count = 0;
  return count;
}

/**
 * Counter module exports.
 * @module counter
 * @property {function(): number} read - Returns current counter value.
 * @property {function(): number} increase - Increases counter by one and returns new value.
 * @property {function(): number} reset - Resets counter to zero and returns reset value.
 */
module.exports = {
  read,
  increase,
  reset
};