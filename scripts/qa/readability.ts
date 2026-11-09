import fs from 'node:fs';
import path from 'node:path';
import { getAllMdxContentItems, type ContentItem } from './similarity';

export function countSyllables(word: string): number {
  word = word.toLowerCase().trim().replace(/[^a-z]/g, '');
  if (!word) return 0;
  if (word.length <= 3) return 1;

  if (word.endsWith('e') && !word.endsWith('le')) {
    word = word.slice(0, -1);
  }
  if (word.endsWith('ed') && !word.endsWith('ted') && !word.endsWith('ded')) {
    word = word.slice(0, -2);
  }
  if (word.endsWith('es') && !/[szx]|ch|sh/.test(word.slice(0, -2))) {
    word = word.slice(0, -2);
  }

  const vowels = word.match(/[aeiouy]+/g);
  if (!vowels) return 1;
  return Math.max(1, vowels.length);
}

export interface ReadabilityMetrics {
  totalWords: number;
  totalSentences: number;
  totalSyllables: number;
  avgSentenceLength: number;
  fleschKincaidGrade: number;
}

export function calculateReadability(text: string): ReadabilityMetrics {
  // Normalize text: strip markdown links, keep anchor text
  let clean = text.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1');
  // Strip code blocks and inline code
  clean = clean.replace(/```[\s\S]*?```/g, ' ');
  clean = clean.replace(/`[^`]*`/g, ' ');
  // Treat headings as sentence breaks
  clean = clean.replace(/^#+\s*(.*?)$/gm, '$1. ');
  // Treat list bullets as sentence breaks
  clean = clean.replace(/^[-*+]\s+/gm, '');
  clean = clean.replace(/^\d+\.\s+/gm, '');

  // Extract words
  const rawWords = clean.trim().split(/\s+/).filter((w) => /[a-zA-Z0-9]/.test(w));
  const totalWords = rawWords.length;

  if (totalWords === 0) {
    return {
      totalWords: 0,
      totalSentences: 0,
      totalSyllables: 0,
      avgSentenceLength: 0,
      fleschKincaidGrade: 0,
    };
  }

  // Count syllables
  let totalSyllables = 0;
  for (const w of rawWords) {
    totalSyllables += countSyllables(w);
  }

  // Split into sentences
  const rawSentences = clean
    .split(/(?<=[.?!])\s+|\n{2,}/)
    .map((s) => s.trim())
    .filter((s) => {
      // Must have at least 2 words to count as a genuine sentence
      const wordsInS = s.split(/\s+/).filter((w) => /[a-zA-Z]/.test(w));
      return wordsInS.length >= 2;
    });

  const totalSentences = Math.max(1, rawSentences.length);
  const avgSentenceLength = totalWords / totalSentences;

  // Standard Flesch-Kincaid formula
  const fleschKincaidGrade =
    0.39 * (totalWords / totalSentences) + 11.8 * (totalSyllables / totalWords) - 15.59;

  return {
    totalWords,
    totalSentences,
    totalSyllables,
    avgSentenceLength: Number(avgSentenceLength.toFixed(1)),
    fleschKincaidGrade: Number(fleschKincaidGrade.toFixed(1)),
  };
}

export function checkReadability(maxGrade = 9.0, maxAsl = 20.0, strict = false) {
  const items = getAllMdxContentItems();
  const results: Array<{
    id: string;
    pageType: string;
    grade: number;
    asl: number;
    words: number;
    pass: boolean;
  }> = [];

  const failures: typeof results = [];

  for (const item of items) {
    const metrics = calculateReadability(item.rawText);
    const pass = metrics.fleschKincaidGrade <= maxGrade && metrics.avgSentenceLength <= maxAsl;
    const entry = {
      id: item.id,
      pageType: item.pageType,
      grade: metrics.fleschKincaidGrade,
      asl: metrics.avgSentenceLength,
      words: metrics.totalWords,
      pass,
    };
    results.push(entry);
    if (!pass) failures.push(entry);
  }

  const reportsDir = path.resolve('qa/reports');
  if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });
  fs.writeFileSync(
    path.join(reportsDir, 'readability.json'),
    JSON.stringify(
      {
        totalScanned: items.length,
        passingCount: items.length - failures.length,
        failingCount: failures.length,
        maxGradeAllowed: maxGrade,
        maxAslAllowed: maxAsl,
        failures,
        results,
      },
      null,
      2
    )
  );

  console.log(`\n--- Readability Audit (Flesch-Kincaid Grade <= ${maxGrade}, ASL <= ${maxAsl}) ---`);
  console.log(`Scanned ${items.length} pages | Passing: ${items.length - failures.length} | Failing: ${failures.length}`);

  if (failures.length > 0) {
    console.warn(`⚠️ Found ${failures.length} pages exceeding readability targets:`);
    failures.slice(0, 15).forEach((f) => {
      console.warn(`  - [${f.id}] Grade: ${f.grade} (target <= ${maxGrade}), ASL: ${f.asl} (target <= ${maxAsl})`);
    });
    if (failures.length > 15) {
      console.warn(`  ... and ${failures.length - 15} more`);
    }
    if (strict) {
      process.exit(1);
    }
  } else {
    console.log(`✅ All ${items.length} pages meet reading grade <= ${maxGrade} and sentence length <= ${maxAsl}!`);
  }

  return { results, failures };
}

const currentFile = path.resolve(process.argv[1] || '');
const scriptFile = path.resolve(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));

if (currentFile === scriptFile || process.argv[1]?.includes('readability')) {
  const strict = process.argv.includes('--strict');
  checkReadability(9.0, 20.0, strict);
}
