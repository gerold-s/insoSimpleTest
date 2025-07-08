# Playwright E2E Test Framework

This project is an end-to-end (E2E) testing framework based on [Playwright](https://playwright.dev/), using the Page Object Model, suitable for automated testing of web applications.

## Directory Structure

```
.
├── base/                # Test base classes and global hooks
├── e2e/                 # End-to-end test cases
├── pages/               # Page Object classes (element and selector abstraction)
├── reports/             # Test reports
├── playwright-report/   # Playwright default HTML report
├── utils/               # Utility classes (if any)
├── playwright.config.ts # Playwright configuration
├── package.json         # Project dependencies
└── README.md            # Project documentation
```

## Install Dependencies

```sh
npm install
```

## Run Tests

```sh
npx playwright test
```

## View Test Reports

- After running tests, Playwright will automatically generate an HTML report in the `playwright-report/` directory.
- To view the report:
  ```sh
  npx playwright show-report
  ```

## Page Object Model

- All page element selectors and text constants are abstracted in classes under the `pages/` directory (e.g., `InsomniaHome`).
- Test cases reference these classes to access page elements, improving maintainability and reusability.

Example (`e2e/example.spec.ts`):

```ts
import { test, expect } from '@playwright/test';
import { InsomniaHome } from '../pages/insomniaHome';

// Check page title
test('has title', async ({ page }) => {
  await expect(page).toHaveTitle(/Insomnia/);
});

// Check welcome text
test('has welcome text', async ({ page }) => {
  await expect(page.locator(InsomniaHome.welcomeTextSelector)).toBeVisible();
});

// Click AI Runners link and check redirected text
test('click AI Runners', async ({ page }) => {
  await page.locator(InsomniaHome.aiRunnersLinkSelector).click();
  await expect(page.locator(InsomniaHome.accelerateYourAITextSelector)).toBeVisible();
});
```

## Additional Notes

- When adding a new page, create the corresponding Page Object class under the `pages/` directory to manage selectors and text constants centrally.
- When adding a new test case, write it under the `e2e/` directory and reference the Page Object classes directly.

---

For custom configurations or more features, please refer to the [Playwright official documentation](https://playwright.dev/).  
**Happy Testing!** 