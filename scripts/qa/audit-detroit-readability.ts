import fs from 'node:fs';
import path from 'node:path';
import { calculateReadability } from './readability.ts';

const dir = path.resolve('src/content/city-services');
const files = fs.readdirSync(dir).filter(f => f.startsWith('detroit--'));
console.log('=== Detroit Readability Metrics ===');
for (const f of files) {
  const content = fs.readFileSync(path.join(dir, f), 'utf-8');
  const m = calculateReadability(content);
  console.log(`${f}: Grade ${m.fleschKincaidGrade} (ASL: ${m.avgSentenceLength}, Words: ${m.totalWords})`);
}
