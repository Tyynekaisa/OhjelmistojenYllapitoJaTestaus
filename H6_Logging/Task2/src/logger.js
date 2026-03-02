// logger.js
// 2.3.2026
// Winston logger configuration for REST API
// Author: Kaisa Juhola

/**
 * Logger configuration using Winston.
 *
 * Logs are written to:
 * - Console
 * - logs/error.log (error level only)
 * - logs/combined.log (all logs)
 */

const { createLogger, transports, format } = require('winston');

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level.toUpperCase()} ${message}`;
    })
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
 * Logger module exports.
 * @module logger
 * @property {object} logger - Configured Winston logger instance.
 */
module.exports = logger;