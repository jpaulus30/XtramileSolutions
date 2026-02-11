class ProductsPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = '[data-test="add-to-cart-sauce-labs-backpack"]';
    this.removeButton = '[data-test="remove-sauce-labs-backpack"]';
    this.cartBadge = '.shopping_cart_badge';
    this.cartIcon = '.shopping_cart_link';
    this.menuButton = '#react-burger-menu-btn';
    this.logoutLink = '#logout_sidebar_link';
  }

  async addItemToCart() {
    await this.page.click(this.addToCartButton);
  }

  async removeItem() {
    await this.page.click(this.removeButton);
  }

  async getCartBadgeCount() {
    return this.page.textContent(this.cartBadge);
  }

  async openCart() {
    await this.page.click(this.cartIcon);
  }

  async logout() {
    await this.page.click(this.menuButton);
    await this.page.click(this.logoutLink);
  }
}

module.exports = ProductsPage;