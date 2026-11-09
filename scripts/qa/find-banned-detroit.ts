import fs from 'node:fs';
import path from 'node:path';
import { BANNED_PATTERNS } from './banned-phrases.ts';

const dir = path.resolve('src/content/city-services');
const files = fs.readdirSync(dir).filter(f => f.startsWith('detroit--'));
console.log('=== Strict Banned Check on Detroit Files ===');
let count = 0;
for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf-8');
  for (const p of BANNED_PATTERNS) {
    const r = new RegExp(p.regex.source, p.regex.flags + (p.regex.flags.includes('g') ? '' : 'g'));
    let match;
    while ((match = r.exec(content)) !== null) {
      console.log(`[${file}] BANNED: "${p.phrase}" -> "${match[0]}"`);
      count++;
    }
  }
}
console.log(`Total banned occurrences in Detroit: ${count}`);
