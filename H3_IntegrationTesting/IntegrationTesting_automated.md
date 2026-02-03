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
* Test file: [test/server.test.js](/H3_IntegrationTesting/test/server.test.js)

## Tested Component

* File: [src/server.js](/H3_IntegrationTesting/src/server.js)
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

## Test Example Screenshots

### Returns 400 and error message for invalid hex input

![Returns 400 and error message for invalid hex input](/H3_IntegrationTesting/images/automatedTests/UnitTests_Failed_CharacterValidation.png)  
The screenshot shows a failed automated integration test caused by an intentional error introduced into the backend validation logic.

### Incorrect HTTP status code detected by automated integration test

![iIncorrect HTTP status code](/H3_IntegrationTesting/images/automatedTests/IntegrationTests_Failed_1.png)  
![iIncorrect HTTP status code](/H3_IntegrationTesting/images/automatedTests/IntegrationTests_Failed.png)  
This test case demonstrates a situation where unit tests pass successfully,
but automated integration tests fail.

The hexToRgb function throws an error as expected, so unit testing does not detect any issue.
However, the Express API incorrectly returns HTTP 200 instead of 400 for invalid input.

### All tests passed after restoring the correct implementation

![Succesfull Unit and integration tests](/H3_IntegrationTesting/images/automatedTests/UnitTests_Succesfull.png)  

## Conclusion

The automated integration tests confirm that:

* The Express server routes are correctly configured
* The API returns correct results for valid input
* Invalid input is handled gracefully using appropriate HTTP status codes
* The API behaves consistently and predictably

Combined with [manual Postman testing](/H3_IntegrationTesting/IntegrationTesting_manual.md), the integration testing provides strong confidence in the correctness of the API implementation.
