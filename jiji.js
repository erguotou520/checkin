const puppeteer = require('puppeteer');

(async () => {
  const { COMMON_USER, COMMON_PASSWORD } = process.env;
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://j01.best/signin');
  await page.type('input[name=email]', COMMON_USER, { delay: 60 });
  await page.type('input[type=password]', COMMON_PASSWORD, { delay: 60 });
  await page.click('.el-form-item button[type=button]', { delay: 20 });
  await page.waitForSelector('div[role=dialog]');
  await page.click('div[role=dialog] button.el-button--primary', { delay: 20 });
  await page.waitForNavigation({ timeout: 600000 });
  await page.waitForSelector('div[role=dialog]');
  await page.click('div[role=dialog] button.el-dialog__headerbtn', { delay: 20 });
  await page.waitForTimeout(3000);
  await page.click('a.button.purple', { delay: 50 });
  await page.waitForTimeout(4000);
  await browser.close();
})();
