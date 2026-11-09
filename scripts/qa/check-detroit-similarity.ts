import fs from 'node:fs';
import path from 'node:path';
import { get5WordShingles, jaccardSimilarity, extractMdxBodyText } from './similarity.ts';

const detroitFiles = [
  'detroit--water-damage.mdx',
  'detroit--mold-remediation.mdx',
  'detroit--fire-damage.mdx',
  'detroit--biohazard-cleanup.mdx',
  'detroit--plumbing.mdx'
];

const dir = path.resolve('src/content/city-services');
console.log('=== Detroit Intra-City Pairwise Similarity ===');
for (let i = 0; i < detroitFiles.length; i++) {
  for (let j = i + 1; j < detroitFiles.length; j++) {
    const f1 = detroitFiles[i];
    const f2 = detroitFiles[j];
    const c1 = fs.readFileSync(path.join(dir, f1), 'utf-8');
    const c2 = fs.readFileSync(path.join(dir, f2), 'utf-8');
    const t1 = extractMdxBodyText(c1);
    const t2 = extractMdxBodyText(c2);
    const sim = (jaccardSimilarity(get5WordShingles(t1), get5WordShingles(t2)) * 100).toFixed(1);
    console.log(`${f1} vs ${f2}: ${sim}%`);
  }
}

console.log('\n=== Detroit vs Other Cities Max Similarity ===');
const allFiles = fs.readdirSync(dir).filter(f => f.endsWith('.mdx'));
for (const df of detroitFiles) {
  const dc = fs.readFileSync(path.join(dir, df), 'utf-8');
  const dShingles = get5WordShingles(extractMdxBodyText(dc));
  let maxSim = 0;
  let maxOther = '';
  for (const of_ of allFiles) {
    if (detroitFiles.includes(of_)) continue;
    const oc = fs.readFileSync(path.join(dir, of_), 'utf-8');
    const sim = jaccardSimilarity(dShingles, get5WordShingles(extractMdxBodyText(oc)));
    if (sim > maxSim) {
      maxSim = sim;
      maxOther = of_;
    }
  }
  console.log(`${df} -> max vs other cities: ${(maxSim * 100).toFixed(1)}% (vs ${maxOther})`);
}

console.log('\n=== Word Counts of Detroit Pages ===');
for (const df of detroitFiles) {
  const dc = fs.readFileSync(path.join(dir, df), 'utf-8');
  const body = extractMdxBodyText(dc);
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  console.log(`${df}: ${words} words`);
}
