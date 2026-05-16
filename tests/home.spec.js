import { expect, test } from '@playwright/test';

const locales = [
  { code: 'en', dir: 'ltr' },
  { code: 'fa', dir: 'rtl' },
];

const lessonPaths = ['/setup', '/tooling', '/js', '/react', '/effects', '/project'];

const routes = locales.flatMap(({ code, dir }) => [
  { path: `/${code}`, code, dir, kind: 'home' },
  ...lessonPaths.map((suffix) => ({
    path: `/${code}${suffix}`,
    code,
    dir,
    kind: 'lesson',
  })),
]);

const viewports = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
];

test.describe.configure({ mode: 'parallel' });

function primaryHeroCta(page) {
  return page.locator('.hero .primary-button, .lesson-hero .primary-button').first();
}

async function assertNoHorizontalOverflow(page, viewportWidth) {
  // We cannot assert "correct wrapping" directly; scroll width is the responsive regression guard.
  const scrollWidth = await page.evaluate(() =>
    Math.max(document.documentElement.scrollWidth, document.body?.scrollWidth ?? 0),
  );

  expect(scrollWidth, 'horizontal overflow').toBeLessThanOrEqual(viewportWidth + 1);
}

for (const route of routes) {
  for (const viewport of viewports) {
    test(`${route.path} @ ${viewport.name}`, async ({ page }) => {
      const consoleErrors = [];
      const pageErrors = [];

      page.on('console', (message) => {
        if (message.type() === 'error') {
          consoleErrors.push(message.text());
        }
      });
      page.on('pageerror', (error) => {
        pageErrors.push(error.message);
      });

      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      // Silence the browser's default favicon request so console checks stay app-focused.
      await page.route(/.*\/favicon\.ico(\?.*)?$/, (route) =>
        route.fulfill({ status: 204, body: '' }),
      );
      await page.goto(route.path, { waitUntil: 'domcontentloaded' });

      await expect(page).toHaveURL(new RegExp(`${route.path}$`));
      await expect(page.getByRole('banner')).toBeVisible();
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
      await expect(page.locator('html')).toHaveAttribute('lang', route.code);
      await expect(page.locator('html')).toHaveAttribute('dir', route.dir);
      await expect(primaryHeroCta(page)).toBeVisible();

      if (route.kind === 'lesson') {
        const tablist = page.getByRole('tablist').first();
        const tabs = tablist.getByRole('tab');
        const tabCount = await tabs.count();

        await expect(tablist).toBeVisible();
        expect(tabCount).toBeGreaterThanOrEqual(4);
        await tabs.first().focus();
        await expect(tabs.first()).toBeFocused();

        for (let index = 0; index < tabCount; index += 1) {
          const tab = tabs.nth(index);

          await tab.click();
          await expect(tab).toHaveAttribute('aria-selected', 'true');

          const panelId = await tab.getAttribute('aria-controls');
          expect(panelId, 'tab panel id').not.toBeNull();
          const activePanel = page.locator(`#${panelId}`);
          await expect(activePanel).toBeVisible();

          if (index === 1) {
            // Live panels vary by route, so we only require rendered interactive content.
            await expect(
              activePanel.locator('button, input, textarea, select, pre, code').first(),
            ).toBeVisible();
          }

          if (index === 2) {
            await expect(page.locator('.quiz-block').first()).toBeVisible();
          }
        }
      }

      await assertNoHorizontalOverflow(page, viewport.width);
      expect(consoleErrors, `${route.path} ${viewport.name} console errors`).toEqual([]);
      expect(pageErrors, `${route.path} ${viewport.name} page errors`).toEqual([]);
    });
  }
}
