import fs from 'node:fs';
import path from 'node:path';
import { getAllMdxContentItems, type ContentItem } from './similarity.ts';

export const BANNED_PATTERNS = [
  // Arrival times & speed promises
  { phrase: '45-minute', regex: /\b45[\s-]?minutes?\b/i },
  { phrase: 'minute arrival', regex: /\bminutes?\s+arrival\b/i },
  { phrase: 'arrival time', regex: /\barrival\s+times?\b/i },

  // Fleet, crew, technicians
  { phrase: 'crew / crews', regex: /\bcrews?\b/i },
  { phrase: 'technician / technicians', regex: /\btechnicians?\b/i },
  { phrase: 'fleet / fleets', regex: /\bfleets?\b/i },
  { phrase: 'team member / team members', regex: /\bteam\s+members?\b/i },

  // Certifications & licensing claims
  { phrase: 'IICRC-certified / certified', regex: /\b(iicrc[\s-]?certified|certified|certifications?)\b/i },
  { phrase: 'licensed / licensing', regex: /\b(licensed|licensing)\b/i },

  // Ratings & reviews
  { phrase: '4.9 rating / star', regex: /\b4\.9\s*(★|star|rating)?\b/i },
  { phrase: 'customer reviews / testimonials', regex: /\b(customer\s+reviews?|our\s+reviews?|read\s+our\s+reviews?|testimonials?)\b/i },

  // Insurance billing & guarantees
  { phrase: 'direct insurance billing / claims', regex: /\b(direct\s+insurance\s+billing|insurance\s+claims?)\b/i },
  { phrase: 'guaranteed', regex: /\b(100%\s+guaranteed|satisfaction\s+guaranteed|guaranteed\s+service)\b/i },

  // Zero-free rule
  { phrase: 'free estimate', regex: /\bfree\s+estimates?\b/i },
  { phrase: 'free inspection', regex: /\bfree\s+inspections?\b/i },
  { phrase: 'free quote', regex: /\bfree\s+quotes?\b/i },
  { phrase: 'free referral', regex: /\bfree\s+referrals?\b/i },
  { phrase: 'no cost', regex: /\bno\s+cost\b/i },
  { phrase: 'free (standalone)', regex: /\bfree\b/i },

  // New banned words from SPEC section 8 & User Updates
  { phrase: 'dispatch (new banned)', regex: /\bdispatch(ed|es|ing)?\b/i },
  { phrase: 'verified (new banned)', regex: /\bverified\b/i },
  { phrase: 'vetted (new banned)', regex: /\bvetted\b/i },
  { phrase: 'screened (new banned)', regex: /\bscreened\b/i },
  { phrase: 'hydrodynamic (new banned)', regex: /\bhydrodynamic\b/i },
  { phrase: 'psychrometric (new banned)', regex: /\bpsychrometric\b/i },
  { phrase: 'master (unprovable claim)', regex: /\bmasters?\b/i },
  { phrase: 'prompt (unprovable speed)', regex: /\bprompt(ly)?\b/i },
];

export function checkBannedPhrases(strict = false) {
  const items = getAllMdxContentItems();
  const violations: Array<{ id: string; phrase: string; context: string }> = [];

  for (const item of items) {
    const text = item.rawText;

    for (const pattern of BANNED_PATTERNS) {
      // Find all matches in this item
      const regex = new RegExp(pattern.regex.source, pattern.regex.flags + (pattern.regex.flags.includes('g') ? '' : 'g'));
      let match: RegExpExecArray | null;

      while ((match = regex.exec(text)) !== null) {
        // Safe exception: If "free" is inside "freeway" or "freeze" (handled by \b boundaries)
        // Safe exception: If "licensed" or "licensing" is in trust/disclosure page where legal text is mandated
        if (pattern.phrase.includes('licensed') && item.id.includes('disclosure')) {
          continue;
        }
        // Safe exception: editorial reviews in editorial-policy
        if (pattern.phrase.includes('review') && /reviewed|reviewing|editorial\s+review/i.test(match[0])) {
          continue;
        }

        const start = Math.max(0, match.index - 35);
        const end = Math.min(text.length, match.index + match[0].length + 35);
        const context = text.substring(start, end).replace(/\s+/g, ' ').trim();

        violations.push({
          id: item.id,
          phrase: pattern.phrase,
          context: `...${context}...`,
        });
      }
    }
  }

  const reportsDir = path.resolve('qa/reports');
  if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });
  fs.writeFileSync(
    path.join(reportsDir, 'banned-phrases.json'),
    JSON.stringify({ totalScanned: items.length, violationsCount: violations.length, violations }, null, 2)
  );

  console.log(`\n--- Banned Phrases Scan (${BANNED_PATTERNS.length} patterns across ${items.length} files) ---`);
  if (violations.length > 0) {
    console.warn(`⚠️ Banned Phrases Scan: Found ${violations.length} violations across content:`);
    violations.slice(0, 15).forEach((v) => {
      console.warn(`  - [${v.id}] matched "${v.phrase}": "${v.context}"`);
    });
    if (violations.length > 15) {
      console.warn(`  ... and ${violations.length - 15} more`);
    }
    if (strict) {
      process.exit(1);
    }
  } else {
    console.log(`✅ Banned Phrases Check Passed: 0 forbidden claims found across all ${items.length} pages.`);
  }

  return violations;
}

const currentFile = path.resolve(process.argv[1] || '');
const scriptFile = path.resolve(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));

if (currentFile === scriptFile || process.argv[1]?.includes('banned-phrases')) {
  const strict = process.argv.includes('--strict');
  checkBannedPhrases(strict);
}
