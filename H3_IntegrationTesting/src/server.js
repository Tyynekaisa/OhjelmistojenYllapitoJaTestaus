// server.js
// 31.1.2026
// Express server for Hex to RGB conversion API
// Author: Kaisa Juhola

const express = require("express");
const hexlib = require("./hexToRgb");
const app = express();
const port = 3000;

/**
 * Root route.
 *
 * @route GET /
 * @returns {string} Plain text greeting ("Hello from Integration Testing Server")
 */
app.get("/", (req, res) => res.send("Hello from Integration Testing Server"));

/**
 * Convert hex to RGB.
 * 
 * @route GET /hexToRgb
 * @queryparam {string} hex - Hex color string (e.g., "#FF5733" or "FF5733")
 * @returns {object} JSON object with r, g, b properties
 * @throws {400} If the input hex string is invalid
 * @throws {500} For unexpected server errors with a generic error message
 * 
 */
app.get("/hexToRgb", (req, res) => {
	try {
	const hex = req.query.hex;
	const rgb = hexlib.hexToRgb(hex);
	res.json(rgb);
	} catch (error) {
		if (error.message === "Invalid hex color string") { // Handle known error
		res.status(400).json({ error: error.message });
		} else {
		res.status(500).json({ error: "Something went wrong" }); // Handle unexpected errors, just in case (do not show internal error details)
		}
	}
});

/**
 * Start the HTTP server unless running in test environment.
 *
 * When NODE_ENV is set to "test", the app is exported without
 * starting a listener so it can be used by Supertest.
 */
if (process.env.NODE_ENV !== "test") {
	app.listen(port, () => console.log(`Server: localhost:${port}`));
}

module.exports = app;
