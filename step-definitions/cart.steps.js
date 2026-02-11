const { Given, When, Then } = require('@cucumber/cucumber');
const ProductsPage = require('../pages/ProductsPage');
const LoginPage = require('../pages/LoginPage');
const { expect } = require('@playwright/test');

Given('user is logged in', async function () {
  this.loginPage = new LoginPage(this.page);
  this.productsPage = new ProductsPage(this.page);

  await this.loginPage.open();
  await this.loginPage.login(
    process.env.USERNAME,
    process.env.PASSWORD
  );
});

When('user adds item to cart', async function () {
  await this.productsPage.addItemToCart();
});

Then('cart badge should show {string}', async function (count) {
  await expect(this.page.locator('.shopping_cart_badge'))
    .toHaveText(count);
});

When('user removes item from cart', async function () {
  await this.productsPage.removeItem();
});

Then('cart badge should not be visible', async function () {
  await expect(this.page.locator('.shopping_cart_badge'))
    .toHaveCount(0);
});