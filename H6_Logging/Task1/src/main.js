// logger.js
// 2.3.2026
// Demonstrates usage of the Winston logger
// Author: Kaisa Juhola

/**
 * Main application entry point.
 *
 * This file demonstrates:
 * - Different log levels (info, warn, error)
 * - Two logging syntaxes:
 *    1. logger.log(level, message)
 *    2. logger.level(message)
 *
 * Running this file will:
 * - Print logs to the console
 * - Create/update log files in the logs/ directory
 */

const logger = require('./logger');

/**
 * Executes logging examples.
 */

function runLoggingDemo() {
    // Using generic log method
    logger.log('info', 'This is an informational message.');
    logger.log('warn', 'This is a warning message.');
    logger.log('error', 'This is an error message.');

    // Using level-specific shortcut methods
    logger.info('This is another informational message.');
    logger.warn('This is another warning message.');
    logger.error('This is another error message.');
}

// Execute demo when file is run directly
runLoggingDemo();