import { test as base } from '@playwright/test';
import { expect } from '@playwright/test';
import { Page } from '@playwright/test';

// 自定义 test，包含通用的 beforeEach 和 afterEach
export const test = base.extend({
  // beforeEach
  page: async ({ page }, use) => {
    await page.goto('https://app.insomnia.rest/');
    await use(page);
  },
});

// afterEach 需要用 base.hooks
base.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `screenshot-${testInfo.title.replace(/[^a-zA-Z0-9-_]/g, '_')}-${timestamp}.png`;
    await page.screenshot({ path: filename, fullPage: true });
    await testInfo.attach('screenshot', { path: filename, contentType: 'image/png' });
  }
}); 


export { expect };