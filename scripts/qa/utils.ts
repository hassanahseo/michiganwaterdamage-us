import fs from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';
import servicesData from '../../src/data/services.json';
import citiesData from '../../src/data/cities.json';
import neighborhoodsData from '../../src/data/neighborhoods.json';

export interface PageInfo {
  filePath: string;
  urlPath: string; // e.g. /detroit-mi/plumbing/leak-detection/
  pageType:
    | 'home'
    | 'service-pillar'
    | 'subservice-statewide'
    | 'city-hub'
    | 'city-service'
    | 'city-subservice'
    | 'neighborhood'
    | 'cost-guide'
    | 'problem-guide'
    | 'trust'
    | 'sitemap'
    | 'utility';
  service?: string;
  city?: string;
  html: string;
  $: cheerio.CheerioAPI;
}

const serviceSlugs = new Set(servicesData.map((s) => s.slug));
const citySlugs = new Set(citiesData.map((c) => c.slug));
const neighborhoodSlugs = new Set(neighborhoodsData.map((n) => n.slug));

export function getPageType(urlPath: string): PageInfo['pageType'] {
  const clean = urlPath.replace(/^\/|\/$/g, '');
  if (!clean || clean === 'index.html') return 'home';
  if (clean === '404.html' || clean === '404') return 'utility';
  if (clean === 'sitemap') return 'sitemap';

  const trustPages = ['how-it-works', 'disclosure', 'editorial-policy', 'privacy', 'terms', 'contact'];
  if (trustPages.includes(clean)) return 'trust';

  const parts = clean.split('/');

  if (parts[0] === 'cost') return 'cost-guide';
  if (parts[0] === 'guides') return 'problem-guide';

  // Check city routes: {city}-mi
  if (parts[0].endsWith('-mi')) {
    const citySlug = parts[0].replace(/-mi$/, '');
    if (citySlugs.has(citySlug)) {
      if (parts.length === 1) return 'city-hub';
      if (parts.length === 2) {
        if (serviceSlugs.has(parts[1])) return 'city-service';
        if (neighborhoodSlugs.has(parts[1])) return 'neighborhood';
      }
      if (parts.length === 3 && serviceSlugs.has(parts[1])) {
        return 'city-subservice';
      }
    }
  }

  // Check statewide service routes
  if (serviceSlugs.has(parts[0])) {
    if (parts.length === 1) return 'service-pillar';
    if (parts.length === 2) return 'subservice-statewide';
  }

  return 'utility';
}

export function getAllHtmlPages(distDir = path.resolve('dist')): PageInfo[] {
  const pages: PageInfo[] = [];

  function walk(dir: string) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.html')) {
        const relPath = path.relative(distDir, fullPath).replace(/\\/g, '/');
        let urlPath = '/' + relPath;
        if (urlPath.endsWith('/index.html')) {
          urlPath = urlPath.replace(/index\.html$/, '');
        } else if (urlPath === '/index.html') {
          urlPath = '/';
        }

        const html = fs.readFileSync(fullPath, 'utf-8');
        const $ = cheerio.load(html);
        const pageType = getPageType(urlPath);

        // Derive service and city if applicable
        const clean = urlPath.replace(/^\/|\/$/g, '');
        const parts = clean.split('/');
        let service: string | undefined;
        let city: string | undefined;

        if (parts[0].endsWith('-mi')) {
          city = parts[0].replace(/-mi$/, '');
          if (parts[1] && serviceSlugs.has(parts[1])) {
            service = parts[1];
          }
        } else if (serviceSlugs.has(parts[0])) {
          service = parts[0];
        }

        pages.push({
          filePath: fullPath,
          urlPath,
          pageType,
          service,
          city,
          html,
          $,
        });
      }
    }
  }

  walk(distDir);
  return pages;
}
