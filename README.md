# BookCart E2E Automation

End-to-end automated tests for the BookCart online bookstore using Playwright and TypeScript.

This project is based on the Roadmap.sh QA project:

https://roadmap.sh/projects/e2e-test-ecommerce-app

## Project Goal

The goal of this project is to automate critical user journeys in an e-commerce application and gain practical experience with QA Automation tools and workflows.

## Implemented Tests

### Authentication

#### User Registration

The test verifies that a new user can successfully register in the application.

**Test flow:**

1. Open BookCart website
2. Open Login page
3. Navigate to Registration page
4. Generate a unique username
5. Fill registration form
6. Submit registration
7. Verify successful registration through backend response validation

### Search

#### Search Field

The test verifies that the search field accepts user input.

**Test flow:**

1. Open BookCart website
2. Enter a book title into the search field
3. Verify that the entered text is displayed correctly

## Technologies

* Playwright
* TypeScript
* Git
* GitHub

## Supported Browsers

* Chromium
* Firefox
* WebKit

## Run Tests

```bash
npx playwright test
```

## Current Progress

* User Registration ✅
* Search Field Validation ✅
* User Login ⏳
* Shopping Cart ⏳
* Checkout Process ⏳
