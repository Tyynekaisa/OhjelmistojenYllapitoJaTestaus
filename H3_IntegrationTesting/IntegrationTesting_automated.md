# Integration Testing (Automated)

Testing date: **1.2.2026**  
Tested by: **Kaisa Juhola**

## Purpose

The purpose of automated integration testing was to verify that the Express-based HexToRgb API works correctly as a whole.

These tests validate:

* HTTP routing
* Request handling
* Response content
* HTTP status codes

The API is tested without starting a real HTTP server.

## Test Environment

* Runtime: **Node.js**
* Server framework: **Express**
* Test framework: **Mocha**
* Assertion library: **Chai (expect style)**
* HTTP testing library: **Supertest**
* Test file: test/server.test.js

## Tested Component

* File: src/server.js
* API: HexToRgb REST API

The tests interact with the Express application directly by importing the app instance.

The environment variable NODE_ENV is set to "test" to prevent the server from starting an actual network listener.

## Test Cases

The following integration test cases were executed:

### Root Endpoint Test

* Endpoint: GET /
* Expected result:
    * HTTP status 200
    * Response text:  
    "Hello from Integration Testing Server"

### Valid Hex Input Test

* Endpoint: GET /hexToRgb
* Query parameter: hex=#FF5733
* Expected result:
    * HTTP status 200
    * Correct RGB JSON response:  
    { "r": 255, "g": 87, "b": 51 }

### Invalid Hex Input Test

* Endpoint: GET /hexToRgb
* Query parameter: hex=ZZZZZZ
* Expected result:
    * HTTP status 400
    * JSON error response:  
    { "error": "Invalid hex color string" }

## Test Execution

The integration tests were executed using the same test command as the unit tests:

```
npm test
```

Supertest was used to simulate HTTP requests directly against the Express application without opening a network port.

## Negative Testing

Invalid input values were intentionally tested to ensure that:

* Client-side errors result in HTTP status 400
* The server does not crash or return an internal server error
* Clear and descriptive error messages are returned to the client

This confirms that the API handles invalid input robustly.

## Test Evidence

Screenshots were taken during test execution to document:

* Successful integration test runs
* Correct HTTP status codes
* Correct response bodies
* Failed tests during development when intentional errors were introduced

These screenshots demonstrate that the integration tests were executed and validated.

## Conclusion

The automated integration tests confirm that:

* The Express server routes are correctly configured
* The API returns correct results for valid input
* Invalid input is handled gracefully using appropriate HTTP status codes
* The API behaves consistently and predictably

Combined with [manual Postman testing](/H3_IntegrationTesting/IntegrationTesting_manual.md), the integration testing provides strong confidence in the correctness of the API implementation.
