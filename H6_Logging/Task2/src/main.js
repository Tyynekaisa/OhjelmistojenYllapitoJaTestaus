// main.js
// 2.3.2026
// Express application entry point
// Author: Kaisa Juhola

/**
 * Main application file.
 *
 * Responsibilities:
 * - Initialize Express
 * - Register routes
 * - Start HTTP server
 */


const express = require('express');
const routes = require('./routes');
const logger = require('./logger');

const app = express();
const port = 3000;

/**
 * Register application routes
 */
app.use('/', routes);

/**
 * Start server only if file is run directly
 */
if (require.main === module) {
  app.listen(port, () => {
    logger.info('[MAIN] Starting');
    console.log(`Server running at http://localhost:${port}`);
  });

  process.on('SIGINT', () => {
    logger.info('[MAIN] Stopping');
    process.exit();
  });
}

module.exports = app;