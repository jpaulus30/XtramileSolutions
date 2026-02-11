* Application Target:
    https://www.saucedemo.com

* What’s Inside
    - BDD (Gherkin / Cucumber)
    - Playwright UI Automation
    - Page Object Model (POM)
    - Data-driven tests
    - Parallel execution
    - Screenshots on failure
    - HTML test report

* Test Scenarios Covered
    - Login (valid & invalid credentials)
    - Add item to cart & verify cart badge
    - Remove item from cart
    - Complete checkout flow
    - Logout

* How to Run (Local)
    1. Install dependencies
        npm install
        npx playwright install
        npm install @playwright/test @cucumber/cucumber dotenv
        npm install cucumber-html-reporter
    
    2. Setup environment
        Create .env file:
           - BASE_URL=https://www.saucedemo.com
           - USERNAME=standard_user
           - PASSWORD=secret_sauce
    
    4. Run tests
        npx cucumber-js

Test Report
1. Generate HTML report:
    - node scripts/generate-report.js
2. Open:
    - reports/cucumber-report.html

CI Support

Runs automatically on GitHub Actions

Headless execution

Parallel test execution

Test report available as artifact
