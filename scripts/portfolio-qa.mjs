import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
const base = process.env.QA_URL || 'http://127.0.0.1:8080';
const browser = await chromium.launch({ headless: true });
const errors = [];
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
page.on('pageerror', e => errors.push(e.message));
page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
await mkdir('screenshots', { recursive: true });
try {
  await page.goto(base);
  await page.waitForTimeout(1800);
  assert.equal(await page.locator('a[href="/contact"]').count(), 0);
  assert.deepEqual(await page.locator('nav[aria-label="Primary"] a').allTextContents(), ['Home','Services','Work','Tools','Pricing','About']);
  const words = page.locator('h1 .rotating-word[data-state="in"]').first();
  const before = await words.textContent();
  await page.waitForTimeout(4100);
  assert.notEqual(await words.textContent(), before);
  assert(await page.locator('html').evaluate(e => e.classList.contains('lenis')));
  await page.mouse.wheel(0, 650);
  await page.waitForTimeout(650);
  assert(await page.evaluate(() => scrollY > 100));
  await page.evaluate(() => window.scrollTo(0,0));
  await page.getByRole('link', { name: 'Start a Project', exact: true }).click();
  await page.waitForURL('**/pricing');
  await page.getByRole('button', { name: /Choose|Get Started|Start with|Go Pro|Go Premium|Contact|Get a|Select|Pick|Start/i }).first().click();
  const dialog = page.getByRole('dialog');
  await dialog.waitFor();
  assert(await dialog.isVisible());
  await page.keyboard.press('Escape');
  await dialog.waitFor({ state: 'hidden' });
  await page.goto(base + '/tools');
  await page.waitForTimeout(700);
  const tabs = page.getByRole('tab');
  await tabs.nth(1).click();
  assert.equal(await tabs.nth(1).getAttribute('aria-selected'), 'true');
  await page.keyboard.press('ArrowRight');
  assert.equal(await tabs.nth(2).getAttribute('aria-selected'), 'true');
  assert(await page.getByRole('tabpanel').getByRole('link').count() > 0);
  await page.screenshot({path:'screenshots/tools-filter.png'});
  const routes = ['/services','/projects','/projects/blu-diamond','/about','/contact','/testimonials'];
  for (const route of routes) {
    for (const width of [1280,390]) {
      await page.setViewportSize({width,height:844});
      const response = await page.goto(base + route);
      assert.equal(response.status(),200,route);
      await page.waitForTimeout(1100);
      assert((await page.locator('h1').innerText()).length > 5,route);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1),false,route);
      const broken = await page.locator('img').evaluateAll(imgs => imgs.filter(i => i.complete && i.naturalWidth === 0).map(i => i.src));
      assert.deepEqual(broken,[],route);
    }
  }
  await page.setViewportSize({width:390,height:844});
  await page.goto(base);
  await page.getByRole('button', {name:/menu/i}).click();
  await page.getByRole('link',{name:'Pricing',exact:true}).first().click();
  await page.waitForURL('**/pricing');
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.goto(base);
  await page.waitForTimeout(700);
  assert.equal(await page.locator('html').evaluate(e => e.classList.contains('lenis')), false);
  const first = await words.textContent();
  await page.waitForTimeout(4200);
  assert.equal(await words.textContent(), first);
  assert.deepEqual(errors,[]);
  console.log(JSON.stringify({ok:true,checks:['navigation and pricing CTA','headline rotation','smooth wheel scrolling','proposal dialog open/close','Tools filters and arrow keys','six routes desktop/mobile','images and console','mobile navigation','reduced motion']},null,2));
} finally { await browser.close(); }
