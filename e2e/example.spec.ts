import { test, expect } from '../base/base.spec';
import { InsomniaHome } from '../pages/insomniaHome';

//Test if the page has the title "Insomnia"
test('has title', async ({ page }) => {
  //Check if the page has the title "Insomnia"  
  await expect(page).toHaveTitle(/Insomnia/);
});

//Test if the page has the welcome text "Welcome to Insomnia"
test('has welcome text', async ({ page }) => {
  //Check if the page has the welcome text "Welcome to Insomnia"
  await expect(page.locator(InsomniaHome.welcomeTextSelector)).toBeVisible();
});

//Test click AI Runners link  
test('click AI Runners', async ({ page }) => {
  //Click the AI Runners link 
  InsomniaHome.clickAiRunner(page);
  //Check if the page has the text "Accelerate your AI"
  await expect(page.locator(InsomniaHome.accelerateYourAITextSelector)).toBeVisible();
  
});