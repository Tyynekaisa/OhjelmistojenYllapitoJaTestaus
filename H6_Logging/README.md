# Logging

Course: **AT00BY10-3012 Ohjelmistojen ylläpito ja testaus**  
Assignment: **VI - Logging**  
Date: **2.3.2026**  
Author: **Kaisa Juhola**  

---

## Description

This project contains two tasks related to logging and REST API development in Node.js.

* **Task 1** focuses on implementing a logging library (Winston) in a simple Node.js application.
* **Task 2** extends the project by implementing a REST API using Express and integrating structured logging into the application.

The purpose of the assignment is to demonstrate:

* Centralized logging configuration
* Different log levels
* Logging to multiple destinations
* Separation of concerns in Express applications
* Manual REST Client testing
* Automated endpoint testing

## Project Structure

```
.
├── Task1/
│   └── src/
│       └── logger.js
│       └── main.js
├── Task2/
│   └── rest.http 
│   └── src/
│   │   └── logger.js
│   │   └── main.js
│   │   └── counter.js
│   │   └── routes.js
│   └── test/
│       └── counter.test.js
├── images/                   # screenshots for documentation
├── README.md
├── package-lock.json
└── package.json
```

### .gitignore

The following files and directories are excluded from version control:

* node_modules/
* logs/

These files are automatically generated and should not be committed to Git.  
The .gitignore file is located at the [root of the entire course repository](https://github.com/Tyynekaisa/OhjelmistojenYllapitoJaTestaus) and is shared between all course assignments.

---
---

# Task 1 - Implementing Logging library

## Description - Task 1

Task 1 demonstrates how to integrate the **Winston** logging library into a Node.js application.

Logs are written:

* To the console
* To log files with different log levels

### Application Components

* `main.js`  
Demonstrates usage of the logger by producing log messages at different levels (info, warn, error).
* `logger.js`  
Contains the Winston logger configuration, including transports and formatting.

## Versions - Task 1

* Node.js: 22.14.0
* Winston: 3.11.0

## Usage - Task 1

### Initialization

```
npm init -y
```

### Dependencies Installation

```
npm install
```

### Run the application

```
node Task1/src/main.js
```

## Logging Configuration

The logger is configured in `logger.js` using Winston.

Features:

* Log level: `info`
* JSON formatted logs
* Timestamp included in each log entry
* Console transport
* File transport:
  * `logs/error.log` (error level only)
  * `logs/combined.log` (all logs)

## Testing - Task 1

Testing was performed manually by running the application.

After running the application:

* Log messages were printed to the terminal as expected
* Log files were automatically created inside the `logs/` directory as expected:
  * logs/combined.log (all log levels)
  * logs/error.log (only error level logs)

![Console logs](/H6_Logging/images/logging1.png)  
Console output

![Combined](/H6_Logging/images/task1_combined.png)  
Log file: combined.log

![Errors](/H6_Logging/images/task1_error.png)  
Log file: error.log

---
---

# Task 2 - Tally counter REST API

## Description - Task 2

Task 2 implements a simple REST API using **Express**.

The application:

* Uses **Express** for routing
* Uses **Winston** for structured logging
* Maintains an in-memory integer counter
* Separates application logic into modules

### Application Components

* `main.js`  
Initializes the Express application, registers routes, and starts the server.
* `routes.js`  
Defines REST endpoints and logs endpoint activity.
* `counter.js`  
Implements the in-memory counter logic (read, increase, reset).
* `logger.js`  
Configures Winston logging (same destinations as in Task 1).

## Versions - Task 2

* Node.js: 22.14.0
* Winston: 3.11.0
* Express: 4.18.2

### Security Notice

Running `npm audit` reports vulnerabilities in transitive dependencies of Express 4.18.2. These vulnerabilities originate from internal Express dependencies and are not directly used in this educational project. The required Express version (4.18.2) was used as specified in the assignment instructions.

## Usage - Task 2

### Initialization

```
npm init -y
```

### Dependencies Installation

```
npm install
```

### Run the application

```
node Task2/src/main.js
```

The server runs at:  
http://localhost:3000

## Available endpoints

### GET /counter-read

Returns the current counter value.

### GET /counter-increase

Increases the counter by one and returns the updated value.

### GET /counter-reset

Resets the counter to zero and returns the value.

## Testing - Task 2

### Initial Server Test

The server was first tested using a simple "Hello World" implementation to verify that Express was working correctly.

![Task 2 - Hello World test code](/H6_Logging/images/task2_server_test1.png)  
Temporary code for testing

### Automated tests

Task 2 includes automated tests using:

* Mocha
* Supertest

Run tests with:

```
npm test
```

![Task 2 mocha + supertest](/H6_Logging/images/task2_mocha-supertest.png)  
Test results example

Tests verify:

* Counter initial state
* Counter increase functionality
* Counter reset functionality
* HTTP status codes

### Manual tests

In addition to automated tests, the REST API was tested manually using the VS Code **REST Client extension**.

The [rest.http](/H6_Logging/Task2/rest.http) file contains predefined HTTP requests for testing the endpoints.

#### How to test

Start the server:

```
node Task2/src/main.js
```

Open `Task2/rest.http` in VS Code.  
Click **Send Request** above the desired endpoint.

#### Tested Endpoints

* `GET /counter-read`
* `GET /counter-increase`
* `GET /counter-reset`

#### Expected Behavior

* `/counter-read` returns the current counter value.
* `/counter-increase` increases the counter by one and returns the updated value.
* `/counter-reset` resets the counter to zero.

All responses return HTTP status code `200 OK` and JSON formatted output:

```
{
  "value": <number>
}
```

#### Example REST Client Test Result

The following screenshot demonstrates:

* The HTTP request
* The JSON response
* Correct counter behavior

![REST Client Test Results](/H6_Logging/images/Task2_REST_Client_extension.png)  
REST Client Testing

![Logs](/H6_Logging/images/Task2_logs.png)  
Combined log file showing same results

## Summary - Task 1 & Task 2

This project demonstrates:

* Logging configuration using Winston
* Logging to console and files
* Express REST API implementation
* Separation of concerns (routes, logic, configuration)
* Manual and automated testing
* Proper repository hygiene using `.gitignore`

## Version History

1.0.0 – Task 1: Winston logging implementation  
1.1.0 – Task 2: Express REST API with logging and automated tests