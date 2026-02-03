# Unit Testing - HexToRgb

Testing date: **1.2.2026**  
Tested by: **Kaisa Juhola**

## Purpose

The purpose of unit testing was to verify that the hexToRgb utility function works correctly in isolation and handles both valid and invalid input reliably.
Unit tests focus only on the business logic and do not involve the Express server or HTTP communication.

## Test Environment

* Runtime: **Node.js**
* Test framework: **Mocha**
* Assertion library: **Chai (expect style)**
* Test file: [test/hexToRgb.test.js](/H3_IntegrationTesting/test/hexToRgb.test.js)

## Tested Component

* File: [src/hexToRgb.js](/H3_IntegrationTesting/src/hexToRgb.js)
* Function: hexToRgb(hex)

The function converts a hexadecimal color string into an RGB object.

## Test Cases

The following test cases were executed:

### Valid Input Tests

* Hex color with leading # (e.g. #FF5733)
* Hex color without # (e.g. 33FF57)
* Expected result:
    * Function returns an object with correct r, g, and b values
    * No errors are thrown

### Invalid Input Tests

The function was tested against several invalid inputs:

* Missing argument (undefined)
* Incorrect length (e.g. #FFF, 12345)
* Invalid characters (e.g. ZZZZZZ)
* Expected result:
    * Function throws an error with the message:  
    "Invalid hex color string"

## Test Execution

Unit tests were executed using the following command:

```
npm test
```

All unit tests passed successfully after the final implementation.

## Negative Testing and Fault Injection

To validate the effectiveness of the unit tests, intentional errors were introduced into the hexToRgb implementation during development.

Examples of injected faults:

* Removing input type validation
* Allowing invalid hex characters
* Returning incorrect RGB values

In all cases:

* One or more unit tests failed as expected
* The failures confirmed that the unit tests correctly detected implementation errors
* After restoring the correct implementation, all tests passed again

## Test Example Screenshots

### Injected fault: Input type validation removed

![Removing input type validation](/H3_IntegrationTesting/images/automatedTests/UnitTests_Failed_InputTypeValidation.png)  

### Injected fault: Allowing invalid hex characters

![Allowing invalid hex characters](/H3_IntegrationTesting/images/automatedTests/UnitTests_Failed_CharacterValidation.png)  

### Injected fault: Returning incorrrect RGB values

![Returning incorrect RGB](/H3_IntegrationTesting/images/automatedTests/UnitTests_Failed_HexError2.png)  
![Returning incorrect RGB](/H3_IntegrationTesting/images/automatedTests/UnitTests_Failed_HexError2_1.png)  

### All tests passed after restoring the correct implementation

![Succesfull Unit tests](/H3_IntegrationTesting/images/automatedTests/UnitTests_Succesfull.png)  

## Conclusion

The unit tests confirm that the hexToRgb function:

* Produces correct output for valid input
* Handles invalid input robustly
* Throws consistent and descriptive error messages

The fault injection testing further demonstrates that the test cases effectively detect implementation errors and increase confidence in the correctness of the function.
