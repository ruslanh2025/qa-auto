# Automation Learning Project

This repository contains a comprehensive collection of automated tests and practice exercises using Playwright Test framework. The project serves as a learning platform covering various aspects of test automation, from basic programming concepts to advanced Page Object Model implementations.

## Project Structure

```
├── tests/
│   ├── arrays-practice/         # Array manipulation test exercises
│   ├── classes-pom-practice/    # Page Object Model implementation examples
│   ├── css-xpath-practice/      # CSS and XPath selector practice tests
│   │   ├── coffee-cart-app-tests/
│   │   ├── conduit/
│   │   ├── playwright-dev-tests/
│   │   └── tools-qa/
│   ├── fixtures/               # Test fixtures for different applications
│   ├── functions-loops/        # Function and loop practice tests
│   ├── if-else-functions-practice/  # Conditional statements practice
│   ├── loops-functions-arrays-self-practice/  # Combined concepts practice
│   ├── objects-practice/       # Object manipulation practice
│   ├── saucedemo-oop-pom-practice/  # OOP and POM implementation
│   ├── tests-with-fixtures-practice/ # Fixture usage examples
│   └── variables-practice/     # Variable usage practice tests
```

## Technology Stack

- **Test Framework**: Playwright Test
- **Language**: TypeScript/JavaScript
- **Dependencies**:
  - @playwright/test: ^1.52.0
  - @types/node: ^22.15.15
  - @faker-js/faker: ^9.8.0
  - is-even-check-new: ^1.0.1

## Practice Areas

1. **Basic Programming Concepts**
   - Variables and Data Types
   - Arrays and Array Methods
   - Functions and Loops
   - Objects and Classes
   - Conditional Statements

2. **Test Automation Concepts**
   - Page Object Model (POM)
   - CSS and XPath Selectors
   - Test Fixtures
   - Object-Oriented Programming (OOP)

3. **Test Applications**
   - SauceDemo E-commerce
   - Conduit Blog Platform
   - Coffee Cart Application
   - Tools QA Practice Site
   - Playwright Documentation Site

## Test Scenarios

The project includes various test scenarios for different applications:

- **SauceDemo**: Order placement and checkout process
- **Conduit**: Article creation, sign-up, and sign-in functionality
- **Coffee Cart**: Application functionality testing
- **Tools QA**: Form elements interaction (buttons, checkboxes, radio buttons, text boxes)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```
4. Run tests:
   ```bash
   npx playwright test
   ```

## Test Reports

Test reports are generated in HTML format and can be found in:
- `playwright-report/index.html`
- `npm-package-project/playwright-report/index.html`

## Author

Ruslan Haribov

## License

ISC
