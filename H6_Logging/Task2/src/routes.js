// routes.js
// 2.3.2026
// Express routes definition
// Author: Kaisa Juhola

/**
 * Defines REST API endpoints for counter operations.
 */

const express = require('express');
const counter = require('./counter');
const logger = require('./logger');

const router = express.Router();

/**
 * GET /counter-increase
 * 
 * @route GET /counter-increase
 * @returns {object} JSON object with new counter value after increase
 */
router.get('/counter-increase', (req, res) => {

  logger.info("[ENDPOINT] GET '/counter-increase'");

  const value = counter.increase();
  logger.info(`[COUNTER] increase ${value}`);

  res.json({ value });
});

/**
 * GET /counter-read
 * 
 * @route GET /counter-read
 * @returns {object} JSON object with current counter value
 */
router.get('/counter-read', (req, res) => {

  logger.info("[ENDPOINT] GET '/counter-read'");

  const value = counter.read();
  logger.info(`[COUNTER] read ${value}`);

  res.json({ value });
});

/**
 * GET /counter-reset
 * 
 * @route GET /counter-reset
 * @returns {object} JSON object with counter value after reset (0)
 */
router.get('/counter-reset', (req, res) => {

  logger.info("[ENDPOINT] GET '/counter-reset'");

  const value = counter.reset();
  logger.info(`[COUNTER] zeroed ${value}`);

  res.json({ value });
});

/**
 * Routes module exports.
 * @module routes
 * @property {object} router - Express router with defined endpoints.
 */
module.exports = router;