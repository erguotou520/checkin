const puppeteer = require('puppeteer');

(async () => {
  const { COMMON_QQ_MAIL, COMMON_PASSWORD } = process.env;
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://vpn-1.xyz/auth/login');
  await page.type('#email', COMMON_QQ_MAIL, { delay: 60 });
  await page.type('#password', COMMON_PASSWORD, { delay: 60 });
  await page.click('#login_submit', { delay: 20 });
  await page.waitForNavigation({ timeout: 600000 });
  await page.waitForTimeout(3000);
  await page.click('.subheader .d-flex.align-items-center:nth-child(2) a', { delay: 50 });
  await page.waitForTimeout(4000);
  await browser.close();
})();
