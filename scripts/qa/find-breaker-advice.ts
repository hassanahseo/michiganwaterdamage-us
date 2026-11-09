import fs from 'node:fs';
import path from 'node:path';

function walk(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results = results.concat(walk(full));
    } else if (file.endsWith('.mdx') || file.endsWith('.md')) {
      results.push(full);
    }
  }
  return results;
}

const files = walk(path.resolve('src/content'));
console.log(`Checking ${files.length} MDX content files for breaker/electrical advice...`);

let matches: Array<{ file: string; line: number; text: string }> = [];
for (const f of files) {
  const lines = fs.readFileSync(f, 'utf-8').split('\n');
  lines.forEach((l, idx) => {
    if (/breaker|panel|electrocution|distribution box|distribution panel/i.test(l)) {
      matches.push({ file: path.relative(process.cwd(), f), line: idx + 1, text: l.trim() });
    }
  });
}

console.log(`Found ${matches.length} matching lines across content.`);
matches.slice(0, 20).forEach(m => console.log(`[${m.file}:${m.line}] ${m.text}`));
if (matches.length > 20) console.log(`... plus ${matches.length - 20} more`);
