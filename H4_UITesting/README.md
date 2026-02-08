# H4 UI Testing

Course: **AT00BY10-3012 Ohjelmistojen ylläpito ja testaus**  
Assignment: **H4 UI Testing**  
Date: **8.2.2026**  
Author: **Kaisa Juhola**

---

## Description

This document describes a UI testing assignment consisting of two parts:

* **Task 1:** Testing a website using browser Developer Tools (responsiveness, performance, and throttling)

* **Task 2:** Automated UI testing using Selenium WebDriver

The goal of this document is to explain the testing setup, performed actions, observed results, and potential optimization opportunities. 

## Tested website

The tested website is my [portfolio site](https://tyynekaisa.github.io/Portfolio/) that contains a large amount of visual content. The page relies heavily on images, which makes it a suitable candidate for performance and load-time analysis, especially in a mobile context. Since I have made the page myself, testing it is particularly interesting for me and I can genuinely utilize the test results to optimize the page to work better.

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
* Reviewing results in the Performance, Network, and audit panels

## Performance Observations

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

## Layout Shift and Render-Blocking Resources

The **Layout Shift Culprits** section of the performance report revealed that:

* /jquery-1.10.2.js blocked rendering for approximately 2.2 seconds
* Also libs/highlight.min.js delayed 1.49s

Further research is needed into the impact and optimization of these.

![Layout shift culprits](/H4_UITesting/images/render%20blocking.png)

## DOM Size and Structure

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

## Additional Aspects to Monitor

Other important factors to consider during UI performance testing include:

* **Cumulative Layout Shift (CLS)**: reserve fixed space for images and dynamic content
* **First Contentful Paint (FCP) and Largest Contentful Paint (LCP)**: especially optimizing the hero image
* **Critical CSS**: inline essential styles for above-the-fold content
* **Third-party resources**: fonts, analytics scripts, and external libraries
* **Mobile usability and accessibility**: touch target sizes, font readability, and contrast

## Passed Performance Insights

The performance audit also reported several passed insights.

![Passed insights](/H4_UITesting/images/passed.png)

These passed results indicate that the site already follows many modern web performance best practices and that no critical issues were detected in these specific areas. As a result, protocol-level configuration, JavaScript duplication, and legacy script detection are not considered primary bottlenecks.

Instead, the main performance challenges observed during testing are more likely caused by heavy image content, slow font loading, and render-blocking resources under throttled mobile conditions.

# Task 2 – Automated UI Testing with Selenium

Overview

(To be implemented)

Tools and Technologies

(To be implemented)

Implemented Test Scenarios

(To be implemented)

Results and Findings

(To be implemented)