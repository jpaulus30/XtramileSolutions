const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

class CustomWorld {
  async init() {
    const isHeadless = process.env.HEADLESS === 'true';

    this.browser = await chromium.launch({
      headless: isHeadless,
      slowMo: 50
    });

    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async close() {
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);