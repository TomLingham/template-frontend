import { chromium } from "playwright";
import type { ChromiumBrowser } from "playwright";

let browser: ChromiumBrowser;

beforeAll(async () => {
  browser = await chromium.launch();
});

beforeEach(async () => {
  const context = await browser.newContext();
  global.Page = await context.newPage();
  global.TestId = (id: string) => Page.$(`[data-test-id="${id}"`);
});

afterAll(async () => {
  browser.close();
});
