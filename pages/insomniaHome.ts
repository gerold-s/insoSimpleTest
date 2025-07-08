export class InsomniaHome {
  // Selectors
  static readonly titleSelector = 'title';
  static readonly welcomeTextSelector = 'text=Welcome to Insomnia';
  static readonly aiRunnersLinkSelector = 'role=link[name="AI Runners"]';
  static readonly accelerateYourAITextSelector = 'text=Accelerate your AI';

  // 文本
  static readonly welcomeText = 'Welcome to Insomnia';
  static readonly aiRunnersLinkText = 'AI Runners';
  static readonly accelerateYourAIText = 'Accelerate your AI';

  // Click the locator by selector
  static async clickAiRunner(page: import('@playwright/test').Page) {
    await page.locator(InsomniaHome.aiRunnersLinkSelector).click();
  }
} 