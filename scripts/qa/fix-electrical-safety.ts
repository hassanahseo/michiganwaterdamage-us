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
    } else if (file.endsWith('.mdx') || file.endsWith('.md') || file.endsWith('.astro')) {
      results.push(full);
    }
  }
  return results;
}

const files = walk(path.resolve('src'));
let fixedCount = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  let original = content;

  // Pattern 1: Neighborhoods and common bullet:
  // "Disconnect electricity to affected rooms from an upper dry distribution box before touching standing water or wet baseboards."
  content = content.replace(
    /Disconnect electricity to affected rooms from an upper dry distribution box before touching standing water or wet baseboards\./g,
    'Check electrical safety first. If your breaker panel is in a wet basement, stay out. Never walk through water to reach the switch. Call your electric utility or an electrician to shut off power from outside.'
  );

  // Pattern 2: City services bullet:
  // "If standing water contacts baseboard outlets, water heaters, or basement appliances, switch off the corresponding circuit breakers from a dry location before stepping into the damp area."
  content = content.replace(
    /If standing water contacts baseboard outlets, water heaters, or basement appliances, switch off the corresponding circuit breakers from a dry location before stepping into the damp area\./g,
    'Electrical safety comes first. If the breaker panel is in a wet basement, stay out. Never walk into standing water to reach electrical switches. Call your electric utility or an electrician to cut power safely.'
  );

  // Pattern 3: Biohazard bullet:
  // "If sewage water contacts electrical extension cords, basement appliances, or outlets, switch off power from an upper dry distribution panel."
  content = content.replace(
    /If sewage water contacts electrical extension cords, basement appliances, or outlets, switch off power from an upper dry distribution panel\./g,
    'Do not enter a flooded basement to reach the electrical box. If the breaker panel is in the wet area, stay out and call your electric utility or an electrician.'
  );

  // Pattern 4: Ann Arbor / Lansing city hub openers:
  // "disconnect main electrical breakers before entering submerged areas"
  content = content.replace(
    /disconnect main electrical breakers before entering submerged areas/g,
    'never enter a flooded basement to reach the breaker box; call your utility or an electrician if the panel is in the wet area'
  );
  content = content.replace(
    /switch off main electrical breakers before entering wet areas/g,
    'never step into water to reach the electrical panel; call your utility or an electrician if the panel is in a wet basement'
  );

  // Pattern 5: Generic variations:
  // "Turn off electrical power to affected rooms from your breaker box while standing on dry flooring."
  content = content.replace(
    /Turn off electrical power to affected rooms from your breaker box while standing on dry flooring\./g,
    'If your breaker panel is in a flooded basement, stay out. Never walk through water to reach the panel. Call your electric utility or an electrician to disconnect power.'
  );

  // Pattern 6: Sterling Heights FAQ:
  content = content.replace(
    /shut down electrical power at the circuit breaker \(or switch the gas control valve to 'pilot' or 'off'\)/g,
    'switch the gas control valve to off. If the electrical panel is in a flooded basement, do not walk through water to reach it; call an electrician or your utility'
  );

  // Pattern 7: Detroit FAQ:
  content = content.replace(
    /Turn off electrical power to the basement if panel access is completely safe/g,
    'If the electrical panel is in a flooded basement, stay out and call the utility or an electrician'
  );

  // Pattern 8: Detroit water-damage FAQ:
  content = content.replace(
    /Shut down basement electrical power from a dry upper floor/g,
    'If your electrical panel is in the basement, stay out and call the utility'
  );

  // Pattern 9: Generic "turn off the circuit breaker before entering"
  content = content.replace(
    /turn off the circuit breaker before stepping into standing water/gi,
    'stay out if the breaker panel is in the wet basement; call an electrician or the utility'
  );

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf-8');
    fixedCount++;
    console.log(`[FIXED SAFETY] ${path.relative(process.cwd(), file)}`);
  }
}

console.log(`\nFixed electrical safety advice across ${fixedCount} files.`);
