const { When, Then } = require('@cucumber/cucumber');
const ProductsPage = require('../pages/ProductsPage');
const { expect } = require('@playwright/test');

When('user logs out', async function () {
  this.productsPage = new ProductsPage(this.page);
  await this.productsPage.logout();
});

Then('user should be redirected to login page', async function () {
  await expect(this.page).toHaveURL(/saucedemo/);
});