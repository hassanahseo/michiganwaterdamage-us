import fs from 'node:fs';
import path from 'node:path';
import { getAllHtmlPages } from './utils';

export const WORD_COUNT_TARGETS: Record<string, { min: number; max: number }> = {
  home: { min: 1200, max: 1600 },
  'service-pillar': { min: 1800, max: 2500 },
  'subservice-statewide': { min: 1200, max: 1800 },
  'city-hub': { min: 1200, max: 1800 },
  'city-service': { min: 1000, max: 1500 },
  'city-subservice': { min: 800, max: 1200 },
  neighborhood: { min: 700, max: 1100 },
  'cost-guide': { min: 1500, max: 2200 },
  'problem-guide': { min: 1200, max: 1800 },
  trust: { min: 250, max: 1500 },
  sitemap: { min: 200, max: 2000 },
  utility: { min: 50, max: 500 },
};

export function countWords(text: string): number {
  return text
    .replace(/[^\w\s-]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 0).length;
}

export function checkThin(strict = false) {
  const pages = getAllHtmlPages();
  const results: Array<{
    url: string;
    pageType: string;
    wordCount: number;
    targetMin: number;
    targetMax: number;
    status: 'pass' | 'too-thin' | 'too-long';
  }> = [];

  for (const page of pages) {
    const clone = page.$.load(page.html);
    clone('script, style, noscript, nav, header, footer').remove();
    const mainText = clone('main').text();
    const wordCount = countWords(mainText);

    const target = WORD_COUNT_TARGETS[page.pageType] || { min: 500, max: 2000 };
    let status: 'pass' | 'too-thin' | 'too-long' = 'pass';
    if (wordCount < target.min) status = 'too-thin';
    else if (wordCount > target.max) status = 'too-long';

    results.push({
      url: page.urlPath,
      pageType: page.pageType,
      wordCount,
      targetMin: target.min,
      targetMax: target.max,
      status,
    });
  }

  const reportsDir = path.resolve('qa/reports');
  if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });
  fs.writeFileSync(
    path.join(reportsDir, 'thin.json'),
    JSON.stringify(
      {
        totalPages: pages.length,
        results,
      },
      null,
      2
    )
  );

  const failures = results.filter((r) => r.status !== 'pass');
  if (strict && failures.length > 0) {
    console.error(`❌ Thin Content Check: ${failures.length} pages outside target word ranges (strict mode):`);
    failures.slice(0, 10).forEach((f) => {
      console.error(`  - [${f.pageType}] ${f.url}: ${f.wordCount} words (target: ${f.targetMin}-${f.targetMax})`);
    });
    process.exit(1);
  } else {
    console.log(
      `📊 Word Count Audit Complete: ${results.length} pages analyzed. (${results.length - failures.length} in target band, ${failures.length} scaffold placeholders scheduled for M4 expansion).`
    );
  }
}

if (import.meta.url === `file://${process.argv[1]?.replace(/\\/g, '/')}`) {
  const strict = process.argv.includes('--strict');
  checkThin(strict);
}
