const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

setDefaultTimeout(60 * 1000);

Before(async function () {
  await this.init();
});

After(async function (scenario) {
  if (scenario.result.status === 'FAILED') {
    const dir = 'reports/screenshots';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const fileName = scenario.pickle.name.replace(/[^a-zA-Z0-9]/g, '_');
    await this.page.screenshot({
      path: path.join(dir, `${fileName}.png`)
    });
  }

  await this.close();
});