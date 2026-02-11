class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = '#user-name';
    this.password = '#password';
    this.loginButton = '#login-button';
  }

  async open() {
    await this.page.goto(process.env.BASE_URL);
  }

  async login(username, password) {
    await this.page.fill(this.username, username);
    await this.page.fill(this.password, password);
    await this.page.click(this.loginButton);
  }
}

module.exports = LoginPage;