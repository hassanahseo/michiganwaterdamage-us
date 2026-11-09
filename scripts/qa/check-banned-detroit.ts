import fs from 'node:fs';
import path from 'node:path';

const banned = [
  'fleet', 'fleets',
  'crew', 'crews',
  'technician', 'technicians',
  'certification', 'certifications', 'certified',
  'licensing', 'licensed', 'license',
  'insurance claim', 'insurance claims',
  'review', 'reviews',
  'rating', 'ratings', 'rated',
  'testimonial', 'testimonials',
  'team member', 'team members',
  'office address', 'office addresses',
  'free', 'no cost',
  'arrival time', 'arrival times', '30 minutes', '60 minutes', 'within minutes'
];

const dir = path.resolve('src/content/city-services');
const detroitFiles = fs.readdirSync(dir).filter(f => f.startsWith('detroit--'));

console.log('=== Banned Words Check in Detroit City-Services ===');
let foundAny = false;
for (const file of detroitFiles) {
  const content = fs.readFileSync(path.join(dir, file), 'utf-8').toLowerCase();
  for (const b of banned) {
    if (content.includes(b)) {
      // Find line number
      const lines = content.split('\n');
      lines.forEach((line, idx) => {
        if (line.includes(b)) {
          console.log(`[BANNED] ${file}:${idx + 1} -> "${b}" in line: "${line.trim()}"`);
          foundAny = true;
        }
      });
    }
  }
}

if (!foundAny) {
  console.log('All Detroit files are 100% clean of banned phrases!');
}
