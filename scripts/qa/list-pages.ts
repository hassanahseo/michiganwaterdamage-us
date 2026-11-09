import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');

function getHtmlFiles(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (file.endsWith('.html') && !file.includes('404.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

const files = getHtmlFiles(distDir);
const routes: string[] = files.map(f => {
  const rel = path.relative(distDir, f).replace(/\\/g, '/');
  if (rel === 'index.html') return '/';
  return '/' + rel.replace(/\/index\.html$/, '/');
});

routes.sort();

const groups: Record<string, string[]> = {
  'Home (1 page)': [],
  'Trust & Legal Pages (7 pages)': [],
  'Service Pillars (5 pages)': [],
  'Statewide Sub-Services (28 pages)': [],
  'City Hubs (6 pages)': [],
  'City × Service Pages (30 pages)': [],
  'City × Priority Sub-Services (48 pages)': [],
  'Neighborhood Pages (38 pages)': [],
  'Cost Guides (6 pages)': [],
  'Problem Guides (6 pages)': []
};

const reservedServices = ['water-damage', 'mold-remediation', 'fire-damage', 'biohazard-cleanup', 'plumbing'];

for (const r of routes) {
  if (r === '/') {
    groups['Home (1 page)'].push(r);
  } else if (['/how-it-works/', '/disclosure/', '/editorial-policy/', '/privacy/', '/terms/', '/contact/', '/sitemap/'].includes(r)) {
    groups['Trust & Legal Pages (7 pages)'].push(r);
  } else if (r.startsWith('/cost/')) {
    groups['Cost Guides (6 pages)'].push(r);
  } else if (r.startsWith('/guides/')) {
    groups['Problem Guides (6 pages)'].push(r);
  } else if (r.match(/^\/[a-z-]+-mi\/[a-z-]+\/[a-z-]+\/$/)) {
    groups['City × Priority Sub-Services (48 pages)'].push(r);
  } else if (r.match(/^\/[a-z-]+-mi\/[a-z-]+\/$/)) {
    const parts = r.split('/').filter(Boolean);
    if (reservedServices.includes(parts[1])) {
      groups['City × Service Pages (30 pages)'].push(r);
    } else {
      groups['Neighborhood Pages (38 pages)'].push(r);
    }
  } else if (r.match(/^\/[a-z-]+-mi\/$/)) {
    groups['City Hubs (6 pages)'].push(r);
  } else if (r.match(/^\/[a-z-]+\/[a-z-]+\/$/)) {
    groups['Statewide Sub-Services (28 pages)'].push(r);
  } else if (r.match(/^\/[a-z-]+\/$/)) {
    groups['Service Pillars (5 pages)'].push(r);
  }
}

console.log('=== SITE PAGE INVENTORY SUMMARY ===');
for (const [k, v] of Object.entries(groups)) {
  console.log(`\n### ${k} [Count: ${v.length}]`);
  v.forEach(url => console.log(`  - ${url}`));
}
console.log(`\nTOTAL INDEXED PAGES: ${routes.length}`);
