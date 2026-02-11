const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const ProductsPage = require('../pages/ProductsPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');
const testData = require('../support/testData');

Given('user is logged in and on products page', async function () {
  this.loginPage = new LoginPage(this.page);
  this.productsPage = new ProductsPage(this.page);
  this.cartPage = new CartPage(this.page);
  this.checkoutPage = new CheckoutPage(this.page);

  await this.loginPage.open();
  await this.loginPage.login(
    process.env.USERNAME,
    process.env.PASSWORD
  );

  await this.page.waitForURL(/inventory/);
});

Given('user has item in cart', async function () {
  await this.productsPage.addItemToCart();
  await this.productsPage.openCart();
  await expect(this.page).toHaveURL(/cart/);
});

When('user completes checkout', async function () {
  await this.cartPage.checkout();

  const { firstName, lastName, postalCode } =
    testData.checkoutUser;

  await this.checkoutPage.fillInfo(
    firstName,
    lastName,
    postalCode
  );

  await this.checkoutPage.finishOrder();
});

Then('order should be completed successfully', async function () {
  await expect(
    this.page.locator('.complete-header')
  ).toHaveText('Thank you for your order!');
});