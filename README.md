# Playwright E2E Test Framework

本项目是基于 [Playwright](https://playwright.dev/) 的端到端（E2E）测试框架，采用 Page Object 模式，适用于 Web 应用的自动化测试。

## 目录结构

```
.
├── base/                # 测试基类与全局 hooks
├── e2e/                 # 端到端测试用例
├── pages/               # Page Object 类（页面元素与选择器抽象）
├── reports/             # 测试报告
├── playwright-report/   # Playwright 默认 HTML 报告
├── utils/               # 工具类（如有）
├── playwright.config.ts # Playwright 配置
├── package.json         # 项目依赖
└── README.md            # 项目说明
```

## 安装依赖

```sh
npm install
```

## 运行测试

```sh
npx playwright test
```

## 查看测试报告

- 运行测试后，Playwright 会自动生成 HTML 报告在 `playwright-report/` 目录。
- 查看报告：
  ```sh
  npx playwright show-report
  ```

## Page Object 模式

- 所有页面元素的 selector 和文本常量统一抽象在 `pages/` 目录下的类中（如 `InsomniaHome`）。
- 测试用例通过这些类来引用页面元素，提升可维护性和复用性。

示例（`e2e/example.spec.ts`）：

```ts
import { test, expect } from '@playwright/test';
import { InsomniaHome } from '../pages/insomniaHome';

// 检查页面标题
test('has title', async ({ page }) => {
  await expect(page).toHaveTitle(/Insomnia/);
});

// 检查欢迎文本
test('has welcome text', async ({ page }) => {
  await expect(page.locator(InsomniaHome.welcomeTextSelector)).toBeVisible();
});

// 点击 AI Runners 链接并检查跳转文本
test('click AI Runners', async ({ page }) => {
  await page.locator(InsomniaHome.aiRunnersLinkSelector).click();
  await expect(page.locator(InsomniaHome.accelerateYourAITextSelector)).toBeVisible();
});
```

## 扩展说明

- 新增页面时，在 `pages/` 目录下新建对应的 Page Object 类，统一管理 selector 和文本。
- 新增测试用例时，在 `e2e/` 目录下编写，直接引用 Page Object 类。

---

如需自定义配置或集成更多功能，请参考 [Playwright 官方文档](https://playwright.dev/)。  
**Happy Testing!** 