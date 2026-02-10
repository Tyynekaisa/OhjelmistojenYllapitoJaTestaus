# WEB GUI Testing

Course: **AT00BY10-3012 Ohjelmistojen ylläpito ja testaus**  
Assignment: **V - WEB GUI Testing**  
Date: **10.2.2026**  
Author: **Kaisa Juhola**

---

## Description

This document describes a Web GUI testing assignment for a simple color conversion application.
The purpose of the assignment was to create a minimal graphical user interface for an existing REST API,
test the application using appropriate Web GUI testing methods, and document the testing process and findings.

The focus of this assignment is testing, not user interface design or advanced frontend development.

## Application Overview

This application is a simple web-based color converter that provides two features:

* Hexadecimal color to RGB conversion (Hex → RGB)
* RGB color to hexadecimal conversion (RGB → Hex)

The application consists of:

* A basic frontend implemented using plain HTML and CSS
* A backend implemented with Node.js and Express
* REST API endpoints used by the frontend via HTTP GET requests

The frontend communicates directly with the backend API using the Fetch API.

## Application Screenshot

![Application User Interface](/H5_WebGUITesting/images/SH1_UI.png)  
**Screenshot 1: Application User Interface**

This screenshot shows the basic graphical user interface of the application.
The UI is intentionally minimal and functional, focusing on usability rather than visual appearance.

## Testing Methods

### Manual Web GUI Testing

Manual Web GUI testing was performed by interacting with the application through a web browser.

The testing process included:

* Entering values into input fields
* Clicking conversion buttons
* Observing conversion results
* Observing error messages
* Verifying that the frontend and backend communicate correctly

### Browser Developer Tools (Extra)

Browser developer tools were used to support and validate testing:

* **Network tab** was used to inspect outgoing HTTP requests and payloads
* HTTP status codes and responses were verified
* Errors related to backend availability were identified
* Responsive view mode was used to test mobile layout behavior

This method helped identify issues that were not visible directly in the UI.

## Test Cases and Results

### Backend Not Reachable

![Server not reachable](/H5_WebGUITesting/images/SH2_server_error.png)  
**Screenshot 2: “Server not reachable” error**

This error occurred when the backend server was not restarted after code changes. The frontend correctly displayed a generic error message indicating that the server could not be reached.

![Payload](/H5_WebGUITesting/images/SH3_payload.png)  
**Screenshot 3: Browser Developer Tools – Network Tab**

Network tab shows that the request parameters `r`, `g`, `b` (payload) are correctly sent to the backend.

**Finding:**  
The issue was resolved by restarting the backend server. This confirms that the frontend correctly handles network-level failures.

### Invalid Input Handling

![Invalid input values](/H5_WebGUITesting/images/SH4_InvalidInput.png)
**Screenshot 4: Invalid input values and error messages**

Examples of invalid inputs tested:

* Invalid hex string
* RGB values outside the range 0–255
* Non-numeric RGB values

The application displays generic error messages:

* <span style="color:red">Invalid hex color string</span>
* <span style="color:red">Invalid rgb number</span>

**Finding:**  
Invalid input is correctly rejected by the backend and the error messages are displayed in the UI. However, a generic error message is not very user-friendly on its own, as it does not guide the user to enter the valid input format.

### Valid Input Handling

![Valid input](/H5_WebGUITesting/images/SH5_ValidInput.png)  
**Screenshot 5: Valid inputs and correct results**

Examples of valid inputs tested:

* Hex → RGB: #252525
* RGB → Hex: 200, 45, 67

The application displays correct conversion results:

* Hex → RGB: RGB(37, 37, 37)
* RGB → Hex: #C82D43

**Finding:**  
Valid inputs produce correct results and are displayed clearly to the user.

### Responsive View Testing

![Responsive](/H5_WebGUITesting/images/SH7.png)  
**Screenshot 6: Mobile view using Developer Tools**

The application was tested using the browser’s responsive/mobile view mode.
The layout does not adapt well to smaller screen sizes.

**Finding:**  
The application is not responsive. While this is acceptable for this assignment (as responsive design was not a requirement), the test shows how important responsiveness and the mobile-first principle is to take into account to make the interface user-friendly on all devices.

## Test Tables

### Hex to RGB Conversion

| Test Case | Input | Expected Result | Result |
|----------|------|-----------------|---------------|
| Valid hex | `#252525` | `RGB(37, 37, 37)` | Pass |
| Valid hex | `#00FF00` | `RGB(0, 255, 0)` | Pass |
| Valid hex | `#00ff00` | `RGB(0, 255, 0)` | Pass |
| Valid hex | `#CA534B` | `RGB(202, 83, 75)` | Pass |
| Valid hex (no #) | `00FF00` | `RGB(0, 255, 0)` | Pass |
| Valid hex (no #) | `CA534B` | `RGB(202, 83, 75)` | Pass |
| Invalid hex | `#ZZZZZZ` | Error message | Pass |
| Invalid hex (too long) | `#25252525` | Error message | Pass |
| Invalid hex (too short) | `#2525` | Error message | Pass |
| Empty input | (empty) | Error message | Pass |


### RGB to Hex Conversion

| Test Case | Input (R, G, B) | Expected Result | Result |
|----------|----------------|-----------------|---------------|
| Valid RGB | `255, 0, 0` | `#FF0000` | Pass |
| Valid RGB | `0, 255, 0` | `#00FF00` | Pass |
| Valid RGB | `200, 45, 67` | `#C82D43` | Pass |
| Invalid RGB | `-1, 0, 0` | Error message | Pass |
| Invalid RGB | `256, 0, 0` | Error message | Pass |
| Invalid RGB | `300, 200, (empty)` | Error message | Pass |
| Invalid RGB | `200, 200, (empty)` | Error message | Fail |
| Non-numeric | `a, 0, 0` | Error message | Pass |

## Findings

* Invalid inputs are generally rejected and displayed as error messages.
* The frontend and backend integration works as expected after restarting the server when changes are made.
* A validation edge case was discovered during RGB to Hex testing:
  * When one of the RGB input fields is left empty (e.g. `200, 200, (empty)`), the application returns a valid hex value (`#C8C800`) instead of an error message.
  * This happens because an empty input is implicitly interpreted as zero.
  * From a user perspective, this behavior is unexpected and should ideally be handled as an invalid input.
* No critical issues were found during testing.

## Notes on Automated GUI Testing

Automated Web GUI testing could be implemented using tools such as Cypress, Playwright, or Selenium.  
However, for this simple application, manual Web GUI testing was sufficient and effective.

## Conclusion

The Web GUI testing confirmed that the application functions correctly from the user’s perspective.

Testing revealed minor usability and validation limitations, such as generic error messages and certain edge cases where incomplete input may produce technically valid but unexpected results. These findings do not affect the core functionality but highlight areas for improved input
validation and user guidance.
