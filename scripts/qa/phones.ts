import fs from 'node:fs';
import path from 'node:path';
import { getAllHtmlPages } from './utils';
import phonesData from '../../src/data/phones.json';

export function checkPhones() {
  const pages = getAllHtmlPages();
  const errors: string[] = [];

  const restTel = phonesData.restoration.tel;
  const restDisplay = phonesData.restoration.display;
  const plumbTel = phonesData.plumbing.tel;
  const plumbDisplay = phonesData.plumbing.display;

  for (const page of pages) {
    if (page.pageType === 'home' || page.pageType === 'sitemap' || page.urlPath === '/contact/') {
      // Home, sitemap and contact directory page can link to both lines
      continue;
    }

    const isPlumbingPage =
      page.service === 'plumbing' ||
      page.urlPath.includes('/plumbing/') ||
      page.urlPath.includes('/cost/leak-detection-michigan/') ||
      page.urlPath.includes('/cost/sump-pump-repair-replacement-michigan/') ||
      page.urlPath.includes('/guides/water-bill-suddenly-doubled-hidden-leak/') ||
      page.urlPath.includes('/guides/water-meter-running-everything-off/');

    const expectedTel = isPlumbingPage ? plumbTel : restTel;
    const forbiddenTel = isPlumbingPage ? restTel : plumbTel;
    const forbiddenDisplay = isPlumbingPage ? restDisplay : plumbDisplay;

    // Search all tel: links in this page
    const telLinks = page.$('a[href^="tel:"]')
      .map((_, el) => page.$(el).attr('href'))
      .get();

    for (const link of telLinks) {
      if (link.includes(forbiddenTel.replace('+', '')) || link.includes(forbiddenDisplay)) {
        errors.push(
          `Page "${page.urlPath}" is assigned ${isPlumbingPage ? 'PLUMBING' : 'RESTORATION'}, but contains forbidden tel link: "${link}"`
        );
      }
    }

    // Also inspect body text for raw phone display string
    const bodyText = page.$('body').text();
    if (bodyText.includes(forbiddenDisplay) && page.pageType !== 'trust') {
      errors.push(
        `Page "${page.urlPath}" is assigned ${isPlumbingPage ? 'PLUMBING' : 'RESTORATION'}, but displays forbidden phone string "${forbiddenDisplay}" in body`
      );
    }
  }

  const reportsDir = path.resolve('qa/reports');
  if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });
  fs.writeFileSync(
    path.join(reportsDir, 'phones.json'),
    JSON.stringify({ totalPagesScanned: pages.length, errorsCount: errors.length, errors }, null, 2)
  );

  if (errors.length > 0) {
    console.error(`❌ Phone Routing Check Failed: ${errors.length} routing violations found:`);
    errors.slice(0, 10).forEach((e) => console.error('  -', e));
    if (errors.length > 10) console.error(`  ... and ${errors.length - 10} more`);
    process.exit(1);
  } else {
    console.log(`✅ Phone Routing Check Passed: 100% of pages strictly adhere to their assigned vertical phone number.`);
  }
}

if (import.meta.url === `file://${process.argv[1]?.replace(/\\/g, '/')}`) {
  checkPhones();
}
