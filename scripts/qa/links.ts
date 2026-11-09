import fs from 'node:fs';
import path from 'node:path';
import { getAllHtmlPages } from './utils';

export function checkLinks() {
  const pages = getAllHtmlPages();
  const validUrls = new Set<string>();

  for (const page of pages) {
    validUrls.add(page.urlPath);
    if (!page.urlPath.endsWith('/')) {
      validUrls.add(page.urlPath + '/');
    }
  }

  // Also read sitemap URLs from dist/sitemaps/
  const xmlSitemapUrls = new Set<string>();
  const sitemapsDir = path.resolve('dist/sitemaps');
  if (fs.existsSync(sitemapsDir)) {
    const files = fs.readdirSync(sitemapsDir);
    for (const file of files) {
      if (file.endsWith('.xml')) {
        const content = fs.readFileSync(path.join(sitemapsDir, file), 'utf-8');
        const locMatches = content.matchAll(/<loc>https:\/\/michiganwaterdamage\.us([^<]+)<\/loc>/g);
        for (const match of locMatches) {
          xmlSitemapUrls.add(match[1]);
        }
      }
    }
  }

  // Also read HTML sitemap links
  const htmlSitemapLinks = new Set<string>();
  const sitemapHtmlPath = path.resolve('dist/sitemap/index.html');
  if (fs.existsSync(sitemapHtmlPath)) {
    const content = fs.readFileSync(sitemapHtmlPath, 'utf-8');
    const hrefMatches = content.matchAll(/href="(\/[^"#?]*)"/g);
    for (const match of hrefMatches) {
      htmlSitemapLinks.add(match[1]);
    }
  }

  const brokenLinks: Array<{ from: string; to: string }> = [];
  const inlinksCount: Record<string, number> = {};

  for (const page of pages) {
    inlinksCount[page.urlPath] = 0;
  }

  for (const page of pages) {
    const links = page.$('a[href]')
      .map((_, el) => page.$(el).attr('href'))
      .get();

    for (const link of links) {
      if (!link) continue;
      // Skip tel, mailto, external, anchors
      if (link.startsWith('tel:') || link.startsWith('mailto:') || link.startsWith('http') || link.startsWith('#')) {
        continue;
      }

      // Normalize internal link
      const cleanTarget = link.split('#')[0].split('?')[0];
      if (!cleanTarget) continue;

      if (!validUrls.has(cleanTarget)) {
        brokenLinks.push({ from: page.urlPath, to: link });
      } else {
        const normTarget = cleanTarget.endsWith('/') || cleanTarget === '/' ? cleanTarget : cleanTarget + '/';
        inlinksCount[normTarget] = (inlinksCount[normTarget] || 0) + 1;
      }
    }
  }

  const underLinkedPages: Array<{ url: string; count: number }> = [];
  const missingFromXmlSitemap: string[] = [];
  const missingFromHtmlSitemap: string[] = [];

  for (const page of pages) {
    // 404 page is not expected to be in sitemaps or have 3 inlinks
    if (page.pageType === 'utility') continue;

    const count = inlinksCount[page.urlPath] || 0;
    if (count < 3) {
      underLinkedPages.push({ url: page.urlPath, count });
    }

    if (!xmlSitemapUrls.has(page.urlPath)) {
      missingFromXmlSitemap.push(page.urlPath);
    }

    if (page.urlPath !== '/sitemap/' && !htmlSitemapLinks.has(page.urlPath)) {
      missingFromHtmlSitemap.push(page.urlPath);
    }
  }

  const reportsDir = path.resolve('qa/reports');
  if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });
  fs.writeFileSync(
    path.join(reportsDir, 'links.json'),
    JSON.stringify(
      {
        totalPages: pages.length,
        brokenLinksCount: brokenLinks.length,
        brokenLinks,
        underLinkedPagesCount: underLinkedPages.length,
        underLinkedPages,
        missingFromXmlSitemap,
        missingFromHtmlSitemap,
      },
      null,
      2
    )
  );

  let hasError = false;
  if (brokenLinks.length > 0) {
    console.error(`❌ Found ${brokenLinks.length} broken internal links:`);
    brokenLinks.slice(0, 5).forEach((b) => console.error(`  - from ${b.from} -> ${b.to}`));
    hasError = true;
  }

  if (underLinkedPages.length > 0) {
    console.error(`❌ Found ${underLinkedPages.length} pages with < 3 inlinks:`);
    underLinkedPages.slice(0, 5).forEach((p) => console.error(`  - ${p.url}: only ${p.count} inlinks`));
    hasError = true;
  }

  if (missingFromXmlSitemap.length > 0) {
    console.error(`❌ Found ${missingFromXmlSitemap.length} pages missing from XML sitemaps:`);
    missingFromXmlSitemap.slice(0, 5).forEach((u) => console.error(`  - ${u}`));
    hasError = true;
  }

  if (missingFromHtmlSitemap.length > 0) {
    console.error(`❌ Found ${missingFromHtmlSitemap.length} pages missing from HTML /sitemap/:`);
    missingFromHtmlSitemap.slice(0, 5).forEach((u) => console.error(`  - ${u}`));
    hasError = true;
  }

  if (hasError) {
    process.exit(1);
  } else {
    console.log(`✅ Links Check Passed: 0 broken links, all pages have >= 3 inlinks and exist in both sitemaps.`);
  }
}

if (import.meta.url === `file://${process.argv[1]?.replace(/\\/g, '/')}`) {
  checkLinks();
}
