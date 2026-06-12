import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SCREENSHOTS_DIR = path.join(__dirname, 'screenshots');
fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    defaultViewport: { width: 1440, height: 900 },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  // Landing page - full page scroll
  console.log('Taking landing page...');
  await page.goto('https://easyclips.io', { waitUntil: 'networkidle0', timeout: 60000 });
  await new Promise(r => setTimeout(r, 5000));
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'landing-page.png'), fullPage: true });
  console.log('Done: landing-page.png');

  // Login
  console.log('Logging in...');
  await page.goto('https://easyclips.io/app', { waitUntil: 'networkidle0', timeout: 60000 });
  await new Promise(r => setTimeout(r, 3000));
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'login-page.png'), fullPage: true });

  const emailInput = await page.$('input[type="email"], input[name="email"], input[placeholder*="email" i]');
  const passwordInput = await page.$('input[type="password"]');
  await emailInput.click({ clickCount: 3 });
  await emailInput.type('mehndirattakeshav@gmail.com', { delay: 30 });
  await passwordInput.click({ clickCount: 3 });
  await passwordInput.type('iamceobitch', { delay: 30 });
  await new Promise(r => setTimeout(r, 500));
  const submitBtn = await page.$('button[type="submit"]');
  if (submitBtn) await submitBtn.click();
  else await page.keyboard.press('Enter');
  await new Promise(r => setTimeout(r, 8000));
  console.log('Logged in:', page.url());

  // For each tab, click it, wait, scroll to bottom, then take fullPage screenshot
  const tabs = ['Overview', 'Calendar', 'Clips', 'Channels', 'Platforms', 'Campaigns', 'Billing'];

  for (const tab of tabs) {
    console.log(`Tab: ${tab}...`);
    await page.evaluate((tabName) => {
      const links = [...document.querySelectorAll('a, button, span')];
      const el = links.find(l => l.textContent.trim() === tabName);
      if (el) el.click();
    }, tab);
    await new Promise(r => setTimeout(r, 4000));
    // Scroll to bottom to trigger lazy loading
    await page.evaluate(async () => {
      await new Promise(resolve => {
        let totalHeight = 0;
        const distance = 300;
        const timer = setInterval(() => {
          window.scrollBy(0, distance);
          totalHeight += distance;
          if (totalHeight >= document.body.scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 100);
      });
    });
    await new Promise(r => setTimeout(r, 2000));
    // Scroll back to top
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, `${tab.toLowerCase()}.png`), fullPage: true });
    console.log(`Done: ${tab.toLowerCase()}.png`);
  }

  // Clip Video modal
  console.log('Clip Video modal...');
  await page.evaluate(() => {
    const links = [...document.querySelectorAll('a, button')];
    const el = links.find(l => l.textContent.includes('Clip Video'));
    if (el) el.click();
  });
  await new Promise(r => setTimeout(r, 3000));
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'clip-video.png'), fullPage: true });
  console.log('Done: clip-video.png');

  await browser.close();
  console.log('\nAll done!');
})();
