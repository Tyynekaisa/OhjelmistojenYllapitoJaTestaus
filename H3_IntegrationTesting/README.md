# H3 Integration Testing

Course: **AT00BY10-3012 Ohjelmistojen ylläpito ja testaus**  
Assignment: **H3 Integration Testing**  
Date: **31.1.2026**  
Author: **Kaisa Juhola**

---

## Description

This project demonstrates **unit testing and integration testing in JavaScript** using **Mocha**, **Chai (expect style)** and **Supertest**.

The project consists of:

* A small utility library (hexToRgb.js) for converting hexadecimal color strings to RGB format
* A REST API (server.js) built with Express, exposing the conversion functionality
* Unit tests that verify the correctness of the conversion logic
* Integration tests that verify the API behavior and HTTP responses

## Project Structure

```
.
├── src/
│   └── hexToRgb.js             # Hex to RGB converter
│   └── server.js               # Express server
├── test/
│   └── hexToRgb.test.js        # Unit tests
│   └── server.test.js          # Integration tests
├── README.md
├── package-lock.json
└── package.json
```

## hexToRgb.js – Utility Library

The hexToRgb.js module provides a single function:

* hexToRgb(hex) – Converts a hexadecimal color string to an RGB object

### Supported Input Formats

* "#RRGGBB"
* "RRGGBB"

### Return Value

* { r: number, g: number, b: number }

### Error Handling

The function throws an error with the message: "Invalid hex color string"
if:

* The input is not a string
* The hex string length is not exactly 6 characters (after #)
* The hex string contains invalid characters

## server.js – REST API

The Express server exposes the hex-to-RGB conversion as an HTTP endpoint.

### Endpoints

### GET /

Returns a plain text greeting message.

### GET /hexToRgb

Query parameter:

* hex – Hexadecimal color string (#FF5733 or FF5733)

### Responses

* 200 OK – Valid hex input, returns RGB object
* 400 Bad Request – Invalid hex input
* 500 Internal Server Error – Unexpected server-side error (generic message only)

Internal error details are not exposed to the client for security reasons.

## Unit Tests

Unit tests are written using:

* **Mocha**
* **Chai (expect style)**

The unit tests verify:

* Correct conversion of valid hex strings
* Proper error handling for invalid input values

The unit tests focus **only on the utility function**, without involving the Express server.

## Integration Tests

Integration tests are written using:

* **Supertest**
* **Chai**

The integration tests verify:

* API availability
* Correct HTTP status codes
* Correct JSON responses
* Proper handling of invalid input with 400 Bad Request

The server is not started as a real HTTP listener during tests.
Instead, the Express app is exported and tested directly.

## Test Documentation

// TO DO

## Usage

### Initialization

npm init -y

### Dependencies Installation

npm install

### To run the tests

npm test

### Starting Development Server

npm run dev

The server runs at:  
http://localhost:3000

---
