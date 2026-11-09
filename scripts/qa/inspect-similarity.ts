import { getAllMdxContentItems, jaccardSimilarity, type ContentItem } from './similarity';

const items = getAllMdxContentItems();
const groups: Record<string, ContentItem[]> = {};

for (const item of items) {
  if (!groups[item.pageType]) groups[item.pageType] = [];
  groups[item.pageType].push(item);
}

console.log('--- Pure MDX Body Intra-Type Similarity Audit (threshold = 0.30) ---');
for (const [pageType, list] of Object.entries(groups)) {
  let flagged = 0;
  let total = 0;
  let sum = 0;
  let max = 0;
  let worstPair = '';
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      total++;
      const sim = jaccardSimilarity(list[i].shingles, list[j].shingles);
      sum += sim;
      if (sim > max) {
        max = sim;
        worstPair = `${list[i].id} vs ${list[j].id}`;
      }
      if (sim > 0.30) flagged++;
    }
  }
  const avg = total > 0 ? (sum / total) * 100 : 0;
  console.log(`${pageType}: ${flagged} / ${total} flagged | max: ${(max * 100).toFixed(1)}% | avg: ${avg.toFixed(1)}% -> ${worstPair}`);
}
