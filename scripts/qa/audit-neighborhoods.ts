import fs from 'node:fs';
import path from 'node:path';
import { calculateReadability } from './readability.ts';
import { BANNED_PATTERNS } from './banned-phrases.ts';
import { get5WordShingles, jaccardSimilarity, extractMdxBodyText } from './similarity.ts';

const dir = path.resolve('src/content/neighborhoods');
const filterArg = process.argv[2] || '';
let files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx'));
if (filterArg) {
  files = files.filter(f => f.includes(filterArg));
}

console.log('=== Neighborhoods Quality Audit ===');
console.log(`Auditing ${files.length} files in src/content/neighborhoods/ (filter: "${filterArg || 'all'}")...\n`);

let anyFailed = false;

for (const file of files) {
  const raw = fs.readFileSync(path.join(dir, file), 'utf-8');
  const body = extractMdxBodyText(raw);
  const m = calculateReadability(body);

  // Check banned phrases
  const bannedFound: string[] = [];
  for (const p of BANNED_PATTERNS) {
    const r = new RegExp(p.regex.source, p.regex.flags + (p.regex.flags.includes('g') ? '' : 'g'));
    let match;
    while ((match = r.exec(raw)) !== null) {
      bannedFound.push(`"${p.phrase}" (match: "${match[0]}")`);
    }
  }

  const gradePass = m.fleschKincaidGrade <= 9.0;
  const aslPass = m.avgSentenceLength <= 20.0;
  const wordsPass = m.totalWords >= 700 && m.totalWords <= 1200;
  const bannedPass = bannedFound.length === 0;

  const status = gradePass && aslPass && wordsPass && bannedPass ? 'PASS' : 'FAIL';
  if (status === 'FAIL') anyFailed = true;

  console.log(`[${status}] ${file}:`);
  console.log(`   Grade: ${m.fleschKincaidGrade} (target <= 9.0) | ASL: ${m.avgSentenceLength} (target <= 20) | Words: ${m.totalWords} (700-1200)`);
  if (!bannedPass) {
    console.log(`   ❌ Banned words: ${bannedFound.join(', ')}`);
  }
}

console.log('\n=== Pairwise Similarity (Target <= 30%) ===');
let maxSim = 0;
let maxPair = '';
for (let i = 0; i < files.length; i++) {
  for (let j = i + 1; j < files.length; j++) {
    const f1 = files[i];
    const f2 = files[j];
    const c1 = extractMdxBodyText(fs.readFileSync(path.join(dir, f1), 'utf-8'));
    const c2 = extractMdxBodyText(fs.readFileSync(path.join(dir, f2), 'utf-8'));
    const sim = jaccardSimilarity(get5WordShingles(c1), get5WordShingles(c2));
    if (sim > maxSim) {
      maxSim = sim;
      maxPair = `${f1} vs ${f2}`;
    }
    if (sim > 0.30) {
      console.log(`⚠️ HIGH SIMILARITY: ${f1} vs ${f2} = ${(sim * 100).toFixed(1)}%`);
    }
  }
}
console.log(`Max pairwise similarity among audited files: ${(maxSim * 100).toFixed(1)}% (${maxPair})`);
