# UI Testing

Course: **AT00BY10-3012 Ohjelmistojen ylläpito ja testaus**  
Assignment: **IV - UI Testing**  
Date: **10.2.2026**  
Author: **Kaisa Juhola**

---

## Description

This document describes a UI testing assignment consisting of two parts:

* **Task 1:** Testing a website using browser **Developer Tools** (responsiveness, performance, and throttling)

* **Task 2:** Automated UI testing using **Selenium WebDriver**

The goal of this document is to explain the testing setup, performed actions, observed results, and potential optimization opportunities. 

## Tested website

The tested website is my [portfolio](https://tyynekaisa.github.io/Portfolio/) that contains a large amount of visual content. The page relies heavily on images, which makes it a suitable candidate for performance and load-time analysis, especially in a mobile context. Since I have made the page myself, testing it is particularly interesting for me and I can genuinely utilize the test results to optimize the page to work better. The site represents a single-page-style website with navigation links, sections, images and metadata, so it is also an ideal candidate for automated testing with Selenium WebDriver.

# Task 1 - UI Testing with Browser Developer Tools

## Test Environment and Settings

The tests were conducted using Chrome Developer Tools with the following configuration:

* Responsive mode: iPhone 12 Pro
* CPU throttling: 4× slowdown
* Network throttling: Slow 4G
* Disable network cache: Disabled

These settings were chosen to simulate a realistic mobile user experience with limited processing power and slower network conditions.

## Actions Performed During the Test

The following actions were performed while recording performance data:

* Initial page load
* Scrolling through the page
* Observing image-heavy sections
* Recording a performance trace
* Reviewing results in the Performance and Network panels

## Observations

### Load Times

* **Without throttling:**
    * The full page loaded in approximately **2.5 seconds**
    * Although the full page load time was rather long, 2.5 seconds, all visual elements appeared immediately

* **With CPU and network throttling enabled:**
    * Full page load time exceeded **2 minutes**
    * Visible content on the front page loaded after approximately **72 seconds**
    * The hero image loaded extremely slowly, resulting in a frustrating user experience

This indicates that the site does not scale well to slower devices or network conditions.

![Slow loading](/H4_UITesting/images/hidas.png)

### Images and Resource Loading

Based on the performance trace:

* A large number of images significantly slowed down page loading
* Image size, quality, and format contribute heavily to the load time
* Image optimization should be considered, for example:
    * Smaller image size and resolutions
    * Other image formats such as WebP or AVIF

![Image loading](/H4_UITesting/images/images.png)

Additionally, **font loading** took a noticeable amount of time and delayed proper text rendering on the page.

![Font loading](/H4_UITesting/images/fonts.png)

### Layout Shift and Render-Blocking Resources

The **Layout Shift Culprits** section of the performance report revealed that:

* /jquery-1.10.2.js blocked rendering for approximately 2.2 seconds
* Also libs/highlight.min.js delayed 1.49s

Further research is needed into the impact and optimization of these.

![Layout shift culprits](/H4_UITesting/images/render%20blocking.png)

### DOM Size and Structure

The **Optimize DOM Size** statistics showed:

* Total DOM elements: **490**
* Maximum DOM depth: **9**

While not yet critical, these values are relatively high for a single-page portfolio and can:

* slow down rendering
* increase layout shift issues
* negatively affect performance on low-end devices

Potential improvements:

* splitting the large portfolio page into multiple subpages
* loading sections dynamically only when needed
* reducing unnecessary wrapper elements in the HTML structure

This approach could also help reduce image loading overhead, as not all images would need to be loaded at once.

![DOm size and structure](/H4_UITesting/images/dom.png)

## Passed Performance Insights

The performance audit also reported several passed insights.

![Passed insights](/H4_UITesting/images/passed.png)

These passed results indicate that the site already follows many modern web performance best practices and that no critical issues were detected in these specific areas. As a result, protocol-level configuration, JavaScript duplication, and legacy script detection are not considered primary bottlenecks.

Instead, **the main performance challenges observed during testing are likely caused by heavy image content, slow font loading, and render-blocking resources** under throttled mobile conditions.

# Task 2 – Automated UI Testing with Selenium

## Overview

(To be implemented)

## Tools and Technologies

* **Python 3**
* **Selenium WebDriver** (Chrome)
* **pytest** (test framework)
* **webdriver-manager** (automatic ChromeDriver management)
* **Google Chrome** browser

Tests were executed locally using a Python virtual environment (**selenium-env**).

## Test Setup

A reusable pytest fixture was created to initialize and manage the Selenium WebDriver instance:

* ChromeDriver is automatically installed and configured using ChromeDriverManager
* Browser window is maximized for consistent rendering
* A reduced device scale factor is used for demonstration and visibility
* The browser is closed automatically after each test
* This setup ensures clean test execution and prevents leftover browser instances.

## Implemented Test Scenarios

Test code: [test_portfolio.py](/H4_UITesting/test_portfolio.py)

### 1. Page Title Verification

* Function: `test_portfolio_title(driver)`
* Opens the portfolio homepage
* Verifies that the browser tab title matches the expected value
* Confirms correct page identity and successful page load

### 2. Meta Description Validation

* Function: `test_portfolio_meta_description(driver)`
* Locates the <meta name="description"> tag in the document head
* Asserts that the content matches the expected description
* Demonstrates DOM inspection and attribute validation

### 3. Page Navigation Test

* Function: `test_page_navigation(driver)`
* Clicks the "ABOUT ME" navigation link
* Waits for URL change to confirm navigation
* Verifies that the browser navigates to the correct page

This test confirms that standard link-based navigation works as expected.

### 4. Section Navigation Test

* Function: `test_navigation_to_section(driver)`
* Clicks the "ART" navigation link
* Waits until the target section element is present in the DOM
* Asserts that the section is visible to the user

Although semantic `<section>` tags were not used, navigation to a section implemented with `<div>` elements works reliably by targeting element IDs.

### 5. Screenshot Capture

* Loads the portfolio front page
* Saves a timestamped screenshot to disk `images/screenshot_{timestamp}.png`
* Screenshots can be used for visual regression checks, audit documentation, or debugging failed test runs.

### Notes

* Explicit waits (WebDriverWait) were preferred over fixed delays for navigation and element detection
* Some `time.sleep()` calls were intentionally left in place for demonstration and visual confirmation during test execution
* No cookie consent handling was required, as the site does not use tracking cookies
* Tests were marked with `@pytest.mark.skip` during development and can be enabled individually when needed

## Run the tests

### Create a new venv

`python3 -m venv selenium-env`

### Activate it

`source selenium-env/bin/activate # Linux / macOS`  
`selenium-env\Scripts\activate # Windows PowerShell`

### Install dependencies

`pip install --upgrade pip`  
`pip install selenium webdriver-manager pytest`

### Run the test

`pytest -s test_portfolio.py`

## Test Round 1

### All tests skipped

![All skipped](/H4_UITesting/images/selenium_allskipped.png)
All test cases were initially marked with `@pytest.mark.skip` to verify that the test environment, dependencies, and test runner were correctly set up before executing any actual tests.

### Page Title verification

![1 passed, 4 skipped](/H4_UITesting/images/selenium_1passed4skipped.png)
At this stage, only the page title test was enabled while the remaining tests were still skipped. This confirmed that Selenium was able to launch the browser, load the page, and successfully perform a basic assertion.

### Meta description failed

![Meta failed](/H4_UITesting/images/selenium_MetaDescriptionFailed.png)
The meta description test failed because the expected meta description had been added locally to the portfolio for testing purposes, but the changes had not yet been committed and pushed to GitHub Pages. As a result, the deployed version did not match the test expectation.

## Test Round 2

### All passed

![All passed](/H4_UITesting/images/selenium_allpassed.png)
After synchronizing the repository and updating the deployed site, all tests were enabled and executed successfully, confirming that the application behavior matched the defined test cases.

### Screenshot

![Screenshot](/H4_UITesting/images/screenshot_1770714074.png)
This screenshot was automatically generated by the Selenium test to document the visual state of the portfolio front page at the time of the test execution.

## Conclusion

Task 2 successfully demonstrates how Selenium WebDriver can be used to automate UI testing for a real-world website. The implemented tests cover:

* Browser automation
* Navigation and interaction
* DOM inspection
* Visual verification

Together with Task 1, this provides a comprehensive overview of both **manual UI performance testing** and **automated UI functional testing**.

The test suite can be extended further with assertions for responsiveness, accessibility checks, or cross-browser testing if required.
