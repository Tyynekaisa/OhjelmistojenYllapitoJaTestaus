# Versioning and Licensing

Course: **AT00BY10-3012 Ohjelmistojen ylläpito ja testaus**  
Assignment: **VII - Versioning and Licensing**  
Date: **4.3.2026**  
Author: **Kaisa Juhola**  

---

## Task 1 - Versioning

### Project and Version Identification

For this assignment, I selected the project [VI – Logging](/H6_Logging/), which includes:

* **Task 1**: Winston logging implementation
* **Task 2**: Express REST API with counter functionality and automated tests

### Version History (VI - Logging)

**0.1.0** – Initial Winston logging implementation (Task 1) 20.2.2026  
**1.0.0** – First stable REST API (Task 2) 3.3.2026

### Versioning Rationale

After completing Task 1, the project did not yet provide a public API.
It was considered an initial development version and therefore assigned as **0.1.0**

According to Semantic Versioning (https://semver.org/
):

> "Major version zero (0.y.z) is for initial development. Anything may change at any time. The public API should not be considered stable."

After implementing Task 2, the project introduced a defined REST API with stable endpoints:

* `GET /counter-read`
* `GET /counter-increase`
* `GET /counter-reset`

Since the project now exposes a stable public API, the version was updated to **1.0.0**

This follows the SemVer principle:

> "Version 1.0.0 defines the first stable public API."

### Semantic Versioning (SemVer)

Semantic Versioning follows the format:

`MAJOR.MINOR.PATCH`

Where:

* MAJOR version increases when incompatible API changes are introduced.
* MINOR version increases when new functionality is added in a backward-compatible manner.
* PATCH version increases when backward-compatible bug fixes are made.

### Version Update Scenarios

#### Questions

How should you update the software version if the following operations do take place:

1. New feature is added to the project without breaking backwards compatibility
2. Bug is fixed without changing the API
3. Change API in a way it breaks backwards compatibility

#### Answers

**1\.** If a new feature is added and the existing API continues to work without changes, the **MINOR** version must be increased.

Example: **1.0.0 → 1.1.0**

* Backward compatibility is preserved.
* New functionality is introduced.

**2\.** If a bug is fixed and the public API remains unchanged, the **PATCH** version must be increased.

Example: **1.0.0 → 1.0.1**

* No new features.
* No breaking changes.
* Only internal corrections.

**3\.** If changes are introduced that break the existing API (e.g., removing an endpoint, changing response format, modifying required parameters), the **MAJOR** version must be increased.

Example: **1.0.0 → 2.0.0**

* Existing clients using the API would need to modify their implementation.
* Backward compatibility is not preserved.

## Task 2 - Licensing

### License Documentation

The project ([VI – Logging](/H6_Logging/)) is licensed under the MIT License.

The MIT License was selected because:

* It is simple and widely used.
* It allows reuse, modification and redistribution.
* It places minimal restrictions on users.
* It is suitable for educational and non-commercial projects.

Parts of the logging configuration were based on course-provided example code.
AI tools were used as assistance during development.
The final implementation and integration were completed by the author.

### MIT License

Copyright (c) 2026 Kaisa Juhola

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
