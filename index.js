const puppeteer = require('puppeteer');

(async () => {
  const { YINGYUN_USERNAME, YINGYUN_PASSWORD } = process.env;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://yingyun.me/auth/login');
  await page.type('#email', YINGYUN_USERNAME, 60);
  await page.type('#passwd', YINGYUN_PASSWORD, 60);
  await page.click('#login', { delay: 20 });
  await page.waitForNavigation()
  await page.click('#checkin', { delay: 22 })
  await page.waitFor(2000);
  await browser.close();
})();
