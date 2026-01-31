// server.test.js
// 31.1.2026
// Integration tests for HexToRgb API using Supertest and Chai
// Author: Kaisa Juhola

const request = require("supertest");
const expect = require("chai").expect;

/**
 * Set test environment to ensure the server exports the Express app
 * instead of starting an HTTP listener.
 */
process.env.NODE_ENV = "test";
const app = require("../src/server");

/**
 * Integration tests for the HexToRgb API.
 * Uses Supertest for HTTP requests and Chai for assertions.
 */
describe("HexToRgb API", () => {
	/**
	 * Test the root route.
	 * Expects a 200 status and "Hello from Integration Testing Server" response text.
	 */
	it("responds to the root route", async () => {
		const res = await request(app).get("/");
		expect(res.status).to.equal(200);
		expect(res.text).to.equal("Hello from Integration Testing Server");
	});

	/**
	 * Test the /hexToRgb route with query parameters.
	 * Expects HTTP status 200.
	 */
	it("returns status 200 for /hexToRgb", async () => {
		const res = await request(app).get("/hexToRgb?hex=%23FF5733");
		expect(res.status).to.equal(200);
	});

	/**
	 * Test the /hexToRgb route for correct RGB conversion.
	 * Expects the correct RGB values in the response body.
	 */
	it("correctly converts hex to RGB", async () => {
		const res = await request(app).get("/hexToRgb?hex=%23FF5733");
		expect(res.body).to.deep.equal({ r: 255, g: 87, b: 51 });
	});

	/**
	 * Test the /hexToRgb route with invalid hex input.
	 * Expects HTTP status 400 and an error message in the response body.
	 */
	it("returns 400 and error message for invalid hex input", async () => {
  		const res = await request(app).get("/hexToRgb?hex=ZZZZZZ");
  		expect(res.status).to.equal(400);
  		expect(res.body).to.deep.equal({
    		error: "Invalid hex color string",
  		});
	});
});
