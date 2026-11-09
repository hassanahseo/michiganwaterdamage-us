import fs from 'node:fs';
import path from 'node:path';

export function get5WordShingles(text: string): Set<string> {
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 0);

  const shingles = new Set<string>();
  for (let i = 0; i <= words.length - 5; i++) {
    shingles.add(words.slice(i, i + 5).join(' '));
  }
  return shingles;
}

export function jaccardSimilarity(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 && b.size === 0) return 1;
  if (a.size === 0 || b.size === 0) return 0;

  let intersection = 0;
  for (const item of a) {
    if (b.has(item)) {
      intersection++;
    }
  }
  const union = a.size + b.size - intersection;
  return intersection / union;
}

export function extractMdxBodyText(rawMdx: string): string {
  // 1. Remove YAML frontmatter
  let text = rawMdx.replace(/^---[\s\S]*?---\s*/, '');

  // 2. Remove import/export statements
  text = text.replace(/^import\s+[\s\S]*?;?$/gm, '');
  text = text.replace(/^export\s+[\s\S]*?;?$/gm, '');

  // 3. Remove JSX components (<CallButton ... />, <CostTable />, etc.)
  text = text.replace(/<[A-Za-z0-9_]+[^>]*\/>/g, ' ');
  text = text.replace(/<[A-Za-z0-9_]+[^>]*>[\s\S]*?<\/[A-Za-z0-9_]+>/g, ' ');

  // 4. Remove Markdown image links and clean markdown link syntax
  text = text.replace(/!\[[^\]]*\]\([^)]*\)/g, ' ');
  text = text.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1');

  // 5. Clean up markdown heading markers, bold/italics, quotes
  text = text.replace(/[#*`_~>-]/g, ' ');

  return text.trim();
}

export interface ContentItem {
  id: string;
  pageType: string;
  filePath: string;
  shingles: Set<string>;
  rawText: string;
}

export function getAllMdxContentItems(): ContentItem[] {
  const contentRoot = path.resolve('src/content');
  const items: ContentItem[] = [];

  const collections: Record<string, string> = {
    services: 'service-pillar',
    subservices: 'subservice-statewide',
    cities: 'city-hub',
    'city-services': 'city-service',
    'city-subservices': 'city-subservice',
    neighborhoods: 'neighborhood',
    'cost-guides': 'cost-guide',
    'problem-guides': 'problem-guide',
  };

  for (const [folder, pageType] of Object.entries(collections)) {
    const dir = path.join(contentRoot, folder);
    if (!fs.existsSync(dir)) continue;

    const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx') || f.endsWith('.md'));
    for (const file of files) {
      const filePath = path.join(dir, file);
      const raw = fs.readFileSync(filePath, 'utf8');
      const clean = extractMdxBodyText(raw);
      items.push({
        id: `${folder}/${file}`,
        pageType,
        filePath,
        shingles: get5WordShingles(clean),
        rawText: clean,
      });
    }
  }

  // Also include trust pages from src/pages
  const trustFiles = ['how-it-works.astro', 'disclosure.astro', 'editorial-policy.astro', 'privacy.astro', 'terms.astro'];
  for (const tf of trustFiles) {
    const p = path.resolve('src/pages', tf);
    if (fs.existsSync(p)) {
      const raw = fs.readFileSync(p, 'utf8');
      const clean = extractMdxBodyText(raw);
      items.push({
        id: `trust/${tf}`,
        pageType: 'trust',
        filePath: p,
        shingles: get5WordShingles(clean),
        rawText: clean,
      });
    }
  }

  return items;
}

export function checkSimilarity(threshold = 0.30, strict = false) {
  const items = getAllMdxContentItems();

  // Group by pageType
  const groups: Record<string, ContentItem[]> = {};
  for (const item of items) {
    if (!groups[item.pageType]) groups[item.pageType] = [];
    groups[item.pageType].push(item);
  }

  const comparisons: Array<{
    pageType: string;
    urlA: string;
    urlB: string;
    similarity: number;
    flagged: boolean;
  }> = [];

  let flaggedCount = 0;

  for (const [pageType, list] of Object.entries(groups)) {
    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        const sim = jaccardSimilarity(list[i].shingles, list[j].shingles);
        const flagged = sim > threshold;
        if (flagged) flaggedCount++;

        comparisons.push({
          pageType,
          urlA: list[i].id,
          urlB: list[j].id,
          similarity: Number(sim.toFixed(4)),
          flagged,
        });
      }
    }
  }

  const reportsDir = path.resolve('qa/reports');
  if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });
  fs.writeFileSync(
    path.join(reportsDir, 'similarity.json'),
    JSON.stringify(
      {
        totalComparisons: comparisons.length,
        flaggedCount,
        threshold,
        flaggedPairs: comparisons.filter((c) => c.flagged).slice(0, 100),
      },
      null,
      2
    )
  );

  if (strict && flaggedCount > 0) {
    console.error(`❌ Duplicate Check (MDX Body): Found ${flaggedCount} pairs exceeding similarity threshold of ${threshold * 100}%:`);
    comparisons
      .filter((c) => c.flagged)
      .slice(0, 10)
      .forEach((c) => {
        console.error(`  - [${c.pageType}] ${c.urlA} vs ${c.urlB}: ${(c.similarity * 100).toFixed(1)}%`);
      });
    process.exit(1);
  } else {
    console.log(
      `✅ Duplicate Check Passed (MDX Body): ${comparisons.length} intra-type pairs analyzed directly from src/content. ${flaggedCount} flagged at > ${threshold * 100}%.`
    );
  }
}

if (import.meta.url === `file://${process.argv[1]?.replace(/\\/g, '/')}`) {
  const strict = process.argv.includes('--strict');
  checkSimilarity(0.30, strict);
}
