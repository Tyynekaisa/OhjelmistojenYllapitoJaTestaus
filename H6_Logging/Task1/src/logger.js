// logger.js
// 2.3.2026
// Winston logger configuration for the application
// Author: Kaisa Juhola

/**
 * Logger configuration using Winston.
 *
 * Features:
 * - Log level set to "info"
 * - JSON formatted output
 * - Timestamp included in each log entry
 * - Console transport
 * - File transports:
 *    - logs/error.log (error level only)
 *    - logs/combined.log (all logs)
 */

const { createLogger, transports, format } = require('winston');

/**
 * Application logger instance.
 *
 * @type {import('winston').Logger}
 */

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    // Logs to console
    new transports.Console(),

    // Logs only error level messages to file: logs/error.log
    new transports.File({ filename: 'logs/error.log', level: 'error' }),

    // Logs all messages to file: logs/combined.log
    new transports.File({ filename: 'logs/combined.log' })
  ]
});

/**
 * Logger module.
 *
 * @module logger
 * @property {import('winston').Logger} logger - Configured Winston logger instance.
 */
module.exports = logger;