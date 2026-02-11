const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

Given('user is on login page', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.open();
});

When(
  'user logs in with {string} and {string}',
  async function (username, password) {
    await this.loginPage.login(username, password);
  }
);

Then(
  'login result should be {string}',
  async function (result) {
    if (result === 'success') {
      await this.page.waitForURL(/inventory/);
    } else {
      await expect(
        this.page.locator('[data-test="error"]')
      ).toBeVisible();
    }
  }
);