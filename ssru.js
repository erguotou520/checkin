const puppeteer = require('puppeteer');

(async () => {
  const { SSRU_USERNAME, SSRU_PASSWORD } = process.env;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://ssru.men/auth/login');
  await page.type('#email', SSRU_USERNAME, 60);
  await page.type('#passwd', SSRU_PASSWORD, 60);
  await page.click('#login', { delay: 20 });
  await page.waitForNavigation({ timeout: 600000 });
  await page.click('#result_ok', { delay: 50 })
  await page.click('#checkin', { delay: 22 });
  await page.waitFor(2000);
  await browser.close();
})();
