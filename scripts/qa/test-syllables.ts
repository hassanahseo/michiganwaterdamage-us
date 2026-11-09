function countSyllables(word: string): number {
  word = word.toLowerCase().trim().replace(/[^a-z]/g, '');
  if (!word) return 0;
  if (word.length <= 3) return 1;

  // If ends in e but not le
  if (word.endsWith('e') && !word.endsWith('le')) {
    word = word.slice(0, -1);
  }
  // If ends in ed, remove ed unless preceded by d or t
  if (word.endsWith('ed') && !word.endsWith('ted') && !word.endsWith('ded')) {
    word = word.slice(0, -2);
  }
  // If ends in es, remove es unless preceded by s, z, ch, sh, x
  if (word.endsWith('es') && !/[szx]|ch|sh/.test(word.slice(0, -2))) {
    word = word.slice(0, -2);
  }

  const vowels = word.match(/[aeiouy]+/g);
  if (!vowels) return 1;
  return Math.max(1, vowels.length);
}

const testWords = [
  'water', 'damage', 'restoration', 'the', 'michigan', 'plumbing',
  'contractor', 'flooded', 'immediate', 'safe', 'home', 'people', 'area',
  'detroit', 'basement', 'emergency', 'electrician', 'utility', 'sewage',
  'overflow', 'pipe', 'clean', 'insulation', 'humidity'
];

for (const w of testWords) {
  console.log(`${w}: ${countSyllables(w)}`);
}
