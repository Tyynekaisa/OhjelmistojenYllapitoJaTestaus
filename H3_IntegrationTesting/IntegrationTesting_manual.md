# Integration Testing (Manual with Postman)

Testing date: **1.2.2026**  
Tested by: **Kaisa Juhola**

Integration testing for the HexToRgb API was performed manually using the **Postman** application.

## Purpose

The purpose of the integration tests was to verify that:

* The Express server is reachable
* HTTP endpoints respond correctly
* Valid input produces correct output
* Invalid input is handled gracefully using proper HTTP status codes

## Test Environment

* Runtime: **Node.js**
* Server: **Express**
* Testing tool: **Postman**
* Base URL: http://localhost:3000

## Test Execution

The server was started locally before testing.  
Each test case was executed by sending HTTP GET requests using Postman.

[Postman Test Collection](/H3_IntegrationTesting/HexToRgb%20API%20Integration%20Testing.postman_collection.json)

## Test Results

All defined test cases passed successfully:

* Valid hex color strings returned correct RGB values with HTTP status 200
* Invalid or missing input resulted in HTTP status 400 and a descriptive error message
* No unexpected server errors (500) occurred during testing
* The results confirm that the API behaves correctly and is robust against invalid input.

## Test Example Screenshots

Some examples of tests. The whole Postman test collection attached here: [HexToRgB Api Integration Testing.postman_collection.json](/H3_IntegrationTesting/HexToRgb%20API%20Integration%20Testing.postman_collection.json).

### GET / - Root Endpoint

![GET / - Root Endpoint](/H3_IntegrationTesting/images/integrationTests/root.png)

### GET /hexToRgb – Valid hex (#FF5733)

![GET /hexToRgb – Valid hex (#FF5733)](/H3_IntegrationTesting/images/integrationTests/validHex_%23FF5733.png)

### GET /hexToRgb – Valid hex (33FF57)

![GET /hexToRgb – Valid hex (33FF57)](/H3_IntegrationTesting/images/integrationTests/validHex_33FF57.png)

### GET /hexToRgb – Invalid hex (invalid characters)

![GET /hexToRgb – Invalid hex (invalid characters)](/H3_IntegrationTesting/images/integrationTests/invalidHex.png)

### GET /hexToRgb – Missing hex parameter

![GET /hexToRgb – Missing hex parameter](/H3_IntegrationTesting/images/integrationTests/invalidHex_missingParameter.png)
