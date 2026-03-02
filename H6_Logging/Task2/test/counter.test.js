// counter.test.js
// 2.3.2026
// Mocha + Supertest tests for counter API
// Author: Kaisa Juhola

/**
 * Tests for counter REST API endpoints.
 *
 * Uses Mocha as test framework and Supertest for HTTP assertions.
 *
 * Tests cover:
 * - GET /counter-read
 * - GET /counter-increase
 * - GET /counter-reset
 */

const request = require('supertest');
const app = require('../src/main');
const counter = require('../src/counter');

const assert = require('assert');

/**
 * Counter REST API test suite.
 * Tests the functionality of counter endpoints and ensures correct behavior of the in-memory counter.
 * Tests are organized into describe blocks for each endpoint, with individual it blocks for specific test cases.
 * Each test case makes HTTP requests to the Express application and asserts the expected responses and counter state.
 * Before each test, the counter is reset to ensure test isolation and consistent starting state.
 * 
 * @module tests/counter.test
 */

describe('Counter REST API', function () {

  // Reset counter before each test
  beforeEach(function () {
    counter.reset();
  });

  describe('GET /counter-read', function () {
    /**
     * It should return initial value 0 when counter is read for the first time.
     */
    it('should return initial value 0', async function () {
      const res = await request(app).get('/counter-read');

      assert.strictEqual(res.status, 200);
      assert.strictEqual(res.body.value, 0);
    });

  });

  describe('GET /counter-increase', function () {
    /**
     * It should increase counter to 1 after one increase call.
     */
    it('should increase counter to 1', async function () {
      const res = await request(app).get('/counter-increase');

      assert.strictEqual(res.status, 200);
      assert.strictEqual(res.body.value, 1);
    });

  });

  describe('GET /counter-reset', function () {
    /**
     * It should reset counter to 0 after increase calls.
     */
    it('should reset counter to 0', async function () {
      await request(app).get('/counter-increase');
      await request(app).get('/counter-increase');

      const res = await request(app).get('/counter-reset');

      assert.strictEqual(res.status, 200);
      assert.strictEqual(res.body.value, 0);
    });

  });

});